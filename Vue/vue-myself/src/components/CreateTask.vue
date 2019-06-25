<template>
<div>
  <div class="block">
    <div class="date">
      <div class="demonstration"><strong>日期</strong></div>
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="time">
      <div class="demonstration"><strong>时间</strong></div>
      <el-input-number v-model="totalTime" :min="1" :max="Infinity"></el-input-number>
    </div>
  </div>
  <div class="comment">
    <div class="comment-title"><strong>备注</strong></div>
    <el-input v-model="comment" placeholder="请输入Comment"></el-input>
  </div>
  
  <div class="button">
    <el-button type="primary" @click="save">保存</el-button>
    <router-link to="/plan-list">
      <el-button type="danger">取消</el-button>
    </router-link>
  </div>
  <hr>
  
</div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      totalTime: '',
      comment: ''
    }
  },
  methods: {
    save () {
      const plan = {
        name: '吴争晖',
        avatar: 'https://user-gold-cdn.xitu.io/2019/3/3/169421d25f2c0261?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        date: this.date,
        totalTime: this.totalTime,
        comment: this.comment
      }
      this.$store.dispatch('savePlan', plan)
      this.$store.dispatch('addTotalTime', this.totalTime)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.block
  margin-top 15px
  display flex
  .date
    flex 1
  .time
    flex 1
.comment
  margin-top 15px
.button
  margin 15px 0
</style>
