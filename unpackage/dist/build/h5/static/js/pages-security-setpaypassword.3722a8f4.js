(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-security-setpaypassword"],{"0252":function(e,r,t){var n=t("7977");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("55bce657",n,!0,{sourceMap:!1,shadowMode:!1})},"638e":function(e,r,t){"use strict";t("c5f6"),t("28a5"),t("3b2b"),e.exports={error:"",check:function(e,r){for(var t=0;t<r.length;t++){if(!r[t].checkType)return!0;if(!r[t].name)return!0;if(!r[t].errorMsg)return!0;if(!e[r[t].name])return this.error=r[t].errorMsg,!1;switch(r[t].checkType){case"string":var n=new RegExp("^.{"+r[t].checkRule+"}$");if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+r[t].checkRule+"}$");if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"between":if(!this.isNumber(e[r[t].name]))return this.error=r[t].errorMsg,!1;var a=r[t].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[r[t].name]>a[1]||e[r[t].name]<a[0])return this.error=r[t].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;a=r[t].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[r[t].name]>a[1]||e[r[t].name]<a[0])return this.error=r[t].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;a=r[t].checkRule.split(",");if(a[0]=Number(a[0]),a[1]=Number(a[1]),e[r[t].name]>a[1]||e[r[t].name]<a[0])return this.error=r[t].errorMsg,!1;break;case"same":if(e[r[t].name]!=r[t].checkRule)return this.error=r[t].errorMsg,!1;break;case"notsame":if(e[r[t].name]==r[t].checkRule)return this.error=r[t].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"reg":n=new RegExp(r[t].checkRule);if(!n.test(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"in":if(-1==r[t].checkRule.indexOf(e[r[t].name]))return this.error=r[t].errorMsg,!1;break;case"notnull":if(null==e[r[t].name]||e[r[t].name].length<1)return this.error=r[t].errorMsg,!1;break}}return!0},isNumber:function(e){var r=/^-?[1-9][0-9]?.?[0-9]*$/;return r.test(e)}}},6587:function(e,r,t){"use strict";t.r(r);var n=t("e0b5"),a=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(r,e,function(){return n[e]})}(i);r["default"]=a.a},7141:function(e,r,t){"use strict";var n=t("0252"),a=t.n(n);a.a},7977:function(e,r,t){r=e.exports=t("2350")(!1),r.push([e.i,".content[data-v-0a5c2c22]{padding:0}.content-two[data-v-0a5c2c22]{padding:%?20?%}.uni-card-top[data-v-0a5c2c22]{height:%?450?%}.produceshouyi-view[data-v-0a5c2c22]{margin-top:%?5?%}.image[data-v-0a5c2c22]{width:100%;height:%?350?%!important;position:absolute}.buy-btn[data-v-0a5c2c22]{margin-top:%?20?%;width:90%;border-radius:%?50?%;background-color:#3a6ee6;box-shadow:0 0 %?10?% %?6?% #cadafd}.uni-card-content-inner-im[data-v-0a5c2c22]{padding:%?22?% %?30?%!important}.uni-list[data-v-0a5c2c22]:before{height:0}.uni-list[data-v-0a5c2c22]:after{background-color:#efefef}.producebonus[data-v-0a5c2c22]{font-size:%?65?%;color:#f97c22}.produceshouyi[data-v-0a5c2c22]{color:#3e74fe;font-size:%?30?%}.uni-input-money[data-v-0a5c2c22]{border-bottom:%?2?% solid #efefef}.uni-input[data-v-0a5c2c22]{padding:%?24?% %?24?%}.uni-card-content-inner[data-v-0a5c2c22]{padding:%?0?% %?20?%}.money-hr[data-v-0a5c2c22]{margin-top:%?15?%}.send-code[data-v-0a5c2c22]{position:absolute;right:0;z-index:1}",""])},bbd2:function(e,r,t){"use strict";var n,a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"content-two"},[t("v-uni-form",{on:{submit:function(r){arguments[0]=r=e.$handleEvent(r),e.formSubmit.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-card"},[t("v-uni-view",{staticClass:"uni-card-content"},[t("v-uni-view",{staticClass:"uni-card-content-inner"},[t("v-uni-view",{staticClass:"uni-list",attrs:{"hover-class":"uni-list-cell-hover"}},[t("v-uni-input",{staticClass:"uni-input",attrs:{type:"password",name:"new-pwd",placeholder:"请输入新提款密码"},model:{value:e.new_pwd,callback:function(r){e.new_pwd=r},expression:"new_pwd"}})],1)],1)],1),t("v-uni-view",{staticClass:"uni-card-content"},[t("v-uni-view",{staticClass:"uni-card-content-inner"},[t("v-uni-view",{staticClass:"uni-list",attrs:{"hover-class":"uni-list-cell-hover"}},[t("v-uni-input",{staticClass:"uni-input",attrs:{type:"password",name:"confirm-pwd",placeholder:"请确认提款密码"},model:{value:e.confirm_pwd,callback:function(r){e.confirm_pwd=r},expression:"confirm_pwd"}})],1)],1)],1)],1),t("v-uni-button",{staticClass:"buy-btn",attrs:{type:"primary",formType:"submit"}},[e._v("提交")])],1)],1),t("pageFooter")],1)},i=[];t.d(r,"b",function(){return a}),t.d(r,"c",function(){return i}),t.d(r,"a",function(){return n})},c37f:function(e,r,t){"use strict";t.r(r);var n=t("bbd2"),a=t("6587");for(var i in a)"default"!==i&&function(e){t.d(r,e,function(){return a[e]})}(i);t("7141");var s,c=t("f0c5"),o=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"0a5c2c22",null,!1,n["a"],s);r["default"]=o.exports},e0b5:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=t("638e"),a={data:function(){return{new_pwd:"",confirm_pwd:""}},methods:{formSubmit:function(e){if(console.log(1),this.new_pwd!=this.confirm_pwd)return uni.showToast({title:"确认新提款密码不一致!",icon:"none"}),!1;var r=[{name:"new-pwd",checkType:"string",checkRule:"6,6",errorMsg:"请输入6位新提款密码"},{name:"confirm-pwd",checkType:"string",checkRule:"6,6",errorMsg:"请输入6位确认新提款密码"}],t=e.detail.value,a=n.check(t,r);a?this.$ajax.post({url:this.$service.api_lists.set_pay_password,data:{pay_password:this.new_pwd,pay_password_confirm:this.confirm_pwd}}).then(function(e){if(1==e.data.code){var r=uni.getStorageSync("userinfo");r.paypassword=1,uni.setStorageSync("userinfo",r),uni.showModal({title:"提示",content:"设置成功!",showCancel:!1,success:function(e){uni.switchTab({url:"../user/user"})}})}console.log(e)}).catch(function(e){console.log("request fail",e)}):uni.showToast({title:n.error,icon:"none"})}},components:{}};r.default=a}}]);