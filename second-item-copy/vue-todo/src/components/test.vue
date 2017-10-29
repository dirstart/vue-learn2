<template>
	<div>
		<p>测试组件</p>
		<p>{{string}}</p>
		<p>我现在的值是: {{count}}</p>
		<button :click="Add">点我+1</button>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				string: '测试vue',
				count: 0
			}
		},
		methods: {
			Add: function () {
				alert('a')
				this.count++
			}
		}
	}
</script>