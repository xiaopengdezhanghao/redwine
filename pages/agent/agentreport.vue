<template>
	<view class="content">
		<!--<image class="image" mode="widthFix" src="../../static/img/silder.png" />-->
		<view class="content-two">
			<view class="uni-card uni-card-top">
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						<view class="uni-flex uni-row" style="justify-content: center;">
							<view class="text uni-h5">团队盈亏</view>
						</view>
						<view class="uni-flex uni-row produceshouyi-view" style="justify-content: center;">
							<view class="text uni-h4 produceshouyi">{{datainfo.teamProfitLoss}}</view>
						</view>
						<view class="uni-flex uni-row" style="justify-content: space-between;">
							<view class="text" style="width: 40upx;"></view>
							<view class="text uni-h5">团队返佣</view>
							<view class="text uni-h5">返点佣金</view>
							<view class="text" style="width: 40upx;"></view>
						</view>
						<view class="uni-flex uni-row produceshouyi-view" style="justify-content: space-between;">
							<view class="text" style="width: 40upx;"></view>
							<view class="text uni-h4" style="color: #3e74fe;">{{datainfo.allFanyongMoney}}</view>
							<view class="text uni-h4" style="color: #3e74fe;">{{datainfo.myFanyongMoney}}</view>
							<view class="text" style="width: 40upx;"></view>
						</view>
						<view class="text" style="font-size: 25upx;">团队盈亏计算公式：中奖-投注+活动+团队返佣+游戏盈亏</view>
					</view>
				</view>
			</view>
			<view class="uni-card">
				<view class="uni-card-content">
					<view class="uni-list">
						<view class="uni-list-cell time_content">
							<view class="time_left">
								开始时间
							</view>
							<view class="uni-list-cell-db">
								<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
									<view class="uni-input">{{date}}</view>
								</picker>
							</view>
							<view class="time_left">
								结束时间
							</view>
							<view class="uni-list-cell-db">
								<picker mode="date" :value="dates" :start="startDates" :end="endDates" @change="bindDateChanges">
									<view class="uni-input">{{dates}}</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="uni-card-content-inner" style="padding: 0px 16px;">
						<view class="uni-flex">
							<view class="text" style="flex: 1;">
								<input class="uni-input" type="text" v-model="accountsearch" placeholder="请输入账号查询" />
							</view>
							<view class="text" style="width: 100upx;text-align: center;color: #3a6ee6;line-height: 80upx;" hover-class="uni-list-cell-hover"
							 @click="getData(1)">搜索</view>
						</view>
					</view>
				</view>
			</view>
			<view class="uni-card">
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						<view class="uni-grid-9 uni-common-mt">
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.rechargeMoney}}</text>
								<text class="uni-grid-9-text">充值金额</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.withdrawMoney}}</text>
								<text class="uni-grid-9-text">提现金额</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.activityMoney}}</text>
								<text class="uni-grid-9-text">活动赠送</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.betMoney}}</text>
								<text class="uni-grid-9-text">投注金额</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.bonusMoney}}</text>
								<text class="uni-grid-9-text">中奖金额</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.memberMoney}}</text>
								<text class="uni-grid-9-text">团队余额</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.gameIntoMoney}}</text>
								<text class="uni-grid-9-text">游戏转入</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.gameTurnToMoney}}</text>
								<text class="uni-grid-9-text">游戏转出</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.gameBetAmount}}</text>
								<text class="uni-grid-9-text">游戏投注</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.gameProfitLoss}}</text>
								<text class="uni-grid-9-text">游戏盈亏</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.fristRechargeMemberCount}}</text>
								<text class="uni-grid-9-text">首充人数</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.regMemberCount}}</text>
								<text class="uni-grid-9-text">注册人数</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.betMemberCount}}</text>
								<text class="uni-grid-9-text">投注人数</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.myMemberCount}}</text>
								<text class="uni-grid-9-text">直属下级</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover">
								<text class="uni-grid-9-text uni-h2">{{datainfo.allMemberCount}}</text>
								<text class="uni-grid-9-text">所有下级</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<fr-loading></fr-loading>
	</view>
</template>

<script>
	import utils from '@/common/common.js';
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				index: '',
				current: 0,
				date: currentDate,
				dates: currentDate,
				type: 1,
				showselect: -1,
				datainfo: [],
				accountsearch: ''
			};
		},
		components: {},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
			startDates() {
				return this.getDate('start');
			},
			endDates() {
				return this.getDate('end');
			}
		},
		onPullDownRefresh() {
			this.getData()
			uni.stopPullDownRefresh();
		},
		onLoad(event) {
			if (event.username) {
				this.accountsearch = event.username;
			}
			this.getData()
		},
		methods: {
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindDateChanges: function(e) {
				this.dates = e.target.value
			},
			trigerCollapse(id) {
				if (e == this.showselect) {
					this.showselect = -1;
				} else {
					this.showselect = id;
				}
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			setData(data) {
				this.datainfo = data;
			},
			getData() {
				const data = uni.getStorageSync('agent_report_data');
				if (data) { //如果有缓存过的数据 那么
					this.setData(data)
				}
				let _datebj =  utils.datebj(this.date,this.dates);
				if( !_datebj ){
					uni.showToast({
						title: '时间选择错误',
						icon: "none"
					})
					return false;
				}
				console.log(this.date,this.dates);
				let _start_time = this.date + ' 00:00:00';
				let _end_time = this.dates + ' 23:59:59';
				this.$store.commit("switch_loading",true);
				this.$ajax.get({
					url: this.$service.api_lists.agent_report,
					data: {
						start_time:_start_time,
						end_time:_end_time,
						accountsearch: this.accountsearch
					},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						this.setData(data)
						uni.setStorage({
							key: 'agent_report_data',
							data: data,
							success: function() {
								console.log('success');
							}
						});

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
	.time_left{
	}
	.time_content{
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
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
		margin-top: 20upx;
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
