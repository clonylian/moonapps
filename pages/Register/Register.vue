<template>
	<view>
		<div class="head">
			<svg @click="gologin" class="clone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path
					d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z">
				</path>
			</svg>
			<p class="head_one">{{reg}}</p>
			<p class="head_two">&nbsp &nbsp &nbsp &nbsp</p>
		</div>
		<p class="head_two">{{regs}}</p>
		<div class="reginput">
			<div class="regtwo">
				<div class="regp">
					<input  type="text" v-model="inputValue" @input="checkInput"  placeholder="电子邮件地址" />
				</div>
				<p class="regpone">{{moon}}<b>Moon App</b></p>
			</div>
			<div  :style="{ backgroundColor: buttonColor }" :disabled="disableButton"  class="regthree">
				{{jixu}}
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reg: '让我们开始吧',
				regs: '你的电子邮件地址是什么？',
				moon: '该邮箱将用于登录',
				jixu:'继续',
				inputValue: '',
				showPassword: false,
				inputValue: '',
				buttonColor: 'grey',
				disableButton: true
			}
		},
		methods: {
			gologin() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			checkInput() {
			 const expectedValue = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			      if (expectedValue.test(this.inputValue)) {
					this.buttonColor = 'green';
					this.disableButton = false;
				} else {
					this.buttonColor = 'grey';
					this.disableButton = true;
				
				}
			},
		}
	}
</script>

<style>
	.clone {
		width: 25px;
		height: 25px;
		margin: 0rem 0 0 1rem;
	}

	.head {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.head_one {
		width: 11rem;
		font-size: 24px;
	}

	.head_two {
		text-align: center;
		font-size: 18px;
		padding: 0.5rem 0 2rem 0;
	}

	.reginput {
		width: 100%;
		display: flex;
		height: 80vh;
		    flex-direction: column;
		    align-items: center;
		   justify-content: space-between
	}

	.regp {
		width: 90%;
		height: 3rem;
		border: 1px black solid;
		border-radius: 20px;
		align-items: center
	}

	.regp>input {
		margin-left: 1rem;
		height: 3rem;
	}

	.regpone {
		margin-top: 1rem;
		font-size: 14px;
	}
	.regtwo{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	.regthree{
		width: 85%;
		background-color: rgb(177, 177, 177);
		text-align: center;
		padding: 1.5rem 0;
		border-radius: 20px;
		border: 1px black solid;
	}
</style>