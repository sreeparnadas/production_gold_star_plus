"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[90],{90:function(t,e,r){r.r(e),r.d(e,{StockistReportModule:function(){return Y}});var a=r(8583),o=r(3423),i=r(6073),n=r(2340),s=r(8259),d=r.n(s),c=r(7716),l=r(9765),u=r(205),m=r(5304),p=r(8307),g=r(1841),h=r(4889);let Z=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=n.N.BASE_API_URL,this.barcodeReportRecords=[],this.barcodeReportSubject=new l.xQ,this.barcodeDetailsSubject=new l.xQ,this.customerSaleReportRecords=[],this.customerSaleReportSubject=new l.xQ}getBarcodeReportRecords(){return[...this.barcodeReportRecords]}getBarcodeReportListener(){return this.barcodeReportSubject.asObservable()}getCustomerSaleReportRecords(){return[...this.customerSaleReportRecords]}getCustomerSaleReportListener(){return this.customerSaleReportSubject.asObservable()}getBarcodeDetails(t){return this.http.get(this.BASE_API_URL+"/cPanel/barcodeReport/particulars/"+t).pipe((0,m.K)(this.handleError),(0,p.b)(t=>{this.barcodeDetails=t.data,this.barcodeDetailsSubject.next(Object.assign({},this.barcodeDetails))}))}getBarcodeDetailsListener(){return this.barcodeDetailsSubject.asObservable()}customerSaleReportByDate(t,e,r){return this.http.post(this.BASE_API_URL+"/stockist/customerSaleReports",{startDate:t,endDate:e,userID:r}).pipe((0,m.K)(this.handleError),(0,p.b)(t=>{t.data&&(this.customerSaleReportRecords=t.data,this.customerSaleReportSubject.next([...this.customerSaleReportRecords]))}))}barcodeReportByDate(t,e,r){return this.http.post(this.BASE_API_URL+"/stockist/barcodeReportByDate",{startDate:t,endDate:e,userID:r}).pipe((0,m.K)(this.handleError),(0,p.b)(t=>{t.data&&(this.barcodeReportRecords=t.data,this.barcodeReportSubject.next([...this.barcodeReportRecords]))}))}serverError(t){return t instanceof Response?(0,u._)("backend server error"):(0,u._)(0===t.status?{status:t.status,message:"Backend Server is not Working",statusText:t.statusText}:401===t.status?{status:t.status,message:"Your are not authorised",statusText:t.statusText}:t)}handleError(t){return t.error.message.includes("1062")?(0,u._)("Record already exists"):(0,u._)(t.error.message)}}return t.\u0275fac=function(e){return new(e||t)(c.LFG(g.eN),c.LFG(h.T))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=r(5939),f=r(8295),A=r(9983),_=r(3220),q=r(3679),T=r(1095),R=r(1494),D=r(346);function S(t,e){if(1&t&&(c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c._uU(8),c.qZA(),c.TgZ(9,"td"),c._uU(10),c.qZA(),c.TgZ(11,"td"),c._uU(12),c.qZA(),c.qZA()),2&t){const t=e.$implicit;c.xp6(2),c.Oqu(t.terminal_pin),c.xp6(2),c.Oqu(t.stokiest_name),c.xp6(2),c.Oqu(t.total),c.xp6(2),c.Oqu(t.commission),c.xp6(2),c.Oqu(t.prize_value),c.xp6(2),c.Oqu(t.total-t.commission-t.prize_value)}}function x(t,e){1&t&&(c.TgZ(0,"div",31),c.TgZ(1,"h1"),c._uU(2,"No Data"),c.qZA(),c.qZA())}function U(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c._uU(8),c.qZA(),c.TgZ(9,"td"),c._uU(10),c.qZA(),c.TgZ(11,"td"),c._uU(12),c.qZA(),c.TgZ(13,"td"),c._uU(14),c.qZA(),c.TgZ(15,"td"),c.TgZ(16,"a",32),c.NdJ("click",function(){const e=c.CHM(t).$implicit,r=c.oxw();return c.MAs(93).show(),r.openPopup(e.play_master_id,e.barcode_number)}),c._UZ(17,"i",33),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(2),c.Oqu(t.barcode_number),c.xp6(2),c.Oqu(t.draw_time),c.xp6(2),c.Oqu(t.terminal_pin),c.xp6(2),c.Oqu(t.ticket_taken_time),c.xp6(2),c.Oqu(t.total_quantity),c.xp6(2),c.Oqu(t.amount),c.xp6(2),c.Oqu(t.prize_value)}}function y(t,e){1&t&&(c.TgZ(0,"div",31),c.TgZ(1,"h1"),c._uU(2,"No Data"),c.qZA(),c.qZA())}function v(t,e){1&t&&(c.TgZ(0,"span"),c._uU(1,"Single"),c.qZA())}function k(t,e){if(1&t&&(c.TgZ(0,"button",46),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.s9C("matBadge",t.quantity),c.xp6(1),c.AsE(" ",t.game_name," ",t.number_set," ")}}function w(t,e){if(1&t&&(c.TgZ(0,"div",44),c.YNc(1,k,2,3,"button",45),c.qZA()),2&t){const t=e.index,r=c.oxw(2);c.xp6(1),c.Q6J("ngForOf",r.barcodeDetails.details.slice(t*r.columnNumber,t*r.columnNumber+r.columnNumber))}}function M(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",34),c.TgZ(1,"div",35),c.TgZ(2,"div",36),c.TgZ(3,"h4",37),c._uU(4),c.qZA(),c.TgZ(5,"button",38),c.NdJ("click",function(){return c.CHM(t),c.oxw(),c.MAs(93).hide()}),c.TgZ(6,"span",39),c._uU(7,"\xd7"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"div",40),c.YNc(9,v,2,0,"span",41),c.YNc(10,w,2,1,"div",42),c.qZA(),c._UZ(11,"div",43),c.qZA(),c.qZA()}if(2&t){const t=c.oxw();c.xp6(4),c.hij(" Ticket: ",t.barcodeDetails.barcode," "),c.xp6(5),c.Q6J("ngIf",t.barcodeDetails.details.length),c.xp6(1),c.Q6J("ngForOf",t.barcodeDetails.details.slice(0,t.barcodeDetails.details.length%t.columnNumber==0?t.barcodeDetails.details.length/t.columnNumber:t.barcodeDetails.details.length/t.columnNumber+1))}}let N=(()=>{class t{constructor(t){this.adminReportService=t,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.isProduction=n.N.production,this.showDevArea=!1,this.barcodeReportRecords=[],this.customerSaleReportRecords=[],this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new a.uU("en-US"),this.totalAmount=0,this.columnNumber=4,this.userData=JSON.parse(localStorage.getItem("user"))}ngOnInit(){this.barcodeReportRecords=this.adminReportService.getBarcodeReportRecords(),this.adminReportService.getBarcodeReportListener().subscribe(t=>{this.barcodeReportRecords=t}),this.customerSaleReportRecords=this.adminReportService.getCustomerSaleReportRecords(),this.adminReportService.getCustomerSaleReportListener().subscribe(t=>{this.customerSaleReportRecords=t;let e=0;this.customerSaleReportRecords.forEach(function(t){e+=Number(t.total)}),this.totalAmount=e}),this.searchByDateTab1(),this.searchByDateTab2()}searchByDateTab1(){d().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{d().showLoading()}});let t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.adminReportService.customerSaleReportByDate(t,e,this.userData.userId).subscribe(t=>{t.data&&d().close()})}searchByDateTab2(){d().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{d().showLoading()}});let t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.adminReportService.barcodeReportByDate(t,e,this.userData.userId).subscribe(t=>{t.data&&d().close()})}sortData(t){const e=this.barcodeReportRecords.slice();this.barcodeReportRecords=t.active&&""!==t.direction?e.sort((e,r)=>{const a="asc"===t.direction;switch(t.active){case"barcode_number":return F(e.barcode_number,r.barcode_number,a);case"draw_time":return F(e.draw_time,r.draw_time,a);case"terminal_pin":return F(e.terminal_pin,r.terminal_pin,a);case"ticket_taken_time":return F(e.ticket_taken_time,r.ticket_taken_time,a);case"total_quantity":return F(e.total_quantity,r.total_quantity,a);case"amount":return F(e.amount,r.amount,a);default:return 0}}):e}openPopup(t,e){this.adminReportService.getBarcodeDetails(t).subscribe(t=>{this.barcodeDetails=t.data})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(Z))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-stockist-report"]],viewQuery:function(t,e){if(1&t&&c.Gf(i.oB,5),2&t){let t;c.iGM(t=c.CRH())&&(e.modal=t.first)}},decls:95,vars:22,consts:[[1,"mt-2","mr-3","ml-3"],["label","Customer sales report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],[3,"ngModel","ngModelChange"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","terminal_pin"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","prize_value"],["mat-sort-header","ntp"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["label","Barcode report"],[1,"text-center",2,"align-content","center","align-items","center","text-align","center"],["matSort","",1,"ml-4","col-11","table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","barcode_number"],["mat-sort-header","draw_time"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["label","Draw wise report"],["mdbModal","","id","frameModalTop","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade","top",2,"overflow-y","auto"],["frame","mdbModal"],["class","modal-dialog modal-notify modal-info","role","document","style","min-width: 550px",4,"ngIf"],[1,"text-center"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4",3,"click"],[1,"bi","bi-info-square-fill"],["role","document",1,"modal-dialog","modal-notify","modal-info",2,"min-width","550px"],[1,"modal-content"],[1,"modal-header","text-center"],[1,"modal-title","white-text","font-weight-bold"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",1,"white-text"],[1,"modal-body"],[4,"ngIf"],["class","d-flex flex-row mt-3","style","display: block",4,"ngFor","ngForOf"],[1,"modal-footer","justify-content-center"],[1,"d-flex","flex-row","mt-3",2,"display","block"],["class","mr-2",3,"matBadge",4,"ngFor","ngForOf"],[1,"mr-2",3,"matBadge"]],template:function(t,e){if(1&t&&(c.TgZ(0,"mat-tab-group",0),c.TgZ(1,"mat-tab",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"mat-form-field",4),c.TgZ(5,"mat-label"),c._uU(6,"Start date"),c.qZA(),c.TgZ(7,"input",5),c.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),c.qZA(),c._UZ(8,"mat-datepicker-toggle",6),c.TgZ(9,"mat-datepicker",7,8),c.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(11,"div",3),c.TgZ(12,"mat-form-field",4),c.TgZ(13,"mat-label"),c._uU(14,"End date"),c.qZA(),c.TgZ(15,"input",5),c.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),c.qZA(),c._UZ(16,"mat-datepicker-toggle",6),c.TgZ(17,"mat-datepicker",7,9),c.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(19,"button",10),c.NdJ("click",function(){return e.searchByDateTab1()}),c._uU(20,"Search"),c.qZA(),c.qZA(),c.TgZ(21,"table",11),c.NdJ("matSortChange",function(t){return e.sortData(t)}),c.TgZ(22,"thead"),c.TgZ(23,"tr"),c.TgZ(24,"th",12),c._uU(25,"Terminal Id"),c.qZA(),c.TgZ(26,"th",12),c._uU(27,"Stokiest Name"),c.qZA(),c.TgZ(28,"th",13),c._uU(29,"Total"),c.qZA(),c.TgZ(30,"th",14),c._uU(31,"Commission"),c.qZA(),c.TgZ(32,"th",15),c._uU(33,"Prize"),c.qZA(),c.TgZ(34,"th",16),c._uU(35,"NTP"),c.qZA(),c._UZ(36,"th"),c.qZA(),c.qZA(),c.TgZ(37,"tbody"),c.YNc(38,S,13,6,"tr",17),c.TgZ(39,"tr"),c._UZ(40,"td"),c.TgZ(41,"td"),c._uU(42,"Grand Total"),c.qZA(),c.TgZ(43,"td"),c._uU(44),c.qZA(),c._UZ(45,"td"),c._UZ(46,"td"),c._UZ(47,"td"),c.qZA(),c.qZA(),c.qZA(),c.YNc(48,x,3,0,"div",18),c.qZA(),c.TgZ(49,"mat-tab",19),c.TgZ(50,"div",2),c.TgZ(51,"div",3),c.TgZ(52,"mat-form-field",4),c.TgZ(53,"mat-label"),c._uU(54,"Start date"),c.qZA(),c.TgZ(55,"input",5),c.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),c.qZA(),c._UZ(56,"mat-datepicker-toggle",6),c.TgZ(57,"mat-datepicker",7,8),c.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(59,"div",3),c.TgZ(60,"mat-form-field",4),c.TgZ(61,"mat-label"),c._uU(62,"End date"),c.qZA(),c.TgZ(63,"input",5),c.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),c.qZA(),c._UZ(64,"mat-datepicker-toggle",6),c.TgZ(65,"mat-datepicker",7,9),c.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(67,"button",10),c.NdJ("click",function(){return e.searchByDateTab2()}),c._uU(68,"Search"),c.qZA(),c.qZA(),c.TgZ(69,"div",20),c.TgZ(70,"table",21),c.NdJ("matSortChange",function(t){return e.sortData(t)}),c.TgZ(71,"thead"),c.TgZ(72,"tr"),c.TgZ(73,"th",22),c._uU(74,"Barcode"),c.qZA(),c.TgZ(75,"th",23),c._uU(76,"Draw time"),c.qZA(),c.TgZ(77,"th",12),c._uU(78,"Terminal"),c.qZA(),c.TgZ(79,"th",24),c._uU(80,"Ticket take time"),c.qZA(),c.TgZ(81,"th",25),c._uU(82,"Quantity"),c.qZA(),c.TgZ(83,"th",26),c._uU(84,"Amount"),c.qZA(),c.TgZ(85,"th",15),c._uU(86,"Prize"),c.qZA(),c._UZ(87,"th"),c.qZA(),c.qZA(),c.TgZ(88,"tbody"),c.YNc(89,U,18,7,"tr",17),c.qZA(),c.qZA(),c.YNc(90,y,3,0,"div",18),c.qZA(),c.qZA(),c._UZ(91,"mat-tab",27),c.qZA(),c.TgZ(92,"div",28,29),c.YNc(94,M,12,3,"div",30),c.qZA()),2&t){const t=c.MAs(10),r=c.MAs(18);c.xp6(7),c.Q6J("matDatepicker",t)("ngModel",e.StartDateFilter),c.xp6(1),c.Q6J("for",t),c.xp6(1),c.Q6J("ngModel",e.StartDateFilter),c.xp6(6),c.Q6J("matDatepicker",r)("ngModel",e.EndDateFilter),c.xp6(1),c.Q6J("for",r),c.xp6(1),c.Q6J("ngModel",e.EndDateFilter),c.xp6(21),c.Q6J("ngForOf",e.customerSaleReportRecords),c.xp6(6),c.Oqu(e.totalAmount),c.xp6(4),c.Q6J("ngIf",0==e.customerSaleReportRecords.length),c.xp6(7),c.Q6J("matDatepicker",t)("ngModel",e.StartDateFilter),c.xp6(1),c.Q6J("for",t),c.xp6(1),c.Q6J("ngModel",e.StartDateFilter),c.xp6(6),c.Q6J("matDatepicker",r)("ngModel",e.EndDateFilter),c.xp6(1),c.Q6J("for",r),c.xp6(1),c.Q6J("ngModel",e.EndDateFilter),c.xp6(24),c.Q6J("ngForOf",e.barcodeReportRecords),c.xp6(1),c.Q6J("ngIf",0==e.barcodeReportRecords.length),c.xp6(4),c.Q6J("ngIf",e.barcodeDetails)}},directives:[b.SP,b.uX,f.KE,f.hX,A.Nt,_.hl,q.Fj,q.JJ,q.On,_.nW,f.R9,_.Mq,T.lW,R.YE,R.nU,a.sg,a.O5,i.oB,i.b6,D.k],styles:[""]}),t})();function F(t,e,r){return(t<e?-1:1)*(r?1:-1)}const J=[{path:"",canActivate:[r(3846).C],component:N}];let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.Bz.forChild(J)],o.Bz]}),t})();var O=r(5480),C=r(5566),E=r(3738),Q=r(5396),I=r(9870),P=r(4820),j=r(2458),L=r(2542);let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.ez,B,b.Nh,O.q,C.o9,E.QW,q.u5,q.UX,Q.rP,R.JX,I.aE,I.bz,i.At,P.UU,D.g,_.FA,A.c,q.u5,j.XK,j.si,q.u5,T.ot,L.vV,_.FA,A.c,f.lN]]}),t})()}}]);