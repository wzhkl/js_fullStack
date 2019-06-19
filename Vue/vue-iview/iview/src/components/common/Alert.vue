<template>
  <div class="alert">
    {{msg}}
    <br/>
    <button type="success" @click="hidden">ok</button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['msg'],
  data () {
    return {
      
    }
  },
  methods: {
    hidden () {
      this.$emit('fromChild', false)
    }
  }
}
</script>

<style scoped>
.alert {
  font-size: 30px;
  text-align: center;
  width: 300px;
  height: 200px;
  border: 1px solid #aaa;
  border-radius: 5px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgb(245, 153, 153);
}
</style>
