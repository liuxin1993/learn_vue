<template>
	<div>
		<div class="banner" @click="handleShow">
			<div class="banner_pic">
				<img src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg">
			</div>
			<div class="banner_tit">
				<div class="banner_p">我的发嗲戴假发及哦啊</div>
				<div class="banner_num"><span class="iconfont">&#xe631;</span>32</div>
			</div>
		</div>
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleHide"></common-gallary>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/gallary'
	export default {
		name:'DetailBanner',
		data () {
			return {
				showGallary:false,
				imgs:['https://imgs.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_r_800x800_e9c1d2be.jpg','https://imgs.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png']
			}
		},
		components:{
			CommonGallary
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