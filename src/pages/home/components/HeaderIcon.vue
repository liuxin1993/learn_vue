<template>
	<div class="icon">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="(page, index) of pages" :key="index">
		    	<div class="icon_child" v-for="item of page" :key="item.index">
		    		<div class="icon-img">
		    			<img :src="item.imgUrl">
		    		</div>
		    		<div class="icon-p">{{item.desc}}</div>
		    	</div>
		    	
		    </swiper-slide>		    
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name:'HomeIcon',
		props:{
			iconList:Array
		},
		data () {
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:false
				}
			}
		},
		computed:{
			pages () {
				let pages = []
				this.iconList.forEach((item, index) => {
					let page = Math.floor(index/8);
					if(!pages[page]){
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.icon
		width:100%;
		height:0;
		padding-bottom: 50%;
		overflow: hidden;
		.icon_child
			width: 25%;
			padding-bottom:25%;
			height: 0;
			position: relative;
			overflow: hidden;
			float: left;
			.icon-img
				position: absolute;
				left:0;
				top: 0;
				right: 0;
				bottom: .44rem;
				padding: .1rem;
				img
					height: 100%;
					margin: 0 auto;
					display: block;
			.icon-p
				position: absolute;
				left:0;
				bottom: 0;
				width: 100%;
				line-height: .44rem;
				text-align: center;
</style>