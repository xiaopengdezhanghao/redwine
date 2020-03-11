<template>
	<view class="content">
		<view class="uni-card">
			<view class="uni-card-content user-top-card">
				<view class="uni-flex uni-row">
					<view class="text uni-h5" style="flex: 1;">团队余额(元)</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text uni-h3" style="flex: 1;">{{memberMoney}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text uni-h5" style="flex: 1;">直属下级(人)：{{myMemberCount}}</view>
					<view class="text uni-h5" style="flex: 1;">所有下级(人)：{{allMemberCount}}</view>
				</view>
			</view>
		</view>
		<view class="uni-card">
			<view class="uni-card-content">
				<view class="uni-card-content-inner" style="padding: 0px 16px;">
					<view style="display: flex;flex-direction: row;justify-content: flex-start;align-items: center;">
						<text style="color:#333;">用户类型:</text>
						<picker @change="bindPickerChange" :value="index" :range="option" range-key="label">
							<view class="uni-input" style="color:#333;">{{option[index].label}}</view>
						</picker>
					</view>
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
		<view class="uni-flex uni-row">
			<view class="text table-hr">类型</view>
			<!-- <view class="text table-hr">等级</view> -->
			<view class="text table-hr">账号</view>
			<view class="text table-hr">下级</view>
			<view class="text table-hr">操作</view>
		</view>
		<view style="margin: 0 auto;" v-if="showresetParent == true">
			<view style="text-align: center;color: #3a6ee6;" @click="resetParent()">返回上层</view>
		</view>
		<view style="margin: 0 auto;" v-if="nodata">
			<image src="../../static/img/nodata.png" style="width: 200upx;height: 200upx;"></image>
			<view style="text-align: center;">暂无数据</view>
		</view>
		<view v-for="(list,index) in lists" :key="index" @click="trigerCollapse(index)">
			<view class="uni-flex uni-row uni-row-userlist">
				<view class="text table-hd">
					<view class="text" v-if="list.proxy == 0">会员</view>
					<view class="text" v-if="list.proxy == 1">代理</view>
				</view>
				<!-- <view class="text table-hd" style="color: #EC3936;">{{list.groupid}}</view> -->
				<view class="text table-hd">{{list.username}}</view>
				<view class="text table-hd"><span style="color: #3A6EE6;">{{list.membercount}}</span></view>
				<view class="text table-hd"><button class="mini-btn buy-mini-btn" type="primary" size="mini" @click="showParent(list.id)">下级</button></view>
			</view>
			<view class="uni-flex uni-row" style="background-color: #EFEFEF;width: 100%;height: 380upx;padding-top:0" v-show="showselect == index">
				<view style="margin: 20upx;width: 100%;text-align: center;">
					<view class="uni-flex uni-row">
						<view class="text" style="width: 200upx;">累计返佣：</view>
						<view class="text" style="flex: 1;float: right;">{{list.commission}}元</view>
					</view>
					<view class="uni-flex uni-row">
						<view class="text" style="width: 200upx;">当前余额：</view>
						<view class="text" style="flex: 1;float: right;">{{list.balance}}元</view>
					</view>
					<view class="uni-flex uni-row">
						<view class="text" style="width: 200upx;">注册时间：</view>
						<view class="text" style="flex: 1;float: right;">{{list.regtime}}</view>
					</view>
					<view class="uni-flex uni-row">
						<view class="text" style="width: 200upx;">登录时间：</view>
						<view class="text" style="flex: 1;float: right;">{{list.logintime}}</view>
					</view>
					<view class="uni-flex uni-row">
						<view class="text" style="width: 200upx;">玩家类型：</view>
						<view class="text" style="flex: 1;float: right;" v-if="list.proxy == 0">会员</view>
						<view class="text" style="flex: 1;float: right;" v-if="list.proxy == 1">代理</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		<!-- <pageFooter></pageFooter> -->
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				showselect: -1,
				selectid: 0,
				current: 0,
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 1,
				page: 1,
				nodata: false,
				sort: 1,
				lists: [],
				status: '',
				accountsearch: '',
				parentid: 0,
				allMemberCount: 0,
				memberMoney: 0,
				myMemberCount: 0,
				showresetParent: false,
				aparentid: [],
				hierarchy: 0,
				option:[
					{
						label:'全部',
						value:'',
					},{
						label:'代理',
						value:'1',
					},{
						label:'会员',
						value:'0',
					}
				],
				index:'0',
			};
		},
		onNavigationBarButtonTap: function(e) {
			this.showMenu();
		},
		onPullDownRefresh() {
			this.parentid = 0;
			this.sort = 1;
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
		components: {
			uniIcon,
		},
		methods: {
			bindPickerChange(e){
				this.index = e.target.value;
			},
			trigerCollapse(id) {
				if (this.showselect == id) {
					this.showselect = -1;
				} else {
					this.showselect = id;
				}
			},
			showMenu() {
				var _self = this;
				uni.showActionSheet({
					itemList: ['等级最高', '最新注册', '代理', '会员'],
					success: function(res) {
						_self.sort = res.tapIndex + 1;
						_self.page = 1;
						_self.getData();
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			setData(data, type) {
				this.allMemberCount = data.allMemberCount;
				this.memberMoney = data.memberMoney;
				this.myMemberCount = data.myMemberCount;
				var data = data.lists;
				this.showresetParent = false;
				this.nodata = false;
				if (this.page == 1 && data.length == 0) {
					// 					uni.showToast({
					// 						title: '该用户没有下级',
					// 						icon: "none"
					// 					})
					// 					return;
					this.nodata = true;
				}
				if (this.parentid > 0) {
					this.showresetParent = true;
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
					const data = uni.getStorageSync('agent_team_data');
					if (data) { //如果有缓存过的数据 那么
						this.setData(data)
					}
				}
				
				this.$ajax.get({
					url: this.$service.api_lists.agent_team,
					data: {
						sort: this.sort,
						page: this.page,
						accountsearch: this.accountsearch,
						parentid: this.parentid,
						user_type:this.option[this.index].value
					},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						this.setData(data, type)
						if (type == 1) { //缓存第一页数据
							uni.setStorage({
								key: 'agent_team_data',
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
			showParent(parentid) {
				this.sort = 1;
				this.page = 1;
				this.loadMoreText = "加载中...";
				this.hierarchy = this.hierarchy + 1;
				this.aparentid[this.hierarchy] = this.parentid; //缓存层级,返回上一层使用
				console.log(this.aparentid)
				this.parentid = parentid;
				this.getData()
			},
			resetParent() {
				this.sort = 1;
				this.page = 1;
				this.loadMoreText = "加载中...";
				this.parentid = this.aparentid[this.hierarchy];
				this.aparentid.splice(this.hierarchy, 1);
				this.hierarchy = this.hierarchy - 1;
				this.getData()
			}
		}
	}
</script>

<style>
	.content {
		background-color: #FFFFFF;
	}

	.user-top-card {
		color: #ffffff;
		box-shadow: 0 0 12upx 8upx #cadafd;
		padding: 20upx;
		border-radius: 15upx;
		background: -webkit-linear-gradient(#6680d8, #3e74fe);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#6680d8, #3e74fe);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#6680d8, #3e74fe);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(#6680d8, #3e74fe);
		/* 标准的语法（必须放在最后） */
		border-radius: 20upx;
	}

	.uni-h5 {
		color: #ffffff;
	}

	.uni-h5-menu {
		color: #626266;
		text-align: center;
		margin-top: 30upx;
	}

	.uni-h4 {
		text-align: center;
	}

	.uni-user-menu {
		box-shadow: 0 0 12upx 8upx #efefef;
		width: 40%;
		padding: 35upx;
		border: 2upx solid #efefef;
		border-radius: 10upx;
	}

	.image {
		width: 100upx;
		height: 100upx;
		margin-left: 33.3%;
		margin-top: 15upx;
	}

	.user-menu-top {
		height: 330upx;
	}

	.user-menu-bottom {
		margin-top: 30upx;
		height: 330upx;
	}

	.uni-user-menu-hr {
		width: 5%;
	}

	.uni-card-footer:before,
	.uni-card-header:after {
		background-color: transparent;
	}

	.bottom-btn-left {
		width: 35%;
		background-color: #3e74fe;
		border-radius: 40upx;
		box-shadow: 0 0 10upx 6upx #cadafd;
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
		width: 100upx;
		text-align: center;
	}

	.table-hr-two {
		width: 90upx;
		text-align: center;
	}

	.mini-btn {
		background-color: #355ee8;
	}

	.mini-btn-warn {
		background-color: #ee7d33;
	}

	.uni-row {
		padding-top: 20upx;
	}

	.buy-mini-btn {
		background-color: #3a6ee6;
		box-shadow: 0 0 6upx 5upx #cfdafb;
		border-radius: 50upx;
	}

	.uni-row-userlist {
		border-bottom: 2upx solid #efefef;
	}
</style>
