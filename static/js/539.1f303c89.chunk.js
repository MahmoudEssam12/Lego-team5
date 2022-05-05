"use strict";(self.webpackChunklego=self.webpackChunklego||[]).push([[539],{57539:function(e,s,n){n.r(s),n.d(s,{default:function(){return y}});var i=n(29439),a=n(72791),t=n(85673),c=n(43504),r=n(16871),o=n(80184);function d(e){var s=e.product,n=(0,r.s0)();return(0,o.jsx)("div",{style:{width:"25%"},children:(0,o.jsxs)("div",{className:"card-1",children:[(0,o.jsx)("div",{className:"main-image",children:(0,o.jsx)("img",{style:{cursor:"pointer"},onClick:function(){return n("/card",{state:{_id:null===s||void 0===s?void 0:s._id}})},src:"http://localhost:8080/images/".concat(null===s||void 0===s?void 0:s.images[0]),alt:null===s||void 0===s?void 0:s.name})}),(0,o.jsxs)("div",{className:"text-container",children:[(0,o.jsx)("h4",{style:{cursor:"pointer"},onClick:function(){return n("/card",{state:{_id:null===s||void 0===s?void 0:s._id}})},children:null===s||void 0===s?void 0:s.name}),(0,o.jsx)("div",{className:"shop",children:(0,o.jsxs)(c.OL,{to:"/shop-now",children:["Shop Now",(0,o.jsx)("i",{className:"fas fa-angle-right"})]})})]})]})})}var l=n(21083),h=n(24015);function u(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("section",{className:"carousel",children:(0,o.jsxs)("div",{className:"hero-label",children:[(0,o.jsx)("img",{src:h,className:"small-devices",alt:""}),(0,o.jsx)("img",{src:"../../assets/imgs/hero-img.jpg",alt:""}),(0,o.jsxs)("div",{className:"hero-bg-blue",children:[(0,o.jsx)("img",{src:l,className:"city-img",alt:"city logo"}),(0,o.jsxs)("div",{className:"hero-content",children:[(0,o.jsxs)("h2",{children:["Look who's new in LEGO",(0,o.jsx)("sup",{children:(0,o.jsx)("i",{className:"far fa-registered"})})," ","City"]}),(0,o.jsx)("p",{children:"Meet the awesome new line-up of everyday heroes."}),(0,o.jsxs)("div",{className:"hero-btns",children:[(0,o.jsxs)(c.OL,{to:"/shop-now",className:"btn",children:["Shop now ",(0,o.jsx)("i",{className:"fas fa-chevron-right"})]}),(0,o.jsxs)(c.OL,{to:"/about-us",className:"btn",children:["Learn more ",(0,o.jsx)("i",{className:"fas fa-chevron-right"})]})]})]})]})]})})})}var m=n(74569),x=n.n(m),p=n(1413),j=n(48280),v=n(66303),f=n(16030);var g=function(e){var s,n=e.product,i=(0,f.I0)(),a=(0,r.s0)();return(0,o.jsxs)("div",{className:"recommended-card",children:[(0,o.jsx)("div",{className:"image-container",style:{width:"100%",overflow:"hidden"},children:(0,o.jsx)("img",{onClick:function(){return a("/card",{state:{_id:n._id}})},src:"http://localhost:8080/images/".concat(null===n||void 0===n||null===(s=n.images)||void 0===s?void 0:s[0]),className:"product-card-img"})}),(0,o.jsx)("div",{className:"card-name",children:(0,o.jsx)("p",{onClick:function(){return a("/card",{state:{_id:n._id}})},style:{cursor:"pointer"},children:null===n||void 0===n?void 0:n.name})}),(0,o.jsx)("span",{children:(0,o.jsx)(j.Z,{count:null===n||void 0===n?void 0:n.rating})}),(0,o.jsxs)("div",{className:"card-price",children:[null===n||void 0===n?void 0:n.price," EGP"]}),(0,o.jsx)("button",{className:"card-button-exist",onClick:function(){localStorage.getItem("token")?i((0,v.A4)((0,p.Z)({},n))):a("/login")},children:"Add to Bag"})]})};var N=function(){var e=(0,a.useState)([]),s=(0,i.Z)(e,2),n=s[0],t=s[1];return(0,a.useEffect)((function(){x().get("https://lego-team5.herokuapp.com/home/random-products").then((function(e){return t(e.data.randomProduct)})).catch((function(e){}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:"recommended-title",children:"Recommended For You"}),(0,o.jsx)("div",{className:"recommended",children:(0,o.jsx)("div",{className:"boxes",children:n.map((function(e){return(0,o.jsx)(g,{product:e},e._id)}))})})]})},w=n(55646),b=n(94070);function y(e){var s=(0,a.useState)([]),n=(0,i.Z)(s,2),l=n[0],h=n[1],m=(0,a.useState)([]),p=(0,i.Z)(m,2),j=p[0],v=p[1],f=(0,a.useState)(!1),g=(0,i.Z)(f,2),y=g[0],k=g[1],S=(0,a.useState)(""),_=(0,i.Z)(S,2),C=_[0],Z=_[1],L=(0,r.TH)(),O=function(e,s){"clickaway"!==s&&k(!1)};return(0,a.useEffect)((function(){var e;return x().get("https://lego-team5.herokuapp.com/home/trending-products").then((function(e){h(e.data.trendingProducts)})).catch((function(e){})),L.state&&(e=L.state.message,Z(e),k(!0)),function(){}}),[]),(0,a.useEffect)((function(){return x().get("https://lego-team5.herokuapp.com/home/new-products").then((function(e){v(e.data.newProducts)})).catch((function(e){})),function(){}}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{}),(0,o.jsx)(N,{}),(0,o.jsx)("div",{className:"keep-in-touch-container",children:(0,o.jsx)("section",{className:"keep-in-touch-inner",children:(0,o.jsxs)("div",{className:"keep-in-touch-wrapper",children:[(0,o.jsxs)("div",{className:"left-side-content",children:[(0,o.jsx)("h2",{children:"Only the best is good enough"}),(0,o.jsx)("p",{children:"As children shape their own worlds with LEGO bricks, we play our part in having a positive impact on the world they live in today and will inherit in the future."}),(0,o.jsxs)(c.OL,{className:"shop-now-btn",to:"/shop-now",children:["Shop Now",(0,o.jsx)("i",{className:"fas fa-angle-right"})]})]}),(0,o.jsx)("div",{className:"right-side-content",children:(0,o.jsx)("img",{src:t,alt:""})})]})})}),(0,o.jsx)("div",{className:"spotlight-on-container",children:(0,o.jsx)("section",{id:"spotlight-on",children:(0,o.jsxs)("div",{className:"card-section",children:[(0,o.jsx)("div",{className:"card-header-spotlight",children:(0,o.jsx)("h2",{children:"Spotlight on"})}),(0,o.jsx)("div",{className:"card-container",children:j.map((function(e){return(0,o.jsx)(d,{product:e},e._id)}))})]})})}),(0,o.jsx)("div",{className:"spotlight-on-container",children:(0,o.jsx)("section",{id:"spotlight-on",children:(0,o.jsxs)("div",{className:"card-section",children:[(0,o.jsx)("div",{className:"card-header-spotlight",children:(0,o.jsx)("h2",{children:(0,o.jsx)("span",{children:"Trending Now"})})}),(0,o.jsx)("div",{className:"card-container",children:l.map((function(e){return(0,o.jsx)(d,{product:e},e._id)}))})]})})}),(0,o.jsx)(w.Z,{open:y,autoHideDuration:3e3,onClose:O,severity:"success",children:(0,o.jsx)(b.Z,{onClose:O,severity:"success",sx:{width:"100%"},children:C})})]})}},48280:function(e,s,n){n.d(s,{Z:function(){return a}});n(72791);var i=n(80184);function a(e){return(0,i.jsx)("p",{className:"review-stars-container",children:function(e){var s=[];if(e){for(var n=0;n<e;n++)s.push((0,i.jsx)("i",{className:"fas fa-star yellow-star"},n));for(var a=e;a<5;a++)s.push((0,i.jsx)("i",{className:"fas fa-star gray-star"},a))}return s}(e.count)})}},85673:function(e,s,n){e.exports=n.p+"static/media/woman.5a90b26510a1323d34a9.png"},24015:function(e,s,n){e.exports=n.p+"static/media/City-Home-202201-Hero-Standard-Small.fb8eaae8db6c58fe0b8a.jpg"},21083:function(e,s,n){e.exports=n.p+"static/media/city_logo.a94840bd5087a039909b.png"}}]);
//# sourceMappingURL=539.1f303c89.chunk.js.map