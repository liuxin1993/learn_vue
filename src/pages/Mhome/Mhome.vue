<template>
	<div>
		<mswiper :picList="picList"></mswiper>
		<micon :iconList="iconList"></micon>
	</div>
</template>

<script>
	import Mswiper from './components/Mswiper'
	import Micon from './components/Micon'
	import axios from 'axios'
	export default {
		name:'Mhome',
		components:{
			Mswiper,
			Micon
		},
		data () {
			return {
				picList:[],
				iconList:[]
			}
		},
		methods:{
			getInfo () {
				axios.get('./static/mock/index.json').then(this.getInfoSucc)
			},
			getInfoSucc (res) {
				res = res.data
				if(res.ret&&res.data){
					this.picList = res.data.swiperList
					this.iconList = res.data.iconList
				}
				console.log(res)
			}
		},
		mounted () {
			this.getInfo()
		}
	}
</script>

<style>
</style>