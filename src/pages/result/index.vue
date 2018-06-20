<template>
  <div class="resultBox">
    <img src="../../../static/img/bg2.png" class="bg" />
    <img src="../../../static/img/resultKuang.png" class="resultkuang" alt="">
    <div v-if="msg.type==4" class='wrap wrap_4'>
        <div v-for="(item,index) in sdArr" :key="index"   :data-index="index" :data-num="item" v-if="index%10 <= 4 && index>=11 && index<=44 && index % 10 != 0"  :class="['item', (index > 20 && index <30) ? 'mb':'', index % 10 == 2 ? 'column3' : '', !item ? 'blank' : 'num']">
          <img  :data-id="index" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png'  : imgSrc + 'static/img/'+item+'.png'"/>
         </div>
    </div>
    <div v-else-if="msg.type==6" class='wrap wrap_6'>
        <div v-for="(item,index) in sdArr"  :key="index"  :data-index="index" :data-num="item" v-if="index%10 == 1 && index<=66 && index>=11"  :class="['item', index == 31 ? 'column3':'', !item ? 'blank' : 'num']">
          <img  :data-id="index"  class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : imgSrc + 'static/img/'+item+'.png'"/>
        </div>
        <div v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item" :class="['item', 'mb', index == 32 ? 'column3':'', !item ? 'blank' : 'num']"    v-if="index%10 == 2 && index<=66 && index>=11" >
          <img  :data-id="index"   class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : imgSrc + 'static/img/'+item+'.png'"/>
        </div>
        <div v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item"  :class="['item',  index == 33 ? 'column3':'', !item ? 'blank' : 'num'] "  v-if="index %10 == 3 && index<=66 && index>=11"  >
          <img  :data-id="index"   class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : imgSrc + 'static/img/'+item+'.png'"/>
        </div>
        <div  v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item" :class="['item', 'mb', index == 34 ? 'column3':'', !item ? 'blank' : 'num']"    v-if="index %10 == 4 && index <=66 && index >=11"  >
          <img  :data-id="index"   class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : imgSrc + 'static/img/'+item+'.png'"/>
        </div>
        <div  v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item" :class="['item',  index == 35 ? 'column3':'', !item ? 'blank' : 'num']"    v-if="index %10 ==5 && index <=66 && index >=11"  >
          <img  :data-id="index"   class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : imgSrc + 'static/img/'+item+'.png'"/>
        </div>
        <div v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item" :class="['item', index == 36 ? 'column3':'', !item ? 'blank' : 'num']"    v-if="index %10 == 6 && index <=66 && index >=11"  >
          <img  :data-id="index"   class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : imgSrc + 'static/img/'+item+'.png'"/>
        </div>
    </div>
    <div v-else-if="msg.type==9" class='wrap wrap_9'>
        <div v-for="(item,index) in sdArr" :key="index"  :data-index="index" :data-num="item" v-if="index >=11 && index <=99 && index % 10 != 0"  :class="['item', (index > 30 && index <40) || (index > 60 && index <70) ? 'mb':'', index % 10 == 6 ? 'column6' : '', index % 10 == 3 ? 'column3' : '', !item ? 'blank' : 'num']">
          <img  :data-id="index" :data-num="item" class="numimg" :src="!item ? imgSrc + 'static/img/blank.png' : imgSrc + 'static/img/'+item+'.png'"/>
        </div>
    </div>
    <img @click="again" class="btn" src="../../../static/img/again.png"/>
    <img v-if="status == 1" src="../../../static/img/pass.png" class="monkey pass"/>
    <img v-if="status == 2"  src="../../../static/img/great.png" class="monkey great"/>
    <img v-if="status == 3"  src="../../../static/img/perfect.png" class="monkey perfect"/>
    <img v-if="status == 1"  src="../../../static/img/passicon.png" class="icon passi"/>
    <img v-if="status == 2"  src="../../../static/img/greaticon.png" class="icon greati"/>
    <img v-if="status == 3"  src="../../../static/img/perfecticon.png" class="icon perfecti"/>
    <div class="result time">
      <img src="../../../static/img/time.png"/>
      <span>{{(time - time % 60)/60}}</span>
      <span class="r">{{time % 60}}</span>
    </div>
    <div class="result error">
      <img src="../../../static/img/error.png"/>
      <span>{{msg.error}}</span>
    </div>
    <div class="result count">
      <img src="../../../static/img/count.png"/>
      <span>{{msg.count}}</span>
    </div>
    <div class="result avg">
      <img src="../../../static/img/avg.png"/>
      <span>{{(msg.avg - msg.avg % 60) / 60}}</span>
      <span class="r">{{msg.avg % 60}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () { // 选项 数据
    return {
      sdArr: new Array(100),
      msg: {},
      time: 0,
      status: 1
    }
  },
  components: { // 定义组件

  },
  methods: { // 事件处理方法
    again () {
       var url = this.msg.type == 4 ? 'pages/game/main?path=four' : this.msg.type == 6 ? 'pages/game/main?path=six' : this.msg.type == 9 ? 'pages/game/main?path=nine' : 'pages/home/main'
       this.reLaunchPageTo(this.router + url)
    }
  },
  created () { // 生命周期函数

  },
  mounted () {
      // console.log(99966666, this.$route, this.$root.$mp)
      console.log('result', this.$store.result)
      if (this.$store.result) {
          var status = this.$store.result.avg - this.$store.result.time > 0 ? this.$store.result.avg - this.$store.result.time > 60 ? 3 : 2 : 1
          this.sdArr = this.$store.result.sdArr
          this.time = this.$store.result.time
          this.msg = this.$store.result
          this.able = this.sdArr.map(x => x ? 0 : 1)
          this.status = status
      } else {
          const url = 'pages/home/main'
          this.reLaunchPageTo(this.router + url)
      }
  }
}
</script>

