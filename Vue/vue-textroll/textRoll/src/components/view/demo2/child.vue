<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>

<script>
export default {
  name: 'demoChild2',
  data () {
    return {
      message: '我还是很帅'
    }
  },
  methods: {
    sendMsg () {
      this.$emit('xe', this.message)
    }
  }
}
</script>
