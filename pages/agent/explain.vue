<template>
	<view class="content">
		<image src="../../static/img/agentinfo.jpg" ></image>
		<view class="article-content">
			恭喜您的账号既是玩家账号也是代理账号，既可以自己投注，也可以发展下级赚取返点佣金。
		</view>
		<view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;">
			<view class="uni-timeline-item uni-timeline-first-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-h4">
						如何赚取返点佣金？
					</view>
					<view class="datetime">
						可获得的返点佣金，取决于自身返点与下级返点的差值，如自身返点3，下级返点1，你将能获得下级投注金额2%的返佣，即下级投注100元，你将会获得2元；
					</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-h4">如何为下级开户？</view>
					<view class="datetime">点击下级开户 >> 为下级设置返点 >> 生成邀请码 >> 发送邀请码给下级 >> 下级即可注册；</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-h4">如何查看下级发展？</view>
					<view class="datetime">1. 点击下级管理，就能查看您所有下级账号；</view>
					<view class="datetime">2. 点击团队报表、下级投注记录、下级交易记录查看代理的发展情况；</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-h4">如何查看自身返点和赔率？</view>
					<view class="datetime">1. 点击下级开户，可查看自身返点；</view>
					<view class="datetime">2. 点击下级开户 >> 返点赔率表，可查看返点对应赔率；</view>
				</view>
			</view>
			<view class="uni-timeline-item uni-timeline-last-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-h4">温馨提示：</view>
					<view class="datetime">1. 为下级设置的返点不同赔率也不同，返点越低，赔率就越低，建议为下级设置的返点不要过低；</view>
					<view class="datetime">2. 如果您为下级开设的是代理类型的账号，那么您的下级就能继续发展下级；</view>
					<view class="datetime">3. 如果您为下级开设的是玩家类型的账号，那么您的下级只能投注，不能再发展下级，也看不到代理中心；</view>
					<view class="datetime">4. 建议开设的下级是代理类型，无论发展了几级，您都能获得返佣。</view>
				</view>
			</view>
		</view>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		data() {
			return {
				current: 0,
				index: 0
			};
		},
		components: {
			
			uniSegmentedControl
		},
		methods: {
		}
	}
</script>

<style>
	.datetime{
		color: #333333;
	}
	.uni-h4{
		color: #3a6ee6;
	}
	.uni-timeline{
		margin-top: 0;
	}
	image{width: 100%;height: 300upx;}
	.content {
		padding: 0;
		background-color: #FFFFFF;
	}

	.uni-card-content-inner {
		padding: 30upx 10upx 0 10upx;
	}
	.article-content{
		padding: 30upx;
	}
</style>
