<template>
	<div class="pic">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="item of swiperList" :key="item.id">
		    	<img :src="item.imgUrl">
		    </swiper-slide>
		    
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name:'HomeSwiper',
		props:{
			swiperList:Array
		},
		data() {
	      return {
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				}
			}
	    }
	}
</script>

<style lang="stylus" scoped>
	.pic
		img
			width:100%
</style>