<template>
	<view>
		<uni-nav-bar
		 left-icon="back" 
		 :fixed="true" 
		 :shadow="false" 
		rightUrl="../../static/icon/kf_1@2x.png" 
		title="订单" 
		@clickRight="right">
		</uni-nav-bar>
		<view style="width: 750rpx; display: flex;flex-direction: column;align-items: center;">
			<uni-segmented-control-order :current="current" :values="items" @clickItem="onClickItem" styleType="button"></uni-segmented-control-order>
		</view>	
		<view class="container">
			<view class="uni-red-info-content" @tap="goto(item.id)" v-if="(current-1) == item.is_delivery||current==0" v-for="(item,index) in orderList" :key="index">
				<view class="uni-red-header">
					<text class="header-number">订单号：{{item.order_sn}}</text>
					<text class="header-text">已收款，处理中</text>
				</view>
				<view class="uni-red-card">
					<view class="card-img">
						<image style="width: 100%; height: 100%;" :src="item.image" mode=""></image>
					</view>
					<view class="card-info-text">
						<view class="card-info-money">
							<text>{{item.title}}</text>
							<text style="color: #FF8900;">2000.00</text>
						</view>
						<view class="card-info-num">
							<text>共一件商品</text>
							<text>合计：</text>
							<text style="color: #FF8900;">{{item.payed_price}}</text>
						</view>
					</view>
				</view>
				<view class="uni-red-footer" v-if="item.status != 0">
					<text class="footer-number">确认收货后，获得2000.00欢乐豆</text>
					<view class="footer-btn">确认收货</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSegmentedControlOrder from "../../components/uni-segmented-control/uni-segmented-control-order.vue";
	// import collectGoods from "./collectgoods.vue";
	// import shipmentsGoods from "./shipments.vue";
	// import allGoods from "./allgoods.vue";
	export default {
		components: {
			uniNavBar,
			uniSegmentedControlOrder,
			// collectGoods,
			// shipmentsGoods,
			// allGoods
			},
		data() {
			return {
				agent:0,
				current:0,
				items: [
					'全部',
					'待发货',
					'待收货'
				],
				orderList:[]
			}
		},
		onLoad() {
			this.getOrderList();
		},
		methods: {
			getOrderList(){
				let that = this;
				that.orderList = uni.getStorageSync('shop_order_index');
				if (that.orderList.length == 0) { //如果有缓存过的数据 那么
					uni.navigateTo({
						url:'../user/user'
					})
				}
			},
			left(){
				console.log("点击了没");
				uni.navigateBack();
			},
			right(){
				
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			goto(id){
				uni.redirectTo({
					url:'../orderdetails/orderdetails?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F8F8F8;
	}
	.container{
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 19rpx;
	}
	.uni-red-info-content{
		width:686rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 5rpx 10rpx 0rpx rgba(232,232,232,1);
		border-radius:6rpx 10rpx 10rpx 10rpx;
		padding-bottom: 14rpx;
		box-sizing: border-box;
		margin-bottom: 40rpx;
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
		margin-top: 14rpx;
		.card-img{
			width:266rpx;
			height:254rpx;
			margin-left: 32rpx;
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
	.uni-red-footer{
		width: 100%;
		height: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		margin-top: 18rpx;
		.footer-number{
			height:20rpx;
			font-size:20rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(165,166,171,1);
			line-height: 20rpx;
		}
		.footer-btn{
			width:160rpx;
			height:48rpx;
			background:rgba(255,137,0,1);
			border-radius:6rpx;
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			line-height: 48rpx;
			text-align: center;
			margin-left: 40rpx;
			margin-right: 40rpx;
		}
	}
</style>
