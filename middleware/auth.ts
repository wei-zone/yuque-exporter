import { defineNuxtRouteMiddleware, navigateTo, useRoute } from 'nuxt/app'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('yuque_token')
    const route = useRoute()
    if (!token.value && route.path !== 'login') {
        return navigateTo('/login')
    }
})
