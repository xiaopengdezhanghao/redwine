<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">手机号码：</text>
				<m-input type="number" clearable @clear="clear" v-model="mobile" placeholder="请输入手机号码"></m-input>
			</view>
			<view class="input-row border" style="align-items: center;">
				<text class="title">验证码：</text>
				<m-input type="number" v-model="re_code" placeholder="请输入验证码"></m-input>
				<view class="code-btn"  v-if="disableCodeBtn"  @tap="sendCode">{{codeBtn.text}}</view>
				<view class="code-btn active" v-else >{{codeBtn.text}}</view>
			</view>
			<view class="input-row border">
				<text class="title">登录密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入登录密码"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">确认密码：</text>
				<m-input type="password" displayable v-model="password_confirm" placeholder="请再次输入登录密码"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">提款密码：</text>
				<m-input type="password" displayable v-model="pay_password" placeholder="请输入提款密码"></m-input>
			</view>

		</view>
		<view class="btn-row">
			<button type="primary" class="primary buy-btn" @tap="register" :loading="loading" :disabled="loading">点击注册</button>
		</view>
		<view class="action-row">
			<navigator url="../login/login">已有账号！去登录</navigator>
		</view>
		<LotusLoading :lotusLoadingData="lotusLoadingData"></LotusLoading>
	</view>
</template>

