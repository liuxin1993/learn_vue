<template>
	<div class="recommend">
		<div class="title">热销推荐</div>
		<div class="recommend-box1">
			<router-link :to="'/Detail/'+item.id" class="recommend-box" v-for="item of recommendList" :key="item.id">
				<div class="recommend-pic">
					<img :src="item.imgUrl" >
				</div>
				<div class="recommend-cont">
					<div class="recommend-tit">{{item.title}}</div>
					<div class="recommeng-p">{{item.desc}}</div>
					<div class="recommend-detail">查看详情</div>
				</div>
			</router-link>
			
			
		</div>
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend',
		props:{
			recommendList:Array
		}
	}
</script>

<style lang="stylus" scoped>
	.recommend
		padding-top:.2rem;
		overflow:hidden;
		.title
			padding-left:.2rem;
			line-height:.64rem;
			background-color: #ddd;
		.recommend-box
			padding: .2rem;
			display:flex;
			.recommend-pic
				width:1.5rem;
				height:1.5rem;
				img
					height: 100%;
			.recommend-cont
				flex: 1;
				margin-left:0.2rem;
				.recommend-tit
					font-size: 0.4rem;
					line-height:1.3;
				.recommeng-p
					font-size: 0.2rem;
					line-height:0.4rem;
					height:0.4rem;
					overflow: hidden;
					color: #999;
					white-space: nowrap;
					text-overflow: ellipsis;
				.recommend-detail
					padding: 0.1rem;
					border-radius:3px;
					color: #fff;
					background-color: #ff9300;
					width: 1.5rem;
					text-align: center;
					margin-top: .1rem;
</style>