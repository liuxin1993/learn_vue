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
	import { mapState } from 'vuex'
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
				lastCity : '',
				iconList : [],
				recommendList:[],
				swiperList:[],
				weekendList:[]
			}
		},
		computed:{
			...mapState(['city'])
		},
		methods:{
			handGetInfo(){
				axios.get('./static/mock/index.json?city='+this.city).then(this.handGetInfoSucc)
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
			this.lastCity = this.city
			this.handGetInfo()
		},
		activated () {
			if(this.lastCity != this.city){
				this.handGetInfo();
				this.lastCity = this.city
			}
		}
	}
</script>

<style>
</style>