<template>
  <div class="hello" >

     <p @click="increment">增加</p> 
     <p @click="minus">减少</p> 
      {{counter}}


      <br>
      <br>
      <br>
      <br>

      <bro></bro>

      <br>
      <br>
      <br>
      <br>
      <little></little>
  </div>
</template>

 <script type="text/javascript">
import bus from '@/bus'
import bro from './bro'
import little from './littleBro'
import { mapState } from 'vuex'
export default {
    name: 'hello',
    data () {
        return {
            
        }
    },
    computed: {
        ...mapState({
            counter: 'count',
        })
    },
    components: {
        bro: bro,
        little: little,
    },
    methods:{
        increment () {
            this.$store.commit({
                type: 'increment',
                step: 10,
            });
        },
        minus () {
            this.$store.dispatch({
                type: 'minus',
                step: 10,
            });
        }
    },
    mounted () {

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
