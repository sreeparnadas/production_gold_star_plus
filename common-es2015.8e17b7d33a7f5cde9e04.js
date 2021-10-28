"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[592],{95913:function(t,e,n){n.d(e,{I:function(){return i},K:function(){return r}});var s=n(37716);let i=(()=>{class t{constructor(){this._printStyle=[],this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(t){for(let e in t)t.hasOwnProperty(e)&&this._printStyle.push((e+JSON.stringify(t[e])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(t){let e=function(t){return`<link rel="stylesheet" type="text/css" href="${t}">`};if(-1!==t.indexOf(",")){const n=t.split(",");for(let t of n)this._styleSheetFile=this._styleSheetFile+e(t)}else this._styleSheetFile=e(t)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(t){const e=[],n=document.getElementsByTagName(t);for(let s=0;s<n.length;s++)e.push(n[s].outerHTML);return e.join("\r\n")}getFormData(t){for(var e=0;e<t.length;e++)t[e].defaultValue=t[e].value,t[e].checked&&(t[e].defaultChecked=!0)}getHtmlContents(){let t=document.getElementById(this.printSectionId),e=t.getElementsByTagName("input");this.getFormData(e);let n=t.getElementsByTagName("textarea");return this.getFormData(n),t.innerHTML}print(){let t,e,n="",s="";const i=this.getElementTag("base");this.useExistingCss&&(n=this.getElementTag("style"),s=this.getElementTag("link")),t=this.getHtmlContents(),e=window.open("","_blank","top=0,left=0,height=auto,width=auto"),e.document.open(),e.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${i}\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${n}\n          ${s}\n        </head>\n        <body>\n          ${t}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(function() {\n                closeWindow(window.print());\n              }, ${this.printDelay});\n            }\n            function closeWindow(){\n                window.close();\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),e.document.close()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.lG2({type:t,selectors:[["button","ngxPrint",""]],hostBindings:function(t,e){1&t&&s.NdJ("click",function(){return e.print()})},inputs:{useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile",printSectionId:"printSectionId",printTitle:"printTitle"}}),t})(),r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[]]}),t})()},81449:function(t,e,n){n.d(e,{$:function(){return i}});var s=n(37716);let i=(()=>{class t{constructor(){this.helloText=""}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-receipt"]],inputs:{helloText:"helloText"},decls:4,vars:1,template:function(t,e){1&t&&(s.TgZ(0,"h1"),s._uU(1),s.TgZ(2,"p"),s._uU(3,"receipt works!"),s.qZA(),s.qZA()),2&t&&(s.xp6(1),s.Oqu(e.helloText))},styles:["[_nghost-%COMP%]{margin-left:10px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{color:red}"]}),t})()},2700:function(t,e,n){n.r(e),n.d(e,{ReceiptModule:function(){return u}});var s=n(38583),i=n(63423),r=n(81449),o=n(37716);const c=[{path:"",component:r.$}];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.Bz.forChild(c)],i.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.ez,l]]}),t})()},1982:function(t,e,n){n.d(e,{v:function(){return r}});var s=n(37716),i=n(73535);let r=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isTerminal()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(i.e))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},62567:function(t,e,n){n.d(e,{u:function(){return l}});var s=n(92340),i=n(79765),r=n(37716),o=n(91841),c=n(84889);let l=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=s.N.BASE_API_URL,this.gameTypes=[],this.gameTypeSubject=new i.xQ,this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(t=>{this.gameTypes=t.data,this.gameTypeSubject.next([...this.gameTypes]),console.log(t.data)})}getGameType(){return[...this.gameTypes]}getGameTypeListener(){return this.gameTypeSubject.asObservable()}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(o.eN),r.LFG(c.T))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},12173:function(t,e,n){n.d(e,{E:function(){return h}});var s=n(3679),i=n(5304),r=n(68307),o=n(92340),c=n(79765),l=n(37716),u=n(91841),a=n(84889);let h=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=o.N.BASE_API_URL,this.stockists=[],this.stockistSubject=new c.xQ,this.masterStockistForm=new s.cw({id:new s.NI(null),stockistName:new s.NI(null,[s.kI.required]),loginId:new s.NI(null)}),this.http.get(this.BASE_API_URL+"/stockists").subscribe(t=>{this.stockists=t.data,this.stockistSubject.next([...this.stockists])})}getStockists(){return[...this.stockists]}getStockistListener(){return this.stockistSubject.asObservable()}updateStockiist(t){return this.http.put(this.BASE_API_URL+"/stockists",t).pipe((0,i.K)(this.errorService.serverError),(0,r.b)(t=>{}))}saveNewStockist(t){return this.http.post(this.BASE_API_URL+"/stockists",t).pipe((0,i.K)(this.errorService.serverError),(0,r.b)(t=>{this.stockists.unshift(t.data)}))}saveStockistBalance(t){return this.http.put(this.BASE_API_URL+"/stockists/balance",t).pipe((0,i.K)(this.errorService.serverError),(0,r.b)(t=>{}))}}return t.\u0275fac=function(e){return new(e||t)(l.LFG(u.eN),l.LFG(a.T))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);