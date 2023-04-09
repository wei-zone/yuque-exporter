/**
 * @Author: forguo
 * @Date: 2022/5/16 21:29
 * @Description: request.ts.js
 */
import consola from 'consola'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const config: any = {
    baseURL: 'https://www.yuque.com/api/v2/'
}
const request: any = axios.create(config)

request.interceptors.request.use((config: AxiosRequestConfig | any) => {
    const headers = config.headers
    config.headers = {
        'x-auth-token': headers['x-auth-token'],
        'user-agent': headers['user-agent']
    }
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
        return Promise.reject(e)
    }
)

export default request
