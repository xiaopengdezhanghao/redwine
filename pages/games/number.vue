<template>
	<view>
		<canvas :style="'width:'+screenWidth+'px; height:'+screenHeight+'px;'" canvas-id="myCanvas" ></canvas>
		<cover-view v-if="statuShow" style="position: absolute;top: 0; left: 0;display: flex;flex-direction: column;align-items: center;">
			<uni-bar  left-icon="number" right-icon="number"  @clickRight="gameShows" title="数字碰撞"></uni-bar>
			<view class="uni-input-text">
				<text style="font-size:28rpx;font-family:PingFang SC;font-weight:500;color:rgba(254,254,254,1);z-index: 1;">欢乐豆余额：{{userinfo.balance}}</text>
			</view>
			<view class="uni-issue">
				<view class="issue-number" v-for="(item,index) in lastFullExpectArr" :key="index" :class="index == 0?'':'uni-move-img'">
					<image class="img" :src="'../../static/games/number/img_'+item+'2@2x.png'" mode=""></image>
				</view>
				<view class="issue-number" style="margin-left: -5rpx;">
					<image class="img" src="../../static/games/number/img_qi2@2x.png" mode=""></image>
				</view>
			</view>
			<view class="uni-issue-content">
				<view class="issue" v-for="(item,index) in lottery_number" :key="index" v-if="index>1&&index<=4">
					<image v-if="index < 4" class="img" :src="'../../static/games/number/img_pz'+item+'@2x.png'" mode=""></image>
					<image v-if="index == 4" class="img" :src="'../../static/games/number/img_ml'+item+'@2x.png'" mode=""></image>	
				</view>
			</view>
			<view class="uni-result">
				<image style="width: 100%;height: 100%;" src="../../static/games/number/img_zd@2x.png" v-if="lottery_number[4]%2 == 1" mode=""></image>
				<image style="width: 100%;height: 100%;" src="../../static/games/number/img_zs@2x.png" v-else mode=""></image>
			</view>
			<view class="uni-issue-after">
				<view class="issue-number" v-for="(item,index) in currFullExpectArr" :key="index" :class="index == 0?'':'uni-move-img'">
					<image class="img" :src="'../../static/games/number/img_'+item+'2@2x.png'" mode=""></image>
				</view>
				<view class="issue-number" style="margin-left: -5rpx;">
					<image class="img" src="../../static/games/number/img_qi2@2x.png" mode=""></image>
				</view>
			</view>
			<view class="uni-time-content">
				<text class="time">封盘  {{ this.times.fd_hour }}{{ this.times.fd_minute }}{{ this.times.fd_second }}</text>
				<text class="time">开奖 {{ this.times.kj_hour }}{{ this.times.kj_minute }}{{ this.times.kj_second }}</text>
			</view>
			<view class="uni-btn-content">
				<view class="btn"  @tap="goGameShow(1)">
					<image style="width: 100%;height: 100%;" src="../../static/games/number/icon_zzl@2x.png" mode=""></image>
				</view>
				<view class="btn" @tap="goLotteryHistory()">
					<image style="width: 100%;height: 100%;" src="../../static/games/number/icon_zls@2x.png" mode=""></image>
				</view>
			</view>
			<view class="uni-btn-submit" @tap="open">
				<image v-if="this.$store.state.is_beeting" style="width: 100%;height: 100%;" src="../../static/games/number/icon_ztz@2x.png" mode=""></image>
				<image v-else style="width: 100%;height: 100%;" src="../../static/games/number/icon_ztz1@2x.png" mode=""></image>
			</view>
			<uni-popup ref="popup" type="center">
				<view class="uni-popup-content">
					<view class="btn-result">
						<view class="btn-top" style="position: relative;" @tap="selected_number(0)">
							<image v-if="btnImg == 0" class="img" src="../../static/games/number/icon_zd2@2x.png" mode=""></image>
							<image v-else class="img" src="../../static/games/number/icon_zd1@2x.png" mode=""></image>
							<text class="rate-text" >赔率：{{oneRate}}</text>
						</view>
						<view class="btn-top" style="position: relative;"  @tap="selected_number(1)">
							<image v-if="btnImg == 1" class="img" src="../../static/games/number/icon_zs2@2x.png" mode=""></image>
							<image v-else class="img" src="../../static/games/number/icon_zs1@2x.png" mode=""></image>
							<text class="rate-text">赔率：{{bothRate}}</text>
						</view>
					</view>
					<view class="input-content">
						<text class="input-text">买入数量</text>
						<input class="input" type="number" @blur="onBlur"  @confirm="confirm" @input="updateAmount" :value="amount" :min="0.01" :max="100000" placeholder="请输入买入欢乐豆数量" />
					</view>
					<text class="warning-info">输入金额超出您的欢乐豆余额</text>
					<view class="btn-result" style="margin-top: 55rpx;">
						<view class="btn-bottom" @tap="close">
							<image class="img" src="../../static/games/number/icon_qx2@2x.png" mode=""></image>
						</view>
						<view class="btn-bottom" @tap="bettings">
							<image class="img" src="../../static/games/number/icon_qd2@2x.png" mode=""></image>
						</view>
					</view>
				</view>
			</uni-popup>
		</cover-view>
		<cover-view v-else style="position: absolute;top: 0; left: 0;display: flex;flex-direction: column;align-items: center;">
			<uni-bar :fixed="true" left-icon="number" right-icon="number"  @clickRight="gameShows" title="投注提醒"></uni-bar>
			<view class="uni-remind-content">
				<image class="img" src="../../static/games/number/img_tz2@2x.png" mode=""></image>
			</view>
			<text class="uni-remind-text">恭喜您，投注成功!</text>
			<view class="uni-remind-btn-content">
				<view class="btn" style="margin-right: 48rpx; height: 121rpx;"  @tap="goGameShow(1)">
					<image class="img"  src="../../static/games/number/icon_xxjl@2x.png" mode=""></image>
				</view>
				<view class="btn"  @tap="goon">
					<image class="img"  src="../../static/games/number/icon_zjxtz@2x.png" mode=""></image>
				</view>
			</view>
		</cover-view>
	</view>
