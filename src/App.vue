<template>
  <div id="app">
    <router-link to="/">Go to Start</router-link>
    <router-link to="/main">Go to Main</router-link>
    <router-link to="/detail">Detail</router-link>
    <button v-on:click="jump('/main')">btn</button> 
    <router-view></router-view>
  </div>
</template>


<script>
/*
打通父子之间所有数据和方法的共享：
　　　　　　父模板：<child ref="子名称"></child>
　　　　　　父访问子:	父组件: this.$refs.子名称.子数据/方法名()
　　　　　　子访问父:	子组件: this.$parent.子数据/方法名()
 */
import Router from 'vue-router'
import mainComponent from './components/Main'
import detailComponent from './components/Detail'
export default {
  name: 'app',
  components: {
    mainComponent,detailComponent
  },
  methods:{
    jump:function(path){
      this.$router.push(path)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
