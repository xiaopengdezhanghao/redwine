<template>
	<view class="content">
		<view class="content-two">
			<form @submit="formSubmit" >
				<view class="uni-card">
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list">
								<view class="uni-list-cell">
									<view class="uni-list-cell-navigate uni-navigate-right">
										<view class="uni-list-cell-db">
											<picker @change="bindPickerChange" :value="index"  :range="bank_list">
												<view class="uni-input">{{bank_list[index]}}</view>
											</picker>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" @click="showMulLinkageThreePicker">
								<view class="uni-list-cell">
									<view class="uni-list-cell-navigate uni-navigate-right">
										<input class="uni-input" type="text" name='pickerText' placeholder="请选择开户城市" :value="pickerText" />
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover">
								<input class="uni-input" type="text" name="bank_branch" v-model="bank_branch" placeholder="请输入支行信息" />
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover">
								<input class="uni-input" type="text" v-model="realname" name="realname" :disabled="true" placeholder="请输入开户人姓名" />
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover">
								<input class="uni-input" type="number" v-model="bank_card_number" name="bank_card_number" placeholder="请输入卡号" />
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover">
								<input class="uni-input" type="number" v-model="bank_card_number_confirm" name="bank_card_number_confirm" placeholder="请重复输入卡号" />
							</view>
						</view>
					</view>
					<view class="uni-card-content">
						<view class="uni-card-content-inner">
							<view class="uni-list" hover-class="uni-list-cell-hover">
								<input class="uni-input" type="password" v-model="pay_password" name="pay_password" placeholder="请输入提款密码" />
							</view>
						</view>
					</view>
					
				</view>
				<button type="primary" class="buy-btn" formType="submit" :loading="is_disabled" :disabled="is_disabled">更新</button>
			</form>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	var  graceChecker = require("../../common/graceChecker.js");
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '@/common/city.data.js';
	
	export default {
		data() {
			return {
				id:0,
				is_disabled : false,
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '', //银行地址
				bank_branch:'',//支行信息
				bank_code:'',//银行code
				realname:'',//开户人姓名
				bank_card_number:'',//银行卡号
				bank_card_number_confirm:'',//确认银行卡号
				pay_password:'',//提款密码
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray: [],
				bank_list: ['请选择银行'],
				index: 0 //选择的银行
			};
		},
		onLoad(options) {
			this.getBindBankList();
			this.id = options.id
			if(this.id < 1){
				uni.navigateBack({
					delta: 1
				})
			}
			this.getBnakData();
		},
		components: {
			
			mpvueCityPicker
		},
		methods: {
			onCancel(e) {
				console.log(e)
			},
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.pickerText = e.label;
			},
			getBindBankList(){ //从缓存中获取银行信息
				const bank_list = uni.getStorageSync('bank_list')
				if(!bank_list){ //如果缓存没有数据，去请求接口，然后缓存上
					sendGetBindBankList();
					const bank_list = uni.getStorageSync('bank_list')
				}
				bank_list.forEach(v=>{  
					this.bank_list.push(v.bankname)
				});
				
			},
			sendGetBindBankList(){ //获取银行列表信息
				this.$ajax.get({
					url:this.$service.api_lists.bind_bank_list,
					data:{},
				}).then((res)=>{
					if(res.data.code == 1){
						let data = res.data.data;
						//缓存银行信息
						uni.setStorage({
							key: 'bank_list',
							data: data,
							success: function () {
								console.log('success');
							}
						});
					}
				}).catch((err)=>{
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					console.log('request fail', err);
					return;
				})
			},
			getBnakData(){ //获取单条银行卡信息
				this.$ajax.get({
					url:this.$service.api_lists.bank_desc,
					data:{id:this.id},
				}).then((res)=>{
					if(res.data.code == 1){
						let data = res.data.data;
						if(data.iswithdraw == 1){ //如果后台返回不让编辑，返回
							uni.navigateBack({
								delta: 2
							})
						}
						this.pickerText = data.bankaddress
						this.bank_branch = data.bankbranch
						this.realname = data.accountname
						this.bank_card_number = data.banknumber
						this.bank_card_number_confirm = data.banknumber
						this.bank_code = data.bankcode
						
						const bank_list = uni.getStorageSync('bank_list')
						if(!bank_list){ //如果缓存没有数据，去请求接口，然后缓存上
							sendGetBindBankList();
							const bank_list = uni.getStorageSync('bank_list')
						}
						let layer = 0
						bank_list.forEach(v=>{
							layer += 1;
							if(v.bankcode == data.bankcode){
								this.index = layer
							}
						});
					}
				}).catch((err)=>{
					uni.showToast({
						title: '系统繁忙,请稍后重试!',
						icon: "none"
					})
					console.log('request fail', err);
					return;
				})
			},
			bindPickerChange(e){ //选择银行，获取bank_code
				this.index = e.target.value
				const bank_list = uni.getStorageSync('bank_list')
				this.bank_code = bank_list[this.index-1].bankcode;
			},
			formSubmit: function (e) { //编辑银行卡
				
				var rule = [
					{name:"pickerText", checkType : "notnull", checkRule:"",  errorMsg:"请选择开户城市！"},
					{name:"bank_branch", checkType : "notnull", checkRule:"",  errorMsg:"请填写开户支行！"},
					{name:"bank_card_number", checkType : "notnull", checkRule:"",  errorMsg:"请填写正确的银行卡号！"},
					{name:"bank_card_number_confirm", checkType : "notnull", checkRule:"",  errorMsg:"请确认银行卡号！"},
					{name:"pay_password", checkType : "notnull", checkRule:"",  errorMsg:"请填写提款密码！"},
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(this.bank_card_number != this.bank_card_number_confirm){
					uni.showToast({title:"两次输入卡号不一致", icon:"none"});
					return false;
				}
				if(!this.bank_code){
					uni.showToast({title:"请选择银行!", icon:"none"});
					return false;
				}
				
				if(checkRes){
					this.is_disabled = true;
					const sendData  = {
						"id" : this.id,
						"bank_address" : this.pickerText,
						"bank_branch" : this.bank_branch,
						"bank_code" : this.bank_code,
						"realname" : this.realname,
						"bank_card_number" : this.bank_card_number,
						"bank_card_number_confirm" : this.bank_card_number_confirm,
						"pay_password" : this.pay_password
					}
					this.$ajax.post({
						url:this.$service.api_lists.update_bank,
						data:sendData
					}).then((res)=>{
						if(res.data.code == 1){
							uni.showToast({title:"修改成功!", icon:"none"});
							setTimeout(() => {
								uni.navigateBack({
									delta: 1
								})
							}, 2000);
							return false;
						}
						uni.showToast({title:res.data.msg, icon:"none"});
					}).catch((err)=>{
						console.log('request fail', err);
					})
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
				this.is_disabled = false;
			}
		},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		}
	}
