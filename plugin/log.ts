/**
 * @Author: forguo
 * @Date: 2023/1/15 15:11
 * @Description: log.ts
 */

// interface ILog {
//     capsule: (title: any, info: any, type: string) => void
//     colorful: (textArr: any[]) => void
//     default: (text: any) => void
//     primary: (text: any) => void
//     success: (text: any) => void
//     warning: (text: any) => void
//     info: (text: any) => void
//     danger: (text: any) => void
// }

export const log: any = {}

/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ default | primary | success | warning | info | danger ]
 * 同element-plus按钮主题
 * https://element-plus.org/zh-CN/guide/theming.html#%E9%80%9A%E8%BF%87-scss-%E5%8F%98%E9%87%8F
 */
function typeColor(type = 'default') {
    let color = ''
    switch (type) {
        case 'default':
            color = '#515a6e'
            break
        case 'primary':
            color = '#409eff'
            break
        case 'success':
            color = '#67c23a'
            break
        case 'warning':
            color = '#e6a23c'
            break
        case 'info':
            color = '#909399'
            break
        case 'danger':
            color = '#f56c6c'
            break
        default:
            break
    }
    return color
}

/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param {String} title title text
 * @param {String} info info text
 * @param {String} type style
 */
log.capsule = function (title: any, info: any, type = 'primary') {
    console.log(
        `%c ${title} %c ${info} %c`,
        'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
        `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
        'background:transparent'
    )
}

/**
 * @description 打印彩色文字
 */
log.colorful = function (textArr: any[]) {
    console.log(
        `%c${textArr.map(t => JSON.stringify(t.text || '')).join('%c')}`,
        ...textArr.map(t => `color: ${typeColor(t.type)};`)
    )
}

/**
 * @description 打印 default 样式的文字
 */
log.default = function (text: any) {
    log.colorful([{ text }])
}

/**
 * @description 打印 primary 样式的文字
 */
log.primary = function (text: any) {
    log.colorful([{ text, type: 'primary' }])
}

/**
 * @description 打印 success 样式的文字
 */
log.success = function (text: any) {
    log.colorful([{ text, type: 'success' }])
}

/**
 * @description 打印 warning 样式的文字
 */
log.warning = function (text: any) {
    log.colorful([{ text, type: 'warning' }])
}

/**
 * @description 打印 info 样式的文字
 */
log.info = function (text: any) {
    log.colorful([{ text, type: 'info' }])
}

/**
 * @description 打印 danger 样式的文字
 */
log.danger = function (text: any) {
    log.colorful([{ text, type: 'danger' }])
}

export default log
