/**
 * @Author: forguo
 * @Date: 2023/3/14 20:24
 * @Description: docs.ts
 */
import { defineEventHandler, getHeaders, getQuery } from 'h3'
import request from '../utils/request'

export default defineEventHandler(async event => {
    try {
        const headers = getHeaders(event)
        const { namespace, url } = getQuery(event)
        if (url && namespace) {
            // 文档详情
            const res = await request({
                headers,
                url: `/repos/${namespace}/docs/${url}`,
                method: 'get',
                params: {
                    /**
                     * raw=1 返回文档最原始的格式
                     * ● body - 正文 Markdown 源代码
                     * ● body_draft - 草稿 Markdown 源代码
                     */
                    raw: 1
                }
            })
            return {
                code: 200,
                data: res.data,
                message: 'ok',
                time: Date.now()
            }
        } else {
            // 知识库对应文档列表
            const res = await request({
                headers,
                url: `/repos/${namespace}/docs`,
                method: 'get'
            })
            return {
                code: 200,
                data: res.data,
                message: 'ok',
                time: Date.now()
            }
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
