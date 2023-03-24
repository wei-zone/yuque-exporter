/**
 * @Author: forguo
 * @Date: 2023/2/20 17:35
 * @Description: index.js
 */
import log from './log'
import request from './request'

// 使用 export{}，导出与声明分开
export { log, request }

export default {
    install(app: any) {
        app.config.globalProperties.$log = log
        app.config.globalProperties.$http = request
    }
}
