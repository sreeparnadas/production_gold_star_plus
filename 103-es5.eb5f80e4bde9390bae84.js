!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[103],{12103:function(t,e,a){a.d(e,{q:function(){return F}});var n=a(63423),i=a(51068),c=a(29925),s=a(92340),u=a(88259),d=a.n(u),l=a(38583),m=a(37716),p=a(11140),g=a(65939),h=a(98295),f=a(49983),Z=a(43220),b=a(3679),A=a(51095),_=a(11494),q=a(70346);function v(t,e){if(1&t&&(m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.TgZ(11,"td"),m._uU(12),m.qZA(),m.qZA()),2&t){var r=e.$implicit;m.xp6(2),m.Oqu(r.terminal_pin),m.xp6(2),m.Oqu(r.stokiest_name),m.xp6(2),m.Oqu(r.total),m.xp6(2),m.Oqu(r.commission),m.xp6(2),m.Oqu(r.prize_value),m.xp6(2),m.Oqu(r.total-r.commission-r.prize_value)}}function T(t,e){1&t&&(m.TgZ(0,"div",31),m.TgZ(1,"h1"),m._uU(2,"No Data"),m.qZA(),m.qZA())}function y(t,e){if(1&t){var r=m.EpF();m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.TgZ(11,"td"),m._uU(12),m.qZA(),m.TgZ(13,"td"),m._uU(14),m.qZA(),m.TgZ(15,"td"),m.TgZ(16,"a",32),m.NdJ("click",function(){var t=m.CHM(r).$implicit,e=m.oxw();return m.MAs(93).show(),e.openPopup(t.play_master_id,t.barcode_number)}),m._UZ(17,"i",33),m.qZA(),m.qZA(),m.qZA()}if(2&t){var a=e.$implicit;m.xp6(2),m.Oqu(a.barcode_number),m.xp6(2),m.Oqu(a.draw_time),m.xp6(2),m.Oqu(a.terminal_pin),m.xp6(2),m.Oqu(a.ticket_taken_time),m.xp6(2),m.Oqu(a.total_quantity),m.xp6(2),m.Oqu(a.amount),m.xp6(2),m.Oqu(a.prize_value)}}function R(t,e){1&t&&(m.TgZ(0,"div",31),m.TgZ(1,"h1"),m._uU(2,"No Data"),m.qZA(),m.qZA())}function D(t,e){1&t&&(m.TgZ(0,"span"),m._uU(1,"Single"),m.qZA())}function S(t,e){if(1&t&&(m.TgZ(0,"button",46),m._uU(1),m.qZA()),2&t){var r=e.$implicit;m.s9C("matBadge",r.quantity),m.xp6(1),m.AsE(" ",r.game_name," ",r.number_set," ")}}function x(t,e){if(1&t&&(m.TgZ(0,"div",44),m.YNc(1,S,2,3,"button",45),m.qZA()),2&t){var r=e.index,a=m.oxw(2);m.xp6(1),m.Q6J("ngForOf",a.barcodeDetails.details.slice(r*a.columnNumber,r*a.columnNumber+a.columnNumber))}}function k(t,e){if(1&t){var r=m.EpF();m.TgZ(0,"div",34),m.TgZ(1,"div",35),m.TgZ(2,"div",36),m.TgZ(3,"h4",37),m._uU(4),m.qZA(),m.TgZ(5,"button",38),m.NdJ("click",function(){return m.CHM(r),m.oxw(),m.MAs(93).hide()}),m.TgZ(6,"span",39),m._uU(7,"\xd7"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(8,"div",40),m.YNc(9,D,2,0,"span",41),m.YNc(10,x,2,1,"div",42),m.qZA(),m._UZ(11,"div",43),m.qZA(),m.qZA()}if(2&t){var a=m.oxw();m.xp6(4),m.hij(" Ticket: ",a.barcodeDetails.barcode," "),m.xp6(5),m.Q6J("ngIf",a.barcodeDetails.details.length),m.xp6(1),m.Q6J("ngForOf",a.barcodeDetails.details.slice(0,a.barcodeDetails.details.length%a.columnNumber==0?a.barcodeDetails.details.length/a.columnNumber:a.barcodeDetails.details.length/a.columnNumber+1))}}function U(t,e,r){return(t<e?-1:1)*(r?1:-1)}var w,M=[{path:"",canActivate:[i.m],component:(w=function(){function t(e){r(this,t),this.adminReportService=e,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.isProduction=s.N.production,this.showDevArea=!1,this.barcodeReportRecords=[],this.customerSaleReportRecords=[],this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new l.uU("en-US"),this.totalAmount=0,this.columnNumber=4}return o(t,[{key:"ngOnInit",value:function(){var t=this;this.barcodeReportRecords=this.adminReportService.getBarcodeReportRecords(),this.adminReportService.getBarcodeReportListener().subscribe(function(e){t.barcodeReportRecords=e}),this.customerSaleReportRecords=this.adminReportService.getCustomerSaleReportRecords(),this.adminReportService.getCustomerSaleReportListener().subscribe(function(e){t.customerSaleReportRecords=e;var r=0;t.customerSaleReportRecords.forEach(function(t){r+=Number(t.total)}),t.totalAmount=r}),this.searchByDateTab1(),this.searchByDateTab2()}},{key:"searchByDateTab1",value:function(){d().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){d().showLoading()}});var t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.adminReportService.customerSaleReportByDate(t,e).subscribe(function(t){t.data&&d().close()})}},{key:"searchByDateTab2",value:function(){d().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){d().showLoading()}});var t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.adminReportService.barcodeReportByDate(t,e).subscribe(function(t){t.data&&d().close()})}},{key:"sortData",value:function(t){var e=this.barcodeReportRecords.slice();this.barcodeReportRecords=t.active&&""!==t.direction?e.sort(function(e,r){var a="asc"===t.direction;switch(t.active){case"barcode_number":return U(e.barcode_number,r.barcode_number,a);case"draw_time":return U(e.draw_time,r.draw_time,a);case"terminal_pin":return U(e.terminal_pin,r.terminal_pin,a);case"ticket_taken_time":return U(e.ticket_taken_time,r.ticket_taken_time,a);case"total_quantity":return U(e.total_quantity,r.total_quantity,a);case"amount":return U(e.amount,r.amount,a);default:return 0}}):e}},{key:"openPopup",value:function(t,e){var r=this;this.adminReportService.getBarcodeDetails(t).subscribe(function(t){r.barcodeDetails=t.data})}}]),t}(),w.\u0275fac=function(t){return new(t||w)(m.Y36(p.Q))},w.\u0275cmp=m.Xpm({type:w,selectors:[["app-admin-reports"]],viewQuery:function(t,e){var r;1&t&&m.Gf(c.oB,5),2&t&&m.iGM(r=m.CRH())&&(e.modal=r.first)},decls:95,vars:22,consts:[[1,"mt-2","mr-3","ml-3"],["label","Customer sales report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],[3,"ngModel","ngModelChange"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","terminal_pin"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","prize_value"],["mat-sort-header","ntp"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["label","Barcode report"],[1,"text-center",2,"align-content","center","align-items","center","text-align","center"],["matSort","",1,"ml-4","col-11","table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","barcode_number"],["mat-sort-header","draw_time"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["label","Draw wise report"],["mdbModal","","id","frameModalTop","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade","top",2,"overflow-y","auto"],["frame","mdbModal"],["class","modal-dialog modal-notify modal-info","role","document","style","min-width: 550px",4,"ngIf"],[1,"text-center"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4",3,"click"],[1,"bi","bi-info-square-fill"],["role","document",1,"modal-dialog","modal-notify","modal-info",2,"min-width","550px"],[1,"modal-content"],[1,"modal-header","text-center"],[1,"modal-title","white-text","font-weight-bold"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",1,"white-text"],[1,"modal-body"],[4,"ngIf"],["class","d-flex flex-row mt-3","style","display: block",4,"ngFor","ngForOf"],[1,"modal-footer","justify-content-center"],[1,"d-flex","flex-row","mt-3",2,"display","block"],["class","mr-2",3,"matBadge",4,"ngFor","ngForOf"],[1,"mr-2",3,"matBadge"]],template:function(t,e){if(1&t&&(m.TgZ(0,"mat-tab-group",0),m.TgZ(1,"mat-tab",1),m.TgZ(2,"div",2),m.TgZ(3,"div",3),m.TgZ(4,"mat-form-field",4),m.TgZ(5,"mat-label"),m._uU(6,"Start date"),m.qZA(),m.TgZ(7,"input",5),m.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),m.qZA(),m._UZ(8,"mat-datepicker-toggle",6),m.TgZ(9,"mat-datepicker",7,8),m.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(11,"div",3),m.TgZ(12,"mat-form-field",4),m.TgZ(13,"mat-label"),m._uU(14,"End date"),m.qZA(),m.TgZ(15,"input",5),m.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),m.qZA(),m._UZ(16,"mat-datepicker-toggle",6),m.TgZ(17,"mat-datepicker",7,9),m.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(19,"button",10),m.NdJ("click",function(){return e.searchByDateTab1()}),m._uU(20,"Search"),m.qZA(),m.qZA(),m.TgZ(21,"table",11),m.NdJ("matSortChange",function(t){return e.sortData(t)}),m.TgZ(22,"thead"),m.TgZ(23,"tr"),m.TgZ(24,"th",12),m._uU(25,"Terminal Id"),m.qZA(),m.TgZ(26,"th",12),m._uU(27,"Stokiest Name"),m.qZA(),m.TgZ(28,"th",13),m._uU(29,"Total"),m.qZA(),m.TgZ(30,"th",14),m._uU(31,"Commission"),m.qZA(),m.TgZ(32,"th",15),m._uU(33,"Prize"),m.qZA(),m.TgZ(34,"th",16),m._uU(35,"NTP"),m.qZA(),m._UZ(36,"th"),m.qZA(),m.qZA(),m.TgZ(37,"tbody"),m.YNc(38,v,13,6,"tr",17),m.TgZ(39,"tr"),m._UZ(40,"td"),m.TgZ(41,"td"),m._uU(42,"Grand Total"),m.qZA(),m.TgZ(43,"td"),m._uU(44),m.qZA(),m._UZ(45,"td"),m._UZ(46,"td"),m._UZ(47,"td"),m.qZA(),m.qZA(),m.qZA(),m.YNc(48,T,3,0,"div",18),m.qZA(),m.TgZ(49,"mat-tab",19),m.TgZ(50,"div",2),m.TgZ(51,"div",3),m.TgZ(52,"mat-form-field",4),m.TgZ(53,"mat-label"),m._uU(54,"Start date"),m.qZA(),m.TgZ(55,"input",5),m.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),m.qZA(),m._UZ(56,"mat-datepicker-toggle",6),m.TgZ(57,"mat-datepicker",7,8),m.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(59,"div",3),m.TgZ(60,"mat-form-field",4),m.TgZ(61,"mat-label"),m._uU(62,"End date"),m.qZA(),m.TgZ(63,"input",5),m.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),m.qZA(),m._UZ(64,"mat-datepicker-toggle",6),m.TgZ(65,"mat-datepicker",7,9),m.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(67,"button",10),m.NdJ("click",function(){return e.searchByDateTab2()}),m._uU(68,"Search"),m.qZA(),m.qZA(),m.TgZ(69,"div",20),m.TgZ(70,"table",21),m.NdJ("matSortChange",function(t){return e.sortData(t)}),m.TgZ(71,"thead"),m.TgZ(72,"tr"),m.TgZ(73,"th",22),m._uU(74,"Barcode"),m.qZA(),m.TgZ(75,"th",23),m._uU(76,"Draw time"),m.qZA(),m.TgZ(77,"th",12),m._uU(78,"Terminal"),m.qZA(),m.TgZ(79,"th",24),m._uU(80,"Ticket take time"),m.qZA(),m.TgZ(81,"th",25),m._uU(82,"Quantity"),m.qZA(),m.TgZ(83,"th",26),m._uU(84,"Amount"),m.qZA(),m.TgZ(85,"th",15),m._uU(86,"Prize"),m.qZA(),m._UZ(87,"th"),m.qZA(),m.qZA(),m.TgZ(88,"tbody"),m.YNc(89,y,18,7,"tr",17),m.qZA(),m.qZA(),m.YNc(90,R,3,0,"div",18),m.qZA(),m.qZA(),m._UZ(91,"mat-tab",27),m.qZA(),m.TgZ(92,"div",28,29),m.YNc(94,k,12,3,"div",30),m.qZA()),2&t){var r=m.MAs(10),a=m.MAs(18);m.xp6(7),m.Q6J("matDatepicker",r)("ngModel",e.StartDateFilter),m.xp6(1),m.Q6J("for",r),m.xp6(1),m.Q6J("ngModel",e.StartDateFilter),m.xp6(6),m.Q6J("matDatepicker",a)("ngModel",e.EndDateFilter),m.xp6(1),m.Q6J("for",a),m.xp6(1),m.Q6J("ngModel",e.EndDateFilter),m.xp6(21),m.Q6J("ngForOf",e.customerSaleReportRecords),m.xp6(6),m.Oqu(e.totalAmount),m.xp6(4),m.Q6J("ngIf",0==e.customerSaleReportRecords.length),m.xp6(7),m.Q6J("matDatepicker",r)("ngModel",e.StartDateFilter),m.xp6(1),m.Q6J("for",r),m.xp6(1),m.Q6J("ngModel",e.StartDateFilter),m.xp6(6),m.Q6J("matDatepicker",a)("ngModel",e.EndDateFilter),m.xp6(1),m.Q6J("for",a),m.xp6(1),m.Q6J("ngModel",e.EndDateFilter),m.xp6(24),m.Q6J("ngForOf",e.barcodeReportRecords),m.xp6(1),m.Q6J("ngIf",0==e.barcodeReportRecords.length),m.xp6(4),m.Q6J("ngIf",e.barcodeDetails)}},directives:[g.SP,g.uX,h.KE,h.hX,f.Nt,Z.hl,b.Fj,b.JJ,b.On,Z.nW,h.R9,Z.Mq,A.lW,_.YE,_.nU,l.sg,l.O5,c.oB,c.b6,q.k],styles:[""]}),w),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],F=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[n.Bz.forChild(M)],n.Bz]}),t}()},11140:function(e,a,n){n.d(a,{Q:function(){return h}});var i,c=n(92340),s=n(5304),u=n(68307),d=n(79765),l=n(40205),m=n(37716),p=n(91841),g=n(84889),h=((i=function(){function e(t,a){r(this,e),this.http=t,this.errorService=a,this.BASE_API_URL=c.N.BASE_API_URL,this.barcodeReportRecords=[],this.barcodeReportSubject=new d.xQ,this.barcodeDetailsSubject=new d.xQ,this.customerSaleReportRecords=[],this.customerSaleReportSubject=new d.xQ}return o(e,[{key:"getBarcodeReportRecords",value:function(){return t(this.barcodeReportRecords)}},{key:"getBarcodeReportListener",value:function(){return this.barcodeReportSubject.asObservable()}},{key:"getCustomerSaleReportRecords",value:function(){return t(this.customerSaleReportRecords)}},{key:"getCustomerSaleReportListener",value:function(){return this.customerSaleReportSubject.asObservable()}},{key:"getBarcodeDetails",value:function(t){var e=this;return this.http.get(this.BASE_API_URL+"/cPanel/barcodeReport/particulars/"+t).pipe((0,s.K)(this.handleError),(0,u.b)(function(t){e.barcodeDetails=t.data,e.barcodeDetailsSubject.next(Object.assign({},e.barcodeDetails))}))}},{key:"getBarcodeDetailsListener",value:function(){return this.barcodeDetailsSubject.asObservable()}},{key:"customerSaleReportByDate",value:function(e,r){var a=this;return this.http.post(this.BASE_API_URL+"/cPanel/customerSaleReports",{startDate:e,endDate:r}).pipe((0,s.K)(this.handleError),(0,u.b)(function(e){e.data&&(a.customerSaleReportRecords=e.data,a.customerSaleReportSubject.next(t(a.customerSaleReportRecords)))}))}},{key:"barcodeReportByDate",value:function(e,r){var a=this;return this.http.post(this.BASE_API_URL+"/cPanel/barcodeReportByDate",{startDate:e,endDate:r}).pipe((0,s.K)(this.handleError),(0,u.b)(function(e){e.data&&(a.barcodeReportRecords=e.data,a.barcodeReportSubject.next(t(a.barcodeReportRecords)))}))}},{key:"serverError",value:function(t){return t instanceof Response?(0,l._)("backend server error"):(0,l._)(0===t.status?{status:t.status,message:"Backend Server is not Working",statusText:t.statusText}:401===t.status?{status:t.status,message:"Your are not authorised",statusText:t.statusText}:t)}},{key:"handleError",value:function(t){return t.error.message.includes("1062")?(0,l._)("Record already exists"):(0,l._)(t.error.message)}}]),e}()).\u0275fac=function(t){return new(t||i)(m.LFG(p.eN),m.LFG(g.T))},i.\u0275prov=m.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},51068:function(t,e,a){a.d(e,{m:function(){return s}});var n,i=a(37716),c=a(73535),s=((n=function(){function t(e){r(this,t),this.authService=e}return o(t,[{key:"canActivate",value:function(t,e){return this.authService.isAdmin()}}]),t}()).\u0275fac=function(t){return new(t||n)(i.LFG(c.e))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n)}}])}();