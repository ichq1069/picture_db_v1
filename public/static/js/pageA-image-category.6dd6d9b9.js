(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pageA-image-category"],{"0899":function(t,e,n){"use strict";var r=n("7574"),a=n.n(r);a.a},"3b18":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-custom-nav-bar__back[data-v-361791d8]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-361791d8]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-361791d8]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 顶部背景图 start */.top-backgroup[data-v-361791d8]{height:%?450?%;z-index:-1}.top-backgroup .backgroud-image[data-v-361791d8]{width:100%;height:%?667?%}\n/* 顶部背景图 end */\n/* 标题start */.nav_title[data-v-361791d8]{-webkit-background-clip:text;color:transparent}.nav_title--wrap[data-v-361791d8]{position:relative;display:flex;height:%?120?%;font-size:%?46?%;align-items:center;justify-content:center;font-weight:700;background-image:url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);background-size:cover}\n/* 标题end */\n/* 组件导航列表 start*/.nav-list[data-v-361791d8]{display:flex;flex-wrap:wrap;padding:%?0?% %?12?% %?0?%;justify-content:space-between\n  /* 列表元素 start */\n  /* 列表元素 end */}.nav-list .nav-list-item[data-v-361791d8]{padding:%?30?% %?30?% %?20?% %?30?%;border-radius:%?12?%;width:45%;margin:0 %?18?% %?40?%;background-size:cover;background-position:50%;position:relative;z-index:99\n  /* 元素标题 start */\n  /* 元素标题 end */\n  /* 元素图标 start */\n  /* 元素图标 end */}.nav-list .nav-list-item .nav-link[data-v-361791d8]{font-size:%?32?%;line-height:1.2;text-transform:capitalize;padding:%?0?% %?10?% %?0?% 0;position:relative}.nav-list .nav-list-item .nav-link .title[data-v-361791d8]{color:#000;text-align:left}.nav-list .nav-list-item .icon[data-v-361791d8]{font-variant:small-caps;width:%?70?%;height:%?70?%;line-height:%?70?%;margin:0;padding:0;display:inline-flex;text-align:center;justify-content:center;vertical-align:middle;font-size:%?45?%;color:#fff;white-space:nowrap;opacity:.9;background-color:rgba(0,0,0,.05);background-size:cover;background-position:50%;border-radius:%?5000?%}\n/* 组件导航列表 end*/',""]),t.exports=e},"4fef":function(t,e,n){var r=n("7ec2").default,a=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return a(r().mark((function e(){var n,a,i;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,a=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:i=e.sent,n=i.customBarHeight,a=i.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",a),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},7574:function(t,e,n){var r=n("3b18");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("06d8c1b2",r,!0,{sourceMap:!1,shadowMode:!1})},"77c3":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("3805").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"components tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-view",{staticClass:"top-backgroup"},[n("v-uni-image",{staticClass:"backgroud-image",attrs:{src:"https://tnuiimage.tnkjapp.com/index_bg/components_new.jpg",mode:"widthFix"}})],1),t._l(t.navList,(function(e,r){return[n("v-uni-view",{key:r+"_0",staticClass:"nav_title--wrap tn-margin-bottom-sm"},[n("v-uni-view",{staticClass:"nav_title tn-cool-bg-color-15"},[t._v(t._s(e.title))])],1),n("v-uni-view",{key:r+"_1",staticClass:"nav-list"},[t._l(e.list,(function(e,r){return[n("v-uni-view",{key:r+"_0",staticClass:"nav-list-item tn-shadow-blur tn-cool-bg-image tn-flex tn-flex-col-center tn-flex-row-between",class:[t.getRandomCoolBg(r)],attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickMenu(r)}}},[n("v-uni-view",{staticClass:"nav-link tn-flex-1"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))])],1),n("v-uni-view",{staticClass:"icon"},[n("v-uni-view",{staticStyle:{width:"100%",height:"100%"}},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.url+e.path}})],1)],1)],1)]}))],2)]})),n("v-uni-view",{staticClass:"tn-padding-bottom-xs"})],2)},i=[]},"7b20":function(t,e,n){"use strict";n.r(e);var r=n("916f"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=n("7037")["default"];function a(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=a=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(I){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new O(r||[]);return o(i,"_invoke",{value:L(t,n,c)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(I){return{type:"throw",arg:I}}}e.wrap=d;var v={};function p(){}function g(){}function m(){}var y={};f(y,u,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(B([])));w&&w!==n&&i.call(w,u)&&(y=w);var x=m.prototype=p.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;o(this,"_invoke",{value:function(a,o){function c(){return new e((function(n,c){(function n(a,o,c,u){var s=h(t[a],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)})(a,o,n,c)}))}return n=n?n.then(c,c):c()}})}function L(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return z()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=E(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=h(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function B(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:z}}function z(){return{value:void 0,done:!0}}return g.prototype=m,o(x,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=f(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},_(k.prototype),f(k.prototype,s,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new k(d(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(x),f(x,l,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=B,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:B(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=a,t.exports.__esModule=!0,t.exports["default"]=t.exports},9116:function(t,e,n){"use strict";n.r(e);var r=n("77c3"),a=n("7b20");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("0899");var o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"361791d8",null,!1,r["a"],void 0);e["default"]=c.exports},"916f":function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4");var a=n("f758"),i=r(n("4fef")),o={name:"ImageCategory",mixins:[i.default],data:function(){return{navList:[{title:"壁纸系列",backgroundColor:"tn-cool-bg-color-1",list:[]}]}},created:function(){this.getImageSeriesList()},methods:{clickMenu:function(t){uni.navigateTo({url:"/pageB/wallpaper/wallpaper?params="+JSON.stringify(this.navList[0].list[t])})},getImageSeriesList:function(){var t=this;(0,a.seriesList)().then((function(e){t.navList[0].list=e.items}))},getRandomCoolBg:function(){var t=["red","purplered","purple","bluepurple","aquablue","blue","indigo","cyan","teal","green","yellowgreen","lime","yellow","orangeyellow","orange","orangered","brown","grey","gray"],e=Math.floor(Math.random()*t.length),n=t[e];return"tn-bg-"+n}}};e.default=o},c973:function(t,e,n){function r(t,e,n,r,a,i,o){try{var c=t[i](o),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,a)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){r(o,a,i,c,u,"next",t)}function u(t){r(o,a,i,c,u,"throw",t)}c(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},f758:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.imageCategoryList=function(t){return a.default.get("img/category",{params:t}).then((function(t){return t.data}))},e.imageDownLoad=function(t){return a.default.get("img/download",{params:t}).then((function(t){return t.data}))},e.imageItemList=function(t){return a.default.get("img/item",{params:t}).then((function(t){return t.data}))},e.imageList=function(t){return a.default.get("img/list",{params:t}).then((function(t){return t.data}))},e.seriesList=function(t){return a.default.get("img/series",{params:t}).then((function(t){return t.data}))};var a=r(n("f8fb"))}}]);