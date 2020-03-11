<template>
	<view class="content">
		<view class="top"></view>
		<view class="uni-list">
			 <navigator url="../security/password"  >
				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						<view>修改登录密码</view>
						<view></view>
					</view>
				</view>
			</navigator>
			<navigator url="../security/paypassword"  >
				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						<view>修改提款密码</view>
						<view></view>
					</view>
				</view>
			</navigator>
		</view>
		<view class="uni-list">
			<navigator url="../security/question"  >
				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						<view>密保管理</view>
						<view></view>
					</view>
				</view>
			</navigator>
			<navigator url="../bankcards/bankcards"  >
				<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right">
						<view>银行卡管理</view>
						<view></view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			};
		},
		components: {},
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
.buy-btn{margin-top:20upx;width: 90%;border-radius: 50upx;background-color: #ec3936;box-shadow: 0 0 8upx 5upx #ef5754;}
uni-button:after{border: 0;}
</style>
