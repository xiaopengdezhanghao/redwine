<template>
	<view class="content">
		<view class="top"></view>
		<view class="uni-list">
			<navigator :url="'../news/news?id='+list.id" hover-class="navigator-hover" v-for="(list,index) in lists" :key="index">
				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						<view>{{list.catname}}</view>
						<view></view>
					</view>
				</view>
			</navigator>
			<!-- <pageFooter></pageFooter> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [],
				parentid:0
			};
		},
		onLoad(event) {
			this.parentid = event.id;
			this.$ajax.get({
				url: this.$service.api_lists.news_category,
				data: {
					parentid: this.parentid
				}
			}).then((res) => {
				if (res.data.code == 1) {
					this.lists = res.data.data.lists;
				}
				console.log(res);
			}).catch((err) => {
				console.log('request fail', err);
			})
		},
		methods: {},
	}
</script>

<style>
	.content {
		padding: 0;
	}

	.top {
		margin-top: 20upx;
	}

	.uni-list {
		margin-top: 10upx;
		margin-bottom: 10upx;
	}

	.uni-list::before {
		background-color: transparent;
	}

	.uni-list:after {
		background-color: transparent;
		margin-bottom: 20upx;
	}

	.uni-list-cell::after {
		background-color: transparent;
	}

	.uni-list-cell-navigate {
		padding: 20upx 30upx;
	}

	.uni-list::before {
		background-color: transparent;
	}

	button.button-hover {
		color: #fff !important;
		background-color: #ec3936 !important;
	}

	.buy-btn {margin-top:20upx;
		margin-top: 20upx;
		width: 90%;
		border-radius: 50upx;
		background-color: #ec3936;
		box-shadow: 0 0 6upx 3upx #ef5754;
	}

	uni-button:after {
		border: 0;
	}
</style>
