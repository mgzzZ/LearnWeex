<template>
  <div class="eventItem">
      <text class="eventName">{{event.name}}</text>
      <div class="eventBtn">
          <text v-if="showFinishBtn" class="eventBtnName" @click="onFinish(event,index)">完成</text>
          <text v-else ></text>
          <text class="iconfont nac_next">&#xe88e;</text>
      </div>
  </div>
</template>
<script>
export default {
    name:'eventItem',
    props: {
        showFinishBtn:{
            type:Boolean,
            default:true
        },
        index:{
            type: Number,
            required:true
        },
        event:{
            type: Object,
            required:true
        }
    },
    beforeCreate () {
        const domModule = weex.requireModule('dom')
        domModule.addRule('fontFace',{
            'fontFamily':'iconfont',
            'src':"url('http://at.alicdn.com/t/font_586388_hvnzbdcg5hh69a4i.ttf')"
        })  
    },
    methods: {
        onFinish(event,index){
            this.$emit('onClickFinishBtn',event,index)
        }
    }
}
</script>

<style scoped>
.eventItem {
    background-color: #FFF;
    justify-content: space-between;
    height: 80px;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
}
.eventBtn {
    flex-direction: row;
    align-items: center;
}
.eventBtnName {
    background-color: aquamarine;
    color: #FFF;
    border-width: 2px;
    border-radius: 10px;
    border-color: #FFF;
    font-size: 28px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 2px;
    padding-bottom: 2px;
}
.iconfont {
    font-family: iconfont;
}
.nav_next {
    font-size: 36px;
}
</style>
