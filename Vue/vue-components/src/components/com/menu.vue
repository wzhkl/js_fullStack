<template>
  <div class="menu">
    {{message}}
    {{name.name}}
    {{app.user}}
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  inject: ['name', 'app'],
  data () {
    return {
      message: '我是menu'
    }
  },
  created() {
    let self = this
    bus.$on('todo', (val) => {
      console.log(val)
    })
  }
}
</script>

<style>

</style>
