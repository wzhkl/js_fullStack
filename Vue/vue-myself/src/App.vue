<template>
  <div class="wrapper">
    <div class="navbar">
      <div class="container">
        <div class="title-name">
          <a href="#" class="navbar-brand">
            <i class="el-icon-date"></i>
            计划板
          </a>
        </div>
        <div class="title-content">
          <ul class="navbar-title">
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/plan-list">计划列表</router-link></li>
          </ul>
        </div>
        
      </div>
    </div>
    <div class="mainContainer">
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="sidebar">
            <Sidebar></Sidebar>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="home">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'app',
  components: {
    Sidebar: Sidebar
  }
}
</script>

<style lang="stylus" scoped>
.navbar 
  background-color #f8f8f8
  border 1px solid transparent
  border-color #e7e7e7
  box-sizing border-box
  border-radius 4px
  margin-bottom 20px
  .container 
    display flex
    padding 0 40px
    align-items center;
    .title-name
      font-size 20px
      .navbar-brand
        text-decoration none
    .title-content
      .navbar-title
        display flex
        li
          list-style none
          margin-right 20px
          a
            text-decoration none

</style>
