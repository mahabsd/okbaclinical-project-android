!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function n(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EdD2:function(e,c,a){"use strict";a.r(c),a.d(c,"routes",function(){return nt}),a.d(c,"ChatModule",function(){return ct});var i,o,r=a("ofXK"),s=a("tyNb"),d=a("3Pt+"),u=a("Kdsb"),h=a("PCNd"),l=a("/RaO"),g=a("gFX4"),f=a("fXoL"),m=a("tk/3"),p=((i=function(){function e(n){t(this,e),this.httpClient=n,this.url="http://localhost:3000",this.socket=g(this.url)}return n(e,[{key:"getPrivateMessage",value:function(t,e){return this.httpClient.get(this.url+"/chat/getPrivateMessage/"+t+"/"+e)}},{key:"sendMessage",value:function(t,e){return this.httpClient.post(this.url+"/chat/sendMessage/"+e,t)}},{key:"deleteChat",value:function(t){return this.httpClient.get(this.url+"/chat/deleteChat/"+t)}}]),e}()).\u0275fac=function(t){return new(t||i)(f.ic(m.c))},i.\u0275prov=f.Ub({token:i,factory:i.\u0275fac}),i),b=a("EjJx"),M=a("EFyh"),v=a("5KN4"),x=a("7JkF"),C=a("C790"),y=a("/t3+"),w=a("XiUz"),O=a("bTqV"),k=a("NFeN"),_=a("kmnG"),P=a("qFsG"),I=a("MutI"),X=a("STbY"),F=a("Wp6s"),S=a("XhcP"),L=a("FKr1"),q=a("znSr"),A=a("RoQY"),U=((o=function(){function e(n,c){t(this,e),this.changeDetectorRef=n,this.ngZone=c}return n(e,[{key:"transform",value:function(t){var e=this;this.removeTimer();var n=new Date(t),c=new Date,a=Math.round(Math.abs((c.getTime()-n.getTime())/1e3)),i=Number.isNaN(a)?1e3:1e3*this.getSecondsUntilUpdate(a);this.timer=this.ngZone.runOutsideAngular(function(){return"undefined"!=typeof window?window.setTimeout(function(){e.ngZone.run(function(){return e.changeDetectorRef.markForCheck()})},i):null});var o=Math.round(Math.abs(a/60)),r=Math.round(Math.abs(o/60)),s=Math.round(Math.abs(r/24)),d=Math.round(Math.abs(s/30.416)),u=Math.round(Math.abs(s/365));return Number.isNaN(a)?"":a<=45?"a few seconds ago":a<=90?"a minute ago":o<=45?o+" minutes ago":o<=90?"an hour ago":r<=22?r+" hours ago":r<=36?"a day ago":s<=25?s+" days ago":s<=45?"a month ago":s<=345?d+" months ago":s<=545?"a year ago":u+" years ago"}},{key:"ngOnDestroy",value:function(){this.removeTimer()}},{key:"removeTimer",value:function(){this.timer&&(window.clearTimeout(this.timer),this.timer=null)}},{key:"getSecondsUntilUpdate",value:function(t){return t<60?2:t<3600?30:t<86400?300:3600}}]),e}()).\u0275fac=function(t){return new(t||o)(f.kc(),f.Yb(f.H))},o.\u0275pipe=f.Xb({name:"timeAgo",type:o,pure:!1}),o),V=["sidenav"];function T(t,e){1&t&&(f.ec(0,"mat-icon",44),f.Xc(1,"check_circle"),f.dc())}function D(t,e){1&t&&(f.ec(0,"mat-icon",44),f.Xc(1,"highlight_off "),f.dc())}function N(t,e){1&t&&(f.ec(0,"mat-icon",44),f.Xc(1,"schedule"),f.dc())}function Y(t,e){1&t&&(f.ec(0,"mat-icon",44),f.Xc(1,"not_interested "),f.dc())}function z(t,e){if(1&t){var n=f.fc();f.ec(0,"mat-list-item",39),f.mc("click",function(){f.Mc(n);var t=e.$implicit;return f.qc().clickUser(t._id)}),f.Zb(1,"img",40),f.ec(2,"h6",38),f.Xc(3),f.dc(),f.ec(4,"p",41),f.ec(5,"span",42),f.Vc(6,T,2,0,"mat-icon",43),f.Vc(7,D,2,0,"mat-icon",43),f.Vc(8,N,2,0,"mat-icon",43),f.Vc(9,Y,2,0,"mat-icon",43),f.dc(),f.dc(),f.dc()}if(2&t){var c=e.$implicit;f.Mb(1),f.xc("src",c.profile.image,f.Oc),f.Mb(2),f.ad(" ",c.profile.name," ",c.profile.surname," "),f.Mb(2),f.xc("ngSwitch",c.authorStatus),f.Mb(1),f.xc("ngSwitchCase","Online"),f.Mb(1),f.xc("ngSwitchCase","Offline"),f.Mb(1),f.xc("ngSwitchCase","Away"),f.Mb(1),f.xc("ngSwitchCase","Do not disturb")}}function J(t,e){if(1&t&&f.Zb(0,"img",40),2&t){var n=f.qc().$implicit;f.xc("src",n.logo,f.Oc)}}function Z(t,e){if(1&t&&(f.ec(0,"span",53),f.Xc(1),f.dc()),2&t){var n=f.qc().$implicit,c=f.qc(2);f.xc("ngClass",n.candidat!==c.userId?"bg-primary":"bg-accent"),f.Mb(1),f.Yc(n.content)}}function j(t,e){if(1&t&&(f.ec(0,"p",48),f.ec(1,"a",54),f.Xc(2),f.rc(3,"slice"),f.dc(),f.dc()),2&t){var n=f.qc().$implicit,c=f.qc(2);f.Mb(1),f.xc("href",n.files,f.Oc)("ngClass",n.candidat!=c.userId?"bg-primary":"bg-accent"),f.Mb(1),f.Yc(f.tc(3,3,n.files[0],-17))}}function W(t,e){if(1&t&&(f.ec(0,"small"),f.Xc(1),f.rc(2,"timeAgo"),f.dc()),2&t){var n=f.qc().$implicit;f.Mb(1),f.Yc(f.sc(2,1,n.createdDate))}}function $(t,e){if(1&t&&(f.ec(0,"mat-list-item",46),f.Vc(1,J,1,1,"img",47),f.ec(2,"p",48),f.Vc(3,Z,2,2,"span",49),f.dc(),f.Vc(4,j,4,6,"p",50),f.ec(5,"p",51),f.Vc(6,W,3,3,"small",52),f.dc(),f.dc()),2&t){var n=e.$implicit;f.Mb(1),f.xc("ngIf",null!=n.content&&""!=n.content||null!=n.files&&""!=n.files),f.Mb(2),f.xc("ngIf",null!=n.content&&""!=n.content),f.Mb(1),f.xc("ngIf",n.files.length>0),f.Mb(2),f.xc("ngIf",null!=n.content&&""!=n.content||n.files.length>0)}}function E(t,e){if(1&t&&(f.ec(0,"mat-list",9),f.Vc(1,$,7,4,"mat-list-item",45),f.dc()),2&t){var n=f.qc();f.Mb(1),f.xc("ngForOf",n.talks)}}function R(t,e){1&t&&(f.ec(0,"div",55),f.ec(1,"mat-icon"),f.Xc(2,"chat"),f.dc(),f.ec(3,"p"),f.Xc(4,"Select a interlocutor for talk"),f.dc(),f.dc())}function B(t,e){if(1&t){var n=f.fc();f.ec(0,"mat-card",56),f.ec(1,"div",57),f.ec(2,"form",58),f.ec(3,"mat-form-field",59),f.Zb(4,"input",60),f.dc(),f.dc(),f.ec(5,"div",61),f.ec(6,"input",62),f.mc("ngModelChange",function(t){return f.Mc(n),f.qc().myFiles=t})("change",function(t){return f.Mc(n),f.qc().selectFile(t)}),f.dc(),f.ec(7,"button",63),f.mc("click",function(){return f.Mc(n),f.qc().sendMessage()}),f.ec(8,"mat-icon"),f.Xc(9,"send"),f.dc(),f.dc(),f.dc(),f.dc(),f.dc()}if(2&t){var c=f.qc();f.Mb(2),f.xc("formGroup",c.messageForm),f.Mb(4),f.xc("ngModel",c.myFiles)}}function G(t,e){if(1&t&&f.Zb(0,"img",64),2&t){var n=f.qc();f.xc("src",n.currentChat.candidat1._id!=n.userId?n.currentChat.candidat1.profile.image:n.currentChat.candidat2.profile.image,f.Oc)}}function K(t,e){if(1&t&&(f.ec(0,"h2",65),f.Xc(1),f.dc()),2&t){var n=f.qc();f.Mb(1),f.ad("",n.currentChat.candidat1._id!=n.userId?n.currentChat.candidat1.profile.surname:n.currentChat.candidat2.profile.surname," ",n.currentChat.candidat1._id!=n.userId?n.currentChat.candidat1.profile.name:n.currentChat.candidat2.profile.name,"")}}var Q,H,tt=((Q=function(){function e(n,c,a,i,o){t(this,e),this.appSettings=n,this.socket=c,this.chatService=a,this.auth=i,this.messagesService=o,this.userImage="assets/img/users/user.jpg",this.sidenavOpen=!0,this.token=localStorage.getItem("token"),this.decoded=JSON.parse(JSON.stringify(Object(b.a)(this.token))),this.userId=this.decoded._id,this.listeMessages=[],this.listeCandidats=[],this.settings=this.appSettings.settings}return n(e,[{key:"ngOnInit",value:function(){var t=this;window.innerWidth<=768&&(this.sidenavOpen=!1),this.messageForm=new d.g({content:new d.e(""),candidat:new d.e(this.decoded._id),logo:new d.e(this.decoded.user.profile.image)}),this.socket.on("newUserAdded",function(){t.auth.getAllUsers().subscribe(function(e){t.chats=t.listeCandidats=e.filter(function(e){return e._id!==t.userId})})}),this.auth.getAllUsers().subscribe(function(e){t.chats=t.listeCandidats=e.filter(function(e){return e._id!==t.userId}),t.clickUser(t.listeCandidats[0]._id)}),this.socket.on("newMessageSended",function(){t.clickUser(t.chosenUser)})}},{key:"clickUser",value:function(t){var e=this;this.chosenUser=t,this.chatService.getPrivateMessage(t,this.userId).subscribe(function(t){e.conversation=t._id,e.currentChat=t,window.innerWidth<=768&&e.sidenav.close(),e.talks=e.listeMessages=t.messages})}},{key:"sendMessage",value:function(){var t=this;this.formData=new FormData,null!=this.file&&this.formData.append("myFiles",this.file,this.file.name),Object.keys(this.messageForm.value).forEach(function(e){t.formData.append(e,t.messageForm.value[e])}),this.chatService.sendMessage(this.formData,this.conversation).subscribe(function(t){}),this.myFiles="",this.messageForm.patchValue({content:"",files:""}),this.file=null,this.messagesService.sendNotification({reciever:this.chosenUser,text:"sent you a message",userOwner:this.userId,messages:!0,chatUrl:"chat"}).subscribe()}},{key:"selectFile",value:function(t){t.target.value&&(this.file=t.target.files[0])}},{key:"deleteChat",value:function(t){this.chatService.deleteChat(t).subscribe(function(t){})}},{key:"onWindowResize",value:function(){this.sidenavOpen=!(window.innerWidth<=768)}},{key:"ngOnDestroy",value:function(){this.talks&&(this.talks.length=2)}}]),e}()).\u0275fac=function(t){return new(t||Q)(f.Yb(l.a),f.Yb(x.a),f.Yb(p),f.Yb(M.a),f.Yb(v.a))},Q.\u0275cmp=f.Sb({type:Q,selectors:[["app-chat"]],viewQuery:function(t,e){var n;1&t&&f.bd(V,!0),2&t&&f.Ic(n=f.nc())&&(e.sidenav=n.first)},hostBindings:function(t,e){1&t&&f.mc("resize",function(){return e.onWindowResize()},!1,f.Lc)},features:[f.Lb([p,v.a])],decls:77,vars:25,consts:[[3,"title","hideBreadcrumb","hasBgImage"],["color","primary","fxLayout","row","fxLayoutAlign","space-between center",1,"px-2","chat-toolbar"],["fxLayout","row"],["mat-icon-button","",3,"click"],["mat-icon-button","",1,"mx-2"],[1,"user-search"],[1,"user-search-input"],["matInput","","placeholder","Search user by name...","name","search",3,"ngModel","ngModelChange"],["fxLayout","row","fxLayoutAlign","center center"],[1,"p-0"],["matListAvatar","",1,"author-img",3,"src"],[1,"author-name"],["mat-icon-button","",3,"matMenuTriggerFor"],["personMenuTrigger","matMenuTrigger"],["xPosition","before"],["personMenu","matMenu"],[3,"mouseleave"],["mat-menu-item","",3,"click"],["fxLayout","row wrap"],["fxFlex","100"],[1,"p-0","chat"],[1,"chat-container"],["autoFocus","false",1,"chat-sidenav","mat-elevation-z1",3,"opened","mode"],["sidenav",""],["perfectScrollbar","",1,"p-0","chat-sidenav-list"],[3,"click",4,"ngFor","ngForOf"],["perfectScrollbar","",1,"chat-content"],["class","p-0",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center","class","h-100 empty",4,"ngIf"],["class","chat-actions",4,"ngIf"],["mode","over","position","end","autoFocus","false",1,"person-info-sidenav","mat-elevation-z1"],["personInfo",""],["perfectScrollbar","",1,"p-0","h-100"],[1,"bg-primary","w-100","text-center"],["fxLayout","row","fxLayoutAlign","space-between center",1,"p-2"],["class","py-2",3,"src",4,"ngIf"],["class","pb-3",4,"ngIf"],["matListIcon","",1,"secondary-text-color"],["matLine",""],[3,"click"],["matListAvatar","",3,"src"],["matLine","","fxLayout","row","fxLayoutAlign","none center",1,"secondary-text-color"],[3,"ngSwitch"],["class","chat-status-icon",4,"ngSwitchCase"],[1,"chat-status-icon"],["class","talk-item",4,"ngFor","ngForOf"],[1,"talk-item"],["matListAvatar","",3,"src",4,"ngIf"],["matLine","",1,"message"],[3,"ngClass",4,"ngIf"],["matLine","","class","message",4,"ngIf"],["matLine","",1,"message-date"],[4,"ngIf"],[3,"ngClass"],[3,"href","ngClass"],["fxLayout","column","fxLayoutAlign","center center",1,"h-100","empty"],[1,"chat-actions"],["fxLayout","row","fxLayoutAlign","space-between center"],[3,"formGroup"],[1,"w-100"],["matInput","","placeholder","Enter your text...","formControlName","content"],["fxLayout","row","fxLayoutAlign","scenter center"],["type","file","name","myFiles","accept","file/*",3,"ngModel","ngModelChange","change"],["mat-mini-fab","","color","primary","type","button",3,"click"],[1,"py-2",3,"src"],[1,"pb-3"]],template:function(t,e){if(1&t){var n=f.fc();f.Zb(0,"app-content-header",0),f.ec(1,"mat-toolbar",1),f.ec(2,"div",2),f.ec(3,"button",3),f.mc("click",function(){return f.Mc(n),f.Jc(40).toggle()}),f.ec(4,"mat-icon"),f.Xc(5,"list"),f.dc(),f.dc(),f.ec(6,"button",4),f.ec(7,"mat-icon"),f.Xc(8,"search"),f.dc(),f.dc(),f.dc(),f.ec(9,"form",5),f.ec(10,"mat-form-field",6),f.ec(11,"input",7),f.mc("ngModelChange",function(t){return e.searchText=t}),f.dc(),f.dc(),f.dc(),f.ec(12,"div",8),f.ec(13,"mat-list",9),f.ec(14,"mat-list-item"),f.Zb(15,"img",10),f.dc(),f.dc(),f.ec(16,"span",11),f.Xc(17),f.dc(),f.ec(18,"button",12,13),f.ec(20,"mat-icon"),f.Xc(21,"more_vert"),f.dc(),f.dc(),f.ec(22,"mat-menu",14,15),f.ec(24,"span",16),f.mc("mouseleave",function(){return f.Mc(n),f.Jc(19).closeMenu()}),f.ec(25,"button",17),f.mc("click",function(){return f.Mc(n),f.Jc(50).toggle()}),f.ec(26,"mat-icon"),f.Xc(27,"account_circle"),f.dc(),f.ec(28,"span"),f.Xc(29,"Contact info"),f.dc(),f.dc(),f.ec(30,"button",17),f.mc("click",function(){return e.deleteChat(e.currentChat._id)}),f.ec(31,"mat-icon"),f.Xc(32,"delete_forever"),f.dc(),f.ec(33,"span"),f.Xc(34,"Clear chat"),f.dc(),f.dc(),f.dc(),f.dc(),f.dc(),f.dc(),f.ec(35,"div",18),f.ec(36,"div",19),f.ec(37,"mat-card",20),f.ec(38,"mat-drawer-container",21),f.ec(39,"mat-drawer",22,23),f.ec(41,"mat-nav-list",24),f.Vc(42,z,10,8,"mat-list-item",25),f.rc(43,"UserSearchPipe"),f.dc(),f.dc(),f.ec(44,"div"),f.ec(45,"div",26),f.Vc(46,E,2,1,"mat-list",27),f.Vc(47,R,5,0,"div",28),f.dc(),f.Vc(48,B,10,2,"mat-card",29),f.dc(),f.ec(49,"mat-drawer",30,31),f.ec(51,"div",32),f.ec(52,"div",33),f.ec(53,"div",34),f.ec(54,"h2"),f.Xc(55,"Contact Info"),f.dc(),f.ec(56,"button",3),f.mc("click",function(){return f.Mc(n),f.Jc(50).toggle()}),f.ec(57,"mat-icon"),f.Xc(58,"close"),f.dc(),f.dc(),f.dc(),f.Vc(59,G,1,1,"img",35),f.Vc(60,K,2,2,"h2",36),f.dc(),f.ec(61,"mat-list"),f.ec(62,"mat-list-item"),f.ec(63,"mat-icon",37),f.Xc(64,"mail_outline"),f.dc(),f.ec(65,"h3",38),f.Xc(66),f.dc(),f.dc(),f.ec(67,"mat-list-item"),f.ec(68,"mat-icon",37),f.Xc(69,"call"),f.dc(),f.ec(70,"h3",38),f.Xc(71),f.dc(),f.dc(),f.ec(72,"mat-list-item"),f.ec(73,"mat-icon",37),f.Xc(74,"location_on"),f.dc(),f.ec(75,"h3",38),f.Xc(76,"Y"),f.dc(),f.dc(),f.dc(),f.dc(),f.dc(),f.dc(),f.dc(),f.dc(),f.dc()}if(2&t){var c=f.Jc(23);f.Ob("pb-5"),f.xc("title","Chat")("hideBreadcrumb",!1)("hasBgImage",!0),f.Mb(11),f.xc("ngModel",e.searchText),f.Mb(4),f.xc("src",e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.profile.image:e.currentChat.candidat2.profile.image,f.Oc),f.Mb(2),f.ad("",e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.profile.name:e.currentChat.candidat2.profile.name," ",e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.profile.surname:e.currentChat.candidat2.profile.surname,""),f.Mb(1),f.xc("matMenuTriggerFor",c),f.Mb(21),f.xc("opened",e.sidenavOpen)("mode",e.sidenavOpen?"side":"over"),f.Mb(3),f.xc("ngForOf",f.tc(43,22,e.listeCandidats,e.searchText)),f.Mb(3),f.Qb("actions-visible",e.talks),f.Mb(1),f.xc("ngIf",e.talks),f.Mb(1),f.xc("ngIf",!e.talks),f.Mb(1),f.xc("ngIf",e.talks),f.Mb(11),f.xc("ngIf",e.currentChat),f.Mb(1),f.xc("ngIf",e.currentChat),f.Mb(6),f.Yc(e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.contacts.email:e.currentChat.candidat2.contacts.email),f.Mb(5),f.Yc(e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.contacts.phone:e.currentChat.candidat2.contacts.phone)}},directives:[C.a,y.a,w.c,w.b,O.b,k.a,d.u,d.o,d.p,_.c,P.b,d.c,d.n,d.q,I.a,I.d,I.b,X.d,X.a,X.b,w.a,F.a,S.b,S.a,I.g,u.b,r.m,r.n,I.c,L.j,r.p,r.q,r.l,q.a,d.h,d.f],pipes:[A.a,r.v,U],styles:[".chat-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 148px))}.chat-toolbar[_ngcontent-%COMP%]{background:transparent!important;height:40px;margin-top:-40px}.chat-toolbar[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%]{width:34px;height:34px}.chat-toolbar[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%]{font-size:16px;font-weight:400}.chat[_ngcontent-%COMP%]{border-radius:0}.chat[_ngcontent-%COMP%]   .chat-actions[_ngcontent-%COMP%]{padding:12px}.chat[_ngcontent-%COMP%]   .talk-item[_ngcontent-%COMP%]{padding:6px 0;height:100%}.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{white-space:unset;text-overflow:unset}.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:6px 10px;border-radius:4px;display:inline-block;font-size:14px}.chat[_ngcontent-%COMP%]   .message-date[_ngcontent-%COMP%]{opacity:.8}.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:220px;height:220px;width:220px;opacity:.4}.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;opacity:.8}.chat-status-icon[_ngcontent-%COMP%]{font-size:14px;height:14px;width:14px;line-height:22px;margin-right:6px}.author-status[_ngcontent-%COMP%]{font-size:13px}.chat-sidenav[_ngcontent-%COMP%]{border-right:1px solid transparent;overflow:hidden}.chat-content[_ngcontent-%COMP%]{padding:12px;height:calc(100vh - (56px + 56px + 174px))}.chat-content.actions-visible[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 254px))}.chat-sidenav-list[_ngcontent-%COMP%]{height:100%}.person-info-sidenav[_ngcontent-%COMP%]{width:280px}.person-info-sidenav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:400}.person-info-sidenav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%}@media (max-width:960px){.chat-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 130px))}.chat-content[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 154px))}.chat-content.actions-visible[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 236px))}}"]}),Q),et=a("DXe4"),nt=[{path:"",component:tt,pathMatch:"full"}],ct=((H=function e(){t(this,e)}).\u0275mod=f.Wb({type:H}),H.\u0275inj=f.Vb({factory:function(t){return new(t||H)},imports:[[r.c,s.h.forChild(nt),d.j,u.c,h.a,d.r,et.a]]}),H)}}])}();