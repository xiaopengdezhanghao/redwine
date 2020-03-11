<template>
	<view class="content">
		<view class="uni-card" v-if="agent == 1">
			<view class="uni-card-content">
				<view class="uni-card-content-inner" style="padding: 0px 16px;">
					<view class="uni-flex">
						<view class="text" style="flex: 1;">
							<input class="uni-input" type="text" v-model="accountsearch" placeholder="请输入账号查询" />
						</view>
						<view class="text" style="width: 100upx;text-align: center;color: #3a6ee6;line-height: 80upx;" hover-class="uni-list-cell-hover" @click="getData(1)">搜索</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-card">
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"></uni-segmented-control>
				</view>
			</view>
		</view>
		<view class="uni-card">
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					<view class="uni-list">
						<view style="margin: 0 auto;" v-if="nodata">
							<image src="../../static/img/nodata.png" style="width: 200upx;height: 200upx;"></image>
							<view style="text-align: center;">暂无数据</view>
						</view>
						<block v-for="(list,index) in lists" :key="index">
							<view class="uni-list-cell uni-collapse">
								<view class="uni-list" :class="selectid == list.id ? 'uni-active' : ''" @click="trigerCollapse(list.id)">
									<view class="uni-list-cell" hover-class="uni-list-cell-hover" >
										<view class="uni-list-cell-navigate uni-navigate-right uni-media-list uni-pull-right">
											<span style="color: #3a6ee6;" v-if="list.isdraw == -1">未中奖</span>
											<span style="color: #333333;" v-if="list.isdraw == 0">未开奖</span>
											<span style="color: #00B26A;" v-if="list.isdraw == 1">已中奖</span>
											<span style="color: #333333;" v-if="list.isdraw == -2"><s>已撤单</s></span>
											<view class="uni-media-list-body">
												<view class="uni-media-list-text-top">{{list.amount}}</view>
												<view class="uni-media-list-text-bottom uni-ellipsis producenote">{{list.cptitle}}</view>
											</view>
											<view class="uni-media-list-body">
												<view class="uni-media-list-text-top producebonus">{{list.okamount}}</view>
												<view class="uni-media-list-text-bottom uni-ellipsis producenote">{{list.expect}}期</view>
											</view>
										</view>
									</view>
								</view>
								<view class="uni-collapse-content" :class="selectid == list.id ? 'uni-active' : ''">
									<view class="page-pd">
										<view class="openinfo">
											<view class="uni-flex uni-row">
												<view class="text" style="flex: 1;">玩法：{{list.playtitle}}({{list.mode}}) </view>
											</view>
											<view class="uni-flex uni-row">
												<view class="text" style="flex: 1;">注数：<span style="color: #f97c22;">{{list.itemcount}}</span></view>
												<view class="text" style="flex: 1;">中奖注数：<span style="color: #f97c22;">{{list.okcount}}</span></view>
											</view>
											<view class="uni-flex uni-row">
												<view class="text" style="flex: 1;">中奖金：<span style="color: #f97c22;">{{list.okamount}}</span></view>
											</view>
											<view class="uni-flex uni-row" >
												<view class="text" style="flex: 1;">投注号码：{{list.tzcode}}</view>
											</view>
											<view class="uni-flex uni-row">
												<view class="text" style="flex: 1;">单号：{{list.trano}} </view>
											</view>
											<view class="uni-flex uni-row" v-if="agent == 1">
												<view class="text" style="flex: 1;">用户名：{{list.username}} </view>
											</view>
											<view class="uni-flex uni-row">
												<view class="text" style="flex: 1;">购买时间：{{list.oddtime}} </view>
											</view>
											<view style="margin-top: 10upx;"  v-if="list.isdraw == 0">
												<button class="mini-btn buy-mini-btn" type="primary" size="mini" style="margin-right: 10upx;" :loading="loading" :disabled="loading" @click="cancelBet(list.id)">撤单</button>
											</view>
										</view>
									</view>
								</view>
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		<fr-loading></fr-loading>
	</view>
</template>

