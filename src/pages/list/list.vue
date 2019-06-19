<template>
	<div>
		<list-header></list-header>
		<list-search :cities = cities></list-search>
		<list-city :letter = letter :hotCities = hotCities :cities = cities></list-city>
		<list-letter :cities = cities @changeTxt = "handScroll"></list-letter>
	</div>
</template>

<script>
	import listHeader from './components/listHeader'
	import listSearch from './components/listSearch'
	import listCity from './components/city'
	import listLetter from './components/letter'
	import axios from 'axios'
	export default {
		name:'List',
		components:{
			listHeader,
			listSearch,
			listCity,
			listLetter
		},
		data () {
			return {
				hotCities:[],
				cities:{},
				letter:''
			}
		},
		methods:{
			listGetInfo(){
				axios.get('./static/mock/city.json').then(this.listGetInfoSucc)
			},
			listGetInfoSucc (res) {
				res = res.data.data
				this.hotCities = res.hotCities
				this.cities = res.cities
			},
			handScroll (letter) {
				this.letter = letter
			}
		},
		mounted () {
			this.listGetInfo()
		}
	}
</script>

<style lang="stylus" scoped>
</style>