<script>
	import service from '../../common/service.js';
	import mInput from '../../components/m-input.vue';
	import LotusLoading from "../../components/Winglau14-lotusLoading/Winglau14-LotusLoading.vue";
	export default {
		components: {
			mInput,
			LotusLoading
		},
		computed: {
			disableCodeBtn (){
				return this.codeBtn.waitingCode;
			}
			},
		data() {
			return {
				account: '',
				password: '',
				mobilecode: '',
				invitecode: '',
				realname: '',
				pay_password: '',
				mobile: '',
				password_confirm: '',
				loading: false,
				is_invite_code_show:false,
				is_mobile_show:false,
				is_qq_show:false,
				re_code:'',
				codeBtn: {
					text: '获取验证码',
					waitingCode: true,
					count: this.seconds
				},
				codeStatus:true,
				captchaImg: '',
				seconds: 30,
				code:'',
				lotusLoadingData:{
					isShow:false
				}
			}
		},
		methods: {
			register() {
				// if ( this.is_invite_code_show && uni.getStorageSync('home_data').reg_filed.is_invite_code && this.invitecode == '' ) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '邀请码为必填项'
				// 	});
				// 	return;
				// }
				// if ( this.is_invite_code_show && this.invitecode.length > 10) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '邀请码最多为 10 个字符'
				// 	});
				// 	return;
				// }
				// if (this.account.length < 5) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '账号最短为 5 个字符'
				// 	});
				// 	return;
				// }
				this.mobile = this.trim(this.mobile);
				let reg = /^1[3456789]\d{9}$/
				if(!(reg.test(this.mobile))){ 
					uni.showToast({
						icon: 'none',
						title: '手机号码不正确'
					});
					return false; 
				}
				if (this.re_code.length.length == 0) {
					uni.showToast({
						icon: 'none',
						title: '验证码不能为空'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.password !== this.password_confirm) {
					uni.showToast({
						icon: 'none',
						title: '确认密码不正确'
					});
					return;
				}
				if (this.pay_password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '提款密码为 6 个字符'
					});
					return;
				}

				const data = {
					mobile: this.mobile,
					re_code:this.re_code,
					password: this.password,
					password_confirm: this.password_confirm,
					pay_password: this.pay_password
				}
				var _self = this;
				this.lotusLoadingData.isShow = true;
				this.$ajax.post({
					url: this.$service.api_lists.userreg,
					data: data,
				}).then((res) => {
					console.log("注册成功后的信息");
					console.log(res);
					if (res.data.code == 1) {
						uni.setStorageSync("user_token", res.data.data.usertoken);
						uni.setStorageSync("userinfo", res.data.data.userinfo);
						this.$store.commit('userinfoarr', res.data.data.userinfo);
						const usertoken = res.data.data.usertoken;
						uni.showModal({
							title: '提示',
							content: '注册成功!',
							showCancel: false,
							success: function(res) {
								console.log(res)
							}
						});
						_self.$store.commit('login', usertoken);
						_self.toMain(usertoken);
						
					}
					this.lotusLoadingData.isShow = false;
				}).catch((err) => {
					this.lotusLoadingData.isShow = false;
					uni.showToast({
						title: '网络错误',
						icon: "none"
					})
					console.log('request fail', err);
					return;
				})
			},
			toMain(usertoken) {
				uni.reLaunch({
					url: '../home/home',
				});
			},
			clear(){
				this.mobile = ''
			},
			trim(str)
			{
			     return str.replace(/(^\s*)|(\s*$)/g,"");
			},
			sendCode() {
				let reg = /^1[3456789]\d{9}$/
				if(!(reg.test(this.mobile))){ 
					uni.showToast({
						icon: 'none',
						title: '手机号码不正确'
					});
					return false; 
				} 
				this.gotoSendCode();
				this.codeBtn.waitingCode = false;
				this.codeBtn.count = this.seconds;
				this.codeBtn.text = this.codeBtn.count + 's';
				
				let countdown = setInterval( () => {
					this.codeBtn.count--;
					this.codeBtn.text = this.codeBtn.count + 's';
					if( this.codeBtn.count < 0 ){
						clearInterval(countdown);
						this.codeBtn.text = '重新发送';
						this.codeBtn.waitingCode = true;
						this.codeStatus = true;
					}
				},1000);
			},
			//发送验证码
			gotoSendCode(){
				let that = this;
				let reg = /^1[3456789]\d{9}$/
				if(!(reg.test(that.mobile))){ 
					uni.showToast({
						icon: 'none',
						title: '手机号码不正确'
					});
					return false; 
				} 
				if(that.codeStatus){
					that.$ajax.post({
							url: that.$service.api_lists.sendcode,
							data: {mobile:that.mobile},
						}).then((res) => {
							this.codeStatus = false;
							if (res.data.code == 1) {
								
								let data = res.data;
								uni.showToast({
									icon: 'none',
									title: data.data
								});
								console.log(data.msg);
							}
						}).catch((err) => {
							this.codeStatus = false;
							uni.showToast({
								title: '网络错误',
								icon: "none"
							})
							console.log('request fail', err);
							return;
						})
				}

			}
		},
		onLoad(event) {
			// if (event.invcode) {
			// 	this.invitecode = event.invcode;
			// }
			// if( uni.getStorageSync('home_data') ){
			// 	this.is_invite_code_show = uni.getStorageSync('home_data').reg_filed.is_invite_code_show;
			// 	this.is_mobile_show =  uni.getStorageSync('home_data').reg_filed.is_mobile_show;
			// 	this.is_qq_show = uni.getStorageSync('home_data').reg_filed.is_qq_show;
			// }
			// this.$store.commit('logout');
		}
	}
</script>

<style lang="scss" scoped>
	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		width: 100upx;
		height: 100upx;
		border: 1upx solid #dddddd;
		border-radius: 100upx;
		margin: 0 40upx;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 60upx;
		height: 60upx;
		margin: 20upx;
	}

	.input-row .title {
		width: 25%;
	}

	.buy-btn {
		margin-top: 20upx;
		width: 90%;
		border-radius: 50upx;
		background-color: #FF8900;
		/* box-shadow: 0 0 10upx 6upx #cadafd; */
	}

	.input-group::before {
		background-color: transparent;
	}

	.input-group::after {
		background-color: transparent;
	}

	.input-row.border::after {
		background-color: #efefef;
	}

	.input-group {
		box-shadow: 0 0 10upx 6upx #efefef;
		border-radius: 20upx;
	}

	.input-row {
		padding: 15upx 0upx;
	}
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.action-row navigator {
		color: #FF8900;
		padding: 0 20upx;
	}
	.code-btn{
		width:160rpx;
		height:64rpx;
		background:rgba(254,224,188,1);
		border-radius:32rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,137,0,1);
		text-align: center;
		line-height: 64rpx;
	}
	.active{
		background:rgba(165,166,171,1);
		color:rgba(255,254,253,1);
	}
</style>
