<template>
	<view>
		<!-- 导航栏 -->
		<view class="nav">
			<view >
				<image src="../../static/index/hjyl_wz@2x.png"  mode="" style="width: 121rpx;height: 31rpx;margin-top: 10rpx;"></image>
			</view>
			<image src="../../static/index/kf_1@2x.png" mode="" class="img_nav"></image>
		</view>
		<!-- 物流信息 -->
		<view class="logistics">
			<view style="margin-top: 32rpx;">
				<image src="../../static/message/icon-wl@2x.png" mode="" class="lo_img"></image>
			</view>
			<view class="wl">
				物流信息
			</view>
		</view>
		
		<!-- 物流进程 -->
		<view style="display: none;">
			<!-- 系统通知 -->
			<view class="xt">
				系统通知:
			</view>
			<!-- 物流时间 -->
			<view class="time">
				01-01 08：00：00
			</view>
			<!-- 物流进程 -->
			 <view class="process">
				<view>
					<image src="../../static/message/img_wl@2x.png" mode="" class="process_img"></image>
				</view>
				<view class="process_title">
					<view class="title_1">物流进程</view>
					<view class="title_2">亲爱的用户，您购买的商品...</view>
					<view class="title_3">来自##红酒娱乐</view>
				</view>
			</view> 
			
		</view>
		<!-- 暂无信息 -->
		<view class="information">
			<image class="informa_img" src="../../static/message/img_wzt@2x.png" mode=""></image>
			<view class="title">暂无消息</view>
		</view>
		
		<!-- 订单详情 -->
		<view style="display: none;">
			<!-- 系统通知 -->
			<view class="xt">
				订单已发货
			</view>
			<!-- 物流时间 -->
			<view class="time">
				01-01 08：00：00
			</view>
			<!-- 物流进程 -->
			 <view>
				<view>
					<image src="../../static/message/img_wl1@3x.png" mode="" class="process_imgs"></image>
				</view>
				<view class="msgs">
					<editor :placeholder="msg" read-only="true" @ready="onEditorReady"></editor>
				</view>
			</view> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:"亲爱的用户，您购买的商品WINEBOSS西班牙原装进口蜡封款红酒干红葡萄酒已为您发货。消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.msgs{
		width:675rpx;
		height:83rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(165,166,171,1);
		line-height:30rpx;
		margin: 0 auto;
	}
	.process_imgs{
		width:686rpx;
		height:316rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5rpx 10rpx 0rpx rgba(232,232,232,1);
		border-radius:16rpx;
		margin: 23rpx 32rpx;
	}
	.title{
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(165,166,171,1);
		margin-top: 39rpx;
	}
	.informa_img{
		width:265rpx;
		height:219rpx;
	}
	.information{
		margin-top: 200rpx;
		text-align: center;
	}
	.title_1{
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(17,23,52,1);
		margin-bottom: 15rpx;
	}
	.title_2{
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(165,166,171,1);	
		margin-bottom: 20rpx;
	}
	.title_3{
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(165,166,171,1);
	}
	.process_title{
		margin-top: 23rpx;
		margin-left: 33rpx;
	}
	.process_img{
		width:330rpx;
		height:200rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 5rpx 10rpx 0rpx rgba(232,232,232,1);
		border-radius:16rpx;
		margin-left: 32rpx;
		margin-top: 15rpx;
	}
	.process{
		display: flex;
		margin-top: 15rpx;
	}
	.time{width:330px;
height:200px;
background:rgba(255,255,255,1);
box-shadow:0px 5px 10px 0px rgba(232,232,232,1);
border-radius:16px;
		width:249rpx;
		height:22rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(165,166,171,1);
		margin-left: 32rpx;
		margin-top: 14rpx;
	}
	.xt{
		height:31rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(17,23,52,1);
		margin-left: 32rpx;
	}
	.lo_img{
		width: 64rpx;
		height: 56rpx;
		margin-left: 209rpx;
		margin-right: 80rpx;
	}
	.wl{
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(17,23,52,1);
		margin-top: 32rpx;
	}
	.logistics{
		width:686rpx;
		height:120rpx;
		background:rgba(255,255,255,1);
		border-radius:6rpx;
		margin: 24rpx auto;
		border: 1px solid #FFFFFF;
		box-shadow: 0rpx 0rpx 4rpx;
		display: flex;
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
