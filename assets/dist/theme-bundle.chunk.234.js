"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[234],{36234:(t,e,o)=>{o.r(e),o.d(e,{default:()=>u});var r=o(49230),n=o(40097),a=o(73609),c=o(67313),i=o(55825);function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}var u=function(t){var e,o;function r(){return t.apply(this,arguments)||this}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,s(e,o);var u=r.prototype;return u.onReady=function(){this.registerContactFormValidation()},u.registerContactFormValidation=function(){var t="form[data-contact-form]",e=(0,n.Z)({submit:t+' input[type="submit"]',tap:c.kk}),o=i(t);e.add([{selector:t+' input[name="contact_email"]',validate:function(t,e){t(a.Z.email(e))},errorMessage:this.context.contactEmail},{selector:t+' textarea[name="contact_question"]',validate:function(t,e){t(a.Z.notEmpty(e))},errorMessage:this.context.contactQuestion}]),o.on("submit",(function(t){e.performCheck(),e.areAll("valid")||t.preventDefault()}))},r}(r.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.234.js.map