<template>
	<div class="jumbotron">
		<h1>任务追踪</h1>
		<p>
			<strong>
				<router-link to="/time-entries">创建一个任务</router-link>
			</strong>
			<button> {{ this.$store.state.test }} </button>
			<button @click="testAdd()"> +1 </button>
		</p>
	</div>
</template>

<script type="text/javascript">
export default {
  name: 'Home',
  methods: {
    testAdd () {
      this.$store.dispatch('testAdd')
    }
  }
}
</script>