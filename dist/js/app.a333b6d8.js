(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ffc":function(t,e,n){},"1cc4":function(t,e,n){t.exports=n.p+"img/winter_collection_bg.1adca6ef.jpg"},"1e42":function(t,e,n){t.exports=n.p+"img/spring_printed_dress.835ec822.jpg"},"3cf1":function(t,e,n){t.exports=n.p+"img/black_elegant_leather_jacket.0c04a75f.jpg"},"438e":function(t,e,n){t.exports=n.p+"img/black_leather_jacket.a004617c.jpg"},"4b88":function(t,e,n){},"4dfd":function(t,e,n){},"508f":function(t,e,n){"use strict";n("9032")},5587:function(t,e,n){"use strict";n("5916")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"container"},[n("TopNav"),n("BottomNav")],1)])},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-between",attrs:{id:"top-nav"}},[n("div",{staticClass:"col-2 d-flex align-items-center"},t._l(t.socialLinks,(function(t){return n("a",{key:t,staticClass:"icon",attrs:{href:t.link}},[n("i",{staticClass:"fab",class:t.icon})])})),0),t._m(0)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6 d-flex align-items-center"},[n("div",{staticClass:"col-6 account-links"},[n("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Shopping Card")]),n("a",{attrs:{href:"#"}},[t._v("My Account"),n("i",{staticClass:"fas fa-chevron-down"})])]),n("div",{staticClass:"cart col-6 d-flex align-items-center justify-content-center"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fas fa-shopping-cart"}),t._v("CART "),n("i",{staticClass:"fas fa-chevron-down"})])])])}],u={name:"TopNav",data:function(){return{socialLinks:[{icon:"fa-facebook-f",link:"https://vuejs.org/"},{icon:"fa-twitter",link:"https://vuejs.org/"},{icon:"fa-instagram",link:"https://vuejs.org/"},{icon:"fa-youtube",link:"https://vuejs.org/"}]}}},f=u,d=(n("508f"),n("2877")),p=Object(d["a"])(f,o,l,!1,null,"2ee86ea2",null),v=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"bottom-nav"}},[t._m(0),n("div",{staticClass:"col-9 d-flex align-items-center justify-content-end h-100"},[t._l(t.navLinks,(function(e){return n("span",{key:e,staticClass:"link h-100 d-flex align-items-center",class:{active:e.isActive}},[t._v(t._s(e.name)),e.isChevron?n("i",{staticClass:"fas fa-chevron-down"}):t._e()])})),n("span",{staticClass:"shop-button"},[t._v("Shop now!")]),t._m(1)],2)])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 d-flex justify-content-center align-items-center"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:n("89fe"),height:"50",alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fas fa-search"})])}],m={name:"BottomNav",data:function(){return{navLinks:[{name:"Home",isChevron:!0,isActive:!0},{name:"Shop",isChevron:!0,isActive:!1},{name:"Products",isChevron:!0,isActive:!1},{name:"Categories",isChevron:!0,isActive:!1},{name:"News",isChevron:!1,isActive:!1},{name:"Elements",isChevron:!0,isActive:!1}]}}},_=m,b=(n("56e9"),Object(d["a"])(_,h,g,!1,null,"954bcc4e",null)),y=b.exports,C={name:"Header",components:{TopNav:v,BottomNav:y}},j=C,x=Object(d["a"])(j,r,c,!1,null,null,null),k=x.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero"),n("section",{attrs:{id:"featured-products"}},[n("TitleSection",{staticClass:"mt-5",attrs:{headline:"Featured Products",subheadline:"Must have products from our top sellers"}})],1),n("Collection"),n("section",{attrs:{id:"best-seller"}},[n("TitleSection",{staticClass:"mt-5",attrs:{headline:"Best Seller",subheadline:"Must have products from our top sellers"}}),n("div",{staticClass:"container d-flex justify-content-center"},[n("Gallery",{attrs:{imagesList:t.imageListBestSellers}})],1)],1),n("section",{attrs:{id:"new-arrivals"}},[n("TitleSection",{staticClass:"mt-5",attrs:{headline:"New Arrivals",subheadline:"Brand new products from top designer"}}),n("Gallery",{attrs:{imagesList:t.imageListNewArrivals}})],1)],1)},$=[],O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"hero"}},[n("div",{staticClass:"container d-flex align-items-center justify-content-center h-100"},[n("div",{staticClass:"row w-100"},[n("div",{staticClass:"col-12 text-center"},[n("h2",[t._v("Brand New Arrivals")])]),n("div",{staticClass:"col-12 text-center"},[n("h3",[t._v("New Collection From New York")])]),n("div",{staticClass:"col-6 text-end mt-4"},[n("span",[t._v("View All")])]),n("div",{staticClass:"col-6 mt-4"},[n("span",[t._v("LookBook")])])])])])}],E={name:"Hero"},S=E,L=(n("6e00"),Object(d["a"])(S,O,A,!1,null,"27e629d4",null)),N=L.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[n("h2",[t._v(t._s(t.headline))])]),n("div",{staticClass:"col-12 text-center"},[n("h3",[t._v(t._s(t.subheadline))])])])])},M=[],B={name:"TitleSection",props:["headline","subheadline"]},P=B,H=(n("786e"),Object(d["a"])(P,T,M,!1,null,"36b75c40",null)),G=H.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row m-0"},t._l(t.collections,(function(e){return n("div",{key:e.headline,staticClass:"col-4 p-0"},[n("img",{attrs:{src:e.src,alt:""}}),n("div",{staticClass:"details h-100 d-flex flex-column align-items-center justify-content-end pb-5"},[n("h2",[t._v(t._s(e.headline))]),n("h3",[t._v(t._s(e.subheadline))]),n("a",{attrs:{href:e.link}},[t._v("view more")])])])})),0)},J=[],D={name:"Collection",data:function(){return{collections:[{headline:"Winter Collection",subheadline:"stylish and warm",link:"#",src:n("1cc4")},{headline:"Spring Collection",subheadline:"bright and colorful",link:"#",src:n("e6c8")},{headline:"Autumn Collection",subheadline:"rich and confortable",link:"#",src:n("9874")}]}}},R=D,V=(n("d9a0"),Object(d["a"])(R,F,J,!1,null,"7f4245a0",null)),W=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row p-0 m-0 flex-row"},[t._m(0),t._l(t.imagesList,(function(e){return n("div",{key:e,staticClass:"col"},[n("img",{attrs:{src:e.src,alt:""}}),n("div",{staticClass:"cards"},[n("div",{staticClass:"row h-75 p-0 m-0 d-flex flex-column justify-content-center text-center"},[n("h2",[t._v(t._s(e.title))]),n("div",{staticClass:"col-12 d-flex justify-content-center"},t._l(e.categorys,(function(e){return n("h3",{key:e},[t._v(" "+t._s(e)),n("span",[t._v(",")])])})),0),n("h2",[t._v(t._s(e.price))])]),t._m(1,!0)])])})),t._m(2)],2)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon d-flex align-items-center justify-content-end"},[n("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row h-25 p-0 m-0 align-items-top"},[n("div",{staticClass:"col-6"},[n("h3",[n("a",{attrs:{href:""}},[n("i",{staticClass:"fas fa-shopping-cart"}),t._v(" Add to card")])])]),n("div",{staticClass:"col-6 text-end"},[n("h3",[n("a",{attrs:{href:""}},[n("i",{staticClass:"fas fa-list-ul"}),t._v(" Details")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon d-flex align-items-center"},[n("i",{staticClass:"fas fa-chevron-right"})])}],z={name:"Gallery",props:["imagesList"]},I=z,K=(n("5587"),Object(d["a"])(I,Y,q,!1,null,"c0b6d2e4",null)),Q=K.exports,U={name:"Main",components:{Hero:N,TitleSection:G,Collection:W,Gallery:Q},data:function(){return{imageListBestSellers:[{src:n("1e42"),title:"spring printed dress",categorys:["category1","category2"],price:"66$"},{src:n("e31e"),title:"modern love tee",categorys:["category1","category2"],price:"66$"},{src:n("438e"),title:"black leather jacket",categorys:["category1","category2"],price:"66$"},{src:n("3cf1"),title:"elegant leather jacket",categorys:["category1","category2"],price:"66$"},{src:n("a137"),title:"hipster black top",categorys:["category1","category2"],price:"66$"}],imageListNewArrivals:[{src:n("3cf1"),title:"elegant leather jacket",categorys:["category1","category2"],price:"66$"},{src:n("a137"),title:"hipster black top",categorys:["category1","category2"],price:"66$"},{src:n("8c68"),title:"modern love tee",categorys:["category1","category2"],price:"66$"},{src:n("1e42"),title:"spring printed dress",categorys:["category1","category2"],price:"66$"},{src:n("e31e"),title:"black leather jacket",categorys:["category1","category2"],price:"66$"}]}}},X=U,Z=(n("b864"),Object(d["a"])(X,w,$,!1,null,"63e3c36e",null)),tt=Z.exports,et={name:"App",components:{Header:k,Main:tt}},nt=et,st=(n("5c0b"),Object(d["a"])(nt,a,i,!1,null,null,null)),at=st.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(at)}}).$mount("#app")},"56e9":function(t,e,n){"use strict";n("8de0")},5916:function(t,e,n){},"5a38":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6e00":function(t,e,n){"use strict";n("5a38")},"786e":function(t,e,n){"use strict";n("4b88")},"89fe":function(t,e,n){t.exports=n.p+"img/avada-classic-shop-logo.3a1da824.svg"},"8c68":function(t,e,n){t.exports=n.p+"img/black_leather_suit.05b370fb.jpg"},"8de0":function(t,e,n){},9032:function(t,e,n){},9874:function(t,e,n){t.exports=n.p+"img/autumn_collection_bg.37a95e05.jpg"},"9c0c":function(t,e,n){},a137:function(t,e,n){t.exports=n.p+"img/hipster_black_top.b4a02513.jpg"},b864:function(t,e,n){"use strict";n("0ffc")},d9a0:function(t,e,n){"use strict";n("4dfd")},e31e:function(t,e,n){t.exports=n.p+"img/modern_love_tee.8010f606.jpg"},e6c8:function(t,e,n){t.exports=n.p+"img/spring_collection_bg.d6753326.jpg"}});
//# sourceMappingURL=app.a333b6d8.js.map