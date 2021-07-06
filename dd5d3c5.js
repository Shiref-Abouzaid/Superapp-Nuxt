(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{628:function(t,c,r){"use strict";r.r(c);r(16);var e={data:function(){return{}},computed:{totalPrice:function(){return this.$store.getters["cart/totalPrice"]},cartProducts:function(){return this.$store.getters["cart/cartProducts"]},currRate:function(){return this.$store.getters["currency/currencyRate"]},currSymbol:function(){return this.$store.getters["currency/symbol"]},locale:function(){return this.$store.getters["locale/locale"]}},methods:{deleteProduct:function(t){console.log("delete"),this.$store.dispatch("cart/removeCartProduct",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/deleteCartProduct",t.id)},addToCart:function(t){console.log("cart product >> ",t),t.quantity++,console.log("cart product >> ",t),this.$store.dispatch("cart/addOrUpdateCartProduct",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/updateCartProduct",t)},removeFromCart:function(t){1!=t.quantity&&(t.quantity--,this.$store.dispatch("cart/addOrUpdateCartProduct",t),this.$store.getters["auth/isAuthenticated"]&&this.$store.dispatch("cart/updateCartProduct",t))}}},o=r(39),component=Object(o.a)(e,(function(){var t=this,c=t.$createElement,r=t._self._c||c;return r("section",{staticClass:"my-cart"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"cart"},[r("h3",[t._v(t._s(t.$t("cart.cart_header")))]),t._v(" "),r("div",{staticClass:"cart-item"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-8"},[r("span",[t._v(t._s(t.$t("cart.item")))])]),t._v(" "),r("div",{staticClass:"col-3"},[r("span",{staticStyle:{"margin-right":"3rem"}},[t._v(t._s(t.$t("cart.quantity")))])]),t._v(" "),r("div",{staticClass:"col-1"},[r("span",[t._v(t._s(t.$t("cart.price")))])])])]),t._v(" "),t._l(t.cartProducts,(function(c){return r("div",{key:c.id,staticClass:"cart-content"},[r("div",{staticClass:"row counter no-gutters"},[r("div",{staticClass:"col-sm-8"},[r("div",{staticClass:"content"},[r("div",{staticClass:"content-img"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/store/product/"+c.id+"/"+c.name}},[r("img",{attrs:{src:c.imageUrl,alt:""}})])],1),t._v(" "),r("div",{staticClass:"details"},[r("p",{staticClass:"bold"},[r("nuxt-link",{attrs:{to:"/"+t.locale+"/services/store/product/"+c.id+"/"+c.name}},[t._v("\n                        "+t._s(c.name)+"\n                      ")])],1),t._v(" "),r("div",{staticClass:"remove",on:{click:function(r){return t.deleteProduct(c)}}},[r("img",{attrs:{src:"/images/icons/svg/icons-close-small-red.svg",alt:""}}),t._v(" "),r("span",[t._v(t._s(t.$t("cart.remove")))])])])])]),t._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"control"},[r("span",{on:{click:function(r){return t.removeFromCart(c)}}},[r("img",{attrs:{src:"/images/icons/svg/icons-minus-black.svg",alt:""}})]),t._v(" "),r("span",[t._v(t._s(c.quantity))]),t._v(" "),r("span",{on:{click:function(r){return t.addToCart(c)}}},[r("img",{attrs:{src:"/images/icons/svg/plus-black.svg",alt:""}})])])]),t._v(" "),r("div",{staticClass:"col-1"},[r("span",{staticClass:"price"},[t._v(t._s(t.currSymbol)+t._s(c.price))])])])])}))],2)]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"summery"},[r("h3",[t._v(t._s(t.$t("cart.summary")))]),t._v(" "),r("ul",[r("li",[r("div",{staticClass:"summery-details"},[r("span",{staticClass:"text"},[t._v(t._s(t.$t("cart.sub_total")))]),t._v(" "),r("span",{staticClass:"num"},[t._v(t._s(t.currSymbol)+t._s(t.totalPrice))])])]),t._v(" "),r("li",[r("div",{staticClass:"summery-details"},[r("span",{staticClass:"text"},[t._v(t._s(t.$t("cart.shipping")))]),t._v(" "),r("span",{staticClass:"num"},[t._v(t._s(t.currSymbol)+"00.00")])])]),t._v(" "),r("li",[r("div",{staticClass:"summery-details"},[r("span",{staticClass:"text"},[t._v(t._s(t.$t("cart.discount")))]),t._v(" "),r("span",{staticClass:"num"},[t._v(t._s(t.currSymbol)+"00.00")])])]),t._v(" "),r("li",[r("div",{staticClass:"summery-details"},[r("span",{staticClass:"text"},[t._v(t._s(t.$t("cart.taxes")))]),t._v(" "),r("span",{staticClass:"num"},[t._v(t._s(t.currSymbol)+"00.00")])])]),t._v(" "),r("li",[r("div",{staticClass:"summery-details end"},[r("span",{staticClass:"text"},[t._v(t._s(t.$t("cart.total")))]),t._v(" "),r("span",{staticClass:"number"},[t._v("$"+t._s(t.totalPrice))])])])]),t._v(" "),r("nuxt-link",{staticClass:"btn-ckeckout",attrs:{to:"checkout"}},[t._v(t._s(t.$t("cart.checkout_btn")))])],1)])])])])}),[],!1,null,null,null);c.default=component.exports}}]);