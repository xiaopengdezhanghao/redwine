<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			plus.screen.lockOrientation('landscape-primary');
		},
		onShow: function() {
			console.log('App Show')
			if (window.innerWidth > 700) {
				if( window.location.hostname.indexOf('m.') == -1 ){
					if( window.location.hostname.indexOf('www.') == -1 ){
						window.location.href = window.location.protocol + '//www.' +  window.location.hostname;
					}
				}else{
					if( window.location.hostname.indexOf('www.') == -1 ){
						window.location.href = window.location.href.replace('m.','www.');
					}
				}
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import 'common/uni.css';
	/*每个页面公共css */
	/* uni-app默认全局使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。如不使用flex布局，请删除或注释掉本行。*/
	body,
	page {
		min-height: 100%;
		display: flex;
		background-color: #ffffff;
	}
	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}
	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}
	/* #endif */
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 20upx;
		background-color: #fafafa;
		width: 100%;
	}
	.input-group {
		background-color: #ffffff;
		margin-top: 40upx;
		position: relative;
	}
	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: #c8c7cc;
	}
	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: #c8c7cc;
	}
	
	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}
	
	.input-row .title {
		width: 20%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}
	
	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: #c8c7cc;
	}
	
	.btn-row {
		margin-top: 50upx;
		padding: 20upx;
	}
	
	button.primary {
		background-color: #3e74fe;
	}
	
	button.button-hover {
		color: #fff !important;
		background-color: #1646bf !important;
	}
	
	.send-code {
		padding-top: 10upx;
		height: 60upx;
		margin-top: 10upx;
		margin-right: 20upx;
		border-radius: 50upx;
		background-color: #3a6ee6;
		box-shadow: 0 0 10upx 6upx #cadafd;
	}
	.uni-card {
		box-shadow: 0 0 10upx 6upx #efefef;
		border-radius: 20upx;
		margin: 10upx 0;
	}
</style>
