<template>
  <div class="start"
       v-on:click="jump('/main')">
    <h1 class="text-center text-primary">
      开饭啦
    </h1>
    <img class="img-responsive center-block"
         src="/static/img/kid-foods.jpg"
         alt="" />
  </div>
</template>

<script>
export default {
  name: 'start',
  methods:{
    jump(path){
      this.$parent.jump(path);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