</template>

<script>
	import uniBar from "@/components/uni-nav-bar/uni-nav-bar-number.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import {
		mapState
	} from 'vuex'
	export default {
	    components: {uniBar,uniPopup},
		computed: {
			...mapState(['userinfo'])
		},
		data(){
			return{
				screenWidth:0,
				screenHeight:0,
				statuShow:true,
				// switchShow:2,
				gameid:'',
				// id: 0,
				times: {
					"fd_hour": '00',
					"fd_minute": '00',
					"fd_second": '00',
					"kj_hour": '00',
					"kj_minute": '00',
					"kj_second": '00',
				},
				issueNumberData: [],
				fd_seconds: 0,
				kj_seconds: 0,
				getLotteryNumbers: '', //获取开奖号码的定时器
				fd_timer:'',
				kj_timer:'',
				// cs:'',
				ludan: [], //路单
				lottery_number: [], //开奖号码
				typeid: '',
				lottery_title:'',
				turn_run: "",
				// tab:1,
				categoryList: [],
				list: [],
				ctx:{},
				lastFullExpect:'',
				currFullExpect:'',
				lastFullExpectArr:[],
				currFullExpectArr:[],
				lotteryTime:'',
				// autoplay:false,
				// swiperShow:false,
				// totalTime:0,
				// arrTotalTime:[],
				loading:true,
				// pixelRatio:1
				bettingData:[],
				selectBettingData:{},
				amount:0,
				btnImg:1,
				subCategoryList: [],
				subCategoryData:[],
				oneRate:0,
				bothRate:0
			}
		},
		onUnload() {
			//清楚所有定时器
			this.clear_all_interval();
		},
		onLoad(option) {
			if (!this.$store.state.hasLogin) {
				uni.reLaunch({
					url: '../login/login'
				})
				return false;
			}
			this.gameid = option.id;
			this.typeid = option.typeid;
			this.cpname = option.cpname;
			const sysinfo = uni.getSystemInfoSync();
			this.screenWidth = sysinfo.screenWidth;
			this.screenHeight = sysinfo.screenHeight;
			this.initCanvas();
			this.getIssueNumber();
			this.getOldGameInfo(1);
		},
		methods:{
			/*初始化画布*/
			initCanvas(middle) {
			let _this = this;
			let pr = this.pixelRatio;
			_this.ctx = uni.createCanvasContext('myCanvas',_this)
			_this.ctx.drawImage('../../static/games/number/img_zbg@3x.png', 0, 0, _this.screenWidth, _this.screenHeight);
			setTimeout(function(){	//必须延迟执行 不然H5不显示
				_this.ctx.stroke();
				_this.ctx.draw()		//必须加上  uniapp 没这儿玩意儿 显示不出来不比原生  不加可以显示
			 },200) 
			},
			getOldGameInfo(type = 1) { //获取投注数据
				if(type == 2){
					let old_game_info = uni.getStorageSync('old_game_info_'+this.gameid)
					if(old_game_info){
						this.setOldGame(old_game_info);
						return;
					}
				}
				this.$ajax.get({
					url: this.$service.api_lists.get_old_game_info,
					data: {
						id: this.gameid
					},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						this.setOldGame(data)
						uni.setStorage({
							key: 'old_game_info_' + this.gameid,
							data: data,
							success: function() {}
						});
					}
				}).catch((err) => {
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					return;
				})
			},
			setOldGame(data) {
				this.selectBettingData = {};
			// 	this.betting_count = 0;
				this.amount = 10
				this.subCategoryData = data.data;
				this.subCategoryList = this.subCategoryData[0];
				this.selectBettingData = this.subCategoryList[0].data;//正式服
				// this.selectBettingData = this.subCategoryList[4].data;//测试服
				// this.oneRate = this.selectBettingData[2].rate;//测试服
				// this.bothRate = this.selectBettingData[3].rate;//测试服
				this.oneRate = this.selectBettingData[0].rate;
				this.bothRate = this.selectBettingData[1].rate;
				this.selected_number(1);
			},
			//选择
			selected_number(index){
				let selectData = {};
				this.bettingData = [];
				this.btnImg = index;
				if(index == 0){
					selectData = this.selectBettingData[0];//正式服
					// selectData = this.selectBettingData[2];//测试服
				}
				if(index == 1){
					selectData = this.selectBettingData[1]//正式服
					// selectData = this.selectBettingData[3]//测试服
				}
				this.bettingData.push({
					"class2": selectData.class2,
					"class3": selectData.class3,
					"price": this.amount,
					"id": selectData.id,
					"rate": selectData.rate,
					"fandian": 0,
				})
			},
			bettings(){
				this.bettingData[0].price = this.amount;
				const sendData = {
					"orderList": this.bettingData,
					"expect": this.issueNumberData.currFullExpect,
					"id": this.gameid,
					"source": "mobile",
				}
				let _self = this;
				const text = _self.btnImg == 0?'单':'双';
				let content = text +' 共'+ _self.amount+ '元';
				uni.showModal({
					title: '确定下注?',
					content: content,
					success: function(res) {
						this.statuShow = false;
						if (res.confirm && _self.$store.state.is_beeting == true) {
							sendData.orderList = JSON.stringify(sendData.orderList)
							_self.$ajax.post({
								url: _self.$service.api_lists.old_cp_buy,
								data: sendData,
							}).then((res) => {
								if (res.data.code == 1) {
									// uni.setStorageSync('beeting_data', false); //存储投注的数据
									// _self.bettingData = [];
									// _self.betting_count = 0;
									// const datas = uni.getStorageSync('old_game_info_' + _self.typeid);
									// if (datas) { //取缓存过的数据投注数据
									// 	_self.categoryList = datas.title
									// 	_self.subCategoryData = datas.data
									// 	_self.categoryClickMain(0);
									// }
									// uni.showToast({
									// 	title: res.data.msg,
									// 	icon: "success"
									// })
									// _self.loading = false
									// _self.categoryClickMain(categoryActiveOld);
									_self.statuShow = false;
									_self.initData();
								} else {
									_self.loading = false
									return false
								}
							}).catch((err) => {
								uni.showToast({
									title: '系统繁忙,请稍后重试!',
									icon: "none"
								})
								_self.loading = false
								return;
							})
						}else if(_self.$store.state.is_beeting == false){
							uni.showToast({
								title: '已封盘',
								icon: "none"
							})
						}
					}
				});
			},
			clear_all_interval() {
				clearInterval(this.getLotteryNumbers)
				clearInterval(this.fd_timer)
				clearInterval(this.kj_timer)
				clearInterval(this.turn_run)
			},
			//获得游戏期号
			getIssueNumber() {
				this.$ajax.get({
					url: this.$service.api_lists.get_issue_number,
					
					data: {
						id: this.gameid
					},
				}).then((res) => {
					if (res.data.code == 1) {
						this.$store.commit('switch_betting', true) //允许下单
						let data = res.data.data;
						this.clear_all_interval();
						this.setData(data);
					}
				}).catch((err) => {
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					return;
				})
			},
			setData(data) {
				this.issueNumberData = data;
				this.fd_seconds = this.issueNumberData.remainTime.time;
				this.kj_seconds = this.issueNumberData.openRemainTime.time;
				this.lastFullExpect = String(data.lastFullExpect);
				this.lastFullExpectArr = this.lastFullExpect.split('');
				this.currFullExpect = String(data.currFullExpect);
				this.currFullExpectArr = this.currFullExpect.split('');
				this.lotteryTime = this.issueNumberData.openRemainTime.date;
				this.typeid = data.typeid;
				// this.$store.commit('setExpect', this.issueNumberData.currFullExpect) //允许下单
				if (this.fd_seconds > 1) {
					this.fd_run()
				} else {
					this.fd_timeUp()
				}
				if (this.kj_seconds > 1) {
					this.kj_run()
				} else {
					this.kj_timeUp()
				}
				this.turn_run = setInterval(() => { //把球转起来
					this.turn()
				}, 200)
				//请求上期的开奖结果
				this.getLotteryNumber()
				this.getLotteryNumbers = setInterval(() => {
					this.getLotteryNumber();
				}, 5000)
			},
			countDown(seconds) { //根据秒数 转换成时分秒
				let [day, hour, minute, second] = [0, 0, 0, 0]
				if (seconds > 0) {
					day = Math.floor(seconds / (60 * 60 * 24))
					hour = Math.floor(seconds / (60 * 60)) - (day * 24)
					minute = Math.floor(seconds / 60) - (day * 24 * 60) - (hour * 60)
					second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
				} else {
					return false
				}
				if (day < 10) {
					day = '0' + day
				}
				if (hour < 10) {
					hour = '0' + hour
				}
				if (minute < 10) {
					minute = '0' + minute
				}
				if (second < 10) {
					second = '0' + second
				}
			
				let res = new Object();
				res.day = day
				res.hour = hour
				res.minute = minute
				res.second = second
				return res
			},
			fd_run() {
				this.fd_timer = setInterval(() => {
					this.fd_seconds--
					if (this.fd_seconds < 0) {
						this.fd_timeUp()
						return
					}
					let res = this.countDown(this.fd_seconds)
					if (!res) {
						this.fd_seconds = 0
						this.fd_timeUp()
						return
					}
					this.times.fd_hour = res.hour + ":"
					this.times.fd_minute = res.minute + ":"
					this.times.fd_second = res.second
				}, 1000)
			},
			fd_timeUp() { //开始封单
				clearInterval(this.fd_timer)
				this.times.fd_second = "00"
				this.times.fd_hour = "已"
				this.times.fd_minute = "封"
				this.times.fd_second = "盘"
				this.$store.commit('switch_betting', false)
			},
			kj_run() {
				this.kj_timer = setInterval(() => {
					this.kj_seconds--
					if (this.kj_seconds < 0) {
						this.kj_timeUp()
						return
					}
					let res = this.countDown(this.kj_seconds)
					if (!res) {
						this.kj_seconds = 0
						this.kj_timeUp()
						return
					}
					this.times.kj_hour = res.hour + ":"
					this.times.kj_minute = res.minute + ":"
					this.times.kj_second = res.second
				}, 1000)
			},
			kj_timeUp() { //开始开奖，请求下一期
				clearInterval(this.kj_timer)
				clearInterval(this.getLotteryNumbers)
				this.times.kj_second = "00"
				this.times.kj_hour = "开"
				this.times.kj_minute = "奖"
				this.times.kj_second = "中"
				//请求开奖接口
				setTimeout(() => {
					this.getIssueNumber();
				}, 3000);
			
			
			},
			getLotteryNumber() { //获取开奖结果
				this.$ajax.get({
					url: this.$service.api_lists.get_lottery_number,
					data: {
						id: this.gameid,
						expect: this.issueNumberData.lastFullExpect
					},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						clearInterval(this.getLotteryNumbers)
						clearInterval(this.turn_run)
						this.ludan = data.remarks
						this.lottery_number = data.opencode_arr;
					}
				}).catch((err) => {
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					return;
				})
			},
			turn() { //开奖号码转起来咯
				this.lottery_number = [];
				// this.lottery_number = this.shuffle(this.issueNumberData.betting_number)
				this.lottery_number = this.shuffle(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
			},
			shuffle(arr) { //取几个随机数
				var length = arr.length,
					randomIndex,
					randomTtem,
					temp;
				const new_arr = [];
				while (length) {
					randomIndex = Math.floor(Math.random() * (length--));
					temp = arr[randomIndex];
					arr[randomIndex] = arr[length];
					arr[length] = temp
				}
				// for (let i = 0; i <= this.issueNumberData.number; i++) {
				for (let i = 0; i <= 4; i++) {
						new_arr[i] = arr[i];
					
				}
				return new_arr;
			},		
			open(){
				 this.$refs.popup.open();
			},
			close(){
				this.initData();
				this.$refs.popup.close();
			},
			//继续
			goon(){
				this.statuShow = true;
			},
			gameShows(){
				uni.navigateTo({
					url:"./game_shows?statusShow=2&id="+this.gameid
				})
			},
			goGameShow(index){
				uni.navigateTo({
					url:'../capitallog/lotterylog?cpname=' + this.cpname 
				})
			},
			goLotteryHistory(index){
				uni.navigateTo({
					url:"./lottery_history?id=" + this.gameid + '&typeid=' + this.typeid
				})
			},
			confirm(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			onBlur(){
				// console.log("执行了我没有")
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			updateAmount(e) { //更新投注金额
				let x = e.detail.value; //测试的数字
				let y = String(x).indexOf(".") + 1; //获取小数点的位置
				let count = String(x).length - y; //获取小数点后的个数
				if (y > 0 && count >2 ) {
					uni.showToast({
						title: '请输入正确金额',
						icon: "none"
					})
					this.amount = 0;
					return false;
				} 
				this.amount = parseInt(e.detail.value);
			},
			//初始化数据
			initData(){
				this.amount = 10;
				this.selected_number(1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-input-text{
		width:686rpx;
		height:72rpx;
		background:rgba(0,0,0,1);
		opacity:0.2;
		border-radius:10rpx;
		margin-top: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.uni-issue{
		width:650rpx;
		height:50rpx;
		margin-top: 65rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		.issue-number{
			width: 36rpx;
			height: 36rpx;
		}
		
	}
	.uni-issue-content{
		width: 686rpx;
		height:224rpx;
		margin-top: 32rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.issue{
			width:212rpx;
			height:224rpx;
			border-radius:16rpx;
		}
	}
	.uni-result{
		width:686rpx;
		height:144rpx;
		margin-top: 24rpx;
	}
	.uni-issue-after{
		width:650rpx;
		height:50rpx;
		margin-top: 95rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		.issue-number{
			width: 36rpx;
			height: 36rpx;
		}
		
		
	}
	.uni-time-content{
		width: 750rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		margin-top: 33rpx;
		.time{
			height:30rpx;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(241,233,254,1);
			line-height: 30rpx;
		}
	}
	.uni-btn-content{
		width: 750rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		margin-top: 110rpx;
		.btn{
			width:200rpx;
			height:64rpx;
			border-radius:32rpx;
		}
	}
	.uni-btn-submit{
		width:686rpx;
		height:130rpx;
		margin-top: 26rpx;
	}
	.img{
		width: 100%;
		height: 100%;
	}
	.uni-popup-content{
		width:540rpx;
		height:614rpx;
		background:rgba(248,248,248,1) url(../../static/games/number/img_zbgtc@2x.png) no-repeat center center;
		border-radius:10rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.btn-result{
			width: 428rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.btn-top{
				width:190rpx;
				height:240rpx;
				border-radius:10rpx;
				.rate-text{
					position: absolute;
					bottom: 23rpx;
					left: 35rpx;
					width: 120rpx;
					height:26rpx;
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height: 26rpx;
					text-align: center;
				}
			}
			.btn-bottom{
				width:198rpx;
				height:64rpx;
				border-radius:32rpx;
			}
		}
	}
	
	.warning-info{
		height:26rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,56,56,1);
		line-height: 26rpx;
		margin-top: 16rpx;
	}
	.input-content{
		width:428rpx;
		height:64rpx;
		background:rgba(0,0,0,0.2);
		box-shadow:0px 1rpx 0px 0px rgba(255,255,255,0.6), 0px 1rpx 0px 0px rgba(0, 0, 0, 0.2);
		border-radius:10rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 32rpx;
		.input-text{
			width:109rpx;
			height: 64rpx;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(254,254,254,1);
			line-height: 64rpx;
			margin-right: 16rpx;
		}
		.input{
			width:239rpx;
			height:64rpx;
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(241,233,254,1);
			line-height: 64rpx;
		}
	}
	.uni-move-img{
		margin-left: -10rpx;
	}
	.uni-remind-content{
		width:390rpx;
		height:410rpx;
		margin-top: 153rpx;
	}
	.uni-remind-text{
		height:24rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(228,211,255,1);
		line-height: 24rpx;
		margin-top: 32rpx;
	}
	.uni-remind-btn-content{
		width: 750rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 80rpx;
		.btn{
			width:288rpx;
			height:136rpx;
		}
	}
</style>
