(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-detail"],{"0ae2":function(t,i,e){var a=e("a7ba");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("52bf284b",a,!0,{sourceMap:!1,shadowMode:!1})},"0b7c":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{id:0,datainfo:[]}},onShareAppMessage:function(){},onLoad:function(t){var i=this;this.id=t.id,this.$ajax.get({url:this.$service.api_lists.news_details,data:{id:this.id}}).then(function(t){1==t.data.code&&(i.datainfo=t.data.data,uni.setNavigationBarTitle({title:i.datainfo.title})),console.log(t)}).catch(function(t){console.log("request fail",t)})},methods:{}};i.default=a},"2d09":function(t,i,e){"use strict";e.r(i);var a=e("3124"),n=e("e8c0");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("9e10");var s,c=e("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"65052788",null,!1,a["a"],s);i["default"]=r.exports},3124:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"uni-card"},[e("v-uni-view",{staticClass:"uni-card-content"},[e("v-uni-view",{staticClass:"uni-card-content-inner"},[e("v-uni-view",{staticClass:"uni-h4",staticStyle:{"text-align":"center"}},[t._v(t._s(t.datainfo.title))]),e("v-uni-view",{staticClass:"article-meta"},[e("v-uni-text",{staticClass:"article-author"},[t._v("管理员")]),e("v-uni-text",{staticClass:"article-text"},[t._v("发表于")]),e("v-uni-text",{staticClass:"article-time"},[t._v(t._s(t.datainfo.oddtime))])],1),e("v-uni-view",{staticClass:"article-content"},[e("v-uni-rich-text",{domProps:{innerHTML:t._s(t.datainfo.content)}},[t._v(t._s(t.datainfo.content))])],1)],1)],1)],1)],1)},o=[];e.d(i,"b",function(){return n}),e.d(i,"c",function(){return o}),e.d(i,"a",function(){return a})},"9e10":function(t,i,e){"use strict";var a=e("0ae2"),n=e.n(a);n.a},a7ba:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".banner[data-v-65052788]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-65052788]{width:100%}.banner-title[data-v-65052788]{max-height:%?84?%;overflow:hidden;position:absolute;left:%?30?%;bottom:%?30?%;width:90%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11}.article-meta[data-v-65052788]{padding:%?20?% %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;color:grey}.article-text[data-v-65052788]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.article-author[data-v-65052788],.article-time[data-v-65052788]{font-size:%?30?%}.article-content[data-v-65052788]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""])},e8c0:function(t,i,e){"use strict";e.r(i);var a=e("0b7c"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a}}]);