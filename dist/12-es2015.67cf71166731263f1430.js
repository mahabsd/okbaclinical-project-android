(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{F4UR:function(e,r,t){"use strict";t.r(r),t.d(r,"routes",function(){return I}),t.d(r,"LoginModule",function(){return y});var o=t("ofXK"),n=t("tyNb"),i=t("3Pt+"),c=t("PCNd"),s=t("/RaO"),a=t("EFyh"),m=t("fXoL"),l=t("XhcP"),u=t("XiUz"),d=t("C790"),f=t("kmnG"),p=t("NFeN"),h=t("qFsG"),b=t("bTqV");function g(e,r){1&e&&(m.ec(0,"mat-error"),m.Xc(1,"Email is required"),m.dc())}function w(e,r){1&e&&(m.ec(0,"mat-error"),m.Xc(1,"Invalid email address"),m.dc())}function v(e,r){1&e&&(m.ec(0,"mat-error"),m.Xc(1,"Password is required"),m.dc())}function x(e,r){1&e&&(m.ec(0,"mat-error"),m.Xc(1,"Password isn't long enough, minimum of 6 characters"),m.dc())}const I=[{path:"",component:(()=>{class e{constructor(e,r,t){this.appSettings=e,this.formService=r,this.router=t,this.settings=this.appSettings.settings,this.form=new i.g({password:new i.e("",[i.t.required]),email:new i.e("",[i.t.required])})}ngOnInit(){this.loginUser=new i.g({password:new i.e("",[i.t.required]),contacts:new i.g({email:new i.e("",[i.t.required])})})}onSubmit(e){this.loginUser.setValue({password:this.form.value.password,contacts:{email:this.form.value.email}}),this.formService.loginUser(this.form.value).subscribe(e=>{this.response=e,localStorage.setItem("token",this.response.token),this.router.navigate(["/"])})}ngAfterViewInit(){setTimeout(()=>{this.settings.loadingSpinner=!1})}}return e.\u0275fac=function(r){return new(r||e)(m.Yb(s.a),m.Yb(a.a),m.Yb(n.d))},e.\u0275cmp=m.Sb({type:e,selectors:[["app-login"]],decls:19,vars:11,consts:[[1,"h-100"],["fxLayout","row","fxLayoutAlign","center center",1,"h-100"],["fxFlex","90","fxFlex.gt-sm","30","fxFlex.sm","60",1,"mat-elevation-z6",3,"formGroup","ngSubmit"],[3,"icon","title","hideBreadcrumb","hasBgImage"],[1,"p-3"],[1,"w-100"],["matPrefix","",1,"mat-icon-sm","mb-2","mr-2","secondary-text-color"],["matInput","","placeholder","Email","formControlName","email"],[4,"ngIf"],["matInput","","placeholder","Password","type","password","formControlName","password"],["mat-raised-button","","color","primary","type","submit",1,"mat-elevation-z6","w-100","mt-3"]],template:function(e,r){1&e&&(m.ec(0,"mat-sidenav-container",0),m.ec(1,"div",1),m.ec(2,"form",2),m.mc("ngSubmit",function(){return r.onSubmit(r.form.value)}),m.Zb(3,"app-content-header",3),m.ec(4,"div",4),m.ec(5,"mat-form-field",5),m.ec(6,"mat-icon",6),m.Xc(7,"mail"),m.dc(),m.Zb(8,"input",7),m.Vc(9,g,2,0,"mat-error",8),m.Vc(10,w,2,0,"mat-error",8),m.dc(),m.ec(11,"mat-form-field",5),m.ec(12,"mat-icon",6),m.Xc(13,"lock"),m.dc(),m.Zb(14,"input",9),m.Vc(15,v,2,0,"mat-error",8),m.Vc(16,x,2,0,"mat-error",8),m.dc(),m.ec(17,"button",10),m.Xc(18,"SIGN IN"),m.dc(),m.dc(),m.dc(),m.dc(),m.dc()),2&e&&(m.Mb(2),m.xc("formGroup",r.form),m.Mb(1),m.Ob("py-4"),m.xc("icon","exit_to_app")("title","Login")("hideBreadcrumb",!0)("hasBgImage",!0),m.Mb(6),m.xc("ngIf",null==r.form.controls.email.errors?null:r.form.controls.email.errors.required),m.Mb(1),m.xc("ngIf",r.form.controls.email.hasError("invalidEmail")),m.Mb(5),m.xc("ngIf",null==r.form.controls.password.errors?null:r.form.controls.password.errors.required),m.Mb(1),m.xc("ngIf",r.form.controls.password.hasError("minlength")))},directives:[l.d,u.c,u.b,i.u,i.o,u.a,i.h,d.a,f.c,p.a,f.h,h.b,i.c,i.n,i.f,o.n,b.b,f.b],encapsulation:2}),e})(),pathMatch:"full"}];let y=(()=>{class e{}return e.\u0275mod=m.Wb({type:e}),e.\u0275inj=m.Vb({factory:function(r){return new(r||e)},imports:[[o.c,n.h.forChild(I),i.j,i.r,c.a]]}),e})()}}]);