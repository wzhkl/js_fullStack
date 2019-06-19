webpackJsonp([1],{"34KM":function(t,s){},"8KNj":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i=e("woOf"),o=e.n(i),n={name:"Header",props:{seller:{type:Object}},data:function(){return{classMap:[],detailShow:!1}},created:function(){console.log(this.seller),this.classMap=["decrease","discount","guarantee","invoice","special"]},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"}),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{key:a,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var r={name:"App",data:function(){return{seller:{}}},components:{"v-header":e("VU/8")(n,l,!1,function(t){e("c0oA")},"data-v-7a050773",null).exports},created:function(){var t=this;this.$http.get("https://www.easy-mock.com/mock/5d00f528294a6f025a3f9920/vue-eleme-app/vue-eleme-app").then(function(s){console.log(s),0===s.data.errno&&(t.seller=o()({},t.seller,s.data.data))})}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]};var d=e("VU/8")(r,c,!1,function(t){e("fBC4")},null,null).exports,p=e("/ocq"),u=e("GQaK"),v={name:"cartcontrol",props:{food:{type:Object}},data:function(){return{}},methods:{addCart:function(t){console.log(t),t._constructed&&(this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit("add",t.target))},decreaseCart:function(){event._constructed&&this.food.count&&this.food.count--}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},staticRenderFns:[]};var h=e("VU/8")(v,_,!1,function(t){e("8KNj")},null,null).exports,f={name:"Goods",props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0}},components:{cartcontrol:h},methods:{selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodList[t];this.foodsScroll.scrollToElement(e,300)}},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},addFood:function(t){this._drop(t)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},_initScroll:function(){var t=this;this.meunScroll=new u.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new u.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y)),console.log(s),console.log(t.scrollY)})},_calculateHeight:function(){var t=this.$refs.foodList,s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$http.get("https://www.easy-mock.com/mock/5d00f528294a6f025a3f9920/vue-eleme-app/goods").then(function(s){0===s.data.errno&&(t.goods=s.data.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){return t.selectMenu(a,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v("\n            "+t._s(s.name)+"\n          ")])])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,ref:"foodList",refInFor:!0,staticClass:"food-list"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,a){return e("li",{key:a,staticClass:"food-item border-1px",on:{click:function(s){return t.selectFood(a,s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,alt:"",width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])])])])}),0)])}),0)])])])},staticRenderFns:[]};var m=e("VU/8")(f,C,!1,function(t){e("SVD1")},null,null).exports;a.a.use(p.a);var w=new p.a({routes:[{path:"/",name:"Goods",component:m},{path:"/goods",name:"Goods",component:m}]}),g=e("mtWM"),k=e.n(g);e("34KM");a.a.config.productionTip=!1,a.a.prototype.$http=k.a,new a.a({el:"#app",router:w,components:{App:d},template:"<App/>"})},SVD1:function(t,s){},c0oA:function(t,s){},fBC4:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.9cbf34d645b66e895bad.js.map