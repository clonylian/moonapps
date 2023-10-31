<template>
	<view>
		<div class="head">
			<p> &nbsp &nbsp &nbsp &nbsp</p>
			<p>{{login}}</p>
			<p @click="zclog" style="color: green;">{{logins}}</p>
		</div>
		<div class="cen">
			<div class="cen1">
				<div class="head1">
					<input type="text" v-model="inputValue" @input="checkInput" placeholder="请输入你的邮箱">
				</div>
				<div class="head2">
					<input class="head3" v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="请输入你的密码"  />
					<p @click="toggleShowPassword">{{ showPassword ? '隐藏密码' : '显示密码' }}</p>
				</div>
			</div>
			<div class="cen2">
				<button class="cen3"  :style="{ backgroundColor: buttonColor }" :disabled="disableButton" @click="loginout">按钮</button>
				<p class="cen4" @click="outlogin"> {{mmwl}}</p>
			</div>
		</div>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				input: '电子邮件',
				login: '登录',
				logins: '报名',
				mmwl: '忘记密码了',
				password: '',
				showPassword: false,
				inputValue: '',
				buttonColor: 'grey',
				disableButton: true
			}
		},
		methods: {
			toggleShowPassword() {
				this.showPassword = !this.showPassword;
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
			loginout(){
				if(this.password==''){
					uni.showToast({
						icon:"error",
					    title: '密码为空',
					    duration: 2000
					});
				}else{
					uni.showToast({
					    title: '登录成功',
					    duration: 2000
					});
					
				}
			},
			outlogin(){
				uni.navigateTo({
					url:'pages/login/login'
				});
			},
			zclog(){
				uni.navigateTo({
					url:'/pages/Register/Register'
				});
			}
		}
	}
</script>

<style>
	.head {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		justify-content: space-between;
		align-items: flex-end;
		padding: 1rem 0;
	}
	.cen1{
		margin-top: 1rem;
	}

	.head>p:nth-child(2) {
		width: 6rem;
		font-size: 20px;
		text-align: right;
	}

	.head>p:nth-child(3) {
		width: 3rem;
		font-size: 16px;
		color: gold;
		text-align: center;
	}

	.login {
		font-size: 20px;
		font-weight: 900;
	}

	.cen {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 90vh;
		display: flex;
	}

	.cen1 {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.cen2 {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.head1 {
		width: 90%;
		height: 3rem;
		display: flex;
		margin: 1rem 0rem;
		border: 1px black solid;
		border-radius: 20px;
		display: flex;

	}

	.head2 {
		width: 90%;
		height: 3rem;
		display: flex;
		/* margin: 1rem 0rem; */
		border: 1px black solid;
		border-radius: 20px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.head3 {
		height: 2.5rem;
		border: none;
		outline: none;
	}

	.head1>input {
		padding-left: 2rem;
		height: 3rem;
		line-height: 3rem;
		border: none;
	}

	.cen2 {
		width: 100%;
		display: flex;
	}

	.cen3 {
		width: 90%;
		padding: 0.7rem 0;
		text-align: center;
		border-radius: 20px;
		border: 1px black solid;
		background-color: rgb(177, 177, 177);
	}

	.cen4 {
		padding: 1rem 0 0 0;
		border-bottom: 1px blue solid;
		color: blue;
	}
</style>