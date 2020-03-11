<template>
	<view class="content" style="align-items: center;">
		<view v-if="statusShow == 1">
			<view class="uni-game-shows-header">
				<image class="img" src="../../static/games/treasure/img_cfpz@2x.png" mode=""></image>
			</view>
			<text class="uni-title-game">游戏玩法</text>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="notes"></rich-text>
			</view>
		</view>
		<view v-if="statusShow == 2">
			<view class="uni-game-shows-header">
				<image class="img" src="../../static/games/number/img_szpz@2x.png" mode=""></image>
			</view>
			<text class="uni-title-game">游戏玩法</text>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="notes"></rich-text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				strings:[],
				statusShow:1,
				game_list:[],
				current: 0,
				index:0,
				id:0,
				notes:''
			}
		},
		onLoad(option) {
			this.statusShow = parseInt(option.statusShow);
			this.id = option.id
			const data = uni.getStorageSync('home_data');
			if(!data){ //如果有缓存过的数据 那么
				uni.switchTab({
					url: '../home/home'
				})
			}
			this.getData();
		},
		methods:{
			getData(){
				this.$ajax.get({
					url:this.$service.api_lists.game_notes,
					data:{id:this.id},
				}).then((res)=>{
					if(res.data.code == 1){
						let data = res.data.data;
						this.notes = data.notes
					}
				}).catch((err)=>{
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					console.log('request fail', err);
					return;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.img{
		width: 100%;
		height: 100%;
	}
	.uni-game-shows-header{
		width:686rpx;
		height:80rpx;
		border-radius:10rpx;
		margin-bottom: 32rpx;
	}
	.uni-title-game{
		width:126rpx;
		height:32rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(0,0,0,1);
		line-height: 32rpx;
	}
</style>
