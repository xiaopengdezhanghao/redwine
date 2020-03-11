<template>
	<view class="content" >
		<view class="hander-top" style="">
			<view class="uni-flex uni-row" style="justify-content: space-around;">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" >
					<view class="uni-input">{{date}}</view>
				</picker>
				<view class="uni-list-cell-pd uni-h6">
					{{days}}
				</view>
				<picker :value="index"  @change="bindPickerChange" range-key="title" :range="game_list">
					<view class="uni-input uni-h3">{{game_list[index].title}}</view>
				</picker>
			</view>
			<view class="uni-flex uni-row" style="justify-content: space-around;uni-center">
				<view class="uni-list-cell-pd uni-center uni-h5 ">
					<p>{{issueNumber.currFullExpect}}</p>
					期剩余开奖
				</view>
				<view class="uni-list-cell-pd uni-center" style="line-height: 80upx;">
					<uni-countdown v-if="issueNumber.openRemainTime != undefined" 
					ref="countdown" 
					:show-day="false" 
					@timeup="timeup" 
					:day="issueNumber.openRemainTime.day"  
					:hour="issueNumber.openRemainTime.hour" 
					:minute="issueNumber.openRemainTime.minute" 
					:second="issueNumber.openRemainTime.second" 
					color="#FFFFFF" 
					background-color="#7C91F4"
					 border-color="#7C91F4"></uni-countdown>
				</view>
				<view class="uni-list-cell-pd uni-center uni-h5">
					开奖时间
					<p>{{issueNumber.openRemainTime ? issueNumber.openRemainTime.date :'23:00:00'}}</p>
				</view>
			</view>
		</view>
		<history  :typeid="typeid" :gameid="gameid" :date="date" :page="page" :expect="issueNumber.lastFullExpect"></history>
		<fr-loading></fr-loading>
	</view>
</template>

<script>
	function getDate(type) {
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
	}
	import History from './history'
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	export default {
		data() {
			return {
				gameid:0,
				typeid:'',
				days:'',
				index:0,
				game_list: [],
				date: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end'),
				issueNumber:[],
				page:1,
				expect:0,
			};
		},
		components: {
			uniCountdown,History
		},
		onReachBottom(){
			this.page = this.page + 1;
		},
		onLoad(e) {
			if(!this.$store.state.hasLogin){
				return;
			}
			this.gameid = e.id
			this.typeid = e.typeid
			this.days = getDate()
			const data = uni.getStorageSync('home_data');
			if(!data){ //如果有缓存过的数据 那么
				uni.switchTab({
					url: '../home/home'
				})
			}
			this.game_list = data.game_all;
			for (let i = 0;i<this.game_list.length;i++) {
				if(parseInt(this.game_list[i].id) == parseInt(this.gameid)){
					this.index = i;
				}
			}
			this.getIssueNumber();
		},
		methods: {
			timeup() {
				this.getIssueNumber();
			},
			
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindPickerChange(index) { //切换彩种
				if (this.current !== index.target.value) {
					this.index =this.current = index.target.value;
				}
				this.gameid = this.game_list[this.index].id
				this.typeid = this.game_list[this.index].typeid;
				this.getIssueNumber();
			},
			getIssueNumber() {
				this.$store.commit("switch_loading", true);
				this.$ajax.get({
					url: this.$service.api_lists.get_issue_number,
					data: {
						id: this.gameid
					},
				}).then((res) => {
					if (res.data.code == 1) {
						let data = res.data.data;
						this.issueNumber = data;
						this.page = 1;
					}
				}).catch((err) => {
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					return;
				})
			},
		},
	}
</script>

<style>
	.content{
		padding: 0px;
	}
	.hander-top{
		padding: 20upx 0;
		width: 100vw;
		border-bottom: 1px solid #ccc;
		position: fixed;
		z-index: 1;
		background: #f8f8f8;
		color: #666;
		font-size: 12upx;
	}
		
	.select-view{
		margin-top: 275upx;
	}
	uni-picker{
		width: 32%;
		text-align: center;
	}
</style>
