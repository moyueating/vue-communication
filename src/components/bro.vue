<template>
  <div class="hello" @click="commit">
      这是兄弟组件
  </div>
</template>

 <script type="text/javascript">
 import { bus } from '@/bus'

export default {
    name: 'hello',
    data () {
        return {
            
        }
    },
    methods:{
        commit () {
            // alert('我向弟弟发送了信息');
            bus.$emit('sendMsg',{
                price: this.$store.state.count
            })

        }
    },
    mounted () {
        
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
