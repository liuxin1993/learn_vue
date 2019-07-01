<template>
	<div>
		<div class="banner" @click="handleShow">
			<div class="banner_pic">
				<img :src="this.bannerImg">
			</div>
			<div class="banner_tit">
				<div class="banner_p">{{this.sightName}}</div>
				<div class="banner_num"><span class="iconfont">&#xe631;</span>{{this.gallaryImgs.length}}</div>
			</div>
		</div>
		<fade-animate>
			<common-gallary :imgs="gallaryImgs" v-if="showGallary" @close="handleHide"></common-gallary>
		</fade-animate>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/gallary'
	import FadeAnimate from 'common/fade/fadeAnimate'
	export default {
		name:'DetailBanner',
		props:{
			bannerImg:String,
			sightName:String,
			gallaryImgs:Array
		},
		data () {
			return {
				showGallary:false
			}
		},
		components:{
			CommonGallary,
			FadeAnimate
		},
		methods:{
			handleShow () {
				this.showGallary = true
			},
			handleHide () {
				this.showGallary = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		position:relative
		.banner_pic
			img
				width:100%
		.banner_tit
			display:flex
			position:absolute
			left:0
			right:0
			bottom:0
			height:0.64rem
			line-height:0.64rem
			.banner_p
				flex:1
				color:#fff
				font-size:.4rem
				padding-left:0.2rem
				background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner_num
				float:right
				color:#fff
				padding:0 .2rem
				background-color:rgba(0,0,0,0.7)
</style>