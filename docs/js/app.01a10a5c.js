(function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},a={app:0},n=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/spruce-labs-challenge/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),a=r("2f62"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("main",{staticClass:"container"},[r("section",{staticClass:"container-inner"},e._l(e.users,function(e){return r("User",{key:e.id,attrs:{user:e,firstName:e.firstname,lastName:e.lastname,emailAddress:e.emailaddress,userId:e.userid}})}),1),r("div",{staticClass:"toolbar flex-row"},[r("button",{staticClass:"secondary",on:{click:e.onSubmit}},[e._v("Add User")])])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[e._v("User Management App")])])}],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card flex-row",attrs:{id:e.id}},[this.isEditing?e._e():r("div",{staticClass:"toolbar flex-row"},[r("div",{staticClass:"avatar"},[this.user.avatarurl?r("img",{attrs:{alt:"User Avatar",src:this.user.avatarurl}}):e._e(),r("a",{on:{click:e.enableEdit}},[e._v("Edit")])]),r("div",[r("p",{staticClass:"montserrat"},[e._v(e._s(e.emailAddress)+" : "+e._s(e.lastName)+", "+e._s(e.firstName))])])]),this.isEditing?r("div",[r("div",{staticClass:"avatar"},[r("img",{attrs:{alt:"User Avatar",src:this.localUserCopy.avatarUrl}}),r("button",{on:{click:function(t){return e.destroyUser()}}},[e._v("Delete User")])]),r("div",[r("label",{attrs:{for:"firstname"}},[e._v("First Name:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localUserCopy.firstname,expression:"localUserCopy.firstname"}],attrs:{id:"firstname"},domProps:{value:e.localUserCopy.firstname},on:{input:function(t){t.target.composing||e.$set(e.localUserCopy,"firstname",t.target.value)}}}),r("label",{attrs:{for:"lastname"}},[e._v("Last Name:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localUserCopy.lastname,expression:"localUserCopy.lastname"}],attrs:{id:"lastname"},domProps:{value:e.localUserCopy.lastname},on:{input:function(t){t.target.composing||e.$set(e.localUserCopy,"lastname",t.target.value)}}}),r("label",{attrs:{for:"emailaddress"}},[e._v("Email Address:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localUserCopy.emailaddress,expression:"localUserCopy.emailaddress"}],attrs:{id:"emailaddress",type:"email"},domProps:{value:e.localUserCopy.emailaddress},on:{input:function(t){t.target.composing||e.$set(e.localUserCopy,"emailaddress",t.target.value)}}}),r("label",{attrs:{for:"phonenumber"}},[e._v("Cell Phone:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localUserCopy.phonenumber,expression:"localUserCopy.phonenumber"}],attrs:{id:"phonenumber",type:"tel"},domProps:{value:e.localUserCopy.phonenumber},on:{input:function(t){t.target.composing||e.$set(e.localUserCopy,"phonenumber",t.target.value)}}}),r("label",{attrs:{for:"avatarurl"}},[e._v("Avatar Url:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.localUserCopy.avatarurl,expression:"localUserCopy.avatarurl"}],attrs:{id:"avatarurl",type:"url"},domProps:{value:e.localUserCopy.avatarurl},on:{input:function(t){t.target.composing||e.$set(e.localUserCopy,"avatarurl",t.target.value)}}})]),r("div",{staticClass:"flex-row"},[r("button",{on:{click:e.disableEditMode}},[e._v("Cancel")]),r("button",{on:{click:e.save}},[e._v("Save")])])]):e._e()])},c=[];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach(function(t){Object(i["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var p={name:"User",created:function(){this.localUserCopy=this.$store.state.userCopy},updated:function(){this.localUserCopy=this.$store.state.userCopy},data:function(){return{localUserCopy:{}}},computed:{isEditing:function(){return!(!this.user.id||!this.$store.state.editEnabledId)&&this.user.id==this.$store.state.editEnabledId},userCopy:function(){return this.$store.state.userCopy}},methods:d({},Object(a["b"])(["saveUser","deleteUser","getUsers","enableEditMode","disableEditMode"]),{enableEdit:function(){this.enableEditMode(this),this.localUserCopy=Object.assign({},this.userCopy)},disableEdit:function(){this.localUserCopy={},this.disableEditMode(),this.getUsers()},save:function(){var e=this.localUserCopy||{};this.saveUser(e),this.getUsers(),this.disableEditMode()},destroyUser:function(){var e=this.localUserCopy.id;this.deleteUser(e)}}),props:{id:String,user:Object,firstName:String,lastName:String,emailAddress:String,userId:String}},f=p,m=r("2877"),v=Object(m["a"])(f,l,c,!1,null,null,null),b=v.exports;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(r,!0).forEach(function(t){Object(i["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={name:"app",data:function(){return{user:""}},components:{User:b},computed:{users:function(){return this.$store.state.users}},methods:h({},Object(a["b"])(["createUser","getUsers"]),{onSubmit:function(){this.createUser(this.user),this.user=""},onRefresh:function(){this.getUsers()}})},U=g,C=(r("5c0b"),Object(m["a"])(U,n,o,!1,null,null,null)),O=C.exports,j=r("bc3a"),w=r.n(j);w.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",w.a.defaults.headers.post["Access-Control-Allow-Origin"]="*";var E="https://us-central1-gibsunas-playground.cloudfunctions.net/spruce-labs-challenge-server",_=Math.floor(11*Math.random()),P="https://picsum.photos/id/".concat(_,"/200/300"),M=function(e){return e.get(E)},S=function(e){return function(t){return t?e.delete("".concat(E,"?id=").concat(t)):Promise.resolve()}},x=function(e){return function(t){return e.post(E,t)}},N=function(e){return function(t){return e.put(E,t)}};s["a"].config.productionTip=!1,s["a"].use(a["a"]);var $=new a["a"].Store({state:{users:[],editEnabledId:""},actions:{saveUser:function(e,t){console.log("vuex action:",t),N(w.a)(JSON.parse(JSON.stringify(t))).then(function(t){e.commit("disableEditMode")})},enableEditMode:function(e,t){e.commit("disableEditMode"),e.commit("enableEditMode",t.user)},disableEditMode:function(e){e.commit("disableEditMode")},createUser:function(e,t){var r={id:Date.now(),userId:"1",avatarUrl:P,msg:t};x(w.a)(r).then(function(t){e.commit("recieveUsers",t)})},getUsers:function(e){M(w.a).then(function(t){var r=t.data;e.commit("recieveUsers",r)})},deleteUser:function(e,t){e.commit("disableEditMode"),S(w.a)(t).then(function(e){$.dispatch("getUsers")})}},mutations:{clearUserCopy:function(e){e.userCopy={}},setUserCopy:function(e,t){e.userCopy=t},enableEditMode:function(e,t){e.editEnabledId=t.id,e.userCopy=t},disableEditMode:function(e){e.editEnabledId="",e.userCopy={}},recieveUsers:function(e,t){e.users=t.data.users}}});$.dispatch("getUsers"),new s["a"]({store:$,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("e332"),a=r.n(s);a.a},e332:function(e,t,r){}});
//# sourceMappingURL=app.01a10a5c.js.map