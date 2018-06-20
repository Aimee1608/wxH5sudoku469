import Vue from 'vue'
import Router from 'vue-router'
import game from '../pages/game/index.vue'
import home from '../pages/home/index.vue'
import result from '../pages/result/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    alias: '/pages/home/main'
  }, {
    path: '/game',
    name: 'game',
    component: game,
    alias: '/pages/game/main'
  }, {
    path: '/result',
    name: 'result',
    component: result,
    alias: '/pages/result/main'
  }]
})
