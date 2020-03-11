<template>
	<view class="content">
		<view class="uni-card">
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					<!-- <view class="banner">
			<image class="banner-img" src="../../static/img/buy_bg.png"></image>
			<view class="banner-title">{{datainfo.title}}</view>
		</view> -->
					<view class="uni-h4" style="text-align: center;">
						{{datainfo.title}}
					</view>
					<view class="article-meta">
						<text class="article-author">管理员</text>
						<text class="article-text">发表于</text>
						<text class="article-time">{{datainfo.oddtime}}</text>
					</view>
					<view class="article-content">
						<rich-text v-html="datainfo.content">
							{{datainfo.content}}
						</rich-text>
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
				id: 0,
				datainfo: []
			}
		},
		onShareAppMessage() {},
		onLoad(event) {
			this.id = event.id;
			this.$ajax.get({
				url: this.$service.api_lists.news_details,
				data: {
					id: this.id
				}
			}).then((res) => {
				if (res.data.code == 1) {
					this.datainfo = res.data.data;
					//设置标题
					uni.setNavigationBarTitle({
						title: this.datainfo.title
					});
				}
				console.log(res);
			}).catch((err) => {
				console.log('request fail', err);
			})
		},
		methods: {}
	}
</script>

<style>
	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
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

	.article-meta {
		padding: 20upx 40upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-text {
		font-size: 26upx;
		line-height: 50upx;
		margin: 0 20upx;
	}

	.article-author,
	.article-time {
		font-size: 30upx;
	}

	.article-content {
		padding: 0 30upx;
		overflow: hidden;
		font-size: 30upx;
		margin-bottom: 30upx;
	}
</style>
