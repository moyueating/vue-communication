<template>
    <div class="container">
        <h3>产品列表</h3>
        <div class="panel">
            <ul class="detail" >
                <li class="blue" v-for="part in allParts" :key="part.name">{{ part.name }} : &yen;{{part.price}}</li>
            </ul>
            <ul class="choose">
                <li v-for="part in allParts" :key="part.name">
                    <button @click="minus(part)">-</button>
                    <strong>{{ count[part.name] || 0}}</strong>
                    <button @click="add(part)">+</button>
                </li>
            </ul>
        </div>


        <h3 style="marginTop: 50px;">购物车总价：{{ totalPrice }}</h3>
        <ul class="shopCart">
            <li v-for="shopCart in shopCartList" :key="shopCart.name">
                <span>{{ shopCart.name }}</span>
                <span>数量:{{ shopCart.num }}</span>
                <span>总价: {{  shopCart.totalPrice }}</span>
            </li>
        </ul>

        <section v-if="expensive.length > 0">
            <h3 style="marginTop: 50px;">下面的是单价比较贵的</h3>
            <ul class="shopCart expensive">
                <li v-for="exp in expensive" :key="exp.name">
                    <span>{{ exp.name }}</span>
                    <span>单价: {{  exp.price }}</span>
                </li>
            </ul>

        </section>

        <section v-if="moreExpensive.length > 0">
            <h3 style="marginTop: 50px;">下面的是从比较贵的中筛选出更贵的</h3>
            <ul class="shopCart more_expensive">
                <li v-for="mexp in moreExpensive" :key="mexp.name">
                    <span>{{ mexp.name }}</span>
                    <span>单价: {{  mexp.price }}</span>
                </li>
            </ul>
        </section>



    </div>
</template>

<script>
import mock from './mock.JSON'
import * as types from '../../store/mutation-types'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {    
    name: 'shop',
    data () {
        return {
            allParts: [],
            count: {
                
            },
        }
    },
    methods: {
        add (product) {
            if(this.count[product.name]){
                this.count[product.name]++;
            }else{
                this.$set(this.count,product.name,1);
            }
            this.$store.commit(types.ADD_TO_SHOPCART,product);
        },
        minus (product) {
            if(this.count[product.name] > 0){
                if(this.count[product.name] && this.count[product.name]>0){
                    this.count[product.name]--;
                }
                this.$store.commit(types.MINUS_TO_SHOPCART,product);
            }
        },
    },
    computed: {
        // totalPrice() {
        //     return this.$store.state.totalPrice;
        // },
        // shopCartList() {
        //     return this.$store.state.shopCartList;
        // },
        // expensive() {
        //     return this.$store.getters.expensive;
        // },
        // moreExpensive() {
        //     return this.$store.getters.moreExpensive;
        // },
        ...mapState([
            'totalPrice',
            'shopCartList'
        ]),
        ...mapGetters([
            'expensive',
            'moreExpensive'
        ])
    },
    created () {
        this.allParts = mock.allParts;
    }
}
</script>


<style scoped>
    .container{
        margin-top: 50px;
    }
    button{
        width: 70px;
        height: 30px;
    }
    .blue{
        color: #2A90DE;
    }
    ul,
    ul.choose li,
    ul.partMap li,
    .panel ul.shopCart{
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
    }
    ul li {
        width: 100%;
        height: 50px;
        line-height: 50px;
    }

    .panel{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
    }
    .panel ul.detail{
        flex-direction: column;
        flex-grow: 1;
    }
    .panel ul.detail li {
        border-right: 1px solid #ddd;
    }
    .panel ul.detail li:not(:last-child),
    .panel ul.choose li:not(:last-child){
        border-bottom: 1px solid #ddd;
    }
    .panel ul.choose{
        flex-direction: column;
        flex-grow: 3;
    }
    .panel ul.choose li {
        justify-content: space-around;
    }
    .panel ul.choose li strong {
        color: #2A90DE;
    }
    .panel ul.choose li span:nth-child(1){
        flex-grow: 2;
    }
    .panel ul.choose li span:nth-child(2){
        flex-grow: 4;
    }
    .panel ul.choose li span:nth-child(3){
        flex-grow: 2;
    }
    ul.shopCart {
        flex-direction: column;
    }
    .expensive{
        color: #d30775;
    }
    .more_expensive{
        color: #f86442;
    }
</style>

