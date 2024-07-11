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
   具体细节:
   (1) 前后端token通过session-cookie的方式进行传递
   (2) token仍然需要进行加密处理, 目前koa-session据是通过base64编码的方式进行的.
   (3) 服务端从请求头里的cookie中拿到token进行验证.
   为什么要用session-cookie的形式将token包一层进行传递呢????
   (1) nuxt服务端渲染的必然结果, 服务端无法获取到localStorage和sessionStorage的数据, 所以不能将token存在这里, 其次如果用cookie形式, 那么cookie必然不能设置httpOnly为true, 这样客户端就只能开放cookie, 从安全
   角度而言有隐患, 比如跨站脚本攻击, 而session-cookie的方式可以设置cookie一系列安全策略, 大大增加了token防篡取的概率, 另外每次客户端端请求将token放在请求头的cookie中的形式, 以https的角度会对请求头数据进行加密, 更加安全.
   (2) 如果解决刷新后token不丢失的问题, 那么token必然存在客户端, 这样可以脱离客户端维护token, 完全由服务端和浏览器进行维护.
一、以上第一条不是最优解决方案, 留作学习记录, 最终nuxt登陆方式如下:
   前后端仍然以jwt的方式进行通信, 后端来维护token, 前端借助nuxt-session-utils模块插件将token缓存在session中, 实质是在登录接口后将获取到的token存在session中, 此时调用自定义后端接口并调用相应session(set)api进行设置,
   随后会通过http方式自动将token存在cookie中, api接口钩子函数会获取当前session中存储的token, 如果有就赋值到请求头中, 如果没有就调用后端api, 前端传递到空token后端报401后重新跳转到登陆页登录.
   路由中间件也是每次都获取当前存储到session, 看是否可以获取到存储token, 没有则重定向到登陆页面.
   此方案可以解决本地删除cookie方式, 如果删除后不刷新, 那么就有后端控制token的时效性, 如果刷新, 那么前端会走路由以及接口中间件, 查看session中是否可以拿到token.

2. 对$fetch(客户端获取api), UseFetch(useAsyncData+$fetch服务端获取api)进行二次封装. [可以考虑用axios作为替换方案]
3. 引入pinia来管理全局的状态, useState可作为局部工具或小项目使用.
4. 因为nuxt是服务端渲染的项目, 所以使用的api会优先在服务端执行, 再在客户端执行, 注意api的兼容性.
5. pulgins可以注册全局的组件, 可以注册全局的api进行封装, 使得在组件中进行无缝使用.
6. 对于刷新后需要获取的缓存数据, 分为两个方向, 一是将数据存储在服务端, 刷新的时候通过api获取(主要为了服务端渲染), 二是, 客户端组件的缓存数据可以放在本地存储中.
7. [结论]可以通过useAsyncData+$fetch来封装api, 既可以客户端使用, 也可以服务端使用, 还可以配置useFetch的options.
8. api的拦截器在defaultFetchOptions中暴露request和response的钩子函数, 可以用来处理401等情况
9. 服务端请求的api不会在浏览器的network显示, 如果仅仅只是在服务端请求接口, 那么要添加process.server条件进行判断, 防止客户端重复请求
10. server端与client端数据无法共享问题, 使得在server端获取的token无法向client端传递, 没法通过是否有token做client路由导航(token失效校验)
    路由鉴权问题: 前端在登陆成功后将pinia中的isLoinged状态设置为true, 并在pinia中使用cookie存储, 不设置httponly, 客户端可以通过useCookie()钩子进行获取, cookie的有效期与服务端保持一致, 这样可以在客户端拿到用户登陆的状态,
    以此来进行路由鉴权问题.
    如果用户手动删除本地cookie(自己存的登陆状态), 那么前端会重新跳转到登陆页面, 重新登陆时后端会将原来的token置为失效, 并生成一个新的token放在session中, 并重新设置新的token的过期时间.
    如果用户手动删除本地cookie(服务端通过session下发的), 那么再次请求接口服务端会返回401状态的token无效的状态码, 前端再次跳转到登陆页面, 并将本地的cookie进行删除.

```

```bash
1. 登陆token维护+是否登陆页面路由鉴权已完成.
2. api接口抽离已完成.
3. 环境变量切环境已完成.
4. pinia已集成. 在app.vue中每次刷新重新从后台获取数据并存储在pinia中.
```
