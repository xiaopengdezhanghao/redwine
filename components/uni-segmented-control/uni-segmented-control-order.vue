<template>
	<view :class="[styleType === 'text'?'segmented-control--text' : 'segmented-control--button' ]" 
	 class="segmented-control">
		<view v-for="(item, index) in values" 
		 :key="index" 
		 :style="{
			 backgroundColor: index === currentIndex && styleType === 'button' ? activeColor : '',
		 }"
		 class="segmented-control__item"
		  @click="_onClick(index)">
		<text 
		class="segmented-control__text"
		:class="[index === currentIndex && styleType === 'button' ? 'segmented-control__text_select' : '']"
		>{{ item }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniSegmentedControl',
		props: {
			current: {
				type: Number,
				default: 0
			},
			values: {
				type: Array,
				default () {
					return []
				}
			},
			activeColor: {
				type: String,
				default: '#FF8900'
			},
			styleType: {
				type: String,
				default: 'button'
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		watch: {
			current(val) {
				if (val !== this.currentIndex) {
					this.currentIndex = val
				}
			}
		},
		created() {
			this.currentIndex = this.current
		},
		methods: {
			_onClick(index) {
				if (this.currentIndex !== index) {
					this.currentIndex = index
					this.$emit('clickItem', {currentIndex:index})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/uni.scss';

	.segmented-control {
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		height: 36px;
		overflow: hidden;
		border: 4rpx solid #FF8900;
		border-right: 0;
		margin-top: 24rpx; 
		width: 686rpx; 
		height: 54rpx;
		border-radius:6rpx;
	}

	.segmented-control__item {
		/* #ifndef APP-NVUE */
		display: inline-flex;
		box-sizing: border-box;
		/* #endif */
		position: relative;
		flex: 1;
		justify-content: center;
		align-items: center;
		border-right: 4rpx solid #FF8900;
	}

	.segmented-control__item--button {
		border-style: solid;
		border-top-width: 1px;
		border-bottom-width: 1px;
		border-right-width: 1px;
		border-left-width: 0;
	}

	.segmented-control__item--button--first {
		border-left-width: 1px;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.segmented-control__item--button--last {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	// .segmented-control__item--text {
	// 	border-bottom-style: solid;
	// 	border-bottom-width: 3px;
	// }

	.segmented-control__text {
		color: #FF8900;
		font-size: 24rpx;
		line-height: 20px;
		text-align: center;
	}
	.segmented-control__text_select{
		color: #FFFFFF;
	}
</style>
