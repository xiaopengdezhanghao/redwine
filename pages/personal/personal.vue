<template>
	<view class="content">
			<view class="top"></view>
			<form @submit="formSubmit" >
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							<view>头像</view>
							<view>
								<image :src="'../../static/user/face/'+userinfo.face+'.jpg'"></image>
							</view>
						</view>
					</view>
					<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							<view>用户名</view>
							<view><input class="uni-input" type="text" name="username" placeholder="请输入昵称"  @blur="inputBlur" :value="userinfo.username"  disabled="true" /></view>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							<view>真实姓名</view>
							<view><input class="uni-input" type="text" name="realname" placeholder="请输入真实姓名"  @blur="inputBlur" v-model="realname" :disabled="this.$store.state.userinfo.userbankname !== ''" value=""/></view>
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							<view>手机号</view>
							<view><input class="uni-input" type="text" name="mobile" placeholder="请输入手机号"  @blur="inputBlur" v-model="mobile" :disabled="this.$store.state.userinfo.phone !== ''" value=""/></view>
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							<view>QQ号</view>
							<view><input class="uni-input" type="number" name="qq" placeholder="请输入QQ号"  @blur="inputBlur" v-model="qq" :disabled="this.$store.state.userinfo.qq !== ''" value=""/></view>
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right">
							<view>微信号</view>
							<view><input class="uni-input" type="text" name="wechat" placeholder="请输入微信号"   @blur="inputBlur" :disabled="this.$store.state.userinfo.weixin !== ''" v-model="wechat" value=""/></view>
						</view>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell"  hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" >
							<view>性别</view>
							<view style="width: 55%;">
								<picker  @change="bindPickerChange" :value="index" :range="sex">
									<view class="uni-input">{{sex[index]}}</view>
								</picker>
							</view>
						</view>
					</view>
				</view>
				<button class="btn-submit buy-btn" formType="submit" type="primary">保存</button>
			</form>
	</view>
</template>

<script>
	var  graceChecker = require("../../common/graceChecker.js");
	import {
	    mapState,
		mapMutations
	} from 'vuex'
	
	export default {
		computed: {
		    ...mapState(['userinfo'])
		},
		data() {
			return {
				index:this.$store.state.userinfo.sex,
				nickname:this.$store.state.userinfo.username,
				mobile:this.$store.state.userinfo.phone,
				qq:this.$store.state.userinfo.qq,
				wechat:this.$store.state.userinfo.weixin,
				realname:this.$store.state.userinfo.userbankname,
				sex:['女','男']
			};
		},
		methods:{
			...mapMutations(['userinfoarr']),
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.target.value)
				this.index = e.target.value
			},
			inputBlur(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			formSubmit: function (e) {
				console.log(1);
				//将下列代码加入到对应的检查位置
				//定义表单规则
				var rule = [
					{name:"qq", checkType : "notnull", checkRule:"",  errorMsg:"请输入正确的QQ号"},
					{name:"wechat", checkType : "notnull", checkRule:"",  errorMsg:"请输入正确的微信号"}
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					this.$ajax.post({
						url:this.$service.api_lists.member_update,
						data:{
							mobile:this.mobile,
							qq:this.qq,
							sex:this.index,
							weixin:this.wechat,
							realname:this.realname,
						}
					}).then((res)=>{
						if(res.data.code == 1){
							uni.showToast({title:"保存成功!", icon:"none"});
							uni.setStorageSync("userinfo", res.data.data.userinfo);
							this.userinfoarr(res.data.data.userinfo);
						}
						return;
					}).catch((err)=>{
						console.log('request fail', err);
					})
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			},
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
.uni-list-cell-navigate{padding: 10upx 30upx;}
image{width: 100upx;height: 100upx;border: 2upx solid #ffdcb4;border-radius: 100upx;margin-right: 30upx;}
uni-input{text-align: right;margin-right:10upx}
.uni-input{text-align: right;margin-right:10upx}
.buy-btn{margin-top:20upx;width: 90%;border-radius: 50upx;background-color: #FF8900;box-shadow: 0 0 10upx 6upx #ffdcb4;}
button:after{
	border:1px solid #ffdcb4 !important;
}
</style>
