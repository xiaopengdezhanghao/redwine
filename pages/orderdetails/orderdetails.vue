<template>
	<view>
		<uni-nav-bar
		 left-icon="back" 
		 :fixed="true" 
		 :shadow="false" 
		rightUrl="../../static/icon/kf_1@2x.png" 
		title="订单详情" 
		@clickRight="right">
		</uni-nav-bar>
		<view style="width: 750rpx; display: flex; flex-direction: column;align-items: center;">
			<view style="width:686rpx;height:220rpx;
			box-shadow:0rpx 5rpx 10rpx 0rpx rgba(177,176,176,1);
			border-radius:10rpx;
			">
				<image style="width: 100%; height: 100%;" src="../../static/img/card1@3x.png" mode=""></image>
			</view>
			<view class="email-content">
				<view class="uni-card-email">
					<view class="uni-card-text">
						<text>张小乾 13828636654</text>
						<text>北京市朝阳区前进路光华工业园2动201</text>
					</view>
					<view class="uni-card-img">
						<image style="width: 100%; height: 100%;" src="../../static/icon/icon_jt@3x.png" mode=""></image>
					</view>
				</view>
				<image style="width:686rpx;
					height:6rpx;
					border-radius:10rpx;" 
					src="../../static/img/img_ct@3x.png" mode=""></image>
			</view>
			<view class="uni-red-info-content" >
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
			<view class="uni-card-order">
				<text class="uni-card-order-text">订单信息</text>
				<text class="uni-card-order-number">订单号：2020021712345601</text>
			</view>
			<view class="uni-detail-btn">
				确认收货
			</view>
		</view>

	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			uniNavBar
		},
		methods:{
			right(){
				
			}
		}
	}
</script>

<style lang="scss">
	.email-content{
		width:686rpx;
		height:140rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 5rpx 10rpx 0rpx rgba(177,176,176,1);
		border-radius:10rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: 16rpx;
	}
	.uni-card-email{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.uni-card-text{
			height: 140rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 21rpx;
		}
		.uni-card-img{
			width:20rpx;
			height:35rpx;
			margin-right: 20rpx;
		}
	}
	.uni-red-info-content{
		width:686rpx;
		height:300rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 5rpx 10rpx 0rpx rgba(177,176,176,1);
		border-radius:6rpx 10rpx 10rpx 10rpx;
		margin-top: 16rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	.card-img{
		width:266rpx;
		height:254rpx;
		margin-left: 18rpx;
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
	.uni-card-order{
		width:686rpx;
		height:110rpx;
		background:rgba(248,248,248,1);
		box-shadow:0rpx 5rpx 10rpx 0rpx rgba(177,176,176,1);
		border-radius:10rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 20rpx;
		box-sizing: border-box;
		margin-top: 15rpx;
		.uni-card-order-text{
			height:30rpx;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(17,23,52,1);
			line-height: 30rpx;
			margin-bottom: 24rpx;
		}
		.uni-card-order-number{
			height:26rpx;
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(165,166,171,1);
			line-height: 26rpx;
		}
	}
	.uni-detail-btn{
		width:686rpx;
		height:80rpx;
		background:rgba(255,137,0,1);
		border-radius:40rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height: 80rpx;
		text-align: center;
		margin-top: 191rpx;
	}
</style>
