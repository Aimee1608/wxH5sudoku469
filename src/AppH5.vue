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

<style lang="less">
//// "out": true
body {
    height: 100%;
    width: auto;
    // margin: 0;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%!important;
    text-size-adjust: 100%!important;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}

/******reset********/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
 caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
}
body{
  font-family:Arial,"STHeiti", Helvetica, sans-serif;
  background:#efefef;
  font-size:14px;
  color:#444!important;
  width:100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}


table{
  border-collapse:collapse;
  border-spacing:0
}
fieldset, img{
  border:0
}
legend{
  display:none
}
// address, caption, cite, code, dfn, em, strong, th, var{
//   font-style:normal;
//   font-weight:normal
// }
ol, ul{
  list-style:none
}
caption, th{
  text-align:left
}
h1, h2, h3, h4, h5, h6{
  font-size:100%;
  font-weight:normal
}
q:before, q:after{
  content:''
}
abbr, acronym{
  border:0
}
a{
     text-decoration:none;
}
html{-webkit-text-size-adjust:none;width:100%;height:100% } /*????iphone??safari????????????*/
input[type="text"], input[type="button"], input[type="submit"], input[type="search"]{
  -webkit-appearance:none;
  border-radius:0;
}

html, body {
    height: 100%;
    width: auto;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%!important;
    text-size-adjust: 100%!important;
}
.bg{
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200/7.5vw 10/7.5vw;
  box-sizing: border-box;
  width: 100%;
}

.wrap{
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 219/7.5vw;
  left: 35/7.5vw;
}
.item{
  width: 68/7.5vw;
  height: 68/7.5vw;
  margin:0 5/7.5vw 2/7.5vw 0;
  z-index: 10;
  box-sizing: border-box;
  position: relative;
}
.item img{
  width: 100%;
  height: 100%;
}
.item .lighted{
  position: absolute;
  width: 72/7.5vw;
  height: 72/7.5vw;
  top: -3/7.5vw;
  left: -1/7.5vw;
  z-index: 11;
}
.item.active{
  position: relative;
}

.column3{
  margin-right: 23/7.5vw;
}
.column6{
  margin-right: 23/7.5vw;
}
.mb{
  margin-bottom: 26/7.5vw;
}
.top{
  display: flex;
  flex-direction: row;
  position: absolute;
  top:36/7.5vw;
  width: 100%;
  height: 70/7.5vw;
}
.top img{
  position: absolute;
  z-index: 2;
}
.back{
  width:69/7.5vw;
  height: 71/7.5vw;
  left: 26/7.5vw;
}
.undo,.restart{
  width: 207/7.5vw;
  height:63/7.5vw;
  top: 5/7.5vw;
}
.undo{
  left: 116/7.5vw;
}
.restart{
  left: 116/7.5vw;
}
.top .base{
  width: 420/7.5vw;
  height: 70/7.5vw;
  z-index: 1;
  left:112/7.5vw;
}
.logo{
  width: 151/7.5vw;
  height: 45/7.5vw;
  right:38/7.5vw;
  top: 14/7.5vw;
}
.btnwrap{
  display: flex;
  flex-direction: row;
  margin-left: 12/7.5vw;
  position: absolute;
  bottom:129/7.5vw;
  width: 105/7.5vw;
  height:105/7.5vw;
}

.btnwrap  img.btn{
  width: 105/7.5vw;
  height:105/7.5vw;
  position: absolute;
  top: 0;
}

</style>
