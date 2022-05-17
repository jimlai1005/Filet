"use strict";(self["webpackChunkfilet"]=self["webpackChunkfilet"]||[]).push([[358],{358:function(e,s,r){r.r(s),r.d(s,{default:function(){return u}});var a=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"app-change-password"},[r("div",{staticClass:"change-password"},[r("div",{staticClass:"setting-title"},[e._v("Change Password")]),r("div",{staticClass:"input-container"},[r("b-form-group",{attrs:{"label-for":"new-password",label:"New password"}},[r("b-form-input",{attrs:{id:"new-password",type:"password",placeholder:"Your answer"},model:{value:e.newPassword,callback:function(s){e.newPassword=s},expression:"newPassword"}})],1),r("b-form-group",{attrs:{"label-for":"confirm-new-password",label:"Confirm new password",description:"* At least 8 characters with 1 upper case, 1 lower case, and 1 number."}},[r("b-form-input",{attrs:{id:"confirm-new-password",type:"password",placeholder:"Your answer"},model:{value:e.confirmNewPassword,callback:function(s){e.confirmNewPassword=s},expression:"confirmNewPassword"}})],1),r("div",{staticClass:"button-container"},[r("button",{attrs:{disabled:e.isChangePasswordDisabled},on:{click:e.handleChangePasswordClick}},[e._v(" Update ")])])],1)])])},n=[],t=r(6198),o=r(4367),i=(r(8975),r(4916),r(5306),r(4665)),d={name:"AppChangePassword",data:function(){return{newPassword:null,confirmNewPassword:null,isLoading:!1}},computed:{isChangePasswordDisabled:function(){return!this.newPassword||!this.confirmNewPassword||this.isLoading}},methods:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,i.nv)(["changePassword"])),(0,i.OI)(["showAlert","hideAlert"])),{},{handleChangePasswordClick:function(){var e=this;return(0,t.Z)(regeneratorRuntime.mark((function s(){var r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.newPassword===e.confirmNewPassword){s.next=4;break}return e.showAlert({text:"Passwords are different. Please re-type your password."}),setTimeout((function(){e.hideAlert()}),3e3),s.abrupt("return");case 4:return e.isLoading=!0,s.prev=5,s.next=8,e.changePassword({otpCode:e.$route.query.otp,newPassword:e.newPassword});case 8:e.newPassword=null,e.confirmNewPassword=null,e.showAlert({text:"Update successfully.",variant:"success"}),e.$router.replace("/login"),s.next=17;break;case 14:s.prev=14,s.t0=s["catch"](5),e.showAlert({text:null===s.t0||void 0===s.t0||null===(r=s.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message});case 17:return s.prev=17,e.isLoading=!1,setTimeout((function(){e.hideAlert()}),3e3),s.finish(17);case 21:case"end":return s.stop()}}),s,null,[[5,14,17,21]])})))()}})},l=d,w=r(1001),c=(0,w.Z)(l,a,n,!1,null,"94079522",null),u=c.exports}}]);
//# sourceMappingURL=358-legacy.b14bf853.js.map