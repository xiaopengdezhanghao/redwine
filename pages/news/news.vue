<template>
	<view class="content">
		<view class="uni-card">
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					<view class="uni-list">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in datainfo" v-if="index > 0"
						 @click="toNewsDetail(item.id)">
							<view class="uni-media-list">
								<!-- <image class="uni-media-list-logo" :src="item.more.thumbnail"></image> -->
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top">{{item.title}}</view>
									<view class="uni-media-list-text-bottom">
										<text>admin</text>
										<text>{{item.oddtime}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <pageFooter></pageFooter> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datainfo: {},
				catid: 0
			};
		},
		components: {},
		onLoad(event) {
			this.catid = event.id;
			this.getData()
		},
		methods: {
			setData(data) {
				this.datainfo = data;
			},
			getData() {
				const data = uni.getStorageSync('news_data');
				if (data) { //如果有缓存过的数据 那么
					this.setData(data.lists)
				}

				this.$ajax.get({
					url: this.$service.api_lists.articles,
					data: {
						catid: this.catid
					}
				}).then((res) => {
					if (res.data.code == 1) {
						this.datainfo = res.data.data.lists;
						this.setData(res.data.data.lists);
						uni.setStorage({
							key: 'news_data',
							data: res.data.data,
							success: function() {
								console.log('success');
							}
						});
					}
					console.log(res);
				}).catch((err) => {
					console.log('request fail', err);
				})
			},
			toNewsDetail(id) {
				uni.navigateTo({
					url: '../news/detail?id=' + id
				})
			},
		}
	}
</script>

<style>
	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.uni-row {
		padding: 10upx 30upx;
	}

	.uni-list-cell::after {
		background-color: transparent;
	}

	.uni-list::before {
		background-color: transparent;
	}

	.uni-list::after {
		background-color: #efefef;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 30upx;
		bottom: 30upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: white;
		z-index: 11;
	}

	.uni-media-list-logo {
		width: 180upx;
		height: 140upx;
	}

	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}

	.uni-media-list-text-top {
		height: 74upx;
		font-size: 28upx;
		overflow: hidden;
	}

	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
