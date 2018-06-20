import Vue from 'vue'
import App from './App'
import store from './store'
import wxService from './api/wxService'
import httpService from './api/httpService'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store

Vue.mixin({
  data() {
    return {
      service: '',
      router: '/',
      imgSrc: '/'
    }
  },
  methods: {
      newroot () {
          return this.$root.$mp
      },
      navigatePageTo (url) {
          wx.navigateTo({url: url})
      },
      reLaunchPageTo (url) {
          wx.reLaunch({url: url})
      }
  },
  created() {
      console.log('wx')
      this.service = wxService
  }
})

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/home/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '数独小游戏',
      navigationBarTextStyle: 'black'
    }
  }
}
