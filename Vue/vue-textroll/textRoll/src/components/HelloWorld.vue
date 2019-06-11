<template>
  <section class="hello">
    <div class="scroll-box">
      <textScroll :dataList="data" scrolltype="scroll-up"></textScroll>
    </div>
    <div class="scroll-box">
      <textScroll :dataList="data" scrolltype="scroll-left"></textScroll>
    </div>
  </section>
</template>

<script>
import textScroll from './TextScroll'
export default {
  data () {
    return {
      data: [
        {text: 'one'},
        {text: 'two'},
        {text: 'three'}
      ]
    }
  },
  components: {
    textScroll
  }
}
</script>

<style scoped>
.hello {
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid #e7e8e9;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}
.scroll-box {
  background-color: #f9f9f9;
  border: 1px solid #e7e7e8;
  border-radius: 5px;
}
</style>
