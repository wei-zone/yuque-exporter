/**
 * @Author: forguo
 * @Date: 2022/5/16 21:29
 * @Description: request.ts.js
 */
import consola from 'consola'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
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
        consola.info('request.res -->', res)
        return Promise.reject(res)
    },
    (e: any) => {
        consola.error('request.e -->', e)
        return Promise.reject(e)
    }
)

export default request
