<template>
	<div>
		<div class="title">周末去哪儿</div>
		<div class="weekend-box">
			<div class="weekend-cont" v-for="item of weekendList" :key="item.id">
				<img :src="item.imgUrl">
				<div class="weekend-tit">{{item.title}}</div>
				<div class="weekend-p">{{item.desc}}</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name:'HomeWeekend',
		props:{
			weekendList:Array
		}
	}
</script>

<style lang="stylus" scoped>
	.title
		padding-left:0.2rem;
		line-height:0.64rem;
		background-color: #ddd;
	.weekend-cont
		padding: .2rem 0;
		img
			width:100%;
			height:auto;
		.weekend-tit
			font-size: .3rem;
			line-height:1.2;
			padding-left: .2rem;
			padding-top: .2rem;
		.weekend-p
			font-size: .2rem;
			color:#999;
			padding-left: .2rem;
			line-height: 1.5;
</style>