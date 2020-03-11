<template>
	<view class="content">
		<view class="uni-card" hover-class="uni-list-cell-hover" v-for="(item,index) in bank_list">
			<view class="uni-card-content" >
				<view class="uni-card-content-inner">
					<view class="uni-list" hover-class="uni-list-cell-hover" >
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" >
							<view class="uni-list-cell-navigate uni-navigate-right uni-media-list ">
								<view class="uni-media-list-logo">
									<!-- <image :src="'../../static/img/banks/'+ item.bankcode +'.png'"></image> -->
									<image :src="'../../static/img/banks/'+ item.bankcode +'.png'"></image>
								</view>
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top">{{item.bankname}}</view>
									<view class="uni-media-list-text-bottom uni-ellipsis">持卡人：{{item.accountname}}</view>
								</view>
								<view>
									<navigator :url="'./edit?id=' + item.id" v-if="!item.iswithdraw">
										<span style="color: #3a6ee6;">编辑</span>
									</navigator>
								</view>
							</view>
						</view>
						<view class="uni-h4" style="text-align: center;">{{item.banknumber}}</view>
					</view>
				</view>
			</view>
		</view>
		<br>
		<!-- <navigator url="add" redirect> -->
			<button type="primary" @click="addBankCards" class="buy-btn">新增银行卡</button>
		<!-- </navigator> -->
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				bank_list : [],
				sysBankMaxNum:0,
				total:0
			};
		},
		components: {},
		onShow(){
			this.getBindBankList();
			this.getUserBankList();
		},
		methods: {
			addBankCards(){
				let that = this;
				if(that.sysBankMaxNum > this.total){
					uni.navigateTo({
						url:'./add'
					})
				}else{
					uni.showToast({
						title: '银行卡已上限！',
						icon: "none"
					})
				}
			},
			getUserBankList(){
				this.$ajax.get({
					url:this.$service.api_lists.bank_list,
					data:{},
				}).then((res)=>{
					if(res.data.code == 1){
						console.log(">>>>>>>>>>>>>>>>>>>>>用户银行卡")
						let data = res.data.data;
						console.log(data)
						//缓存银行信息
						this.bank_list = data.lists;
						this.sysBankMaxNum = parseInt(data.sysBankMaxNum) ;
						this.total = data.total;
					}
				}).catch((err)=>{
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					console.log('request fail', err);
					return;
				})
			},
			getBindBankList() {
				this.$ajax.get({
					url:this.$service.api_lists.bind_bank_list,
					data:{},
				}).then((res)=>{
					if(res.data.code == 1){
						let data = res.data.data;
						//缓存银行信息
						uni.setStorage({
							key: 'bank_list',
							data: data,
							success: function () {
								console.log('success');
							}
						});
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
		},
		
	}
</script>

<style>
.uni-card{box-shadow: 0 0 10upx 6upx #efefef;border-radius: 20upx;}
.uni-list::before{background-color: transparent}
.uni-list::after{background-color: transparent}
.uni-list-cell::after{background-color: transparent}
.uni-card-content-inner{padding: 4upx;}
.buy-btn{margin-top:20upx;width: 90%;border-radius: 50upx;background-color: #3a6ee6;box-shadow: 0 0 10upx 6upx #cadafd;}
</style>
