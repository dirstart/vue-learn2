<template>
	<div class="form-horizontal  jumbotron">
		<div class="form-group">
			<div class="col-sm-8">
				<label for="i_date">日期</label>
				<input type="date"
					class="form-control"
					placeholder="Date" 
					id="i_date" 
				/>
			</div>
			<div class="col-sm-4">
				<label for="i_hour">时间</label>
				<input type="number" name="" id="i_hour" placeholder="Hour" class="form-control">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<label for="memo">计划做什么呢？</label>
				<input type="text" class="form-control" placeholder="Comment">
			</div>
		</div>
	</div>
</template>