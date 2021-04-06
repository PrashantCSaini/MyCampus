(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"305l":function(e,t,r){"use strict";r.r(t),r.d(t,"AuthModule",function(){return C});var s=r("ofXK"),a=r("tyNb"),o=r("3Pt+"),n=r("tk/3"),i=r("fXoL"),u=r("7zfz"),l=r("Ug1E"),m=r("QIUk"),p=r("7kUa"),c=r("LuMj"),b=r("jIHw"),d=r("Q4Mo"),h=r("FMpt");function g(e,t){if(1&e&&(i.Ob(0,"small",16),i.Ac(1),i.Nb()),2&e){const e=i.Xb();i.xb(1),i.Cc(" ",e.formErrors.username,"")}}function f(e,t){if(1&e&&(i.Ob(0,"small",17),i.Ac(1),i.Nb()),2&e){const e=i.Xb();i.xb(1),i.Cc(" ",e.formErrors.password," ")}}function y(e,t){if(1&e&&i.Jb(0,"p-message",18),2&e){const e=i.Xb();i.ec("text",e.errorMessage)}}const I=function(){return{width:"20rem","margin-bottom":"2em",color:"white",background:"linear-gradient(to right,  #1488cc, #2b32b2)"}},v=function(e){return{"ng-invalid ng-dirty":e}};let w=(()=>{class e{constructor(e,t,r,s){this.router=e,this.primengConfig=t,this.auth=r,this.fb=s,this.loginIcon="pi pi-check",this.validationMessages={username:{required:"Username is required",minlength:"Username must be greater than 2 characters",maxlength:"Username must bes less than 20 character"},password:{required:"Password is required",maxlength:"Password must be less than 20 character"}},this.formErrors={username:"",password:""}}ngOnInit(){this.primengConfig.ripple=!0,this.authForm=this.fb.group({username:["",[o.n.required,o.n.minLength(3),o.n.maxLength(20)]],password:["",[o.n.required,o.n.maxLength(30)]],type:["S",o.n.required]}),this.authForm.valueChanges.subscribe(e=>{this.logValidationErrors(this.authForm)}),this.loginData={username:"",password:"",type:""}}loginUser(){this.loginIcon="pi pi-spin pi-spinner",this.mapFormValueToCourseModel(),this.auth.loginUser(this.loginData).subscribe(e=>{localStorage.setItem("token",e),this.getUserId(this.authForm.value.type,this.authForm.value.username),"A"===this.authForm.value.type?this.router.navigate(["/admin"]):"F"===this.authForm.value.type?this.router.navigate(["/faculty"]):"S"===this.authForm.value.type?this.router.navigate(["/student"]):"P"===this.authForm.value.type&&this.router.navigate(["/parent"])},e=>{this.loginIcon="pi pi-check",e instanceof n.d&&401===e.status&&(this.errorMessage="Incorrect username or password.")})}getUserId(e,t){"S"===e?this.auth.getStudentId(t).subscribe(e=>{localStorage.setItem("id",e[0]),localStorage.setItem("courseid",e[1]),localStorage.setItem("semester",e[2]),localStorage.setItem("username",this.authForm.value.username)}):"P"===e?this.auth.getParentId(t).subscribe(e=>{localStorage.setItem("id",e[0]),localStorage.setItem("studentId",e[1]),localStorage.setItem("courseid",e[2]),localStorage.setItem("semester",e[3]),localStorage.setItem("username",this.authForm.value.username)}):"F"===e?this.auth.getFacultyId(t).subscribe(e=>{localStorage.setItem("id",e),localStorage.setItem("username",this.authForm.value.username)}):(localStorage.setItem("id","0"),localStorage.setItem("username",this.authForm.value.username))}mapFormValueToCourseModel(){this.loginData.username=this.authForm.value.username,this.loginData.password=this.authForm.value.password,this.loginData.type=this.authForm.value.type}logValidationErrors(e=this.authForm){Object.keys(e.controls).forEach(t=>{const r=e.get(t);if(r instanceof o.d)this.logValidationErrors(r);else if(this.formErrors[t]="",r&&!r.valid&&(r.touched||r.dirty)){const e=this.validationMessages[t];for(const s in r.errors)s&&(this.formErrors[t]+=e[s]+" ")}})}}return e.\u0275fac=function(t){return new(t||e)(i.Ib(a.b),i.Ib(u.h),i.Ib(l.a),i.Ib(o.b))},e.\u0275cmp=i.Cb({type:e,selectors:[["app-login"]],decls:26,vars:15,consts:[["header","MyCampus","subheader","User Login","styleClass","p-card-shadow",1,"p-d-flex","p-jc-center"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","p-grid"],[1,"p-field","p-col-12","p-md-12"],["for","userName"],["id","userName","type","text","aria-describedby","userName-help","autocomplete","off","pInputText","","formControlName","username",1,"p-inputtext-sm",3,"ngClass","blur"],["id","userName-help","class","p-error",4,"ngIf"],["for","password"],["id","password","type","password","aria-describedby","password-help","autocomplete","off","pInputText","","formControlName","password",1,"p-inputtext-sm",3,"ngClass","blur"],["id","password-help","class","p-error",4,"ngIf"],["inputId","type3","name","type","value","S","formControlName","type","label","Student",1,"p-mb-2"],["inputId","type2","name","type","value","F","formControlName","type","label","Faculty",1,"p-mb-2"],["inputId","type4","name","type","value","P","formControlName","type","label","Parent",1,"p-mb-2"],["inputId","type1","name","type","value","A","formControlName","type","label","Admin",1,"p-mb-2"],["pButton","","type","submit","label","Login","pRipple","",1,"p-button-raised","p-button-text","p-mb-2",2,"background-color","honeydew","font-weight","bold",3,"disabled","icon"],["severity","warn",3,"text",4,"ngIf"],["id","userName-help",1,"p-error"],["id","password-help",1,"p-error"],["severity","warn",3,"text"]],template:function(e,t){1&e&&(i.Jb(0,"br"),i.Jb(1,"br"),i.Jb(2,"br"),i.Jb(3,"br"),i.Ob(4,"p-card",0),i.Ob(5,"form",1),i.Vb("ngSubmit",function(){return t.loginUser()}),i.Ob(6,"div",2),i.Ob(7,"div",3),i.Ob(8,"label",4),i.Ac(9,"Username"),i.Nb(),i.Ob(10,"input",5),i.Vb("blur",function(){return t.logValidationErrors()}),i.Nb(),i.yc(11,g,2,1,"small",6),i.Nb(),i.Ob(12,"div",3),i.Ob(13,"label",7),i.Ac(14,"Password"),i.Nb(),i.Ob(15,"input",8),i.Vb("blur",function(){return t.logValidationErrors()}),i.Nb(),i.yc(16,f,2,1,"small",9),i.Nb(),i.Ob(17,"div",3),i.Jb(18,"p-radioButton",10),i.Jb(19,"p-radioButton",11),i.Jb(20,"p-radioButton",12),i.Jb(21,"p-radioButton",13),i.Nb(),i.Ob(22,"div",3),i.Jb(23,"button",14),i.Nb(),i.Ob(24,"div",3),i.yc(25,y,1,1,"p-message",15),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&e&&(i.xb(4),i.wc(i.gc(10,I)),i.xb(1),i.dc("formGroup",t.authForm),i.xb(5),i.dc("ngClass",i.hc(11,v,t.formErrors.username)),i.xb(1),i.dc("ngIf",t.formErrors.username),i.xb(4),i.dc("ngClass",i.hc(13,v,t.formErrors.password)),i.xb(1),i.dc("ngIf",t.formErrors.password),i.xb(7),i.dc("disabled",t.authForm.invalid)("icon",t.loginIcon),i.xb(2),i.dc("ngIf",t.errorMessage))},directives:[m.a,o.o,o.j,o.e,o.a,p.a,o.i,o.c,s.i,s.k,c.a,b.b,d.a,h.b],styles:["*[_ngcontent-%COMP%], .p-card-subheader[_ngcontent-%COMP%]{color:#fff}"]}),e})();const F=[{path:"",component:w},{path:"login",component:w}];let N=(()=>{class e{}return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(t){return new(t||e)},imports:[[a.e.forChild(F)],a.e]}),e})();var x=r("4TcP");let C=(()=>{class e{}return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(t){return new(t||e)},imports:[[s.b,N,x.a]]}),e})()}}]);