(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e2f7e56"],{"03ee":function(t,e,s){"use strict";s("435a")},"0d2a":function(t,e,s){},1148:function(t,e,s){"use strict";var i=s("a691"),a=s("1d80");t.exports=function(t){var e=String(a(this)),s="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(s+=e);return s}},"182b":function(t,e,s){"use strict";s("7015")},2424:function(t,e,s){},"28c5":function(t,e,s){},"363b":function(t,e,s){"use strict";s("a68a")},"3cea":function(t,e,s){},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"435a":function(t,e,s){},4724:function(t,e,s){"use strict";s("28c5")},"510e":function(t,e,s){},"56c8":function(t,e,s){"use strict";s("c564")},6451:function(t,e,s){"use strict";s("2424")},"6ab7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),s("detail-param-info",{ref:"params",attrs:{"param-info":t.paramInfo}}),s("detail-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),s("detail-recommend-info",{ref:"recommend",attrs:{"recommend-info":t.recommendInfo}})],1),s("detail-bottom-bar",{on:{addCart:t.addToCart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},a=[],n=s("ade3"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s("7a74"),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{key:e,staticClass:"title-item",class:{active:s===t.currentIndex},on:{click:function(e){return t.titleClick(s)}}},[t._v(t._s(e))])})),0)])],1)},c=[],r=s("a7ac"),l={name:"DetailNavBar",data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},components:{NavBar:r["a"]},methods:{titleClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick:function(){this.$router.back()}}},f=l,d=(s("363b"),s("2877")),u=Object(d["a"])(f,o,c,!1,null,"72d2b5e4",null),m=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"detail-item"},t._l(t.topImages,(function(t){return s("swiper-item",{key:t},[s("img",{attrs:{src:t,alt:""}})])})),1)},h=[],v=s("dc2c"),_={name:"DetailSwiper",components:{Swiper:v["a"],SwiperItem:v["b"]},props:{topImages:{type:Array,defalut:function(){return[]}}}},g=_,C=(s("4724"),Object(d["a"])(g,p,h,!1,null,"70e48455",null)),b=C.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},k=[],w={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},y=w,x=(s("a52b"),Object(d["a"])(y,I,k,!1,null,"d04f4fee",null)),T=x.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],j=(s("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),D=j,S=(s("c436"),Object(d["a"])(D,O,$,!1,null,"b08c8372",null)),B=S.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),t._l(t.detailInfo.detailImage,(function(e,i){return s("div",{key:i},[s("div",{staticClass:"info-key"},[t._v(t._s(e.key))]),s("div",{staticClass:"info-list"},t._l(e.list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imgLoad}})})),0)])}))],2):t._e()},P=[],Y={name:"DetailGoodsInfo",props:{detailInfo:{type:Object}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){++this.counter===this.imagesLength&&this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},F=Y,L=(s("6cd5"),Object(d["a"])(F,E,P,!1,null,"6f90fdfa",null)),N=L.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",{key:i},[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},z=[],A={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},G=A,M=(s("9c6e"),Object(d["a"])(G,R,z,!1,null,"90d729f2",null)),J=M.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info-wrap"},[t._m(0),t._l(t.commentInfo,(function(e,i){return s("div",{key:i},[s("div",{staticClass:"comment-user-info"},[s("span",[s("img",{staticClass:"avatar",attrs:{src:e.user.avater}})]),s("span",[t._v(t._s(e.user.uname))])]),s("div",{staticClass:"comment-text"},[t._v(t._s(e.content))]),s("div",{staticClass:"comment-goods-info"},[s("span",{staticClass:"comment-time"},[t._v(t._s(t._f("showDate")(e.created)))]),s("span",[t._v(t._s(e.style))])]),s("div",{staticClass:"flex"},t._l(e.images,(function(t,e){return s("div",{key:e,staticClass:"comment-info-images"},[s("img",{attrs:{src:t,alt:""}})])})),0)])}))],2):t._e()},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment-title flex"},[s("div",[t._v("用户评价")]),s("div",[t._v("更多")])])}],H=s("90b9"),K={name:"DetailCommentInfo",props:{commentInfo:{type:Array,default:function(){return[]}}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(H["b"])(e,"yyyy-MM-dd")}}},Q=K,U=(s("03ee"),Object(d["a"])(Q,W,q,!1,null,"1a0afe0e",null)),V=U.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"heihu-wrapper"},t._l(t.recommendInfo,(function(e,i){return s("div",{key:i,staticClass:"heihu clearfix"},[s("img",{attrs:{src:e.image,alt:""}}),s("div",{staticClass:"goods-info"},[s("p",[t._v(t._s(e.title))]),s("span",{staticClass:"price"},[t._v(t._s(e.price))]),s("span",{staticClass:"collect"},[t._v(t._s(e.cfav))])])])})),0)},Z=[],tt={name:"DetailRecommendInfo",props:{recommendInfo:{type:Array,default:function(){return[]}}}},et=tt,st=(s("182b"),Object(d["a"])(et,X,Z,!1,null,"32460143",null)),it=st.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],ot={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addCart")}}},ct=ot,rt=(s("6451"),Object(d["a"])(ct,at,nt,!1,null,"07c48e4b",null)),lt=rt.exports,ft=s("5762");function dt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}s("b0c0");var ut=s("1bab");function mt(t){return Object(ut["a"])({url:"/detail",params:{iid:t}})}var pt=function t(e,s,i){dt(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.newPrice,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.realPrice=e.lowNowPrice,this.columns=s,this.services=i,this.realPrice=e.lowNowPrice};function ht(){return Object(ut["a"])({url:"/recommend"})}var vt,_t=function t(e){dt(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},gt=function t(e,s){dt(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},Ct=s("ace8"),bt=s("5d17"),It={name:"Detail",data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:[],recommendInfo:[],themeTopYs:[],getThemeTopY:null,currentIndex:0,isShowBackTop:!1,message:"",show:!1}},components:(vt={DetailNavBar:m,DetailSwiper:b,DetailBaseInfo:T,DetailShopInfo:B,Scroll:bt["a"],Swiper:Ct["a"]},Object(n["a"])(vt,"Scroll",bt["a"]),Object(n["a"])(vt,"DetailGoodsInfo",N),Object(n["a"])(vt,"DetailParamInfo",J),Object(n["a"])(vt,"DetailCommentInfo",V),Object(n["a"])(vt,"DetailRecommendInfo",it),Object(n["a"])(vt,"DetailBottomBar",lt),Object(n["a"])(vt,"BackTop",ft["a"]),vt),created:function(){var t=this;this.iid=this.$route.params.iid,mt(this.iid).then((function(e){var s=e.result;console.log(s),t.topImages=s.itemInfo.topImages,t.goods=new pt(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new _t(s.shopInfo),t.detailInfo=s.detailInfo,t.paramInfo=new gt(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list)})),ht().then((function(e){t.recommendInfo=e.data.list})),this.getThemeTopY=Object(H["a"])((function(){t.themeTopYs=[],t.themeTopYs.push(0),t.themeTopYs.push(t.$refs.params.$el.offsetTop),t.themeTopYs.push(t.$refs.comment.$el.offsetTop),t.themeTopYs.push(t.$refs.recommend.$el.offsetTop)}))},methods:{imageLoad:function(){this.$refs.scroll.refresh(),this.getThemeTopY()},addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.realPrice,e.iid=this.iid,this.$store.dispatch("addCart",e).then((function(e){console.log(e),t.$toast.show(e,1e3)}))},backClick:function(){this.$refs.scroll.scrollTo(0,0,500)},titleClick:function(t){this.$refs.scroll.scrollTo(0,44-this.themeTopYs[t],200)},contentScroll:function(t){var e=-t.y,s=this.themeTopYs.length;this.isShowBackTop=-t.y>1e3;for(var i=0;i<s;i++)this.currentIndex!==i&&(i<s-1&&e>=this.themeTopYs[i]-44&&e<this.themeTopYs[i+1]-44||i===s-1&&e>=this.themeTopYs[i]-44)&&(this.currentIndex=i,console.log(this.currentIndex),this.$refs.nav.currentIndex=this.currentIndex)}},mounted:function(){}},kt=It,wt=(s("56c8"),Object(d["a"])(kt,i,a,!1,null,"79b9d767",null));e["default"]=wt.exports},"6cd5":function(t,e,s){"use strict";s("0d2a")},7015:function(t,e,s){},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"8c53":function(t,e,s){},"9c6e":function(t,e,s){"use strict";s("510e")},a52b:function(t,e,s){"use strict";s("3cea")},a68a:function(t,e,s){},b680:function(t,e,s){"use strict";var i=s("23e7"),a=s("a691"),n=s("408a"),o=s("1148"),c=s("d039"),r=1..toFixed,l=Math.floor,f=function(t,e,s){return 0===e?s:e%2===1?f(t,e-1,s*t):f(t*t,e/2,s)},d=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},u=function(t,e,s){var i=-1,a=s;while(++i<6)a+=e*t[i],t[i]=a%1e7,a=l(a/1e7)},m=function(t,e){var s=6,i=0;while(--s>=0)i+=t[s],t[s]=l(i/e),i=i%e*1e7},p=function(t){var e=6,s="";while(--e>=0)if(""!==s||0===e||0!==t[e]){var i=String(t[e]);s=""===s?i:s+o.call("0",7-i.length)+i}return s},h=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){r.call({})}));i({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,s,i,c,r=n(this),l=a(t),h=[0,0,0,0,0,0],v="",_="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(v="-",r=-r),r>1e-21)if(e=d(r*f(2,69,1))-69,s=e<0?r*f(2,-e,1):r/f(2,e,1),s*=4503599627370496,e=52-e,e>0){u(h,0,s),i=l;while(i>=7)u(h,1e7,0),i-=7;u(h,f(10,i,1),0),i=e-1;while(i>=23)m(h,1<<23),i-=23;m(h,1<<i),u(h,1,1),m(h,2),_=p(h)}else u(h,0,s),u(h,1<<-e,0),_=p(h)+o.call("0",l);return l>0?(c=_.length,_=v+(c<=l?"0."+o.call("0",l-c)+_:_.slice(0,c-l)+"."+_.slice(c-l))):_=v+_,_}})},c436:function(t,e,s){"use strict";s("8c53")},c564:function(t,e,s){}}]);
//# sourceMappingURL=chunk-5e2f7e56.bb08e612.js.map