(function(t){function e(e){for(var i,o,s=e[0],c=e[1],u=e[2],m=0,p=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/wumpa-time-tracker/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"5c0b":function(t,e,n){"use strict";var i=n("e332"),r=n.n(i);r.a},c59b:function(t,e,n){"use strict";var i=n("fa6a"),r=n.n(i);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("WumpaTimeTracker")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tracker"}},[n("div",{staticClass:"summary-actions"},[n("p",[t._v("Total time elapsed: "+t._s(t.timeElapsed))]),n("p",[t._v("Total time remaining: "+t._s(t.timeRemaining))]),n("div",{staticClass:"button-container"},[n("button",{attrs:{type:"button"},on:{click:function(e){return t.addNewTime()}}},[t._v("Add New Time")]),n("button",{attrs:{type:"button"},on:{click:function(e){return t.clearAllTimes()}}},[t._v("Clear All")])])]),n("form",{attrs:{id:"times"}},t._l(t.times,function(e,i){return n("div",{key:i,staticClass:"time"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.times[i],expression:"times[index]"}],attrs:{type:"text",name:"time_"+i,tabindex:"1"},domProps:{value:t.times[i]},on:{keyup:function(e){return t.calculateTimes()},input:function(e){e.target.composing||t.$set(t.times,i,e.target.value)}}}),n("button",{attrs:{tabindex:"0",type:"button"},on:{click:function(e){return t.deleteTime(i)}}},[t._v("\n        Delete\n      ")])])}),0),n("div",{staticClass:"summary-actions"},[n("div",{staticClass:"button-container"},[n("button",{attrs:{type:"button"},on:{click:function(e){return t.addNewTime()}}},[t._v("Add New Time")]),n("button",{attrs:{type:"button"},on:{click:function(e){return t.clearAllTimes()}}},[t._v("Clear All")])]),n("p",[t._v("Total time elapsed: "+t._s(t.timeElapsed))]),n("p",[t._v("Total time remaining: "+t._s(t.timeRemaining))])])])},s=[],c=(n("a481"),n("f576"),n("c5f6"),n("28a5"),1800),u=i["a"].extend({name:"WumpaTimeTracker",data:function(){return{times:[],timeElapsed:"",timeRemaining:""}},created:function(){var t=localStorage.getItem("times");this.times=t?JSON.parse(t):[""],this.calculateTimes()},methods:{calculateTimes:function(){localStorage.setItem("times",JSON.stringify(this.times));var t=this.times.map(this.getTotalSeconds).reduce(this.sum,0);this.timeElapsed=this.secondsToString(t),this.timeRemaining=this.secondsToString(c-t)},getTotalSeconds:function(t){if(t=t&&t.trim(),t&&t.length>=7){var e=t.split(/[^\d]+/),n=Number(e[0])||0,i=Number(e[1])||0,r=(Number(e[2])||0)/100;return 60*n+i+r}return 0},secondsToString:function(t){var e=t>=0?Math.floor(t/60):Math.ceil(t/60),n=Math.abs(t%60),i=String(e).padStart(2,"0"),r=String(n.toFixed(2)).padStart(5,"0"),a=0===e&&t<0?"-":"";return"".concat(a).concat(i,":").concat(r).replace(".",":")},sum:function(t,e){return t+e},clearAllTimes:function(){this.times=this.times.map(function(){return""}),this.calculateTimes()},addNewTime:function(){this.times.push(""),this.calculateTimes()},deleteTime:function(t){this.times.splice(t,1),this.calculateTimes()}}}),l=u,m=(n("c59b"),n("2877")),p=Object(m["a"])(l,o,s,!1,null,"b7b0e522",null),d=p.exports,f=i["a"].extend({name:"app",components:{WumpaTimeTracker:d}}),v=f,b=(n("5c0b"),Object(m["a"])(v,r,a,!1,null,null,null)),h=b.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(h)}}).$mount("#app")},e332:function(t,e,n){},fa6a:function(t,e,n){}});
//# sourceMappingURL=app.b2ecdbfb.js.map