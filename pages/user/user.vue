<template>
	<view>
		<view class="uni-user-info">
			<view class="uni-user-img">
				<image style="width: 100%; height: 100%;border-radius: 50%;" :src="userinfo.face == '' || userinfo.face == '0' ? '../../static/user/face/1.jpg':'../../static/user/face/'+userinfo.face+'.jpg'" mode=""></image>
				<view class="uni-user-agent" v-if="userinfo.proxy == 1">代理</view>
			</view>
			<view class="uni-user-content">
				<text class="uni-user-content-text">{{userinfo.username}}</text>
				<view class="uni-user-content-id">
					ID:{{userinfo.id}}
				</view>
			</view>
		</view>
		<view class="uni-beans-content">
			<view class="beans" @tap="goPage(1)">
				<text class="beans-number">{{userinfo.balance}}</text>
				<text class="beans-text">欢乐豆</text>
			</view>
			<view style="width:2rpx;height:48rpx;background:rgba(165,166,171,1);"></view>
			<view class="order" @tap="goPage(3)">
				<text class="order-number">1</text>
				<text class="order-text">订单</text>
			</view>
		</view>
		<view style="height: 128rpx; width: 686rpx;
		margin-left: 32rpx;margin-bottom: 32rpx;" @tap="goPage(2)">
			<image style="width: 100%;height: 100%;" src="../../static/user/img_hld@3x.png" mode=""></image>
		</view>
		<view style="background-color: #f1f1f1;;width: 750rpx; height: 34rpx;"></view>
		<view class="list">
			<navigator  :url="userinfo.proxy == 1?'../agent/agent':'../agent/explain'" hover-class="navigator-hover">
				<view class="li">
					<view class="icon">
						<image style="width: 100%; height: 100%;" src="../../static/user/icon_dl@2x.png"></image>
					</view>
					<view class="text" v-if="userinfo.proxy == 1">代理中心</view>
					<view class="text" v-else>如何成为代理</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</navigator>
		</view>
		<view class="list" v-for="(item,index) in severList" :key="index">
			<navigator :url="item.url" hover-class="navigator-hover">
				<view class="li">
					<view class="icon">
						<image :src="item.icon"></image>
					</view>
					<view class="text">{{item.name}}</view>
					<image  class="to" src="../../static/user/to.png"></image>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
		},
		data() {
			return {
				severList: [
					{
						name: '个人资料',
						icon: '../../static/user/icon_gr@2x.png',
						'url': '../personal/personal'
					},
					{
						name: '账户设置',
						icon: '../../static/user/icon_zh@2x.png',
						'url': '../account/account'
					},
					{
						name: '设置',
						icon: '../../static/user/icon_sz@2x.png',
						'url': '../setting/setting'
					}
				],
			}
		},
		onPullDownRefresh() {
			this.getUserinfo()
			uni.stopPullDownRefresh();
			uni.showToast({
			    icon: 'none',
			    title: '刷新成功'
			});
		},
		onShow() {
			if (!this.$store.state.hasLogin) {
				uni.reLaunch({
					url: '../login/login'
				});
				return;
			}
			//初始化用户信息
			this.userinfoarr(uni.getStorageSync("userinfo"));
		},
		onLoad() {
			if (!this.$store.state.hasLogin) {
				uni.reLaunch({
					url: '../login/login'
				});
				return;
			}
			//初始化用户信息
			this.userinfoarr(uni.getStorageSync("userinfo"));
		},
		methods: {
			...mapMutations(['logout', 'userinfoarr']),
			goPage(index){
				if(index == 1){
					uni.navigateTo({
						url: '../capitallog/capitallog'
					})
				}
				if(index == 2){
					uni.navigateTo({
						url: '../happyfight/happyfight'
					})
				}
				if(index == 3){
					uni.navigateTo({
						url:'../order/order'
					})
				}
			},
			getUserinfo(){
				this.$ajax.get({
					url:this.$service.api_lists.userinfo,
					data:{}
				}).then((res)=>{
					if(res.data.code == 1){
						const userinfo = uni.setStorageSync("userinfo", res.data.data);
						this.userinfoarr(res.data.data);
					}
					console.log(res);
				}).catch((err)=>{
					console.log('request fail', err);
				})
			}
		}
	}
</script>

<style lang="scss">
	.uni-user-info{
		width: 750rpx;
		height: 112rpx;
		display: flex;
		flex-direction:row;
		align-items: center;
		margin-top: 70rpx;
		.uni-user-img{
			width: 112rpx;
			height: 112rpx;
			margin-left: 32rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
			.uni-user-agent{
				width:80rpx;
				height:24rpx;
				background:linear-gradient(135deg,rgba(222,201,165,1),rgba(191,163,113,1));
				border-radius:12rpx;
				font-size:8rpx;
				font-family:PingFang SC;
				// font-weight:bold;
				color:rgba(248,248,248,1);
				text-align: center;
				line-height: 24rpx;
				position: absolute;
				bottom: 0;
			}
		}
		.uni-user-content{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-left: 24rpx;
			.uni-user-content-text{
				height:27rpx;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(17,23,52,1);
				line-height: 27rpx;
				margin-bottom: 24rpx;
			}
			.uni-user-content-id{
				width:176rpx;
				height:32rpx;
				background:rgba(255,228,197,1);
				border-radius:16rpx;
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,137,0,1);
				line-height: 32rpx;
				text-align: center;
			}
		}
		
	}
	.uni-beans-content{
		width: 750rpx;
		height: 60rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 32rpx;
		margin-bottom: 39rpx;
		.beans{
			height: 60rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-right: 148rpx;
			.beans-number{
				height:19rpx;
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(255,137,0,1);
				text-align: center;
				margin-bottom: 10rpx;
			}
			.beans-text{
				height:23rpx;
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(110,111,114,1);
				text-align: center;
			}
		}
		.order{
			height: 60rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-left: 148rpx;
			.order-number{
				height:19rpx;
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(255,137,0,1);
				margin-bottom: 10rpx;
			}
			.order-text{
				height:23rpx;
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(110,111,114,1);
				text-align: center;
			}
		}
	}
	.list {
		width: 100%;
	
		.li {
			width: 92%;
			height: 100rpx;
			padding: 0 4%;
			border-bottom: solid 1rpx #e7e7e7;
			display: flex;
			align-items: center;
			justify-content: center;
			&.noborder {
				border-bottom: 0
			}
	
			.icon {
				flex-shrink: 0;
				width: 50rpx;
				height: 50rpx;
	
				image {
					width: 50rpx;
					height: 50rpx
				}
			}
	
			.text {
				padding-left: 20rpx;
				width: 100%;
				color: #666;
				font-size:28rpx;
				font-family:PingFang SC;
			}
	
			.to {
				flex-shrink: 0;
				width: 40rpx;
				height: 40rpx
			}
		}
	}

</style>
