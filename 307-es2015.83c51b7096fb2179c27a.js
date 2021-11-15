"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[307],{45480:function(t,e,n){n.d(e,{q:function(){return a}});var i=n(51095),r=n(49983),o=n(37716);let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[i.ot,r.c]}),t})()},4307:function(t,e,n){n.r(e),n.d(e,{ManualResultModule:function(){return P}});var i=n(38583),r=n(63423),o=n(51068),a=n(3679),s=n(17238),u=n(88259),l=n.n(u),c=n(92340),d=n(45435),p=n(88002),g=n(19773),h=n(37716),m=n(91841),b=n(79765),A=n(5304),Z=n(68307),f=n(84889);let v=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.drawTimes=[],this.drawTimeSubject=new b.xQ,this.BASE_API_URL=c.N.BASE_API_URL,this.http.get(this.BASE_API_URL+"/drawTimes").subscribe(t=>{this.drawTimes=t.data,this.drawTimeSubject.next([...this.drawTimes])})}getAllDrawTimes(){return[...this.drawTimes]}getAllDrawTimesListener(){return this.drawTimeSubject.asObservable()}saveManualResult(t){return this.http.post(this.BASE_API_URL+"/manualResult",t).pipe((0,A.K)(this.errorService.serverError),(0,Z.b)(t=>{}))}}return t.\u0275fac=function(e){return new(e||t)(h.LFG(m.eN),h.LFG(f.T))},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=n(13865),M=n(5620),w=n(98295),C=n(67441),x=n(49983),S=n(51095),q=n(72458),D=n(45396);function I(t,e){if(1&t&&(h.TgZ(0,"mat-option",19),h._uU(1),h.qZA()),2&t){const t=e.$implicit;h.Q6J("value",t.drawId),h.xp6(1),h.hij(" ",t.endTime," ")}}function _(t,e){if(1&t){const t=h.EpF();h.TgZ(0,"div",20),h.TgZ(1,"div",21),h.TgZ(2,"mat-slide-toggle",22),h.NdJ("change",function(){h.CHM(t);const e=h.oxw();return e.showDevArea=!e.showDevArea}),h._uU(3),h.qZA(),h.qZA(),h.qZA()}if(2&t){const t=h.oxw();h.xp6(3),h.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function y(t,e){if(1&t&&(h.TgZ(0,"div",20),h.TgZ(1,"div",21),h.TgZ(2,"pre"),h._uU(3),h.ALo(4,"json"),h.qZA(),h.qZA(),h.TgZ(5,"div",23),h.TgZ(6,"pre"),h._uU(7),h.ALo(8,"json"),h.qZA(),h.qZA(),h.TgZ(9,"div",21),h._UZ(10,"pre"),h.qZA(),h.qZA()),2&t){const t=h.oxw();h.xp6(3),h.hij("        numberCombinationMatrix = ",h.lcZ(4,2,t.numberCombinationMatrix),"\n      "),h.xp6(4),h.hij("       manualResultForm = ",h.lcZ(8,4,t.manualResultForm.value),"\n      ")}}const N=function(){return{standalone:!0}},R=[{path:"",canActivate:[o.m],component:(()=>{class t{constructor(t,e,n,r,o,s){this.http=t,this.manualResultService=e,this.playGameService=n,this.route=r,this.router=o,this.commonService=s,this.BASE_API_URL=c.N.BASE_API_URL,this.drawTimes=[],this.numberCombinationMatrix=[],this.currentState="initial",this.isProduction=c.N.production,this.showDevArea=!1,this.inputData=[],this.inputDataSaveArray=[],this.isDisabledSingleHeaderButton=!0,this.deviceXs=this.commonService.deviceXs;const u=new Date,l=(0,i.p6)(u,"yyyy-MM-dd","en");this.manualResultForm=new a.cw({id:new a.NI(null),drawMasterId:new a.NI(null,[a.kI.required]),numberCombinationId:new a.NI(null,[a.kI.required]),single:new a.NI(null),triple:new a.NI(null),transaction_date:new a.NI(l)})}ngOnInit(){this.router.events.pipe((0,d.h)(t=>t instanceof r.m2),(0,p.U)(()=>this.route),(0,p.U)(t=>{for(;t.firstChild;)t=t.firstChild;return t}),(0,d.h)(t=>"primary"===t.outlet),(0,g.zg)(t=>t.data)).subscribe(t=>console.log("data",t));const t=new Date,e=(0,i.p6)(t,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+e).subscribe(t=>{this.drawTimes=t.data}),this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.playGameService.getNumberCombinationMatrixListener().subscribe(t=>{this.numberCombinationMatrix=t,this.copyNumberMatrix=JSON.parse(JSON.stringify(this.numberCombinationMatrix))})}iscurrentCombinationMatrixSelected(t){return t===this.currentCombinationMatrixSelectedId}setManualResultInForm(t,e){this.manualResultForm.patchValue({numberCombinationId:e.numberCombinationId,single:t,triple:e.visibleTripleNumber}),this.currentCombinationMatrixSelectedId=e.numberCombinationId}getTrippleButtonStyle(){return{"background-color":"red !important"}}gotoTop(){window.scroll({top:0,left:0,behavior:"smooth"})}scroll(t){t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}changeState(){this.currentState="initial"===this.currentState?"final":"initial"}saveManualResult(){this.inputDataSaveArray=[];for(let t=0;t<=4;t++){if(null==this.inputData[t])return this.inputDataSaveArray=[],void l().fire({position:"top-end",icon:"error",title:"Data Error",showConfirmButton:!1,timer:1e3});this.inputDataSaveArray.push({drawMasterId:this.manualResultForm.value.drawMasterId,twoDigitNumberCombinationId:this.inputData[t],gameTypeId:t+1})}l().fire({title:"Confirmation",text:"Do you sure to save this result?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(t=>{t.isConfirmed&&this.manualResultService.saveManualResult(this.inputDataSaveArray).subscribe(t=>{1===t.success?(l().fire({position:"top-end",icon:"success",title:"Result saved",showConfirmButton:!1,timer:1e3}),this.manualResultForm.reset(),this.inputDataSaveArray=[],this.inputData=[],this.currentCombinationMatrixSelectedId=-1):(this.validatorError=t.error,l().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3}))},t=>{console.log("data saving error",t)})})}gameDatepickerChange(t){const e=(0,i.p6)(this.manualResultForm.value.transaction_date,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+e).subscribe(t=>{this.drawTimes=t.data})}}return t.\u0275fac=function(e){return new(e||t)(h.Y36(m.eN),h.Y36(v),h.Y36(T.M),h.Y36(r.gz),h.Y36(r.F0),h.Y36(M.v))},t.\u0275cmp=h.Xpm({type:t,selectors:[["app-manual-result"]],decls:50,vars:20,consts:[[3,"ngClass"],[3,"formGroup"],[1,"d-flex","flex-column","bd-highlight"],[1,"p-2","bd-highlight"],["targetDiv",""],[2,"padding-left","400px"],["formControlName","drawMasterId","placeholder","Category"],[3,"value",4,"ngFor","ngForOf"],[1,"table","table-bordered","col-8"],[2,"background-color","rgb(17, 162, 206)"],[2,"background-color","rgb(255, 72, 0)"],[2,"background-color","rgb(243, 172, 172)"],[2,"background-color","rgb(189, 189, 189)"],["type","number","matInput","","placeholder","Input","required","",3,"ngModel","ngModelOptions","ngModelChange"],[2,"padding-left","700px"],["type","button",1,"btn","btn-primary",3,"click"],["mat-fab","",1,"coder-fab",3,"click"],[1,"bi","bi-arrow-up-circle"],["class","d-flex",4,"ngIf"],[3,"value"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){if(1&t){const t=h.EpF();h.TgZ(0,"div",0),h.TgZ(1,"form",1),h.TgZ(2,"div",2),h.TgZ(3,"div",3),h.TgZ(4,"div",null,4),h.TgZ(6,"mat-form-field",5),h.TgZ(7,"mat-label"),h._uU(8,"Draw time"),h.qZA(),h.TgZ(9,"mat-select",6),h.YNc(10,I,2,2,"mat-option",7),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(11,"div",5),h.TgZ(12,"table",8),h.TgZ(13,"tr"),h.TgZ(14,"th",9),h._uU(15,"Game Name"),h.qZA(),h.TgZ(16,"th",10),h._uU(17,"Inputs"),h.qZA(),h.qZA(),h.TgZ(18,"tr"),h.TgZ(19,"td",11),h._uU(20,"GoldStar GANGA-A"),h.qZA(),h.TgZ(21,"td",12),h.TgZ(22,"input",13),h.NdJ("ngModelChange",function(t){return e.inputData[0]=t}),h.qZA(),h.qZA(),h.qZA(),h.TgZ(23,"tr"),h.TgZ(24,"td",11),h._uU(25,"GoldStar JAMUNA-B"),h.qZA(),h.TgZ(26,"td",12),h.TgZ(27,"input",13),h.NdJ("ngModelChange",function(t){return e.inputData[1]=t}),h.qZA(),h.qZA(),h.qZA(),h.TgZ(28,"tr"),h.TgZ(29,"td",11),h._uU(30,"GoldStar SARASWATI-C"),h.qZA(),h.TgZ(31,"td",12),h.TgZ(32,"input",13),h.NdJ("ngModelChange",function(t){return e.inputData[2]=t}),h.qZA(),h.qZA(),h.qZA(),h.TgZ(33,"tr"),h.TgZ(34,"td",11),h._uU(35,"GoldStar GODAVARI-D"),h.qZA(),h.TgZ(36,"td",12),h.TgZ(37,"input",13),h.NdJ("ngModelChange",function(t){return e.inputData[3]=t}),h.qZA(),h.qZA(),h.qZA(),h.TgZ(38,"tr"),h.TgZ(39,"td",11),h._uU(40,"GoldStar GODAVARI-E"),h.qZA(),h.TgZ(41,"td",12),h.TgZ(42,"input",13),h.NdJ("ngModelChange",function(t){return e.inputData[4]=t}),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(43,"div",14),h.TgZ(44,"button",15),h.NdJ("click",function(){return e.saveManualResult()}),h._uU(45,"save"),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(46,"button",16),h.NdJ("click",function(){h.CHM(t);const n=h.MAs(5);return e.scroll(n)}),h._UZ(47,"i",17),h.qZA(),h.qZA(),h.YNc(48,_,4,1,"div",18),h.YNc(49,y,11,6,"div",18)}2&t&&(h.Q6J("ngClass",e.deviceXs?"mobile":"desktop"),h.xp6(1),h.Q6J("formGroup",e.manualResultForm),h.xp6(9),h.Q6J("ngForOf",e.drawTimes),h.xp6(12),h.Q6J("ngModel",e.inputData[0])("ngModelOptions",h.DdM(15,N)),h.xp6(5),h.Q6J("ngModel",e.inputData[1])("ngModelOptions",h.DdM(16,N)),h.xp6(5),h.Q6J("ngModel",e.inputData[2])("ngModelOptions",h.DdM(17,N)),h.xp6(5),h.Q6J("ngModel",e.inputData[3])("ngModelOptions",h.DdM(18,N)),h.xp6(5),h.Q6J("ngModel",e.inputData[4])("ngModelOptions",h.DdM(19,N)),h.xp6(6),h.Q6J("ngIf",!e.isProduction),h.xp6(1),h.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[i.mk,a._Y,a.JL,a.sg,w.KE,w.hX,C.gD,a.JJ,a.u,i.sg,a.wV,x.Nt,a.Fj,a.Q7,a.On,S.lW,i.O5,q.ey,D.Rr],pipes:[i.Ts],styles:[".triple-number-button[_ngcontent-%COMP%]:hover{background-color:#676c67!important}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.scroll-arrow[_ngcontent-%COMP%]{border-radius:50%}.green[_ngcontent-%COMP%]{background-color:#f766cb;height:55px;width:55px;border-radius:30px;color:#fff}"],data:{animation:[(0,s.X$)("changeDivSize",[(0,s.SB)("initial",(0,s.oB)({backgroundColor:"green",width:"100px",height:"100px"})),(0,s.SB)("final",(0,s.oB)({backgroundColor:"red",width:"200px",height:"200px"})),(0,s.eR)("initial=>final",(0,s.jt)("1500ms")),(0,s.eR)("final=>initial",(0,s.jt)("1000ms"))])]}}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[r.Bz.forChild(R)],r.Bz]}),t})();var U=n(93738),B=n(43220),O=n(70346),k=n(45480);let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[i.ez,J,D.rP,U.QW,a.u5,w.lN,a.UX,x.c,B.FA,C.LD,O.g,S.ot,D.rP,k.q]]}),t})()},51068:function(t,e,n){n.d(e,{m:function(){return o}});var i=n(37716),r=n(73535);let o=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isAdmin()}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(r.e))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);