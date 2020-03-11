<template>
	<view class="content">
		<view class="content-two">
			<view class="uni-card">
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"></uni-segmented-control>
					</view>
				</view>
			</view>
			<view v-show="current == 0">
				<view class="uni-card">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<radio-group name="proxy" @change="radioChange">
								<label>
									<radio value="1" checked="" />代理类型
								</label>
								<label>
									<radio value="0" />玩家类型
								</label>
							</radio-group>
						</view>
					</view>
				</view>

				<view class="uni-card" v-if="add_user_type == 1">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-flex">
								<view class="text" style="flex: 1;">
									<input class="uni-input" type="digit" style="border-bottom: 1px solid #efefef;" @blur="inputBlur" v-model="peilv"
									 :maxlength="5" :placeholder="'请输入开户赔率'+',最高赔率:('+this.rates.userpeilvMax+')'" :disabled="fixedrebate == 1" />
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="agent_adduser_status.linkid == 0">
					<view class="uni-card">
						<view class="uni-card-content">
							<view class="uni-card-content-inner">
								<radio-group name="linkcode_status" @change="radioChanges">
									<label v-if="agent_adduser_status.randcode == 1">
										<radio value="1" checked="" />随机生成
									</label>
									<label v-if="agent_adduser_status.textcode == 1">
										<radio value="2" />自主输入
									</label>
								</radio-group>
							</view>
						</view>
					</view>
				</view>
				<view class="uni-card" v-if="linkcode_status == 2">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-flex">
								<view class="text" style="flex: 1;">
									<input class="uni-input" type="digit" style="border-bottom: 1px solid #efefef;" @blur="inputBlur" v-model="linkcode_text"
									 :maxlength="agent_adduser_config.max" :minlength="agent_adduser_config.min" :placeholder="'最小('+ agent_adduser_config.min +'),最大('+ agent_adduser_config.max +')'"
									 v-on:change="changeBonus" />
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="uni-card" v-if="add_user_type != 1">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-flex">
								<view class="text" style="flex: 1;">
									<input class="uni-input" type="digit" style="border-bottom: 1px solid #efefef;" @blur="inputBlur" v-model="rebate"
									 :maxlength="5" :placeholder="'请输入开户返点'+',最高返点:('+this.$store.state.userinfo.fandian+')'" v-on:change="changeBonus" />
								</view>
								<view class="text" style="width: 100upx;text-align: center;color: #3a6ee6;line-height: 80upx;border-bottom: 1px solid #efefef;"
								 hover-class="uni-list-cell-hover" @click="changeBonus()">转化</view>
							</view>
						</view>
					</view>
				</view>
				<view class="uni-card" v-if="add_user_type != 1">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-flex uni-row" style="justify-content: space-between;">
								<view class="text uni-h4">返点转换为奖金</view>
							</view>
							<view class="money-hr"></view>
							<view class="uni-flex uni-row" style="justify-content: space-between;">
								<view class="text uni-h5">开户返点：<span style="color: #333333;">{{this.rebate}}</span></view>
								<view class="text uni-h5">开户奖金：<span style="color: #333333;">{{this.bonus}}</span></view>
							</view>
							<view class="uni-flex uni-row" style="justify-content: space-between;">
								<view class="text uni-h5">最大可设置返点：<span style="color: #333333;">{{this.rates.userfanDianMax}}</span></view>
								<view class="text uni-h5">最大奖金：<span style="color: #333333;">{{this.rates.userjiangJinMax}}</span></view>
							</view>
							<view class="uni-flex uni-row" style="justify-content: space-between;">
								<view class="text uni-h5">最小可设置返点：<span style="color: #333333;">{{this.rates.fanDianMin}}</span></view>
								<view class="text uni-h5">最小奖金：<span style="color: #333333;">{{this.rates.jiangJinMin}}</span></view>
							</view>
						</view>
					</view>
				</view>
				<button type="primary" class="buy-btn" @tap="addcode" :loading="loading" :disabled="loading">生成邀请码</button>
			</view>
			<view v-show="current == 1">
				<view class="uni-card">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<radio-group name="proxy" @change="radioChange">
								<label>
									<radio value="1" checked="" />代理类型
								</label>
								<label>
									<radio value="0" />玩家类型
								</label>
							</radio-group>
						</view>
					</view>
				</view>
				<view style="margin: 0 auto;text-align: center;" v-if="nodata">
					<image src="../../static/img/nodata.png" style="width: 200upx;height: 200upx;"></image>
					<view style="text-align: center;">暂无数据</view>
				</view>
				<view class="uni-card" v-for="(list,index) in lists" :key="index" v-if="list.proxy == proxy">
					<view class="uni-card-content">
						<view class="uni-card-content-inner btn-copy">
							<view class="uni-list">
								<view class="uni-list-cell" hover-class="uni-list-cell-hover">
									<view class="uni-list-cell-navigate uni-navigate-right uni-media-list uni-pull-right">
										<span style="color: #e53333;" @click="delOne(list.id)">删除</span>
										<view class="uni-media-list-body">
											<view class="uni-media-list-text-bottom uni-ellipsis producenote" v-if="add_user_type != 1">返点({{list.fandian}})</view>
											<view class="uni-media-list-text-bottom uni-ellipsis producenote" v-if="add_user_type == 1">赔率({{list.peilv}})</view>
											<view class="uni-media-list-text-bottom uni-ellipsis producenote">注册({{list.okusenum}})</view>
										</view>
										<view class="uni-media-list-body">
											<view class="uni-media-list-text-bottom uni-ellipsis producenote">邀请码：{{list.code == '' ?list.id:list.code}}</view>
											<view class="uni-media-list-text-bottom uni-ellipsis producenote">{{list.oddtime}}</view>
										</view>
									</view>
								</view>
							</view>
							<view class="uni-flex uni-row">
								<view class="text uni-media-list-text-bottom" hover-class="uni-list-cell-hover" style="height: 50upx; flex: 1;display: flex; justify-content: center;align-items: center;"
								 @click="showPopup(index)">查看二维码</view>
								<view class="text uni-media-list-text-bottom" hover-class="uni-list-cell-hover" style="height: 50upx; flex: 1;display: flex; justify-content: center;align-items: center;"
								 v-clipboard:copy="list.code == '' ?list.id:list.code" v-clipboard:success="onCopy" v-clipboard:error="onErrors">复制邀请码</view>
								<view class="text uni-media-list-text-bottom" hover-class="uni-list-cell-hover" style="height: 50upx; flex: 1;display: flex; justify-content: center;align-items: center;"
								 v-clipboard:copy="list.url" v-clipboard:success="onCopy" v-clipboard:error="onErrors">复制注册链接</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current == 2">
				<view class="content">
					<view class="input-group">
						<view class="input-row border">
							<view class="uni-list">
								<view class="uni-list-cell">
									<view class="uni-list-cell-left">
										选择返点:
									</view>
									<view class="uni-list-cell-db">
										<picker :value="invitecode" :range="array" @change="bindPickerChange" range-key="label">
											<view class="uni-input">{{ arrayIndex == null ? '' : array[arrayIndex].label}}</view>
										</picker>
									</view>
								</view>
							</view>
						</view>
						<view class="input-row border">
							<text class="title">账号：</text>
							<m-input type="text" clearable v-model="account" placeholder="请输入账号"></m-input>
						</view>
						<view class="input-row border" v-if="is_mobile_show">
							<text class="title">手机号码：</text>
							<m-input type="number" clearable v-model="mobile" placeholder="请输入手机号码"></m-input>
						</view>
						<view class="input-row border">
							<text class="title">登录密码：</text>
							<m-input type="text" v-model="password" placeholder="请输入登录密码"></m-input>
						</view>
						<view class="input-row border">
							<text class="title">确认密码：</text>
							<m-input type="text" v-model="password_confirm" placeholder="请再次输入登录密码"></m-input>
						</view>
						<view class="input-row border">
							<text class="title">提款密码：</text>
							<m-input type="text" v-model="pay_password" placeholder="请输入登录密码"></m-input>
						</view>

					</view>
					<view class="btn-row">
						<button type="primary" class="primary buy-btn" @tap="register" :loading="loading" :disabled="loading">点击注册</button>
					</view>
					<!-- <pageFooter></pageFooter> -->
				</view>
			</view>
		</view>
		<uni-popup :show="middle" type="middle" mode="fixed" :msg="'邀请码'+this.id+'- 返点:'+this.fandian" @hidePopup="hidePopup(qrcodeindex)">
			<qrcode :val="qrcodeurl" :size="180" ref="qrcode"></qrcode>
		</uni-popup>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		<!-- <pageFooter></pageFooter> -->
	</view>