<style lang="less">
.resultBox{
  width: 100%;
  height: 100vh;
  position: relative;
  .bg{
    width: 100%;
    height: 100%;
  }
  /* result.wxss */
  .board{
    width: 736/7.5vw;
    left: 7/7.5vw;
    position: absolute;
    top: 185/7.5vw;
  }
  .wrap_9{
    transform: scale(0.5);
    z-index: 20;
    left: 20/7.5vw;
    top: 72/7.5vw;
  }
  .wrap_4{
    width: 427/7.5vw;
    left:195/7.5vw;
    top:226/7.5vw;
  }
  .wrap_4 .item{
    width:80/7.5vw;
    height: 80/7.5vw;
  }
  .wrap_4 .item .lighted{
    width: 84/7.5vw;
    height: 844/7.5vw;
  }
  .wrap_6{
    width: 350/7.5vw;
    left:200/7.5vw;
    top:230/7.5vw;
  }
  .wrap_6 .item{
    width: 50/7.5vw;
    height: 50/7.5vw;
    margin:0 5/7.5vw 2/7.5vw 0;
    z-index: 10;
    box-sizing: border-box;
    position: relative;
  }
  .wrap_6 .item .lighted{
    position: absolute;
    width: 54/7.5vw;
    height: 54/7.5vw;
    top: -3/7.5vw;
    left: -1/7.5vw;
    z-index: 11;
  }
  .wrap_6 .column3{
    margin-right: 24/7.5vw;
  }
  .wrap_6 .mb{
    margin-bottom: 24/7.5vw;
  }
  .monkey,.icon{
    position: absolute;
    z-index: 20;
    transform: scale(1);
  }
  .pass{
    width: 228/7.5vw;
    height: 208/7.5vw;
    left: 256/7.5vw;
    top: 28/7.5vw;
  }
  .passi{
    width: 200/7.5vw;
    height: 162/7.5vw;
    top:414/7.5vw;
    left:448/7.5vw;
  }
  .great{
    left: 255/7.5vw;
    top: 35/7.5vw;
    width: 220/7.5vw;
    height: 178/7.5vw;
  }
  .greati{
    width: 177/7.5vw;
    height: 161/7.5vw;
    top: 420/7.5vw;
    left: 466/7.5vw;
  }
  .perfect{
    width: 218/7.5vw;
    height: 188/7.5vw;
    left: 255/7.5vw;
    top: 42/7.5vw;
  }
  .perfecti{
    width: 210/7.5vw;
    height: 188/7.5vw;
    left: 478/7.5vw;
    top: 382/7.5vw;
  }
  .btn{
    position: absolute;
    left: 268/7.5vw;
    top: 590/7.5vw;
    width:220/7.5vw;
    height: 76/7.5vw;
  }
  .result{
    width: 496/7.5vw;
    height: 72/7.5vw;
    position: absolute;
    left: 130/7.5vw;
    font-size: 48/7.5vw;
  }
  .result span{
    position: absolute;
    top: 0;
    left: 210/7.5vw;
    width: 100/7.5vw;
    text-align: center;
    height: 72/7.5vw;
    line-height: 48/7.5vw;
    display: block
  }
  .result span.r{
    left: 350/7.5vw;
  }
  .result img, .result image{
    width: 100%;
    height: 100%;
  }
  .time{
    top: 705/7.5vw;
  }
  .time span{
    color: #ef3131;
  }
  .error{
    top:777/7.5vw;
  }
  .count{
    top: 850/7.5vw;
  }
  .avg{
    top: 922/7.5vw;
  }
  .resultkuang{
    width: 500/7.5vw;
    height: 610/7.5vw;
    position: absolute;
    left: 125/7.5vw;
    top: 40/7.5vw;
    pointer-events: none;
  }
}
</style>
