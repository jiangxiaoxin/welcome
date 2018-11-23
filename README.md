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

中间件可以在`nuxt.config.js`里配置，配置了就是所有的路由（也就是所有的page）都会生效。也可以在某个页面里为这个页面单独配置一个中间件，只针对此页有效的。  

添加中间价貌似并不能 hot reload，要重新启动才能生效.  

中间件可以是字符串，也可以是字符串数组。名字就是在`middleware`里创建的那些文件的名字。
