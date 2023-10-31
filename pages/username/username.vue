<template>
	<view>
		username
		<button @click="tok">
			gologin
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
		tok(){
			uni.onKeyboardHeightChange(res => {
			  console.log(res.height)
			})
		}
		}
	}
</script>

<style>

</style>
