<template>
    <div class="container">
        <ul class="title">
            <li v-for=" (part,index) in allParts" :key="part" @click="showMask(part,index)">
                <span class="name blue">{{ part }}</span>
            </li>
        </ul>
        <div class="panel">
            <ul class="detail" >
                <li class="blue" v-for="part in allParts" :key="part">{{ part }}</li>
            </ul>
            <ul class="choose">
                <li v-for="part in allParts" :key="part">
                    <span>-</span>
                    <span>{{ part }}</span>
                    <span>+</span>
                </li>
            </ul>
        </div>

        <!-- 弹层 -->
        <transition name="mask">
            <ul class="partMap" v-if="maskFlag">
                <li v-for="pm in partMap" :key="pm.name">
                    <span>{{ pm.name }}</span>
                    <span>￥{{ pm.price }}</span>
                </li>
            </ul>
        </transition>


    </div>
</template>

<script>
import mock from './mock.JSON'
export default {    
    name: 'shop',
    data () {
        return {
            allParts: [],
            partMap: [],
            cpuMap: [],
            choose: [],
            maskFlag: false,
        }
    },
    methods: {
        showMask (name) {
            this.maskFlag = !this.maskFlag;
            switch (name){
                case 'cpu':
                    this.partMap = this.cpuMap;
                    break;
            }
        }
    },
    created () {
        this.allParts = mock.allParts;
        this.cpuMap = mock.cpuMap;
    }
}
</script>


<style scoped>
    .mask-enter-active{
        animation: move .3s;
    }
    .mask-leave-active{
        animation: move .3s reverse;
    }
    @keyframes move {
        0%{
            transform: translateY(-100%);
        }
        100%{
            transform: translateY(0);
        }
    }
    .blue{
        color: #2A90DE;
    }
    ul,
    ul.title li,
    ul.choose li,
    ul.partMap li{
        display: flex;
        display: -webkit-flex;
    }
    ul li {
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
    ul.title{
        border-bottom: 1px solid #ddd;
        background: #fff;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 100;
    }
    ul.title li{
        justify-content: space-around;
        align-items: center;
    }
    ul.title li span{
        display: inline-block;
    }
    ul.title li .name{
        font-size: 16px;
    }
    ul.title li .name:after{
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent transparent #2A90DE #2A90DE;
        transform: rotate(-45deg);
        position: relative;
        left: 5px;
        top: -3px;
    }

    /*弹层*/
    
    ul.partMap{
        flex-direction: column;
        position: fixed;
        top: 51px;
        width: 100%;
        background: #fff;
        z-index: 5;
    }
    ul.partMap li {
        border-bottom: 1px solid #ddd;
    }
    ul.partMap li span{
        width: 50%;
    }



    .panel{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        padding-top: 50px;
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

