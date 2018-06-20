<template>
  <div v-if="path=='six'" class="sudoSixBox">
    <img  src="/static/img/bg2.png" class='bg'/>
    <div class="top">
      <img  @click="back" class='back' src="/static/img/back.png"/>
      <img  @click="restart" class='restart' src="/static/img/restart2.png"/>
      <img  class='logo' src="/static/img/logo.png"/>
    </div>
    <div class='wrap'>
        <div v-for="(item,index) in sdArr"  @click="signChange" :data-index="index" :data-num="item" v-if="index%10 == 1 && index<=66 && index>=11"  :class="['item', index == 31 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']">
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? '/static/img/blank.png' : able[index] ? '/static/img/blank'+item+'.png' : '/static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="/static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="/static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="/static/img/lighted_3.png"/>
        </div>
        <div v-for="(item,index) in sdArr" :data-index="index" :data-num="item" :class="['item', 'mb', index == 32 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']" @click="signChange"   v-if="index%10 == 2 && index<=66 && index>=11" >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? '/static/img/blank.png' : able[index] ? '/static/img/blank'+item+'.png' : '/static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="/static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="/static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="/static/img/lighted_3.png"/>
        </div>
        <div v-for="(item,index) in sdArr" :data-index="index" :data-num="item"  :class="['item',  index == 33 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : ''] " @click="signChange"  v-if="index %10 == 3 && index<=66 && index>=11"  >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? '/static/img/blank.png' : able[index] ? '/static/img/blank'+item+'.png' : '/static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="/static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="/static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="/static/img/lighted_3.png"/>
        </div>
        <div  v-for="(item,index) in sdArr" :data-index="index" :data-num="item" :class="['item', 'mb', index == 34 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']" @click="signChange"   v-if="index %10 == 4 && index <=66 && index >=11"  >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? '/static/img/blank.png' : able[index] ? '/static/img/blank'+item+'.png' : '/static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="/static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="/static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="/static/img/lighted_3.png"/>
        </div>
        <div  v-for="(item,index) in sdArr" :data-index="index" :data-num="item" :class="['item',  index == 35 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']" @click="signChange"   v-if="index %10 ==5 && index <=66 && index >=11"  >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? '/static/img/blank.png' : able[index] ? '/static/img/blank'+item+'.png' : '/static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="/static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="/static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="/static/img/lighted_3.png"/>
        </div>
        <div v-for="(item,index) in sdArr" :data-index="index" :data-num="item" :class="['item', index == 36 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']" @click="signChange"   v-if="index %10 == 6 && index <=66 && index >=11"  >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? '/static/img/blank.png' : able[index] ? '/static/img/blank'+item+'.png' : '/static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="/static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="/static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="/static/img/lighted_3.png"/>
        </div>
    </div>
    <div class="btnwrap">
        <img  @click="set" class='btn'  :data-index='1' src="/static/img/btn1.png"/>
        <img  @click="set" class='btn'  :data-index='2' src="/static/img/btn2.png"/>
        <img  @click="set" class='btn'  :data-index='3' src="/static/img/btn3.png"/>
        <img  @click="set" class='btn'  :data-index='4' src="/static/img/btn4.png"/>
        <img  @click="set" class='btn'  :data-index='5' src="/static/img/btn5.png"/>
        <img  @click="set" class='btn'  :data-index='6' src="/static/img/btn6.png"/>
    </div>
    <img  class="board" src="/static/img/board_6.png" mode="widthFix"/>
  </div>
  <div v-else-if="path=='four'" class="sudoFourBox">
      <!--pages/six/six.wxml-->
        <img src="/static/img/bg2.png" class='bg'/>
        <div class="top">
          <img @click="back" class='back' src="/static/img/back.png"/>
          <img @click="restart" class='restart' src="/static/img/restart2.png"/>
          <img class='logo' src="/static/img/logo.png"/>
        </div>
        <div class='wrap'>
            <div v-for="(item,index) in sdArr"  @click="signChange" :data-index="index" :data-num="item" v-if="index%10 <= 4 && index>=11 && index<=44 && index % 10 != 0"  :class="['item', (index > 20 && index <30) ? 'mb':'', index % 10 == 2 ? 'column3' : '', !item ? 'blank' : 'num', activeId == index ? 'active' : '']">
              <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? '/static/img/blank.png' : able[index] ? '/static/img/blank'+item+'.png' : '/static/img/'+item+'.png'"/>
              <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="/static/img/lighted_1.png"/>
              <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="/static/img/lighted_2.png"/>
              <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="/static/img/lighted_3.png"/>
            </div>
        </div>
        <div class="btnwrap">
            <img @click="set" class='btn'  :data-index='1' src="/static/img/btn1.png"/>
            <img @click="set" class='btn'  :data-index='2' src="/static/img/btn2.png"/>
            <img @click="set" class='btn'  :data-index='3' src="/static/img/btn3.png"/>
            <img @click="set" class='btn'  :data-index='4' src="/static/img/btn4.png"/>
          </div>
        <img class="board" src="/static/img/board_4.png" mode="widthFix"/>
  </div>
  <div v-else-if="path=='nine'" class="sudoNineBox">
      <!--nine.wxml-->
      <img src="/static/img/bg2.png" class='bg'/>
      <div class="top">
        <img @click="back" class='back' src="/static/img/back.png"/>
        <!--<img class='undo' src="/static/img/undo.png"/>-->
        <img @click="restart" class='restart' src="/static/img/restart2.png"/>
        <!--<img class='base' src="/static/img/base.png"/>-->
        <img class='logo' src="/static/img/logo.png"/>
      </div>
      <div class='wrap'>
          <div v-for="(item,index) in sdArr"  @click="signChange" :data-index="index" :data-num="item" v-if="index >=11 && index <=99 && index % 10 != 0"  :class="['item', (index > 30 && index <40) || (index > 60 && index <70) ? 'mb':'', index % 10 == 6 ? 'column6' : '', index % 10 == 3 ? 'column3' : '', !item ? 'blank' : 'num', activeId == index ? 'active' : '']">
            <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? '/static/img/blank.png' : able[index] ? '/static/img/blank'+item+'.png' : '/static/img/'+item+'.png'"/>
            <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="/static/img/lighted_1.png"/>
            <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="/static/img/lighted_2.png"/>
            <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="/static/img/lighted_3.png"/>
          </div>
      </div>
      <div class="btnwrap">
          <img  @click="set" class='btn'  :data-index='1' src="/static/img/btn1.png"/>
          <img  @click="set" class='btn'  :data-index='2' src="/static/img/btn2.png"/>
          <img  @click="set" class='btn'  :data-index='3' src="/static/img/btn3.png"/>
          <img  @click="set" class='btn'  :data-index='4' src="/static/img/btn4.png"/>
          <img  @click="set" class='btn'  :data-index='5' src="/static/img/btn5.png"/>
          <img  @click="set" class='btn'  :data-index='6' src="/static/img/btn6.png"/>
          <img  @click="set" class='btn'  :data-index='7' src="/static/img/btn7.png"/>
          <img  @click="set" class='btn'  :data-index='8' src="/static/img/btn8.png"/>
          <img  @click="set" class='btn'  :data-index='9' src="/static/img/btn9.png"/>
        </div>
      <img class="board" src="/static/img/board_9.png" mode="widthFix"/>
  </div>
