<template>
	<div>
		<mt-swipe :auto="6000">
			<mt-swipe-item>
				<div class="icon-item">
					<div class="icon-pic"><img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"></div>
					<div class="icon-p">景点门票</div>
				</div>
				<div class="icon-item">
					<div class="icon-pic"><img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"></div>
					<div class="icon-p">景点门票</div>
				</div>
				<div class="icon-item">
					<div class="icon-pic"><img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"></div>
					<div class="icon-p">景点门票</div>
				</div>
				<div class="icon-item">
					<div class="icon-pic"><img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"></div>
					<div class="icon-p">景点门票</div>
				</div>
				<div class="icon-item">
					<div class="icon-pic"><img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"></div>
					<div class="icon-p">景点门票</div>
				</div>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Swipe, SwipeItem} from 'mint-ui'
	Vue.component(Swipe.name, Swipe)
	Vue.component(SwipeItem.name, SwipeItem)
	export default { 
		name:'Micon',
		props:{
			iconList:Array
		},
		methods:{
			pages () {
				let list = []
				console.log('1')
			}
		},
		mounted () {
			console.log(this.page)
		}
	}
</script>

<style scoped>
	.mint-swipe{
		height: 5rem;
	}
	.icon-item{
		width: 25%;
		float: left;
		box-sizing: border-box;
		height: 50%;
		position: relative;
	}
	.icon-pic{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: .6rem;
		padding: 0.1rem;
	}
	.icon-pic img{
		height: 100%;
		display: block;
		margin: 0 auto;
	}
	.icon-p{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		line-height: .6rem;
		text-align: center;
		font-size: .3rem;
	}
</style>