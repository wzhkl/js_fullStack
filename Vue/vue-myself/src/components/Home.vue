<template>
  <div class="task">
    <h1 class="text">任务追踪</h1>
    <p class="create">
      <strong>
        <router-link to="/plan-list">创建一个任务</router-link>
      </strong>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.task
  border 1px solid transparent
  box-sizing border-box
  border-radius 4px
  margin-right 100px
  background-color #eeeeee
  text-align center
  .text
    font-size 63px
  .create
    font-size 20px
a
  text-decoration none
  color #337ab7
</style>

