<template>
	<div class="header">
		<router-link tag="div" to="/" class="header_back" v-show="headerShow"><span class="iconfont header-back">&#xe624;</span></router-link>
		<div class="header_box" v-show="!headerShow" :style="styleOpacity">
			<router-link tag="div" to="/" class="back"><span class="iconfont header-back">&#xe624;</span></router-link>
			详情页面
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailHeader',
		data () {
			return {
				headerShow : true,
				styleOpacity : {
					opacity:0
				}
			}
		},
		methods:{
			handleScroll () {
				let top = document.documentElement.scrollTop				
				if(top > 50){
					let opacity = top/140
					opacity = opacity > 1 ? 1 : opacity
					this.styleOpacity = {
						opacity:opacity
					}
					this.headerShow = false
				}else{
					this.headerShow = true
				}
			}
		},
		activated () {
			window.addEventListener("scroll",this.handleScroll)
		}
	}
</script>

<style lang="stylus" scoped>
	.header
		height:1rem
		position:fixed
		left:0
		right:0
		top:0
		.header_back
			width:0.8rem
			height:0.8rem
			background-color:rgba(0,0,0,0.8)
			color:#fff
			line-height:0.8rem
			text-align:center
			border-radius:50%
			position:absolute
		.header_box
			position:absolute
			left:0
			right:0
			bottom:0
			top:0
			background-color:#00bcd4
			text-align:center
			line-height: 1rem
			font-size:.4rem
			color:#fff
			.back
				width:.6rem
				height:.6rem
				line-height:.6rem
				text-align:center
				color:#fff
				position:absolute
				left.2rem
				top:.2rem
</style>