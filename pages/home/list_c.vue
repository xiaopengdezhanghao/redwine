<template>
	<view>
		<view style="width: 750rpx;">
			<image src="../../static/index/img_dd@2x.png" mode="" class="ima"></image>
			<view class="title_1">请耐心等待</view>
			<view class="title_1">收到付款后会尽快安排分发</view>
			<view class="title_2">在个人中心页面点击“订单”，可以查看订单的最新进度</view>
			<view class="over" @click="nav_to">确定</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
	
			}
		},
		methods: {
			nav_to(){
				uni.navigateTo({
					'url':"./home"
				})
			}
		}
	}
</script>

<style>
	.over{
		width:540rpx;
		height:80rpx;
		background:rgba(255,137,0,1);
		border-radius:40rpx;
		margin: 133rpx auto;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
		line-height: 80rpx;
	}
	.title_2{
		text-align: center;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(165,166,171,1);
	}
	.title_1{
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(17,23,52,1);
		line-height:40rpx;
		text-align: center;
	}
	.ima{
		width: 200rpx;
		height: 175rpx;
		margin-top: 160rpx;
		margin-left: 282rpx;
	}
</style>
