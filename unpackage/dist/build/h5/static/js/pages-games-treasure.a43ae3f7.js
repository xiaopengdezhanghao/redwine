(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-games-treasure"],{"09f4":function(t,e,i){"use strict";i.r(e);var n=i("e70b"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"0b76":function(t,e,i){"use strict";var n=i("a329"),a=i.n(n);a.a},5307:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9eaf")),s=n(i("fd40")),r={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcons:s.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!1},rightUrl:{type:String,default:""}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){uni.navigateBack({delta:1})},onClickRight:function(){this.$emit("clickRight")}}};e.default=r},"69cd":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-nav-bar-text[data-v-5fab04fa]{font-size:%?32?%}.uni-nav-bar-right-text[data-v-5fab04fa]{font-size:%?28?%}.uni-navbar[data-v-5fab04fa]{margin-top:%?40?%;width:%?750?%}.uni-navbar__content[data-v-5fab04fa]{position:relative;width:%?750?%;overflow:hidden}.uni-navbar__content_view[data-v-5fab04fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-navbar__header[data-v-5fab04fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?750?%;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-5fab04fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-5fab04fa]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-5fab04fa]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-5fab04fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-5fab04fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-5fab04fa]{height:44px}.uni-navbar--fixed[data-v-5fab04fa]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-5fab04fa]{box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-5fab04fa]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#c8c7cc}',""])},7789:function(t,e,i){"use strict";i.r(e);var n=i("f030"),a=i("09f4");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("d999");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"ec4e2ede",null,!1,n["a"],r);e["default"]=c.exports},"801d":function(t,e,i){"use strict";i.r(e);var n=i("fa74"),a=i("ccaf");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("0b76");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5fab04fa",null,!1,n["a"],r);e["default"]=c.exports},"8a4a":function(t,e,i){t.exports=i.p+"static/img/img_hbgtc@2x.16aac56c.png"},a329:function(t,e,i){var n=i("69cd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6f57aae8",n,!0,{sourceMap:!1,shadowMode:!1})},bc83:function(t,e,i){var n=i("b041");e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-input-text[data-v-ec4e2ede]{width:%?686?%;height:%?72?%;background:#000;opacity:.2;border-radius:%?10?%;margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-issue[data-v-ec4e2ede]{width:%?650?%;height:%?50?%;margin-top:%?65?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-issue .issue-number[data-v-ec4e2ede]{width:%?36?%;height:%?36?%}.uni-issue-content[data-v-ec4e2ede]{width:%?686?%;height:%?224?%;margin-top:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-issue-content .issue[data-v-ec4e2ede]{width:%?118?%;height:%?224?%;border-radius:%?16?%}.uni-result[data-v-ec4e2ede]{width:%?686?%;height:%?144?%;margin-top:%?24?%}.uni-issue-after[data-v-ec4e2ede]{width:%?650?%;height:%?50?%;margin-top:%?95?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-issue-after .issue-number[data-v-ec4e2ede]{width:%?36?%;height:%?36?%}.uni-time-content[data-v-ec4e2ede]{width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;margin-top:%?33?%}.uni-time-content .time[data-v-ec4e2ede]{height:%?30?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#412904;line-height:%?30?%}.uni-btn-content[data-v-ec4e2ede]{width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;margin-top:%?110?%}.uni-btn-content .btn[data-v-ec4e2ede]{width:%?200?%;height:%?64?%;border-radius:%?32?%}.uni-btn-submit[data-v-ec4e2ede]{width:%?686?%;height:%?130?%;margin-top:%?26?%}.img[data-v-ec4e2ede]{width:100%;height:100%}.uni-popup-content[data-v-ec4e2ede]{width:%?540?%;height:%?614?%;background:#f8f8f8 url('+n(i("8a4a"))+") no-repeat 50%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-popup-content .btn-result[data-v-ec4e2ede]{width:%?428?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-popup-content .btn-result .btn-top[data-v-ec4e2ede]{width:%?190?%;height:%?240?%;border-radius:%?10?%}.uni-popup-content .btn-result .btn-top .rate-text[data-v-ec4e2ede]{position:absolute;bottom:%?23?%;left:%?35?%;width:%?120?%;height:%?26?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#fff;line-height:%?26?%;text-align:center}.uni-popup-content .btn-result .btn-bottom[data-v-ec4e2ede]{width:%?198?%;height:%?64?%;border-radius:%?32?%}.warning-info[data-v-ec4e2ede]{height:%?26?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#ff3838;line-height:%?26?%;margin-top:%?16?%}.input-content[data-v-ec4e2ede]{width:%?428?%;height:%?64?%;background:rgba(0,0,0,.2);box-shadow:0 %?1?% 0 0 hsla(0,0%,100%,.6),0 %?1?% 0 0 rgba(0,0,0,.2);border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?32?%}.input-content .input-text[data-v-ec4e2ede]{width:%?109?%;height:%?64?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fefefe;line-height:%?64?%;margin-right:%?16?%}.input-content .input[data-v-ec4e2ede]{width:%?239?%;height:%?64?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#e8dec9;line-height:%?64?%}.uni-remind-content[data-v-ec4e2ede]{width:%?391?%;height:%?400?%;margin-top:%?163?%}.uni-remind-text[data-v-ec4e2ede]{height:%?24?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#412904;line-height:%?24?%;margin-top:%?32?%}.uni-remind-btn-content[data-v-ec4e2ede]{width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?80?%}.uni-remind-btn-content .btn[data-v-ec4e2ede]{width:%?288?%;height:%?136?%}.uni-move-img[data-v-ec4e2ede]{margin-left:%?-10?%}",""])},bcfd:function(t,e,i){var n=i("bc83");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4ec85749",n,!0,{sourceMap:!1,shadowMode:!1})},ccaf:function(t,e,i){"use strict";i.r(e);var n=i("5307"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},d999:function(t,e,i){"use strict";var n=i("bcfd"),a=i.n(n);a.a},e70b:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("e814")),s=n(i("f499"));i("28a5");var r=n(i("cebc")),o=n(i("801d")),c=n(i("b2f1")),u=i("2f62"),l={components:{uniNav:o.default,uniPopup:c.default},computed:(0,r.default)({},(0,u.mapState)(["userinfo"])),data:function(){return{screenWidth:0,screenHeight:0,statuShow:!0,gameid:"",cpname:"",times:{fd_hour:"00",fd_minute:"00",fd_second:"00",kj_hour:"00",kj_minute:"00",kj_second:"00"},issueNumberData:[],fd_seconds:0,kj_seconds:0,getLotteryNumbers:"",fd_timer:"",kj_timer:"",ludan:[],lottery_number:[],typeid:"",lottery_title:"",turn_run:"",subCategoryList:[],subCategoryData:[],list:[],ctx:{},lastFullExpect:"",currFullExpect:"",lastFullExpectArr:[],currFullExpectArr:[],lotteryTime:"",loading:!0,bettingData:[],selectBettingData:{},amount:0,btnImg:1,oneRate:0,bothRate:0}},onUnload:function(){this.clear_all_interval()},onLoad:function(t){if(!this.$store.state.hasLogin)return uni.reLaunch({url:"../login/login"}),!1;this.gameid=t.id,this.typeid=t.typeid,this.cpname=t.cpname;var e=uni.getSystemInfoSync();this.screenWidth=e.screenWidth,this.screenHeight=e.screenHeight,this.initCanvas(),this.getIssueNumber(),this.getOldGameInfo(1)},methods:(0,r.default)({},(0,u.mapMutations)(["userinfoarr"]),{initCanvas:function(t){var e=this;this.pixelRatio;e.ctx=uni.createCanvasContext("myCanvas",e),e.ctx.drawImage("../../static/games/treasure/img_hbg@3x.png",0,0,e.screenWidth,e.screenHeight),setTimeout(function(){e.ctx.stroke(),e.ctx.draw()},200)},getOldGameInfo:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(2==e){var i=uni.getStorageSync("old_game_info_"+this.gameid);if(i)return void this.setOldGame(i)}this.$ajax.get({url:this.$service.api_lists.get_old_game_info,data:{id:this.gameid}}).then(function(e){if(1==e.data.code){var i=e.data.data;t.setOldGame(i),uni.setStorage({key:"old_game_info_"+t.gameid,data:i,success:function(){}})}}).catch(function(t){uni.showToast({title:"系统繁忙,请稍后重试!",icon:"none"})})},setOldGame:function(t){this.selectBettingData={},this.amount=10,this.subCategoryData=t.data,this.subCategoryList=this.subCategoryData[0],this.selectBettingData=this.subCategoryList[1].data,this.oneRate=this.selectBettingData[0].rate,this.bothRate=this.selectBettingData[1].rate,this.selected_number(1)},clear_all_interval:function(){clearInterval(this.getLotteryNumbers),clearInterval(this.fd_timer),clearInterval(this.kj_timer),clearInterval(this.turn_run)},getIssueNumber:function(){var t=this;this.$ajax.get({url:this.$service.api_lists.get_issue_number,data:{id:this.gameid}}).then(function(e){if(1==e.data.code){t.$store.commit("switch_betting",!0);var i=e.data.data;t.clear_all_interval(),t.setData(i)}}).catch(function(t){uni.showToast({title:"系统繁忙,请稍后重试!",icon:"none"})})},setData:function(t){var e=this;this.issueNumberData=t,this.fd_seconds=this.issueNumberData.remainTime.time,this.kj_seconds=this.issueNumberData.openRemainTime.time,this.lastFullExpect=String(t.lastFullExpect),this.lastFullExpectArr=this.lastFullExpect.split(""),this.currFullExpect=String(t.currFullExpect),this.currFullExpectArr=this.currFullExpect.split(""),this.lotteryTime=this.issueNumberData.openRemainTime.date,this.typeid=t.typeid,this.fd_seconds>1?this.fd_run():this.fd_timeUp(),this.kj_seconds>1?this.kj_run():this.kj_timeUp(),this.turn_run=setInterval(function(){e.turn()},200),this.getLotteryNumber(),this.getLotteryNumbers=setInterval(function(){e.getLotteryNumber()},5e3)},countDown:function(t){var e=0,i=0,n=0,a=0;if(!(t>0))return!1;e=Math.floor(t/86400),i=Math.floor(t/3600)-24*e,n=Math.floor(t/60)-24*e*60-60*i,a=Math.floor(t)-24*e*60*60-60*i*60-60*n,e<10&&(e="0"+e),i<10&&(i="0"+i),n<10&&(n="0"+n),a<10&&(a="0"+a);var s=new Object;return s.day=e,s.hour=i,s.minute=n,s.second=a,s},fd_run:function(){var t=this;this.fd_timer=setInterval(function(){if(t.fd_seconds--,t.fd_seconds<0)t.fd_timeUp();else{var e=t.countDown(t.fd_seconds);if(!e)return t.fd_seconds=0,void t.fd_timeUp();t.times.fd_hour=e.hour+":",t.times.fd_minute=e.minute+":",t.times.fd_second=e.second}},1e3)},fd_timeUp:function(){clearInterval(this.fd_timer),this.times.fd_second="00",this.times.fd_hour="已",this.times.fd_minute="封",this.times.fd_second="盘",this.$store.commit("switch_betting",!1)},kj_run:function(){var t=this;this.kj_timer=setInterval(function(){if(t.kj_seconds--,t.kj_seconds<0)t.kj_timeUp();else{var e=t.countDown(t.kj_seconds);if(!e)return t.kj_seconds=0,void t.kj_timeUp();t.times.kj_hour=e.hour+":",t.times.kj_minute=e.minute+":",t.times.kj_second=e.second}},1e3)},kj_timeUp:function(){var t=this;clearInterval(this.kj_timer),clearInterval(this.getLotteryNumbers),this.times.kj_second="00",this.times.kj_hour="开",this.times.kj_minute="奖",this.times.kj_second="中",setTimeout(function(){t.getIssueNumber()},3e3)},getLotteryNumber:function(){var t=this;this.$ajax.get({url:this.$service.api_lists.get_lottery_number,data:{id:this.gameid,expect:this.issueNumberData.lastFullExpect}}).then(function(e){if(1==e.data.code){var i=e.data.data;clearInterval(t.getLotteryNumbers),clearInterval(t.turn_run),t.lottery_number=i.opencode_arr}}).catch(function(t){uni.showToast({title:"系统繁忙,请稍后重试!",icon:"none"})})},turn:function(){this.lottery_number=[],this.lottery_number=this.shuffle(["0","1","2","3","4","5","6","7","8","9"])},shuffle:function(t){var e,i,n=t.length,a=[];while(n)e=Math.floor(Math.random()*n--),i=t[e],t[e]=t[n],t[n]=i;for(var s=0;s<=4;s++)a[s]=t[s];return a},selected_number:function(t){var e={};this.bettingData=[],this.btnImg=t,0==t&&(e=this.selectBettingData[0]),1==t&&(e=this.selectBettingData[1]),this.bettingData.push({class2:e.class2,class3:e.class3,price:this.amount,id:e.id,rate:e.rate,fandian:0})},bettings:function(){this.bettingData[0].price=this.amount;var t={orderList:this.bettingData,expect:this.issueNumberData.currFullExpect,id:this.gameid,source:"mobile"},e=this,i=0==e.btnImg?"单":"双",n=i+" 共"+e.amount+"元";uni.showModal({title:"确定下注?",content:n,success:function(i){this.statuShow=!1,i.confirm&&1==e.$store.state.is_beeting?(t.orderList=(0,s.default)(t.orderList),e.$store.commit("switch_loading",!0),e.$ajax.post({url:e.$service.api_lists.old_cp_buy,data:t}).then(function(t){if(1!=t.data.code)return e.loading=!1,!1;e.getUserinfo(),e.statuShow=!1,e.initData()}).catch(function(t){uni.showToast({title:"系统繁忙,请稍后重试!",icon:"none"}),e.loading=!1})):0==e.$store.state.is_beeting&&uni.showToast({title:"已封盘",icon:"none"})}})},open:function(){this.$refs.popup.open()},close:function(){this.initData(),this.$refs.popup.close()},goon:function(){this.statuShow=!0},gameShows:function(){uni.navigateTo({url:"./game_shows?statusShow=1&id="+this.gameid})},goGameShow:function(t){uni.navigateTo({url:"../capitallog/lotterylog?cpname="+this.cpname})},goLotteryHistory:function(t){uni.navigateTo({url:"./lottery_history?id="+this.gameid+"&typeid="+this.typeid})},confirm:function(){uni.pageScrollTo({scrollTop:0,duration:300})},onBlur:function(){uni.pageScrollTo({scrollTop:0,duration:300})},updateAmount:function(t){var e=t.detail.value,i=String(e).indexOf(".")+1,n=String(e).length-i;if(i>0&&n>2)return uni.showToast({title:"请输入正确金额",icon:"none"}),this.amount=0,!1;this.amount=(0,a.default)(t.detail.value)},initData:function(){this.amount=10,this.selected_number(1)},getUserinfo:function(){var t=this;this.$ajax.get({url:this.$service.api_lists.userinfo,data:{}}).then(function(e){if(1==e.data.code){uni.setStorageSync("userinfo",e.data.data);t.userinfoarr(e.data.data)}console.log(e)}).catch(function(t){console.log("request fail",t)})}})};e.default=l},f030:function(t,e,i){"use strict";var n={"uni-popup":i("b2f1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-canvas",{style:"width:"+t.screenWidth+"px; height:"+t.screenHeight+"px;",attrs:{"canvas-id":"myCanvas"}}),t.statuShow?i("v-uni-cover-view",{staticStyle:{position:"absolute",top:"0",left:"0",display:"flex","flex-direction":"column","align-items":"center"}},[i("uni-nav",{attrs:{"left-icon":"treasure","right-icon":"treasure",title:"财富碰撞"},on:{clickRight:function(e){arguments[0]=e=t.$handleEvent(e),t.gameShows.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"uni-input-text"},[i("v-uni-text",{staticStyle:{"font-size":"28rpx","font-family":"PingFang SC","font-weight":"500",color:"rgba(254,254,254,1)","z-index":"1"}},[t._v("欢乐豆余额："+t._s(t.userinfo.balance))])],1),i("v-uni-view",{staticClass:"uni-issue"},[t._l(t.lastFullExpectArr,function(t,e){return i("v-uni-view",{key:e,staticClass:"issue-number",class:0==e?"":"uni-move-img"},[i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/img_q"+t+"1@2x.png",mode:""}})],1)}),i("v-uni-view",{staticClass:"issue-number",staticStyle:{"margin-left":"-10rpx"}},[i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/img_qi1@2x.png",mode:""}})],1)],2),i("v-uni-view",{staticClass:"uni-issue-content"},t._l(t.lottery_number,function(e,n){return i("v-uni-view",{key:n,staticClass:"issue"},[n<4?i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/img_h"+e+"@2x.png",mode:""}}):t._e(),4==n?i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/img_r"+e+"@2x.png",mode:""}}):t._e()],1)}),1),i("v-uni-view",{staticClass:"uni-result"},[t.lottery_number[4]%2==1?i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/games/treasure/img_hd@3x.png",mode:""}}):i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/games/treasure/img_hs@3x.png",mode:""}})],1),i("v-uni-view",{staticClass:"uni-issue-after"},[t._l(t.currFullExpectArr,function(t,e){return i("v-uni-view",{key:e,staticClass:"issue-number",class:0==e?"":"uni-move-img"},[i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/img_q"+t+"1@2x.png",mode:""}})],1)}),i("v-uni-view",{staticClass:"issue-number",staticStyle:{"margin-left":"-10rpx"}},[i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/img_qi1@2x.png",mode:""}})],1)],2),i("v-uni-view",{staticClass:"uni-time-content"},[i("v-uni-text",{staticClass:"time"},[t._v("封盘 "+t._s(this.times.fd_hour)+t._s(this.times.fd_minute)+t._s(this.times.fd_second))]),i("v-uni-text",{staticClass:"time"},[t._v("开奖 "+t._s(this.times.kj_hour)+t._s(this.times.kj_minute)+t._s(this.times.kj_second))])],1),i("v-uni-view",{staticClass:"uni-btn-content"},[i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goGameShow(1)}}},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/games/treasure/icon_hyxjl@2x.png",mode:""}})],1),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLotteryHistory()}}},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/games/treasure/icon_hkjls@2x.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"uni-btn-submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[this.$store.state.is_beeting?i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/games/treasure/icon_htz@2x.png",mode:""}}):i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/games/treasure/icon_htz1@2x.png",mode:""}})],1),i("uni-popup",{ref:"popup",attrs:{type:"center"}},[i("v-uni-view",{staticClass:"uni-popup-content"},[i("v-uni-view",{staticClass:"btn-result"},[i("v-uni-view",{staticClass:"btn-top",staticStyle:{position:"relative"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selected_number(0)}}},[0==t.btnImg?i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/icon_hbtd2@2x.png",mode:""}}):i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/icon_hbtd1@2x.png",mode:""}}),i("v-uni-text",{staticClass:"rate-text"},[t._v("赔率："+t._s(t.oneRate))])],1),i("v-uni-view",{staticClass:"btn-top",staticStyle:{position:"relative"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selected_number(1)}}},[1==t.btnImg?i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/icon_hbts2@2x.png",mode:""}}):i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/icon_hbts1@2x.png",mode:""}}),i("v-uni-text",{staticClass:"rate-text"},[t._v("赔率："+t._s(t.bothRate))])],1)],1),i("v-uni-view",{staticClass:"input-content"},[i("v-uni-text",{staticClass:"input-text"},[t._v("买入数量")]),i("v-uni-input",{staticClass:"input",attrs:{type:"number",value:t.amount,min:.01,max:1e5,placeholder:"请输入买入欢乐豆数量"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.updateAmount.apply(void 0,arguments)}}})],1),parseFloat(t.userinfo.balance)<parseFloat(t.amount)?i("v-uni-text",{staticClass:"warning-info"},[t._v("输入金额超出您的欢乐豆余额")]):t._e(),i("v-uni-view",{staticClass:"btn-result",staticStyle:{"margin-top":"55rpx"}},[i("v-uni-view",{staticClass:"btn-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/icon_qx1@2x.png",mode:""}})],1),i("v-uni-view",{staticClass:"btn-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bettings.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/icon_qd1@2x.png",mode:""}})],1)],1)],1)],1)],1):i("v-uni-cover-view",{staticStyle:{position:"absolute",top:"0",left:"0",display:"flex","flex-direction":"column","align-items":"center"}},[i("uni-nav",{attrs:{fixed:!0,"left-icon":"treasure","right-icon":"treasure2",title:"投注提醒"}}),i("v-uni-view",{staticClass:"uni-remind-content"},[i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/img_tz1@2x.png",mode:""}})],1),i("v-uni-text",{staticClass:"uni-remind-text"},[t._v("恭喜您，投注成功!")]),i("v-uni-view",{staticClass:"uni-remind-btn-content"},[i("v-uni-view",{staticClass:"btn",staticStyle:{"margin-right":"48rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goGameShow(1)}}},[i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/icon_hxxjl@2x.png",mode:""}})],1),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goon.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"img",attrs:{src:"../../static/games/treasure/icon_hjxtz@2x.png",mode:""}})],1)],1)],1),i("fr-loading")],1)},s=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return n})},fa74:function(t,e,i){"use strict";var n={"uni-status-bar":i("9eaf").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-navbar"},[i("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border}},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view"},[i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("v-uni-image",{staticStyle:{width:"40rpx",height:"40rpx","margin-left":"20rpx"},attrs:{src:"../../static/games/treasure/icon_hfh@2x.png",mode:""}})],1):t._e(),t.leftText.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[i("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),i("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length&&"财富碰撞"==t.title?i("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[i("v-uni-image",{staticStyle:{width:"180rpx",height:"50rpx"},attrs:{src:"../../static/games/treasure/img_hcf@2x.png",mode:""}})],1):t._e(),t.title.length&&"投注提醒"==t.title?i("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[i("v-uni-image",{staticStyle:{width:"180rpx",height:"50rpx"},attrs:{src:"../../static/games/treasure/img_hcf@2x.png",mode:""}})],1):t._e(),t._t("default")],2),i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length&&"treasure"==t.rightIcon?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("v-uni-image",{staticStyle:{width:"125rpx",height:"30rpx"},attrs:{src:"../../static/games/treasure/img_hwf@2x.png",mode:""}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?i("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},s=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return n})}}]);