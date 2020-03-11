<template>
	<view  class="content">
		<view class="content-two">
				<view class="uni-card">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover" >
								<input class="uni-input" type="text" placeholder="原手机号" value="188****8888"/>
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover" >
								<input class="uni-input" type="number"  placeholder="请输入手机验证码"  />
								<button class="send-code" type="primary" size="mini">获取验证码</button>
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover" >
								<input class="uni-input" type="text" placeholder="请输入新手机号" value=""/>
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover" >
								<input class="uni-input" type="number"  placeholder="请输入手机验证码"  />
								<button class="send-code" type="primary" size="mini">获取验证码</button>
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover" >
								<input class="uni-input" type="password" placeholder="请输入提款密码" />
							</view>
						</view>
					</view>
				</view>
			<button type="primary" class="buy-btn">提交</button>
		</view>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
			};
		},
		components: {},
	}
</script>

<style>
.content{padding: 0;}
.content-two{padding: 20upx;}
.uni-card-top{height: 450upx;}
.produceshouyi-view{margin-top: 5upx;}
.image{width: 100%;height: 350upx !important;position: absolute;}
.buy-btn{margin-top:20upx;width: 90%;border-radius: 50upx;background-color: #3a6ee6;box-shadow: 0 0 10upx 6upx #cadafd;}
.uni-card-content-inner-im{padding: 22upx 30upx !important;}
.uni-list::before{height: 0;}
.uni-list::after{background-color: #efefef}
.producebonus{font-size: 65upx;color: #f97c22;}
.produceshouyi{color: #3e74fe;font-size: 30upx;}
.uni-input-money{border-bottom: 2upx solid #efefef;}
.uni-input{padding: 24upx 24upx;}
.uni-card-content-inner{padding: 0upx 20upx;}
.money-hr{margin-top: 15upx;}
.send-code{position: absolute;right: 0;z-index: 1;}
</style>
