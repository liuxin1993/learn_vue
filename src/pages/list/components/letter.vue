<template>
	<ul class="letter">
		<li v-for="item of letters" :key="item" @click="handBtn" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchEnd="handleTouchEnd" :ref="item">{{item}}</li>		
	</ul>
</template>

<script>
	export default {
		name:'listLetter',
		props:{
			cities:Object
		},
		data () {
			return {
				touchFlag:false,
				startY:0,
				timer:null
			}
		},
		updated () {  //页面渲染完成执行
			this.startY = this.$refs['A'][0].offsetTop;
		},
		computed:{
			letters () {
				const letters = []
				for(let i in this.cities){
					letters.push(i)
				}
				return letters				
			}
		},
		methods:{
			handBtn(letter){
				this.$emit('changeTxt',letter.target.innerHTML)			
			},
			handleTouchStart () {
				this.touchFlag = true
			},
			handleTouchMove (e) {
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					if(this.touchFlag){
						let moveY = Math.floor(e.touches[0].clientY-88-this.startY);
						let index = Math.floor(moveY/20)
						if(index>=0 && index<this.letters.length){
							this.$emit('changeTxt',this.letters[index])
						}
					}
				},16)
			},
			handleTouchEnd () {
				this.touchFlag = true
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.letter
		width:0.4rem;
		text-align:center;
		font-size: .3rem;
		line-height: .4rem;
		position: fixed;
		right: 0;
		top: 1.68rem;
		bottom: 0;
		display: flex;
		-moz-box-orient: vertical;
		flex-direction: column;
		-moz-box-pack: center;
		justify-content: center;
</style>