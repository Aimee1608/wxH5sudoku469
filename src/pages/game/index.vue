<template>
  <div v-if="path=='six'" class="sudoSixBox">
    <img  src="../../../static/img/bg2.png" class='bg'/>
    <div class="top">
      <img  @click="back" class='back' src="../../../static/img/back.png"/>
      <img  @click="restart" class='restart' src="../../../static/img/restart2.png"/>
      <img  class='logo' src="../../../static/img/logo.png"/>
    </div>
    <div class='wrap'>
        <div v-for="(item,index) in sdArr" :key="index"  @click="signChange" :data-index="index" :data-num="item" v-if="index%10 == 1 && index<=66 && index>=11"  :class="['item', index == 31 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']">
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : able[index] ? imgSrc + 'static/img/blank'+item+'.png' : imgSrc + 'static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="../../../static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="../../../static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="../../../static/img/lighted_3.png"/>
        </div>
        <div v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item" :class="['item', 'mb', index == 32 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']" @click="signChange"   v-if="index%10 == 2 && index<=66 && index>=11" >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : able[index] ? imgSrc + 'static/img/blank'+item+'.png' : imgSrc + 'static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="../../../static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="../../../static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="../../../static/img/lighted_3.png"/>
        </div>
        <div v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item"  :class="['item',  index == 33 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : ''] " @click="signChange"  v-if="index %10 == 3 && index<=66 && index>=11"  >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : able[index] ? imgSrc + 'static/img/blank'+item+'.png' : imgSrc + 'static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="../../../static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="../../../static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="../../../static/img/lighted_3.png"/>
        </div>
        <div  v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item" :class="['item', 'mb', index == 34 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']" @click="signChange"   v-if="index %10 == 4 && index <=66 && index >=11"  >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : able[index] ? imgSrc + 'static/img/blank'+item+'.png' : imgSrc + 'static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="../../../static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="../../../static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="../../../static/img/lighted_3.png"/>
        </div>
        <div  v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item" :class="['item',  index == 35 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']" @click="signChange"   v-if="index %10 ==5 && index <=66 && index >=11"  >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : able[index] ? imgSrc + 'static/img/blank'+item+'.png' : imgSrc + 'static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="../../../static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="../../../static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="../../../static/img/lighted_3.png"/>
        </div>
        <div v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item" :class="['item', index == 36 ? 'column3':'', !item ? 'blank' : 'num', activeId == index ? 'active' : '']" @click="signChange"   v-if="index %10 == 6 && index <=66 && index >=11"  >
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : able[index] ? imgSrc + 'static/img/blank'+item+'.png' : imgSrc + 'static/img/'+item+'.png'"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="../../../static/img/lighted_1.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="../../../static/img/lighted_2.png"/>
          <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="../../../static/img/lighted_3.png"/>
        </div>
    </div>
    <div class="btnwrap">
        <img  @click="set" class='btn'  :data-index='1' src="../../../static/img/btn1.png"/>
        <img  @click="set" class='btn'  :data-index='2' src="../../../static/img/btn2.png"/>
        <img  @click="set" class='btn'  :data-index='3' src="../../../static/img/btn3.png"/>
        <img  @click="set" class='btn'  :data-index='4' src="../../../static/img/btn4.png"/>
        <img  @click="set" class='btn'  :data-index='5' src="../../../static/img/btn5.png"/>
        <img  @click="set" class='btn'  :data-index='6' src="../../../static/img/btn6.png"/>
    </div>
    <img  class="board" src="../../../static/img/board_6.png" mode="widthFix"/>
  </div>
  <div v-else-if="path=='four'" class="sudoFourBox">
      <!--pages/six/six.wxml-->
        <img src="../../../static/img/bg2.png" class='bg'/>
        <div class="top">
          <img @click="back" class='back' src="../../../static/img/back.png"/>
          <img @click="restart" class='restart' src="../../../static/img/restart2.png"/>
          <img class='logo' src="../../../static/img/logo.png"/>
        </div>
        <div class='wrap'>
            <div v-for="(item,index) in sdArr" :key="index"   @click="signChange" :data-index="index" :data-num="item" v-if="index%10 <= 4 && index>=11 && index<=44 && index % 10 != 0"  :class="['item', (index > 20 && index <30) ? 'mb':'', index % 10 == 2 ? 'column3' : '', !item ? 'blank' : 'num', activeId == index ? 'active' : '']">
              <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : able[index] ? imgSrc + 'static/img/blank'+item+'.png' : imgSrc + 'static/img/'+item+'.png'"/>
              <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="../../../static/img/lighted_1.png"/>
              <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="../../../static/img/lighted_2.png"/>
              <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="../../../static/img/lighted_3.png"/>
            </div>
        </div>
        <div class="btnwrap">
            <img @click="set" class='btn'  :data-index='1' src="../../../static/img/btn1.png"/>
            <img @click="set" class='btn'  :data-index='2' src="../../../static/img/btn2.png"/>
            <img @click="set" class='btn'  :data-index='3' src="../../../static/img/btn3.png"/>
            <img @click="set" class='btn'  :data-index='4' src="../../../static/img/btn4.png"/>
          </div>
        <img class="board" src="../../../static/img/board_4.png" mode="widthFix"/>
  </div>
  <div v-else-if="path=='nine'" class="sudoNineBox">
      <!--nine.wxml-->
      <img src="../../../static/img/bg2.png" class='bg'/>
      <div class="top">
        <img @click="back" class='back' src="../../../static/img/back.png"/>
        <!--<img class='undo' src="../../../static/img/undo.png"/>-->
        <img @click="restart" class='restart' src="../../../static/img/restart2.png"/>
        <!--<img class='base' src="../../../static/img/base.png"/>-->
        <img class='logo' src="../../../static/img/logo.png"/>
      </div>
      <div class='wrap'>
          <div v-for="(item,index) in sdArr" :key="index"   @click="signChange" :data-index="index" :data-num="item" v-if="index >=11 && index <=99 && index % 10 != 0"  :class="['item', (index > 30 && index <40) || (index > 60 && index <70) ? 'mb':'', index % 10 == 6 ? 'column6' : '', index % 10 == 3 ? 'column3' : '', !item ? 'blank' : 'num', activeId == index ? 'active' : '']">
            <img  :data-id="index" :data-able="able[index]" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : able[index] ? imgSrc + 'static/img/blank'+item+'.png' : imgSrc + 'static/img/'+item+'.png'"/>
            <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == 'g' + item"  src="../../../static/img/lighted_1.png"/>
            <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="sign == index "   src="../../../static/img/lighted_2.png"/>
            <img  :data-id="index" :data-able="able[index]" :data-num="item" class='border lighted'  v-if="!item ? false : (index % 10 == signY || index - index % 10 == signX)"  src="../../../static/img/lighted_3.png"/>
          </div>
      </div>
      <div class="btnwrap">
          <img  @click="set" class='btn'  :data-index='1' src="../../../static/img/btn1.png"/>
          <img  @click="set" class='btn'  :data-index='2' src="../../../static/img/btn2.png"/>
          <img  @click="set" class='btn'  :data-index='3' src="../../../static/img/btn3.png"/>
          <img  @click="set" class='btn'  :data-index='4' src="../../../static/img/btn4.png"/>
          <img  @click="set" class='btn'  :data-index='5' src="../../../static/img/btn5.png"/>
          <img  @click="set" class='btn'  :data-index='6' src="../../../static/img/btn6.png"/>
          <img  @click="set" class='btn'  :data-index='7' src="../../../static/img/btn7.png"/>
          <img  @click="set" class='btn'  :data-index='8' src="../../../static/img/btn8.png"/>
          <img  @click="set" class='btn'  :data-index='9' src="../../../static/img/btn9.png"/>
        </div>
      <img class="board" src="../../../static/img/board_9.png" mode="widthFix"/>
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
        const url = 'pages/result/main'
        this.reLaunchPageTo(this.router + url)
      }
    },
    undo () {

    },
    back () {
      this.reLaunchPageTo(this.router + 'pages/home/main')
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
      // console.log('game----created',this.$root, this.path, this.$root.$mp)
    },
    mounted () {
        // console.log('query', this.$root.$mp, this.newroot().query)
        // this.path = this.service.getroot(this).query.path
        this.path = this.newroot().query.path
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
            this.reLaunchPageTo(this.router + 'pages/home/main')
        }
          this.sdArr = this.sd.sdArr.slice()
          this.able = this.sd.sdArr.map(x => x ? 0 : 1)
          this.startTime = Date.now()
          this.activeId = null
          this.sign = 'g0'
          this.signX = 0
          this.signY = 0
    }
}
</script>

