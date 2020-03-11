<template>
	<view>
		<view style="display: flex;">
			<img src="../../static/index/icon_xz@2x.png" alt="" class="jb">
			<view>
				<view class="name">
					<view style="margin-left: 20rpx;margin-right: 21rpx;margin-top: 10rpx;">张晓倩</view>
					<view style="margin-top: 10rpx;">13828636654</view>
				</view>
				<view class="dz">
					北京市朝阳区前进路光华工业园2动201
				</view>
			</view>
			<view @click="nav_tj" style="margin-left: 130rpx;margin-top: 30rpx;border-left: 1px solid #CBCBCB;padding-left: 30rpx;height: 60rpx;">
				编辑
			</view>
		</view>
		<view class="nav_d" @click="nav_tj">
			添加新地址
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
			nav_tj(){
				uni.navigateTo({
					'url':"./tj"
				})
			}
		},
		onLoad() {
			this.$ajax.post({
				url:this.$service.api_lists.member,
				data:{
					page:5
				}
			}).then((res)=>{
				console.log(res)
			})
		}
	}
</script>

<style>
	.nav_d{
		width:686rpx;
		height:78rpx;
		background:rgba(255,137,0,1);
		box-shadow:0px 5rpx 17rpx 1rpx rgba(255,137,0,0.3);
		border-radius:39rpx;
		position: fixed;
		bottom: 39rpx;
		left: 32rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
		line-height: 78rpx;
	}
	.dz{
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(110,111,114,1);
		margin-left: 20rpx;
	}
	.name{
		display: flex;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(17,23,52,1);
	}
	.jb{
		width: 34rpx;
		height: 34rpx;
		margin-left: 48rpx;
		margin-top: 50rpx;
	}
</style>
