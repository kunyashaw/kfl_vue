<template>
<div class="container">

  <h1 class="text-center">我的订单</h1>

  <table class="table">
    <thead>
      <tr>
        <th>编号</th>
        <th>菜品</th>
        <th>下单时间</th>
        <th>联系人</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="order in orderList">
        <td>{{order.oid}}</td>
        <td>
          <a v-on:click="jump(order.did)" >
            <img class="img-responsive"
                :src="'../static/img/'+order.img_sm" alt=""/>
          </a>
        </td>
        <td>{{order.order_time}}</td>
        <td>{{order.user_name}}</td>
      </tr>
    </tbody>
  </table>


</div>
</template>

<script>


export default {
    name: 'MyOrder',
    data() {
        return {
            orderList: []
        }
    },
    methods: {
        jump: function () {
            this.$parent.jump('/detail');
        }
    }
    ,
    created() {
        console.log(this.$route.params.id);
        this.$http.jsonp('http://localhost/data/order_getbyphone.php?phone='+localStorage.getItem('phone'))
        .then(function(response){
            this.orderList = response.data;
        })

    }
}
</script>

<style scoped>
.redColor {
    color: red
}
</style>
