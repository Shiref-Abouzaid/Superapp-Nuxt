(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(459))&&n.__esModule?n:{default:n};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===f(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;t.len=function(e){return Array.isArray(e)?e.length:"object"===f(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!l(e)||t.test(e)}))}},457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return S.default}}),t.helpers=void 0;var n=D(r(458)),o=D(r(461)),f=D(r(462)),l=D(r(463)),d=D(r(464)),c=D(r(465)),v=D(r(466)),m=D(r(467)),y=D(r(468)),h=D(r(469)),_=D(r(470)),P=D(r(471)),j=D(r(472)),x=D(r(473)),O=D(r(474)),w=D(r(475)),$=D(r(476)),M=D(r(477)),A=D(r(478)),z=D(r(479)),S=D(r(480)),C=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(456));function D(e){return e&&e.__esModule?e:{default:e}}t.helpers=C},458:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},459:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(460).withParams:r(355).withParams;t.default=n}).call(this,r(117))},460:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(48))},461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},462:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("numeric",/^[0-9]*$/);t.default=n},463:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},464:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},465:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(f)}));t.default=o;var f=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},466:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},467:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},470:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},472:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},473:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},474:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},475:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},478:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(456);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},479:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(456).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},586:function(e,t,r){"use strict";r.r(t);r(40);var n=r(457),o=r(16),f=r.n(o),l={data:function(){return{todos:[{value:""},{value:""},{value:""},{value:""},{value:""},{value:""}],resendTime:60,resend:!1}},validations:{todos:{$each:{value:{required:n.required,numeric:n.numeric}}}},mounted:function(){var e=this,time=setInterval((function(){e.resendTime--,e.resendTime<=0&&(clearInterval(time),e.resend=!0)}),1e3)},methods:{moveToNextField:function(e,t){var r=t+1;r<this.todos.length&&e.length>=1&&this.$refs.todos[r].focus()},onSubmit:function(){if(!this.$v.$invalid){var e=this.todos[0].value+this.todos[1].value+this.todos[2].value+this.todos[3].value+this.todos[4].value+this.todos[5].value;console.log("otp > ",e),f.a.get("/my/users/forgot-password/check-otp/"+e+"/user/"+this.$route.params.userId).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},resendCode:function(){this.resend}}},d=r(39),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"mobile-verfiy"},[r("div",{staticClass:"container"},[r("div",{staticClass:"verfiy-page"},[r("div",{staticClass:"row"},[e._m(0),e._v(" "),r("div",{staticClass:"col-sm-6"},[r("h3",[e._v(e._s(e.$t("login.mobile_verification")))]),e._v(" "),r("p",[e._v("\n            "+e._s(e.$t("login.mobile_verification_paragraph"))+"\n          ")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"boxes"},e._l(e.todos,(function(t,n){return r("div",{key:t.id,staticClass:"box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"todo.value"}],ref:"todos",refInFor:!0,class:{invalid:e.$v.todos.$each[n].value.$error},attrs:{type:"text",maxlength:"1"},domProps:{value:t.value},on:{input:[function(r){r.target.composing||e.$set(t,"value",r.target.value)},function(t){e.moveToNextField(t.target.value,n),e.$v.todos.$each[n].value.$touch()}]}})])})),0),e._v(" "),r("button",{attrs:{disabled:e.$v.$invalid}},[e._v(e._s(e.$t("login.verify")))])]),e._v(" "),r("p",{staticClass:"resend"},[e._v("Can you resend verification code after 00:"+e._s(e.resendTime))]),e._v(" "),r("p",{staticClass:"recive"},[e._v(e._s(e.$t("login.recive_paragraph")))]),e._v(" "),r("span",{staticClass:"sign-link",class:{active:e.resend}},[e._v(e._s(e.$t("login.resend")))])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"image"},[t("img",{attrs:{src:"/images/authentication.png",alt:""}})])])}],!1,null,null,null);t.default=component.exports}}]);