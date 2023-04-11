import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/benbben/forguo/yuque-exporter/node_modules/.pnpm/registry.npmmirror.com+nuxt@3.3.3_ntigm5zxnpdibkyr63irmrr6ve/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}