<template>
	<div>
		<home-header></home-header>
		<home-swiper :swiperList = swiperList></home-swiper>
		<home-icon :iconList = iconList></home-icon>
		<home-recommend :recommendList = recommendList></home-recommend>
		<home-weekend :weekendList = weekendList></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/HeaderSwiper'
	import HomeIcon from './components/HeaderIcon'
	import HomeRecommend from './components/HeaderRecommend'
	import HomeWeekend from './components/HeaderWeekend'
	import axios from 'axios'
	export default {
		name:'Home',            
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcon,
			HomeRecommend,
			HomeWeekend
		},
		data () {
			return {
				iconList : [],
				recommendList:[],
				swiperList:[],
				weekendList:[]
			}
		},
		methods:{
			handGetInfo(){
				axios.get('./static/mock/index.json').then(this.handGetInfoSucc)
			},
			handGetInfoSucc (res) {
				res = res.data.data
				this.iconList = res.iconList
				this.recommendList = res.recommendList
				this.swiperList = res.swiperList
				this.weekendList = res.weekendList
			}
		},
		mounted () {
			this.handGetInfo()
		}
	}
</script>

<style>
</style>