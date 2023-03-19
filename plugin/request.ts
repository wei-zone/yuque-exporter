/**
 * @Author: forguo
 * @Date: 2022/5/16 21:29
 * @Description: request.ts.js
 */

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
const request = axios.create({
    baseURL: 'https://www.yuque.com/api/v2/'
})

request.interceptors.request.use((config: AxiosRequestConfig | any) => {
    return config
})

request.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.status === 200) {
            return Promise.resolve(res.data)
        }
        console.log('AxiosResponse -->')
        return Promise.reject(res)
    },
    (e: AxiosError) => {
        console.log('AxiosError -->')
        console.log(e)
        return Promise.reject(e)
    }
)

export default request
