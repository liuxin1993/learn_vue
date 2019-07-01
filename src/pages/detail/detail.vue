<template>
	<div>
		<detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<div class="contents">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>
<script>
	import DetailBanner from './components/banner'
	import DetailHeader from './components/header'	
	import DetailList from './components/list'
	import axios from 'axios'
	export default {
		name:'Detail',
		data () {
			return {
				bannerImg:'',
				sightName:'',
				gallaryImgs:[],
				list:[]
			}
		},
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		methods:{
			getInfo () {
				axios.get('./static/mock/detail.json',{
					params:{
						id:this.$route.params.id
					}
				}).then(this.getInfoSucc)
			},
			getInfoSucc (res) {
				res = res.data
				if(res.ret&&res.data){
					this.bannerImg = res.data.bannerImg
					this.sightName = res.data.sightName
					this.gallaryImgs = res.data.gallaryImgs
					this.list = res.data.categoryList
				}
				console.log(res)
			}
		},
		mounted () {
			this.getInfo()
		},
		activated () {
			this.getInfo()
		}
		
	}
</script>
<style lang="stylus" scoped>
	.contents{
		height: 50rem;
	}
</style>