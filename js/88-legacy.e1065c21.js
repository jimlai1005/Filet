"use strict";(self["webpackChunkfilet"]=self["webpackChunkfilet"]||[]).push([[88],{3088:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-contact"},[a("div",{staticClass:"contact-form"},[a("div",{staticClass:"contact-title"},[e._v("CONTACT US")]),a("div",{staticClass:"contact-description"},[e._v(" We love to hear from you! Just send your questions our way and we will get back to you as soon as we can! ")]),a("b-form-group",{attrs:{"label-for":"name",label:"Name"}},[a("b-form-input",{attrs:{id:"name",type:"text",placeholder:"Your name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("b-form-group",{attrs:{"label-for":"email",label:"Email"}},[a("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Your email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("b-form-group",{attrs:{"label-for":"message",label:"Message"}},[a("b-form-textarea",{attrs:{id:"message",placeholder:"Your message goes here",rows:"3","max-rows":"6"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),a("button",{attrs:{type:"button",disabled:e.isContactDisabled},on:{click:e.handleContactClick}},[e._v(" SEND ")])],1)])},s=[],r=a(6198),o=a(4367),l=(a(8975),a(8309),a(4665)),i={name:"AppContact",data:function(){return{isLoading:!1,name:null,email:null,message:null}},computed:(0,o.Z)((0,o.Z)({},(0,l.rn)(["userInfo","token"])),{},{isContactDisabled:function(){return!this.name||!this.email||!this.message||this.isLoading}}),created:function(){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.token){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.getUserInfo({token:e.token});case 4:a=t.sent,e.setUserInfo(a.data),e.name=e.userInfo.firstName,e.email=e.userInfo.email;case 8:case"end":return t.stop()}}),t)})))()},methods:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,l.nv)(["contact","getUserInfo"])),(0,l.OI)(["showAlert","hideAlert","setUserInfo"])),{},{handleContactClick:function(){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.contact({name:e.name,email:e.email,message:e.message});case 4:e.showAlert({variant:"success",text:"Send successfully."}),e.name=null,e.email=null,e.message=null,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.showAlert({text:null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message});case 13:return t.prev=13,e.isLoading=!1,setTimeout((function(){e.hideAlert()}),3e3),t.finish(13);case 17:case"end":return t.stop()}}),t,null,[[1,10,13,17]])})))()}})},u=i,c=a(1001),m=(0,c.Z)(u,n,s,!1,null,"3007fb22",null),f=m.exports}}]);
//# sourceMappingURL=88-legacy.e1065c21.js.map