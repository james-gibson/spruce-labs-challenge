(function(e){function t(t){for(var s,o,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/spruce-labs-challenge/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=n("2f62"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("main",{staticClass:"container"},[n("section",{staticClass:"container-inner"},e._l(e.messages,function(e){return n("Message",{key:e.id,attrs:{userId:e.userid,id:e.id,avatarUrl:e.avatarurl,message:e.msg}})}),1),n("div",{staticClass:"toolbar flex-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{placeholder:"Say something!",type:"text",name:"message"},domProps:{value:e.message},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit(t)},input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{staticClass:"secondary",on:{click:e.onSubmit}},[e._v("Send message")])])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Messenger App")])])}],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card flex-row",attrs:{id:e.id}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{alt:"User Avatar",src:e.avatarUrl}})]),n("div",[n("p",{staticClass:"montserrat"},[e._v(e._s(e.message))])])])},u=[],l={name:"Message",props:{id:String,userId:String,message:String,avatarUrl:String}},p=l,f=n("2877"),d=Object(f["a"])(p,c,u,!1,null,null,null),g=d.exports;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h={name:"app",data:function(){return{message:""}},components:{Message:g},computed:{messages:function(){return this.$store.state.messages}},methods:v({},Object(r["b"])(["sendMessage","pollMessages"]),{onSubmit:function(){this.sendMessage(this.message),this.message=""},onRefresh:function(){this.pollMessages()}})},b=h,y=(n("5c0b"),Object(f["a"])(b,a,o,!1,null,null,null)),O=y.exports,w=n("bc3a"),j=n.n(w);j.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",j.a.defaults.headers.post["Access-Control-Allow-Origin"]="*";var M="https://us-central1-gibsunas-playground.cloudfunctions.net/guild-challenge-server",S=Math.floor(11*Math.random()),_="https://picsum.photos/id/".concat(S,"/200/300"),P=function(e){return e.get(M)},x=function(e){return function(t){return e.post(M,t)}};s["a"].config.productionTip=!1,s["a"].use(r["a"]);var k=new r["a"].Store({state:{messages:[],isSending:!1},actions:{sendMessage:function(e,t){var n={id:Date.now(),userId:"1",avatarUrl:_,msg:t};x(j.a)(n).then(function(t){e.commit("recieveMessages",t)})},pollMessages:function(e){P(j.a).then(function(t){e.commit("recieveMessages",t),setTimeout(function(){return e.dispatch("pollMessages")},2e3);var n=e.state.messages||[],s=n.length>0?n[n.length-1].id:null;if(s){var r=document.getElementById(s),a=document.getElementsByClassName("container-inner");if(!r)return;r.scrollIntoView(),a.scrollTop=a.scrollHeight}})}},mutations:{sendMessage:function(e){e.isSending=!0},messageSent:function(e){e.isSending=!1},recieveMessages:function(e,t){e.messages=t.data.messages}}});k.dispatch("pollMessages"),new s["a"]({store:k,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("e332"),r=n.n(s);r.a},e332:function(e,t,n){}});
//# sourceMappingURL=app.b25468d3.js.map