(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return l.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,l=(n=r(459))&&n.__esModule?n:{default:n};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=c;t.len=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,l.default)({type:e},(function(e){return!c(e)||t.test(e)}))}},457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return A.default}}),t.helpers=void 0;var n=k(r(458)),l=k(r(461)),o=k(r(462)),c=k(r(463)),f=k(r(464)),d=k(r(465)),v=k(r(466)),m=k(r(467)),_=k(r(468)),y=k(r(469)),h=k(r(470)),w=k(r(471)),P=k(r(472)),C=k(r(473)),x=k(r(474)),O=k(r(475)),j=k(r(476)),M=k(r(477)),$=k(r(478)),S=k(r(479)),A=k(r(480)),z=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(456));function k(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},458:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},459:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(460).withParams:r(355).withParams;t.default=n}).call(this,r(117))},460:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},l=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=l}).call(this,r(48))},461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},462:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("numeric",/^[0-9]*$/);t.default=n},463:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},464:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},465:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456),l=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=l;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},466:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(l)}))};var l=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},467:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456),l=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=l},470:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},472:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},473:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},474:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},475:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},478:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},479:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},481:function(e,t,r){"use strict";var n={props:["gallery"],data:function(){return{swiperOption:{slidesPerView:1},swiperThumbnailOption:{slidesPerView:7,spaceBetween:15,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},mounted:function(){this.mainSwiper.controller.control=this.thumbnailSwiper,this.thumbnailSwiper.controller.control=this.mainSwiper,console.log("swiper main >>> ",this.mainSwiper.controller.control),console.log("swiper thumbnail >>> ",this.thumbnailSwiper.controller.control)}},l=r(39),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"slider-thumbnails"},[r("div",{staticClass:"product-slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mainSwiper",value:e.swiperOption,expression:"swiperOption",arg:"mainSwiper"}],staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},e._l(e.gallery,(function(img,e){return r("div",{key:e,staticClass:"swiper-slide"},[r("div",{staticClass:"product-img"},[r("img",{attrs:{src:img,alt:""}})])])})),0)])]),e._v(" "),r("div",{staticClass:"thumbnails"},[r("div",{staticClass:"product-thumbnails"},[r("div",{staticClass:"slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:thumbnailSwiper",value:e.swiperThumbnailOption,expression:"swiperThumbnailOption",arg:"thumbnailSwiper"}],staticClass:"swiper arrow-secondary"},[r("div",{staticClass:"swiper-wrapper"},e._l(e.gallery,(function(img,e){return r("div",{key:e,staticClass:"swiper-slide"},[r("div",{staticClass:"thumbnail"},[r("img",{attrs:{src:img,alt:""}})])])})),0),e._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{staticStyle:{transform:"rotate(180deg)"},attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})]),e._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:"/images/icons/svg/offers-arrow.svg",alt:""}})])])])])])])}),[],!1,null,null,null);t.a=component.exports},580:function(e,t,r){"use strict";r.r(t);r(58);var n=r(21),l=(r(16),r(481)),o=r(457),c={components:{appSliderThumbnails:l.a},data:function(){return{item:{},auction:{},deal:"",price:""}},validations:{price:{required:o.required,decimal:o.decimal,exact:function(e){return""==e||e>=this.auction.increment_value}},deal:{required:o.required,numeric:o.numeric}},computed:{currSymbol:function(){return this.$store.getters["currency/symbol"]}},fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},f=r(39),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"single-buy-page"},[r("div",{staticClass:"container"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("subnav.home")))])],1),e._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("subnav.buysell")))])],1),e._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("subnav.catename")))])],1),e._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(e._s(e.$t("subnav.apple")))])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8"},[r("app-slider-thumbnails",{attrs:{gallery:e.item.gallery}}),e._v(" "),r("div",{staticClass:"details"},[r("div",{staticClass:"head"},[r("h3",[e._v(e._s(e.item.title))]),e._v(" "),r("p",{staticClass:"price"},[e._v(e._s(e.currSymbol)+e._s(e.item.price))])]),e._v(" "),r("div",{staticClass:"desc"},[r("p",[e._v(e._s(e.item.description))])])])],1),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"vendor-profile"},[r("div",{staticClass:"info"},[r("img",{attrs:{src:e.item.seller?e.item.seller:"/images/placeholder.jpg",alt:""}}),e._v(" "),r("div",{staticClass:"name"},[r("h5",[e._v(e._s(e.item.seller)+" "+e._s(e.item.seller))])])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"contacts"},[e.item.seller?r("div",{staticClass:"row no-gutters"},[e._m(0),e._v(" "),r("div",{staticClass:"col-1"}),e._v(" "),r("div",{staticClass:"col-10"},[r("p",[e._v(e._s(e.item.seller))])])]):e._e(),e._v(" "),e.item.seller?r("div",{staticClass:"row no-gutters"},[e._m(1),e._v(" "),r("div",{staticClass:"col-1"}),e._v(" "),r("div",{staticClass:"col-10"},[r("p",[e._v(e._s(e.item.seller))])])]):e._e(),e._v(" "),e.item.seller?r("div",{staticClass:"row no-gutters"},[e._m(2),e._v(" "),r("div",{staticClass:"col-1"}),e._v(" "),r("div",{staticClass:"col-10"},[r("p",[e._v(e._s(e.item.seller))])])]):e._e()])]),e._v(" "),e._m(3),e._v(" "),r("div",{staticClass:"offer"},[r("div",{staticClass:"head"},[r("h3",[e._v(e._s(e.$t("vip.pace_an")))]),e._v(" "),r("img",{attrs:{src:"/images/icons/svg/question.svg",alt:""}})]),e._v(" "),r("form",{on:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],staticClass:"form-control \n                                form-control-lg",class:{invalid:e.$v.price.$error},attrs:{type:"text",placeholder:"Place Offer",id:"offer"},domProps:{value:e.price},on:{input:[function(t){t.target.composing||(e.price=t.target.value)},function(t){return e.$v.price.$touch()}]}}),e._v(" "),r("small",{staticClass:"form-text text-muted"},[r("span",[e._v("offer Bid "+e._s(e.currSymbol)+e._s(e.auction.increment_value)+" or more")])])]),e._v(" "),r("div",{staticClass:"submit-btn"},[r("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v(e._s(e.$t("vip.submit")))])])])]),e._v(" "),e._m(4)])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-1"},[t("img",{attrs:{src:"/images/icons/svg/phone.svg",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-1"},[t("img",{staticClass:"mail",attrs:{src:"/images/icons/svg/mail.svg",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-1"},[t("img",{attrs:{src:"/images/icons/svg/location.svg",alt:""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"price-info"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("div",{staticClass:"higher"},[r("div",{staticClass:"price"},[r("span",[e._v("$10000")]),e._v(" "),r("img",{attrs:{src:"/images/icons/svg/buy-arrow-up.svg",alt:""}})]),e._v(" "),r("p",[e._v("Higher Price")]),e._v(" "),r("span",{staticClass:"date"},[e._v("18 May 2020, 2:30 PM")])])]),e._v(" "),r("div",{staticClass:"col-6"},[r("div",{staticClass:"lower"},[r("div",{staticClass:"price"},[r("span",[e._v("$10000")]),e._v(" "),r("img",{attrs:{src:"/images/icons/svg/buy-arrow-down.svg",alt:""}})]),e._v(" "),r("p",[e._v("Lower Price")]),e._v(" "),r("span",{staticClass:"date"},[e._v("18 May 2020, 2:30 PM")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"log"},[t("h3",[this._v("Price Log")]),this._v(" "),t("div",{staticClass:"bid"},[t("span",{staticClass:"name"},[this._v("Ali")]),this._v(" "),t("span",{staticClass:"price"},[this._v("44 EGP")])])])}],!1,null,null,null);t.default=component.exports}}]);