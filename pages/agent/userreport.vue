<template>
	<view class="content">
		<!--<image class="image" mode="widthFix" src="../../static/img/silder.png" />-->
		<view class="content-two">
			<view class="uni-card uni-card-top">
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						<view class="uni-flex uni-row" style="justify-content: center;">
							<view class="text uni-h5">我的返佣</view>
						</view>
						<view class="uni-flex uni-row produceshouyi-view" style="justify-content: center;">
							<view class="text uni-h4 produceshouyi">{{myFanyongMoney}}</view>
						</view>
						<view class="uni-flex uni-row" style="justify-content: space-between;">
							<view class="text" style="width: 40upx;"></view>
							<view class="text uni-h5">充值金额</view>
							<view class="text uni-h5">提现金额</view>
							<view class="text" style="width: 40upx;"></view>
						</view>
						<view class="uni-flex uni-row produceshouyi-view" style="justify-content: space-between;">
							<view class="text" style="width: 40upx;"></view>
							<view class="text uni-h4" style="color: #3e74fe;">{{rechargeMoney}}</view>
							<view class="text uni-h4" style="color: #3e74fe;">{{withdrawMoney}}</view>
							<view class="text" style="width: 40upx;"></view>
						</view>
					</view>
				</view>
			</view>
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
							<view class="text table-hr">类型</view>
							<!-- <view class="text table-hr">级别</view> -->
							<view class="text table-hr">账号</view>
							<view class="text table-hr">投注</view>
							<view class="text table-hr">盈亏</view>
						</view>
						<view  v-for="(list,index) in lists" :key="index" @click="trigerCollapse(index)">
							<view class="uni-flex uni-row uni-row-userlist">
								<view class="text table-hd">
									<view class="text" v-if="list.proxy == 0">玩家</view>
									<view class="text" v-if="list.proxy == 1">代理</view>
								</view>
								<!-- <view class="text table-hd" style="color: #EC3936;">{{list.groupid}}</view> -->
								<view class="text table-hd">{{list.username}}</view>
								<view class="text table-hd">{{list.todayloss.betMoney}}</view>
								<view class="text table-hd"><span style="color: #3A6EE6;">{{list.todayloss.teamProfitLoss}}</span></view>
							</view>
							<view class="uni-flex uni-row" style="background-color: #EFEFEF;width: 100%;padding-top:0;border-radius: 20upx;" v-show="showselect == index">
								<view style="margin: 20upx;width: 100%;text-align: center;">
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">充值金额：</view>
										<view class="text" style="flex: 1;float: right;">{{list.todayloss.rechargeMoney}}</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">提现金额：</view>
										<view class="text" style="flex: 1;float: right;">{{list.todayloss.withdrawMoney}}</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">返点佣金：</view>
										<view class="text" style="flex: 1;float: right;">{{list.todayloss.myFanyongMoney}}</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">活动赠送：</view>
										<view class="text" style="flex: 1;float: right;">{{list.todayloss.activityMoney}}</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">中奖金额：</view>
										<view class="text" style="flex: 1;float: right;">{{list.todayloss.bonusMoney}}</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">个人盈亏：</view>
										<view class="text" style="flex: 1;float: right;">{{list.todayloss.teamProfitLoss}}</view>
									</view>
									<view class="uni-flex uni-row">
										<view class="text" style="width: 200upx;">用户类型：</view>
										<view class="text" style="flex: 1;float: right;"  v-if="list.proxy == 1">代理</view>
										<view class="text" style="flex: 1;float: right;"  v-if="list.proxy == 0">玩家</view>
									</view>
									<view class="uni-flex uni-row" v-if="list.proxy == 1">
										<!--如果该用户是代理才显示此选择-->
										<button class="mini-btn buy-btn" type="primary" size="mini" style="margin-right: 10upx;" @click="toPageTeamReport(list.username)">他的团队报表</button>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		<fr-loading></fr-loading>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: '',
				current: 0,
				lists: [
				],
				showselect:-1,
				selectid: 0,
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 1,
				page: 1,
				nodata: false,
				accountsearch: '',
				type:1,
				myFanyongMoney: 0,
				rechargeMoney: 0,
				withdrawMoney: 0,
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
		onLoad() {
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
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			setData(data, type) {
				this.myFanyongMoney = data.myFanyongMoney;
				this.rechargeMoney = data.rechargeMoney;
				this.withdrawMoney = data.withdrawMoney;
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
					const data = uni.getStorageSync('agent_userreport_data');
					if (data) { //如果有缓存过的数据 那么
						this.setData(data)
					}
				}
			
				this.$ajax.get({
					url: this.$service.api_lists.agent_userreport,
					data: {
						type: this.type,
						page: this.page,
						accountsearch: this.accountsearch
					},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						this.setData(data, type)
						if (type == 1) { //缓存第一页数据
							uni.setStorage({
								key: 'agent_userreport_data',
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
			toPageTeamReport(username){
				uni.navigateTo({
					url:'./agentreport?username='+username
				})
			}
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
		height: 310upx;
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
