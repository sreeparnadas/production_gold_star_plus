!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[771],{38771:function(e,a,n){n.r(a),n.d(a,{TerminalReportModule:function(){return X}});var o,l=n(38583),c=n(63423),d=n(1982),s=n(88259),u=n.n(s),m=n(37716),p=n(79765),g=n(40205),f=n(92340),h=n(5304),Z=n(68307),b=n(91841),T=n(84889),A=n(73535),v=((o=function(){function e(t,a,i){r(this,e),this.http=t,this.errorService=a,this.authService=i,this.BASE_API_URL=f.N.BASE_API_URL,this.barcodeReportRecords=[],this.terminalSaleRRecords=[],this.userData=JSON.parse(localStorage.getItem("user")),this.barcodeReportRecordsSubject=new p.xQ,this.terminalSaleRecordsSubject=new p.xQ}return i(e,[{key:"terminalListListener",value:function(){return this.barcodeReportRecordsSubject.asObservable()}},{key:"terminalSaleListListener",value:function(){return this.terminalSaleRecordsSubject.asObservable()}},{key:"cancelTicket",value:function(e){var r=this;return this.http.post(this.BASE_API_URL+"/cancelTicket",{play_master_id:e}).pipe((0,h.K)(this.handleError),(0,Z.b)(function(e){if(e.data){r.authService.updateUserBalance(e.point);var a=r.barcodeReportRecords.findIndex(function(t){return t.play_master_id===e.id});r.barcodeReportRecords[a].is_cancelled=1,r.barcodeReportRecordsSubject.next(t(r.barcodeReportRecords))}}))}},{key:"claimPrize",value:function(e){var r=this;return this.http.post(this.BASE_API_URL+"/claimPrize",{play_master_id:e}).pipe((0,h.K)(this.handleError),(0,Z.b)(function(e){if(e.point){r.authService.updateUserBalance(e.point);var a=r.barcodeReportRecords.findIndex(function(t){return t.play_master_id===e.id});r.barcodeReportRecords[a].is_claimed=1,r.barcodeReportRecords[a].is_cancelled=1,r.barcodeReportRecordsSubject.next(t(r.barcodeReportRecords))}}))}},{key:"getTerminalReport",value:function(e,r,a){var i=this;return this.http.post(this.BASE_API_URL+"/terminal/barcodeReport",{terminalId:e,startDate:r,endDate:a}).pipe((0,h.K)(this.handleError),(0,Z.b)(function(e){e.data&&(i.barcodeReportRecords=e.data,i.barcodeReportRecordsSubject.next(t(i.barcodeReportRecords)))}))}},{key:"getTerminalSaleReport",value:function(e,r,a){var i=this;return this.http.post(this.BASE_API_URL+"/terminal/terminal_sale_reports",{terminalId:e,startDate:r,endDate:a}).pipe((0,h.K)(this.handleError),(0,Z.b)(function(e){e.data&&(i.terminalSaleRRecords=e.data,i.terminalSaleRecordsSubject.next(t(i.terminalSaleRRecords)))}))}},{key:"serverError",value:function(t){return t instanceof Response?(0,g._)("backend server error"):(0,g._)(0===t.status?{status:t.status,message:"Backend Server is not Working",statusText:t.statusText}:401===t.status?{status:t.status,message:"Your are not authorised",statusText:t.statusText}:t)}},{key:"handleError",value:function(t){return t.error.message.includes("1062")?(0,g._)("Record already exists"):(0,g._)(t.error.message)}}]),e}()).\u0275fac=function(t){return new(t||o)(m.LFG(b.eN),m.LFG(T.T),m.LFG(A.e))},o.\u0275prov=m.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o),_=n(11140),q=n(5620),y=n(65939),S=n(98295),R=n(49983),x=n(43220),k=n(3679),D=n(51095),U=n(11494),w=n(29925),M=n(70346);function J(t,e){if(1&t&&(m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.qZA()),2&t){var r=e.$implicit;m.xp6(2),m.Oqu(r.date),m.xp6(2),m.Oqu(r.total),m.xp6(2),m.Oqu(r.commission),m.xp6(2),m.Oqu(r.prize_value),m.xp6(2),m.Oqu(r.total-r.commission-r.prize_value)}}function C(t,e){1&t&&(m.TgZ(0,"div",29),m.TgZ(1,"h1"),m._uU(2,"No Data"),m.qZA(),m.qZA())}function O(t,e){if(1&t){var r=m.EpF();m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.TgZ(11,"td"),m._uU(12),m.qZA(),m.TgZ(13,"td"),m._uU(14),m.qZA(),m.TgZ(15,"td"),m.TgZ(16,"button",30),m.NdJ("click",function(){var t=m.CHM(r).$implicit;return m.oxw().claimPrize(t.play_master_id)}),m._uU(17),m.qZA(),m.qZA(),m.TgZ(18,"td"),m.TgZ(19,"button",31),m.NdJ("click",function(){var t=m.CHM(r).$implicit;return m.oxw().cancelTicket(t.play_master_id)}),m._uU(20,"Cancel"),m.qZA(),m.qZA(),m.TgZ(21,"td"),m.TgZ(22,"a",32),m.NdJ("click",function(){var t=m.CHM(r).$implicit,e=m.oxw();return m.MAs(85).show(),e.openPopup(t.play_master_id,t.barcode_number)}),m._UZ(23,"i",33),m.qZA(),m.qZA(),m.qZA()}if(2&t){var a=e.$implicit,i=e.index,n=m.oxw();m.xp6(2),m.Oqu(i+1),m.xp6(2),m.Oqu(a.draw_time),m.xp6(2),m.Oqu(a.ticket_taken_time),m.xp6(2),m.Oqu(a.barcode_number),m.xp6(2),m.Oqu(a.total_quantity),m.xp6(2),m.Oqu(a.amount),m.xp6(2),m.Oqu(a.prize_value),m.xp6(2),m.Q6J("hidden",0==a.prize_value)("disabled",1==a.is_claimed),m.xp6(1),m.Oqu(a.prize_value>0?a.is_claimed>0?"Claimed":"Claim":"No Prize"),m.xp6(2),m.Q6J("disabled",n.checkBtnEligibility(a))}}function F(t,e){1&t&&(m.TgZ(0,"div",29),m.TgZ(1,"h1"),m._uU(2,"No Data"),m.qZA(),m.qZA())}function E(t,e){1&t&&(m.TgZ(0,"span"),m._uU(1,"Single"),m.qZA())}function N(t,e){if(1&t&&(m.TgZ(0,"button",45),m._uU(1),m.qZA()),2&t){var r=e.$implicit;m.s9C("matBadge",r.quantity),m.xp6(1),m.Oqu(r.single_number)}}function I(t,e){if(1&t){var r=m.EpF();m.TgZ(0,"div",34),m.TgZ(1,"div",35),m.TgZ(2,"div",36),m.TgZ(3,"h4",37),m._uU(4),m.qZA(),m.TgZ(5,"button",38),m.NdJ("click",function(){return m.CHM(r),m.oxw(),m.MAs(85).hide()}),m.TgZ(6,"span",39),m._uU(7,"\xd7"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(8,"div",40),m.YNc(9,E,2,0,"span",41),m.TgZ(10,"div",42),m.YNc(11,N,2,2,"button",43),m.qZA(),m.qZA(),m._UZ(12,"div",44),m.qZA(),m.qZA()}if(2&t){var a=m.oxw();m.xp6(4),m.hij(" Ticket: ",a.barcodeDetails.barcode," "),m.xp6(5),m.Q6J("ngIf",a.barcodeDetails.single.length),m.xp6(2),m.Q6J("ngForOf",a.barcodeDetails.single)}}var B=[{path:"",canActivate:[d.v],component:function(){var t=function(){function t(e,a,i,n){var o=this;r(this,t),this.renderer=e,this.terminalReportService=a,this.adminReportService=i,this.commonService=n,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new l.uU("en-US"),this.terminalReportData=[],this.terminalSaleReportData=[],this.renderer.setStyle(document.body,"background-image","none"),this.terminalReportService.terminalListListener().subscribe(function(t){o.terminalReportData=t}),this.terminalReportService.terminalSaleListListener().subscribe(function(t){o.terminalSaleReportData=t}),this.getTerminalBarcodeReport(),this.getTerminalSaleReport(),this.commonService.terminalCancelListListener().subscribe(function(t){t.forEach(function(t){var e=this.terminalReportData.findIndex(function(e){return e.play_master_id===t.id});this.terminalReportData[e].is_cancelable=0})})}return i(t,[{key:"ngOnInit",value:function(){}},{key:"claimPrize",value:function(t){u().fire({title:"Please Wait !",html:"adding points ...",allowOutsideClick:!1,didOpen:function(){u().showLoading()}}),this.terminalReportService.claimPrize(t).subscribe(function(t){t.point&&u().close()})}},{key:"checkBtnEligibility",value:function(t){return 1===t.is_cancelled||0===t.is_cancelable}},{key:"cancelTicket",value:function(t){var e=this;u().fire({title:"Confirm Cancel ?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, confirm"}).then(function(r){r.isConfirmed?(u().fire({title:"Please Wait !",html:"Confirming cancel",allowOutsideClick:!1,didOpen:function(){u().showLoading()}}),e.terminalReportService.cancelTicket(t).subscribe(function(t){1===t.success?(u().hideLoading(),u().fire({icon:"success",title:"Cancelled",showConfirmButton:!1,timer:1500})):u().fire({icon:"error",title:"You cannot cancel this ticket",showConfirmButton:!1,timer:2e3})})):r.isDenied&&u().fire("Changes are not saved","","info")})}},{key:"getTerminalBarcodeReport",value:function(){u().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){u().showLoading()}});var t=JSON.parse(localStorage.getItem("user")),e=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),r=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.terminalReportService.getTerminalReport(t.userId,e,r).subscribe(function(t){t.data&&u().close()})}},{key:"getTerminalSaleReport",value:function(){u().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){u().showLoading()}});var t=JSON.parse(localStorage.getItem("user")),e=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),r=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.terminalReportService.getTerminalSaleReport(t.userId,e,r).subscribe(function(t){t.data&&u().close()})}},{key:"openPopup",value:function(t,e){var r=this;this.adminReportService.getBarcodeDetails(t).subscribe(function(t){r.barcodeDetails=t.data})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(m.Y36(m.Qsj),m.Y36(v),m.Y36(_.Q),m.Y36(q.v))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-terminal-report"]],decls:87,vars:22,consts:[[1,"mt-5","mr-3","ml-3",3,"selectedIndex"],["label","Terminal sale report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],[3,"ngModel","ngModelChange"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","prize_value"],["mat-sort-header","ntp"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["label","Terminal barcode report"],[1,"",2,"overflow","hidden"],["matSort","",1,"table","table-bordered","table-sm","m-3",2,"border","none !important","height","50px","overflow","hidden"],["mat-sort-header","draw_time"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","barcode_number"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["mdbModal","","id","frameModalTop","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade","top",2,"overflow-y","auto"],["frame","mdbModal"],["class","modal-dialog modal-notify modal-info","role","document","style","min-width: 550px",4,"ngIf"],[1,"text-center"],["type","button",1,"btn","btn-danger",2,"min-width","87px",3,"hidden","disabled","click"],["type","button",1,"btn","btn-danger",3,"disabled","click"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4",3,"click"],[1,"bi","bi-info-square-fill"],["role","document",1,"modal-dialog","modal-notify","modal-info",2,"min-width","550px"],[1,"modal-content"],[1,"modal-header","text-center"],[1,"modal-title","white-text","font-weight-bold"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",1,"white-text"],[1,"modal-body"],[4,"ngIf"],[1,"d-flex","flex-row","mt-2"],["class","mr-2",3,"matBadge",4,"ngFor","ngForOf"],[1,"modal-footer","justify-content-center"],[1,"mr-2",3,"matBadge"]],template:function(t,e){if(1&t&&(m.TgZ(0,"mat-tab-group",0),m.TgZ(1,"mat-tab",1),m.TgZ(2,"div",2),m.TgZ(3,"div",3),m.TgZ(4,"mat-form-field",4),m.TgZ(5,"mat-label"),m._uU(6,"Start date"),m.qZA(),m.TgZ(7,"input",5),m.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),m.qZA(),m._UZ(8,"mat-datepicker-toggle",6),m.TgZ(9,"mat-datepicker",7,8),m.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(11,"div",3),m.TgZ(12,"mat-form-field",4),m.TgZ(13,"mat-label"),m._uU(14,"End date"),m.qZA(),m.TgZ(15,"input",5),m.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),m.qZA(),m._UZ(16,"mat-datepicker-toggle",6),m.TgZ(17,"mat-datepicker",7,9),m.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(19,"button",10),m.NdJ("click",function(){return e.getTerminalSaleReport()}),m._uU(20,"Search"),m.qZA(),m.qZA(),m.TgZ(21,"table",11),m.TgZ(22,"thead"),m.TgZ(23,"tr"),m.TgZ(24,"th"),m._uU(25,"Date"),m.qZA(),m.TgZ(26,"th",12),m._uU(27,"Amount"),m.qZA(),m.TgZ(28,"th",13),m._uU(29,"Commission"),m.qZA(),m.TgZ(30,"th",14),m._uU(31,"Prize"),m.qZA(),m.TgZ(32,"th",15),m._uU(33,"NTP"),m.qZA(),m._UZ(34,"th"),m.qZA(),m.qZA(),m.TgZ(35,"tbody"),m.YNc(36,J,11,5,"tr",16),m.qZA(),m.qZA(),m.YNc(37,C,3,0,"div",17),m.qZA(),m.TgZ(38,"mat-tab",18),m.TgZ(39,"div",2),m.TgZ(40,"div",3),m.TgZ(41,"mat-form-field",4),m.TgZ(42,"mat-label"),m._uU(43,"Start date"),m.qZA(),m.TgZ(44,"input",5),m.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),m.qZA(),m._UZ(45,"mat-datepicker-toggle",6),m.TgZ(46,"mat-datepicker",7,8),m.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(48,"div",3),m.TgZ(49,"mat-form-field",4),m.TgZ(50,"mat-label"),m._uU(51,"End date"),m.qZA(),m.TgZ(52,"input",5),m.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),m.qZA(),m._UZ(53,"mat-datepicker-toggle",6),m.TgZ(54,"mat-datepicker",7,9),m.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(56,"button",10),m.NdJ("click",function(){return e.getTerminalBarcodeReport()}),m._uU(57,"Search"),m.qZA(),m.qZA(),m.TgZ(58,"div",19),m.TgZ(59,"table",20),m.TgZ(60,"thead"),m.TgZ(61,"tr"),m.TgZ(62,"th"),m._uU(63,"Sl.NO"),m.qZA(),m.TgZ(64,"th",21),m._uU(65,"Draw Time"),m.qZA(),m.TgZ(66,"th",22),m._uU(67,"Ticket Time"),m.qZA(),m.TgZ(68,"th",23),m._uU(69,"Barcode"),m.qZA(),m.TgZ(70,"th",24),m._uU(71,"Quantity"),m.qZA(),m.TgZ(72,"th",25),m._uU(73,"Amount"),m.qZA(),m.TgZ(74,"th",14),m._uU(75,"Prize"),m.qZA(),m.TgZ(76,"th"),m._uU(77,"Claim"),m.qZA(),m.TgZ(78,"th"),m._uU(79,"Cancel"),m.qZA(),m._UZ(80,"th"),m.qZA(),m.qZA(),m.TgZ(81,"tbody"),m.YNc(82,O,24,11,"tr",16),m.qZA(),m.qZA(),m.YNc(83,F,3,0,"div",17),m.qZA(),m.qZA(),m.qZA(),m.TgZ(84,"div",26,27),m.YNc(86,I,13,3,"div",28),m.qZA()),2&t){var r=m.MAs(10),a=m.MAs(18);m.Q6J("selectedIndex",0),m.xp6(7),m.Q6J("matDatepicker",r)("ngModel",e.StartDateFilter),m.xp6(1),m.Q6J("for",r),m.xp6(1),m.Q6J("ngModel",e.StartDateFilter),m.xp6(6),m.Q6J("matDatepicker",a)("ngModel",e.EndDateFilter),m.xp6(1),m.Q6J("for",a),m.xp6(1),m.Q6J("ngModel",e.EndDateFilter),m.xp6(19),m.Q6J("ngForOf",e.terminalSaleReportData),m.xp6(1),m.Q6J("ngIf",0==e.terminalSaleReportData.length),m.xp6(7),m.Q6J("matDatepicker",r)("ngModel",e.StartDateFilter),m.xp6(1),m.Q6J("for",r),m.xp6(1),m.Q6J("ngModel",e.StartDateFilter),m.xp6(6),m.Q6J("matDatepicker",a)("ngModel",e.EndDateFilter),m.xp6(1),m.Q6J("for",a),m.xp6(1),m.Q6J("ngModel",e.EndDateFilter),m.xp6(28),m.Q6J("ngForOf",e.terminalReportData),m.xp6(1),m.Q6J("ngIf",0==e.terminalReportData.length),m.xp6(3),m.Q6J("ngIf",e.barcodeDetails)}},directives:[y.SP,y.uX,S.KE,S.hX,R.Nt,x.hl,k.Fj,k.JJ,k.On,x.nW,S.R9,x.Mq,D.lW,U.YE,U.nU,l.sg,l.O5,w.oB,w.b6,M.k],styles:[""]}),t}()}],Q=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[c.Bz.forChild(B)],c.Bz]}),t}(),L=n(12103),P=n(45480),z=n(15566),Y=n(93738),j=n(45396),W=n(49870),$=n(54820),K=n(72458),X=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[l.ez,Q,l.ez,L.q,y.Nh,P.q,z.o9,Y.QW,k.u5,k.UX,j.rP,U.JX,W.aE,W.bz,w.At,$.UU,M.g,x.FA,R.c,k.u5,K.XK,K.si]]}),t}()}}])}();