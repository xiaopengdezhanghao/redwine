<template>
	<view>
		<view class="uni-card">
			<view class="uni-card-content">
				<view class="uni-card-content-inner">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"></uni-segmented-control>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"

	export default {
		props: {
			current: 0, //数据
			agent: 0, //数据
		},
		data() {
			return {
				items: [
					'全部日志',
					'充值记录',
					'提现记录'
				],
			};
		},
		components: {
			uniSegmentedControl
		},
		methods: {
			onClickItem(data) {
				let index = data.currentIndex;
				if(index == 0){
					uni.redirectTo({
						url: './capitallog?agent='+this.agent
					})
				}
				if(index == 1){
					uni.redirectTo({
						url: './rechargelog?agent='+this.agent
					})
				}
				if(index == 2){
					uni.redirectTo({
						url: './withdrawlog?agent='+this.agent
					})
				}
			}
		}
	}
</script>

<style>
</style>
