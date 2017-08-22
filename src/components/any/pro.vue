<template>
  <div>

      <one></one>
      <br>
      <br>
      <two></two>
  </div>
</template>

 <script type="text/javascript">
import bus from './bus'
import one from './one'
import two from './two'
export default {
    name: 'hello',
    data () {
        return {
            
        }
    },
    computed: {

    },
    components: {
        one,
        two
    },
    methods:{

    },
    mounted () {

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
