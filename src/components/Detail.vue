<template>
<div class="container">

  <ul class="breadcrumb">
    <li>
      <a href="#/start">主页</a>
    </li>
    <li>详情</li>
  </ul>

  <div class="panel panel-default">

    <div class="panel-body">
        <div class="page-header">
          <h2>{{dish.name}}</h2>
          <img class="img-responsive" :src="'/static/img/'+dish.img_lg" alt=""/>

          <div class="text-justify">
            <p>{{dish.material}}</p>
            <p>{{dish.detail}}</p>
            <p>价格：{{dish.price}}</p>
          </div>
        </div>
    </div>

    <div class="panel-footer">
      <div class="text-right">
        <button v-on:click="jump('/order/'+dish.did)" class="btn btn-success">
          我要订餐
        </button>
        <button v-on:click="jump('/main')" class="btn btn-primary">我再看看</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>


export default {
    name: 'detail',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            dish:{}
        }
    },
    methods: {
        jump:function(){
             this.$parent.jump('/detail');
        }
    }
    ,
    created() {
        console.log(this.$route.params.id);
        this.$http
            .jsonp(
            'http://localhost/data/dish_getbyid.php?id='+this.$route.params.id, { jsonp: 'callback' }
            )
            .then(function (response) {
                this.dish = response.data[0];
            }, function (error) {
                console.log(error);
            })


    }
}
</script>

<style scoped>
.redColor {
    color: red
}
</style>
