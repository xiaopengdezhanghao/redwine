(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-takeas"],{"079d":function(t,i,n){"use strict";n.r(i);var a=n("63d6"),e=n("6674");for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);n("44d4");var l,c=n("f0c5"),d=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"1c7401ca",null,!1,a["a"],l);i["default"]=d.exports},"13a1":function(t,i,n){var a=n("5070");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("40e8c3ac",a,!0,{sourceMap:!1,shadowMode:!1})},"44d4":function(t,i,n){"use strict";var a=n("13a1"),e=n.n(a);e.a},5070:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".nav_d[data-v-1c7401ca]{width:%?686?%;height:%?78?%;background:#ff8900;box-shadow:0 %?5?% %?17?% %?1?% rgba(255,137,0,.3);border-radius:%?39?%;position:fixed;bottom:%?39?%;left:%?32?%;font-size:%?32?%;font-family:PingFang SC;font-weight:500;color:#fff;text-align:center;line-height:%?78?%}.dz[data-v-1c7401ca]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#6e6f72;margin-left:%?20?%}.name[data-v-1c7401ca]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#111734}.jb[data-v-1c7401ca]{width:%?34?%;height:%?34?%;margin-left:%?48?%;margin-top:%?50?%}",""])},"63d6":function(t,i,n){"use strict";var a,e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticStyle:{display:"flex"}},[a("img",{staticClass:"jb",attrs:{src:n("a4ea"),alt:""}}),a("v-uni-view",[a("v-uni-view",{staticClass:"name"},[a("v-uni-view",{staticStyle:{"margin-left":"20rpx","margin-right":"21rpx","margin-top":"10rpx"}},[t._v("张晓倩")]),a("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[t._v("13828636654")])],1),a("v-uni-view",{staticClass:"dz"},[t._v("北京市朝阳区前进路光华工业园2动201")])],1),a("v-uni-view",{staticStyle:{"margin-left":"130rpx","margin-top":"30rpx","border-left":"1px solid #CBCBCB","padding-left":"30rpx",height:"60rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav_tj.apply(void 0,arguments)}}},[t._v("编辑")])],1),a("v-uni-view",{staticClass:"nav_d",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nav_tj.apply(void 0,arguments)}}},[t._v("添加新地址")])],1)},o=[];n.d(i,"b",function(){return e}),n.d(i,"c",function(){return o}),n.d(i,"a",function(){return a})},"648b":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{}},methods:{nav_tj:function(){uni.navigateTo({url:"./tj"})}},onLoad:function(){this.$ajax.post({url:this.$service.api_lists.member,data:{page:5}}).then(function(t){console.log(t)})}};i.default=a},6674:function(t,i,n){"use strict";n.r(i);var a=n("648b"),e=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);i["default"]=e.a},a4ea:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQzMUI1MzY1NTg0NjExRUE4MEY0RDlDOTg5RkJCRjA1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQzMUI1MzY2NTg0NjExRUE4MEY0RDlDOTg5RkJCRjA1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDMxQjUzNjM1ODQ2MTFFQTgwRjREOUM5ODlGQkJGMDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDMxQjUzNjQ1ODQ2MTFFQTgwRjREOUM5ODlGQkJGMDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SLoZ4AAADNklEQVR42rxYaUhUURT+5mmWkRkRUlS40L8WDMuk3EIk0zawaIMsCDKiBSoJiSIloihooR/mjyBQwkoidbJFSitCYopAIwJToTKhoFIS977bO0Ovmnnz3iwe+OC9ufed882992zXMXoadiSGyCUyiHlEHDFZxn4QHUQL0UjUE5+tKnZYJJJGFBE5RLhF3cPEXeIM8cTXZM3HeAJRSzQRq2yQUBIm3zSJjgR/iWwmXhF5CFzyRNcWu0SOEZWG/Q+GKF0VotsSkWLiBEInSvdRX0TUdpxE6KVUbHkkEk+UYeykTGz+R+QSETWGRKLE5l9EUoPkHf54U5qRSFFIzc1SthzeRg+5iaiwvTJkJBYfZPRgxM8pJ5cwTzNUyojR5CE8JCRSjgDLz+qrMX87MCPZ0yxlO1eTBBZ8Wcq4lX5Kfx5l2qkrAD499zY7U5MsapIxIoDoOHsk0hmKUiUmjgwCNYzsbyrMvpirSSr3TmLtDaDABUxPskYik8k2pVjy7wBwZxPwtsrXV/GaaexYuAeYswaYMBXY+JB7vMSsogCyzgPJh4VEP3A7H3hXbSmmaGZ+BddFLmml/jx+CsncB2Yu80wi+zKQtF9/HeoDqtcBbbWWd1MR6fE6+vuQbQNar+nvEUygG1h4zTacbwdV5Fzh6u3W3wd/ArdWA+31dk5VjyLSbjpFkXHuAF6XC5lJwHonEJulx4Xcq8CCnfrYQC9wk9Ggs8Guj3UoH24lFpmTGQHu7aIHDOn/fNxEIL8G+PCURz1bn9P/nSQYsT8+88fZW9SKPLY2dxR4wMPruiBhKNJA4htQtcJfEkoaNSlwhyyTaTgAvDj35ydF4jq3qavZXxLKtlMR6ZbS37o8Yp5qZvnf91Un0f0ykBisbHe724k0qbbtSeQ0kvkSaDJIV+2GuwxQfUedbRWBk3C6ex5jhbbPNKYEX5StvZ5KxfdE4RgSKRSbHqv4Sm99R5DluNgy7WtKZWIoSZRY7fTUxK1EbxAJ9IrOEru9r1q6RL+8ybN3JP67HXZuA9qko8+Qjn7YhvER+SZD2oa2YNyPGC9q8gwXNbFEtIwx66FTLmqaJHV0WVX8S4ABAGiuwYO+23syAAAAAElFTkSuQmCC"}}]);