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

中间件会在路由发生变化时调用，那就可以用来做权限判断。在发生路由变化时，根据本地的用户记录（store/storage）判断用户是否有权进入页面。如果没权限就`redirect`到登录页。

中间件接收到的参数里有很多重要的信息。

在`layouts`文件夹里添加`error.vue`，如果找不到路由，就会跳到这里。

在`layouts`写的`vue`文件，可以被别的**页面组件**调用。如下，在`blog`组件里使用了`basic`，那`blog`的全部内容都将渲染在`basic`的`<nuxt />`标签里

```javascript
// layouts/basic.vue
<template>
  <div>
    <div>这里是导航</div>
    <nuxt/>
  </div>
</template>
```

```javascript
// pages/blog.vue
export default {
  layout: 'basic'
}
```
