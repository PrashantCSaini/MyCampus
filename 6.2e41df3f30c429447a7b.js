(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"13Ib":function(e,t,r){"use strict";r.r(t),r.d(t,"AdminModule",function(){return U});var o=r("tyNb"),s=r("fXoL"),n=r("Ug1E"),c=r("b1Ni"),i=r("7zfz"),a=r("7kUa"),u=r("jIHw"),l=r("Q4Mo"),p=r("+F6F");function b(e,t){1&e&&s.Jb(0,"img",3)}function d(e,t){if(1&e){const e=s.Pb();s.Jb(0,"input",4),s.Ob(1,"button",5),s.Vb("click",function(){return s.nc(e),s.Xb().logout()}),s.Nb(),s.Jb(2,"p-avatar",6)}}let m=(()=>{class e{constructor(e){this.auth=e}ngOnInit(){this.items=[{label:"Dashboard",icon:"pi pi-fw pi-chart-bar",routerLink:["dashboard"]},{label:"Add Course",icon:"pi pi-fw pi-book",routerLink:["create-course"]},{label:"Add Student",icon:"pi pi-fw pi-user-plus",routerLink:["create-student"]}]}logout(){this.auth.logoutUser()}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(n.a))},e.\u0275cmp=s.Cb({type:e,selectors:[["app-home"]],decls:4,vars:1,consts:[[3,"model"],["pTemplate","start"],["pTemplate","end"],["src","https://primefaces.org/primeng/showcase/assets/showcase/images/primeng.svg","height","40",1,"p-mr-2"],["type","text","pInputText","","placeholder","Search",1,"p-mr-4"],["pButton","","type","button","label","Logout","icon","pi pi-sign-out","pRipple","",1,"p-button-text","p-button-help",3,"click"],["label","P","shape","circle","icon","p-avatar-icon",1,"p-ml-2"]],template:function(e,t){1&e&&(s.Ob(0,"p-menubar",0),s.tc(1,b,1,0,"ng-template",1),s.tc(2,d,3,0,"ng-template",2),s.Nb(),s.Jb(3,"router-outlet")),2&e&&s.cc("model",t.items)},directives:[c.a,i.h,o.e,a.a,u.a,l.a,p.a],styles:[".p-menu[_ngcontent-%COMP%]{border-color:#fff}"]}),e})(),h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["app-create-student"]],decls:2,vars:0,consts:[["type","text","pInputText",""]],template:function(e,t){1&e&&(s.Jb(0,"br"),s.Jb(1,"input",0))},directives:[a.a],styles:[""]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["app-dashboard"]],decls:5,vars:0,template:function(e,t){1&e&&(s.Jb(0,"br"),s.Jb(1,"br"),s.Jb(2,"br"),s.Ob(3,"h1"),s.vc(4,"Admin Dashboard"),s.Nb())},styles:[""]}),e})();var g=r("3Pt+"),C=r("tk/3"),v=r("z6cu");let N=(()=>{class e{constructor(e){this._httpClient=e,this.baseUrl="https://mycampusapp.azurewebsites.net"}getCourse(){return this._httpClient.get(this.baseUrl+"/api/course")}addCourse(e){return this._httpClient.post(this.baseUrl+"/api/course",e)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(v.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(t){return new(t||e)(s.Sb(C.b))},e.\u0275prov=s.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var O=r("QIUk"),y=r("ofXK"),F=r("rEr+"),x=r("Gxio");function I(e,t){if(1&e&&(s.Ob(0,"small",15),s.vc(1),s.Nb()),2&e){const e=s.Xb();s.xb(1),s.xc(" ",e.formErrors.courseName,"")}}function w(e,t){if(1&e&&(s.Ob(0,"small",16),s.vc(1),s.Nb()),2&e){const e=s.Xb();s.xb(1),s.xc(" ",e.formErrors.courseFee," ")}}function E(e,t){if(1&e){const e=s.Pb();s.Ob(0,"div",17),s.Ob(1,"h5",18),s.vc(2,"Manage Courses"),s.Nb(),s.Ob(3,"span",19),s.Jb(4,"i",20),s.Ob(5,"input",21),s.Vb("input",function(t){return s.nc(e),s.Xb(),s.mc(17).filterGlobal(t.target.value,"contains")}),s.Nb(),s.Nb(),s.Nb()}}function S(e,t){1&e&&(s.Ob(0,"tr"),s.Ob(1,"th",22),s.vc(2,"Id"),s.Jb(3,"p-sortIcon",23),s.Nb(),s.Ob(4,"th",24),s.vc(5,"Course Name"),s.Jb(6,"p-sortIcon",25),s.Nb(),s.Ob(7,"th",26),s.vc(8,"Course Fee"),s.Jb(9,"p-sortIcon",27),s.Nb(),s.Jb(10,"th"),s.Nb())}function k(e,t){if(1&e){const e=s.Pb();s.Ob(0,"tr"),s.Ob(1,"td"),s.vc(2),s.Nb(),s.Ob(3,"td"),s.vc(4),s.Nb(),s.Ob(5,"td"),s.vc(6),s.Nb(),s.Ob(7,"td"),s.Ob(8,"Button",28),s.Vb("click",function(){s.nc(e);const t=s.Xb();return t.editButtonClick(t.employee.EMP_ID)}),s.Nb(),s.Ob(9,"Button",29),s.Vb("click",function(){s.nc(e);const r=t.$implicit;return s.Xb().deleteCourse(r.CourseId)}),s.Nb(),s.Nb(),s.Nb()}if(2&e){const e=t.$implicit;s.xb(2),s.wc(e.CourseId),s.xb(2),s.wc(e.CourseName),s.xb(2),s.wc(e.CourseFee)}}function J(e,t){1&e&&(s.Ob(0,"tr"),s.Ob(1,"td",30),s.vc(2,"No course found."),s.Nb(),s.Nb())}const M=function(e){return{"ng-invalid ng-dirty":e}},T=function(){return["CourseId","CourseName","CourseFee"]},V=[{path:"",component:m,children:[{path:"dashboard",component:f},{path:"create-student",component:h},{path:"create-course",component:(()=>{class e{constructor(e,t,r,o,s){this.courseService=e,this.primengConfig=t,this.fb=r,this.messageService=o,this._router=s,this.validationMessages={courseName:{required:"Course Name is required",minlength:"Course Name must be greater than 2 characters",maxlength:"Course Name must bes less than 20 character"},courseFee:{required:"Course Fee is required"}},this.formErrors={courseName:"",courseFee:""}}ngOnInit(){this.courseForm=this.fb.group({courseName:["",[g.n.required,g.n.minLength(3),g.n.maxLength(20)]],courseFee:["",g.n.required]}),this.courseForm.valueChanges.subscribe(e=>{this.logValidationErrors(this.courseForm)}),this.primengConfig.ripple=!0,this.getCourse(),this.course={CourseId:null,CourseName:"",CourseFee:null}}logValidationErrors(e=this.courseForm){Object.keys(e.controls).forEach(t=>{const r=e.get(t);if(r instanceof g.d)this.logValidationErrors(r);else if(this.formErrors[t]="",r&&!r.valid&&(r.touched||r.dirty)){const e=this.validationMessages[t];for(const o in r.errors)o&&(this.formErrors[t]+=e[o]+" ")}})}getCourse(){this.courseService.getCourse().subscribe(e=>this.courselist=e,e=>{e instanceof C.d&&401===e.status&&(localStorage.removeItem("token"),this._router.navigate(["/auth"]))})}onSubmit(){this.mapFormValueToCourseModel(),this.courseService.addCourse(this.course).subscribe(e=>{console.log("Messsage: "+e),this.showSuccess(),this.courseForm.reset(),this.getCourse()},e=>{console.error(e),this.showError()})}mapFormValueToCourseModel(){console.log(this.courseForm.value),this.course.CourseId=0,this.course.CourseName=this.courseForm.value.courseName,this.course.CourseFee=this.courseForm.value.courseFee}showSuccess(){this.messageService.add({severity:"success",summary:"Success",detail:"Course added successfully"})}showError(){this.messageService.add({severity:"error",summary:"Error",detail:"Error while adding course"})}clear(){this.messageService.clear()}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(N),s.Ib(i.g),s.Ib(g.b),s.Ib(i.f),s.Ib(o.a))},e.\u0275cmp=s.Cb({type:e,selectors:[["app-create-course"]],decls:23,vars:14,consts:[[3,"formGroup","ngSubmit"],[1,"p-field"],["for","courseName"],["id","courseName","type","text","aria-describedby","courseName-help","autocomplete","off","pInputText","","formControlName","courseName",1,"p-inputtext-sm",3,"ngClass","blur"],["id","courseName-help","class","p-error",4,"ngIf"],["for","courseFee"],["id","courseFee","type","number","aria-describedby","courseFee-help","autocomplete","off","pInputText","","formControlName","courseFee",1,"p-inputtext-sm",3,"ngClass","blur"],["id","courseFee-help","class","p-error",4,"ngIf"],["pButton","","type","submit","label","Save","icon","pi pi-check","pRipple","",1,"p-button",3,"disabled"],["styleClass","p-datatable-sm p-datatable-striped","sortMode","multiple","dataKey","id","scrollHeight","500px","selectionMode","single",3,"value","scrollable","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["id","courseName-help",1,"p-error"],["id","courseFee-help",1,"p-error"],[1,"p-d-flex","p-ai-center","p-jc-between"],[1,"p-m-0"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],["pSortableColumn","CourseId"],["field","CourseId"],["pSortableColumn","CourseName"],["field","CourseName"],["pSortableColumn","CourseFee"],["field","CourseFee"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-text","p-button-success","p-inputtext-sm",3,"click"],["pButton","","pRipple","","type","button","icon","pi pi-trash",1,"p-button-rounded","p-button-text","p-button-danger","p-inputtext-sm",3,"click"],["colspan","4"]],template:function(e,t){1&e&&(s.Jb(0,"br"),s.Ob(1,"p-card"),s.Ob(2,"form",0),s.Vb("ngSubmit",function(){return t.onSubmit()}),s.Ob(3,"div",1),s.Ob(4,"label",2),s.vc(5,"Course Name"),s.Nb(),s.Ob(6,"input",3),s.Vb("blur",function(){return t.logValidationErrors()}),s.Nb(),s.tc(7,I,2,1,"small",4),s.Nb(),s.Ob(8,"div",1),s.Ob(9,"label",5),s.vc(10,"Course Fee"),s.Nb(),s.Ob(11,"input",6),s.Vb("blur",function(){return t.logValidationErrors()}),s.Nb(),s.tc(12,w,2,1,"small",7),s.Nb(),s.Jb(13,"button",8),s.Nb(),s.Nb(),s.Jb(14,"br"),s.Ob(15,"p-card"),s.Ob(16,"p-table",9,10),s.tc(18,E,6,0,"ng-template",11),s.tc(19,S,11,0,"ng-template",12),s.tc(20,k,10,3,"ng-template",13),s.tc(21,J,3,0,"ng-template",14),s.Nb(),s.Nb(),s.Jb(22,"p-toast")),2&e&&(s.xb(2),s.cc("formGroup",t.courseForm),s.xb(4),s.cc("ngClass",s.ec(9,M,t.formErrors.courseName)),s.xb(1),s.cc("ngIf",t.formErrors.courseName),s.xb(4),s.cc("ngClass",s.ec(11,M,t.formErrors.courseFee)),s.xb(1),s.cc("ngIf",t.formErrors.courseFee),s.xb(1),s.cc("disabled",t.courseForm.invalid),s.xb(3),s.cc("value",t.courselist)("scrollable",!0)("globalFilterFields",s.dc(13,T)))},directives:[O.a,g.o,g.j,g.e,g.a,a.a,g.i,g.c,y.h,y.j,g.l,u.a,l.a,F.c,i.h,x.a,F.b,F.a],styles:[".p-field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:block}table[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#000;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #a9a9a9;padding:5px 10px}"]}),e})()}]}];let P=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},imports:[[o.d.forChild(V)],o.d]}),e})();var _=r("eksp"),j=r("4TcP");let U=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},providers:[N,i.f,{provide:C.a,useClass:_.a,multi:!0}],imports:[[j.a,P]]}),e})()}}]);