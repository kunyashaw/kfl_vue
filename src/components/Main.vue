
<template>
    <div class="container">
        <myHeader/>
        <div class="form-group has-feedback search">
            <input type="text"
                   class="form-control"
                   v-model="kw"
                   placeholder="输入菜品或者原材料的名称" />
            <span class="form-control-feedback glyphicon glyphicon-search"></span>
        </div>
    
        <div>
            <div class="list-group">
                <a v-on:click="jump(dish.did)"
                   v-for="dish in dishList"
                   class="list-group-item">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img class="media-object"
                                 :src="'../static/img/'+dish.img_sm"
                                 alt="" />
                        </div>
    
                        <div class="media-body">
                            <h3>{{dish.name}}</h3>
                            <p>{{dish.material}}</p>
                            <p>价格：{{dish.price}}</p>
                        </div>
    
                    </div>
                </a>
            </div>
        </div>
        <button v-if="hasMore"
                v-on:click="loadMore()"
                class="btn btn-success btn-block">
            加载更多
        </button>
    
        <p v-if="!hasMore">没有更多数据可以加载了</p>
        <myFooter/>
    </div>
</template>

<script>

import kflHeader from '@/components/Header'
import kflFooter from '@/components/Footer'
export default {
    name: 'main',
    components: {
        'myHeader': kflHeader,
        'myFooter': kflFooter
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            dishList: [],
            kw: '',
            hasMore: true
        }
    },
    methods: {
        jump: function (did) {
            this.$parent.jump('/detail/' + did);
        },
        loadMore: function () {

            this.$http
                .jsonp(
                'http://'+serverUrl+'/data/dish_getbypage.php?start=' + this.dishList.length, { jsonp: 'callback' }
                )
                .then(function (response) {
                    this.dishList = this.dishList.concat(response.data);
                    if (response.data.length < 5) {
                        this.hasMore = false;
                    }
                }, function (error) {
                    console.log(error);
                })
        }
    }
    ,
    watch: {
        kw: function (newValue, oldValue) {
            this.$http
                .jsonp(
                'http://'+serverUrl+'/data/dish_getbykw.php?kw=' + this.kw, { jsonp: 'callback' }
                )
                .then(function (response) {
                    this.dishList = response.data;
                }, function (error) {
                    console.log(error);
                })
        }
    },
    created() {
        console.log(serverUrl);
        this.$http
            .jsonp(
            'http://'+serverUrl+'/data/dish_getbypage.php', { jsonp: 'callback' }
            )
            .then(function (response) {
                this.dishList = response.data;
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
