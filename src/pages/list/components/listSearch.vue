<template>
	<div>
		<div class="search">
			<div class="search_box">
				<input v-model="keyword" type="text" placeholder="请输入城市名或拼音" />
			</div>
		</div>
		<div class="search-list" v-show="keyword" ref="wrapper">
			<ul>
				<li v-for="item of list" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>
				<li v-if="hasNoData">未查到相应结果</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapMutations } from 'vuex'
	export default {
		name:'listSearch',
		props:{
			cities:Object
		},
		data () {
			return {
				keyword:'',
				list:[]
			}
		},
		methods:{
			handleCity (city) {
				this.changCity(city)
			},
			...mapMutations(['changCity'])
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		watch:{
			keyword () {
				if(!this.keyword){
					this.list = []
					return
				}
				var s = this;
				s.list = []
				for(let i in this.cities){
					$.each(this.cities[i], function(index, value) {
						if(value.name.indexOf(s.keyword) > -1 || value.spell.indexOf(s.keyword) > -1){
							s.list.push(value)
						}
					});
				}
			}
		},
		computed:{
			hasNoData () {
				return !this.list.length
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.search
		background:#00bcd4;
		position:fixed;
		left: 0;
		right: 0;
		top: 0.88rem;
		padding: 0.1rem 0.2rem;
		.search_box
			height: 0.6rem;
			line-height:0.6rem;
			background: #fff;
			border-radius: 5px;
			overflow: hidden;
			input
				width: 100%;
				border:none;
				background-color: #fff;
				line-height: 0.6rem;
				text-align: center;
				font-size: 0.24rem;
				color: #000;
				margin: 0;
				padding: 0;
	.search-list
			background-color: #fff;
			position:absolute;
			left: 0;
			right: 0;
			top: 1.68rem
			bottom:0;
			overflow: hidden;
			z-index: 100;
			li
				font-size:.3rem;
				line-height:.6rem;
				border-bottom: 1px solid #ddd;
				padding-left: .2rem;		
</style>