(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{4154:function(t,i,e){"use strict";var n=e("ce02"),a=e.n(n);a.a},"57d2":function(t,i,e){"use strict";e.r(i);var n=e("7a02"),a=e("d757");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("4154");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"91c229d4",null,!1,n["a"],r);i["default"]=c.exports},"7a02":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-user-info"},[e("v-uni-view",{staticClass:"uni-user-img"},[e("v-uni-image",{staticStyle:{width:"100%",height:"100%","border-radius":"50%"},attrs:{src:""==t.userinfo.face||"0"==t.userinfo.face?"../../static/user/face/1.jpg":"../../static/user/face/"+t.userinfo.face+".jpg",mode:""}}),1==t.userinfo.proxy?e("v-uni-view",{staticClass:"uni-user-agent"},[t._v("代理")]):t._e()],1),e("v-uni-view",{staticClass:"uni-user-content"},[e("v-uni-text",{staticClass:"uni-user-content-text"},[t._v(t._s(t.userinfo.username))]),e("v-uni-view",{staticClass:"uni-user-content-id"},[t._v("ID:"+t._s(t.userinfo.id))])],1)],1),e("v-uni-view",{staticClass:"uni-beans-content"},[e("v-uni-view",{staticClass:"beans",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(1)}}},[e("v-uni-text",{staticClass:"beans-number"},[t._v(t._s(t.userinfo.balance))]),e("v-uni-text",{staticClass:"beans-text"},[t._v("欢乐豆")])],1),e("v-uni-view",{staticStyle:{width:"2rpx",height:"48rpx",background:"rgba(165,166,171,1)"}}),e("v-uni-view",{staticClass:"order",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(3)}}},[e("v-uni-text",{staticClass:"order-number"},[t._v("1")]),e("v-uni-text",{staticClass:"order-text"},[t._v("订单")])],1)],1),e("v-uni-view",{staticStyle:{height:"128rpx",width:"686rpx","margin-left":"32rpx","margin-bottom":"32rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(2)}}},[e("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/user/img_hld@3x.png",mode:""}})],1),e("v-uni-view",{staticStyle:{"background-color":"#f1f1f1",width:"750rpx",height:"34rpx"}}),e("v-uni-view",{staticClass:"list"},[e("v-uni-navigator",{attrs:{url:1==t.userinfo.proxy?"../agent/agent":"../agent/explain","hover-class":"navigator-hover"}},[e("v-uni-view",{staticClass:"li"},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/user/icon_dl@2x.png"}})],1),1==t.userinfo.proxy?e("v-uni-view",{staticClass:"text"},[t._v("代理中心")]):e("v-uni-view",{staticClass:"text"},[t._v("如何成为代理")]),e("v-uni-image",{staticClass:"to",attrs:{src:"../../static/user/to.png"}})],1)],1)],1),t._l(t.severList,function(i,n){return e("v-uni-view",{key:n,staticClass:"list"},[e("v-uni-navigator",{attrs:{url:i.url,"hover-class":"navigator-hover"}},[e("v-uni-view",{staticClass:"li"},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{attrs:{src:i.icon}})],1),e("v-uni-view",{staticClass:"text"},[t._v(t._s(i.name))]),e("v-uni-image",{staticClass:"to",attrs:{src:"../../static/user/to.png"}})],1)],1)],1)})],2)},o=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return o}),e.d(i,"a",function(){return n})},"8c02":function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("cebc")),o=e("2f62"),r={computed:(0,a.default)({},(0,o.mapState)(["hasLogin","forcedLogin","userinfo"])),data:function(){return{severList:[{name:"个人资料",icon:"../../static/user/icon_gr@2x.png",url:"../personal/personal"},{name:"账户设置",icon:"../../static/user/icon_zh@2x.png",url:"../account/account"},{name:"设置",icon:"../../static/user/icon_sz@2x.png",url:"../setting/setting"}]}},onPullDownRefresh:function(){this.getUserinfo(),uni.stopPullDownRefresh(),uni.showToast({icon:"none",title:"刷新成功"})},onShow:function(){this.$store.state.hasLogin?this.userinfoarr(uni.getStorageSync("userinfo")):uni.reLaunch({url:"../login/login"})},onLoad:function(){this.$store.state.hasLogin?this.userinfoarr(uni.getStorageSync("userinfo")):uni.reLaunch({url:"../login/login"})},methods:(0,a.default)({},(0,o.mapMutations)(["logout","userinfoarr"]),{goPage:function(t){1==t&&uni.navigateTo({url:"../capitallog/capitallog"}),2==t&&uni.navigateTo({url:"../happyfight/happyfight"}),3==t&&uni.navigateTo({url:"../order/order"})},getUserinfo:function(){var t=this;this.$ajax.get({url:this.$service.api_lists.userinfo,data:{}}).then(function(i){if(1==i.data.code){uni.setStorageSync("userinfo",i.data.data);t.userinfoarr(i.data.data)}console.log(i)}).catch(function(t){console.log("request fail",t)})}})};i.default=r},c129:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-user-info[data-v-91c229d4]{width:%?750?%;height:%?112?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?70?%}.uni-user-info .uni-user-img[data-v-91c229d4]{width:%?112?%;height:%?112?%;margin-left:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.uni-user-info .uni-user-img .uni-user-agent[data-v-91c229d4]{width:%?80?%;height:%?24?%;background:-webkit-linear-gradient(315deg,#dec9a5,#bfa371);background:linear-gradient(135deg,#dec9a5,#bfa371);border-radius:%?12?%;font-size:%?8?%;font-family:PingFang SC;color:#f8f8f8;text-align:center;line-height:%?24?%;position:absolute;bottom:0}.uni-user-info .uni-user-content[data-v-91c229d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?24?%}.uni-user-info .uni-user-content .uni-user-content-text[data-v-91c229d4]{height:%?27?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#111734;line-height:%?27?%;margin-bottom:%?24?%}.uni-user-info .uni-user-content .uni-user-content-id[data-v-91c229d4]{width:%?176?%;height:%?32?%;background:#ffe4c5;border-radius:%?16?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#ff8900;line-height:%?32?%;text-align:center}.uni-beans-content[data-v-91c229d4]{width:%?750?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?32?%;margin-bottom:%?39?%}.uni-beans-content .beans[data-v-91c229d4]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?148?%}.uni-beans-content .beans .beans-number[data-v-91c229d4]{height:%?19?%;font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#ff8900;text-align:center;margin-bottom:%?10?%}.uni-beans-content .beans .beans-text[data-v-91c229d4]{height:%?23?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#6e6f72;text-align:center}.uni-beans-content .order[data-v-91c229d4]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?148?%}.uni-beans-content .order .order-number[data-v-91c229d4]{height:%?19?%;font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#ff8900;margin-bottom:%?10?%}.uni-beans-content .order .order-text[data-v-91c229d4]{height:%?23?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#6e6f72;text-align:center}.list[data-v-91c229d4]{width:100%}.list .li[data-v-91c229d4]{width:92%;height:%?100?%;padding:0 4%;border-bottom:solid %?1?% #e7e7e7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list .li.noborder[data-v-91c229d4]{border-bottom:0}.list .li .icon[data-v-91c229d4]{-webkit-flex-shrink:0;flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-91c229d4]{width:%?50?%;height:%?50?%}.list .li .text[data-v-91c229d4]{padding-left:%?20?%;width:100%;color:#666;font-size:%?28?%;font-family:PingFang SC}.list .li .to[data-v-91c229d4]{-webkit-flex-shrink:0;flex-shrink:0;width:%?40?%;height:%?40?%}',""])},ce02:function(t,i,e){var n=e("c129");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("165455f2",n,!0,{sourceMap:!1,shadowMode:!1})},d757:function(t,i,e){"use strict";e.r(i);var n=e("8c02"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a}}]);