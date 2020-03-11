<template>
	<view class="content">
		<view class="top"></view>
		<navigator url="../news/news?id=30" hover-class="navigator-hover">
			<view class="uni-list">
				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						<view>平台介绍</view>
						<view></view>
					</view>
				</view>
			</view>
		</navigator>
		<navigator url="../news/category?id=29" hover-class="navigator-hover">
			<view class="uni-list">
				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						<view>帮助中心</view>
						<view></view>
					</view>
				</view>
			</view>
		</navigator>
		<view class="uni-list" @click="reload()">
			<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<view>清除缓存</view>
					<view></view>
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<view>版本更新</view>
					<view style="margin-right: 30upx;">{{appversion}}</view>
				</view>
			</view>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="warn" class="buy-btn" @tap="bindLogout()">退出登录</button>
		</view>
	</view>
</template>

<script>
	import service from "../../common/service.js";
	 import {
	    mapState,
	    mapMutations
	} from 'vuex'
	
	export default {
		data() {
			return {
				appversion:service.app_config.version
			};
		},
		components: {},
		computed: {
		    ...mapState(['hasLogin', 'forcedLogin','userinfo'])
		},
		onLoad() {
			this.appversion = service.app_config.version;
		},
		methods: {
			...mapMutations(['logout']),
			bindLogout() {
			    this.logout();
			    /**
			     * 如果需要强制登录跳转回登录页面
			     */
			    if (this.forcedLogin) {
			        uni.reLaunch({
			            url: '../login/login',
			        });
			    }
			},
			reload(){
				uni.switchTab({
					url:'../home/home?reload=1'
				})
				setTimeout(() => {
					uni.showToast({
						title: '清除缓存成功!',
						icon: "none"
					})
				}, 500);
				setTimeout(() => {
					this.$router.go(0);
				}, 1000);
			}
		},
	}
</script>

<style>
.content{padding: 0;}
.top{margin-top: 20upx;}
.uni-list{margin-top: 10upx;margin-bottom: 10upx;}
.uni-list::before{background-color: transparent;}
.uni-list:after{background-color: transparent;margin-bottom: 20upx;}
.uni-list-cell::after{background-color: transparent;}
.uni-list-cell-navigate{padding: 20upx 30upx;}
.uni-list::before{background-color: transparent;}
button.button-hover{
	color: #fff !important;
	background-color: #ec3936 !important;
} 
.buy-btn{margin-top:20upx;width: 90%;border-radius: 50upx;background-color: #FF8900;box-shadow: 0 0 6upx 3upx #ef5754;}
uni-button:after{border: 0;}
</style>
