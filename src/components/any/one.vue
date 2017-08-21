<template>
  <div class="hello" >
      这是one组件
      <button @click="commit">给two组件发送信息</button>
      <p>  {{ message }}</p>
  </div>
</template>

 <script type="text/javascript">
 import { bus } from './bus'

export default {
    name: 'hello',
    data () {
        return {
            message: '',
        }
    },
    methods:{
        commit () {
            bus.$emit('sendMsg',{
                msg: '这条信息来自于one'
            })

        }
    },
    mounted () {
        bus.$on('backMsg', (data) => {
            this.message = data.msg;
        })

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
