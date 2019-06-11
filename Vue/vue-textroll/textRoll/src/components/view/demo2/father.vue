<template>
  <div class="container">
    {{msg}}
    <child @xe='getxe'></child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: 'demo2',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getxe (data) {
      this.msg = data
    }
  },
  components: {
    child
  }
}
</script>
