/**
 * @Author: forguo
 * @Date: 2023/3/14 20:24
 * @Description: export.ts
 */
import { defineEventHandler, getHeaders, getQuery, RequestHeaders, sendStream } from 'h3'
import yaml from 'yaml'
import JSZip from 'jszip'
import dayjs from 'dayjs'
import { AxiosResponse } from 'axios'
import request from '../utils/request'
import { getImgData, listTransferTree, matchImg } from '~/server/utils'
import { IBookCatalog, IDocMap } from '~/types'

/**
 * @desc 获取知识库所有文档
 * @param namespace
 * @param headers
 */
const getDocList = async (namespace: any, headers: RequestHeaders): Promise<any> => {
    // 有知识库名称，获取对应详情数据
    const { data } = await request({
        headers,
        url: `/repos/${namespace}`,
        method: 'get'
    })
    // 目录列表转成树
    const docList = yaml.parse(data.toc_yml).filter((item: IBookCatalog) => item.type !== 'META')
    // 目录列表转成树
    const docTree = listTransferTree(docList, '')
    return {
        docList: docList.filter((item: IBookCatalog) => !!item.url),
        docTree,
        repoName: data.name
    }
}

/**
 * @desc 获取所有文档内容
 * @param namespace
 * @param docs
 * @param headers
 * @return {Promise<{repoName: string, docMap: T}>}
 */
const getDocsBody = async (namespace: any, docs: IBookCatalog[], headers: RequestHeaders) => {
    try {
        // 所有文档的请求
        const requests = docs
            .filter((item: IBookCatalog) => item.type === 'DOC' && !!item.url)
            .map((item: IBookCatalog) => {
                return request(`/repos/${namespace}/docs/${item.url}`, {
                    headers
                })
            })
        const res = await Promise.all(requests)
        const docMap: IDocMap = (res || []).reduce((sum, item: AxiosResponse) => {
            const { body, title, id, slug } = item.data
            // toDo 文档内容处理 <a name=""></a>
            // /\<a name=\".*\"\>/gi, '\n'
            const doc = {
                [slug]: {
                    id,
                    body,
                    title
                }
            }
            return {
                ...sum,
                ...doc
            }
        }, {})
        return {
            docMap
        }
    } catch (e) {
        console.log('getDocsBody.e', 'e')
        throw e
    }
}

/**
 * @desc 生成文档压缩包
 * @param list
 * @param docMap
 * @param repoName
 * @param headers
 * @return {Promise<Buffer>}
 */
const getDocsZip = async (list: IBookCatalog[], docMap: IDocMap, repoName: string, headers: RequestHeaders) => {
    try {
        // jszip初始化
        const zip = new JSZip()
        // 创建根目录
        const folder = zip.folder(repoName)
        await fileZip(folder, list, docMap, headers)
        // 生成压缩内容/必须是generateNodeStream
        return await zip.generateNodeStream({
            type: 'nodebuffer', // nodejs用
            streamFiles: true
        })
    } catch (e) {
        console.log('zipBook.e', e)
        throw e
    }
}

/**
 * @desc 压缩文件并导出
 * @param zip
 * @param items
 * @param docMap
 * @param headers
 * @return {Promise<void>}
 */
const fileZip = async (zip: any, items: IBookCatalog[], docMap: any, headers: RequestHeaders) => {
    for (const item of items || []) {
        const { title, url, type } = item
        // 文档类型节点，有URL
        if (type === 'DOC' && !!url) {
            // 根据URL获取文章内容
            const body = docMap[url]?.body
            if (body) {
                try {
                    const realBody = await getDocAssets(zip, body, title, headers)
                    // 保存markdown
                    zip.file(`${title}.md`, realBody)
                } catch (e) {
                    console.log('zipFile.e', e)
                    throw e
                }
            } else {
                zip.file(`${title}.md`, `## ${title}`)
                // console.log(docMap[url]?.body || title)
            }
        }
        // 递归进行文件压缩
        if (item.items && item.items.length) {
            // 创建子文件夹
            const folder = zip.folder(title)
            await fileZip(folder, item.items, docMap, headers)
        }
    }
}

/**
 * 获取文档图片等静态资源
 * @param zip
 * @param body
 * @param title
 * @param headers
 */
const getDocAssets = async (zip: any, body: string, title: any, headers: RequestHeaders) => {
    let realBody = body
    // 匹配markdown中所有的语雀图片cdn地址
    const images = matchImg(body)
    if (!images || !images.length) {
        // 没有图片
        return realBody
    }
    for (const src of images || []) {
        // 替换![]()，拿到图片地址
        const realImgSrc = src.replace(/((!\[.*?\])|\(|\))/g, '')
        // 匹配图片名称
        const fileName = realImgSrc.match(/\/([\w-]+\.(?:png|jpe?g|gif|svg|webp))/i)
        // toDo ?=和?:的区别
        // 获取图片base64，并保存图片
        if (fileName) {
            const imgData = await getImgData(realImgSrc, headers)
            const imgName = `${title}-${fileName[1]}`
            zip.file(imgName, imgData, { base64: true })
            // 替换原有cdn地址为本地地址
            realBody = realBody.replace(realImgSrc, `${imgName}`)
        }
    }
    return realBody
}

// 导出文档
const exportDocs = async (namespace: any, headers: RequestHeaders) => {
    try {
        const { docList, docTree, repoName } = await getDocList(namespace, headers)
        const { docMap } = await getDocsBody(namespace, docList, headers)
        const content = await getDocsZip(docTree || [], docMap, repoName, headers)
        // 将打包的内容写入 当前目录下的 result.zip中
        // fs.writeFileSync(path.join(`${repoName}.zip`), content, 'utf-8')
        return {
            content,
            repoName
        }
    } catch (e) {
        console.log('exportDocs.e', e)
        throw e
    }
}

export default defineEventHandler(async event => {
    try {
        const headers: RequestHeaders = getHeaders(event)
        // url知识库路径
        const { namespace } = getQuery(event)
        if (!namespace) {
            return {
                code: 500,
                message: 'namespace不能为空',
                time: Date.now()
            }
        } else {
            const { content, repoName } = await exportDocs(namespace, headers)
            // // 创建一个 PassThrough 流
            // const stream = new PassThrough()
            // // 将 JSZip 实例生成的文件流写入到 PassThrough 流中
            // content.pipe(stream)
            // // 设置响应头
            // event.node.res.setHeader('Content-Type', 'application/zip')
            // const fileName = encodeURIComponent(`${repoName}.${dayjs().format('YYYY.MM.DD')}.zip`)
            // event.node.res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`)
            // // 发送 PassThrough 流到响应中
            // event.node.res.writeHead(200)
            // stream.on('data', chunk => {
            //     event.node.res.write(chunk)
            // })
            // stream.on('end', () => {
            //     event.node.res.end()
            // })
            const fileName = encodeURIComponent(`${repoName}.${dayjs().format('YYYY.MM.DD')}.zip`)
            // 添加响应头，文件名信息
            event.node.res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`)
            return sendStream(event, content)
        }
    } catch (e: any) {
        return {
            code: e?.response?.status || e?.status || e?.statusCode || 500,
            data: e || e,
            message:
                e?.response?.data?.message || e?.response?.message || e.message || e.statusText || '服务异常，请重试',
            time: Date.now()
        }
    }
})
