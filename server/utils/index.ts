/**
 * @Author: forguo
 * @Date: 2023/3/29 09:10
 * @Description: utils.js
 */
import { RequestHeaders } from 'h3'
import axios from 'axios'
// 文档库路径
const docPath = '/docs'

// markdown中语雀图片正则
const imgReg = /!\[.*?\]\((https:\/\/cdn.*?)\)/g

export interface Tree {
    type: number | string
    title: number | string
    uuid: number | string
    url?: number | string
    doc_id?: number | string
    level?: number | string
    id?: number | string
    open_window?: number | string
    visible?: number | string
    parent_uuid?: string
    child_uuid?: string
    prev_uuid?: string
    sibling_uuid?: number | string
    text?: number | string
    collapsed?: boolean
    link?: string
    items?: Tree[]
}

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
const listTransferTree = (list: Tree[], parentUuid: string | number, link?: string) => {
    const res: Tree[] = []
    for (const item of list) {
        if (item.parent_uuid === parentUuid) {
            const children: any = listTransferTree(list, item.uuid, `${link || ''}/${item.title}`)
            if (children.length) {
                item.items = children
                item.collapsed = false
            } else {
                item.link = `${docPath}${link || ''}/${item.title}`
                if (!parentUuid) {
                    item.items = []
                }
            }
            item.url = item.url || item.uuid
            item.text = item.title
            delete item.level
            delete item.doc_id
            delete item.open_window
            delete item.visible
            delete item.prev_uuid
            delete item.child_uuid
            delete item.sibling_uuid
            res.push(item)
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
        const base64Image: any = Buffer.from(res?.data, 'binary').toString('base64')
        return base64Image
    } catch (e) {
        console.log('getImage.e', e)
        throw e
    }
}

export { listTransferTree, matchImg, getImgData }
