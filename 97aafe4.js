(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{584:function(t,e,o){"use strict";o.r(e);o(15);var l=o(34),n=o(16),d=o.n(n),r={name:"Popularvideos",data:function(){return{loading:{seeMore:!1},allowToGetMorVideos:!0,allVideos:[],noMoreVideos:!1}},computed:{locale:function(){return this.$store.getters["locale/locale"]},isAuthenticated:function(){return this.$store.getters["auth/isAuthenticated"]}},created:function(){this.getVideos(0,8),window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){var e=window.scrollY,o=document.body.scrollHeight,l=window.innerHeight;Math.floor(e-(o-l))<1&&Math.floor(e-(o-l))>-10&&this.getVideos(this.allVideos.length,4)},getVideos:function(t,e){var o=this;this.allowToGetMorVideos&&!this.noMoreVideos&&(this.loading.seeMore=!0,this.allowToGetMorVideos=!1,d.a.get("/my/videos/skip/".concat(t,"/take/").concat(e)).then((function(t){t.data.data;o.loading.seeMore=!1,o.allowToGetMorVideos=!0,o.allVideos=[].concat(Object(l.a)(o.allVideos),Object(l.a)(t.data.data)),t.data.data.length<1&&(o.noMoreVideos=!0)})))}}},c=o(39),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"all-videos"},[o("b-container",[o("nav",{attrs:{"aria-label":"breadcrumb"}},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Funny Videos")])])]),t._v(" "),o("div",{staticClass:"all-videos-container"},[o("div",{staticClass:"all-videos-header d-flex"},[o("nuxt-link",{staticClass:"videos-link",attrs:{exact:"",to:"/"+t.locale+"/videos/"}},[t._v("\n                    Popular Videos\n                ")]),t._v(" "),t.isAuthenticated?[o("nuxt-link",{staticClass:"videos-link",attrs:{to:"/"+t.locale+"/videos/my-videos/"}},[t._v("\n                        My Videos\n                    ")]),t._v(" "),o("nuxt-link",{staticClass:"add-video-link-container",attrs:{to:"/"+t.locale+"/videos/add/"}},[o("b-button",{staticClass:"add-video-link no-shadow bg-secondary-1 color-white ",attrs:{variant:"default"}},[o("b-img",{attrs:{src:"/images/icons/svg/videos-add-video.svg",alt:"icon"}}),t._v(" "),o("span",[t._v("Add Video")])],1)],1)]:t._e()],2),t._v(" "),o("div",{staticClass:"cards-container"},[o("b-row",t._l(t.allVideos,(function(video){return o("b-col",{key:video.id,attrs:{sm:"3"}},[o("div",{staticClass:"single-video-card"},[o("nuxt-link",{attrs:{to:"/"+t.locale+"/videos/watch/"+video.id+"/"+video.title}},[o("div",{staticClass:"video"},[o("b-embed",{attrs:{type:"video",aspect:"4by3"}},[o("source",{attrs:{src:video.path,type:"video/mp4"}})]),t._v(" "),o("div",{staticClass:"duration"},[t._v("\n                                        00:"+t._s(Math.round(video.duration))+"\n                                    ")])],1),t._v(" "),o("div",{staticClass:"info"},[o("h2",{staticClass:"title"},[t._v("\n                                        "+t._s(video.title)+"\n                                    ")]),t._v(" "),o("div",{staticClass:"channel d-flex"},[o("b-img",{attrs:{src:"/images/placeholder.jpg",alt:"icon"}}),t._v(" "),o("h3",{staticClass:"channel-name"},[t._v(t._s(video.user.username))])],1),t._v(" "),o("div",{staticClass:"views"},[o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("div",{staticClass:"d-flex box"},[o("img",{attrs:{src:"/images/icons/svg/videos-view.svg",alt:"icon"}}),t._v(" "),o("span",[t._v(t._s(video.views)+" views")])])]),t._v(" "),o("b-col",{attrs:{cols:"6"}},[o("div",{staticClass:"d-flex box"},[o("img",{attrs:{src:"/images/icons/svg/videos-time.svg",alt:"icon"}}),t._v(" "),o("span",[t._v("\n                                                        "+t._s(t.$moment(video.created_at).fromNow())+"\n                                                    ")])])])],1)],1)])])],1)])})),1),t._v(" "),o("div",{staticClass:"text-center mt-4"},[t.loading.seeMore?o("b-spinner",{staticClass:"spinner-primary",attrs:{variant:"default",large:"",type:"grow"}}):t._e()],1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);