"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[307],{5480:function(t,e,i){i.d(e,{q:function(){return r}});var a=i(1095),n=i(9983),o=i(7716);let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[a.ot,n.c]}),t})()},4307:function(t,e,i){i.r(e),i.d(e,{ManualResultModule:function(){return nt}});var a=i(8583),n=i(3423),o=i(1068),r=i(3679),s=i(7238),u=i(8259),l=i.n(u),d=i(2340),c=i(5435),g=i(8002),p=i(9773),m=i(7716),h=i(1841),Z=i(9765),b=i(5304),A=i(8307),f=i(4889);let T=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.drawTimes=[],this.loadData=[],this.drawTimeSubject=new Z.xQ,this.loadDataSubject=new Z.xQ,this.BASE_API_URL=d.N.BASE_API_URL,this.http.get(this.BASE_API_URL+"/drawTimes").subscribe(t=>{this.drawTimes=t.data,this.drawTimeSubject.next([...this.drawTimes])})}getLoadData(t){this.http.get(this.BASE_API_URL+"/dev/getLoadDetails/"+t).subscribe(t=>{this.loadData=t.data,this.loadDataSubject.next([...this.loadData])})}getAllDrawTimes(){return[...this.drawTimes]}getLoadDataListener(){return this.loadDataSubject.asObservable()}getAllDrawTimesListener(){return this.drawTimeSubject.asObservable()}saveManualResult(t){return this.http.post(this.BASE_API_URL+"/manualResult",t).pipe((0,b.K)(this.errorService.serverError),(0,A.b)(t=>{}))}}return t.\u0275fac=function(e){return new(e||t)(m.LFG(h.eN),m.LFG(f.T))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=i(3865),w=i(5620),D=i(2567),q=i(8030),v=i(5939),S=i(8295),_=i(7441),N=i(9983),M=i(1095),I=i(2458),y=i(5396);function U(t,e){if(1&t&&(m.TgZ(0,"mat-option",23),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.drawId),m.xp6(1),m.hij(" ",t.endTime," ")}}function C(t,e){if(1&t&&(m.TgZ(0,"mat-option",23),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.drawId),m.xp6(1),m.hij(" ",t.endTime," ")}}function O(t,e){if(1&t&&(m.TgZ(0,"tr",24),m.TgZ(1,"th",25),m._uU(2,"Sereise Name"),m.qZA(),m.TgZ(3,"th",25),m._uU(4,"SR"),m.qZA(),m.TgZ(5,"th",25),m._uU(6),m.qZA(),m.TgZ(7,"th",25),m._uU(8),m.qZA(),m.TgZ(9,"th",25),m._uU(10),m.qZA(),m.TgZ(11,"th",25),m._uU(12),m.qZA(),m.TgZ(13,"th",25),m._uU(14),m.qZA(),m.TgZ(15,"th",25),m._uU(16),m.qZA(),m.TgZ(17,"th",25),m._uU(18),m.qZA(),m.TgZ(19,"th",25),m._uU(20),m.qZA(),m.TgZ(21,"th",25),m._uU(22),m.qZA(),m.TgZ(23,"th",25),m._uU(24),m.qZA(),m.qZA()),2&t){const t=m.oxw();m.xp6(6),m.Oqu(t.twoDigitNumberSet[0].number_set),m.xp6(2),m.Oqu(t.twoDigitNumberSet[1].number_set),m.xp6(2),m.Oqu(t.twoDigitNumberSet[2].number_set),m.xp6(2),m.Oqu(t.twoDigitNumberSet[3].number_set),m.xp6(2),m.Oqu(t.twoDigitNumberSet[4].number_set),m.xp6(2),m.Oqu(t.twoDigitNumberSet[5].number_set),m.xp6(2),m.Oqu(t.twoDigitNumberSet[6].number_set),m.xp6(2),m.Oqu(t.twoDigitNumberSet[7].number_set),m.xp6(2),m.Oqu(t.twoDigitNumberSet[8].number_set),m.xp6(2),m.Oqu(t.twoDigitNumberSet[9].number_set)}}function J(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set1?e.loadData[t].set1:"0")}}function R(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set2?e.loadData[t].set2:"0")}}function L(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set3?e.loadData[t].set3:"0")}}function Q(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set4?e.loadData[t].set4:"0")}}function B(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set5?e.loadData[t].set5:"0")}}function k(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set6?e.loadData[t].set6:"0")}}function Y(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set7?e.loadData[t].set7:"0")}}function F(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set8?e.loadData[t].set8:"0")}}function P(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set9?e.loadData[t].set9:"0")}}function G(t,e){if(1&t&&(m.TgZ(0,"td",25),m._uU(1),m.qZA()),2&t){const t=m.oxw().index,e=m.oxw();m.xp6(1),m.Oqu(e.loadData[t].set10?e.loadData[t].set10:"0")}}function E(t,e){if(1&t&&(m.TgZ(0,"tr",26),m.TgZ(1,"td",25),m._uU(2),m.qZA(),m.TgZ(3,"td",25),m._uU(4),m.qZA(),m.YNc(5,J,2,1,"td",27),m.YNc(6,R,2,1,"td",27),m.YNc(7,L,2,1,"td",27),m.YNc(8,Q,2,1,"td",27),m.YNc(9,B,2,1,"td",27),m.YNc(10,k,2,1,"td",27),m.YNc(11,Y,2,1,"td",27),m.YNc(12,F,2,1,"td",27),m.YNc(13,P,2,1,"td",27),m.YNc(14,G,2,1,"td",27),m.qZA()),2&t){const t=e.$implicit,i=e.index,a=m.oxw();m.xp6(2),m.Oqu(t.gameName),m.xp6(2),m.Oqu(t.seriesName),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i]),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i]),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i]),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i]),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i]),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i]),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i]),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i]),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i]),m.xp6(1),m.Q6J("ngIf",null!=a.loadData[i])}}function j(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"div",28),m.TgZ(1,"div",29),m.TgZ(2,"mat-slide-toggle",30),m.NdJ("change",function(){m.CHM(t);const e=m.oxw();return e.showDevArea=!e.showDevArea}),m._uU(3),m.qZA(),m.qZA(),m.qZA()}if(2&t){const t=m.oxw();m.xp6(3),m.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function z(t,e){1&t&&(m.TgZ(0,"div",28),m.TgZ(1,"div",29),m.TgZ(2,"pre"),m._uU(3,"\n      "),m.qZA(),m.qZA(),m.TgZ(4,"div",31),m.TgZ(5,"pre"),m._uU(6,"\n      "),m.qZA(),m.qZA(),m.TgZ(7,"div",29),m._UZ(8,"pre"),m.qZA(),m.qZA())}const X=function(){return{standalone:!0}},V=[{path:"",canActivate:[o.m],component:(()=>{class t{constructor(t,e,i,n,o,s,u){this.http=t,this.manualResultService=e,this.playGameService=i,this.route=n,this.router=o,this.commonService=s,this.gameTypeService=u,this.BASE_API_URL=d.N.BASE_API_URL,this.drawTimes=[],this.drawTimesAll=[],this.gameTypes=[],this.numberCombinationMatrix=[],this.currentState="initial",this.isProduction=d.N.production,this.showDevArea=!1,this.inputData=[],this.inputDataSaveArray=[],this.twoDigitNumberSet=[],this.isDisabledSingleHeaderButton=!0,this.deviceXs=this.commonService.deviceXs;const l=new Date,c=(0,a.p6)(l,"yyyy-MM-dd","en");this.manualResultForm=new r.cw({id:new r.NI(null),drawMasterId:new r.NI(null,[r.kI.required]),numberCombinationId:new r.NI(null,[r.kI.required]),single:new r.NI(null),triple:new r.NI(null),transaction_date:new r.NI(c)})}ngOnInit(){this.loadData=[],this.manualResultService.getLoadDataListener().subscribe(t=>{this.loadData=t}),this.drawTimesAll=this.manualResultService.getAllDrawTimes(),this.manualResultService.getAllDrawTimesListener().subscribe(t=>{this.drawTimesAll=t}),this.gameTypes=this.gameTypeService.getGameType(),this.gameTypeService.getGameTypeListener().subscribe(t=>{this.gameTypes=t,this.gameTypes=this.gameTypes.filter(t=>t.gameTypeId)}),this.gameTypes=this.gameTypes.filter(t=>t.gameTypeId),this.twoDigitNumberSet=this.playGameService.getTwoDigitNumberSetNumbers(),this.playGameService.getTwoDigitNumberSetListener().subscribe(t=>{this.twoDigitNumberSet=t}),this.router.events.pipe((0,c.h)(t=>t instanceof n.m2),(0,g.U)(()=>this.route),(0,g.U)(t=>{for(;t.firstChild;)t=t.firstChild;return t}),(0,c.h)(t=>"primary"===t.outlet),(0,p.zg)(t=>t.data)).subscribe(t=>console.log("data",t));const t=new Date,e=(0,a.p6)(t,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+e).subscribe(t=>{this.drawTimes=t.data}),this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.playGameService.getNumberCombinationMatrixListener().subscribe(t=>{this.numberCombinationMatrix=t,this.copyNumberMatrix=JSON.parse(JSON.stringify(this.numberCombinationMatrix))})}getLoadData(){console.log(this.manualResultForm.value.drawMasterId),this.manualResultService.getLoadData(this.manualResultForm.value.drawMasterId)}newTestFunction(){this.loadData=this.manualResultService.getLoadData(1)}iscurrentCombinationMatrixSelected(t){return t===this.currentCombinationMatrixSelectedId}setManualResultInForm(t,e){this.manualResultForm.patchValue({numberCombinationId:e.numberCombinationId,single:t,triple:e.visibleTripleNumber}),this.currentCombinationMatrixSelectedId=e.numberCombinationId}getTrippleButtonStyle(){return{"background-color":"red !important"}}gotoTop(){window.scroll({top:0,left:0,behavior:"smooth"})}scroll(t){t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}changeState(){this.currentState="initial"===this.currentState?"final":"initial"}saveManualResult(){this.inputDataSaveArray=[];for(let t=0;t<=4;t++){if(null==this.inputData[t])return this.inputDataSaveArray=[],void l().fire({position:"top-end",icon:"error",title:"Data Error",showConfirmButton:!1,timer:1e3});this.inputDataSaveArray.push({drawMasterId:this.manualResultForm.value.drawMasterId,twoDigitNumberCombinationId:this.inputData[t],gameTypeId:t+1})}l().fire({title:"Confirmation",text:"Do you sure to save this result?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(t=>{t.isConfirmed&&this.manualResultService.saveManualResult(this.inputDataSaveArray).subscribe(t=>{1===t.success?(l().fire({position:"top-end",icon:"success",title:"Result saved",showConfirmButton:!1,timer:1e3}),this.manualResultForm.reset(),this.inputDataSaveArray=[],this.inputData=[],this.currentCombinationMatrixSelectedId=-1):(this.validatorError=t.error,l().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3}))},t=>{console.log("data saving error",t)})})}gameDatepickerChange(t){const e=(0,a.p6)(this.manualResultForm.value.transaction_date,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+e).subscribe(t=>{this.drawTimes=t.data})}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(h.eN),m.Y36(T),m.Y36(x.M),m.Y36(n.gz),m.Y36(n.F0),m.Y36(w.v),m.Y36(D.u))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-manual-result"]],decls:68,vars:24,consts:[[3,"ngClass"],["label","Create Result"],[3,"formGroup"],[1,"d-flex","flex-column","bd-highlight"],[1,"p-2","bd-highlight"],["targetDiv",""],[2,"padding-left","400px"],["formControlName","drawMasterId","placeholder","Category"],[3,"value",4,"ngFor","ngForOf"],[1,"table","table-bordered","col-8"],[2,"background-color","rgb(17, 162, 206)"],[2,"background-color","rgb(255, 72, 0)"],[2,"background-color","rgb(243, 172, 172)"],[2,"background-color","rgb(189, 189, 189)"],["type","number","matInput","","placeholder","Input","required","",3,"ngModel","ngModelOptions","ngModelChange"],[2,"padding-left","700px"],["type","button",1,"btn","btn-primary",3,"click"],["label","Load"],["mat-raised-button","","color","primary",3,"click"],[1,"table","table-bordered"],["style","background-color: rgb(54, 54, 54); color: white;",4,"ngIf"],["style"," font-weight: bold; font-size: 30px;",4,"ngFor","ngForOf"],["class","d-flex",4,"ngIf"],[3,"value"],[2,"background-color","rgb(54, 54, 54)","color","white"],["scope","col"],[2,"font-weight","bold","font-size","30px"],["scope","col",4,"ngIf"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(m.TgZ(0,"div",0),m.TgZ(1,"mat-tab-group"),m.TgZ(2,"mat-tab",1),m.TgZ(3,"form",2),m.TgZ(4,"div",3),m.TgZ(5,"div",4),m.TgZ(6,"div",null,5),m.TgZ(8,"mat-form-field",6),m.TgZ(9,"mat-label"),m._uU(10,"Draw time"),m.qZA(),m.TgZ(11,"mat-select",7),m.YNc(12,U,2,2,"mat-option",8),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(13,"div",6),m.TgZ(14,"table",9),m.TgZ(15,"tr"),m.TgZ(16,"th",10),m._uU(17,"Game Name"),m.qZA(),m.TgZ(18,"th",11),m._uU(19,"Inputs"),m.qZA(),m.qZA(),m.TgZ(20,"tr"),m.TgZ(21,"td",12),m._uU(22,"GoldStar GANGA-A"),m.qZA(),m.TgZ(23,"td",13),m.TgZ(24,"input",14),m.NdJ("ngModelChange",function(t){return e.inputData[0]=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(25,"tr"),m.TgZ(26,"td",12),m._uU(27,"GoldStar JAMUNA-B"),m.qZA(),m.TgZ(28,"td",13),m.TgZ(29,"input",14),m.NdJ("ngModelChange",function(t){return e.inputData[1]=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(30,"tr"),m.TgZ(31,"td",12),m._uU(32,"GoldStar SARASWATI-C"),m.qZA(),m.TgZ(33,"td",13),m.TgZ(34,"input",14),m.NdJ("ngModelChange",function(t){return e.inputData[2]=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(35,"tr"),m.TgZ(36,"td",12),m._uU(37,"GoldStar GODAVARI-D"),m.qZA(),m.TgZ(38,"td",13),m.TgZ(39,"input",14),m.NdJ("ngModelChange",function(t){return e.inputData[3]=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(40,"tr"),m.TgZ(41,"td",12),m._uU(42,"GoldStar GODAVARI-E"),m.qZA(),m.TgZ(43,"td",13),m.TgZ(44,"input",14),m.NdJ("ngModelChange",function(t){return e.inputData[4]=t}),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(45,"div",15),m.TgZ(46,"button",16),m.NdJ("click",function(){return e.saveManualResult()}),m._uU(47,"save"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(48,"mat-tab",17),m.TgZ(49,"form",2),m.TgZ(50,"div",3),m.TgZ(51,"div",4),m.TgZ(52,"div",null,5),m.TgZ(54,"mat-form-field",6),m.TgZ(55,"mat-label"),m._uU(56,"Draw time"),m.qZA(),m.TgZ(57,"mat-select",7),m.YNc(58,C,2,2,"mat-option",8),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(59,"button",18),m.NdJ("click",function(){return e.getLoadData()}),m._uU(60,"Search"),m.qZA(),m.TgZ(61,"table",19),m.TgZ(62,"thead"),m.YNc(63,O,25,10,"tr",20),m.qZA(),m.TgZ(64,"tbody"),m.YNc(65,E,15,12,"tr",21),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.YNc(66,j,4,1,"div",22),m.YNc(67,z,9,0,"div",22)),2&t&&(m.Q6J("ngClass",e.deviceXs?"mobile":"desktop"),m.xp6(3),m.Q6J("formGroup",e.manualResultForm),m.xp6(9),m.Q6J("ngForOf",e.drawTimes),m.xp6(12),m.Q6J("ngModel",e.inputData[0])("ngModelOptions",m.DdM(19,X)),m.xp6(5),m.Q6J("ngModel",e.inputData[1])("ngModelOptions",m.DdM(20,X)),m.xp6(5),m.Q6J("ngModel",e.inputData[2])("ngModelOptions",m.DdM(21,X)),m.xp6(5),m.Q6J("ngModel",e.inputData[3])("ngModelOptions",m.DdM(22,X)),m.xp6(5),m.Q6J("ngModel",e.inputData[4])("ngModelOptions",m.DdM(23,X)),m.xp6(5),m.Q6J("formGroup",e.manualResultForm),m.xp6(9),m.Q6J("ngForOf",e.drawTimesAll),m.xp6(5),m.Q6J("ngIf",null!=e.twoDigitNumberSet[0]),m.xp6(2),m.Q6J("ngForOf",e.gameTypes),m.xp6(1),m.Q6J("ngIf",!e.isProduction),m.xp6(1),m.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[a.mk,q.oO,v.SP,v.uX,r._Y,r.JL,r.sg,S.KE,S.hX,_.gD,r.JJ,r.u,a.sg,r.wV,N.Nt,r.Fj,r.Q7,r.On,M.lW,a.O5,I.ey,y.Rr],styles:[".triple-number-button[_ngcontent-%COMP%]:hover{background-color:#676c67!important}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.scroll-arrow[_ngcontent-%COMP%]{border-radius:50%}.green[_ngcontent-%COMP%]{background-color:#f766cb;height:55px;width:55px;border-radius:30px;color:#fff}"],data:{animation:[(0,s.X$)("changeDivSize",[(0,s.SB)("initial",(0,s.oB)({backgroundColor:"green",width:"100px",height:"100px"})),(0,s.SB)("final",(0,s.oB)({backgroundColor:"red",width:"200px",height:"200px"})),(0,s.eR)("initial=>final",(0,s.jt)("1500ms")),(0,s.eR)("final=>initial",(0,s.jt)("1000ms"))])]}}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[n.Bz.forChild(V)],n.Bz]}),t})();var H=i(3738),W=i(3220),K=i(346),tt=i(5480),et=i(5566),it=i(1494),at=i(6627);let nt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[a.ez,$,y.rP,H.QW,r.u5,S.lN,r.UX,N.c,W.FA,_.LD,K.g,M.ot,tt.q,v.Nh,et.o9,r.UX,it.JX,at.Ps]]}),t})()},1068:function(t,e,i){i.d(e,{m:function(){return o}});var a=i(7716),n=i(3535);let o=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isAdmin()}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(n.e))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);