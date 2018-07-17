# mpsudoku469

> A Mpvue project

## Build Setup

``` bash
# 安装依赖（注意查看package.json里面模块的安装版本号）
npm install

# 小程序运行
npm run dev

# H5运行
npm run devH5

# 小程序打包（打包到dist目录)
npm run build

# H5打包（打包到distH5目录)
npm run buildH5

```


博客详细说明 https://blog.csdn.net/aimee1608/article/details/80757077

## 一、mpvue只打包小程序
通过mpvue 官方文档 构建项目

在自动生成的配置文件及目录的情况下 正常开发小程序业务
以数独游戏为例 分为首页、游戏页（四宫格、六宫格、九宫格）、游戏结果页这三个页面

注意（遇到的坑）：

mpvue 开发小程序中，不同路由使用同一公共组件会导致数据不更改的情况，查询mpvue官网及论坛，不支持动态组件，所以改变之前开发思路，不同宫格各一个路由，使用同一组件，通过路由地址来判断，表示切换时，数据不更新，改成了使用同一路由，不引用动态组件，通过url参数区分，ok了

url 路由参数通过 this.root.mp.query获取，并且在page onLoad 时候传递的 options，即mounted生命函数中能获取

之前的this.router.push改成小程序支持的wx.navigateTo(url)，this.router.replace 改成 wx.reLaunch({ url })，其他相关的api 均改成对应的微信小程序的api

引用图片路径时，微信小程序中不支持在template中使用require请求图片资源，静态请求src可以使用../../../static/img/或者 /static/img/引用根目录图片，动态引用src 时，使用 /static/img/，在同时能兼容H5的时候，可使用变量+局部路径来实现，如小程序能编译 /static/img/，而H5能编译 static/img/

vuex 的使用，官方给的demo是pages 文件每个page页面各一个store.js储存数据；可以直接挂到Vue原型上，在入口文件main.js中：
import store from ‘./store’
Vue.prototype.$store = store

## 二、添加打包成H5配置
### 安装
安装对应的module vue 、vuex、vue-loader、vue-style-loader、vue-template-compiler、webpack-dev-server等
具体配置文件可查看package.json
``` bash
{
  "name": "wxH5sudoku469",
  "version": "1.0.0",
  "description": "A Mpvue project",
  "author": "aimee",
  "private": true,
  "scripts": {
    "dev": "node build/dev-server.js",
    "start": "node build/dev-server.js",
    "build": "node build/build.js",
    "lint": "eslint --ext .js,.vue src",
    "devH5": "webpack-dev-server --inline --progress --config buildH5/webpack.devH5.conf.js",
    "all": "npm run dev && npm run devH5",
    "buildH5": "node buildH5/build.js"
  },
  "dependencies": {
    "mpvue": "^1.0.11",
    "vue": "^2.5.16",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "autoprefixer": "^8.6.3",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chalk": "^2.4.0",
    "clean-webpack-plugin": "^0.1.19",
    "connect-history-api-fallback": "^1.3.0",
    "copy-webpack-plugin": "^4.5.1",
    "css-loader": "^0.28.11",
    "cssnano": "^3.10.0",
    "eslint": "^4.19.1",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^2.0.0",
    "eslint-plugin-html": "^4.0.3",
    "eslint-plugin-import": "^2.11.0",
    "eslint-plugin-node": "^6.0.1",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.16.3",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.11",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "glob": "^7.1.2",
    "html-webpack-plugin": "^3.2.0",
    "http-proxy-middleware": "^0.18.0",
    "less": "^3.0.4",
    "less-loader": "^4.1.0",
    "mpvue-loader": "^1.0.13",
    "mpvue-template-compiler": "^1.0.11",
    "mpvue-webpack-target": "^1.0.0",
    "node-notifier": "^5.2.1",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^2.0.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.1.0",
    "postcss-loader": "^2.1.4",
    "postcss-mpvue-wxss": "^1.0.0",
    "postcss-url": "^7.3.2",
    "prettier": "~1.12.1",
    "px2rpx-loader": "^0.1.10",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.8.1",
    "uglifyjs-webpack-plugin": "^1.2.5",
    "url-loader": "^1.0.1",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^4.1.0",
    "vue-template-compiler": "^2.5.16",
    "webpack": "^3.11.0",
    "webpack-bundle-analyzer": "^2.2.1",
    "webpack-cli": "^3.0.8",
    "webpack-dev-middleware-hard-disk": "^1.12.0",
    "webpack-dev-server": "^3.0.0",
    "webpack-merge": "^4.1.0",
    "webpack-mpvue-asset-plugin": "^0.0.2"
  },
  "engines": {
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```

### 配置：
在原有的基础上添加webpack 开发打包buildH5 和 configH5配置文件 ,以及对应的路由配置文件router ，AppH5.vue入口vue 文件，mainH5.js 编译入口文件，以及对H5和wx 分别封装的方法及api
在configH5中配置build 输出的文件目录为distH5 :

