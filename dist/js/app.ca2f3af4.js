(function(t){function e(e){for(var i,n,r=e[0],o=e[1],l=e[2],d=0,f=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],i=!0,r=1;r<s.length;r++){var o=s[r];0!==a[o]&&(i=!1)}i&&(c.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},c=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;c.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"097b":function(t,e,s){"use strict";s("0c73")},"0a20":function(t,e,s){},"0c73":function(t,e,s){},"0fa2":function(t,e,s){"use strict";s("c2fd")},"0fc6":function(t,e,s){t.exports=s.p+"img/post_img_12-700x441.1374a73e.jpg"},"13e8":function(t,e,s){"use strict";s("1a2d")},"1a2d":function(t,e,s){},"1cc4":function(t,e,s){t.exports=s.p+"img/winter_collection_bg.1adca6ef.jpg"},"1cda":function(t,e,s){t.exports=s.p+"img/leather_gloves.2e26e243.jpg"},"1e42":function(t,e,s){t.exports=s.p+"img/spring_printed_dress.835ec822.jpg"},"36c3":function(t,e,s){t.exports=s.p+"img/modern_black_leather_suit.7094be33.jpg"},"376c":function(t,e,s){t.exports=s.p+"img/promo_box_1_bg.062a9704.jpg"},"3cf1":function(t,e,s){t.exports=s.p+"img/black_elegant_leather_jacket.0c04a75f.jpg"},"438e":function(t,e,s){t.exports=s.p+"img/black_leather_jacket.a004617c.jpg"},"4b88":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("Main")],1)},c=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("div",{staticClass:"container"},[s("TopNav"),s("BottomNav")],1)])},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-between",attrs:{id:"top-nav"}},[s("div",{staticClass:"col-2 d-flex align-items-center"},t._l(t.socialLinks,(function(t){return s("a",{key:t.id,staticClass:"icon",attrs:{href:t.link}},[s("i",{staticClass:"fab",class:t.icon})])})),0),t._m(0)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 d-flex align-items-center"},[s("div",{staticClass:"col-6 account-links"},[s("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Shopping Card")]),s("a",{attrs:{href:"#"}},[t._v("My Account"),s("i",{staticClass:"fas fa-chevron-down"})])]),s("div",{staticClass:"cart col-6 d-flex align-items-center justify-content-center"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v("CART "),s("i",{staticClass:"fas fa-chevron-down"})])])])}],u={name:"TopNav",data:function(){return{socialLinks:[{id:13,icon:"fa-facebook-f",link:"https://vuejs.org/"},{id:14,icon:"fa-twitter",link:"https://vuejs.org/"},{id:15,icon:"fa-instagram",link:"https://vuejs.org/"},{id:16,icon:"fa-youtube",link:"https://vuejs.org/"}]}}},d=u,f=(s("a51f"),s("2877")),p=Object(f["a"])(d,o,l,!1,null,"b057c920",null),m=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row",attrs:{id:"bottom-nav"}},[t._m(0),s("div",{staticClass:"col-9 d-flex align-items-center justify-content-end h-100"},[t._l(t.navLinks,(function(e){return s("span",{key:e.id,staticClass:"link h-100 d-flex align-items-center",class:{active:e.isActive}},[t._v(t._s(e.name)),e.isChevron?s("i",{staticClass:"fas fa-chevron-down"}):t._e()])})),s("span",{staticClass:"shop-button"},[t._v("Shop now!")]),t._m(1)],2)])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-3 d-flex justify-content-center align-items-center"},[i("a",{attrs:{href:"#"}},[i("img",{attrs:{src:s("89fe"),height:"50",alt:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fas fa-search"})])}],_={name:"BottomNav",data:function(){return{navLinks:[{id:17,name:"Home",isChevron:!0,isActive:!0},{id:18,name:"Shop",isChevron:!0,isActive:!1},{id:19,name:"Products",isChevron:!0,isActive:!1},{id:20,name:"Categories",isChevron:!0,isActive:!1},{id:21,name:"News",isChevron:!1,isActive:!1},{id:22,name:"Elements",isChevron:!0,isActive:!1}]}}},h=_,b=(s("13e8"),Object(f["a"])(h,v,g,!1,null,"4aab84d0",null)),y=b.exports,C={name:"Header",components:{TopNav:m,BottomNav:y}},j=C,x=Object(f["a"])(j,n,r,!1,null,null,null),k=x.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Hero"),s("section",{attrs:{id:"featured-products"}},[s("TitleSection",{staticClass:"mt-5",attrs:{headline:"Featured Products",subheadline:"Must have products from our top sellers"}}),s("ProductGallery")],1),s("Collection"),s("section",{attrs:{id:"best-seller"}},[s("TitleSection",{staticClass:"my-5",attrs:{headline:"Best Seller",subheadline:"Must have products from our top sellers"}}),s("div",{staticClass:"container d-flex justify-content-center"},[s("Gallery",{attrs:{imagesList:t.imageListBestSellers}})],1)],1),s("section",{staticClass:"p-5 mt-5",attrs:{id:"offers"}},[s("Offers")],1),s("section",{attrs:{id:"new-arrivals"}},[s("TitleSection",{staticClass:"mt-5",attrs:{headline:"New Arrivals",subheadline:"Brand new products from top designer"}}),s("Gallery",{attrs:{imagesList:t.imageListNewArrivals}})],1),s("section",{staticClass:"mt-5",attrs:{id:"testimonials"}},[s("Testimonials")],1),s("section",{staticClass:"mt-5",attrs:{id:"blog"}},[s("TitleSection",{staticClass:"my-5",attrs:{headline:"From Our Blog",subheadline:"The latest Classic Shop news"}}),s("Blog")],1),s("hr"),s("section",[s("div",{staticClass:"container d-flex justify-content-evenly"},[s("List",{attrs:{title:"Featured",itemsList:t.featured}}),s("List",{attrs:{title:"On Sale",itemsList:t.onSale}}),s("List",{attrs:{title:"Top Rated",itemsList:t.topRated}}),s("List",{attrs:{title:"Latest Reviews",itemsList:t.reviews}})],1)])],1)},w=[],O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"hero"}},[s("div",{staticClass:"container d-flex align-items-center justify-content-center h-100"},[s("div",{staticClass:"row w-100"},[s("div",{staticClass:"col-12 text-center"},[s("h2",[t._v("Brand New Arrivals")])]),s("div",{staticClass:"col-12 text-center"},[s("h3",[t._v("New Collection From New York")])]),s("div",{staticClass:"col-6 text-end mt-4"},[s("span",[t._v("View All")])]),s("div",{staticClass:"col-6 mt-4"},[s("span",[t._v("LookBook")])])])])])}],L={name:"Hero"},A=L,E=(s("6e00"),Object(f["a"])(A,O,S,!1,null,"27e629d4",null)),T=E.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("h2",[t._v(t._s(t.headline))])]),s("div",{staticClass:"col-12 text-center"},[s("h3",[t._v(t._s(t.subheadline))])])])])},N=[],B={name:"TitleSection",props:["headline","subheadline"]},M=B,G=(s("786e"),Object(f["a"])(M,P,N,!1,null,"36b75c40",null)),H=G.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row m-0"},t._l(t.collections,(function(e){return s("div",{key:e.id,staticClass:"col-4 p-0"},[s("img",{attrs:{src:e.src,alt:""}}),s("div",{staticClass:"details h-100 d-flex flex-column align-items-center justify-content-end pb-5"},[s("h2",[t._v(t._s(e.headline))]),s("h3",[t._v(t._s(e.subheadline))]),s("a",{attrs:{href:e.link}},[t._v("view more")])])])})),0)},F=[],q={name:"Collection",data:function(){return{collections:[{headline:"Winter Collection",subheadline:"stylish and warm",link:"#",src:s("1cc4")},{headline:"Spring Collection",subheadline:"bright and colorful",link:"#",src:s("e6c8")},{headline:"Autumn Collection",subheadline:"rich and confortable",link:"#",src:s("9874")}]}}},R=q,V=(s("b723"),Object(f["a"])(R,D,F,!1,null,"61b5420e",null)),J=V.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row p-0 m-0 flex-row"},[t._m(0),t._l(t.imagesList,(function(e){return s("div",{key:e.id,staticClass:"col"},[s("img",{attrs:{src:e.src,alt:""}}),s("div",{staticClass:"cards"},[s("div",{staticClass:"row h-75 p-0 m-0 d-flex flex-column justify-content-center text-center"},[s("h2",[t._v(t._s(e.title))]),s("div",{staticClass:"col-12 d-flex justify-content-center"},t._l(e.categorys,(function(e){return s("h3",{key:e},[t._v(" "+t._s(e)),s("span",[t._v(",")])])})),0),s("h2",[t._v(t._s(e.price))])]),t._m(1,!0)])])})),t._m(2)],2)},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon d-flex align-items-center justify-content-end"},[s("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row h-25 p-0 m-0 align-items-top"},[s("div",{staticClass:"col-6"},[s("h3",[s("a",{attrs:{href:""}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" Add to card")])])]),s("div",{staticClass:"col-6 text-end"},[s("h3",[s("a",{attrs:{href:""}},[s("i",{staticClass:"fas fa-list-ul"}),t._v(" Details")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon d-flex align-items-center"},[s("i",{staticClass:"fas fa-chevron-right"})])}],Y={name:"Gallery",props:["imagesList"]},z=Y,K=(s("ec2f"),Object(f["a"])(z,W,I,!1,null,"23ccab87",null)),Q=K.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container d-flex align-items-center justify-content-center flex-column mb-5"},[s("div",{staticClass:"row w-50 text-center"},t._l(t.categorys,(function(e){return s("div",{key:e,staticClass:"col",class:{active:e.isActive}},[s("strong",[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 offset-1 d-flex"},t._l(t.activeProducts,(function(e){return s("div",{key:e.id,staticClass:"card"},[s("div",{staticClass:"position"},[s("img",{staticClass:"img-fluid",attrs:{src:e.src,alt:""}}),t._m(0,!0)]),s("h2",[t._v(t._s(e.title))]),t._l(e.categorys,(function(e){return s("h3",{key:e.index},[t._v(" "+t._s(e)+" ")])})),e.price===e.discounted?s("h2",{staticClass:"price"},[t._v(" "+t._s(e.price)+" ")]):s("h2",{staticClass:"price"},[s("span",[t._v(t._s(e.price))]),t._v(" "+t._s(e.discounted)+" ")])],2)})),0)])])},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product d-flex justify-content-center align-items-center"},[s("i",{staticClass:"far fa-check-square fa-2x"})])}],Z={name:"ProductGallery",data:function(){return{categorys:[{id:27,name:"Men",isActive:!0,products:[{id:23,src:s("3cf1"),title:"elegant leather jacket",categorys:["category1","category2"],price:"295$",discounted:"200$"},{id:24,src:s("8c68"),title:"black leather suit",categorys:["category1","category2"],price:"175$",discounted:"175$"},{id:25,src:s("5b9c"),title:"blue jacket & stripe tee",categorys:["category1","category2"],price:"580$",discounted:"580$"},{id:26,src:s("36c3"),title:"black leather jacket",categorys:["category1","category2"],price:"96$",discounted:"96$"}]},{id:28,name:"Women",isActive:!1},{id:29,name:"Accessories",isActive:!1}],activeProducts:[]}},created:function(){for(var t=0;t<this.categorys.length;t++)this.categorys[t].isActive&&(this.activeProducts=this.categorys[t].products)}},tt=Z,et=(s("6111"),Object(f["a"])(tt,U,X,!1,null,"2d5f82f4",null)),st=et.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},t._l(t.promo,(function(e){return s("div",{key:e.id,staticClass:"col-4"},[s("img",{staticClass:"img-fluid",attrs:{src:e.src,alt:""}}),s("div",{staticClass:"content pt-5"},[s("h2",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.description))]),s("span",[t._v("View More")])])])})),0)])},at=[],ct={name:"Offers",data:function(){return{promo:[{id:1,title:"70% Off",description:"Vivamus tempor leo lacus, feugiatut magna aliquam erat.",src:s("376c")},{id:2,title:"Free Shipping",description:"Vivamus tempor leo lacus, feugiatut magna aliquam erat.",src:s("c43f")}]}}},nt=ct,rt=(s("097b"),Object(f["a"])(nt,it,at,!1,null,"375f89b8",null)),ot=rt.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 d-flex justify-content-center mb-3"},[s("img",{attrs:{src:t.testimonials[0].src,alt:""}})]),s("div",{staticClass:"col-6 text-center mb-3"},[t._v(" "+t._s(t.testimonials[0].review)+" ")]),s("div",{staticClass:"col-12 d-flex justify-content-center"},[s("div",{staticClass:"col-4 text-end"},[s("h4",{staticClass:"name"},[t._v(t._s(t.testimonials[0].name))])]),s("div",{staticClass:"col-4"},[s("h4",{staticClass:"detail"},[t._v(t._s(t.testimonials[0].detail))])])])])])},ut=[],dt={name:"Testimonials",data:function(){return{testimonials:[{id:33,src:s("e16c"),review:"Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum.",name:"Lisa Smith",detail:"Theme Fusion"}]}}},ft=dt,pt=(s("b9c7"),Object(f["a"])(ft,lt,ut,!1,null,"826895e8",null)),mt=pt.exports,vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},t._l(t.articles,(function(e){return s("div",{key:e.id,staticClass:"col-4"},[s("img",{staticClass:"img-fluid",attrs:{src:e.src,alt:""}}),s("h2",[t._v(t._s(e.title))]),s("span",[t._v(t._s(e.date)+" | "+t._s(e.comments)+" Comments")]),s("p",[t._v(t._s(e.description))])])})),0)])},gt=[],_t={name:"Blog",data:function(){return{articles:[{id:34,src:s("0fc6"),title:"Aenean lobortis sapien enim viverra",date:"September 9th, 2015",comments:0,description:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,"},{id:35,src:s("ddd2"),title:"Duis ac massa semper maximus",date:"September 9th, 2015",comments:0,description:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,"},{id:36,src:s("7ad4"),title:"Nunc fermint nulla eu justo sem id",date:"September 9th, 2015",comments:0,description:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,"}]}}},ht=_t,bt=(s("f010"),Object(f["a"])(ht,vt,gt,!1,null,"0ed62b14",null)),yt=bt.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v(t._s(t.title))]),t._l(t.itemsList,(function(e){return s("div",{key:e.id,staticClass:"d-flex justify-content-between"},[s("div",[s("h4",[t._v(t._s(e.name))]),t._l(e.stars,(function(t){return s("i",{key:t,staticClass:"fas fa-star"})})),e.price===e.discounted?s("h4",{staticClass:"price"},[t._v(" "+t._s(e.price)+" ")]):s("h4",{staticClass:"price"},[s("span",[t._v(t._s(e.price))]),t._v(" "+t._s(e.discounted)+" ")])],2),s("div",[s("img",{attrs:{src:e.src,width:"100",alt:""}})])])}))],2)},jt=[],xt={name:"list",props:["title","itemsList"],data:function(){return{}}},kt=xt,$t=(s("9e28"),Object(f["a"])(kt,Ct,jt,!1,null,"1746b156",null)),wt=$t.exports,Ot={name:"Main",components:{Hero:T,TitleSection:H,Collection:J,Gallery:Q,ProductGallery:st,Offers:ot,Testimonials:mt,Blog:yt,List:wt},data:function(){return{imageListBestSellers:[{id:3,src:s("1e42"),title:"spring printed dress",categorys:["category1","category2"],price:"66$"},{id:4,src:s("e31e"),title:"modern love tee",categorys:["category1","category2"],price:"66$"},{id:5,src:s("438e"),title:"black leather jacket",categorys:["category1","category2"],price:"66$"},{id:6,src:s("3cf1"),title:"elegant leather jacket",categorys:["category1","category2"],price:"66$"},{id:7,src:s("a137"),title:"hipster black top",categorys:["category1","category2"],price:"66$"}],imageListNewArrivals:[{id:8,src:s("3cf1"),title:"elegant leather jacket",categorys:["category1","category2"],price:"66$"},{id:9,src:s("a137"),title:"hipster black top",categorys:["category1","category2"],price:"66$"},{id:10,src:s("8c68"),title:"modern love tee",categorys:["category1","category2"],price:"66$"},{id:11,src:s("1e42"),title:"spring printed dress",categorys:["category1","category2"],price:"66$"},{id:12,src:s("e31e"),title:"black leather jacket",categorys:["category1","category2"],price:"66$"}],featured:[{id:35,src:s("438e"),name:"black leather jacket",stars:0,price:"125$",discounted:"125$"},{id:36,src:s("3cf1"),name:"elegant leather jacket",stars:5,price:"235$",discounted:"200$"},{id:37,src:s("a137"),name:"hipster black top",stars:0,price:"57$",discounted:"57$"}],onSale:[{id:38,src:s("3cf1"),name:"elegant leather jacket",stars:5,price:"235$",discounted:"200$"},{id:39,src:s("dc4b"),name:"blue leather jacket",stars:0,price:"80$",discounted:"60$"},{id:40,src:s("61fd"),name:"modern leather boots",stars:0,price:"50$",discounted:"30$"}],topRated:[{id:41,src:s("1cda"),name:"leather gloves",stars:5,price:"45$",discounted:"45$"},{id:42,src:s("3cf1"),name:"elegant leather jacket",stars:5,price:"200$",discounted:"200$"},{id:43,src:s("1e42"),name:"spring printed dress",stars:5,price:"47$",discounted:"47$"}],reviews:[{id:44,src:s("3cf1"),name:"elegant leather jacket",stars:5,price:"by admin",discounted:"by admin"},{id:45,src:s("1cda"),name:"leather gloves",stars:5,price:"by beardman",discounted:"by beardman"},{id:46,src:s("1e42"),name:"spring printed dress",stars:5,price:"by admin",discounted:"by admin"}]}}},St=Ot,Lt=(s("0fa2"),Object(f["a"])(St,$,w,!1,null,"1a053f1c",null)),At=Lt.exports,Et={name:"App",components:{Header:k,Main:At}},Tt=Et,Pt=(s("5c0b"),Object(f["a"])(Tt,a,c,!1,null,null,null)),Nt=Pt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Nt)}}).$mount("#app")},"577f":function(t,e,s){},"5a38":function(t,e,s){},"5b9c":function(t,e,s){t.exports=s.p+"img/blue_jacket_and_white_stripe_tee.4857a35f.jpg"},"5c0b":function(t,e,s){"use strict";s("9c0c")},6111:function(t,e,s){"use strict";s("ea71")},"61fd":function(t,e,s){t.exports=s.p+"img/modern_leather_boots.6913bc17.jpg"},"6e00":function(t,e,s){"use strict";s("5a38")},"786e":function(t,e,s){"use strict";s("4b88")},"7ad4":function(t,e,s){t.exports=s.p+"img/post_img_10-700x441.61965f98.jpg"},"869a":function(t,e,s){},"89fe":function(t,e,s){t.exports=s.p+"img/avada-classic-shop-logo.3a1da824.svg"},"8c68":function(t,e,s){t.exports=s.p+"img/black_leather_suit.05b370fb.jpg"},"91ef":function(t,e,s){},9874:function(t,e,s){t.exports=s.p+"img/autumn_collection_bg.37a95e05.jpg"},"9c0c":function(t,e,s){},"9e28":function(t,e,s){"use strict";s("0a20")},a137:function(t,e,s){t.exports=s.p+"img/hipster_black_top.b4a02513.jpg"},a51f:function(t,e,s){"use strict";s("91ef")},b723:function(t,e,s){"use strict";s("869a")},b9c7:function(t,e,s){"use strict";s("d36d")},c2fd:function(t,e,s){},c43f:function(t,e,s){t.exports=s.p+"img/promo_box_2_bg.91084c5b.jpg"},d36d:function(t,e,s){},dc4b:function(t,e,s){t.exports=s.p+"img/blue_leather_jacket.ee970c88.jpg"},ddd2:function(t,e,s){t.exports=s.p+"img/post_img_11-700x441.d2aab60a.jpg"},e16c:function(t,e,s){t.exports=s.p+"img/woman_testimonial.9f789aef.png"},e31e:function(t,e,s){t.exports=s.p+"img/modern_love_tee.8010f606.jpg"},e6c8:function(t,e,s){t.exports=s.p+"img/spring_collection_bg.d6753326.jpg"},ea71:function(t,e,s){},ec2f:function(t,e,s){"use strict";s("577f")},f010:function(t,e,s){"use strict";s("f92f")},f92f:function(t,e,s){}});
//# sourceMappingURL=app.ca2f3af4.js.map