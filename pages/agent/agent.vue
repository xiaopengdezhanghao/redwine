<template>
	<view class="content">
		<!--<image class="image" mode="widthFix" src="../../static/img/silder.png" />-->
		<view class="content-two">
			<view class="uni-card uni-card-top">
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						<view class="uni-flex uni-row" style="justify-content: center;">
							<view class="text uni-h5">我的下级(人)</view>
						</view>
						<button class="mini-btn buy-mini-btn" type="primary" size="mini" @tap="toPage('../agent/commissionslog')">返佣记录</button>
						<view class="uni-flex uni-row produceshouyi-view" style="justify-content: center;">
							<!-- <view class="text uni-h4 produceshouyi">{{datainfo.memberNumber}}</view> -->
							<view class="text uni-h4 produceshouyi">0</view>
						</view>
						<view class="uni-flex uni-row" style="justify-content: space-between;">
							<view class="text" style="width: 40upx;"></view>
							<view class="text uni-h5">昨天返佣(元)</view>
							<view class="text uni-h5">今天返佣(元)</view>
							<view class="text" style="width: 40upx;"></view>
						</view>
						<view class="uni-flex uni-row produceshouyi-view" style="justify-content: space-between;">
							<view class="text" style="width: 40upx;"></view>
							<view class="text uni-h4" style="color: #3e74fe;">0</view>
							<!-- <view class="text uni-h4" style="color: #3e74fe;">{{datainfo.yesterdayFanyongMoney}}</view> -->
							<!-- <view class="text uni-h4" style="color: #3e74fe;">{{datainfo.todayFanyongMoney}}</view> -->
							<view class="text uni-h4" style="color: #3e74fe;">0</view>
							<view class="text" style="width: 40upx;"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="uni-card">
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						<view class="uni-grid-9 uni-common-mt">
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../agent/explain')">
								<text class="uni-grid-9-text">
									<image src="../../static/icon/agent/icon_clsm@2x.png"></image>
								</text>
								<text class="uni-grid-9-text">代理说明</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../agent/adduser')">
								<text class="uni-grid-9-text">
									<image src="../../static/icon/agent/icon_xjkf@2x.png"></image>
								</text>
								<text class="uni-grid-9-text">下级开户</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../agent/team')">
								<text class="uni-grid-9-text">
									<image src="../../static/icon/agent/icon_tdgl@2x.png"></image>
								</text>
								<text class="uni-grid-9-text">团队管理</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../agent/agentreport')">
								<text class="uni-grid-9-text">
									<image src="../../static/icon/agent/icon_tdbb@2x.png"></image>
								</text>
								<text class="uni-grid-9-text">团队报表</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../agent/userreport')">
								<text class="uni-grid-9-text">
									<image src="../../static/icon/agent/icon_xjbb@2x.png"></image>
								</text>
								<text class="uni-grid-9-text">下级报表</text>
							</view>
							<!-- <view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../agent/gamereport')" v-if="realperson_switch == 1"> -->
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../agent/gamereport')">
								<text class="uni-grid-9-text">
									<image src="../../static/icon/agent/icon_yxbb@2x.png"></image>
								</text>
								<text class="uni-grid-9-text">游戏报表</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../capitallog/lotterylog?agent=1')" v-if="lottery_switch ==1">
							<!-- <view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../capitallog/lotterylog?agent=1')" > -->
								<text class="uni-grid-9-text">
									<image src="../../static/icon/agent/icon_xz@2x.png"></image>
								</text>
								<text class="uni-grid-9-text">下级投注明细</text>
							</view>
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../capitallog/capitallog?agent=1')">
								<text class="uni-grid-9-text">
									<image src="../../static/icon/agent/icon_zj@2x.png"></image>
								</text>
								<text class="uni-grid-9-text">下级资金日志</text>
							</view>
							<!-- <view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../capitallog/threelog?agent=1')" v-if="realperson_switch == 1"> -->
							<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" @tap="toPage('../capitallog/threelog?agent=1')">
								<text class="uni-grid-9-text">
									<image src="../../static/icon/agent/icon_yxjl@2x.png"></image>
								</text>
								<text class="uni-grid-9-text">下级游戏记录</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datainfo:[],
				lottery_switch:0,
				realperson_switch:0,
			};
		},
		onLoad() {
			// this.getData()
		},
		methods: {
			setData(data) {
				this.datainfo = data;
			},
			getData() {
				this.lottery_switch = uni.getStorageSync('home_data').lottery_switch;
				this.realperson_switch =  uni.getStorageSync('home_data').realperson_switch;
				const data = uni.getStorageSync('agent_data');
				if (data) { //如果有缓存过的数据 那么
					this.setData(data)
				}
				this.$ajax.get({
					url: this.$service.api_lists.agent,
					data: {},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						this.setData(data)
						uni.setStorage({
							key: 'agent_data',
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
			toPage(url) {
				uni.navigateTo({
					url: url,
				});
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
		height: 320upx;
	}

	.produceshouyi-view {
		margin-top: 5upx;
	}

	image {
		width: 80upx;
		height: 80upx;
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
		color: #FF8900;
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

	.uni-grid-9-text {
		line-height: 90upx;
		height: 70upx;
	}

	.buy-mini-btn {
		background-color: #FF8900;
		/* box-shadow: 0 0 6upx 5upx #FF8900; */
		position: absolute;
		right: 0;
		border-radius: 50upx 0px 0px;
	}
</style>

