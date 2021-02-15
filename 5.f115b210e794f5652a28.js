(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"13Ib":function(e,r,t){"use strict";t.r(r),t.d(r,"AdminModule",function(){return k});var o=t("tyNb"),s=t("fXoL"),c=t("b1Ni"),a=t("7zfz"),u=t("7kUa"),i=t("+F6F");function n(e,r){1&e&&s.Jb(0,"img",3)}function b(e,r){1&e&&(s.Jb(0,"input",4),s.Jb(1,"p-avatar",5))}let l=(()=>{class e{constructor(){}ngOnInit(){this.items=[{label:"Dashboard",icon:"pi pi-fw pi-chart-bar",routerLink:["dashboard"]},{label:"Add Course",icon:"pi pi-fw pi-book",routerLink:["create-course"]},{label:"Add Student",icon:"pi pi-fw pi-user-plus",routerLink:["create-student"]}]}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["app-home"]],decls:4,vars:1,consts:[[3,"model"],["pTemplate","start"],["pTemplate","end"],["src","https://primefaces.org/primeng/showcase/assets/showcase/images/primeng.svg","height","40",1,"p-mr-2"],["type","text","pInputText","","placeholder","Search",1,"p-mr-4"],["label","P","shape","circle","icon","p-avatar-icon"]],template:function(e,r){1&e&&(s.Ob(0,"p-menubar",0),s.uc(1,n,1,0,"ng-template",1),s.uc(2,b,2,0,"ng-template",2),s.Nb(),s.Jb(3,"router-outlet")),2&e&&s.dc("model",r.items)},directives:[c.a,a.h,o.e,u.a,i.a],styles:[".p-menu[_ngcontent-%COMP%]{border-color:#fff}"]}),e})(),d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["app-create-student"]],decls:2,vars:0,consts:[["type","text","pInputText",""]],template:function(e,r){1&e&&(s.Jb(0,"br"),s.Jb(1,"input",0))},directives:[u.a],styles:[""]}),e})(),p=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["app-dashboard"]],decls:5,vars:0,template:function(e,r){1&e&&(s.Jb(0,"br"),s.Jb(1,"br"),s.Jb(2,"br"),s.Ob(3,"h1"),s.wc(4,"Admin Dashboard"),s.Nb())},styles:[""]}),e})();var m=t("3Pt+"),h=t("z6cu"),f=t("tk/3");let g=(()=>{class e{constructor(e){this._httpClient=e,this.baseUrl="https://mycampusapp.azurewebsites.net"}getCourse(){return this._httpClient.get(this.baseUrl+"/api/course")}addCourse(e){return this._httpClient.post(this.baseUrl+"/api/course",e)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(h.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(r){return new(r||e)(s.Sb(f.a))},e.\u0275prov=s.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var N=t("QIUk"),C=t("jIHw"),y=t("Q4Mo"),w=t("rEr+"),F=t("Gxio"),v=t("ofXK");function O(e,r){1&e&&(s.Ob(0,"tr"),s.Ob(1,"th",15),s.wc(2,"Id"),s.Jb(3,"p-sortIcon",16),s.Nb(),s.Ob(4,"th",17),s.wc(5,"Course Name"),s.Jb(6,"p-sortIcon",18),s.Nb(),s.Ob(7,"th",19),s.wc(8,"Course Fee"),s.Jb(9,"p-sortIcon",20),s.Nb(),s.Ob(10,"th",21),s.wc(11,"Action"),s.Nb(),s.Nb())}function x(e,r){if(1&e&&(s.Ob(0,"tr"),s.Ob(1,"td"),s.wc(2),s.Nb(),s.Ob(3,"td"),s.wc(4),s.Nb(),s.Ob(5,"td"),s.wc(6),s.Nb(),s.Nb()),2&e){const e=r.$implicit;s.xb(2),s.xc(e.CourseId),s.xb(2),s.xc(e.CourseName),s.xb(2),s.xc(e.CourseFee)}}function J(e,r){1&e&&(s.Ob(0,"tr"),s.Ob(1,"td",22),s.wc(2,"No course found."),s.Nb(),s.Nb())}const I=[{path:"",component:l,children:[{path:"dashboard",component:p},{path:"create-student",component:d},{path:"create-course",component:(()=>{class e{constructor(e,r,t,o){this.courseService=e,this.primengConfig=r,this.fb=t,this.messageService=o,this.validationMessages={courseName:{required:"Course Name is required",minlength:"Course Name must be greater than 2 characters",maxlength:"Course Name must bes less than 20 character"},courseFee:{required:"Course Fee is required"}},this.formErrors={courseName:"",courseFee:""}}ngOnInit(){this.courseForm=this.fb.group({courseName:["",[m.m.required,m.m.minLength(2),m.m.maxLength(20)]],courseFee:["",m.m.required]}),this.courseForm.valueChanges.subscribe(e=>{this.logValidationErrors(this.courseForm)}),this.primengConfig.ripple=!0,this.getCourse(),this.course={CourseId:null,CourseName:"",CourseFee:null}}logValidationErrors(e=this.courseForm){Object.keys(e.controls).forEach(r=>{const t=e.get(r);if(t instanceof m.d)this.logValidationErrors(t);else if(this.formErrors[r]="",t&&!t.valid&&(t.touched||t.dirty)){const e=this.validationMessages[r];for(const o in t.errors)o&&(this.formErrors[r]+=e[o]+" ")}})}getCourse(){this.courseService.getCourse().subscribe(e=>this.courselist=e)}onSubmit(){this.mapFormValueToCourseModel(),this.courseService.addCourse(this.course).subscribe(e=>{console.log("Messsage: "+e),this.showSuccess(),this.courseForm.reset(),this.getCourse()},e=>{console.error(e),this.showError()})}mapFormValueToCourseModel(){console.log(this.courseForm.value),this.course.CourseId=0,this.course.CourseName=this.courseForm.value.courseName,this.course.CourseFee=this.courseForm.value.courseFee}showSuccess(){this.messageService.add({severity:"success",summary:"Success",detail:"Course added successfully"})}showError(){this.messageService.add({severity:"error",summary:"Error",detail:"Error while adding course"})}clear(){this.messageService.clear()}}return e.\u0275fac=function(r){return new(r||e)(s.Ib(g),s.Ib(a.g),s.Ib(m.b),s.Ib(a.f))},e.\u0275cmp=s.Cb({type:e,selectors:[["app-create-course"]],decls:60,vars:17,consts:[[3,"formGroup","ngSubmit"],[1,"p-field"],["for","courseName"],["id","courseName","type","text","aria-describedby","courseName-help","autocomplete","off","pInputText","","formControlName","courseName",1,"p-inputtext-sm",3,"blur"],["id","courseName-help"],["for","courseFee"],["id","courseFee","type","number","aria-describedby","courseFee-help","autocomplete","off","pInputText","","formControlName","courseFee",1,"p-inputtext-sm",3,"blur"],["id","courseFee-help"],["pButton","","type","submit","label","Save","icon","pi pi-check","pRipple","",1,"p-button",3,"disabled"],[1,"ml-3"],["styleClass","p-datatable-sm p-datatable-striped","sortMode","multiple","dataKey","id",3,"value"],["dt1",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pSortableColumn","CourseId"],["field","CourseId"],["pSortableColumn","CourseName"],["field","CourseName"],["pSortableColumn","CourseFee"],["field","CourseFee"],["colspan","2"],["colspan","4"]],template:function(e,r){1&e&&(s.Jb(0,"br"),s.Ob(1,"p-card"),s.Ob(2,"form",0),s.Vb("ngSubmit",function(){return r.onSubmit()}),s.Ob(3,"div",1),s.Ob(4,"label",2),s.wc(5,"Course Name"),s.Nb(),s.Ob(6,"input",3),s.Vb("blur",function(){return r.logValidationErrors()}),s.Nb(),s.Ob(7,"small",4),s.wc(8,"Enter your username to reset your password."),s.Nb(),s.Nb(),s.Ob(9,"div",1),s.Ob(10,"label",5),s.wc(11,"Course Fee"),s.Nb(),s.Ob(12,"input",6),s.Vb("blur",function(){return r.logValidationErrors()}),s.Nb(),s.Ob(13,"small",7),s.wc(14,"Enter your username to reset your password."),s.Nb(),s.Nb(),s.Jb(15,"button",8),s.Nb(),s.Nb(),s.Jb(16,"br"),s.Jb(17,"br"),s.Ob(18,"table",9),s.Ob(19,"tr"),s.Ob(20,"td"),s.wc(21,"FormGroup"),s.Nb(),s.Ob(22,"td"),s.wc(23,"FormControl('courseName')"),s.Nb(),s.Ob(24,"td"),s.wc(25,"FormControl('courseFee')"),s.Nb(),s.Nb(),s.Ob(26,"tr"),s.Ob(27,"td"),s.wc(28),s.Jb(29,"br"),s.wc(30),s.Jb(31,"br"),s.wc(32),s.Jb(33,"br"),s.wc(34),s.Yb(35,"json"),s.Nb(),s.Ob(36,"td"),s.wc(37),s.Jb(38,"br"),s.wc(39),s.Jb(40,"br"),s.wc(41),s.Jb(42,"br"),s.wc(43),s.Nb(),s.Ob(44,"td"),s.wc(45),s.Jb(46,"br"),s.wc(47),s.Jb(48,"br"),s.wc(49),s.Jb(50,"br"),s.wc(51),s.Nb(),s.Nb(),s.Nb(),s.Jb(52,"br"),s.Ob(53,"p-card"),s.Ob(54,"p-table",10,11),s.uc(56,O,12,0,"ng-template",12),s.uc(57,x,7,3,"ng-template",13),s.uc(58,J,3,0,"ng-template",14),s.Nb(),s.Nb(),s.Jb(59,"p-toast")),2&e&&(s.xb(2),s.dc("formGroup",r.courseForm),s.xb(13),s.dc("disabled",r.courseForm.invalid),s.xb(13),s.yc(" touched : ",r.courseForm.touched," "),s.xb(2),s.yc(" dirty : ",r.courseForm.dirty," "),s.xb(2),s.yc(" valid : ",r.courseForm.valid," "),s.xb(2),s.yc(" Form Value : ",s.Zb(35,15,r.courseForm.value)," "),s.xb(3),s.yc(" touched : ",r.courseForm.get("courseName").touched," "),s.xb(2),s.yc(" dirty : ",r.courseForm.get("courseName").dirty," "),s.xb(2),s.yc(" valid : ",r.courseForm.get("courseName").valid," "),s.xb(2),s.yc(" Course Name Value : ",r.courseForm.get("courseName").value," "),s.xb(2),s.yc(" touched : ",r.courseForm.get("courseFee").touched," "),s.xb(2),s.yc(" dirty : ",r.courseForm.get("courseFee").dirty," "),s.xb(2),s.yc(" valid : ",r.courseForm.get("courseFee").valid," "),s.xb(2),s.yc(" Course Name Value : ",r.courseForm.get("courseFee").value," "),s.xb(3),s.dc("value",r.courselist))},directives:[N.a,m.n,m.i,m.e,m.a,u.a,m.h,m.c,m.k,C.a,y.a,w.c,a.h,F.a,w.b,w.a],pipes:[v.e],styles:[".p-field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:block}table[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#000}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #a9a9a9;padding:5px 10px}"]}),e})()}]}];let S=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(r){return new(r||e)},imports:[[o.d.forChild(I)],o.d]}),e})();var E=t("4TcP");let k=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(r){return new(r||e)},providers:[g,a.f],imports:[[E.a,S]]}),e})()}}]);