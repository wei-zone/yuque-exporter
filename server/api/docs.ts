/**
 * @Author: forguo
 * @Date: 2023/3/14 20:24
 * @Description: docs.ts
 */
import { defineEventHandler, getHeaders, getQuery } from 'h3'
import { request } from '~/plugin'
export default defineEventHandler(async event => {
    try {
        const headers = getHeaders(event)
        const { namespace } = getQuery(event)
        const res = await request({
            headers: {
                'x-auth-token': headers['x-auth-token'],
                'user-agent': headers['user-agent']
            },
            url: `/repos/${namespace}/docs`,
            method: 'get'
        })
        return {
            code: 200,
            data: res.data,
            message: 'ok',
            time: Date.now()
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
