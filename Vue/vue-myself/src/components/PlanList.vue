<template>
  <div>
    <router-link to="/plan-list/create-task"
    v-if="$route.path !== '/plan-list/create-task'"
    >
    <el-button type="primary">创建</el-button>
      
    </router-link>

    <div v-if="$route.path == '/plan-list/create-task'">
      <h1>创建</h1>
    </div>
    <hr>

    <router-view></router-view>

    <div class="plan-lists">
      <p v-if="!planList.length">
        <strong>还没有任何计划</strong>
      </p>
      <div v-if="planList.length">
        <a href="#" v-for="(plan, index) in planList" :key="index">
          <el-row>
            <el-col :span="24">
              <div class="list-item">
                <div class="list-left">
                  <img :src="plan.avatar" alt="" class="avatar img-avatar" />
                  <p class="text-center">
                    <strong>{{plan.name}}</strong>
                  </p>
                </div>
                <div class="list-center">
                  <h3 class="totalTime">
                    <i class="el-icon-alarm-clock"></i>
                    {{ plan.totalTime }}
                  </h3>
                  <p class="date">
                    <i class="el-icon-date"></i>
                    {{ plan.date | formatDate }}
                  </p>
                </div>
                <div class="list-right">
                  <p>{{ plan.comment }}</p>
                </div>
                
              </div>
              <div class="delete" @click.stop="deletePlan(index)">
                  <i class="el-icon-delete"></i>
                </div>
            </el-col>
          </el-row>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PlanList',
  computed: {
    planList () {
      return this.$store.state.list
    }
  },
  methods: {
    deletePlan (idx) {
      // 减去总时间
      this.$store.dispatch('decTotalTime', this.planList[idx].totalTime)
      // 删除计划
      this.$store.dispatch('deletePlan', idx)
    }
  },
  filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + MM + '-' + d;
      }
    }
}
</script>

<style lang="stylus" scoped>
.list-item 
  border 1px solid transparent
  border-radius 4px
  border-color #ddd
  display flex
  align-items center
  .list-left
    text-align center
  .list-center
    margin 0 20px
  .list-right
    flex 1
    text-align center
.delete
  position absolute
  top 10px
  right 20px

a
  text-decoration none
</style>

