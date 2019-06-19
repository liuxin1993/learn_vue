<template>
	<div class="city" ref="wrapper">
		<div>
			<div class="title">当前城市</div>
			<ul class="city-list">
				<li>
					<div class="city-name">{{this.city}}</div>
				</li>
			</ul>
			
			<div class="title">热门城市</div>
			<ul class="city-list">
				<li v-for="item of hotCities" :key="item.id">
					<div class="city-name" @click="handleCity(item.name)">{{item.name}}</div>
				</li>
			</ul>
			
			<div class="city-box" v-for="(item, index) of cities" :key="index" :ref="index">
				<div class="title">{{index}}</div>
				<ul class="city-letter">
					<li v-for="city of item" :key="city.id" @click="handleCity(city.name)">
						{{city.name}}
					</li>					
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState, mapMutations } from 'vuex'
	export default {
		name:'listCity',
		props:{
			hotCities:Array,
			cities:Object,
			letter:String
		},
		computed:{
			...mapState(['city'])
		},
		methods:{
			handleCity (city) {
				this.changCity(city)
				this.$router.push('/')
			},
			...mapMutations(['changCity'])
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		watch:{
			letter () {
				this.scroll.scrollToElement(this.$refs[this.letter][0])
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.city
		position:absolute;
		left:0;
		right:0;
		top: 1.68rem;
		bottom: 0;
		overflow: hidden;
		.title
			line-height: 0.6rem;
			padding-left:0.2rem;
			font-size: 0.3rem;
			color: #666;
			background-color: #eee;
		.city-list
			padding-right: 0.5rem;
			overflow:hidden;
			li
				width:33.3%;
				padding: 0.1rem;
				box-sizing: border-box;
				text-align: center;
				float: left;
				.city-name
					font-size: 0.3rem;
					line-height:0.5rem;
					border:1px solid #ddd;
		.city-letter
			li
				padding-left:0.1rem;
				line-height:0.7rem;
				font-size: 0.3rem;
				color: #666;
				border-bottom: 1px solid #ddd;
				
</style>