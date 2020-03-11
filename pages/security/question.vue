<template>
	<view  class="content">
		<view class="content-two">
			<form @submit="formSubmit" >
				<view class="uni-card">
					<view class="uni-card-content" >
						<view class="uni-card-content-inner">
							<view class="uni-list">
								<view class="uni-list-cell">
									<view class="uni-list-cell-navigate uni-navigate-right">
										<view class="uni-list-cell-left">
											请选择问题1
										</view>
										<view class="uni-list-cell-db">
											<picker @change="bindPickerChange1" :value="index1" :range="array1">
												<view class="uni-input">{{array1[index1]}}</view>
											</picker>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover" >
								<input class="uni-input" type="text" name="value1" v-model="value1" @blur="inputBlur" placeholder="请输入答案1" value=""/>
							</view>
						</view>
					</view>
					<view class="uni-card-content" >
						<view class="uni-card-content-inner">
							<view class="uni-list">
								<view class="uni-list-cell">
									<view class="uni-list-cell-navigate uni-navigate-right">
										<view class="uni-list-cell-left">
											请选择问题2
										</view>
										<view class="uni-list-cell-db">
											<picker @change="bindPickerChange2" :value="index2" :range="array1">
												<view class="uni-input">{{array1[index2]}}</view>
											</picker>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover" >
								<input class="uni-input" type="text"  name="value2" v-model="value2" @blur="inputBlur" placeholder="请输入答案2" value=""/>
							</view>
						</view>
					</view>
					<view class="uni-card-content" >
						<view class="uni-card-content-inner">
							<view class="uni-list">
								<view class="uni-list-cell">
									<view class="uni-list-cell-navigate uni-navigate-right">
										<view class="uni-list-cell-left">
											请选择问题3
										</view>
										<view class="uni-list-cell-db">
											<picker @change="bindPickerChange3"  :range="array1">
												<view class="uni-input">{{array1[index3]}}</view>
											</picker>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover" >
								<input class="uni-input" type="text"  name="value3" v-model="value3" @blur="inputBlur" placeholder="请输入答案3" value=""/>
							</view>
						</view>
					</view>
				</view>
			<button class="btn-submit buy-btn" formType="submit" type="primary">提交</button>
			</form>
		</view>
	</view>
</template>

<script>
	import {
	    mapState,mapMutations
	} from 'vuex'
	
	var  graceChecker = require("../../common/graceChecker.js");
	export default {
		computed: {
		    ...mapState(['userinfo','userinfoarr'])
		},
		data() {
			return {
				array1:['您的出生地是哪里？','对您影响最大的人是谁？','您中学班主任姓名是？'],
				index1:0,
				value1:'',
				index2:1,
				value2:'',
				index3:2,
				value3:'',
				send:false
				
			};
		},
		onLoad() {
			const userinfo = uni.getStorageSync('userinfo');
			if(userinfo.is_question == 1){
				uni.showModal({
					title: '提示',
					content: '您已设置密保问题，无需重复设置!',
					showCancel:false,
					success: function (res) {
						 uni.navigateBack({
						  	delta: 1
						  })
					}
				});
				
			}
			
		},
		methods:{
			inputBlur(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			bindPickerChange1: function(e) {
				this.index1 = e.target.value
				
			},
			bindPickerChange2: function(e) {
				this.index2 = e.target.value
				
			},
			bindPickerChange3: function(e) {
				this.index3 = e.target.value
				
			},
			formSubmit: function (e) {
				console.log(this.value1);
				if(this.index1 == this.index2 || this.index2 == this.index3 || this.index1 == this.index3){
					uni.showToast({title:"密保问题不能重复!", icon:"none"});
					return false;
				}
				//将下列代码加入到对应的检查位置
				//定义表单规则
				var rule = [
					{name:"value1", checkType : "notnull", checkRule:"",  errorMsg:"请输入问题1的答案"},
					{name:"value2", checkType : "notnull", checkRule:"",  errorMsg:"请输入问题2的答案"},
					{name:"value3", checkType : "notnull", checkRule:"",  errorMsg:"请输入问题3的答案"}
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					const _this = this
					uni.showModal({
						title: '提示',
						content: '请认真确认信息,设置成功后,无法修改',
						success: function (res) {
							if (res.confirm) {
								_this.$ajax.post({
									url:_this.$service.api_lists.set_question,
									data:{
										questionone:_this.index1  + 1,	
										answerone:_this.value1,
										questiontwo:_this.index2 +2,
										answertwo:_this.value2,
										questionthree:_this.index3 +2,
										answerthree:_this.value3,
									}
								}).then((res)=>{
									if(res.data.code == 1){
										const userinfo = uni.getStorageSync('userinfo');
										userinfo.is_question = 1
										uni.setStorageSync("userinfo",userinfo);
										uni.showModal({
											title: '提示',
											content: '设置成功!',
											showCancel:false,
											success: function (res) {
												 uni.navigateBack({
												  	delta: 1
												  })
											}
										});
										
										return false;
									}else if((res.data.code == '-23')){
										const userinfo = uni.getStorageSync('userinfo');
										userinfo.is_question = 1
										uni.setStorageSync("userinfo",userinfo);
										uni.showModal({
											title: '提示',
											content: res.data.msg,
											showCancel:false,
											success: function (res) {
												 uni.navigateBack({
												  	delta: 1
												  })
											}
										});
										return false;
									}
									console.log(res);
									uni.showToast({title:res.data.msg, icon:"none"});
								}).catch((err)=>{
									console.log('request fail', err);
								})
							}
							
						}
					});
					
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			}
		},
		components: {},
	}
</script>

<style>
.content{padding: 0;}
.content-two{padding: 20upx;}
.uni-card-top{height: 450upx;}
.produceshouyi-view{margin-top: 5upx;}
.image{width: 100%;height: 350upx !important;position: absolute;}
.buy-btn{margin-top:20upx;width: 90%;border-radius: 50upx;background-color: #FF8900;}
.uni-card-content-inner-im{padding: 22upx 30upx !important;}
.uni-list::before{height: 0;}
.uni-list::after{background-color: #efefef}
.producebonus{font-size: 65upx;color: #f97c22;}
.produceshouyi{color: #3e74fe;font-size: 30upx;}
.uni-input-money{border-bottom: 2upx solid #efefef;}
.uni-input{padding: 24upx 24upx;}
.uni-card-content-inner{padding: 0upx 20upx;}
.money-hr{margin-top: 15upx;}
.send-code{position: absolute;right: 0;z-index: 1;}
input{
	z-index: 0;
}
.uni-list-cell-navigate{padding: 0 30upx 0 0;}
.uni-list-cell-left{color: grey;margin-left: -6upx;}
</style>
