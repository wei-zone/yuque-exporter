/**
 * @Author: forguo
 * @Date: 2023/2/20 17:35
 * @Description: index.js
 */
import log from './log'
import request from './request'
import ajax from './ajax'

// 使用 export{}，导出与声明分开
export { log, request, ajax }

export default {
    install(app: any) {
        app.config.globalProperties.$log = log
        app.config.globalProperties.$http = request
        app.config.globalProperties.$ajax = ajax
    }
}
