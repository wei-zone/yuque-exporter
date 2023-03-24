/**
 * @Author: forguo
 * @Date: 2023/3/14 20:24
 * @Description: repos.ts
 */
import { defineEventHandler } from 'h3'
import axios from 'axios'

export default defineEventHandler(async () => {
    try {
        const res = await axios('https://forguo.cn/app/bookList.json')
        console.log(res)
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
