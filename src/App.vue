<template>
  <div id="app">
  
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
export default {
  name: 'app',
  data() {
    return {
      urlDev: 'localhost',
      urlBuild: 'kflvue.applinzi.com'
    }
  },
  methods: {
    jump: function (path) {
      this.$router.push(path)
    }
  },
  created() {
    window.serverUrl = this.urlDev;
  }
}
</script>

<style>

</style>
