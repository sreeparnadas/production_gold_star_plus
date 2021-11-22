!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[307],{5480:function(t,e,n){n.d(e,{q:function(){return l}});var a,o=n(1095),r=n(9983),u=n(7716),l=((a=function t(){i(this,t)}).\u0275fac=function(t){return new(t||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[o.ot,r.c]}),a)},4307:function(e,n,o){o.r(n),o.d(n,{ManualResultModule:function(){return lt}});var r,u=o(8583),l=o(3423),s=o(1068),d=o(3679),c=o(7238),g=o(8259),p=o.n(g),f=o(2340),m=o(5435),h=o(8002),Z=o(9773),b=o(7716),v=o(1841),A=o(9765),T=o(5304),w=o(8307),x=o(4889),D=((r=function(){function e(n,a){var o=this;i(this,e),this.http=n,this.errorService=a,this.drawTimes=[],this.loadData=[],this.drawTimeSubject=new A.xQ,this.loadDataSubject=new A.xQ,this.BASE_API_URL=f.N.BASE_API_URL,this.http.get(this.BASE_API_URL+"/drawTimes").subscribe(function(e){o.drawTimes=e.data,o.drawTimeSubject.next(t(o.drawTimes))})}return a(e,[{key:"getLoadData",value:function(e){var n=this;this.http.get(this.BASE_API_URL+"/dev/getLoadDetails/"+e).subscribe(function(e){n.loadData=e.data,n.loadDataSubject.next(t(n.loadData))})}},{key:"getAllDrawTimes",value:function(){return t(this.drawTimes)}},{key:"getLoadDataListener",value:function(){return this.loadDataSubject.asObservable()}},{key:"getAllDrawTimesListener",value:function(){return this.drawTimeSubject.asObservable()}},{key:"saveManualResult",value:function(t){return this.http.post(this.BASE_API_URL+"/manualResult",t).pipe((0,T.K)(this.errorService.serverError),(0,w.b)(function(t){}))}}]),e}()).\u0275fac=function(t){return new(t||r)(b.LFG(v.eN),b.LFG(x.T))},r.\u0275prov=b.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r),q=o(3865),y=o(5620),S=o(2567),_=o(8030),N=o(5939),I=o(8295),M=o(7441),U=o(9983),C=o(1095),O=o(2458),k=o(5396);function J(t,e){if(1&t&&(b.TgZ(0,"mat-option",23),b._uU(1),b.qZA()),2&t){var n=e.$implicit;b.Q6J("value",n.drawId),b.xp6(1),b.hij(" ",n.endTime," ")}}function R(t,e){if(1&t&&(b.TgZ(0,"mat-option",23),b._uU(1),b.qZA()),2&t){var n=e.$implicit;b.Q6J("value",n.drawId),b.xp6(1),b.hij(" ",n.endTime," ")}}function Q(t,e){if(1&t&&(b.TgZ(0,"tr",24),b.TgZ(1,"th",25),b._uU(2,"Sereise Name"),b.qZA(),b.TgZ(3,"th",25),b._uU(4,"SR"),b.qZA(),b.TgZ(5,"th",25),b._uU(6),b.qZA(),b.TgZ(7,"th",25),b._uU(8),b.qZA(),b.TgZ(9,"th",25),b._uU(10),b.qZA(),b.TgZ(11,"th",25),b._uU(12),b.qZA(),b.TgZ(13,"th",25),b._uU(14),b.qZA(),b.TgZ(15,"th",25),b._uU(16),b.qZA(),b.TgZ(17,"th",25),b._uU(18),b.qZA(),b.TgZ(19,"th",25),b._uU(20),b.qZA(),b.TgZ(21,"th",25),b._uU(22),b.qZA(),b.TgZ(23,"th",25),b._uU(24),b.qZA(),b.qZA()),2&t){var n=b.oxw();b.xp6(6),b.Oqu(n.twoDigitNumberSet[0].number_set),b.xp6(2),b.Oqu(n.twoDigitNumberSet[1].number_set),b.xp6(2),b.Oqu(n.twoDigitNumberSet[2].number_set),b.xp6(2),b.Oqu(n.twoDigitNumberSet[3].number_set),b.xp6(2),b.Oqu(n.twoDigitNumberSet[4].number_set),b.xp6(2),b.Oqu(n.twoDigitNumberSet[5].number_set),b.xp6(2),b.Oqu(n.twoDigitNumberSet[6].number_set),b.xp6(2),b.Oqu(n.twoDigitNumberSet[7].number_set),b.xp6(2),b.Oqu(n.twoDigitNumberSet[8].number_set),b.xp6(2),b.Oqu(n.twoDigitNumberSet[9].number_set)}}function L(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][0].total:"0")}}function B(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][1].total:"0")}}function Y(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][2].total:"0")}}function F(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][3].total:"0")}}function P(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][4].total:"0")}}function G(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][5].total:"0")}}function j(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][6].total:"0")}}function E(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][7].total:"0")}}function z(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][8].total:"0")}}function X(t,e){if(1&t&&(b.TgZ(0,"td",28),b._uU(1),b.qZA()),2&t){var n=b.oxw().index,a=b.oxw();b.xp6(1),b.Oqu(a.loadData[n]?a.loadData[n][9].total:"0")}}function V(t,e){if(1&t&&(b.TgZ(0,"tr",26),b.TgZ(1,"td",25),b._uU(2),b.qZA(),b.TgZ(3,"td",25),b._uU(4),b.qZA(),b.YNc(5,L,2,1,"td",27),b.YNc(6,B,2,1,"td",27),b.YNc(7,Y,2,1,"td",27),b.YNc(8,F,2,1,"td",27),b.YNc(9,P,2,1,"td",27),b.YNc(10,G,2,1,"td",27),b.YNc(11,j,2,1,"td",27),b.YNc(12,E,2,1,"td",27),b.YNc(13,z,2,1,"td",27),b.YNc(14,X,2,1,"td",27),b.qZA()),2&t){var n=e.$implicit,a=b.oxw();b.xp6(2),b.Oqu(n.gameName),b.xp6(2),b.Oqu(n.seriesName),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0]),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0]),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0]),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0]),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0]),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0]),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0]),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0]),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0]),b.xp6(1),b.Q6J("ngIf",null!=a.loadData[0])}}function $(t,e){if(1&t){var n=b.EpF();b.TgZ(0,"div",29),b.TgZ(1,"div",30),b.TgZ(2,"mat-slide-toggle",31),b.NdJ("change",function(){b.CHM(n);var t=b.oxw();return t.showDevArea=!t.showDevArea}),b._uU(3),b.qZA(),b.qZA(),b.qZA()}if(2&t){var a=b.oxw();b.xp6(3),b.Oqu(a.showDevArea?"Hide Developer Area":"Show Developer Area")}}function H(t,e){1&t&&(b.TgZ(0,"div",29),b.TgZ(1,"div",30),b.TgZ(2,"pre"),b._uU(3,"\n      "),b.qZA(),b.qZA(),b.TgZ(4,"div",32),b.TgZ(5,"pre"),b._uU(6,"\n      "),b.qZA(),b.qZA(),b.TgZ(7,"div",30),b._UZ(8,"pre"),b.qZA(),b.qZA())}var W=function(){return{standalone:!0}},K=[{path:"",canActivate:[s.m],component:function(){var t=function(){function t(e,n,a,o,r,l,s){i(this,t),this.http=e,this.manualResultService=n,this.playGameService=a,this.route=o,this.router=r,this.commonService=l,this.gameTypeService=s,this.BASE_API_URL=f.N.BASE_API_URL,this.drawTimes=[],this.gameTypes=[],this.numberCombinationMatrix=[],this.currentState="initial",this.isProduction=f.N.production,this.showDevArea=!1,this.inputData=[],this.inputDataSaveArray=[],this.twoDigitNumberSet=[],this.isDisabledSingleHeaderButton=!0,this.deviceXs=this.commonService.deviceXs;var c=new Date,g=(0,u.p6)(c,"yyyy-MM-dd","en");this.manualResultForm=new d.cw({id:new d.NI(null),drawMasterId:new d.NI(null,[d.kI.required]),numberCombinationId:new d.NI(null,[d.kI.required]),single:new d.NI(null),triple:new d.NI(null),transaction_date:new d.NI(g)})}return a(t,[{key:"ngOnInit",value:function(){var t=this;this.loadData=[];for(var e=1;e<=5;e++){this.loadData[e]=[];for(var n=0;n<=9;n++)this.loadData[e][n]=[]}this.manualResultService.getLoadDataListener().subscribe(function(e){t.loadData=e}),this.gameTypes=this.gameTypeService.getGameType(),this.gameTypeService.getGameTypeListener().subscribe(function(e){t.gameTypes=e,t.gameTypes=t.gameTypes.filter(function(t){return t.gameTypeId})}),this.gameTypes=this.gameTypes.filter(function(t){return t.gameTypeId}),this.twoDigitNumberSet=this.playGameService.getTwoDigitNumberSetNumbers(),this.playGameService.getTwoDigitNumberSetListener().subscribe(function(e){t.twoDigitNumberSet=e}),this.router.events.pipe((0,m.h)(function(t){return t instanceof l.m2}),(0,h.U)(function(){return t.route}),(0,h.U)(function(t){for(;t.firstChild;)t=t.firstChild;return t}),(0,m.h)(function(t){return"primary"===t.outlet}),(0,Z.zg)(function(t){return t.data})).subscribe(function(t){return console.log("data",t)});var a=new Date,i=(0,u.p6)(a,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+i).subscribe(function(e){t.drawTimes=e.data}),this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.playGameService.getNumberCombinationMatrixListener().subscribe(function(e){t.numberCombinationMatrix=e,t.copyNumberMatrix=JSON.parse(JSON.stringify(t.numberCombinationMatrix))})}},{key:"getLoadData",value:function(){console.log(this.manualResultForm.value.drawMasterId),this.manualResultService.getLoadData(this.manualResultForm.value.drawMasterId)}},{key:"newTestFunction",value:function(){this.loadData=this.manualResultService.getLoadData(1)}},{key:"iscurrentCombinationMatrixSelected",value:function(t){return t===this.currentCombinationMatrixSelectedId}},{key:"setManualResultInForm",value:function(t,e){this.manualResultForm.patchValue({numberCombinationId:e.numberCombinationId,single:t,triple:e.visibleTripleNumber}),this.currentCombinationMatrixSelectedId=e.numberCombinationId}},{key:"getTrippleButtonStyle",value:function(){return{"background-color":"red !important"}}},{key:"gotoTop",value:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"scroll",value:function(t){t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}},{key:"changeState",value:function(){this.currentState="initial"===this.currentState?"final":"initial"}},{key:"saveManualResult",value:function(){var t=this;this.inputDataSaveArray=[];for(var e=0;e<=4;e++){if(null==this.inputData[e])return this.inputDataSaveArray=[],void p().fire({position:"top-end",icon:"error",title:"Data Error",showConfirmButton:!1,timer:1e3});this.inputDataSaveArray.push({drawMasterId:this.manualResultForm.value.drawMasterId,twoDigitNumberCombinationId:this.inputData[e],gameTypeId:e+1})}p().fire({title:"Confirmation",text:"Do you sure to save this result?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(function(e){e.isConfirmed&&t.manualResultService.saveManualResult(t.inputDataSaveArray).subscribe(function(e){1===e.success?(p().fire({position:"top-end",icon:"success",title:"Result saved",showConfirmButton:!1,timer:1e3}),t.manualResultForm.reset(),t.inputDataSaveArray=[],t.inputData=[],t.currentCombinationMatrixSelectedId=-1):(t.validatorError=e.error,p().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3}))},function(t){console.log("data saving error",t)})})}},{key:"gameDatepickerChange",value:function(t){var e=this,n=(0,u.p6)(this.manualResultForm.value.transaction_date,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+n).subscribe(function(t){e.drawTimes=t.data})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(b.Y36(v.eN),b.Y36(D),b.Y36(q.M),b.Y36(l.gz),b.Y36(l.F0),b.Y36(y.v),b.Y36(S.u))},t.\u0275cmp=b.Xpm({type:t,selectors:[["app-manual-result"]],decls:68,vars:24,consts:[[3,"ngClass"],["label","Create Result"],[3,"formGroup"],[1,"d-flex","flex-column","bd-highlight"],[1,"p-2","bd-highlight"],["targetDiv",""],[2,"padding-left","400px"],["formControlName","drawMasterId","placeholder","Category"],[3,"value",4,"ngFor","ngForOf"],[1,"table","table-bordered","col-8"],[2,"background-color","rgb(17, 162, 206)"],[2,"background-color","rgb(255, 72, 0)"],[2,"background-color","rgb(243, 172, 172)"],[2,"background-color","rgb(189, 189, 189)"],["type","number","matInput","","placeholder","Input","required","",3,"ngModel","ngModelOptions","ngModelChange"],[2,"padding-left","700px"],["type","button",1,"btn","btn-primary",3,"click"],["label","Load"],["mat-raised-button","","color","primary",3,"click"],[1,"table","table-bordered"],["style","background-color: rgb(54, 54, 54); color: white;",4,"ngIf"],["style"," font-weight: bold; font-size: 30px;",4,"ngFor","ngForOf"],["class","d-flex",4,"ngIf"],[3,"value"],[2,"background-color","rgb(54, 54, 54)","color","white"],["scope","col"],[2,"font-weight","bold","font-size","30px"],["scope","row",4,"ngIf"],["scope","row"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(b.TgZ(0,"div",0),b.TgZ(1,"mat-tab-group"),b.TgZ(2,"mat-tab",1),b.TgZ(3,"form",2),b.TgZ(4,"div",3),b.TgZ(5,"div",4),b.TgZ(6,"div",null,5),b.TgZ(8,"mat-form-field",6),b.TgZ(9,"mat-label"),b._uU(10,"Draw time"),b.qZA(),b.TgZ(11,"mat-select",7),b.YNc(12,J,2,2,"mat-option",8),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.TgZ(13,"div",6),b.TgZ(14,"table",9),b.TgZ(15,"tr"),b.TgZ(16,"th",10),b._uU(17,"Game Name"),b.qZA(),b.TgZ(18,"th",11),b._uU(19,"Inputs"),b.qZA(),b.qZA(),b.TgZ(20,"tr"),b.TgZ(21,"td",12),b._uU(22,"GoldStar GANGA-A"),b.qZA(),b.TgZ(23,"td",13),b.TgZ(24,"input",14),b.NdJ("ngModelChange",function(t){return e.inputData[0]=t}),b.qZA(),b.qZA(),b.qZA(),b.TgZ(25,"tr"),b.TgZ(26,"td",12),b._uU(27,"GoldStar JAMUNA-B"),b.qZA(),b.TgZ(28,"td",13),b.TgZ(29,"input",14),b.NdJ("ngModelChange",function(t){return e.inputData[1]=t}),b.qZA(),b.qZA(),b.qZA(),b.TgZ(30,"tr"),b.TgZ(31,"td",12),b._uU(32,"GoldStar SARASWATI-C"),b.qZA(),b.TgZ(33,"td",13),b.TgZ(34,"input",14),b.NdJ("ngModelChange",function(t){return e.inputData[2]=t}),b.qZA(),b.qZA(),b.qZA(),b.TgZ(35,"tr"),b.TgZ(36,"td",12),b._uU(37,"GoldStar GODAVARI-D"),b.qZA(),b.TgZ(38,"td",13),b.TgZ(39,"input",14),b.NdJ("ngModelChange",function(t){return e.inputData[3]=t}),b.qZA(),b.qZA(),b.qZA(),b.TgZ(40,"tr"),b.TgZ(41,"td",12),b._uU(42,"GoldStar GODAVARI-E"),b.qZA(),b.TgZ(43,"td",13),b.TgZ(44,"input",14),b.NdJ("ngModelChange",function(t){return e.inputData[4]=t}),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.TgZ(45,"div",15),b.TgZ(46,"button",16),b.NdJ("click",function(){return e.saveManualResult()}),b._uU(47,"save"),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.TgZ(48,"mat-tab",17),b.TgZ(49,"form",2),b.TgZ(50,"div",3),b.TgZ(51,"div",4),b.TgZ(52,"div",null,5),b.TgZ(54,"mat-form-field",6),b.TgZ(55,"mat-label"),b._uU(56,"Draw time"),b.qZA(),b.TgZ(57,"mat-select",7),b.YNc(58,R,2,2,"mat-option",8),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.TgZ(59,"button",18),b.NdJ("click",function(){return e.getLoadData()}),b._uU(60,"Search"),b.qZA(),b.TgZ(61,"table",19),b.TgZ(62,"thead"),b.YNc(63,Q,25,10,"tr",20),b.qZA(),b.TgZ(64,"tbody"),b.YNc(65,V,15,12,"tr",21),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.YNc(66,$,4,1,"div",22),b.YNc(67,H,9,0,"div",22)),2&t&&(b.Q6J("ngClass",e.deviceXs?"mobile":"desktop"),b.xp6(3),b.Q6J("formGroup",e.manualResultForm),b.xp6(9),b.Q6J("ngForOf",e.drawTimes),b.xp6(12),b.Q6J("ngModel",e.inputData[0])("ngModelOptions",b.DdM(19,W)),b.xp6(5),b.Q6J("ngModel",e.inputData[1])("ngModelOptions",b.DdM(20,W)),b.xp6(5),b.Q6J("ngModel",e.inputData[2])("ngModelOptions",b.DdM(21,W)),b.xp6(5),b.Q6J("ngModel",e.inputData[3])("ngModelOptions",b.DdM(22,W)),b.xp6(5),b.Q6J("ngModel",e.inputData[4])("ngModelOptions",b.DdM(23,W)),b.xp6(5),b.Q6J("formGroup",e.manualResultForm),b.xp6(9),b.Q6J("ngForOf",e.drawTimes),b.xp6(5),b.Q6J("ngIf",null!=e.twoDigitNumberSet[0]),b.xp6(2),b.Q6J("ngForOf",e.gameTypes),b.xp6(1),b.Q6J("ngIf",!e.isProduction),b.xp6(1),b.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[u.mk,_.oO,N.SP,N.uX,d._Y,d.JL,d.sg,I.KE,I.hX,M.gD,d.JJ,d.u,u.sg,d.wV,U.Nt,d.Fj,d.Q7,d.On,C.lW,u.O5,O.ey,k.Rr],styles:[".triple-number-button[_ngcontent-%COMP%]:hover{background-color:#676c67!important}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.scroll-arrow[_ngcontent-%COMP%]{border-radius:50%}.green[_ngcontent-%COMP%]{background-color:#f766cb;height:55px;width:55px;border-radius:30px;color:#fff}"],data:{animation:[(0,c.X$)("changeDivSize",[(0,c.SB)("initial",(0,c.oB)({backgroundColor:"green",width:"100px",height:"100px"})),(0,c.SB)("final",(0,c.oB)({backgroundColor:"red",width:"200px",height:"200px"})),(0,c.eR)("initial=>final",(0,c.jt)("1500ms")),(0,c.eR)("final=>initial",(0,c.jt)("1000ms"))])]}}),t}(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],tt=function(){var t=function t(){i(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.oAB({type:t}),t.\u0275inj=b.cJS({imports:[[l.Bz.forChild(K)],l.Bz]}),t}(),et=o(3738),nt=o(3220),at=o(346),it=o(5480),ot=o(5566),rt=o(1494),ut=o(6627),lt=function(){var t=function t(){i(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.oAB({type:t}),t.\u0275inj=b.cJS({imports:[[u.ez,tt,k.rP,et.QW,d.u5,I.lN,d.UX,U.c,nt.FA,M.LD,at.g,C.ot,it.q,N.Nh,ot.o9,d.UX,rt.JX,ut.Ps]]}),t}()},1068:function(t,e,n){n.d(e,{m:function(){return l}});var o,r=n(7716),u=n(3535),l=((o=function(){function t(e){i(this,t),this.authService=e}return a(t,[{key:"canActivate",value:function(t,e){return this.authService.isAdmin()}}]),t}()).\u0275fac=function(t){return new(t||o)(r.LFG(u.e))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o)}}])}();