<script>
	
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		data() {
			return {
				items: [
					'全部',
					'已中奖',
					'未中奖',
					'待开奖',
					'已撤单'
				],
				current: 0,
				type:1,
				isdraw:'',
				lists: [
				],
				selectid:0,
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 1,
				page:1,
				nodata:false,
				agent:0,
				accountsearch:'',
				cpname:'',
				loading:false
			};
		},
		onNavigationBarButtonTap: function(e) {
			this.showMenu();
		},
		components: {uniSegmentedControl},
		onPullDownRefresh() {
			this.page = 1;
			this.getData()
			uni.stopPullDownRefresh();
		},
		onUnload() {
			this.max = 0,
			this.data = [],
			this.loadMoreText = "加载更多",
			this.showLoadMore = false;
			
		},
		onReachBottom() {
			console.log(this.max);
			if (this.max < 20) {
				this.loadMoreText = "没有更多数据了!";
				return;
			}else{
				this.page = this.page + 1
				setTimeout(() => {
					this.getData(2);
				}, 300);
				this.showLoadMore = true;
			}
			
		},
		onLoad(event) {
			if(event.agent){
				this.agent = event.agent;
			}
			if(event.cpname){
				this.cpname = event.cpname;
			}
			this.getData()
		},
		methods: {
			cancelBet(id){
				this.loading = true;
				this.$ajax.post({
					url:this.$service.api_lists.cancel_bet,
					data:{id:id},
				}).then((res)=>{
					if(res.data.code == 1){
						uni.showToast({
							title: '撤单成功!',
							icon: "none"
						})
						this.getData()
					}
					this.loading = false;
				}).catch((err)=>{
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					console.log('request fail', err);
					this.loading = false;
					return;
				})
			},
			onClickItem(e) {
				let index = e.currentIndex;
				if(index == 0){
					this.isdraw = '';
				}
				if(index == 1){
					this.isdraw = 1;
				}
				if(index == 2){
					this.isdraw = '-1';
				}
				if(index == 3){
					this.isdraw = 0;
				}
				if(index == 4){
					this.isdraw = '-2';
				}
				this.page = 1;
				this.getData();
			},
		    trigerCollapse(id) {
				if(this.selectid == id){
					this.selectid = -1;
				}else{
					this.selectid = id;
				}
		    },
			showMenu() {
				var _self = this;
				uni.showActionSheet({
					itemList: ['今天', '昨天', '本周', '上周'],
					success: function (res) {
						_self.type = res.tapIndex + 1;
						_self.page = 1;
						_self.getData();
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			setData(data, type) {
				var data = data.lists;
				this.nodata = false;
				if(data.length == 0){
					this.nodata = true;
				}
				if(type == 2){
					this.lists.push.apply(this.lists,data);
				}else{
					this.lists = data;
				}
				this.max = data.length;
			},
			getData(type=1) {
				if(type == 1){ // //获取缓存的第一页数据
					this.showLoadMore = false;
					this.page = 1;
					const data = uni.getStorageSync('my_lottery_data'+this.cpname);
					if(data){ //如果有缓存过的数据 那么
						this.setData(data)
					}
				}
				
				this.$ajax.get({
					url:this.$service.api_lists.lottery_log,
					data:{
						type:this.type, 
						isdraw:this.isdraw,
						page:this.page,
						agent:this.agent,
						accountsearch:this.accountsearch,
						cpname:this.cpname,
						},
				}).then((res)=>{
					if(res.data.code == 1){
						let data = res.data.data;
						this.setData(data, type)
						if(type == 1){ //缓存第一页数据
							uni.setStorage({
								key: 'my_lottery_data'+this.cpname,
								data: data,
								success: function () {
									console.log('success');
								}
							});
						}
					}
				}).catch((err)=>{
					uni.showToast({
						title: '网络连接错误！',
						icon: "none"
					})
					console.log('request fail', err);
					return;
				})
			},
		}
	}
</script>

<style>
	.uni-card-content-inner{padding: 30upx 0;}
	.uni-list::before{height: 0}
	.uni-list-cell::after{height: 0}
	.uni-list:after{height: 0.2upx !important;background-color: #efefef !important;}
	.producebonus{font-size: 45upx;color: #f97c22;float: left;}
	.producenote{font-size: 26upx;color: #abadb3;float: left;}
	.openinfo{margin: 20upx;background-color: #f5f6fa;padding: 15upx;border-radius: 10upx;}
	.news-media-list-body{height: 100% !important}
	.news-logo{float: right;}
	.news-logo-img{height: 150upx;width: 240upx;border-radius: 15upx;}
	.news-text-top{line-height: 55upx}
	.news-uni-media-list{padding-left: 44upx}
	.bottom-btn-left{float: left;width: 35%;margin-left: 90upx;background-color: #3e74fe;border-radius: 40upx;box-shadow: 0 0 6upx 5upx #cfdafb;}
	.bottom-btn-right{float: right;width: 35%;margin-right: 90upx;border-radius: 40upx;border: 1px solid #f5f5f5;box-shadow: 0 0 6upx 5upx #efefef;}
	uni-button:after{border: 0 solid #efefef !important;}
	.bottom-btn-footer{margin-bottom: 40upx;}
	.uni-media-list-buy{color: #3e74fe;line-height: 90upx;}
	.buy-mini-btn{background-color: #3a6ee6;box-shadow: 0 0 6upx 5upx #cfdafb;border-radius: 50upx;}
	.mini-btn{background-color: #355ee8;}
	.mini-btn-warn{background-color: #ee7d33;}
	.uni-row{padding-top: 10upx;}
</style>