</template>
<script>
import {SDsix, SDfour, SDnine} from '@/utils/sdpro.js'
export default {
  data () { // 选项 数据
    return {
      sdArr: [],
      blankArr: [],
      level: 18,
      startTime: Date.now(),
      activeId: null,
      able: [],
      sign: 'g0',
      signX: 0,
      signY: 0,
      error: 0,
      count: 1,
      typelevel: 0,
      type: 0,
      path: ''
    }
  },
  components: { // 定义组件

  },
  methods: { // 事件处理方法
    signChange: function (e) {
      // console.log(e.target.dataset.able, e.target.dataset)
      if (e.target.dataset.able == 1) {
          this.activeId = e.target.dataset.id
          this.sign = e.target.dataset.id
          this.signX = e.target.dataset.id - e.target.dataset.id % 10
          this.signY = e.target.dataset.id % 10
      } else {
          // console.log(888)
          this.sign = 'g' + e.target.dataset.num
          this.activeId = null
          this.signX = 0
          this.signY = 0
      }
    },
    set: function (e) {
      if (this.activeId && this.sdArr[this.activeId] != e.target.dataset.index) {
          this.level = this.sdArr[this.activeId] == '' ? this.level - 1 : this.level
          this.sdArr[this.activeId] = parseInt(e.target.dataset.index)
          this.sign = 'g' + e.target.dataset.index
          this.signX = 0
          this.signY = 0
        if (this.level == 0) {
          this.check()
        }
      }
    },
    check () {
      if (this.sdArr + '' == this.sd.backupSdArr + '') {
        this.$store.result = {
                type: this.type,
                sdArr: this.sd.backupSdArr,
                time: Math.floor((Date.now() - this.startTime) / 1000),
                count: this.count,
                error: this.error,
                avg: this.avg
              }
        const url = '../result/main'
        wx.reLaunch({ url })
        // this.$router.push({path: '/result'})
      }
    },
    undo () {

    },
    back () {
      // this.$router.go(-1)
      wx.reLaunch({url: '../home/main'})
    },
    restart () {
        console.log(this.sdArr, this.sd.sdArr)
        this.level = this.typelevel
        this.sdArr = this.sd.sdArr.slice()
        this.startTime = Date.now()
        this.activeId = null
        this.sign = 'g0'
        this.signX = 0
        this.signY = 0
        this.count = this.count + 1
    }
  },
  created () { // 生命周期函数
      // console.log(this.$route.name == 'six')
      // if (this.$route.name == 'four') {
      //     this.sd = new SDfour()
      //     this.sd.createSdArr()
      //     this.sd.blankNum = this.level = this.typelevel = 8
      //     this.sd.createBlank()
      //     this.type = 4
      //     this.avg = 120
      // } else if (this.$route.name == 'six') {
      //     this.sd = new SDsix()
      //     this.sd.createSdArr()
      //     this.sd.blankNum = this.level = this.typelevel = 18
      //     this.sd.createBlank()
      //     this.type = 6
      //     this.avg = 180
      // } else if (this.$route.name == 'nine') {
      //     this.sd = new SDnine()
      //     this.sd.createSdArr()
      //     this.sd.blankNum = this.level = this.typelevel = 40
      //     this.sd.createBlank()
      //     this.type = 9
      //     this.avg = 360
      // } else {
      //     this.$router.push('/')
      // }
      // this.sd = new SDfour()
      // this.sd.createSdArr()
      // this.sd.blankNum = this.level = this.typelevel = 8
      // this.sd.createBlank()
      // this.type = 4
      // this.avg = 120
      //   this.sdArr = this.sd.sdArr
      //   this.able = this.sd.sdArr.map(x => x ? 0 : 1)
      //   this.startTime = Date.now()
      //   console.log('答案答案', this.sd.backupSdArr)
      //   console.log('题目题目', this.sdArr)
    },
    mounted () {
        this.path = this.$root.$mp.page.route.split('/')[1]
        console.log('game999999',this.$root, this.path, this.$root.$mp, this.$root.$mp.query)
        // this.$root.$mp.appOptions.path
        if (this.path == 'four') {
            this.sd = new SDfour()
            this.sd.createSdArr()
            this.sd.blankNum = this.level = this.typelevel = 8
            this.sd.createBlank()
            this.type = 4
            this.avg = 120
        } else if (this.path == 'six') {
            this.sd = new SDsix()
            this.sd.createSdArr()
            this.sd.blankNum = this.level = this.typelevel = 18
            this.sd.createBlank()
            this.type = 6
            this.avg = 180
        } else if (this.path == 'nine') {
            this.sd = new SDnine()
            this.sd.createSdArr()
            this.sd.blankNum = this.level = this.typelevel = 40
            this.sd.createBlank()
            this.type = 9
            this.avg = 360
        } else {
            // this.$router.push('/')
            const url = '../home/main'
            wx.navigateTo({ url })
        }
          this.sdArr = this.sd.sdArr.slice()
          this.able = this.sd.sdArr.map(x => x ? 0 : 1)
          this.startTime = Date.now()
    }
}
</script>

<style lang="less">
</style>
