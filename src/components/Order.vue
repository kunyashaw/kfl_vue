<template>
    <div class="container">
        <myHeader/>
        <div class="alert alert-info">
            <form v-if="!result">
                <div class="form-group">
                    <label for="name">收货人</label>
                    <input type="text"
                           id="name"
                           v-model="order.user_name"
                           class="form-control" />
                </div>
    
                <div class="form-group">
                    <label>性别</label>
    
                    <div class="radio-inline">
                        <label>
                            <input type="radio"
                                   name="sex"
                                   v-model="order.sex"
                                   value="1" />男
                        </label>
                    </div>
                    <div class="radio-inline">
                        <label>
                            <input type="radio"
                                   name="sex"
                                   v-model="order.sex"
                                   value="2" />女
                        </label>
                    </div>
                </div>
    
                <div class="form-group">
                    <label for="phone">联系电话</label>
                    <input type="text"
                           id="phone"
                           v-model="order.phone"
                           class="form-control" />
                </div>
    
                <div class="form-group">
                    <label for="address">收货地址</label>
                    <textarea id="address"
                              v-model="order.addr"
                              class="form-control"></textarea>
    
                </div>
    
                <input type="button"
                       value="提交订单"
                       v-on:click="submitOrder()"
                       class="btn btn-success btn-block" />
    
            </form>
            <p v-if="result">{{result}}</p>
    
        </div>
        <myFooter/>
    </div>
</template>

<script>


import kflHeader from '@/components/Header'
import kflFooter from '@/components/Footer'
export default {
    name: 'order',
    components: {
        'myHeader': kflHeader,
        'myFooter': kflFooter
    },
    data() {
        return {
            order: {},
            result: null
        }
    },
    methods: {
        jump: function () {
            this.$parent.jump('/detail');
        },
        submitOrder: function () {
            console.log(this.order);
            this.$http.jsonp('http://'+serverUrl+'/data/order_add.php', { params: this.order }).then(function (response) {
                console.log(response.data);
                if (response.data) {
                    if (response.data[0].msg == 'succ') {
                        this.result = "下单成功，订单编号为:" + response.data[0].oid;
                        localStorage.setItem('phone', this.order.phone);
                    }
                    else {
                        this.result = "下单失败";
                    }
                    console.log('result is ' + this.result);

                }
            })
        }
    }
    ,
    created() {
        console.log(this.$route.params.id);
        this.order = { did: this.$route.params.id };

    }
}
</script>

<style scoped>
.redColor {
    color: red
}
</style>
