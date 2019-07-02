<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item of picList" :key="item.id">
		  	<img :src="item.imgUrl">
		  </mt-swipe-item>
		  
		</mt-swipe>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Swipe, SwipeItem } from "mint-ui"
	Vue.component(Swipe.name, Swipe)
	Vue.component(SwipeItem.name, SwipeItem)
	export default {
		name:'Mswiper',
		props:{
			picList:Array
		}
	}
</script>

<style scoped>
	img{width: 100%;display: block;height: 100%;}
	.mint-swipe{
		width: 100%;
		height: 2.67rem;
	}
	.mint-swipe >>> .mint-swipe-indicator.is-active{
		background-color: #007aff;
		opacity: 1;
	}
</style>