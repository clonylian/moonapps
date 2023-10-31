<template>
	<view class="ylanguagebg">
		<div class='ylanguage' @click="changelang('en')">language</div>
		<div class='ylanguage'>{{ $store.state.txt.home }}</div>
		<button>{{ $store.state.txt.welcomebot }}</button>
		<div class='ylanguages'></div>
	</view>
</template>

<script>
	export default {
		mounted() {
		},
		data() {
			return {
				
			}
		},
		methods: {
			changelang(str){
				this.$store.commit("changeyy", str);
			}
		}
	}
</script>

<style>
	.ylanguagebg{
		width: 100%;
		height: 100vh;
		margin-top:-2.75rem ;
		padding-top: 2.75rem;
		background: rgb(21, 22, 26);
	}
.ylanguage{
	text-align: center;
	font-size: 1.5rem;
	color: #fff;
}
.ylanguages{
	margin-top: 25vh;
	width: 100%;
	background: rgb(18, 19, 22);
}
</style>
