<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont header-back">&#xe624;</span>
		</div>
		<div class="header-min">
			<span class="iconfont header-search">&#xe632;</span>
			请输入城市、景区
		</div>
		<router-link to="/list">
			<div class="header-right">
				{{this.city}}<span class="iconfont">&#xe6aa;</span>			
			</div>
		</router-link>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name:'HomeHeader',
		computed:{
			...mapState(['city'])
		}
	}
</script>

<style lang="stylus" scoped>
	.header
		height:.88rem
		line-height:.88rem
		text-align:center
		background:#00bcd4
		color:#fff
		display:flex
		.header-left
			width:.86rem
			float:left		
		.header-right
			min-width:1.2rem
			padding:0 0.1rem
			float:right
			color:#fff
		.header-min
			flex:1
			height:0.68rem
			line-height:0.68rem
			margin-top:0.1rem
			background:#fff
			border-radius:5px
			color:#666
			text-align:left
			.header-search				
				float:left
				margin-left:0.1rem
			
			
</style>