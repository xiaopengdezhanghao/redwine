<template>
	<view>
		<!-- 导航栏 -->
		<view class="nav">
			<view >
				<image src="../../static/index/hjyl_wz@2x.png"  mode="" style="width: 121rpx;height: 31rpx;margin-top: 10rpx;"></image>
			</view>
			<image src="../../static/index/kf_1@2x.png" mode="" class="img_nav"></image>
		</view>
		<view>
			<image src="../../static/index/card_top@2x.png" mode=""  style="width: 100%;"  @click="nav"></image>
		</view>
		<view class="shop">
			<image src="../../static/index/card_1_1@3x.png" mode="" class="shop_img img_l" @click="nav"></image>
			<image src="../../static/index/card_1_1@3x.png" mode="" class="shop_img"  @click="nav"></image>
			<image src="../../static/index/card_1_1@3x.png" mode="" class="shop_img img_l"   @click="nav"></image>
			<image src="../../static/index/card_1_1@3x.png" mode="" class="shop_img" @click="nav"></image>
		</view>
		<!-- 底部空白 -->
		<view style="width: 750rpx;height: 26rpx;"></view>
	</view>
</template>

<script>
	import footerNav from "../../components/footer_nav.vue"
	export default {
		data() {
			return {

			}
		},
		methods: {
			nav(){
				uni.navigateTo({
					'url':"./shop"
				})
			}
		}
	}
</script>

<style>
	.img_l{
		margin-left: 32rpx;
		margin-right: 26rpx;
	}
	.shop_img{
		width: 330rpx;
		height: 316rpx;
	}
	.shop{
		width: 750rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.img_nav{
		width:48rpx;
		height: 48rpx;
		margin-left: 235rpx;
		margin-right: 32rpx;
	}
	.nav{
		width: 750rpx;
		display: flex;
		justify-content: flex-end;
		font-size:32rpx;
		font-family:MF;
		font-weight:600;
		color:rgba(17,23,52,1);
		margin-top: 68rpx;
		
	}
</style>
