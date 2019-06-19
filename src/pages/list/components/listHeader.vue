<template>
	<div>
		<div class="header">
			<router-link to="/">
				<div class="header_back">
					<span class="iconfont">&#xe624;</span>
				</div>
			</router-link>
			城市中心
		</div>
	</div>
</template>

<script>
	export default {
		name:'listHeader'
	}
</script>

<style lang="stylus" scoped>
	.header
		height:0.88rem;
		background:#00bcd4;
		line-height: 0.88rem;
		color: #fff;
		font-size: 0.32rem;
		position: fixed;
		width: 100%;
		text-align: center;
		.header_back
			width: 0.8rem;
			position:absolute;
			left: 0;
			top: 0;
			color: #fff;
</style>