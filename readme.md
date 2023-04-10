# yuque-exporter

语雀文档批量导出

## feat

- 1、知识库目录导出`json`
- 2、知识库按目录导出所有文档【zip压缩包】
- 3、文档图片静态资源提取

## 技术栈

[Nuxt 3](https://nuxt.com/docs/getting-started/introduction) + [element-plus](https://element-plus.org/zh-CN/)

## 本地使用

### 安装依赖

```bash
# yarn
yarn install

# npm
npm install

# pnpm【推荐】
pnpm install
```

### 启动

server on [http://localhost:5001](http://localhost:5001)

```bash
npm run dev
```

### 登录

你需要去获取语雀文档的token，在登录页面填入，完成登录即可使用

[语雀token获取](https://www.yuque.com/yuque/developer/api#785a3731)

**这里token权限，勾选读权限即可，你的token只存储在浏览器cookie当中**

