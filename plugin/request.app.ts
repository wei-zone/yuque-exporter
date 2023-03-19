/**
 * @Author: forguo
 * @Date: 2022/5/16 21:29
 * @Description: request.ts.js
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { unref } from 'vue'
import { useCookie } from 'nuxt/app'

const request = axios.create({
    baseURL: '/api'
})

request.interceptors.request.use((config: AxiosRequestConfig | any) => {
    const token: any = useCookie('yuque_token')
    // 添加token
    config.headers['x-auth-token'] = unref(token)
    return config
})

request.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.status === 200 && res.data.code === 200) {
            return Promise.resolve(res.data)
        }
        console.log('request.res -->')
        console.log(res)
        ElMessage.error(res.data?.message || res.statusText || '服务异常，请重试')
        return Promise.reject(res)
    },
    (e: any) => {
        console.log('request.e -->')
        console.log(e)
        ElMessage.error(
            e?.response?.data?.message || e?.response?.message || e.message || e.statusText || '服务异常，请重试'
        )
        return Promise.reject(e)
    }
)

export default request
