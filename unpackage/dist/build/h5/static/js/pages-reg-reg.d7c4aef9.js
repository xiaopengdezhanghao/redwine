(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg-reg"],{"5f6c":function(t,o,e){"use strict";e.r(o);var i=e("a263"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(o,t,function(){return i[t]})}(a);o["default"]=n.a},"5fba":function(t,o,e){"use strict";var i=e("97b8"),n=e.n(i);n.a},7737:function(t,o,e){"use strict";var i,n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"input-group"},[e("v-uni-view",{staticClass:"input-row border"},[e("v-uni-text",{staticClass:"title"},[t._v("手机号码：")]),e("m-input",{attrs:{type:"number",clearable:!0,placeholder:"请输入手机号码"},on:{clear:function(o){arguments[0]=o=t.$handleEvent(o),t.clear.apply(void 0,arguments)}},model:{value:t.mobile,callback:function(o){t.mobile=o},expression:"mobile"}})],1),e("v-uni-view",{staticClass:"input-row border",staticStyle:{"align-items":"center"}},[e("v-uni-text",{staticClass:"title"},[t._v("验证码：")]),e("m-input",{attrs:{type:"number",placeholder:"请输入验证码"},model:{value:t.re_code,callback:function(o){t.re_code=o},expression:"re_code"}}),t.disableCodeBtn?e("v-uni-view",{staticClass:"code-btn",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.sendCode.apply(void 0,arguments)}}},[t._v(t._s(t.codeBtn.text))]):e("v-uni-view",{staticClass:"code-btn active"},[t._v(t._s(t.codeBtn.text))])],1),e("v-uni-view",{staticClass:"input-row border"},[e("v-uni-text",{staticClass:"title"},[t._v("登录密码：")]),e("m-input",{attrs:{type:"password",displayable:!0,placeholder:"请输入登录密码"},model:{value:t.password,callback:function(o){t.password=o},expression:"password"}})],1),e("v-uni-view",{staticClass:"input-row border"},[e("v-uni-text",{staticClass:"title"},[t._v("确认密码：")]),e("m-input",{attrs:{type:"password",displayable:!0,placeholder:"请再次输入登录密码"},model:{value:t.password_confirm,callback:function(o){t.password_confirm=o},expression:"password_confirm"}})],1),e("v-uni-view",{staticClass:"input-row border"},[e("v-uni-text",{staticClass:"title"},[t._v("提款密码：")]),e("m-input",{attrs:{type:"password",displayable:!0,placeholder:"请输入提款密码"},model:{value:t.pay_password,callback:function(o){t.pay_password=o},expression:"pay_password"}})],1)],1),e("v-uni-view",{staticClass:"btn-row"},[e("v-uni-button",{staticClass:"primary buy-btn",attrs:{type:"primary",loading:t.loading,disabled:t.loading},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.register.apply(void 0,arguments)}}},[t._v("点击注册")])],1),e("v-uni-view",{staticClass:"action-row"},[e("v-uni-navigator",{attrs:{url:"../login/login"}},[t._v("已有账号！去登录")])],1),e("LotusLoading",{attrs:{lotusLoadingData:t.lotusLoadingData}})],1)},a=[];e.d(o,"b",function(){return n}),e.d(o,"c",function(){return a}),e.d(o,"a",function(){return i})},"97b8":function(t,o,e){var i=e("c998");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("3f6c3d53",i,!0,{sourceMap:!1,shadowMode:!1})},a263:function(t,o,e){"use strict";var i=e("288e");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,e("a481");i(e("d889"));var n=i(e("3386")),a=i(e("347e")),s={components:{mInput:n.default,LotusLoading:a.default},computed:{disableCodeBtn:function(){return this.codeBtn.waitingCode}},data:function(){return{account:"",password:"",mobilecode:"",invitecode:"",realname:"",pay_password:"",mobile:"",password_confirm:"",loading:!1,is_invite_code_show:!1,is_mobile_show:!1,is_qq_show:!1,re_code:"",codeBtn:{text:"获取验证码",waitingCode:!0,count:this.seconds},codeStatus:!0,captchaImg:"",seconds:30,code:"",lotusLoadingData:{isShow:!1}}},methods:{register:function(){var t=this;this.mobile=this.trim(this.mobile);var o=/^1[3456789]\d{9}$/;if(!o.test(this.mobile))return uni.showToast({icon:"none",title:"手机号码不正确"}),!1;if(0!=this.re_code.length.length)if(this.password.length<6)uni.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.password===this.password_confirm)if(this.pay_password.length<6)uni.showToast({icon:"none",title:"提款密码为 6 个字符"});else{var e={mobile:this.mobile,re_code:this.re_code,password:this.password,password_confirm:this.password_confirm,pay_password:this.pay_password},i=this;this.lotusLoadingData.isShow=!0,this.$ajax.post({url:this.$service.api_lists.userreg,data:e}).then(function(o){if(console.log("注册成功后的信息"),console.log(o),1==o.data.code){uni.setStorageSync("user_token",o.data.data.usertoken),uni.setStorageSync("userinfo",o.data.data.userinfo),t.$store.commit("userinfoarr",o.data.data.userinfo);var e=o.data.data.usertoken;uni.showModal({title:"提示",content:"注册成功!",showCancel:!1,success:function(t){console.log(t)}}),i.$store.commit("login",e),i.toMain(e)}t.lotusLoadingData.isShow=!1}).catch(function(o){t.lotusLoadingData.isShow=!1,uni.showToast({title:"网络错误",icon:"none"}),console.log("request fail",o)})}else uni.showToast({icon:"none",title:"确认密码不正确"});else uni.showToast({icon:"none",title:"验证码不能为空"})},toMain:function(t){uni.reLaunch({url:"../home/home"})},clear:function(){this.mobile=""},trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},sendCode:function(){var t=this,o=/^1[3456789]\d{9}$/;if(!o.test(this.mobile))return uni.showToast({icon:"none",title:"手机号码不正确"}),!1;this.gotoSendCode(),this.codeBtn.waitingCode=!1,this.codeBtn.count=this.seconds,this.codeBtn.text=this.codeBtn.count+"s";var e=setInterval(function(){t.codeBtn.count--,t.codeBtn.text=t.codeBtn.count+"s",t.codeBtn.count<0&&(clearInterval(e),t.codeBtn.text="重新发送",t.codeBtn.waitingCode=!0,t.codeStatus=!0)},1e3)},gotoSendCode:function(){var t=this,o=this,e=/^1[3456789]\d{9}$/;if(!e.test(o.mobile))return uni.showToast({icon:"none",title:"手机号码不正确"}),!1;o.codeStatus&&o.$ajax.post({url:o.$service.api_lists.sendcode,data:{mobile:o.mobile}}).then(function(o){if(t.codeStatus=!1,1==o.data.code){var e=o.data;uni.showToast({icon:"none",title:e.data}),console.log(e.msg)}}).catch(function(o){t.codeStatus=!1,uni.showToast({title:"网络错误",icon:"none"}),console.log("request fail",o)})}},onLoad:function(t){}};o.default=s},c998:function(t,o,e){o=t.exports=e("2350")(!1),o.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.oauth-row[data-v-3083c847]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;top:0;left:0;width:100%}.oauth-image[data-v-3083c847]{width:%?100?%;height:%?100?%;border:%?1?% solid #ddd;border-radius:%?100?%;margin:0 %?40?%;background-color:#fff}.oauth-image uni-image[data-v-3083c847]{width:%?60?%;height:%?60?%;margin:%?20?%}.input-row .title[data-v-3083c847]{width:25%}.buy-btn[data-v-3083c847]{margin-top:%?20?%;width:90%;border-radius:%?50?%;background-color:#ff8900\n  /* box-shadow: 0 0 10upx 6upx #cadafd; */}.input-group[data-v-3083c847]:before{background-color:initial}.input-group[data-v-3083c847]:after{background-color:initial}.input-row.border[data-v-3083c847]:after{background-color:#efefef}.input-group[data-v-3083c847]{box-shadow:0 0 %?10?% %?6?% #efefef;border-radius:%?20?%}.input-row[data-v-3083c847]{padding:%?15?% %?0?%}.action-row[data-v-3083c847]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.action-row uni-navigator[data-v-3083c847]{color:#ff8900;padding:0 %?20?%}.code-btn[data-v-3083c847]{width:%?160?%;height:%?64?%;background:#fee0bc;border-radius:%?32?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#ff8900;text-align:center;line-height:%?64?%}.active[data-v-3083c847]{background:#a5a6ab;color:#fffefd}',""])},e55d:function(t,o,e){"use strict";e.r(o);var i=e("7737"),n=e("5f6c");for(var a in n)"default"!==a&&function(t){e.d(o,t,function(){return n[t]})}(a);e("5fba");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3083c847",null,!1,i["a"],s);o["default"]=c.exports}}]);