<template>
	<view>
		<!-- 添加地址 -->
<!-- 		<view class="dz" >
			<view class="dz_1">当前暂无可用地址</view>
			<view class="dz_2" @click="nav_tj">+添加新地址</view>
		</view> -->

		<!-- 地址 -->
		<view class="dz" @click="navtotake">
			<view style="display: flex;">
				<view class="xing">张晓前</view>
				<view class="phone">13822222222222</view>
			</view>
			<view class="dzy">
				北京市朝阳区前进路光华工业园2动201
			</view>
		</view>
		<image src="../../static/index/img_ct@2x.png" mode="" style="width:749rpx;height: 6rpx;"></image>
		<view style="width: 750rpx;height: 587rpx;background:rgba(255,255,255,1);margin-top: 39rpx;">
			<!-- 最顶部标题 -->
			<view style="display: flex;">
				<view style="margin-top: 36rpx;margin-left: 32rpx;">
					<image :src="image" mode="" style="width: 126rpx;height: 126rpx;"></image>
				</view>
				<view style="margin-top: 46rpx;margin-left: 17rpx;">
					<view class="title">{{title}}</view>
					<view style="margin-top: 30rpx;">
						<span class="title_1">{{price}}</span>
						<span class="title_2">x1</span>
					</view>
				</view>
			</view>
			<!-- 购买数量 -->
			<view class="sl">
				<view class="shopnum">购买数量</view>
				<view style="display: flex;">
					<view class="jh">-</view>
					<input type="text" :disabled='true' value="1" class="sr"/>
					<view class="jah">+</view>
				</view>
			</view>
			<!-- 赠送欢乐豆 -->
			<view class="hld">
				<view class="left">赠送欢乐豆</view>
				<view class="rigth">{{prices}}</view>
			</view>
			<!-- 配送方式 -->
			<view class="ps">
				<view class="left">配送方式</view>
				<view class="rigth">快递免邮</view>
			</view>
			<!-- 订单备注 -->
			<view class="db">
				<view class="left">订单备注</view>
				<view>
					<input type="text" :value="valus" placeholder="备注,请先与平台协商一致" class="rigth" style="width: 360rpx;">
				</view>
			</view>
			<!-- 小计 -->
			<view class="xj"> 
				<view>
					<span style="color:rgba(108,110,112,1);margin-right: 12rpx;">共一件</span>
					<span>小计:</span>
				</view>
				<view style="color: #F33628;">
					￥ {{prices}}
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer"> 
			<view style="display: flex;font-size: 24rpx;margin-left: 180rpx;">
				<view style="color: #6C6E70;padding-top: 40rpx;">共一件, 合计</view>
				<view style="color: #F33628;padding-top: 40rpx;">￥{{prices}}</view>
			</view>
			<view class="tj" @click="nav_t">提交订单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				image:"",
				title:"",
				price:"",
				value:1,
				prices:"",
				valus:""
			}
		},
		methods: {
			navtotake(){
				uni.navigateTo({
					'url':"./takeas"
				})
			},
			nav_tj(){
				uni.navigateTo({
					'url':'./tj'
				})
			},
			nav_t(){
				this.$ajax.post({
					url:this.$service.api_lists.order,
					data:{
						goods_id:this.id,
						contactor:1,
						contactor_phone:1833333333333,
						address:1,
						saler_remark:"aaaaa",
						
					}
				}).then((res)=>{
					if(res.data.code==1){
						uni.navigateTo({
							'url':"./list_c"
						})
					}else if(res.data.code==0){
						uni.navigateTo({
							'url':"../login/login"
						})
					}
				})

			},
			jia(n){
				if(n==-1){
					if(this.value<2){
						this.value=1
					}else{
						this.value+=n;
						this.prices=this.value*this.price;
					}
				}else{
						this.value+=n;
						this.prices=this.value*this.price;
					}
			}
		},
		onLoad(id) {
			// if (!this.$store.state.hasLogin) {
			// 	uni.reLaunch({
			// 		url: '../login/login'
			// 		});
			// 		return;
			// 	}
			this.id=id.id
			this.$ajax.get({
				url:this.$service.api_lists.magse,
				data:{
					id:this.id
				}
			}).then((res)=>{
				console.log(res)
				var a=res.data.data;
				if(res.data.code==1){
					this.image=a.image;
					this.title=a.title;
					this.price=a.price;
					this.prices=a.price;
				}
			})
		}
	}
