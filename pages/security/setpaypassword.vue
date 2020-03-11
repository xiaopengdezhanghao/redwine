<template>
	<view class="content">
		<view class="content-two">
			<form @submit="formSubmit">
				<view class="uni-card">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover">
								<input class="uni-input" type="password" name="new-pwd" v-model="new_pwd" placeholder="请输入新提款密码" />
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover">
								<input class="uni-input" type="password" name="confirm-pwd" v-model="confirm_pwd" placeholder="请确认提款密码" />
							</view>
						</view>
					</view>
				</view>
				<button type="primary" class="buy-btn" formType="submit">提交</button>
			</form>
		</view>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	var graceChecker = require("../../common/graceChecker.js");
	export default {
		data() {
			return {
				new_pwd: '',
				confirm_pwd: '',
			};
		},
		methods: {
			formSubmit: function(e) {
				console.log(1)
				if (this.new_pwd != this.confirm_pwd) {
					uni.showToast({
						title: "确认新提款密码不一致!",
						icon: "none"
					});
					return false
				}
				var rule = [{
						name: "new-pwd",
						checkType: "string",
						checkRule: "6,6",
						errorMsg: "请输入6位新提款密码"
					},
					{
						name: "confirm-pwd",
						checkType: "string",
						checkRule: "6,6",
						errorMsg: "请输入6位确认新提款密码"
					},
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if (checkRes) {
					this.$ajax.post({
						url: this.$service.api_lists.set_pay_password,
						data: {
							pay_password: this.new_pwd,
							pay_password_confirm: this.confirm_pwd,
						}
					}).then((res) => {
						if (res.data.code == 1) {
							const userinfo = uni.getStorageSync("userinfo");
							userinfo.paypassword = 1;
							uni.setStorageSync("userinfo", userinfo);
							uni.showModal({
								title: '提示',
								content: "设置成功!",
								showCancel: false,
								success: function(res) {
									uni.switchTab({
										url: '../user/user'
									})
								}
							});
						}
						console.log(res);
					}).catch((err) => {
						console.log('request fail', err);
					})
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			}
		},
		components: {},
	}
</script>

<style>
	.content {
		padding: 0;
	}

	.content-two {
		padding: 20upx;
	}

	.uni-card-top {
		height: 450upx;
	}

	.produceshouyi-view {
		margin-top: 5upx;
	}

	.image {
		width: 100%;
		height: 350upx !important;
		position: absolute;
	}

	.buy-btn {margin-top:20upx;
		width: 90%;
		border-radius: 50upx;
		background-color: #3a6ee6;
		box-shadow: 0 0 10upx 6upx #cadafd;
	}

	.uni-card-content-inner-im {
		padding: 22upx 30upx !important;
	}

	.uni-list::before {
		height: 0;
	}

	.uni-list::after {
		background-color: #efefef
	}

	.producebonus {
		font-size: 65upx;
		color: #f97c22;
	}

	.produceshouyi {
		color: #3e74fe;
		font-size: 30upx;
	}

	.uni-input-money {
		border-bottom: 2upx solid #efefef;
	}

	.uni-input {
		padding: 24upx 24upx;
	}

	.uni-card-content-inner {
		padding: 0upx 20upx;
	}

	.money-hr {
		margin-top: 15upx;
	}

	.send-code {
		position: absolute;
		right: 0;
		z-index: 1;
	}
</style>
