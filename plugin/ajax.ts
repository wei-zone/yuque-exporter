/**
 * ajax
 */
export default (params: any) => {
    return new Promise((resolve, reject) => {
        const { method = 'get', url, data } = params
        const xhr = new XMLHttpRequest()

        xhr.open(method, url, true)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') // 简单请求
        // xhr.setRequestHeader('Authorization', 'application/json; charset=utf-8'); // 复杂请求
        xhr.onreadystatechange = function () {
            /**
             * readyState
             * 0：还没调用
             * 1：载入（正在发送）
             * 2：载入完成
             * 3：解析响应内容
             * 4：解析完成
             */
            if (xhr.readyState === 4) {
                /**
                 * http状态码
                 * 1XX 状态指示
                 * 2XX 成功返回
                 * 3XX 重定向
                 * 4XX 客户端错误
                 * 5XX 服务端错误
                 */
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.send(JSON.stringify(data) || null)
    })
}