</script>

<style>
	page{
		background-color: rgba(208,208,208,.1);
	}
	.dzy{
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(17,23,52,1);
		text-align: left;
		margin-top: 18rpx;
		margin-left: 33rpx;
	}
	.phone{
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(108,110,112,1);
		margin-top: 52rpx;
		margin-left: 17rpx;
	}
	.xing{
		width:96rpx;
		height:31rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(17,23,52,1);
		margin-top: 43rpx;
		margin-left: 34rpx;
	}
	.tj{
		width:192rpx;
		height:69rpx;
		background:rgba(255,137,0,1);
		border-radius:35rpx;
		font-size:28rpx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height: 69rpx;
		text-align: center;
		margin-left: 31rpx;
		margin-top: 28rpx;
		
	}
	.footer{
		width: 750rpx;
		height: 120rpx;
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 0rpx;
		line-height: 120rpx;
	}
	.xj{
		display: flex;
		justify-content:flex-end;
		font-size: 24rpx;
		margin-top: 65rpx;
	}
	.db{
		display: flex;
		justify-content: space-between;
		font-size:28rpx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(48,49,50,1);
		margin-top: 48rpx;
	}
	.left{
		margin-left: 34rpx;
	}
	.rigth{
		margin-right: 34rpx;
	}
	.ps{
		display: flex;
		justify-content: space-between;
		font-size:28rpx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(48,49,50,1);
		margin-top: 47rpx;
	}
	.hld{
		margin-top: 39rpx;
		display: flex;
		justify-content: space-between;
		font-size:28rpx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(48,49,50,1);
	}
	.shopnum{
		font-size:28rpx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(48,49,50,1);
		margin-left: 35rpx;
		line-height: 58rpx;
	}
	.jah{
		width: 52rpx;
		height: 56rpx;
		border:1rpx solid rgba(208,208,208,1);
		text-align: center;
		line-height: 56rpx;
		margin-right: 34rpx;
	}
	.sr{
		width: 81rpx;
		height: 56rpx;
		border-bottom:1rpx solid rgba(208,208,208,1);
		border-top:1rpx solid rgba(208,208,208,1);;
		text-align: center;
	}
	.jh{
		width: 52rpx;
		height: 56rpx;
		border:1rpx solid rgba(208,208,208,1);
		text-align: center;
		line-height: 56rpx;
	}
	.sl{
		display: flex;
		justify-content: space-between;
		margin-top: 51rpx;
	}
	.title_2{
		
		margin-left: 34rpx;
		font-size:24rpx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(108,110,112,1);
	}
	.title_1{
		font-size:30rpx;
		font-family:PingFang;
		font-weight:bold;
		color:rgba(243,54,40,1);
	}
	.title{
		font-size:28rpx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(48,49,50,1);
	}
	.dz_2{
		width:196rpx;
		height:58rpx;
		border:1rpx solid rgba(243,54,40,1);
		border-radius:29rpx;
		font-size:30rpx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(243,54,40,1);
		line-height: 58rpx;
		margin: 0 auto;
	}
	.dz_1{
		font-size:32rpx;
		font-family:PingFang;
		font-weight:bold;
		color:rgba(48,49,50,1);
		padding-top: 39rpx;
		margin-bottom: 22rpx;
	}
	.dz{
		height: 200rpx;
		width: 750rpx;
		text-align: center;
		background:rgba(255,255,255,1);
	}
</style>
