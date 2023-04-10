/**
 * @Author: forguo
 * @Date: 2023/3/29 09:10
 * @Description: utils.js
 */
import { RequestHeaders } from 'h3'
import axios from 'axios'
import { IBookCatalog } from '~/types'
// 文档库路径
const docPath = '/docs'

// markdown中语雀图片正则
const imgReg = /!\[.*?\]\((https:\/\/cdn.*?)\)/g

/**
 * @desc 匹配目标字符串中的图片链接
 * @param target
 */
const matchImg = function (target: string) {
    return target.match(imgReg)
}

/**
 * @desc 列表转树结构
 * @param list
 * @param parentUuid
 * @param link
 **/
const listTransferTree = (list: IBookCatalog[], parentUuid: string | number, link?: string) => {
    const res: IBookCatalog[] = []
    for (const item of list) {
        if (item.parent_uuid === parentUuid) {
            const children: any = listTransferTree(list, item?.uuid || '', `${link || ''}/${item.title}`)
            if (children.length) {
                item.items = children
                item.collapsed = false
            } else {
                item.link = `${docPath}${link || ''}/${item.title}`
                if (!parentUuid) {
                    item.items = []
                }
            }
            res.push({
                id: item.id,
                type: item.type,
                title: item.title,
                text: item.title,
                url: item.url || item.uuid,
                link: item.link,
                collapsed: item.collapsed,
                items: item.items
            })
        }
    }
    return res
}

/**
 * 获取图片base64
 */
const getImgData = async function (src: string, apiHeaders: RequestHeaders) {
    try {
        const headers: any = {
            'x-auth-token': apiHeaders['x-auth-token'],
            'user-agent': apiHeaders['user-agent']
        }
        const res: any = await axios.get(src, {
            responseType: 'arraybuffer',
            headers
        })
        // 防止频繁请求
        return new Promise(resolve => {
            setTimeout(() => {
                const base64Image: any = Buffer.from(res?.data, 'binary').toString('base64')
                resolve(base64Image)
            }, 300)
        })
    } catch (e) {
        console.log('getImage.e', e)
        throw e
    }
}

export { listTransferTree, matchImg, getImgData }
