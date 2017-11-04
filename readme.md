#### 还没有学会vue的时候便停止了vue的编写，三个月后已经忘得差不多了哈哈。
#### 起始不喜欢React，越写React却是渐渐地喜欢上React了，这个时候又回到了初期觉得舒心的Vue。
#### 三个月之前： Vue好优雅，React好乱；三个月之后：Vue好优雅，React好清晰而且有安全感啊。

### 出现的问题

#### 1.first-official-doc中的4
> 如何v-for和v-if一起用

#### 2.如果不用vue-cli自带的东西如何调试
```
<template id="comHeader">
		<div class="com-header">
			<span v-for="item in title">{{item}}</span>		
		</div>
		<ul>
			<li>
				<span v-for="item in data">{{item[id]}}</span>
			</li>
		</ul>
	</template>
```
例如确定如上中的 `item in data` 是否被获取等问题。
暂时替代
```
<shop-header :title="dataTitle" :data="dataArray"></shop-header>
		<div>{{dataArray}}</div>
```

#### 3.代码中的`v-for` 命名问题，命名规范

#### 4.`Vue 2.0` 中过滤器已经被废弃，需要注意
> http://blog.csdn.net/weiweismile123/article/details/70226319

#### 5.为什么在组件中的 data 一定要用返回的方式

#### 6.莫名其妙的问题，弄了一个小时
> !!!!!!!!!!!!!!!!!!!!!!!!!   "no-unused-vars":0
使用 `var app = new Vue({...}) `  报错,屏蔽了 eslint 里面的这个东西，总算好了

#### 7.vue在2.0中的broadcast已经废弃，现在如果要向子组件传值的话，需要使用this.ref。
> 具体场景：在父组件点button，将父组件的input字符传给子组件。
用法 ：child-componet ref="一个id名字" ,父组件 method:   this.$refs.id名字.子组件操作函数


### 麻烦的地方
有些原生的ES6被麻烦化了

### 便捷的地方
关于`v-on:keyup.13`后面的按键key和后面的 `.stop`都非常方便