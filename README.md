# Nuxt 3 Minimal Starter

nuxt3 知识摸底+架构设计

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev

```

## Production

Build the application for production:

```bash
# npm
npm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# yarn
yarn preview

```

```bash
# 总结

1. JWT 的形式, 前端将 token 存再 cookie 中(是pinia持久化), 用 RSA+AES 加密存储, 这样可以解决 token 在服务端和客户端共享的问题.[是否有更好的方式??]
   更好的方式: 就是前端不维护token, 而是让后端维护, 将token存在session中, 当客户端发请求时将token随cookie带回给客户端, 下次请求客户端自动将token放在请求头中的cookie中.
2. 对$fetch(客户端获取api), UseFetch(useAsyncData+$fetch服务端获取api)进行二次封装. [可以考虑用axios作为替换方案]
3. 引入pinia来管理全局的状态, useState可作为局部工具或小项目使用.
4. 因为nuxt是服务端渲染的项目, 所以使用的api会优先在服务端执行, 再在客户端执行, 注意api的兼容性.
5. pulgins可以注册全局的组件, 可以注册全局的api进行封装, 使得在组件中进行无缝使用.
6. 对于刷新后需要获取的缓存数据, 分为两个方向, 一是将数据存储在服务端, 刷新的时候通过api获取(主要为了服务端渲染), 二是, 客户端组件的缓存数据可以放在本地存储中.
7. [结论]可以通过useAsyncData+$fetch来封装api, 既可以客户端使用, 也可以服务端使用, 还可以配置useFetch的options.


```
