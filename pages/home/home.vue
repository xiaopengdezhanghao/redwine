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
		<view class="shop" >
			<view style="width: 49%;">
				<image :src="data.image" v-for="(data,index) of src" :key="index" v-if="index%2==0" mode="" class="shop_img img_l" @click="nav(data.id)"></image>
			</view>
			<view style="width: 49%;">
				<image :src="data.image" v-for="(data,index) of src" :key="index" v-if="index%2!=0"   mode="" class="shop_img"  @click="nav(data.id)"></image>				
			</view>	
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
				time:"",
				src:[],
			}
		},
		methods: {
			nav(id){
				uni.navigateTo({
					'url':"./shop?id="+id
				})
			}
		},
		onShow() {
			this.$ajax.get({
				url: this.$service.api_lists.index,
				data:{
					size:10,
					page:1,
					time:""
				}
			}).then((res) => {
				if(res.data.code==1){
					this.src=res.data.data
				}
			})
			// this.$ajax.get({
			// 	url: this.$service.api_lists.message,
			// 	data:{
			// 		page:1
			// 	}
			// }).then((res) => {
			// 	console.log(res)
			// })
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