</script>

<style>
	.content {
		padding: 0;
	}

	.content-two {
		padding: 20upx;
	}

	.uni-card {
		box-shadow: 0 0 10upx 6upx #efefef;
		border-radius: 20upx;
	}

	.uni-card-top {
		height: 450upx;
	}

	.produceshouyi-view {
		margin-top: 5upx;
	}

	.image {
		width: 100%;
		height: 350upx !important;
		position: absolute;
	}

	.buy-btn {
		width: 90%;
		border-radius: 50upx;
		background-color: #3a6ee6;
		box-shadow: 0 0 10upx 6upx #cadafd;
		margin-top:20upx;
	}

	.uni-card-content-inner-im {
		padding: 22upx 30upx !important;
	}

	.uni-list::before {
		height: 0;
	}

	.uni-list::after {
		background-color: #efefef
	}

	.producebonus {
		font-size: 65upx;
		color: #f97c22;
	}

	.produceshouyi {
		color: #3e74fe;
		font-size: 30upx;
	}

	.uni-input-money {
		border-bottom: 2upx solid #efefef;
	}

	.uni-input {
		padding: 24upx 24upx;
	}

	.uni-card-content-inner {
		padding: 0upx 20upx;
	}

	.money-hr {
		margin-top: 15upx;
	}

	.send-code {
		position: absolute;
		right: 0;
		z-index: 1;
	}

	.uni-list-cell-navigate {
		padding: 0 30upx 0 0;
	}

	.uni-list-cell-left {
		color: grey;
		margin-left: -6upx;
	}
	input{
		z-index: 0;
		}
</style>
