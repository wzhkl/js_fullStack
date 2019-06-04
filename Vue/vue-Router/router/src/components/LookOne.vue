<template>
  <div class="look">{{message}}
    {{$route.params.name}}
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      message: '别看了'
    }
  }
}
</script>
