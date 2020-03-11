<template>
	<view class="content-happy">
		<view class="uni-top">
			<image class="img" src="../../static/happy/组32@3x.png" mode=""></image>
			<view class="uni-top-face">
				<view class="uni-top-face-img">
					<image class="img" src="../../static/user/img_tx@2x.png" mode=""></image>
				</view>
				<view class="uni-top-face-text">
					<text style="height: 27rpx;line-height: 27rpx;margin-bottom: 22rpx;">王麻子家的花花</text>
					<text style="height: 27rpx;line-height: 27rpx;font-size:24rpx;font-family:PingFang SC;">欢乐豆：2000.00</text>
				</view>
			</view>
			<view class="uni-top-record" @tap="topage">游戏记录</view>
		</view>
<!-- 		<block v-for="(item,index) in lottery" :key='index'>
			<view class="uni-happy-box2" v-if="item.title == '财富碰撞'"  @click="gotonav(1,item.id,item.typeid)">
				<image class="img" src="../../static/happy/img_cfpz@3x.png" mode=""></image>
			</view>
			<view class="uni-happy-box3" v-if="item.title == '数字碰撞'" @click="gotonav(2,item.id,item.typeid)">
				<image class="img" src="../../static/happy/img_szpz@3x.png" mode=""></image>
			</view>
		</block> -->
		<view class="uni-happy-box2"  @click="gotonav(1,129,'ssc','txssc1')">
			<image class="img" src="../../static/happy/img_cfpz@3x.png" mode=""></image>
		</view>
		<view class="uni-happy-box3" @click="gotonav(2,131,'ssc','xyffssc')">
			<image class="img" src="../../static/happy/img_szpz@3x.png" mode=""></image>
		</view>
		<view class="uni-happy-box4">
			<view class="uni-happy-btn1">
				<image class="img" src="../../static/happy/img_jr@2x.png" mode=""></image>
			</view>
			<view class="uni-happy-btn2">
				<image class="img" src="../../static/happy/img_cj@2x.png" mode=""></image>
			</view>
		</view>
		<view class="uni-happy-bottom">
			<image class="img" src="../../static/happy/img_pm@3x.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lottery:[]
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			gotonav(sign,id,typeid,cpname) {
				if(sign === 1){
					uni.navigateTo({
						url: '../games/treasure?id=' + id +'&typeid=' + typeid+'&cpname='+cpname
					});
				}
				if(sign === 2){
					uni.navigateTo({
						url: '../games/number?id=' + id +'&typeid=' + typeid+'&cpname='+cpname
					});
				}
				// const _this = this;
				// let _room_amount_limit = uni.getStorageSync('home_data').room_amount_limit;
				// let lock_caipiao_ids = true;
				// _this.$ajax.get({
				// 	url: _this.$service.api_lists.userinfo,
				// 	data: {},
				// }).then((res) => {
					// if (res.data.code == 1) {
						// const userinfo = uni.setStorageSync("userinfo", res.data.data);
						// let _point = uni.getStorageSync('userinfo').balance;
						// if (uni.getStorageSync('userinfo').lock_caipiao_id != '' && uni.getStorageSync('userinfo').lock_caipiao_id != null) {
						// 	let lock_caipiao_id = uni.getStorageSync('userinfo').lock_caipiao_id.split(',');
						// 	lock_caipiao_id.map((x, y) => {
						// 		if (x == id) {
						// 			lock_caipiao_ids = false;
						// 		}
						// 	})
						// }
						// if (!lock_caipiao_ids) {
						// 	uni.showToast({
						// 		title:'网络异常',
						// 		icon:'none',
						// 		mask:true,
						// 	})
						// 	return false;
						// }
						// if( Number(_room_amount_limit) > Number(_point) ){
						// 	uni.showToast({
						// 		title:'账户余额不足',
						// 		icon:'none',
						// 		mask:true,
						// 	})
						// 	return false;
						// }

					// }
				
					
				// }).catch((err) => {
				// 	uni.showToast({
				// 		title: '系统繁忙,请稍后重试!',
				// 		icon: "none"
				// 	})
				// 	console.log('request fail', err);
				// 	return;
				// })
			},
			topage(){
				uni.navigateTo({
					url:"../capitallog/lotterylog"
				})
			},
			getData() {
				const _this = this;		
				_this.$ajax.get({
					url: _this.$service.api_lists.index,
					data: {},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						_this.setData(data);
						uni.setStorage({
							key: 'home_data',
							data: data,
							success: function() {
								console.log('success');
							}
						});
			
					}
				}).catch((err) => {
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					console.log('request fail', err);
					return;
				})
			},
			setData(data) {
				this.lottery = data.game	
			},
		}
	}
</script>

<style lang="scss">
	.content-happy{
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.img{
		width: 100%;
		height: 100%;
	}
	.uni-top{
		width:750rpx;
		height:336rpx;
		background:rgba(255,163,57,1);
		margin-bottom: 16rpx;
		position: relative;
	}
	.uni-happy-box2{
		width:686rpx;
		height:240rpx;
		border-radius:20rpx;
		margin-bottom: 16rpx;
	}
	.uni-happy-box3{
		width:686rpx;
		height:240rpx;
		border-radius:20rpx;
		margin-bottom: 16rpx;
	}
	.uni-happy-box4{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-bottom: 16rpx;
		.uni-happy-btn1{
			width:335rpx;
			height:159rpx;
			background:rgba(239,226,208,1);
			border:2rpx solid rgba(255, 190, 115, 1);
			border-radius:16rpx;
			margin-right: 16rpx;
		}
		.uni-happy-btn2{
			width:335rpx;
			height:159rpx;
			background:rgba(239,226,208,1);
			border:2rpx solid rgba(255, 190, 115, 1);
			border-radius:16rpx;
		}
	}
	.uni-happy-bottom{
		width:718rpx;
		height:240rpx;
		border-radius:20rpx;
		
	}
	.uni-top-face{
		display: flex;
		flex-direction: row;
		align-items: center;
		position: absolute;
		bottom: 64rpx;
		.uni-top-face-img{
			width:104rpx;
			height:104rpx;
			background:rgba(255,255,255,1);
			border-radius:52rpx;
			margin-left: 32rpx;
		}
		.uni-top-face-text{
			display: flex;
			flex-direction: column;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			margin-left: 24rpx;
		}
	}
	.uni-top-record{
		width:132rpx;
		height:36rpx;
		background:linear-gradient(135deg,rgba(248,56,56,1),rgba(249,98,98,1));
		border-radius:18rpx 0px 0px 18rpx;
		position: absolute;
		bottom: 73rpx;
		right: 0;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height: 36rpx;
		text-align: center;
	}
</style>
