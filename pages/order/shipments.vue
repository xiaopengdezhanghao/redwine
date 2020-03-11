<template>
	<view class="container">
		<view class="uni-red-info-content" @tap="goto()">
			<view class="uni-red-header">
				<text class="header-number">订单号：2020021712345601</text>
				<text class="header-text">已收款，处理中</text>
			</view>
			<view class="uni-red-card">
				<view class="card-img">
					<image style="width: 100%; height: 100%;" src="../../static/img/image1@3x.png" mode=""></image>
				</view>
				<view class="card-info-text">
					<view class="card-info-money">
						<text>WINEBOSS西班牙干红</text>
						<text style="color: #FF8900;">2000.00</text>
					</view>
					<view class="card-info-num">
						<text>共一件商品</text>
						<text>合计：</text>
						<text style="color: #FF8900;">2000.00</text>
					</view>
				</view>
			</view>
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
			goto(){
				uni.navigateTo({
					url:'../orderdetails/orderdetails'
				})
			}
		}
	}
</script>

<style lang="scss">
	.container{
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 19rpx;
	}
	.uni-red-info-content{
		width:686rpx;
		height:316rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 5rpx 10rpx 0rpx rgba(232,232,232,1);
		border-radius:6rpx 10rpx 10rpx 10rpx;
	}
	.uni-red-header{
		width: 100%;
		height: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		margin-top: 10rpx;
		.header-number{
			height:19rpx;
			font-size:20rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(140,140,140,1);
			line-height: 19rpx;
		}
		.header-text{
			height:24rpx;
			font-size:20rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,137,0,1);
			line-height: 24rpx;
		}
	}
	.uni-red-card{
		height: 254rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 14rpx;
		.card-img{
			width:266rpx;
			height:254rpx;
		}
	}
	.card-info-text{
		display: flex;
		flex-direction: column;
		margin-left: 40rpx;
		.card-info-money{
			display: flex;
			flex-direction: column;
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(17,23,52,1);
		}
		.card-info-num{
			display: flex;
			flex-direction: column;
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(165,166,171,1);
			margin-top: 32rpx;
		}
	}
</style>
