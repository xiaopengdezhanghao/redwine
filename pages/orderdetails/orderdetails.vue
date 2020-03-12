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

			<view class="uni-order-details-header">
				<view class="details-header-img">
					<image style="width: 100%; height: 100%;" src="../../static/img/card1@2x.png" mode=""></image>
				</view>
				<text class="details-header-text" v-if="detailsList.status == 0">订单待付款</text>
				<text class="details-header-text" v-if="detailsList.status == 1">订单处理中</text>
				<text class="details-header-text" v-if="detailsList.status == 2">订单已收货</text>
				<text class="details-header-text" v-if="detailsList.status == -1">订单取消</text>
			</view>
			<view class="email-content">
				<view class="uni-card-email">
					<view class="uni-card-text">
						<text>{{detailsList.contactor}} {{detailsList.contactor_phone}}</text>
						<text>{{detailsList.address}}</text>
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
							<text>{{detailsList.title}}</text>
							<text style="color: #FF8900; font-size: 32rpx;">
								<span style="height:15px;font-size:20rpx;font-family:PingFang SC;font-weight:bold;color:rgba(255,137,0,1); margin-right: 9rpx;">￥</span>
								{{detailsList.payed_price}}
								<span style="height:15px;font-size:20rpx;font-family:PingFang SC;font-weight:500;color:rgba(165,166,171,1);margin-left: 13rpx;">×1</span>
							</text>
						</view>
						<view class="card-info-num">
							<text>共一件商品</text>
							<text>合计：</text>
							<text style="color: #FF8900; font-size: 32rpx;">
								<span style="height:15px;font-size:20rpx;font-family:PingFang SC;font-weight:bold;color:rgba(255,137,0,1); margin-right: 9rpx;">￥</span>
								{{detailsList.payed_price}}
							</text>
						</view>
					</view>
			</view>
			<view class="uni-card-order">
				<text class="uni-card-order-text">订单信息</text>
				<text class="uni-card-order-number">订单号：{{detailsList.order_sn}}</text>
			</view>
			<view class="uni-detail-btn" v-if="detailsList.is_delivery == 1">
				确认收货
			</view>
		</view>
		<footer-nav></footer-nav>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				id:'',
				detailsList:{}
			};
		},
		components:{
			uniNavBar
		},
		onLoad(option) {
			this.id = option.id;
			this.getOrderDetails();
		},
		methods:{
			toPage(){
				uni.navigateBack({
					delta:1
				})
			},
			right(){
				
			},
			getOrderDetails(){
				
				this.$ajax.get({
					url:this.$service.api_lists.details,
					data:{
						id:this.id
					}
				}).then((res)=>{
					if(res.data.code == 1){
						this.detailsList = res.data.data;
					}
				}).catch((err)=>{
					console.log('request fail', err);
				})
			},
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
	.uni-order-details-header{
		position: relative;
		.details-header-img{
			width:686rpx;
			height:220rpx;
			box-shadow:0rpx 5rpx 10rpx 0rpx rgba(177,176,176,1);
			border-radius:10rpx;
		}
		.details-header-text{
			height:32rpx;
			font-size:32rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			line-height:32rpx;
			position: absolute;
			top: 95rpx;
			left: 121rpx;
		}
	}
</style>
