"use strict";(self["webpackChunkfilet"]=self["webpackChunkfilet"]||[]).push([[358],{358:function(s,e,a){a.r(e),a.d(e,{default:function(){return w}});var r=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"app-change-password"},[a("div",{staticClass:"change-password"},[a("div",{staticClass:"setting-title"},[s._v("Change Password")]),a("div",{staticClass:"input-container"},[a("b-form-group",{attrs:{"label-for":"new-password",label:"New password"}},[a("b-form-input",{attrs:{id:"new-password",type:"password",placeholder:"Your answer"},model:{value:s.newPassword,callback:function(e){s.newPassword=e},expression:"newPassword"}})],1),a("b-form-group",{attrs:{"label-for":"confirm-new-password",label:"Confirm new password",description:"* At least 8 characters with 1 upper case, 1 lower case, and 1 number."}},[a("b-form-input",{attrs:{id:"confirm-new-password",type:"password",placeholder:"Your answer"},model:{value:s.confirmNewPassword,callback:function(e){s.confirmNewPassword=e},expression:"confirmNewPassword"}})],1),a("div",{staticClass:"button-container"},[a("button",{attrs:{disabled:s.isChangePasswordDisabled},on:{click:s.handleChangePasswordClick}},[s._v(" Update ")])])],1)])])},t=[],o=a(4665),n={name:"AppChangePassword",data(){return{newPassword:null,confirmNewPassword:null,isLoading:!1}},computed:{isChangePasswordDisabled(){return!this.newPassword||!this.confirmNewPassword||this.isLoading}},methods:{...(0,o.nv)(["changePassword"]),...(0,o.OI)(["showAlert","hideAlert"]),async handleChangePasswordClick(){if(this.newPassword!==this.confirmNewPassword)return this.showAlert({text:"Passwords are different. Please re-type your password."}),void setTimeout((()=>{this.hideAlert()}),3e3);this.isLoading=!0;try{await this.changePassword({otpCode:this.$route.query.otp,newPassword:this.newPassword}),this.newPassword=null,this.confirmNewPassword=null,this.showAlert({text:"Update successfully.",variant:"success"}),this.$router.replace("/login")}catch(s){this.showAlert({text:s?.response?.data?.message})}finally{this.isLoading=!1,setTimeout((()=>{this.hideAlert()}),3e3)}}}},i=n,d=a(1001),l=(0,d.Z)(i,r,t,!1,null,"94079522",null),w=l.exports}}]);
//# sourceMappingURL=358.b915b1a6.js.map