(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{613:function(t,e,r){"use strict";r.r(e);r(58);var o=r(21),l=r(16),c=r.n(l),n={data:function(){return{total:{},keyword:""}},computed:{locale:function(){return this.$store.getters["locale/locale"]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.keyword=t.$route.query.keyword,console.log("keyword >> ",t.keyword),e.next=5,c.a.post("/my/search/all",{search:t.keyword});case 5:r=e.sent,console.log("search results >> ",r.data.data),r.data.data.total&&(t.total=r.data.data.total),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error >> ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},d=r(39),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-page"},[r("div",{staticClass:"container"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("subnav.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("subnav.search")))])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"search-heading"},[r("p",[t._v(t._s(t.$t("search_result.filter_search")))])]),t._v(" "),r("div",{staticClass:"filter-menu"},[t.total.all?r("nuxt-link",{attrs:{exact:"",to:"/"+t.locale+"/search?keyword="+t.keyword}},[t._v("All ("+t._s(t.total.all)+")")]):t._e(),t._v(" "),t.total.products?r("nuxt-link",{attrs:{to:"/"+t.locale+"/search/products?keyword="+t.keyword}},[t._v("Store ("+t._s(t.total.products)+")")]):t._e(),t._v(" "),t.total.restaurants?r("nuxt-link",{attrs:{to:"/"+t.locale+"/search/restaurants?keyword="+t.keyword}},[t._v("Restaurants ("+t._s(t.total.restaurants)+")")]):t._e(),t._v(" "),t.total.realestate?r("nuxt-link",{attrs:{to:"/"+t.locale+"/search/realestates?keyword="+t.keyword}},[t._v("Realestates ("+t._s(t.total.realestate)+")")]):t._e(),t._v(" "),t.total.technicians?r("nuxt-link",{attrs:{to:"/"+t.locale+"/search/professions?keyword="+t.keyword}},[t._v("Professions ("+t._s(t.total.technicians)+")")]):t._e(),t._v(" "),t.total.users?r("nuxt-link",{attrs:{to:"/"+t.locale+"/search/users?keyword="+t.keyword}},[t._v("Users ("+t._s(t.total.users)+")")]):t._e(),t._v(" "),t.total.vendors?r("nuxt-link",{attrs:{to:"/"+t.locale+"/search/vendors?keyword="+t.keyword}},[t._v("Vendors ("+t._s(t.total.vendors)+")")]):t._e(),t._v(" "),t.total.doctors?r("nuxt-link",{attrs:{to:"/"+t.locale+"/search/doctors?keyword="+t.keyword}},[t._v("Doctors ("+t._s(t.total.doctors)+")")]):t._e(),t._v(" "),t.total.catalogues?r("nuxt-link",{attrs:{to:"/"+t.locale+"/search/companies?keyword="+t.keyword}},[t._v("Companies ("+t._s(t.total.catalogues)+")")]):t._e()],1)]),t._v(" "),r("div",{staticClass:"col-sm-8"},[r("div",{staticClass:"search-results"},[r("nuxt-child")],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);