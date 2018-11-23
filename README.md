# home

> My sublime Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

在`middleware`里添加`auth.js`中间件，并在`nuxt.config.js`里启用之后，所有的路由都要经过这个中间件的处理。`generate`之后的包在`surge`部署后可以正确运行这个检测，不合适的链接会重定向
