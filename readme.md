# yuque-exporter

> 语雀文档批量导出

## 语雀Api

[语雀Api](https://www.yuque.com/yuque/developer/doc)

示列：获取知识列表

[https://www.yuque.com/api/v2/users/你的用户名/repos/](https://www.yuque.com/api/v2/users/forguo/repos/)

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

你需要去获取语雀文档的[token](https://www.yuque.com/yuque/developer/api#785a3731)，在登录页面填入，完成登录即可使用

[语雀token获取](https://www.yuque.com/yuque/developer/api#785a3731)

**这里token权限，勾选读权限即可，你的token只存储在浏览器cookie当中**


## nuxt3踩坑

### docker配置

- 环境变量

```dockerfile
ENV NODE_ENV=production
ENV HOST 0.0.0.0
```

需要放置在`install`之后，因为nuxt在`npm install`时会进入`postinstall`，

执行`nuxt prepare`，此时如果`NODE_ENV=production`，此时`nuxt`大概率会去`.nuxt`找，这个时候并未生成，从而报错`nuxt: not found`

放在`build`之前, `install`之后即可

![nuxt: not found](docs/nuxt-error-not-found.jpg)

### docker打包

- .output
  
`.output`不能添加在`.gitgnore`和`.dockergnore`中，
否则docker中不会打包，运行会出错，.output

- .nuxt
  
`.nuxt`也不能添加在`.gitgnore`，否则`docker`打包会找不到路由等模块，只有`NuxtWelcome`组件

- 运行时

docker容器运行成功

打开浏览器报错

![nuxt: not found](docs/nuxt-error-unavaliable.jpg)

容器中报错

vue-router找不到

![nuxt: not found](docs/nuxt-error-vue-router.jpg)

没办法，我把`Dockerfile`中原本的依赖删除又注释了，终于是可以了

```dockerfile
## 删除依赖
# RUN rm -rf node_modules
```

最终完整的`Dockerfile`配置可参考项目