webpackJsonp([1],{"3Dbq":function(t,e){},"9n10":function(t,e){},KR3g:function(t,e){},LQPI:function(t,e){},LqZj:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("MVMM"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("vSla")({name:"App"},n,!1,function(t){i("QZgr")},null,null).exports,r=i("zO6J"),c=i("4YfN"),o=i.n(c),l=i("9rMa"),d={name:"HomeHeader",data:function(){return{city_2:this.city}},computed:o()({localComputed:function(){return"_"}},Object(l.d)({cityAlias:"city",citycomputed:function(t){return this.localComputed+t.city+"_"}}),Object(l.b)({getcity_:"getcity_"})),props:{city:{type:String}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n       "+t._s(this.cityAlias)+"\n       "),t._v(" "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n   搜索内容\n ")])}]};var p=i("vSla")(d,u,!1,function(t){i("yLkC")},"data-v-254e0911",null).exports,h={name:"HomeSwiper",data:function(){return{swiperOptionimg:{pagination:".swiper-pagination",loop:!0},swiperList_2:this.swiperList,swiperList2:[{id:1,imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg"},{id:2,imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg"}]}},computed:{showlist:function(){return this.swiperList.length}},props:{swiperList:{type:Array}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showlist?e("swiper",{attrs:{options:this.swiperOptionimg}},[this._l(this.swiperList,function(t,i){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swipe-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var f=i("vSla")(h,m,!1,function(t){i("Tt5i")},"data-v-93828c34",null).exports,v={name:"HomeIcons",data:function(){return{swiperOptionicon:{pagination:".swiper-pagination-icon",loop:!0},iconList2:[{id:5,desc:"全部玩乐",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png"},{id:1,desc:"景点门票",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"},{id:3,desc:"一日游",imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"},{id:4,desc:"自然风光",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png"},{id:2,desc:"踏青赏花",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"}]}},props:{iconList:{type:Array}},computed:{iconlistpage:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/5);t[s]||(t[s]=[]),t[s].push(e)}),t}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOptionicon}},t._l(t.iconlistpage,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",staticStyle:{opacity:"1"},attrs:{src:e.imgUrl,alt:"景点门票"}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(" "+t._s(e.desc)+" ")])])}))}))],1)},staticRenderFns:[]};var _=i("vSla")(v,g,!1,function(t){i("e7pX")},"data-v-62a7b917",null).exports,y={name:"HomeRemcommend",data:function(){return{recommendList2:[{id:"0001",imgUrl:"http://img1.qunarzz.com/sight/p0/1505/c2/c27514a93e8b8392.water.jpg_200x200_6adee98c.jpg",title:"东江湖",desc:"东江湖融山的隽秀、水的神韵于一体，挟南国秀色、禀历史文明于一身，被誉为“人间天上一湖水，万千景象在其中”，"},{id:"0002",imgUrl:"http://img1.qunarzz.com/sight/p0/1804/ac/ac790af10ea8bc64a3.img.jpg_200x200_4f8703c0.jpg",title:"湖南九龙江国家森林公园",desc:"湖南省九龙江森林公园（以下简称九龙江公园）位于郴州市汝城县东南部，地处湘、粤、赣三省交界的旅游金三角地带，总面积8436.3公顷（含热水温泉景区510公顷），东西宽12.1公里，南北长11公里，分为九龙觅仙、九龙戏水、九龙奇岩、九龙飞瀑和热水温泉五大景区。公园管理局设三江口，距汝城县城30公里。公园北大门距离在建的厦蓉高速公路出口不足10公里，106国道和深湘高速公路穿境而过。周边旅游资源丰富，南临广东丹霞山，西毗莽山森林公园，北接资兴东江漂流、革命摇篮井冈山和中华始祖炎帝陵，地理条件得天独厚，区域优势十分明显。"},{id:"0004",imgUrl:"http://img1.qunarzz.com/sight/p0/201301/07/5b230b0483fae5cc93835fbb.png_200x200_8972faf5.png",title:"板梁古村",desc:"板梁古村位于湖南省郴州市永兴县高亭乡境内，现有人口1886人，耕地面积1260亩，一个自然村布局，辖19个村民小组，村民以种粮、种烤烟为业，生活传统古朴。"},{id:"0005",imgUrl:"http://img1.qunarzz.com/sight/p0/201403/07/8c6f02bb85c3ac02d323ceb768a112a7.jpg_200x200_44fd0198.jpg",title:"汝城温泉福泉山庄",desc:"通过石板制热产生对人体有益的物质，直接作用于人体，缓解腰腿疼痛，关节痛。给你不同于泉水的感受。 “一热”、 “一冷”、 “一烤”，强身健体。体会冰火两重天，收获一份健康。"},{id:"0006",imgUrl:"http://img1.qunarzz.com/sight/p0/201401/20/95dfbe0be2079061eb079f824862c192.jpg_200x200_0acf5287.jpg",title:"万华岩",desc:"溶洞景观岩石无论大小，处处雄风大气，阳刚十足，赤壁倒悬，险峻无比，造型奇绝，特色鲜明。"},{id:"0007",imgUrl:"http://img1.qunarzz.com/sight/p0/1505/f8/f8d2c784ab7dae78.water.jpg_200x200_8b0eaa14.jpg",title:"莽山森林温泉",desc:"首创东南亚超大豪华型空中SPA馆——诺亚方舟，让您拥有在悬崖上泡温泉的奇妙感受。错落分布的养生泉系列：百草泉、百花泉、香酒泉、香茶泉等六个泉池。以莽山当地中草药及百花为养生泡汤，以调节阴阳平衡，处于自然风光如画的绝佳位置，风光无限。"},{id:"0003",imgUrl:"http://img1.qunarzz.com/sight/p0/201301/14/986ce8718388386993835fbb.jpg_200x200_213a9152.jpg",title:"飞天山",desc:"位于郴州市苏仙区桥口镇境内，距郴州市城区约20公里，交通极为便捷。东江、郴江在这里交汇，千山万壑，云蒸霞蔚，翠竹葱茏，凉风习习，天低云淡，渔船点点，尤如梦中仙境，画里天堂！风景区由九寨，四垣、三庙、二江、一村站组成。红山绿水、秀峰险寨、奇石怪洞构成的自然景观和村宅街巷、石佛庙宇、陵墓悬棺等历史奇观，以及度假山庄、蒙古风情、水上乐园等人文景观，使之成为独具魅力的旅游胜地。被誉为“郴州明珠湘南桂林”。飞天山风景区属丹霞地貌，世界奇观”的黑垣。风景区内，奇峰异石，青山秀水，湖光山色，壮美迷人。沿江周围，石山林立，玉峰相接，连绵数十公里。更有千年悬棺，旷世之谜；临江佛雕，飞天壁画；天然卧佛，悠悠古迹；丹霞溶洞，神秘窝居；明清古墓，狮子吊陵；高山草原，圣母玉立……真是福地洞天，风观无限！风景区集自然、历史、人物奇观为一体，纳奇、险、秀、美于一身，令人流连忘返陶醉于山水之间，乐不思归！"}]}},props:{recommendList:{type:Array}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var w=i("vSla")(y,C,!1,function(t){i("bX3A")},"data-v-044daadc",null).exports,b={name:"HomeWeekend",data:function(){return{weekendList2:[{id:"0001",imgUrl:"http://img1.qunarzz.com/sight/source/1606/35/177a89a2b3a1e5.jpg_r_640x214_ba0ef2d4.jpg",title:"清凉撒欢好去处",desc:"这个夏天，周边消暑好去处"},{id:"0002",imgUrl:"http://img1.qunarzz.com/sight/source/1505/ae/11f076c6cb7c47.jpg_r_640x214_6f643489.jpg",title:"张家界必游TOP10",desc:"到张家界最值得游玩的地方"},{id:"0003",imgUrl:"http://img1.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg",title:"长沙必游TOP10",desc:"到了长沙，一定要到这些地方走走"},{id:"0004",imgUrl:"http://img1.qunarzz.com/sight/source/1603/56/33894ef918e1a8.jpg_r_640x214_a9de6b4e.jpg",title:"湘西必游TOP10",desc:"神奇山水风光，浓郁民俗风情"},{id:"0005",imgUrl:"http://img1.qunarzz.com/sight/source/1505/39/d61194f054f1f4.jpg_r_640x214_03da9c61.jpg",title:"这里是休闲天堂",desc:"游仙，忘情，休性，问踪"}]}},props:{weekendList:{type:Array}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item"},[i("div",{staticClass:"item-img-wraper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var x=i("vSla")(b,k,!1,function(t){i("LqZj")},"data-v-e337622e",null).exports,S=i("2sCs"),j=i.n(S),z={name:"Home",components:{HomeHeader:p,HomeIcons:_,HomeSwiper:f,HomeWeekend:x,HomeRemcommend:w},data:function(){return{lastcity:"",city:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:o()({},Object(l.d)({citycrunt:"city"})),methods:{getHomeInfo:function(){console.log("home-------"),j.a.get("./api/index.json?city="+this.citycrunt).then(this.getHomeInfoSucess).catch(function(t){console.log(t)})},getHomeInfoSucess:function(t){var e=t.data;e.ret&&e.city&&(this.city=e.city,this.swiperList=e.data.swiperList,this.iconList=e.data.iconList,this.recommendList=e.data.recommendList,this.weekendList=e.data.weekendList)}},mounted:function(){console.log("mounted"),this.lastcity=this.citycrunt,this.getHomeInfo()},activated:function(){console.log("activated"),this.lastcity!==this.citycrunt&&(this.lastcity=this.citycrunt,this.getHomeInfo())}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header",{attrs:{city:t.citycrunt}}),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-remcommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var $=i("vSla")(z,L,!1,function(t){i("oVc1")},null,null).exports,q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var E=i("vSla")({name:"CityHeader"},q,!1,function(t){i("3Dbq")},"data-v-61c7c4a6",null).exports,A=i("Z83e"),I={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:o()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.c)(["changeCity"])),mounted:function(){this.scroll=new A.a(this.$refs.search,{mouseWheel:!0,click:!0,tap:!0})}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e,s){return i("li",{key:e.id,staticClass:"search-item border-buttom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-buttom"},[t._v("\n          没有找到匹配数据\n      ")])],2)])])},staticRenderFns:[]};var O=i("vSla")(I,T,!1,function(t){i("LQPI")},"data-v-cf054b20",null).exports,U={name:"CityList",props:{hot:Array,cities:Object,city:String,letter:Object},computed:o()({},Object(l.d)({currentCity:"city"})),methods:o()({handleCityClick:function(t,e){this.changeCity(e),this.$router.push("/")}},Object(l.c)(["changeCity"])),watch:{letter:function(t,e){if(this.letter=t,t){var i=this.$refs[this.letter.key][0];this.scroll.scrollToElement(i)}}},mounted:function(){this.scroll=new A.a(this.$refs.wrapperlistcity,{mouseWheel:!0,click:!0,tap:!0})}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapperlistcity",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list "},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v("\n            "+t._s(this.currentCity)+"\n\n          ")])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list "},t._l(t.hot,function(e,s){return i("div",{key:e.id,staticClass:"button-wrapper"},[i("div",{staticClass:"button",on:{click:function(i){t.handleCityClick(i,e.name)}}},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s,n){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),t._l(e,function(e,s){return i("div",{key:e.id,staticClass:"item-list ",on:{click:function(i){t.handleCityClick(i,e.name)}}},[i("div",{staticClass:"item border-bottom"},[t._v(t._s(e.name))])])})],2)})],2)])},staticRenderFns:[]};var H=i("vSla")(U,F,!1,function(t){i("z/40")},"data-v-228977c8",null).exports,R={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t,e,i){this.$emit("clickAlphabet",{key:e,index:i})},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t,e){var i=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=t.touches[0].clientY-79,s=Math.floor((e-i.startY)/20);s>=0&&s<i.letters.length&&i.$emit("clickAlphabet",{key:i.letters[s],index:s})},16))},handleTouchEnd:function(){this.touchStatus=!1}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e,s){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:function(i){t.handleTouchMove(i,e)},touchend:t.handleTouchEnd,click:function(i){t.handleLetterClick(i,e,s)}}},[t._v(t._s(e))])}))},staticRenderFns:[]};var N={name:"City",components:{CityHeader:E,CitySearch:O,CityList:H,CityAlphabet:i("vSla")(R,D,!1,function(t){i("U5ia")},"data-v-679a5754",null).exports},data:function(){return{cities:{},hotCities:[],city:"",letter:{key:"A",index:"0"}}},methods:{getCityInfo:function(){j.a.get("./api/city.json").then(this.handleGetCityInfoSucc).catch(function(t){console.log(t)})},handleGetCityInfoSucc:function(t){if(console.log(t),(t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.city=t.city,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hot:t.hotCities,cities:t.cities,city:this.$store.state.city,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{clickAlphabet:t.handleLetterChange}})],1)},staticRenderFns:[]};var M=i("vSla")(N,G,!1,function(t){i("eoOz")},"data-v-3df66788",null).exports,P={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{show:!1,swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",loop:!0,observeParents:!0,observer:!0},imgss:["http://img1.qunarzz.com/sight/p0/1501/d0/d00d72664c3e73d8.water.jpg_350x240_4d2c58d5.jpg","http://img1.qunarzz.com/sight/p0/1501/6d/6da2214f48a9e93a.water.jpg_350x240_34c0c85f.jpg","http://img1.qunarzz.com/sight/p0/201403/07/e706489fc18be7f211e6f0d55ecc48cf.jpg_350x240_24b831cd.jpg","http://img1.qunarzz.com/sight/p0/1501/d6/d68473e407962ff3.water.jpg_350x240_a83cd4a3.jpg","http://img1.qunarzz.com/sight/p0/201403/07/96082a4d84c8656e3be740f67bcd70ce.jpg_350x240_c5796659.jpg"]}},methods:{handleGallaryClick:function(){this.$emit("close")}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var Y=i("vSla")(P,B,!1,function(t){i("V2E2")},"data-v-51f1bf2d",null).exports,Q={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var V=i("vSla")({name:"FadeAnimation"},Q,!1,function(t){i("b8FQ")},"data-v-3373710a",null).exports,X={name:"DetailBanner",props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{showGallary:!1,imgs:["http://img1.qunarzz.com/sight/p0/1501/d0/d00d72664c3e73d8.water.jpg_350x240_4d2c58d5.jpg","http://img1.qunarzz.com/sight/p0/1501/6d/6da2214f48a9e93a.water.jpg_350x240_34c0c85f.jpg","http://img1.qunarzz.com/sight/p0/201403/07/e706489fc18be7f211e6f0d55ecc48cf.jpg_350x240_24b831cd.jpg","http://img1.qunarzz.com/sight/p0/1501/d6/d68473e407962ff3.water.jpg_350x240_a83cd4a3.jpg","http://img1.qunarzz.com/sight/p0/201403/07/96082a4d84c8656e3be740f67bcd70ce.jpg_350x240_c5796659.jpg"]}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:Y,FadeAnimation:V}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:"北京天文馆"}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-tittle"},[t._v(t._s(t.sightName))]),t._v(" "),t._m(0)])]),t._v(" "),i("fade-animation",[t.showGallary?i("common-gallary",{attrs:{imgs:t.imgs},on:{close:t.handleGallaryClose}}):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n        39\n      ")])}]};var J=i("vSla")(X,Z,!1,function(t){i("YnJS")},"data-v-c7908480",null).exports,W={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0},opacityStyle2:{opacity:1}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop,e=document.body.scrollTop;if(0!=e&&(t=e),t>60){var i=t/140;i=i>1?1:i,this.opacityStyle={opacity:i},this.showAbs=!1}else{var s=t/30;s=s>1?1:s,this.opacityStyle2={opacity:1-s},s>.6&&(this.opacityStyle2={opacity:1-s+.1}),this.showAbs=!0}}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",style:t.opacityStyle2,attrs:{tag:"div",to:"/"}},[i("span",{staticClass:"iconfont header-abs-back"},[t._v("")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont header-fixed-back"},[t._v("")])]),t._v("\n      景点详情\n    ")],1)],1)},staticRenderFns:[]};var tt=i("vSla")(W,K,!1,function(t){i("qwcg")},"data-v-4ad82411",null).exports,et={name:"DetailList",props:{list:Array}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-chilren"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var st={name:"Detail",components:{DetailBanner:J,DetailHeader:tt,DetailList:i("vSla")(et,it,!1,function(t){i("qp93")},"data-v-192a901b",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[{title:"成人票",children:[{title:"成人三馆联票",children:[{title:"成人三馆联票 - 某一连锁店销售"}]},{title:"成人五馆联票"}]},{title:"学生票"},{title:"儿童票"},{title:"特惠票"}]}},methods:{getDetailInfo:function(){j.a.get("./api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},nt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,bannerImgs:t.gallaryImgs}}),t._v(" "),i("detail-header"),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1)],1)},staticRenderFns:[]};var at=i("vSla")(st,nt,!1,function(t){i("KR3g")},"data-v-bee0ae38",null).exports;s.a.use(r.a);var rt=new r.a({routes:[{path:"/",name:"Home",component:$},{path:"/city",name:"city",component:M},{path:"/detail/:id",name:"Detail",component:at}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ct=i("iDdd"),ot=i.n(ct),lt=i("41jX"),dt=i.n(lt),ut=(i("briU"),"上海");try{localStorage.city&&(ut=localStorage.city)}catch(t){}var pt={city:ut},ht={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var mt=new l.a.Store({state:pt,getters:{getcity_:function(t){return t.city+"_"}},mutations:ht,actions:{changeCity_a:function(t,e){t.commit("changeCity",e)}}});i("9n10"),i("M6Sr"),i("TzC8"),i("aEDl");s.a.config.productionTip=!1,ot.a.attach(document.body),s.a.use(dt.a),new s.a({el:"#app",router:rt,store:mt,components:{App:a},template:"<App/>"})},QZgr:function(t,e){},Tt5i:function(t,e){},TzC8:function(t,e){},U5ia:function(t,e){},UGy7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("vSla")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},V2E2:function(t,e){},YnJS:function(t,e){},aEDl:function(t,e){},b8FQ:function(t,e){},bX3A:function(t,e){},e7pX:function(t,e){},eoOz:function(t,e){},oVc1:function(t,e){},qp93:function(t,e){},qwcg:function(t,e){},syvT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("Bnvi"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("vSla")(n,a,!1,null,null,null);e.default=r.exports},yLkC:function(t,e){},"z/40":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ea10cb9010e060ad2955.js.map