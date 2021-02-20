(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"305l":function(r,t,e){"use strict";e.r(t),e.d(t,"AuthModule",function(){return N});var o=e("ofXK"),a=e("tyNb"),s=e("3Pt+"),n=e("fXoL"),i=e("7zfz"),u=e("Ug1E"),l=e("QIUk"),p=e("7kUa"),m=e("LuMj"),b=e("jIHw"),c=e("Q4Mo");function d(r,t){if(1&r&&(n.Ob(0,"small",14),n.vc(1),n.Nb()),2&r){const r=n.Xb();n.xb(1),n.xc(" ",r.formErrors.username,"")}}function h(r,t){if(1&r&&(n.Ob(0,"small",15),n.vc(1),n.Nb()),2&r){const r=n.Xb();n.xb(1),n.xc(" ",r.formErrors.password," ")}}const f=function(r){return{"ng-invalid ng-dirty":r}};let g=(()=>{class r{constructor(r,t,e,o){this.router=r,this.primengConfig=t,this.auth=e,this.fb=o,this.validationMessages={username:{required:"Username is required",minlength:"Username must be greater than 2 characters",maxlength:"Username must bes less than 20 character"},password:{required:"Password is required",maxlength:"Password must be less than 20 character"}},this.formErrors={username:"",password:""}}ngOnInit(){this.primengConfig.ripple=!0,this.authForm=this.fb.group({username:["",[s.n.required,s.n.minLength(3),s.n.maxLength(20)]],password:["",[s.n.required,s.n.maxLength(30)]],type:["A",s.n.required]}),this.authForm.valueChanges.subscribe(r=>{this.logValidationErrors(this.authForm)}),this.loginData={username:"",password:"",type:""}}loginUser(){this.mapFormValueToCourseModel(),this.auth.loginUser(this.loginData).subscribe(r=>{localStorage.setItem("token",r),"A"===this.authForm.value.type?this.router.navigate(["/admin"]):"F"===this.authForm.value.type?this.router.navigate(["/faculty"]):"S"===this.authForm.value.type?this.router.navigate(["/student"]):"P"===this.authForm.value.type&&this.router.navigate(["/parent"])},r=>console.log(r))}mapFormValueToCourseModel(){this.loginData.username=this.authForm.value.username,this.loginData.password=this.authForm.value.password,this.loginData.type=this.authForm.value.type}logValidationErrors(r=this.authForm){Object.keys(r.controls).forEach(t=>{const e=r.get(t);if(e instanceof s.d)this.logValidationErrors(e);else if(this.formErrors[t]="",e&&!e.valid&&(e.touched||e.dirty)){const r=this.validationMessages[t];for(const o in e.errors)o&&(this.formErrors[t]+=r[o]+" ")}})}}return r.\u0275fac=function(t){return new(t||r)(n.Ib(a.a),n.Ib(i.g),n.Ib(u.a),n.Ib(s.b))},r.\u0275cmp=n.Cb({type:r,selectors:[["app-login"]],decls:22,vars:10,consts:[[1,"p-d-flex","p-jc-center"],[3,"formGroup","ngSubmit"],[1,"p-field"],["for","userName"],["id","userName","type","text","aria-describedby","userName-help","autocomplete","off","pInputText","","formControlName","username",1,"p-inputtext-sm",3,"ngClass","blur"],["id","userName-help","class","p-error",4,"ngIf"],["for","password"],["id","password","type","password","aria-describedby","password-help","autocomplete","off","pInputText","","formControlName","password",1,"p-inputtext-sm",3,"ngClass","blur"],["id","password-help","class","p-error",4,"ngIf"],["inputId","type1","name","type","value","A","formControlName","type","label","Admin",1,"p-mb-2"],["inputId","type2","name","type","value","F","formControlName","type","label","Faculty",1,"p-mb-2"],["inputId","type3","name","type","value","S","formControlName","type","label","Student",1,"p-mb-2"],["inputId","type4","name","type","value","P","formControlName","type","label","Parent",1,"p-mb-2"],["pButton","","type","submit","label","Login","icon","pi pi-check","pRipple","",1,"p-button",3,"disabled"],["id","userName-help",1,"p-error"],["id","password-help",1,"p-error"]],template:function(r,t){1&r&&(n.Ob(0,"h1"),n.vc(1,"Login Module"),n.Nb(),n.Jb(2,"br"),n.Jb(3,"br"),n.Ob(4,"p-card",0),n.Ob(5,"form",1),n.Vb("ngSubmit",function(){return t.loginUser()}),n.Ob(6,"div",2),n.Ob(7,"label",3),n.vc(8,"Username"),n.Nb(),n.Ob(9,"input",4),n.Vb("blur",function(){return t.logValidationErrors()}),n.Nb(),n.tc(10,d,2,1,"small",5),n.Nb(),n.Ob(11,"div",2),n.Ob(12,"label",6),n.vc(13,"Password"),n.Nb(),n.Ob(14,"input",7),n.Vb("blur",function(){return t.logValidationErrors()}),n.Nb(),n.tc(15,h,2,1,"small",8),n.Nb(),n.Ob(16,"div",2),n.Jb(17,"p-radioButton",9),n.Jb(18,"p-radioButton",10),n.Jb(19,"p-radioButton",11),n.Jb(20,"p-radioButton",12),n.Nb(),n.Jb(21,"button",13),n.Nb(),n.Nb()),2&r&&(n.xb(5),n.cc("formGroup",t.authForm),n.xb(4),n.cc("ngClass",n.ec(6,f,t.formErrors.username)),n.xb(1),n.cc("ngIf",t.formErrors.username),n.xb(4),n.cc("ngClass",n.ec(8,f,t.formErrors.password)),n.xb(1),n.cc("ngIf",t.formErrors.password),n.xb(6),n.cc("disabled",t.authForm.invalid))},directives:[l.a,s.o,s.j,s.e,s.a,p.a,s.i,s.c,o.h,o.j,m.a,b.a,c.a],styles:[".p-field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:block}"]}),r})();const y=[{path:"",component:g},{path:"login",component:g}];let v=(()=>{class r{}return r.\u0275mod=n.Gb({type:r}),r.\u0275inj=n.Fb({factory:function(t){return new(t||r)},imports:[[a.d.forChild(y)],a.d]}),r})();var w=e("4TcP");let N=(()=>{class r{}return r.\u0275mod=n.Gb({type:r}),r.\u0275inj=n.Fb({factory:function(t){return new(t||r)},imports:[[o.b,v,w.a]]}),r})()}}]);