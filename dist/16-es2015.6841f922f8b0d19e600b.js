(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{w2km:function(e,t,n){"use strict";n.r(t),n.d(t,"routes",function(){return ce}),n.d(t,"TablesModule",function(){return ae});var i=n("ofXK"),c=n("tyNb"),a=n("fXoL"),o=n("XNiG");n("xgIS"),n("2Vo4"),n("1G5W"),n("mrSG");let r=(()=>{class e{constructor(e){this.document=e,this.width=this.getWidth()}getWidth(){const e=this.document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",this.document.body.appendChild(e);const t=e.offsetWidth;e.style.overflow="scroll";const n=this.document.createElement("div");n.style.width="100%",e.appendChild(n);const i=n.offsetWidth;return e.parentNode.removeChild(e),t-i}}return e.\u0275fac=function(t){return new(t||e)(a.ic(i.d))},e.\u0275prov=a.Ub({token:e,factory:e.\u0275fac}),e})(),s=(()=>{class e{getDimensions(e){return e.getBoundingClientRect()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Ub({token:e,factory:e.\u0275fac}),e})(),l=(()=>{class e{constructor(){this.columnInputChanges=new o.a}get columnInputChanges$(){return this.columnInputChanges.asObservable()}onInputChange(){this.columnInputChanges.next()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Ub({token:e,factory:e.\u0275fac}),e})();const d={},m="undefined"!=typeof document?document.createElement("div").style:void 0,u=function(){const e="undefined"!=typeof window?window.getComputedStyle(document.documentElement,""):void 0,t=void 0!==e?Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/):null,n=null!==t?t[1]:void 0,i=void 0!==n?"WebKit|Moz|MS|O".match(new RegExp("("+n+")","i"))[1]:void 0;return i?{dom:i,lowercase:n,css:`-${n}-`,js:n[0].toUpperCase()+n.substr(1)}:void 0}();function p(e){const t=e.replace(/[^a-zA-Z0-9 ]/g," ").replace(/([a-z](?=[A-Z]))/g,"$1 ").replace(/([^a-zA-Z0-9 ])|^[0-9]+/g,"").trim().toLowerCase().replace(/([ 0-9]+)([a-zA-Z])/g,function(e,t,n){return t.trim()+n.toUpperCase()});return d[t]||(void 0!==u&&void 0!==m[u.css+e]?d[t]=u.css+e:void 0!==m[e]&&(d[t]=e)),d[t]}"undefined"!=typeof window&&p("transform"),"undefined"!=typeof window&&p("backfaceVisibility"),"undefined"!=typeof window&&p("transform"),"undefined"!=typeof window&&p("perspective");const f="undefined"!=typeof window?window.navigator.userAgent:"Chrome";/Safari\//.test(f)&&/Chrome\//.test(f);let h=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[{provide:"configuration",useValue:t}]}}}return e.\u0275mod=a.Wb({type:e}),e.\u0275inj=a.Vb({factory:function(t){return new(t||e)},providers:[r,s,l],imports:[[i.c]]}),e})();"undefined"==typeof document||document.elementsFromPoint||(document.elementsFromPoint=function(e,t){const n=[],i=[];let c,a,o;for(;(c=document.elementFromPoint(e,t))&&-1===n.indexOf(c)&&null!=c;)n.push(c),i.push({value:c.style.getPropertyValue("pointer-events"),priority:c.style.getPropertyPriority("pointer-events")}),c.style.setProperty("pointer-events","none","important");for(a=i.length;o=i[--a];)n[a].style.setProperty("pointer-events",o.value?o.value:"",o.priority);return n});var b=n("PCNd"),y=n("+0xr"),g=n("/RaO"),w=n("or22"),v=n("dNgK"),S=n("C790"),M=n("XiUz"),C=n("Dh3D"),D=n("bTqV");function k(e,t){1&e&&(a.ec(0,"mat-header-cell"),a.Xc(1,"Request Date "),a.dc())}function A(e,t){if(1&e&&(a.ec(0,"mat-cell"),a.Xc(1),a.rc(2,"date"),a.dc()),2&e){const e=t.$implicit;a.Mb(1),a.Zc("",a.tc(2,1,e.createdAt,"dd/MM/yyyy")," ")}}function x(e,t){1&e&&(a.ec(0,"mat-header-cell",17),a.Xc(1,"Updated Date "),a.dc())}function V(e,t){if(1&e&&(a.ec(0,"mat-cell"),a.Xc(1),a.rc(2,"date"),a.dc()),2&e){const e=t.$implicit;a.Mb(1),a.Zc("",a.tc(2,1,e.updatedAt,"dd/MM/yyyy")," ")}}function N(e,t){1&e&&(a.ec(0,"mat-header-cell",17),a.Xc(1," title "),a.dc())}function O(e,t){if(1&e&&(a.ec(0,"mat-cell"),a.Xc(1),a.dc()),2&e){const e=t.$implicit;a.Mb(1),a.Zc(" ",e.title," ")}}function X(e,t){1&e&&(a.ec(0,"mat-header-cell",17),a.Xc(1," description "),a.dc())}function I(e,t){if(1&e&&(a.ec(0,"mat-cell"),a.Xc(1),a.dc()),2&e){const e=t.$implicit;a.Mb(1),a.Zc(" ",e.descriptionMaintenance," ")}}function B(e,t){1&e&&(a.ec(0,"mat-header-cell",17),a.Xc(1," Type "),a.dc())}function Z(e,t){if(1&e&&(a.ec(0,"mat-cell"),a.Xc(1),a.dc()),2&e){const e=t.$implicit;a.Mb(1),a.Zc(" ",e.type," ")}}function q(e,t){1&e&&(a.ec(0,"mat-header-cell",17),a.Xc(1," Status "),a.dc())}function U(e,t){if(1&e&&(a.ec(0,"mat-cell"),a.Xc(1),a.dc()),2&e){const e=t.$implicit;a.Mb(1),a.Zc(" ",e.statut," ")}}function P(e,t){1&e&&(a.ec(0,"mat-header-cell"),a.Xc(1," Action"),a.dc())}function L(e,t){if(1&e){const e=a.fc();a.ec(0,"button",21),a.mc("click",function(){a.Mc(e);const t=a.qc().$implicit;return a.qc().validerDemande(t)}),a.ec(1,"span",20),a.Xc(2," offline_pin "),a.dc(),a.dc()}}function $(e,t){if(1&e){const e=a.fc();a.ec(0,"mat-cell"),a.Vc(1,L,3,0,"button",18),a.ec(2,"button",19),a.mc("click",function(){a.Mc(e);const n=t.$implicit;return a.qc().deleteDemande(n)}),a.ec(3,"span",20),a.Xc(4," delete_sweep "),a.dc(),a.dc(),a.dc()}if(2&e){const e=t.$implicit;a.Mb(1),a.xc("ngIf","validated"!==e.statut)}}function J(e,t){1&e&&a.Zb(0,"mat-header-row")}function R(e,t){1&e&&a.Zb(0,"mat-row")}let F=(()=>{class e{constructor(e,t,n){this.appSettings=e,this.tablesService=t,this.snackBar=n,this.displayedColumns=["requestDate","updatedDate","title","description","type","status","action"]}ngAfterViewInit(){this.tablesService.getAllMaintenances().subscribe(e=>{this.dataSource=e,this.settings=this.appSettings.settings,this.dataSource.sort((e,t)=>t.createdAt-e.createdAt),this.dataSource.reverse(),this.data=new y.k(this.dataSource)})}deleteDemande(e){this.tablesService.deleteMaintenance(e._id).subscribe(e=>{this.tablesService.getAllMaintenances().subscribe(e=>{this.dataSource=e,this.data=new y.k(this.dataSource)}),this.snackBar.open("demande maintenance supprimer ","close",{duration:2e3})})}validerDemande(e){var t={statut:JSON.parse(JSON.stringify("validated"))};this.tablesService.updateMaintenance(e._id,t).subscribe(e=>{this.tablesService.getAllMaintenances().subscribe(e=>{this.dataSource=e,this.data=new y.k(this.dataSource)}),this.snackBar.open("demande maintenance valid\xe9e ","close",{duration:2e3})})}}return e.\u0275fac=function(t){return new(t||e)(a.Yb(g.a),a.Yb(w.a),a.Yb(v.a))},e.\u0275cmp=a.Sb({type:e,selectors:[["app-sorting"]],decls:28,vars:9,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],["matSort","",1,"mat-elevation-z8",3,"dataSource"],["table",""],["matColumnDef","requestDate"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","updatedDate"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","title"],["matColumnDef","description"],["matColumnDef","type"],["matColumnDef","status"],["matColumnDef","action"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["mat-sort-header",""],["mat-mini-fab","","color","primary","class","m-1 ",3,"click",4,"ngIf"],["mat-mini-fab","","color","warn",1,"m-1",3,"click"],[1,"material-icons"],["mat-mini-fab","","color","primary",1,"m-1",3,"click"]],template:function(e,t){1&e&&(a.Zb(0,"app-content-header",0),a.ec(1,"div",1),a.ec(2,"div",2),a.ec(3,"mat-table",3,4),a.cc(5,5),a.Vc(6,k,2,0,"mat-header-cell",6),a.Vc(7,A,3,4,"mat-cell",7),a.bc(),a.cc(8,8),a.Vc(9,x,2,0,"mat-header-cell",9),a.Vc(10,V,3,4,"mat-cell",7),a.bc(),a.cc(11,10),a.Vc(12,N,2,0,"mat-header-cell",9),a.Vc(13,O,2,1,"mat-cell",7),a.bc(),a.cc(14,11),a.Vc(15,X,2,0,"mat-header-cell",9),a.Vc(16,I,2,1,"mat-cell",7),a.bc(),a.cc(17,12),a.Vc(18,B,2,0,"mat-header-cell",9),a.Vc(19,Z,2,1,"mat-cell",7),a.bc(),a.cc(20,13),a.Vc(21,q,2,0,"mat-header-cell",9),a.Vc(22,U,2,1,"mat-cell",7),a.bc(),a.cc(23,14),a.Vc(24,P,2,0,"mat-header-cell",6),a.Vc(25,$,5,1,"mat-cell",7),a.bc(),a.Vc(26,J,1,0,"mat-header-row",15),a.Vc(27,R,1,0,"mat-row",16),a.dc(),a.dc(),a.dc()),2&e&&(a.Ob("pb-4"),a.xc("icon","sort")("title","Maintenances")("hideBreadcrumb",!1)("hasBgImage",!0),a.Mb(3),a.xc("dataSource",t.data),a.Mb(23),a.xc("matHeaderRowDef",t.displayedColumns),a.Mb(1),a.xc("matRowDefColumns",t.displayedColumns))},directives:[S.a,M.c,y.j,C.a,y.c,y.e,y.b,y.g,y.i,y.d,y.a,C.b,i.n,D.b,y.f,y.h],pipes:[i.e],encapsulation:2}),e})();const _=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P"},{position:16,name:"Sulfur",weight:32.065,symbol:"S"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl"},{position:18,name:"Argon",weight:39.948,symbol:"Ar"},{position:19,name:"Potassium",weight:39.0983,symbol:"K"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca"}];let W=(()=>{class e{constructor(){}getData(){return _}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Ub({token:e,factory:e.\u0275fac}),e})();var z=n("3Pt+"),E=n("EjJx"),G=n("5KN4"),H=n("EFyh"),Y=n("6Qg2"),j=n("Wp6s"),K=n("kmnG"),T=n("qFsG"),Q=n("d3UM"),ee=n("FKr1"),te=n("0IaG");let ne=(()=>{class e{constructor(e,t,n,i,c){this.maintenancesService=e,this.snackBar=t,this.loginService=n,this.messagesService=i,this.UserService=c,this.formMaintenance=new z.g({title:new z.e("",[z.t.required]),descriptionMaintenance:new z.e("",[z.t.required]),type:new z.e("",[z.t.required])})}ngOnInit(){this.formMaintenance=new z.g({title:new z.e("",[z.t.required]),descriptionMaintenance:new z.e("",[z.t.required]),type:new z.e("",[z.t.required]),status:new z.e(""),userOwner:new z.e("")})}onSubmit(){let e=localStorage.getItem("token");var t=Object(E.a)(e);this.formMaintenance.patchValue({userOwner:JSON.parse(JSON.stringify(t))._id}),this.maintenancesService.addMaintenance(this.formMaintenance.value).subscribe(e=>{this.snackBar.open("Maintenance added successfully","close",{duration:2e3}),"informatique"===this.formMaintenance.value.type&&this.UserService.getAllUsers().subscribe(e=>{let n=e.find(e=>"Responsable-info"===e.work.roles[0].name);this.messages={reciever:n._id,text:"you have new maintenance",userOwner:JSON.parse(JSON.stringify(t))._id,maintenance:!0},this.messagesService.sendNotification(this.messages).subscribe()}),"autres"===this.formMaintenance.value.type&&this.UserService.getAllUsers().subscribe(e=>{let n=e.find(e=>"respon-maintenance"===e.work.roles[0].name);this.messages={reciever:n._id,text:"you have new maintenance",userOwner:JSON.parse(JSON.stringify(t))._id,maintenance:!0},this.messagesService.sendNotification(this.messages).subscribe()}),this.ngOnInit()})}}return e.\u0275fac=function(t){return new(t||e)(a.Yb(w.a),a.Yb(v.a),a.Yb(H.a),a.Yb(G.a),a.Yb(Y.a))},e.\u0275cmp=a.Sb({type:e,selectors:[["app-form-field"]],features:[a.Lb([G.a])],decls:25,vars:9,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[3,"formGroup"],["fxLayoutAlign","center"],["fxLayout","column","fxLayoutAlign","center"],["matInput","","placeholder","Titre","formControlName","title"],["matInput","","placeholder","description","formControlName","descriptionMaintenance"],["placeholder","Type de Maintenance","formControlName","type"],["value","informatique"],["value","autres"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","space-between center"],["mat-raised-button","","color","primary","type","submit",3,"mat-dialog-close","disabled","click"]],template:function(e,t){1&e&&(a.Zb(0,"app-content-header",0),a.ec(1,"div",1),a.ec(2,"div",2),a.ec(3,"form",3),a.ec(4,"mat-card"),a.ec(5,"mat-card-header",4),a.ec(6,"mat-card-subtitle"),a.ec(7,"h2"),a.Xc(8,"Demande de maintenance"),a.dc(),a.dc(),a.dc(),a.ec(9,"mat-card-content",5),a.ec(10,"mat-form-field"),a.Zb(11,"input",6),a.dc(),a.ec(12,"mat-form-field"),a.Zb(13,"textarea",7),a.dc(),a.ec(14,"mat-form-field"),a.ec(15,"mat-select",8),a.ec(16,"mat-option",9),a.Xc(17,"Informatique"),a.dc(),a.ec(18,"mat-option",10),a.Xc(19,"Autres"),a.dc(),a.dc(),a.dc(),a.Zb(20,"br"),a.Zb(21,"br"),a.dc(),a.ec(22,"div",11),a.ec(23,"button",12),a.mc("click",function(){return t.onSubmit()}),a.Xc(24,"Envoy\xe9 Demande"),a.dc(),a.dc(),a.dc(),a.dc(),a.dc(),a.dc()),2&e&&(a.Ob("pb-4"),a.xc("icon","view_stream")("title","Maintenance")("hideBreadcrumb",!1)("hasBgImage",!0),a.Mb(3),a.xc("formGroup",t.formMaintenance),a.Mb(20),a.xc("mat-dialog-close",t.formMaintenance.value)("disabled",!t.formMaintenance.valid))},directives:[S.a,M.c,z.u,z.o,z.h,j.a,j.d,M.b,j.g,j.c,K.c,T.b,z.c,z.n,z.f,Q.a,ee.m,te.c,D.b,te.d],encapsulation:2}),e})();var ie=n("tA9a");const ce=[{path:"",redirectTo:"sorting",pathMatch:"full"},{path:"sorting",component:F,data:{breadcrumb:"Sorting table"}},{path:"liste-maintenance",canActivate:[(()=>{class e{constructor(e,t){this.auth=e,this.router=t}canActivate(){return!!this.auth.isAllowedMaintenance()||(this.router.navigate([""]),!1)}}return e.\u0275fac=function(t){return new(t||e)(a.ic(ie.a),a.ic(c.d))},e.\u0275prov=a.Ub({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()],component:F,data:{breadcrumb:"Sorting table"}},{path:"Demande-Maintenance",component:ne,data:{breadcrumb:"Form Field"}}];let ae=(()=>{class e{}return e.\u0275mod=a.Wb({type:e}),e.\u0275inj=a.Vb({factory:function(t){return new(t||e)},providers:[W],imports:[[i.c,c.h.forChild(ce),h,b.a]]}),e})()}}]);