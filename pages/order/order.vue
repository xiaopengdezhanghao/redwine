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
		<view>
			<view v-show="current === 0">
				<all-goods></all-goods>
			</view>
			<view v-show="current === 1">
				<shipments-goods></shipments-goods>
			</view>
			<view v-show="current === 2">
				<collect-goods></collect-goods>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSegmentedControlOrder from "../../components/uni-segmented-control/uni-segmented-control-order.vue";
	import collectGoods from "./collectgoods.vue";
	import shipmentsGoods from "./shipments.vue";
	import allGoods from "./allgoods.vue";
	export default {
		components: {
			uniNavBar,
			uniSegmentedControlOrder,
			collectGoods,
			shipmentsGoods,
			allGoods
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
			}
		},
		methods: {
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
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F8F8F8;
	}
</style>