<style lang="less">
.sudoFourBox{
    width: 100%;
    height: 100%;
    .item{
      width:100/7.5vw;
      height: 100/7.5vw;
      display: inline-block;
    }
    .item .lighted{
      width: 104/7.5vw;
      height: 104/7.5vw;
    }
    .wrap{
      width: 507/7.5vw;
      left:160/7.5vw;
      top:256/7.5vw;
    }
    .column3{
      margin-right: 42/7.5vw;
    }
    .mb{
      margin-bottom: 42/7.5vw;
    }
    .board{
      position: absolute;
      top: 210/7.5vw;
      width: 507/7.5vw;
      height: 533/7.5vw;
      z-index: 2;
      left: 130/7.5vw;
    }
    .btnwrap{
      bottom: 268/7.5vw;
      margin-left: 195/7.5vw;
      .btn:nth-child(2){
          left:75/7.5vw;
      }
      .btn:nth-child(3){
          left:154/7.5vw;
      }
      .btn:nth-child(4){
          left:239/7.5vw;
      }
    }
}
/**app.wxss**/
.sudoSixBox{
  width: 100%;
  height: 100%;
  position: relative;
  .bg{
    width: 100%;
    height: 100%;
  }
  .container {
    height: 100%;
    padding: 200/7.5vw 10/7.5vw;
    box-sizing: border-box;
    width: 100%;
  }

  .wrap{
    align-items: center;
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
    display: inline-block;
    position: relative;
  }
  .item img, .item image{
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
  .top img, .top image{
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

  .btnwrap  img.btn, .btnwrap  image.btn{
    width: 105/7.5vw;
    height:105/7.5vw;
    position: absolute;
    top: 0;
  }
  .board{
    position: absolute;
    top: 210/7.5vw;
    width: 507/7.5vw;
    height: auto;
    z-index: 2;
    left: 130/7.5vw;
  }
  .wrap{
    width: 507/7.5vw;
    left:160/7.5vw;
    top:245/7.5vw;
  }
  .btnwrap{
    margin-left: 132/7.5vw;
    bottom: 266/7.5vw;
  }
  .btnwrap .btn:nth-child(1){
    left: 0;
  }
  .btnwrap .btn:nth-child(2){
    left: 75/7.5vw;
  }
  .btnwrap .btn:nth-child(3){
    left: 154/7.5vw;
  }
  .btnwrap .btn:nth-child(4){
    left: 239/7.5vw;
  }
  .btnwrap .btn:nth-child(5){
    left: 310/7.5vw;
  }
  .btnwrap .btn:nth-child(6){
    left: 387/7.5vw;
  }
}
.sudoNineBox{
    width: 100%;
    height: 100%;
    .wrap{
      position: absolute;
      top: 219/7.5vw;
      left: 35/7.5vw;
    }
    .board{
      width: 736/7.5vw;
      left: 7/7.5vw;
      position: absolute;
      top: 185/7.5vw;
    }
    .item{
      width: 68/7.5vw;
      height: 68/7.5vw;
      margin:0 5/7.5vw 2/7.5vw 0;
      z-index: 10;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
    }
    .item image, .item img{
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
    .numimg{
      position: relative;
      z-index: 10;
    }
    .btnwrap{
        margin-left: 12/7.5vw;
        position: absolute;
        bottom:129/7.5vw;
        width: 105/7.5vw;
        height:105/7.5vw;
        .btn:nth-child(2){
            left: 75/7.5vw;
        }
        .btn:nth-child(3){
            left: 154/7.5vw;
        }
        .btn:nth-child(4){
            left: 239/7.5vw;
        }
        .btn:nth-child(5){
            left: 310/7.5vw;
        }
        .btn:nth-child(6){
            left: 387/7.5vw;
        }
        .btn:nth-child(7){
            left: 463/7.5vw;
        }
        .btn:nth-child(8){
            left: 540/7.5vw;
        }
        .btn:nth-child(9){
            left: 620/7.5vw;
        }
    }
}
</style>
