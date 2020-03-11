<template>
	<view>
		<view class="all">
			<view class="all_l">收货人</view>
			<input type="text" v-model="name"  placeholder="请填写收货人姓名"/>
		</view>
		<view class="all">
			<view class="all_l">手机号码</view>
			<input type="text" v-model="phone" placeholder="请填写收货人手机号"/>
		</view>
		<view class="all">
			<view class="all_l">所在地区</view>
			<input type="text" v-model="address" placeholder="请填写地区"/>
		</view>
		<view class="all">
			<view class="all_l">详细地址</view>
			<input type="text" v-model="defaults" placeholder="如道路，门牌号，小区，楼栋号等"/>
		</view>
		<view class="nav_d" @click="addres">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"",
				phone:"",
				address:"",
				defaults:""
			}
		},
		methods: {
			addres(){
				this.$ajax.post({
					url:this.$service.api_lists.addrea,
					data:{
						name:this.name,
						phone:this.phone,
						address:this.address+this.defaults,
						default:1
					}
				}).then((res)=>{
					console.log(res)
				})
			}
		},
		onLoad() {

		}
	}
</script>

<style>
	.all{
		width: 750rpx;
		display: flex;
		margin-left: 32rpx;
		margin-top: 90rpx;
	}
	.all_l{
		width: 112rpx;
		margin-right: 60rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(17,23,52,1);
	}
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
</style>
