(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-agent-gamereport"],{"154d":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-5b39643b]{padding:0}.content-two[data-v-5b39643b]{padding:%?20?%}.uni-card-top[data-v-5b39643b]{height:%?370?%}.produceshouyi-view[data-v-5b39643b]{margin-top:%?5?%}.image[data-v-5b39643b]{width:100%;height:%?350?%!important;position:absolute}.table-hr[data-v-5b39643b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#626367}.table-hd[data-v-5b39643b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?20?%}.table-hd-two[data-v-5b39643b]{text-align:center}.buy-btn[data-v-5b39643b]{width:90%;border-radius:%?50?%;background-color:#3a6ee6;box-shadow:0 0 %?10?% %?6?% #cadafd;margin-top:%?20?%}.uni-card-content-inner-im[data-v-5b39643b]{padding:%?22?% %?30?%!important}.uni-list[data-v-5b39643b]:before{background-color:#efefef}.uni-list[data-v-5b39643b]:after{background-color:#efefef}.producebonus[data-v-5b39643b]{font-size:%?65?%;color:#f97c22}.produceshouyi[data-v-5b39643b]{color:red;font-size:%?60?%}.uni-grid-9[data-v-5b39643b]{width:100%}.uni-grid-9-item[data-v-5b39643b]{width:33.3%;border-left:%?1?% solid #efefef}.uni-grid-9[data-v-5b39643b]{background-color:#fff}.uni-h2[data-v-5b39643b]{color:#fb8c08;margin-bottom:%?20?%}.uni-row-userlist[data-v-5b39643b]{padding-top:%?20?%;border-bottom:%?2?% solid #efefef}",""])},"68a9":function(t,e,i){"use strict";i.r(e);var a=i("e354"),n=i("df17");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("7227");var o,c=i("f0c5"),u=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5b39643b",null,!1,a["a"],o);e["default"]=u.exports},7227:function(t,e,i){"use strict";var a=i("cc9f"),n=i.n(a);n.a},"89d4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{index:"",current:0,showselect:-1,datainfo:"",accountsearch:"",page:1,type:1,allGameIntoMoney:0,allGameProfitLoss:0,allGameTurnToMoney:0}},onNavigationBarButtonTap:function(t){this.showMenu()},onPullDownRefresh:function(){this.getData(),uni.stopPullDownRefresh()},onLoad:function(){this.getData()},methods:{toPage:function(t){uni.navigateTo({url:"./gameusers?plat_type="+t})},trigerCollapse:function(t){t==this.showselect?this.showselect=-1:this.showselect=t},onClickItem:function(t){this.current!==t&&(this.current=t)},showMenu:function(){var t=this;uni.showActionSheet({itemList:["今天","昨天","本周","上周","本月","上月"],success:function(e){t.type=e.tapIndex+1,t.page=1,t.getData()},fail:function(t){console.log(t.errMsg)}})},setData:function(t){this.allGameIntoMoney=t.allGameIntoMoney,this.allGameProfitLoss=t.allGameProfitLoss,this.allGameTurnToMoney=t.allGameTurnToMoney,this.datainfo=t.lists},getData:function(){var t=this,e=uni.getStorageSync("agent_game_report_data");e&&this.setData(e),this.$store.commit("switch_loading",!0),this.$ajax.get({url:this.$service.api_lists.agent_game_report,data:{type:this.type,accountsearch:this.accountsearch}}).then(function(e){if(1==e.data.code){var i=e.data.data;t.setData(i),uni.setStorage({key:"agent_game_report_data",data:i,success:function(){console.log("success")}})}}).catch(function(t){uni.showToast({title:"系统繁忙,请稍后重试!",icon:"none"}),console.log("request fail",t)})}}};e.default=a},cc9f:function(t,e,i){var a=i("154d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ab3b9d38",a,!0,{sourceMap:!1,shadowMode:!1})},df17:function(t,e,i){"use strict";i.r(e);var a=i("89d4"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},e354:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-two"},[i("v-uni-view",{staticClass:"uni-card uni-card-top"},[i("v-uni-view",{staticClass:"uni-card-content"},[i("v-uni-view",{staticClass:"uni-card-content-inner"},[i("v-uni-view",{staticClass:"uni-flex uni-row",staticStyle:{"justify-content":"center"}},[i("v-uni-view",{staticClass:"text uni-h5"},[t._v("游戏团队盈亏")])],1),i("v-uni-view",{staticClass:"uni-flex uni-row produceshouyi-view",staticStyle:{"justify-content":"center"}},[i("v-uni-view",{staticClass:"text uni-h4 produceshouyi"},[t._v(t._s(t.allGameProfitLoss))])],1),i("v-uni-view",{staticClass:"uni-flex uni-row",staticStyle:{"justify-content":"space-between"}},[i("v-uni-view",{staticClass:"text",staticStyle:{width:"40upx"}}),i("v-uni-view",{staticClass:"text uni-h5"},[t._v("转入金额")]),i("v-uni-view",{staticClass:"text uni-h5"},[t._v("转出金额")]),i("v-uni-view",{staticClass:"text",staticStyle:{width:"40upx"}})],1),i("v-uni-view",{staticClass:"uni-flex uni-row produceshouyi-view",staticStyle:{"justify-content":"space-between"}},[i("v-uni-view",{staticClass:"text",staticStyle:{width:"40upx"}}),i("v-uni-view",{staticClass:"text uni-h4",staticStyle:{color:"#3e74fe"}},[t._v(t._s(t.allGameIntoMoney))]),i("v-uni-view",{staticClass:"text uni-h4",staticStyle:{color:"#3e74fe"}},[t._v(t._s(t.allGameTurnToMoney))]),i("v-uni-view",{staticClass:"text",staticStyle:{width:"40upx"}})],1),i("v-uni-view",{staticClass:"text",staticStyle:{"font-size":"25upx"}},[t._v("游戏盈亏计算公式：盈亏")])],1)],1)],1),i("v-uni-view",{staticClass:"uni-card"},[i("v-uni-view",{staticClass:"uni-card-content"},[i("v-uni-view",{staticClass:"uni-card-content-inner",staticStyle:{padding:"0px 16px"}},[i("v-uni-view",{staticClass:"uni-flex"},[i("v-uni-view",{staticClass:"text",staticStyle:{flex:"1"}},[i("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入账号查询该账户下团队的报表"},model:{value:t.accountsearch,callback:function(e){t.accountsearch=e},expression:"accountsearch"}})],1),i("v-uni-view",{staticClass:"text",staticStyle:{width:"100upx","text-align":"center",color:"#3a6ee6","line-height":"80upx"},attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getData(1)}}},[t._v("搜索")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-card"},[i("v-uni-view",{staticClass:"uni-card-content"},[i("v-uni-view",{staticClass:"uni-card-content-inner"},[i("v-uni-view",{staticClass:"uni-flex uni-row"},[i("v-uni-view",{staticClass:"text table-hr"},[t._v("游戏名")]),i("v-uni-view",{staticClass:"text table-hr"},[t._v("转入")]),i("v-uni-view",{staticClass:"text table-hr"},[t._v("转出")]),i("v-uni-view",{staticClass:"text table-hr"},[t._v("总下注")]),i("v-uni-view",{staticClass:"text table-hr"},[t._v("盈亏")])],1),t._l(t.datainfo,function(e,a){return i("v-uni-view",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPage(e.plat_type)}}},[i("v-uni-view",{staticClass:"uni-flex uni-row uni-row-userlist"},[i("v-uni-view",{staticClass:"text table-hd",staticStyle:{color:"#EC3936"}},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"text table-hd"},[t._v(t._s(e.gameIntoMoney))]),i("v-uni-view",{staticClass:"text table-hd"},[t._v(t._s(e.gameTurnToMoney))]),i("v-uni-view",{staticClass:"text table-hd"},[t._v(t._s(e.gameBetAmount))]),i("v-uni-view",{staticClass:"text table-hd"},[i("span",{staticStyle:{color:"#3A6EE6"}},[t._v(t._s(e.gameProfitLoss))])])],1)],1)})],2)],1)],1)],1),i("fr-loading")],1)},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})}}]);