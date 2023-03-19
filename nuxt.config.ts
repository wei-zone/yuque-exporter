// https://nuxt.com/docs/api/configuration/nuxt-config

import eslint from 'vite-plugin-eslint'
export default defineNuxtConfig({
    typescript: {
        typeCheck: true
    },
    vite: {
        plugins: [eslint()]
    },
    modules: ['@element-plus/nuxt'],
    elementPlus: {},
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: '语雀批量导出',
            meta: [
                { charset: 'utf-8' },
                { name: 'author', content: '魏国, forguo, wforguo' },
                { name: 'baidu-site-verification', content: 'code-bakUos2v8l' },
                { name: 'google-site-verification', content: '9aVJNYlDCl0rCI1akpdSqg9Xwr47KJrVWSXktSsfwKE' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: '语雀，语雀文档导出，语雀文档批量导出，语雀批量导出，wforguo，forguo'
                },
                {
                    name: 'keywords',
                    content: '语雀|语雀文档导出|语雀文档批量导出|语雀批量导出|wforguo|forguo'
                }
            ],
            script: [
                {
                    src: 'https://hm.baidu.com/hm.js?2788f1f4f01e060d6d892f4bbd5b74d4'
                }
            ]
        }
    }
})