</template>

<script>
	import qrcode from '@/components/qrcode/qrcode.vue'
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import service from '../../common/service.js';
	import mInput from '../../components/m-input.vue';
	export default {
		data() {
			return {
				fixedrebate: 0,
				agent_adduser_status: {
					randcode: 0,
					textcode: 0,
					linkid: 0,
				},
				agent_adduser_config: {
					min: 0,
					max: 0,
				},
				index: '',
				linkcode_text: '',
				items: [
					'下级开户',
					'邀请码列表',
					'自主开户'
				],
				proxy: 1,
				current: 0,
				middle: false,
				loading: false,
				rebate: '',
				peilv: '',
				page: 1,
				lists: [],
				id: 0,
				fandian: 0,
				qrcodeindex: 0,
				qrcodeurl: '',
				rates: [],
				max: 1,
				nodata: false,
				type: 1,
				showLoadMore: false,
				loadMoreText: '加载中...',
				bonus: 0,
				app_url: '',
				linkcode_status: 1,
				add_user_type: 0, //1为赔率生成，0为返点生成
				account: '',
				password: '123456',
				mobilecode: '',
				invitecode: '',
				realname: '',
				pay_password: '',
				mobile: '',
				password_confirm: '123456',
				is_mobile_show: false,
				array: [],
				arrayIndex: null,
			};
		},
		components: {
			uniPopup,
			uniSegmentedControl,
			qrcode,
			mInput
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
			this.app_url = service.ishttps + '//' + service.hostname + '/pages/reg/reg?invcode=';
			const data = uni.getStorageSync('home_data');
			const userInfo = uni.getStorageSync('userinfo');
			this.add_user_type = data.add_user_type;
			this.fixedrebate = userInfo.fixedrebate;
			this.agent_adduser_status = data.agent_adduser_status;
			if (data.agent_adduser_status.textcode == 1) {
				this.agent_adduser_config.min = data.agent_adduser_config.textcode.min_code;
				this.agent_adduser_config.max = data.agent_adduser_config.textcode.max_code;
			}
			this.getData();
			this.is_mobile_show = data.reg_filed.is_mobile_show;
		},
		methods: {
			bindPickerChange(e) {
				this.invitecode = this.array[e.detail.value].value;
				this.arrayIndex = e.detail.value;
			},
			register() {
				if (this.is_invite_code_show && this.invitecode.length > 10) {
					uni.showToast({
						icon: 'none',
						title: '邀请码最多为 10 个字符'
					});
					return;
				}
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.is_mobile_show && this.mobile.length < 11) {
					uni.showToast({
						icon: 'none',
						title: '手机号码不正确'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.password !== this.password_confirm) {
					uni.showToast({
						icon: 'none',
						title: '确认密码不正确'
					});
					return;
				}
				if (this.pay_password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '提款密码为 6 个字符'
					});
					return;
				}
				const data = {
					invite_code: this.invitecode,
					username: this.account,
					mobile: this.mobile,
					password: this.password,
					password_confirm: this.password_confirm,
					pay_password: this.pay_password
				}
				var _self = this;
				this.loading = true;
				this.$ajax.post({
					url: this.$service.api_lists.userreg,
					data: data,
				}).then((res) => {
					if (res.data.code == 1) {
						uni.showModal({
							title: '提示',
							content: '注册成功!',
							showCancel: false,
						});
					}
					this.loading = false;
				}).catch((err) => {
					uni.showToast({
						title: '网络错误',
						icon: "none"
					})
					console.log('request fail', err);
					return;
				})
			},
			inputBlur() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			changeBonus() { //计算返点换算成奖金
				this.bonus = 0;
				const jiangjin = parseFloat(this.rates.jiangJinMax - this.rates.jiangJinMin).toFixed(2);
				const jiangjin1 = parseFloat(jiangjin / this.rates.fanDianMax).toFixed(2);
				const jiangjin2 = jiangjin1 * this.rebate;
				const rate = (jiangjin2 + Number(this.rates.jiangJinMin));
				this.bonus = parseFloat(rate).toFixed(2);
			},
			// 复制成功
			onCopy(e) {
				uni.showToast({
					title: '复制成功',
					icon: "none"
				});
			},
			// 复制失败
			onErrors() {
				uni.showToast({
					title: '复制失败',
					icon: "none"
				});
			},
			setData(data, type) {
				this.rates = data.rate;
				var data = data.lists;
				this.nodata = false;
				if (this.page == 1 && data.length == 0) {
					this.nodata = true;
				}
				if (this.fixedrebate == 1) {
					this.peilv = this.rates.userpeilvMax
				}
				if (type == 2) {
					this.lists.push.apply(this.lists, data);
				} else {
					this.lists = data;
				}
				let _arry = [];
				data.map((x, y) => {
					if (x.proxy == 1) {
						_arry.push({
							label: `代理-${x.fandian}`,
							value: x.code == '' ? x.id : x.code
						})
					} else {
						_arry.push({
							label: `玩家-${x.fandian}`,
							value: x.code == '' ? x.id : x.code
						})
					}
				})
				this.max = data.length;
				this.array = _arry;
			},
			getData(type = 1) {
				if (type == 1) { // //获取缓存的第一页数据
					const data = uni.getStorageSync('invcode_lists_data');
					if (data) { //如果有缓存过的数据 那么
						this.setData(data);
					}
				}

				this.$ajax.get({
					url: this.$service.api_lists.invcode_lists,
					data: {
						proxy: '',
						page: this.page,
					},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						this.setData(data, type)
						if (type == 1) { //缓存第一页数据
							uni.setStorage({
								key: 'invcode_lists_data',
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
			hidePopup(id) {
				this.$refs.qrcode.clearQrcode();
				this.middle = false;
			},
			showPopup(id) {
				this.id = this.lists[id].id;
				this.fandian = this.lists[id].fandian;
				this.qrcodeurl = this.lists[id].url;
				this.middle = true;
				setTimeout(() => {
					console.log(this.qrcodeurl);
					this.$refs.qrcode.creatQrcode();
				}, 100);
			},
			onClickItem(e) {
				let index = e.currentIndex;
				if (this.current !== index) {
					this.current = index;
				}
			},
			radioChange(e) {
				this.proxy = e.detail.value;
			},
			radioChanges(e) {
				this.linkcode_status = e.detail.value;
			},
			addcode() {
				if (this.proxy == '') {
					uni.showToast({
						icon: 'none',
						title: '请选择开户类型'
					});
					return;
				}
				if (this.rebate != '' && this.rebate == '') {
					uni.showToast({
						icon: 'none',
						title: '请输入开户返点'
					});
					return;
				}
				if (this.linkcode_status == 2 && this.linkcode_text == '') {
					uni.showToast({
						icon: 'none',
						title: '请输入邀请码'
					});
					return;
				}
				if (this.linkcode_status == 2 && this.linkcode_text != '' && this.linkcode_text.length < this.agent_adduser_config.min) {
					uni.showToast({
						icon: 'none',
						title: `邀请码最少${this.agent_adduser_config.min}位`
					});
					return;
				}
				if (this.linkcode_status != 2) {
					this.linkcode_text = '';
				}

				const data = {
					proxy: this.proxy,
					fandian: this.rebate,
					peilv: this.peilv,
					linkcode_status: this.linkcode_status,
					linkcode_text: this.linkcode_text
				}
				var _self = this;
				this.loading = true;
				this.$ajax.post({
					url: this.$service.api_lists.add_invcode,
					data: data,
				}).then((res) => {
					if (res.data.code == 1) {
						uni.showModal({
							title: '提示',
							content: '新增成功!',
							showCancel: false,
							success: function(res) {
								_self.current = 1;
								_self.page = 1;
								_self.getData()
							}
						});
					}
					this.loading = false;
				}).catch((err) => {
					uni.showToast({
						title: '网络错误',
						icon: "none"
					})
					console.log('request fail', err);
					return;
				})
			},
			delOne(id) {
				var _self = this;
				uni.showModal({
					title: '提示',
					content: '确定要删除吗？',
					success: function(res) {
						if (res.confirm) {
							_self.$ajax.post({
								url: _self.$service.api_lists.delone_invcode,
								data: {
									id: id
								},
							}).then((res) => {
								if (res.data.code == 1) {
									uni.showModal({
										title: '提示',
										content: '删除成功!',
										showCancel: false,
										success: function(res) {
											_self.page = 1;
											_self.getData()
										}
									});
								}
							}).catch((err) => {
								uni.showToast({
									title: '网络错误',
									icon: "none"
								})
								console.log('request fail', err);
								return;
							})
						}
					}
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
		height: 370upx;
	}

	.btn-copy {
		padding-bottom: 10upx;
	}

	.buy-btn {
		width: 90%;
		border-radius: 50upx;
		background-color: #3a6ee6;
		box-shadow: 0 0 10upx 6upx #cadafd;
		margin-top: 20upx;
	}

	.produceshouyi-view {
		margin-top: 5upx;
	}

	.image {
		width: 100%;
		height: 350upx !important;
		position: absolute;
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




	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		width: 100upx;
		height: 100upx;
		border: 1upx solid #dddddd;
		border-radius: 100upx;
		margin: 0 40upx;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 60upx;
		height: 60upx;
		margin: 20upx;
	}

	.input-row .title {
		width: 25%;
	}

	.buy-btn {
		margin-top: 20upx;
		width: 90%;
		border-radius: 50upx;
		background-color: #3a6ee6;
		box-shadow: 0 0 10upx 6upx #cadafd;
	}

	.input-group::before {
		background-color: transparent;
	}

	.input-group::after {
		background-color: transparent;
	}

	.input-row.border::after {
		background-color: #efefef;
	}

	.input-group {
		box-shadow: 0 0 10upx 6upx #efefef;
		border-radius: 20upx;
	}

	.input-row {
		padding: 15upx 0upx;
	}
</style>
