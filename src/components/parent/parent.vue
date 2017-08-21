<template>
    <div class="parent">
        <p>父亲:给你{{ money }}元零花钱</p>
        <kid :money=" money" @repay="repay"></kid>
        <br>
        <button @click="add">那给你加100</button>
        <p v-if="back" @repay="repay">儿子：超过300我不要，还给你 {{ back }}元</p>
    </div>
</template>

<script type="text/javascript">
import kid from './kid'
export default {
    name: 'parent',
    data () {
        return {
            money: 100,
            back: null
        }
    },
    components:{
        kid
    },
    methods:{
        repay (back) {
            this.back = back
        },
        add(){
            this.money += 100;
        }
    },
    created () {
    },
    mounted () {
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
