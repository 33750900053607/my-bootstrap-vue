(function(e){function t(t){for(var a,l,s=t[0],i=t[1],c=t[2],u=0,f=[];u<s.length;u++)l=s[u],n[l]&&f.push(n[l][0]),n[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);v&&v(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,l=1;l<r.length;l++){var i=r[l];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"41d636ee"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,a){r=n[e]=[t,a]});t.push(r[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=l(e),o=function(t){i.onerror=i.onload=null,clearTimeout(c);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");l.type=a,l.request=o,r[1](l)}n[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var v=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3778:function(e,t,r){"use strict";var a=r("9023"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("744f"),r("6c7b"),r("7514"),r("20d6"),r("1c4c"),r("6762"),r("cadf"),r("e804"),r("55dd"),r("d04f"),r("c8ce"),r("217b"),r("7f7f"),r("f400"),r("7f25"),r("536b"),r("d9ab"),r("f9ab"),r("32d7"),r("25c9"),r("9f3c"),r("042e"),r("c7c6"),r("f4ff"),r("049f"),r("7872"),r("a69f"),r("0b21"),r("6c1a"),r("c7c62"),r("84b4"),r("c5f6"),r("2e37"),r("fca0"),r("7cdf"),r("ee1d"),r("b1b1"),r("87f3"),r("9278"),r("5df2"),r("04ff"),r("f751"),r("4504"),r("fee7"),r("ffc1"),r("0d6d"),r("9986"),r("8e6e"),r("25db"),r("e4f7"),r("b9a1"),r("64d5"),r("9aea"),r("db97"),r("66c8"),r("57f0"),r("165b"),r("456d"),r("cf6a"),r("fd24"),r("8615"),r("551c"),r("097d"),r("df1b"),r("2397"),r("88ca"),r("ba16"),r("d185"),r("ebde"),r("2d34"),r("f6b3"),r("2251"),r("c698"),r("a19f"),r("9253"),r("9275"),r("3b2b"),r("3846"),r("4917"),r("a481"),r("28a5"),r("386d"),r("6b54"),r("4f7f"),r("8a81"),r("ac4d"),r("8449"),r("9c86"),r("fa83"),r("48c0"),r("a032"),r("aef6"),r("d263"),r("6c37"),r("9ec8"),r("5695"),r("2fdb"),r("d0b0"),r("5df3"),r("b54a"),r("f576"),r("ed50"),r("788d"),r("14b9"),r("f386"),r("f559"),r("1448"),r("673e"),r("242a"),r("c66f"),r("b05c"),r("34ef"),r("6aa2"),r("15ac"),r("af56"),r("b6e4"),r("9c29"),r("63d9"),r("4dda"),r("10ad"),r("c02b"),r("4795"),r("130f"),r("ac6a"),r("96cf");var a=r("2b0e"),n=r("9f7b"),o=r.n(n);r("ab8b"),r("2dd8");a["a"].use(o.a);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"primary",fixed:"top"}},[r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Sleep Routine")]),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[e._v("Link")]),r("b-nav-item",{attrs:{href:"#",disabled:""}},[e._v("Disabled")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[e._v("EN")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("ES")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("RU")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("FA")])],1),r("b-nav-item-dropdown",{attrs:{right:""}},[r("template",{slot:"button-content"},[r("em",[e._v("User")])]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Profile")]),r("b-dropdown-item",{attrs:{href:"#"}},[e._v("Signout")])],2)],1)],1)],1),r("div",{attrs:{id:"app"}},[r("router-view")],1)],1),r("div",[r("b-nav",[r("b-nav-item",{attrs:{active:""}},[e._v("Active")]),r("b-nav-item",[e._v("Link")]),r("b-nav-item",[e._v("Another Link")]),r("b-nav-item",{attrs:{disabled:""}},[e._v("Disabled")])],1)],1),r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",[e._v("1 of 3")]),r("b-col",[e._v("2 of 3")]),r("b-col",[e._v("3 of 3")])],1)],1),r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",[e._v("1 of 2\n      "),r("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e._v("\n  This is a primary alert—check it out!\n")])]),r("b-col",[e._v("2 of 2\n      "),r("div",{staticClass:"alert alert-secondary",attrs:{role:"alert"}},[e._v("\n  This is a secondary alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n")])])],1),r("b-row",[r("b-col",[e._v("1 of 3")]),r("b-col",[e._v("2 of 3")]),r("b-col",[e._v("3 of 3")])],1)],1),r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",[e._v("Column")]),r("b-col",[e._v("Column")]),r("div",{staticClass:"w-100"}),r("b-col",[e._v("Column")]),r("b-col",[e._v("Column")])],1)],1),r("b-container",{staticClass:"bv-example-row"},[r("b-row",{staticClass:"justify-content-md-center"},[r("b-col",{attrs:{col:"",lg:"2"}},[e._v("1 of 3\n      "),r("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e._v("\n  This is a primary alert—check it out!\n")])]),r("b-col",{attrs:{cols:"12",md:"auto"}},[e._v("Variable width content\n"),r("div",{staticClass:"alert alert-secondary",attrs:{role:"alert"}},[e._v("\n  This is a secondary alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n")])]),r("b-col",{attrs:{col:"",lg:"2"}},[e._v("3 of 3\n"),r("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e._v("\n  This is a 3rd alert—check it out!\n")])])],1),r("b-row",[r("b-col",[e._v("1 of 3")]),r("b-col",{attrs:{cols:"12",md:"auto"}},[e._v("Variable width content")]),r("b-col",{attrs:{col:"",lg:"2"}},[e._v("3 of 3")])],1)],1),r("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"9"}},[e._v('\n      Level 1: sm="9"\n      '),r("b-row",[r("b-col",{attrs:{cols:"8",sm:"6"}},[e._v('Level 2: cols="8" sm="6"')]),r("b-col",{attrs:{cols:"4",sm:"6"}},[e._v('Level 2: cols="4" sm="6"')])],1)],1)],1)],1),r("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e._v("\n  This is a primary alert—check it out!\n")]),e._m(0),r("div",[r("b-navbar",{attrs:{type:"light",variant:"light",fixed:"bottom"}},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Cozy Sleep Lab.")]),r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[e._v("Link")]),r("b-nav-item",{attrs:{href:"#",disabled:""}},[e._v("Disabled")])],1)],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert alert-secondary",attrs:{role:"alert"}},[e._v("\n  This is a secondary alert with "),r("a",{staticClass:"alert-link",attrs:{href:"#"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n")])}],i=(r("5c0b"),r("2877")),c={},u=Object(i["a"])(c,l,s,!1,null,null,null),v=u.exports,f=r("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank",rel:"noopener"}},[e._v("unit-mocha")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress",target:"_blank",rel:"noopener"}},[e._v("e2e-cypress")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String}},_=m,g=(r("3778"),Object(i["a"])(_,p,h,!1,null,"3b3bf1c2",null)),w=g.exports,k={name:"home",components:{HelloWorld:w}},y=k,j=Object(i["a"])(y,b,d,!1,null,null,null),C=j.exports;a["a"].use(f["a"]);var x=new f["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),E=r("2f62");a["a"].use(E["a"]);var O=new E["a"].Store({state:{},mutations:{},actions:{}}),T=r("9483");Object(T["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("f9e3");a["a"].config.productionTip=!1,new a["a"]({router:x,store:O,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("5e27"),n=r.n(a);n.a},"5e27":function(e,t,r){},9023:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.00eb7548.png"}});
//# sourceMappingURL=app.46162641.js.map