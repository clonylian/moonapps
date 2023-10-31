<template>
	<div class="carousel">
		<transition-group name="carousel-slide">
			<div v-for="(slide, index) in slides" :key="index" v-show="currentIndex === index" class="carousel-item">
				<img :src="slide.src" :alt="'slide' + (index + 1)">
			</div>
		</transition-group>
		<div class="carousel-dots">
			<span v-for="(dot, index) in slideCount" :key="index" :class="{ active: currentIndex === index }"
				@click="changeSlide(index)"></span>
		</div>
		<div class="annu">
			<p @click="login">{{this.txt}}</p>
			<p class="annu1" @click="home">{{this.txts}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				txt: '登录',
				txts: '开始使用',
				currentIndex: 0,
				slideCount: 3,
				slides: [{
						src: "https://tse4-mm.cn.bing.net/th/id/OIP-C.d95XU9rPpliLu_FNqV9hHQHaFN?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
					},
					{
						src: "https://ts2.cn.mm.bing.net/th?id=ORMS.ab7587dd762afd2d1cea1ee5c6cf4adc&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0"
					},
					{
						src: "https://ts2.cn.mm.bing.net/th?id=ORMS.1b638bc8ba5bb60071ad54dc5e9b55a1&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0"
					}
				]
			}
		},
		methods: {
			changeSlide(index) {
				this.currentIndex = index;
			},
			login() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
		
			},
			home(){
			uni.navigateTo({
				url:'pages/login/login'
			});
			
			}
		}
	}
</script>

<style>
	.carousel {
		margin: 0 auto;
		width: 100%;
		height: 100vh;
		position: relative;

	}

	.carousel-dots {
		position: absolute;
		bottom: 30%;
		left: 55%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
	}

	.carousel-dots span {
		width: 10px;
		height: 10px;
		margin: 0 5px;
		border-radius: 50%;
		background-color: #ccc;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.carousel-dots span.active {
		background-color: #333;
	}

	.carousel-slide-enter-active,
	.carousel-slide-leave-active {
		transition: opacity 1s;
	}

	.carousel-slide-enter,
	.carousel-slide-leave-to {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.carousel-item {
		height: 100%;
		height: 80%;
		overflow: hidden;
	}

	.carousel-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.annu {
		display: flex;
		justify-content: space-around;
		margin-top: 4rem;
	}

	.annu>p {
		padding: 1rem 2.5rem;
		border: 1px black solid;
		border-radius: 10px;
	}

	.annu1 {
		background-color: rgb(147, 211, 109);
	}
</style>