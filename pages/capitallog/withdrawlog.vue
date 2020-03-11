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
		<logMenu :current="2" :agent="agent"></logMenu>
		<!--提现记录-->
		<view class="uni-card">
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					<view style="margin: 0 auto;text-align: center;" v-if="true">
						<image src="../../static/img/nodata.png" style="width: 200upx;height: 200upx;"></image>
						<view style="text-align: center; color: #A5A6AB;">暂无数据</view>
					</view>
					<view class="uni-list" hover-class="uni-list-cell-hover" v-for="(list,index) in lists" :key="index">
						<navigator :url="'../withdraw/details?trano='+list.trano+'&state='+list.state+'&oldaccountmoney='+list.oldaccountmoney+'&oddtime='+list.oddtime+'&fee='+list.fee+'&banknumber='+list.banknumber+'&bankname='+list.bankname+'&amount='+list.amount+'&actualamount='+list.actualamount+'&accountname='+list.accountname+'&remark='+list.remark">
							<view class="uni-flex uni-row" style="justify-content: space-between;">
								<view class="text title withdraw-color" v-if="list.state == -1">已拒绝<span v-if="agent == 1">({{list.username}})</span></view>
								<view class="text title" v-if="list.state == 0">等待审核<span v-if="agent == 1">({{list.username}})</span></view>
								<view class="text title recharge-color" v-if="list.state == 1">已到账<span v-if="agent == 1">({{list.username}})</span></view>
								<view class="text uni-h4 red">{{list.actualamount}}</view>
							</view>
							<view class="uni-flex uni-row" style="justify-content: space-between;">
								<view class="text uni-h5">结余:{{list.oldaccountmoney}}</view>
								<view class="text uni-h5">{{list.oddtime}}</view>
							</view>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	import logMenu from './logmenu';

	export default {
		data() {
			return {
				selectid:0,
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 1,
				page:1,
				nodata:false,
				type:1,
				lists:[],
				agent:0,
				accountsearch:''
			};
		},
		components: {
			logMenu
		},
		onNavigationBarButtonTap: function(e) {
			this.showMenu();
		},
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
			// if(event.agent){
			// 	this.agent = event.agent;
			// }
			// this.getData()
		},
		methods: {
			showMenu() {
				var _self = this;
				uni.showActionSheet({
					itemList: ['今天', '昨天', '本周', '上周'],
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
					const data = uni.getStorageSync('my_withdraw_log_data');
					if (data) { //如果有缓存过的数据 那么
						this.setData(data)
					}
				}

				this.$ajax.get({
					url: this.$service.api_lists.withdraw_log,
					data: {
						type: this.type,
						page: this.page,
						agent:this.agent,
						accountsearch:this.accountsearch
					},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						this.setData(data, type)
						if (type == 1) { //缓存第一页数据
							uni.setStorage({
								key: 'my_withdraw_log_data',
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
	.uni-row {
		padding: 10upx 30upx;
	}

	.uni-list::before {
		background-color: transparent;
	}

	.uni-list::after {
		background-color: #efefef;
	}

	.title {
		font-size: 32upx;
		color: #555555;
	}

	.recharge-color {
		color: #00B26A;
	}

	.withdraw-color {
		color: #fb8c08
	}
	.uni-list:after{
		z-index: 1;
	}
	.uni-list::before{
		z-index: 1;
	}
</style>

