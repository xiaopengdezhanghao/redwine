<template>
	<view class="qrcode" id="qrcode">
		<image class="image" id="qrcodes" v-if="img != ''" :src="img" :style="{ width: size+'px', height: size + 'px' }"/>
	</view>
</template>
<script>
	import QR from "./qrcode.js";
	export default {
		name: 'number-box',
		props: {
			val: {
				type: String,
				default: ''
			},
			size:{
				type:Number,
				default:100
			}
		},
		data(){
			return{
				img:''
			}
		},
		onUnload(){
		},
		methods: {
			creatQrcode(){
				console.log(1);
				let val = String(this.val)
				if(val == ''){
					return false
				}
				console.log(val);
				let img = QR.createQrCodeImg(val, {
					size: parseInt(this.size),
					colorDark : "#000",
					colorLight : "#fff",
				})
				console.log(1111);
				console.log(img)
				this.img = img;
			},
			clearQrcode(){
				console.log(2);
				this.img = '';
			}
		},
		watch:{
			size(newVal, oldVal){
				if(newVal != oldVal){
					this.size = newVal;
					this.creatQrcode()
				}
			},
			val(x,y){
				console.log(x,1,y,2);
			}
		}
	}
</script>
<style>
	.qrcode{
		display: flex;
		justify-content: center;
	}
</style>
