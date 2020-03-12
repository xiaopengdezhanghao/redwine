<template>
	<view>
		<view class="tab">
			<view class="tab-box" @click="change_page(index)" :class="now_page_index==index?'tab-box-color':''" v-for="(item,index) in footer_nav" :key="index">
				<image style="width: 40rpx; height: 40rpx;" :src="now_page_index == index?item.select_icon:item.icon"></image>
				<text class="tab-box-title">{{item.name}}</text>
			</view>
		</view>
		<!-- <view v-for="(item.index) in list" :key="index">{{item.name}}</view> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data(){
			return{
				list:[]
			}
		},
		computed:mapState(['footer_nav','now_page_index']),
		methods:{
			...mapMutations(['change_page']),
		}
	}
</script>

<style lang="scss">
	.tab {
		position: fixed;
		z-index: 999;
		height: 100rpx;
		width: 750rpx;
		bottom: 0;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		font-size: 21rpx;
		color: #bbbdbf;
		box-shadow: 4rpx 4rpx 10rpx #efefef;
	}
	.tab-box{
		height: 100%;
		width: 80rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color:rgba(165,166,171,1);
	}
	.tab-box-title{
		height:20rpx;
		font-size:20rpx;
		font-family:PingFang SC;
		font-weight:500;
		
		line-height: 20rpx;
		margin-top: 10rpx;
	}
	.tab-box-color{
		color:rgba(17,23,52,1)!important;
	}
</style>
