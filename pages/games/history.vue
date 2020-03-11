<template>
	<view class="select-view">
			<view>
				<view class="uni-flex uni-row" style="text-align: center;font-size: 25upx;background: #F96262;color: #FFFFFF;">
					<view class="text table_tr" :style="[{'flex':index < 6&&index > 0?'1':''},{'width':index==0?'140rpx':''}]" :class="index == 6?'result-box-title':''" v-for="(item,index) in table_tr" :key="index">
						{{item}}
					</view>
				</view>
				<view style="background: #f8f8f8;">
					<view class="uni-flex uni-row" style="text-align: center;font-size: 25upx;;color: #1e1b1b;border-bottom: 1px solid #cecece;"
					 v-for="(param,i) in historyList" :key="i">
					 <view class="uni-flex uni-column"  style="margin-left: 15rpx; margin-right: 10rpx;">
						 <text>{{param.info.opentime.split(' ')[1]}}</text>
						 <text>{{param.info.expect}}</text>
					 </view>
					 <block v-if="k<5" v-for="(v,k) in param.data_format" :key='k'>
						 <view class="uni-flex uni-row" style="flex: 1; justify-content: center;align-items: center;">
						 	<text class="text table_tr result-garden"  >{{v[0]}}</text>
						 </view>
						 <view class="uni-flex uni-row" v-if="k == 4" style="justify-content: center;align-items: center;">
						 	<text class="text table_tr result-box" >{{v[2]}}</text>
						 </view>
					 </block>
					</view>
				</view>
			</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		name: "lottery-head",
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				items: [
					'号码',
					'大小',
					'单双',
					'组合'
				],
				table_tr: ['期号','一','二','三','四','五','单双'],
				list: [],
				current: 0,
				activeColor: '#007aff',
				styleType: 'button',
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 1,
				historyList:[]
			}
		},
		props: {
			gameid: '',
			typeid: '',
			date: '',
			page: 0,
			expect:'',
		},
		watch: {
			date(newValue, oldValue) {
				this.list = [];
				this.GetHistoryResults();
			},
			expect(x,y){
				if( x != y ){
					this.list = [];
					this.GetHistoryResults();
				}
			},
			gameid(newValue, oldValue) {
				this.list = [];
				this.GetHistoryResults();
			},
			typeid(newValue, oldValue) {
				
			},
			page(x, y) {
				this.GetHistoryResults();
			},
		},
		onUnload() {
			this.max = 0,
			this.data = [],
			this.loadMoreText = "加载更多",
			this.showLoadMore = false;
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			styleChange(evt) {
				if (this.styleType !== evt.target.value) {
					this.styleType = evt.target.value;
				}
			},
			colorChange(evt) {
				if (this.styleType !== evt.target.value) {
					this.activeColor = evt.target.value;
				}
			},
			isNumber(val) {
				var regPos = /^\d+(\.\d+)?$/; //非负浮点数
				var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
				if (regPos.test(val) || regNeg.test(val)) {
					return true;
				} else {
					return false;
				}
			},
			GetHistoryResults() {

				this.$ajax.get({
					url: this.$service.api_lists.history_results,
					data: {
						id: this.gameid,
						date: this.date ? this.date : '',
						page: this.page
					},
				}).then((res) => {
					if (res.data.code == 1) {
						const data = res.data.data
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
				this.items = data.item.item;
				// this.table_tr = data.item.title;

				console.log(this.list);
				if (this.list.length == 0) {
					this.list = data.list;
				} else {
					let list = this.list[0]
					let lists = list.concat(data.list[0]);
					this.list[0] = lists;
				}
				this.historyList = this.list[0];
			},
			//拆分字符串
			getSubString(data){
				let arr = [];
				arr = data.split(' ')
				return arr[1]
			}
		},
		created: function(e) {
			this.GetHistoryResults(); //获取开奖历史结果
		},
	}
</script>

<style>
	.table_tr {
		font-size: 34upx;
		height: 80upx;
		line-height: 80upx;
	}

	image {
		width: 50upx;
		height: 50upx;
	}

	.segmented-control {
		border-radius: 0px;
	}
	.result-box{
		width:165rpx;
		height:48rpx;
		background:rgba(232,233,235,1);
		line-height: 48rpx;
	}
	.result-garden{
		width:48rpx;
		height:48rpx;
		background:rgba(255,137,0,1);
		border-radius:50%;
		line-height: 48rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
	.result-box-title{
		width:165rpx;
	}
</style>
