<template>
  <div class="panel">
    <div class="panel-header">
      <h1 class="text-center">已有时长</h1>
    </div>
    <div class="panel-body">
      <h1 class="text-center">{{ time }}小时</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    time () {
      return this.$store.state.totalTime
    }
  }
}
</script>

<style lang="stylus" scoped>
.panel
  margin-bottom 20px
  background-color #f8f8f8
  border 1px solid transparent
  border-radius 4px
  border-color #ddd
  text-align center
  margin-right 20px
  .panel-header
    padding 10px
    border-bottom 1px solid #ddd
</style>
