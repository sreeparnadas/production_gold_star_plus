!function(){"use strict";function e(t,n){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,o=i(e);if(t){var a=i(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return n(this,r)}}function n(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[983],{9983:function(n,i,o){o.d(i,{Jk:function(){return g},Nt:function(){return C},c:function(){return x}});var u=o(521),s=o(7716),l=o(9490),c=o(9193),f=o(9765);o(2759),o(13),o(6782),o(8583);var d,h=(0,u.i$)({passive:!0}),p=((d=function(){function e(t,n){r(this,e),this._platform=t,this._ngZone=n,this._monitoredElements=new Map}return a(e,[{key:"monitor",value:function(e){var t=this;if(!this._platform.isBrowser)return c.E;var n=(0,l.fI)(e),i=this._monitoredElements.get(n);if(i)return i.subject;var r=new f.xQ,o="cdk-text-field-autofilled",a=function(e){"cdk-text-field-autofill-start"!==e.animationName||n.classList.contains(o)?"cdk-text-field-autofill-end"===e.animationName&&n.classList.contains(o)&&(n.classList.remove(o),t._ngZone.run(function(){return r.next({target:e.target,isAutofilled:!1})})):(n.classList.add(o),t._ngZone.run(function(){return r.next({target:e.target,isAutofilled:!0})}))};return this._ngZone.runOutsideAngular(function(){n.addEventListener("animationstart",a,h),n.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(n,{subject:r,unlisten:function(){n.removeEventListener("animationstart",a,h)}}),r}},{key:"stopMonitoring",value:function(e){var t=(0,l.fI)(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}},{key:"ngOnDestroy",value:function(){var e=this;this._monitoredElements.forEach(function(t,n){return e.stopMonitoring(n)})}}]),e}()).\u0275fac=function(e){return new(e||d)(s.LFG(u.t4),s.LFG(s.R0b))},d.\u0275prov=s.Yz7({factory:function(){return new d(s.LFG(u.t4),s.LFG(s.R0b))},token:d,providedIn:"root"}),d),v=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[u.ud]]}),e}(),m=o(2458),_=o(8295),y=o(3679),g=new s.OlP("MAT_INPUT_VALUE_ACCESSOR"),b=["button","checkbox","file","hidden","image","radio","range","reset","submit"],k=0,E=(0,m.FD)(function(){return function e(t,n,i,o){r(this,e),this._defaultErrorStateMatcher=t,this._parentForm=n,this._parentFormGroup=i,this.ngControl=o}}()),C=function(){var n=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(o,n);var i=t(o);function o(e,t,n,a,s,l,c,d,h,p){var v;r(this,o),(v=i.call(this,l,a,s,n))._elementRef=e,v._platform=t,v._autofillMonitor=d,v._formField=p,v._uid="mat-input-"+k++,v.focused=!1,v.stateChanges=new f.xQ,v.controlType="mat-input",v.autofilled=!1,v._disabled=!1,v._required=!1,v._type="text",v._readonly=!1,v._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(function(e){return(0,u.qK)().has(e)});var m=v._elementRef.nativeElement,_=m.nodeName.toLowerCase();return v._inputValueAccessor=c||m,v._previousNativeValue=v.value,v.id=v.id,t.IOS&&h.runOutsideAngular(function(){e.nativeElement.addEventListener("keyup",function(e){var t=e.target;!t.value&&0===t.selectionStart&&0===t.selectionEnd&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))})}),v._isServer=!v._platform.isBrowser,v._isNativeSelect="select"===_,v._isTextarea="textarea"===_,v._isInFormField=!!p,v._isNativeSelect&&(v.controlType=m.multiple?"mat-native-select-multiple":"mat-native-select"),v}return a(o,[{key:"disabled",get:function(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled},set:function(e){this._disabled=(0,l.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}},{key:"id",get:function(){return this._id},set:function(e){this._id=e||this._uid}},{key:"required",get:function(){return this._required},set:function(e){this._required=(0,l.Ig)(e)}},{key:"type",get:function(){return this._type},set:function(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,u.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}},{key:"value",get:function(){return this._inputValueAccessor.value},set:function(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}},{key:"readonly",get:function(){return this._readonly},set:function(e){this._readonly=(0,l.Ig)(e)}},{key:"ngAfterViewInit",value:function(){var e=this;this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function(t){e.autofilled=t.isAutofilled,e.stateChanges.next()})}},{key:"ngOnChanges",value:function(){this.stateChanges.next()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}},{key:"focus",value:function(e){this._elementRef.nativeElement.focus(e)}},{key:"_focusChanged",value:function(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}},{key:"_onInput",value:function(){}},{key:"_dirtyCheckPlaceholder",value:function(){var e,t,n=(null===(t=null===(e=this._formField)||void 0===e?void 0:e._hideControlPlaceholder)||void 0===t?void 0:t.call(e))?null:this.placeholder;if(n!==this._previousPlaceholder){var i=this._elementRef.nativeElement;this._previousPlaceholder=n,n?i.setAttribute("placeholder",n):i.removeAttribute("placeholder")}}},{key:"_dirtyCheckNativeValue",value:function(){var e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}},{key:"_validateType",value:function(){b.indexOf(this._type)}},{key:"_isNeverEmpty",value:function(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}},{key:"_isBadInput",value:function(){var e=this._elementRef.nativeElement.validity;return e&&e.badInput}},{key:"empty",get:function(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}},{key:"shouldLabelFloat",get:function(){if(this._isNativeSelect){var e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}},{key:"setDescribedByIds",value:function(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}},{key:"onContainerClick",value:function(){this.focused||this.focus()}}]),o}(E);return n.\u0275fac=function(e){return new(e||n)(s.Y36(s.SBq),s.Y36(u.t4),s.Y36(y.a5,10),s.Y36(y.F,8),s.Y36(y.sg,8),s.Y36(m.rD),s.Y36(g,10),s.Y36(p),s.Y36(s.R0b),s.Y36(_.G_,8))},n.\u0275dir=s.lG2({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(e,t){1&e&&s.NdJ("focus",function(){return t._focusChanged(!0)})("blur",function(){return t._focusChanged(!1)})("input",function(){return t._onInput()}),2&e&&(s.Ikx("disabled",t.disabled)("required",t.required),s.uIk("id",t.id)("data-placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-invalid",t.empty&&t.required?null:t.errorState)("aria-required",t.required),s.ekj("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[s._Bn([{provide:_.Eo,useExisting:n}]),s.qOj,s.TTD]}),n}(),x=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[m.rD],imports:[[v,_.lN,m.BQ],v,_.lN]}),e}()}}])}();