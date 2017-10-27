<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand"><i class="glyphicon glyphicon-time"></i> 计划板</a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3" :style="{backgroundColor:'#888',height:'200px'}"><strong :style="{color:'#fff'}">3</strong></div>
      <div class="col-sm-9" >
        <router-view></router-view>
<!--     :style="{backgroundColor:'#666',color:'white',height:'200px'}"    -->      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
