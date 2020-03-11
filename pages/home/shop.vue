<template>
	<view>
		<view>
			<image :src="image" mode="" style="width: 750rpx;height: 480rpx;"></image>
			<view>
				<view style="display: flex;justify-content: space-between;">
					<view class="price">￥{{price}}/瓶</view>
					<view style="margin-top: 8rpx;margin-right: 32rpx;">
						<image src="../../static/icon/hld@2x.png" mode="" style="width: 32rpx;height: 28rpx;margin-right: 8rpx;vertical-align:middle"></image>
						<span class="sp">赠送10000欢乐豆</span>
					</view>
				</view>
				<view class="shop_1">{{title}}</view>
				<view class="shop_2">{{title}}</view>
				<view class="kd">
					<view class="kd1">快递费：0.00元</view>
					<view class="kd2">月销量：59</view>
				</view>
			</view>
		</view>
		<!-- 富文本商品详情 -->
		<view>
			<rich-text :nodes="content"></rich-text>
		</view>
		<!-- 底部导航 -->
		<view style="position: fixed;bottom: 0rpx;z-index: 999;display: flex;">
			<view class="kefu">
				<image src="../../static/index/icon_kf2@2x.png" mode="" style="width: 100%;height: 100%;"></image>
			</view>
			<!-- 购买 -->
			<view class="shopping" @click="nav_lis">
					立即购买
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				price:"",
				title:"",
				image:"",
				content:""
			}
		},
		methods: {
			onEditorReady(){
				
				
			},
			nav_lis(){
				var a=this.id
				uni.navigateTo({
					url:"./list?id="+a
				})
			}
		},
		onLoad(id) {
			this.id=id.id;
			this.$ajax.get({
				url:this.$service.api_lists.magse,
				data:{
					id:this.id
				}
			}).then((res)=>{
				console.log(res)
				var a=res.data.data;
				if(res.data.code==1){
					this.price=a.price;
					this.title=a.title;
					this.image=a.image;
					this.content=a.content;
				}
			})
		}
	}
</script>

<style>
	.shopping{
		text-align: center;
		width:456rpx;
		height:88rpx;
		background:rgba(255,137,0,1);
		border-radius:44rpx;
		margin-left: 24rpx;
		font-size:32rpx;
		font-family:FZHTJW;
		font-weight:normal;
		color:rgba(248,248,248,1);
		line-height: 88rpx;
	}
	.kefu{
		width:206rpx;
		height:88rpx;
		margin-left: 32rpx;
		margin-bottom: 32rpx;
	}
	.kd2{
		margin-right: 34rpx;
		font-family:FZZhongDengXian-Z07S;
		font-weight:400;
		color:rgba(243,54,40,1);
	}
	.kd1{
		margin-left: 33rpx;
		font-family:FZZhongDengXian-Z07S;
		font-weight:400;
		color:rgba(108,110,112,1);
	}
	.kd{
		margin-top: 24rpx;
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
	}
	.shop_2{
		margin-top: 15rpx;
		margin-left: 32rpx;
		font-size:24rpx;
		font-family:FZZhongDengXian-Z07S;
		font-weight:400;
		color:rgba(48,49,50,1);
	}
	.shop_1{
		margin-left: 32rpx;
		font-size:28rpx;
		font-family:FZHei-B01S;
		font-weight:400;
		color:rgba(48,49,50,1);
	}
	.sp{
		font-size:24rpx;
		font-family:FZHei-B01S;
		font-weight:400;
		color:rgba(108,110,112,1);
		
	}
	.price{
		margin-top: 24rpx;
		margin-left: 36rpx;
		font-size:24rpx;
		font-family:FZHei-B01S;
		font-weight:bold;
		color:rgba(243,54,40,1);
	}
</style>
