<template>
  <div class="navbar">
      <text v-if = "showBack" class="iconfont nac_back" @click="onBack">&#xe8b5;</text>
      <text v-else class= "nav_title" ></text>
      <text class="nav_title">{{titleStr}}</text>
      <text></text>
  </div>
  
</template>

<script>
const navigator = weex.requireModule('navigator')
export default {
  name: 'navbar',
  props: {
      showBack:{
        type:Boolean,
        default:true
      },
      titleStr:{
          type:String,
          required:true
      }
  },
  beforeCreate () {
    const domMoule = weex.requireModule('dom')
    domMoule.addRule('fontFace',{
        'fontFamely':'iconfont',
        'src':"url('//at.alicdn.com/t/font_586388_hvnzbdcg5hh69a4i.ttf')"
    })  
  },
  methods: {
      onBack(){
        navigator.pop({
            animated:'true'
        })
      }
  }
}
</script>

<style scoped>
.navbar {
    background-color: aquamarine;
    height: 128px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
}
.nav_title {
    color: white;
    font-size: 32px;
}
.iconfont {
    font-family: iconfont;
}

.nav_back {
    font-size: 36px;
}


</style>