``` bash
index: path.resolve(__dirname, ‘../distH5/index.html’)
assetsRoot: path.resolve(__dirname, ‘../distH5’)
在package.json 文件中配置编译和打包文件的命令执行语句
“devH5”: “webpack-dev-server –inline –progress –config buildH5/webpack.devH5.conf.js”,
“all”: “npm run dev && npm run devH5”,
“buildH5”: “node buildH5/build.js”
```

### 注意配置文件
.postcssrc.js 此条为编译微信的时候需用配置 “postcss-mpvue-wxss”: {}，转化成wxss有特别棒的效果，可以优化css的样式，编译成wxss可识别的样式代码，转化效果

添加”postcss-mpvue-wxss”: {} 编译后效果


解决方法：转化成H5时不需要”postcss-mpvue-wxss”: {}，否则可能会造成页面样式混乱，可以直接注释掉此行，或者在打包配置文件里面取消postcss 插件编译的配置

打包成H5的配置内容
``` bash
AppH5.vue 添加入口设置
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
```

main.js 和 mainH5.js 通过Vue.mixin分别配置微信小程序和H5的相同功能但不同api 的方法及变量

Api 中的两个文件同上的功能，对于同一个功能对微信小程序和Vue 分别封装对应的方法

### 运行打包
接下来 npm run devH5 就是H5的页面啦，可以用浏览器打开，npm run dev 就是小程序代码，可以用微信开发者工具浏览，build 打包同上

### 最终目录结构

