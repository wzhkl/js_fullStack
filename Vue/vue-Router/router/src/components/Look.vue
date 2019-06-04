<template>
  <div class="look">
    {{message}}
    <!-- {{route.params.id}} -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      message: '看看看'
    }
  }
}
</script>
