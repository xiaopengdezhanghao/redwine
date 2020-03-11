<template>
	<view class="content">
		<!--<image class="image" mode="widthFix" src="../../static/img/silder.png" />-->
		<view class="content-two">
			<view class="uni-card">
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
						<view class="uni-flex uni-row">
							<view class="text table-hr">账号</view>
							<view class="text table-hr">转入</view>
							<view class="text table-hr">转出</view>
							<view class="text table-hr">总下注</view>
							<view class="text table-hr">盈亏</view>
						</view>
						<view style="margin: 0 auto;text-align: center;" v-if="nodata">
							<image src="../../static/img/nodata.png" style="width: 200upx;height: 200upx;"></image>
							<view style="text-align: center;">暂无数据</view>
						</view>
						<view  v-for="(list,index) in lists" :key="index" @click="trigerCollapse(index)">
							<view class="uni-flex uni-row uni-row-userlist">
								<view class="text table-hd" style="color: #EC3936;">{{list.username}}</view>
								<view class="text table-hd">{{list.gameIntoMoney}}</view>
								<view class="text table-hd">{{list.gameTurnToMoney}}</view>
								<view class="text table-hd">{{list.gameBetAmount}}</view>
								<view class="text table-hd"><span style="color: #3A6EE6;">{{list.gameProfitLoss}}</span></view>
							</view>
							<!-- <view class="uni-flex uni-row" style="background-color: #EFEFEF;width: 100%;height: 320upx;padding-top:0" v-show="showselect == index">
								<view style="margin: 20upx;width: 100%;text-align: center;">
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">充值金额：</view>
										<view class="text" style="flex: 1;float: right;">0.00</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">提现金额：</view>
										<view class="text" style="flex: 1;float: right;">0.00</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">返点佣金：</view>
										<view class="text" style="flex: 1;float: right;">0.00</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">活动赠送：</view>
										<view class="text" style="flex: 1;float: right;">0.00</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">中奖金额：</view>
										<view class="text" style="flex: 1;float: right;">0.00</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">个人盈亏：</view>
										<view class="text" style="flex: 1;float: right;">0.00</view>
									</view>
								</view>
							</view> -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: '',
				plat_type:'ag',
				accountsearch:'',
				current: 0,
				lists: [
				],
				showselect:-1,
				type:1,
				page:1,
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 1,
				nodata: false,
			};
		},
		onNavigationBarButtonTap: function(e) {
			this.showMenu();
		},
		onPullDownRefresh() {
			this.parentid = 0;
			this.type = 1;
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
			if (this.max < 20) {
				this.loadMoreText = "没有更多数据了!";
				return;
			} else {
				this.page = this.page + 1
				setTimeout(() => {
					this.getData(2);
				}, 300);
				this.showLoadMore = true;
			}
		
		},
		onLoad(event) {
			if(event.plat_type){
				this.plat_type = event.plat_type;
			}
			uni.setNavigationBarTitle({
				title: event.plat_type+'游戏报表'
			});
			this.getData()
		},
		methods: {
			trigerCollapse(e) {
				if(e ==  this.showselect){
					this.showselect = -1;
				}else{
					this.showselect = e;
				}
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			showMenu() {
				var _self = this;
				uni.showActionSheet({
					itemList: ['今天', '昨天', '本周', '上周', '本月', '上月'],
					success: function(res) {
						_self.type = res.tapIndex + 1;
						_self.page = 1;
						_self.getData();
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			setData(data, type) {
				var data = data.lists;
				this.nodata = false;
				if (this.page == 1 && data.length == 0) {
					this.nodata = true;
				}
				if (type == 2) {
					this.lists.push.apply(this.lists, data);
				} else {
					this.lists = data;
				}
				this.max = data.length;
			},
			getData(type = 1) {
				if (type == 1) { // //获取缓存的第一页数据
					this.page = 1;
					this.showLoadMore = false;
					const data = uni.getStorageSync('agent_gameusers_data');
					if (data) { //如果有缓存过的数据 那么
						this.setData(data)
					}
				}
			
				this.$ajax.get({
					url: this.$service.api_lists.agent_gameusers,
					data: {
						type: this.type,
						page: this.page,
						plat_type: this.plat_type,
						accountsearch: this.accountsearch
					},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						this.setData(data, type)
						if (type == 1) { //缓存第一页数据
							uni.setStorage({
								key: 'agent_gameusers_data',
								data: data,
								success: function() {
									console.log('success');
								}
							});
						}
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
		}
	}
</script>

<style>
	.content {
		padding: 0;
	}

	.content-two {
		padding: 20upx;
	}

	.uni-card-top {
		height: 370upx;
	}

	.produceshouyi-view {
		margin-top: 5upx;
	}

	.image {
		width: 100%;
		height: 350upx !important;
		position: absolute;
	}
	.table-hr {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #626367;
	}

	.table-hd {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20upx;
	}

	.table-hd-two {
		text-align: center;
	}
	.buy-btn {
		width: 90%;
		border-radius: 50upx;
		background-color: #3a6ee6;
		box-shadow: 0 0 10upx 6upx #cadafd;
		margin-top:20upx;
	}

	.uni-card-content-inner-im {
		padding: 22upx 30upx !important;
	}

	.uni-list::before {
		background-color: #efefef
	}

	.uni-list::after {
		background-color: #efefef
	}

	.producebonus {
		font-size: 65upx;
		color: #f97c22;
	}

	.produceshouyi {
		color: red;
		font-size: 60upx;
	}

	.uni-grid-9 {
		width: 100%;
	}

	.uni-grid-9-item {
		width: 33.3%;
		border-left: 1upx solid #EFEFEF;
	}

	.uni-grid-9 {
		background-color: #FFFFFF;
	}

	.uni-h2 {
		color: #fb8c08;
		margin-bottom: 20upx;
	}
	.uni-row-userlist {
		padding-top: 20upx;
		border-bottom: 2upx solid #efefef;
	}
</style>
