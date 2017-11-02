<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>
    <div class="panel-body">
      <h1 class="text-center">{{time}}小时</h1>
    </div>
    <router-link to="/test">跳转test1</router-link>
    <router-link to="/test2">跳转test2</router-link>
    <router-link to="/ele-ui">跳转到表格</router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      time () {
        return this.$store.state.hour
      }
    }
  }
</script>