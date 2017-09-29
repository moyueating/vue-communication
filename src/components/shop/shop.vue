<template>
    <div class="container">
        <h3>产品列表</h3>
        <div class="panel">
            <ul class="detail" >
                <li class="blue" v-for="part in allParts" :key="part.name">{{ part.name }} : &yen;{{part.price}}</li>
            </ul>
            <ul class="choose">
                <li v-for="part in allParts" :key="part.name">
                    <button @click="minus(part)">minus</button>
                    <button>{{ count[part.name] || 0}}</button>
                    <button @click="plus(part)">plus</button>
                </li>
            </ul>
        </div>


        <h3 style="marginTop: 50px;">购物车</h3>
        <ul>
            <li v-for="ch in choose" :key="ch.name">
                <span>cpu</span>
                <span>数量: 2</span>
                <span>总价: 100</span>

            </li>
        </ul>


    </div>
</template>

<script>
import mock from './mock.JSON'
export default {    
    name: 'shop',
    data () {
        return {
            allParts: [],
            choose: [],
            count: {
                
            }
        }
    },
    methods: {
        plus (product) {
            if(this.count[product.name]){
                this.count[product.name]++;
            }else{
                this.$set(this.count,product.name,1);
            }
        },
        minus (product) {
            if(this.count[product.name] && this.count[product.name]>0){
                this.count[product.name]--;
            }
        },
        addDev () {
            console.log('dev_master');
        }
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
    ul.partMap li{
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
    .panel ul.choose li span:nth-child(1){
        flex-grow: 2;
    }
    .panel ul.choose li span:nth-child(2){
        flex-grow: 4;
    }
    .panel ul.choose li span:nth-child(3){
        flex-grow: 2;
    }

</style>

