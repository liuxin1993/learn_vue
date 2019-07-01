<template>
	<div>
		<div class="item" v-for="(item, index) of list" :key="index">
			<span class="item-icon"></span>
			{{item.title}}
			<div class="item_children">
				<detail-list :list="item.children" v-if="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailList',
		props:{
			list:Array
		}
	}
</script>

<style lang="stylus" scoped>
	.item
		line-height:0.6rem
		padding:0 .2rem
		.item-icon
			display: inline-block
			width:.36rem
			height:.36rem
			background:url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
			background-size: .4rem 3rem
			margin-top: .1rem
		.item_children
			padding-left:.2rem
</style>