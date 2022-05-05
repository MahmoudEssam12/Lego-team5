"use strict";(self.webpackChunklego=self.webpackChunklego||[]).push([[867],{94660:function(e,t,n){n(72791);t.Z=n.p+"static/media/LEGOAccount-Logo.ed093d4e8f43ce1e32a1ba6a8aef2989.svg"},25761:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(1413),o=(n(72791),n(43504)),s=n(55705),a=n(62797),i=n(48550),d=n(74569),c=n.n(d),l=n(16871),u=n(68096),h=n(4708),f=n(64554),m=n(26445),w=n(29823),x=n(12017),p=n(94660),g=(n(76630),n(80184));function b(){var e=(0,l.s0)(),t=(0,s.TA)({initialValues:{oldPassword:"",newPassword:"",confirmNewPassword:""},validationSchema:a.Ry({oldPassword:a.Z_().max(20,"Must be 20 characters or less").min(5,"Must be 5 characters or more").required("Please enter your password"),newPassword:a.Z_().required("Required").matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),confirmNewPassword:a.Z_().required("Required").oneOf([a.iH("newPassword"),null],"Passwords must match")}),onSubmit:function(t){c().post("https://lego-team5.herokuapp.com/account/change-password",t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){localStorage.clear(),e("/login")})).catch((function(e){}))}});return(0,g.jsxs)("div",{style:{width:"100vw",minHeight:"100vh",backgroundColor:"#f2f5f7"},children:[(0,g.jsx)(h.ZP,{}),(0,g.jsx)(m.Z,{maxWidth:"sm",children:(0,g.jsxs)(f.Z,{sx:{bgcolor:"#f2f5f7",height:"100%"},className:"account-border",children:[(0,g.jsx)(f.Z,{sx:{bgcolor:"#ffcf00",height:"12vh"},children:(0,g.jsxs)("div",{className:"text-center",children:[(0,g.jsx)("button",{className:"back-arrow",children:(0,g.jsx)(o.rU,{to:"/details",style:{textDecoration:"none",color:"black"},children:(0,g.jsx)(x.Z,{fontSize:"large"})})}),(0,g.jsx)("img",{src:p.Z,alt:"",className:"Logo-img-account rounded",style:{marginLeft:"0"}}),(0,g.jsx)("button",{className:"closing-btn",children:(0,g.jsx)(o.rU,{to:"/whishlist/personal",style:{textDecoration:"none",color:"black"},children:(0,g.jsx)(w.Z,{fontSize:"large"})})})]})}),(0,g.jsxs)(f.Z,{sx:{mt:2,mx:7},children:[(0,g.jsx)("h4",{style:{textAlign:"center",marginBottom:"16px"},children:"Security"}),(0,g.jsx)("h4",{style:{textAlign:"center",marginBottom:"16px"},children:"Do you want to change your password?"}),(0,g.jsxs)("form",{id:"security-form",sx:{mb:"0"},onSubmit:t.handleSubmit,children:[(0,g.jsx)(u.Z,{sx:{width:"100%",pb:2},variant:"filled",children:(0,g.jsx)(i.Z,(0,r.Z)({helperText:t.touched.oldPassword&&t.errors.oldPassword?"".concat(t.errors.oldPassword):null,error:!(!t.touched.oldPassword||!t.errors.oldPassword),label:"Password",type:"password",id:"oldPassword",name:"oldPassword"},t.getFieldProps("oldPassword")))}),(0,g.jsx)(u.Z,{sx:{width:"100%",pb:2},variant:"filled",children:(0,g.jsx)(i.Z,(0,r.Z)({helperText:t.touched.newPassword&&t.errors.newPassword?"".concat(t.errors.newPassword):null,error:!(!t.touched.newPassword||!t.errors.newPassword),label:"New Password",type:"password",id:"newPassword",name:"newPassword"},t.getFieldProps("newPassword")))}),(0,g.jsx)(u.Z,{sx:{width:"100%",pb:2},variant:"filled",children:(0,g.jsx)(i.Z,(0,r.Z)({helperText:t.touched.confirmNewPassword&&t.errors.confirmNewPassword?"".concat(t.errors.confirmNewPassword):null,error:!(!t.touched.confirmNewPassword||!t.errors.confirmNewPassword),label:"Confirm New Password",type:"password",id:"confirmNewPassword",name:"confirmNewPassword"},t.getFieldProps("confirmNewPassword")))}),(0,g.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto my-2",children:(0,g.jsx)("button",{className:"btn update-save-btn py-2 px-1 mb-2",style:{backgroundColor:"#006cb6",color:"white",fontSize:"20px"},disabled:!t.dirty&&t.isValid,type:"submit",children:"Save"})})]}),(0,g.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-4",children:[(0,g.jsx)("button",{className:"btn delete-account-btn py-2 mb-2",style:{backgroundColor:"red",color:"white",fontSize:"20px"},type:"",children:(0,g.jsx)(o.rU,{to:"/delete-account",style:{textDecoration:"none",color:"white"},children:"Delete Account"})}),(0,g.jsx)("button",{className:"btn mb-2 p-3",style:{backgroundColor:"transparent",fontSize:"20px",color:"black"},type:"button",children:(0,g.jsx)(o.rU,{to:"/details",style:{textDecoration:"none",border:"none"},className:"go-back-btn hover-btn",children:"Go Back"})})]})]})]})})]})}},12017:function(e,t,n){var r=n(95318);t.Z=void 0;var o=r(n(45649)),s=n(80184),a=(0,o.default)((0,s.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.Z=a},13208:function(e,t,n){var r=n(87462),o=n(63366),s=n(72791),a=n(18875),i=n(13967),d=n(4999),c=n(42071),l=n(80184),u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function h(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var f={entering:{opacity:1,transform:h(1)},entered:{opacity:1,transform:"none"}},m="undefined"!==typeof navigator&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&/version\/15\.[4-9]/i.test(navigator.userAgent),w=s.forwardRef((function(e,t){var n=e.addEndListener,w=e.appear,x=void 0===w||w,p=e.children,g=e.easing,b=e.in,y=e.onEnter,P=e.onEntered,v=e.onEntering,Z=e.onExit,j=e.onExited,E=e.onExiting,N=e.style,k=e.timeout,A=void 0===k?"auto":k,C=e.TransitionComponent,S=void 0===C?a.ZP:C,z=(0,o.Z)(e,u),L=s.useRef(),R=s.useRef(),D=(0,i.Z)(),T=s.useRef(null),H=(0,c.Z)(p.ref,t),q=(0,c.Z)(T,H),B=function(e){return function(t){if(e){var n=T.current;void 0===t?e(n):e(n,t)}}},M=B(v),O=B((function(e,t){(0,d.n)(e);var n,r=(0,d.C)({style:N,timeout:A,easing:g},{mode:"enter"}),o=r.duration,s=r.delay,a=r.easing;"auto"===A?(n=D.transitions.getAutoHeightDuration(e.clientHeight),R.current=n):n=o,e.style.transition=[D.transitions.create("opacity",{duration:n,delay:s}),D.transitions.create("transform",{duration:m?n:.666*n,delay:s,easing:a})].join(","),y&&y(e,t)})),U=B(P),F=B(E),_=B((function(e){var t,n=(0,d.C)({style:N,timeout:A,easing:g},{mode:"exit"}),r=n.duration,o=n.delay,s=n.easing;"auto"===A?(t=D.transitions.getAutoHeightDuration(e.clientHeight),R.current=t):t=r,e.style.transition=[D.transitions.create("opacity",{duration:t,delay:o}),D.transitions.create("transform",{duration:m?t:.666*t,delay:m?o:o||.333*t,easing:s})].join(","),e.style.opacity=0,e.style.transform=h(.75),Z&&Z(e)})),G=B(j);return s.useEffect((function(){return function(){clearTimeout(L.current)}}),[]),(0,l.jsx)(S,(0,r.Z)({appear:x,in:b,nodeRef:T,onEnter:O,onEntered:U,onEntering:M,onExit:_,onExited:G,onExiting:F,addEndListener:function(e){"auto"===A&&(L.current=setTimeout(e,R.current||0)),n&&n(T.current,e)},timeout:"auto"===A?null:A},z,{children:function(e,t){return s.cloneElement(p,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:h(.75),visibility:"exited"!==e||b?void 0:"hidden"},f[e],N,p.props.style),ref:q},t))}}))}));w.muiSupportAuto=!0,t.Z=w},76630:function(){},97326:function(e,t,n){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=867.99ff58c4.chunk.js.map