.
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── buildH5
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.baseH5.conf.js
│   ├── webpack.devH5.conf.js
│   └── webpack.prodH5.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── configH5
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   ├── components
│   │   ├── game$9040bfce.wxml
│   │   ├── home$b6307674.wxml
│   │   └── result$6fbd6f84.wxml
│   ├── copy-asset
│   │   └── static
│   │       └── img
│   │           ├── again.png
│   │           ├── avg.png
│   │           ├── back.png
│   │           ├── bg.png
│   │           ├── bg2.png
│   │           ├── board_4.png
│   │           ├── board_6.png
│   │           ├── board_9.png
│   │           ├── btn1.png
│   │           ├── btn2.png
│   │           ├── btn3.png
│   │           ├── btn4.png
│   │           ├── btn5.png
│   │           ├── btn6.png
│   │           ├── btn7.png
│   │           ├── btn8.png
│   │           ├── btn9.png
│   │           ├── count.png
│   │           ├── enter_4.png
│   │           ├── enter_6.png
│   │           ├── enter_9.png
│   │           ├── error.png
│   │           ├── great.png
│   │           ├── greaticon.png
│   │           ├── lighted_1.png
│   │           ├── lighted_2.png
│   │           ├── lighted_3.png
│   │           ├── logo.png
│   │           ├── pass.png
│   │           ├── passicon.png
│   │           ├── perfect.png
│   │           ├── perfecticon.png
│   │           ├── restart2.png
│   │           ├── resultKuang.png
│   │           └── time.png
│   ├── pages
│   │   ├── game
│   │   │   ├── main.js
│   │   │   ├── main.wxml
│   │   │   └── main.wxss
│   │   ├── home
│   │   │   ├── main.js
│   │   │   ├── main.wxml
│   │   │   └── main.wxss
│   │   └── result
│   │       ├── main.js
│   │       ├── main.wxml
│   │       └── main.wxss
│   └── static
│       ├── css
│       │   ├── app.wxss
│       │   └── pages
│       │       ├── game
│       │       │   └── main.wxss
│       │       ├── home
│       │       │   └── main.wxss
│       │       └── result
│       │           └── main.wxss
│       ├── img
│       │   ├── 1.png
│       │   ├── 2.png
│       │   ├── 3.png
│       │   ├── 4.png
│       │   ├── 5.png
│       │   ├── 6.png
│       │   ├── 7.png
│       │   ├── 8.png
│       │   ├── 9.png
│       │   ├── again.png
│       │   ├── avg.png
│       │   ├── back.png
│       │   ├── base.png
│       │   ├── bg.png
│       │   ├── bg2.png
│       │   ├── blank.png
│       │   ├── blank1.png
│       │   ├── blank2.png
│       │   ├── blank3.png
│       │   ├── blank4.png
│       │   ├── blank5.png
│       │   ├── blank6.png
│       │   ├── blank7.png
│       │   ├── blank8.png
│       │   ├── blank9.png
│       │   ├── board_4.png
│       │   ├── board_6.png
│       │   ├── board_9.png
│       │   ├── btn1.png
│       │   ├── btn2.png
│       │   ├── btn3.png
│       │   ├── btn4.png
│       │   ├── btn5.png
│       │   ├── btn6.png
│       │   ├── btn7.png
│       │   ├── btn8.png
│       │   ├── btn9.png
│       │   ├── count.png
│       │   ├── enter_4.png
│       │   ├── enter_6.png
│       │   ├── enter_9.png
│       │   ├── error.png
│       │   ├── great.png
│       │   ├── greaticon.png
│       │   ├── lighted_1.png
│       │   ├── lighted_2.png
│       │   ├── lighted_3.png
│       │   ├── login.png
│       │   ├── logo.png
│       │   ├── pass.png
│       │   ├── passicon.png
│       │   ├── perfect.png
│       │   ├── perfecticon.png
│       │   ├── restart.png
│       │   ├── restart2.png
│       │   ├── result.png
│       │   ├── resultKuang.png
│       │   ├── time.png
│       │   └── undo.png
│       └── js
│           ├── app.js
│           ├── manifest.js
│           ├── pages
│           │   ├── game
│           │   │   └── main.js
│           │   ├── home
│           │   │   └── main.js
│           │   └── result
│           │       └── main.js
│           └── vendor.js
├── distH5
│   ├── index.html
│   └── static
│       ├── css
│       │   └── app.css
│       ├── img
│       │   ├── 1.png
│       │   ├── 2.png
│       │   ├── 3.png
│       │   ├── 4.png
│       │   ├── 5.png
│       │   ├── 6.png
│       │   ├── 7.png
│       │   ├── 8.png
│       │   ├── 9.png
│       │   ├── again.png
│       │   ├── avg.png
│       │   ├── back.png
│       │   ├── base.png
│       │   ├── bg.png
│       │   ├── bg2.png
│       │   ├── blank.png
│       │   ├── blank1.png
│       │   ├── blank2.png
│       │   ├── blank3.png
│       │   ├── blank4.png
│       │   ├── blank5.png
│       │   ├── blank6.png
│       │   ├── blank7.png
│       │   ├── blank8.png
│       │   ├── blank9.png
│       │   ├── board_4.png
│       │   ├── board_6.png
│       │   ├── board_9.png
│       │   ├── btn1.png
│       │   ├── btn2.png
│       │   ├── btn3.png
│       │   ├── btn4.png
│       │   ├── btn5.png
│       │   ├── btn6.png
│       │   ├── btn7.png
│       │   ├── btn8.png
│       │   ├── btn9.png
│       │   ├── count.png
│       │   ├── enter_4.png
│       │   ├── enter_6.png
│       │   ├── enter_9.png
│       │   ├── error.png
│       │   ├── great.png
│       │   ├── greaticon.png
│       │   ├── lighted_1.png
│       │   ├── lighted_2.png
│       │   ├── lighted_3.png
│       │   ├── login.png
│       │   ├── logo.png
│       │   ├── pass.png
│       │   ├── passicon.png
│       │   ├── perfect.png
│       │   ├── perfecticon.png
│       │   ├── restart.png
│       │   ├── restart2.png
│       │   ├── result.png
│       │   ├── resultKuang.png
│       │   ├── time.png
│       │   └── undo.png
│       └── js
│           ├── app.js
│           ├── manifest.js
│           └── vendor.js
├── index.html
├── package-lock.json
├── package.json
├── project.config.json
├── src
│   ├── App.vue
│   ├── AppH5.vue
│   ├── api
│   │   ├── httpService.js
│   │   └── wxService.js
│   ├── assets
│   │   └── logo.png
│   ├── components      未用到
│   │   ├── card.vue
│   │   └── game.vue
│   ├── main.js
│   ├── mainH5.js
│   ├── pages
│   │   ├── game
│   │   │   ├── index.vue
│   │   │   └── main.js
│   │   ├── home
│   │   │   ├── index.vue
│   │   │   └── main.js
│   │   └── result
│   │       ├── index.vue
│   │       └── main.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   └── utils
│       └── sdpro.js
└── static
    └── img
        ├── 1.png
        ├── 2.png
        ├── 3.png
        ├── 4.png
        ├── 5.png
        ├── 6.png
        ├── 7.png
        ├── 8.png
        ├── 9.png
        ├── again.png
        ├── avg.png
        ├── back.png
        ├── base.png
        ├── bg.png
        ├── bg2.png
        ├── blank.png
        ├── blank1.png
        ├── blank2.png
        ├── blank3.png
        ├── blank4.png
        ├── blank5.png
        ├── blank6.png
        ├── blank7.png
        ├── blank8.png
        ├── blank9.png
        ├── board_4.png
        ├── board_6.png
        ├── board_9.png
        ├── btn1.png
        ├── btn2.png
        ├── btn3.png
        ├── btn4.png
        ├── btn5.png
        ├── btn6.png
        ├── btn7.png
        ├── btn8.png
        ├── btn9.png
        ├── count.png
        ├── enter_4.png
        ├── enter_6.png
        ├── enter_9.png
        ├── error.png
        ├── great.png
        ├── greaticon.png
        ├── lighted_1.png
        ├── lighted_2.png
        ├── lighted_3.png
        ├── login.png
        ├── logo.png
        ├── pass.png
        ├── passicon.png
        ├── perfect.png
        ├── perfecticon.png
        ├── restart.png
        ├── restart2.png
        ├── result.png
        ├── resultKuang.png
        ├── time.png
        └── undo.png
