<template>
  <div class="hello">
      {{price}}元
        
  </div>
</template>

 <script type="text/javascript">
import { bus } from '@/bus'
export default {
    name: 'hello',
    data () {
        return {
            price: '100'
        }
    },
    methods:{

    },
    created () {
        bus.$on('sendMsg',(data) => {
            this.price = data.price;
        })
    },
    mounted () {
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
