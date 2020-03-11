<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">手机号：</text>
				<m-input class="m-input" type="text" clearable focus @clear="clear" v-model="username" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary buy-btn" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text style="color: #CCCCCC;">|</text>
            <navigator url="../service/service">找回密码</navigator>
		</view>
		<LotusLoading :lotusLoadingData="lotusLoadingData"></LotusLoading>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'
    import LotusLoading from "../../components/Winglau14-lotusLoading/Winglau14-LotusLoading.vue";
	export default {
		components: {
			mInput,
			LotusLoading
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				username: '',
				password: '',
				positionTop: 0,
				lotusLoadingData:{
					isShow:false
				}
			}
		},
		onNavigationBarButtonTap() {
			uni.switchTab({
				url: '../home/home',
			});
		},
		// computed: mapState(['forcedLogin', 'show_loading']),
		methods: {
			...mapMutations(['login', 'logout', 'userinfoarr']),
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				let reg = /^1[3456789]\d{9}$/
				if(!(reg.test(this.username))){ 
					uni.showToast({
						icon: 'none',
						title: '手机号码不正确'
					});
					return false; 
				} 
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				this.lotusLoadingData.isShow = true;
				this.$ajax.post({
					url: this.$service.api_lists.login,
					data: {
						username: this.username,
						password: this.password
					}
				}).then((res) => {
					if (res.data.code == 1) {
						uni.setStorageSync("user_token", res.data.data.usertoken);
						const userinfo = uni.setStorageSync("userinfo", res.data.data.userinfo);
						this.userinfoarr(res.data.data.userinfo);
						this.toMain(res.data.data.usertoken);
					}
					console.log(res);
					this.lotusLoadingData.isShow = false;
				}).catch((err) => {
					this.lotusLoadingData.isShow = false;
					console.log('request fail', err);
				})
			},
			toMain(usertoken) {
				this.login(usertoken);
				uni.reLaunch({
					url: '../home/home',
				});
			},
			clear(){
				this.account="";
			}
		},
		onLoad() {
			this.logout();
		}
	}
</script>

<style>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #FF8900;
		padding: 0 20upx;
	}

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
</style>
