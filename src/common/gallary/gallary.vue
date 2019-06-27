<template>
	<div class="contion" @click="handleHide">
		<div class="wrapper">
			<swiper :options="swiperOption">
			    <swiper-slide v-for="(item, index) of imgs" :key="index">
			    	<img
			    		class="gallary_img" 
			    		:src="item">
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name:'CommonGallary',
		props:{
			imgs:{
				type:Array,
				default () {
					return ['https://imgs.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_r_800x800_e9c1d2be.jpg','https://imgs.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png']
				}
			}
		},
		data () {
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					paginationType : 'fraction',
					observer:true,
					observeParents:true
				}
			}
		},
		methods:{
			handleHide () {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.contion	
		display:flex
		flex-direction:column
		justify-content:center
		position:fixed
		left:0
		right:0
		top:0
		bottom:0
		background-color:#000
		.wrapper
			width:100%
			height:0
			padding-bottom:100%
			.swiper-container
				overflow:inherit
				.swiper-pagination
					color:#fff
					bottom:-1rem
				.gallary_img
					width:100%	
				
</style>