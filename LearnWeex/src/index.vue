<template>
  <div class="wrapper">
      <navbar titleStr="事件清单" :show-back="false"></navbar>
      <text  v-if="todoEventArr.length > 0" class="title">待办事件</text>
      <div class="event-wrp">
          <event-item v-for="(event, index) in todoEventArr" :key="event.name" :event="event" :index="index" @onClickFinishBtn="onFinish"></event-item>
      </div>
      <text  v-if="finishEventArr.length > 0" class="title">已办事件</text>
      <div class="event-wrp">
          <event-item v-for="(event, index) in finishEventArr" :key="event.name" :event="event" :index="index" :show-finish-btn="false"></event-item>
      </div>
  </div>
</template>

<script>
import navbar from './components/NavBar.vue'
import eventItem from './components/EventItem.vue'
export default {
  name: 'App',
  components: {
    navbar,
    eventItem
  },
  data () {
    return {
        todoEventArr: [
          {
            name: '待办事项',
            desc: '待办事项详情'
          }
        ],
        finishEventArr: [
          {
            name: '已办事项',
            desc: '已办事项详情'
          }
        ]
    }
  },
  methods: {
    onFinish(event,index){
        this.todoEventArr.splice(index,1)
        this.finishEventArr.push(event)
    }
  } 
}
</script>

<style scoped>
.wrapper {
  background-color: azure;
}
.title {
  font-size: 32px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
