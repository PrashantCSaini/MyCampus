(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"e/zx":function(e,t,i){"use strict";i.r(t),i.d(t,"StudentModule",function(){return we});var c=i("ofXK"),n=i("4TcP"),s=i("tyNb"),b=i("fXoL"),r=i("WP+7"),a=i("QIUk"),o=i("7zfz"),l=i("jeV5");function d(e,t){1&e&&b.Jb(0,"img",11)}function p(e,t){1&e&&(b.Ob(0,"div",12),b.Jb(1,"p-skeleton",13),b.Ob(2,"div"),b.Jb(3,"p-skeleton",14),b.Jb(4,"p-skeleton",15),b.Jb(5,"p-skeleton",16),b.Nb(),b.Nb())}function u(e,t){1&e&&b.Jb(0,"img",17)}function m(e,t){1&e&&(b.Ob(0,"div",12),b.Jb(1,"p-skeleton",13),b.Ob(2,"div"),b.Jb(3,"p-skeleton",14),b.Jb(4,"p-skeleton",15),b.Jb(5,"p-skeleton",16),b.Nb(),b.Nb())}function g(e,t){1&e&&b.Jb(0,"img",18)}function h(e,t){1&e&&(b.Ob(0,"div",12),b.Jb(1,"p-skeleton",13),b.Ob(2,"div"),b.Jb(3,"p-skeleton",14),b.Jb(4,"p-skeleton",15),b.Jb(5,"p-skeleton",16),b.Nb(),b.Nb())}const f=function(){return{margin:"15px",padding:"20px"}},v=function(){return{margin:"10px","margin-left":"20px"}},N=function(){return{width:"25rem"}},O=function(){return{margin:"10px"}};let x=(()=>{class e{constructor(e){this.studentService=e,this.sid=+localStorage.getItem("id"),this.cid=+localStorage.getItem("courseid"),this.sem=+localStorage.getItem("semester")}ngOnInit(){this.getAttendancePercent(),this.getPendingAssignmentNumber(),this.getCourseName()}getAttendancePercent(){this.studentService.getAttendancePercent(this.sid).subscribe(e=>{this.attendance=e},e=>console.log(e))}getPendingAssignmentNumber(){this.studentService.getPendingAssignmentNumber(this.cid,this.sem,this.sid).subscribe(e=>{this.pendingassignment=e},e=>console.log(e))}getCourseName(){this.studentService.getCourseName(this.sid).subscribe(e=>{this.coursename=e},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(r.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-dashboard"]],decls:22,vars:28,consts:[[1,"p-fluid","p-grid","p-mx-auto"],[1,"p-shadow-15"],["header","My Course"],["pTemplate","header"],[1,"card-body"],["class","p-d-flex p-mb-3",4,"ngIf"],[1,"pi","pi-book",2,"font-size","2rem","display","block","margin-top","20px","color","rgb(197, 46, 46)"],["header","Attendance"],[1,"pi","pi-calendar-plus",2,"font-size","2rem","display","block","margin-top","20px","color","rgb(60, 140, 151)"],["header","Pending Assignment"],[1,"pi","pi-inbox",2,"font-size","2rem","display","block","margin-top","20px","color","rgb(60, 151, 60)"],["alt","Card","src","assets/10.jpg"],[1,"p-d-flex","p-mb-3"],["shape","circle","size","5rem","styleClass","p-mr-2"],["width","10rem","styleClass","p-mb-2"],["width","5rem","styleClass","p-mb-2"],["height",".5rem"],["alt","Card","src","assets/3.jpg"],["alt","Card","src","assets/11.jpg"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"p-card",2),b.zc(3,d,1,0,"ng-template",3),b.Ob(4,"div",4),b.Bc(5),b.zc(6,p,6,0,"div",5),b.Jb(7,"div",6),b.Nb(),b.Nb(),b.Nb(),b.Ob(8,"div",1),b.Ob(9,"p-card",7),b.zc(10,u,1,0,"ng-template",3),b.Ob(11,"div",4),b.Bc(12),b.zc(13,m,6,0,"div",5),b.Jb(14,"div",8),b.Nb(),b.Nb(),b.Nb(),b.Ob(15,"div",1),b.Ob(16,"p-card",9),b.zc(17,g,1,0,"ng-template",3),b.Ob(18,"div",4),b.Bc(19),b.zc(20,h,6,0,"div",5),b.Jb(21,"div",10),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.xc(b.hc(21,f)),b.xb(1),b.xc(b.hc(22,v)),b.xb(1),b.xc(b.hc(23,N)),b.xb(3),b.Dc(" ",t.coursename," "),b.xb(1),b.ec("ngIf",!t.coursename),b.xb(2),b.xc(b.hc(24,O)),b.xb(1),b.xc(b.hc(25,N)),b.xb(3),b.Ec(" ",t.attendance,"",t.attendance?"%":""," "),b.xb(1),b.ec("ngIf",!t.attendance),b.xb(2),b.xc(b.hc(26,O)),b.xb(1),b.xc(b.hc(27,N)),b.xb(3),b.Dc(" ",t.pendingassignment," "),b.xb(1),b.ec("ngIf",!t.pendingassignment))},directives:[a.a,o.i,c.k,l.a],styles:[".card-body[_ngcontent-%COMP%]{height:180px;font-size:70px;font-weight:700;text-align:center;display:block;margin-left:auto;margin-right:auto;padding:30px;font-family:Montserrat}"]}),e})();var y=i("Ug1E"),D=i("Dxrl"),S=i("b1Ni"),B=i("/RsI"),k=i("fqaE"),I=i("jIHw"),A=i("Q4Mo"),J=i("+F6F");function M(e,t){1&e&&b.Jb(0,"img",5)}function w(e,t){if(1&e){const e=b.Pb();b.Ob(0,"i",6),b.Vb("click",function(){return b.sc(e),b.Xb().showNotification()}),b.Nb(),b.Ob(1,"button",7),b.Vb("click",function(){return b.sc(e),b.Xb().logout()}),b.Nb(),b.Jb(2,"p-avatar",8),b.Yb(3,"uppercase"),b.Yb(4,"slice")}if(2&e){const e=b.Xb();b.xb(2),b.fc("label",b.Zb(3,1,b.bc(4,3,e.username,0,1)))}}function F(e,t){if(1&e&&(b.Ob(0,"div",9),b.Jb(1,"p-avatar",8),b.Yb(2,"slice"),b.Ob(3,"span",10),b.Bc(4),b.Jb(5,"br"),b.Ob(6,"span",11),b.Bc(7),b.Yb(8,"date"),b.Nb(),b.Ob(9,"span",12),b.Bc(10),b.Nb(),b.Nb(),b.Jb(11,"hr",13),b.Nb()),2&e){const e=t.$implicit;b.xb(1),b.fc("label",b.bc(2,4,e.username,0,1)),b.xb(3),b.Dc(" ",e.Description," "),b.xb(3),b.Cc(b.ac(8,8,e.Date,"MMM d, y")),b.xb(3),b.Dc(" ",e.FacultyName,"")}}const C=function(){return{width:"\n    80vw"}};let z=(()=>{class e{constructor(e,t,i){this.auth=e,this.notificationService=t,this.router=i,this.display=!1}ngOnInit(){this.items=[{label:"Dashboard",icon:"pi pi-fw pi-chart-bar",routerLink:["dashboard"]},{label:"Info",icon:"pi pi-fw pi-chart-bar",routerLink:["info"]},{label:"Attendance",icon:"pi pi-fw pi-chart-bar",routerLink:["attendance"]},{label:"Assignment",icon:"pi pi-fw pi-chart-bar",routerLink:["assignment"]},{label:"Result",icon:"pi pi-fw pi-chart-bar",routerLink:["result"]},{label:"Fee",icon:"pi pi-fw pi-money-bill",routerLink:["fee"]},{label:"Placement",icon:"pi pi-fw pi-money-bill",routerLink:["placement"]}],this.username=localStorage.getItem("username")}logout(){this.auth.logoutUser()}showNotification(){this.notificationService.getNotification(+localStorage.getItem("courseid"),+localStorage.getItem("semester")).subscribe(e=>this.notificationlist=e,e=>{}),this.display=!0}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(y.a),b.Ib(D.a),b.Ib(s.b))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-home"]],decls:6,vars:10,consts:[[3,"model"],["pTemplate","start"],["pTemplate","end"],["header","Notification Center",3,"visible","baseZIndex","draggable","resizable","maximizable","visibleChange"],["style","font-size: 15px; vertical-align: middle; ",4,"ngFor","ngForOf"],["src","https://primefaces.org/primeng/showcase/assets/showcase/images/primeng.svg","height","40",1,"p-mr-2"],["pBadge","",1,"pi","pi-bell","p-mr-4","p-text-secondary",2,"font-size","20px",3,"click"],["pButton","","type","button","label","Logout","icon","pi pi-sign-out","pRipple","",1,"p-button-text","p-button-help",3,"click"],["shape","circle","icon","p-avatar-icon",1,"p-ml-2",3,"label"],[2,"font-size","15px","vertical-align","middle"],[2,"margin-left","10px"],[2,"color","grey","margin-left","55px","font-size","13px"],[2,"color","grey","margin-left","20px","font-size","13px"],[2,"color","rgb(223, 223, 223)"]],template:function(e,t){1&e&&(b.Ob(0,"p-menubar",0),b.zc(1,M,1,0,"ng-template",1),b.zc(2,w,5,7,"ng-template",2),b.Nb(),b.Jb(3,"router-outlet"),b.Ob(4,"p-dialog",3),b.Vb("visibleChange",function(e){return t.display=e}),b.zc(5,F,12,11,"div",4),b.Nb()),2&e&&(b.ec("model",t.items),b.xb(4),b.xc(b.hc(9,C)),b.ec("visible",t.display)("baseZIndex",1e4)("draggable",!1)("resizable",!1)("maximizable",!0),b.xb(1),b.ec("ngForOf",t.notificationlist))},directives:[S.a,o.i,s.f,B.a,c.j,k.a,I.b,A.a,J.a],pipes:[c.s,c.r,c.d],styles:[".container[_ngcontent-%COMP%]{background-image:url(2.f2fe646c401ec6f46147.jpg)}"]}),e})();function T(e,t){1&e&&b.Jb(0,"img",4)}function P(e,t){if(1&e&&(b.Ob(0,"div",5),b.Ob(1,"div",6),b.Bc(2),b.Nb(),b.Ob(3,"div",6),b.Bc(4),b.Nb(),b.Ob(5,"div",6),b.Bc(6),b.Nb(),b.Ob(7,"div",6),b.Bc(8),b.Nb(),b.Ob(9,"div",6),b.Bc(10),b.Nb(),b.Ob(11,"div",6),b.Bc(12),b.Nb(),b.Ob(13,"div",6),b.Bc(14),b.Yb(15,"date"),b.Nb(),b.Ob(16,"div",6),b.Bc(17),b.Nb(),b.Ob(18,"div",6),b.Bc(19),b.Nb(),b.Ob(20,"div",6),b.Bc(21),b.Nb(),b.Ob(22,"div",6),b.Bc(23),b.Nb(),b.Ob(24,"div",6),b.Bc(25),b.Nb(),b.Ob(26,"div",6),b.Bc(27),b.Nb(),b.Ob(28,"div",6),b.Bc(29),b.Nb(),b.Ob(30,"div",6),b.Bc(31),b.Nb(),b.Ob(32,"div",6),b.Bc(33),b.Nb(),b.Ob(34,"div",6),b.Bc(35),b.Yb(36,"date"),b.Nb(),b.Ob(37,"div",6),b.Bc(38),b.Nb(),b.Ob(39,"div",6),b.Bc(40),b.Nb(),b.Ob(41,"div",6),b.Bc(42),b.Nb(),b.Nb()),2&e){const e=b.Xb();b.xb(2),b.Dc(" Name : ",e.s.Name," "),b.xb(2),b.Dc(" Admission Year : ",e.s.AdmissionYear," "),b.xb(2),b.Dc(" Branch : ",e.s.Branch," "),b.xb(2),b.Dc(" Current Semester : ",e.s.CurrentSemester," "),b.xb(2),b.Dc(" Division : ",e.s.Division," "),b.xb(2),b.Dc(" RollNo : ",e.s.RollNo," "),b.xb(2),b.Dc(" Date Of Birth : ",b.ac(15,20,e.s.DateOfBirth,"dd/MM/yyyy")," "),b.xb(3),b.Dc(" Gender : ","M"===e.s.Gender?"Male":"F"===e.s.Gender?"Female":"Other"," "),b.xb(2),b.Dc(" Residential Address : ",e.s.ResidentialAddress," "),b.xb(2),b.Dc(" Native Address : ",e.s.NativeAddress," "),b.xb(2),b.Dc(" Mobile No 1 : ",e.s.MobileNo1," "),b.xb(2),b.Dc(" Mobile No 2 : ",e.s.MobileNo2," "),b.xb(2),b.Dc(" Email : ",e.s.Email," "),b.xb(2),b.Dc(" Nationality : ",e.s.Nationality," "),b.xb(2),b.Dc(" MotherTongue : ",e.s.MotherTongue," "),b.xb(2),b.Dc(" Discipline : ",e.s.Discipline," "),b.xb(2),b.Dc(" Joining Date : ",b.ac(36,23,e.s.JoiningDate,"dd/MM/yyyy")," "),b.xb(3),b.Dc(" Physically Handicapped : ","Y"===e.s.PhysicallyHandicapped?"Yes":"No"," "),b.xb(2),b.Dc(" MentorName : ",e.s.MentorName," "),b.xb(2),b.Dc(" CourseId : ",e.s.CourseId," ")}}function j(e,t){1&e&&(b.Ob(0,"div",5),b.Ob(1,"div",6),b.Jb(2,"p-skeleton",7),b.Nb(),b.Ob(3,"div",6),b.Jb(4,"p-skeleton",7),b.Nb(),b.Ob(5,"div",6),b.Jb(6,"p-skeleton",7),b.Nb(),b.Ob(7,"div",6),b.Jb(8,"p-skeleton",7),b.Nb(),b.Ob(9,"div",6),b.Jb(10,"p-skeleton",7),b.Nb(),b.Ob(11,"div",6),b.Jb(12,"p-skeleton",7),b.Nb(),b.Ob(13,"div",6),b.Jb(14,"p-skeleton",7),b.Nb(),b.Ob(15,"div",6),b.Jb(16,"p-skeleton",7),b.Nb(),b.Ob(17,"div",6),b.Jb(18,"p-skeleton",7),b.Nb(),b.Ob(19,"div",6),b.Jb(20,"p-skeleton",7),b.Nb(),b.Ob(21,"div",6),b.Jb(22,"p-skeleton",7),b.Nb(),b.Ob(23,"div",6),b.Jb(24,"p-skeleton",7),b.Nb(),b.Ob(25,"div",6),b.Jb(26,"p-skeleton",7),b.Nb(),b.Ob(27,"div",6),b.Jb(28,"p-skeleton",7),b.Nb(),b.Ob(29,"div",6),b.Jb(30,"p-skeleton",7),b.Nb(),b.Ob(31,"div",6),b.Jb(32,"p-skeleton",7),b.Nb(),b.Ob(33,"div",6),b.Jb(34,"p-skeleton",7),b.Nb(),b.Ob(35,"div",6),b.Jb(36,"p-skeleton",7),b.Nb(),b.Ob(37,"div",6),b.Jb(38,"p-skeleton",7),b.Nb(),b.Ob(39,"div",6),b.Jb(40,"p-skeleton",7),b.Nb(),b.Ob(41,"div",6),b.Jb(42,"p-skeleton",7),b.Nb(),b.Nb())}const E=function(){return{margin:"5spx"}};let L=(()=>{class e{constructor(e){this.studentService=e}ngOnInit(){this.getStudentById()}getStudentById(){this.studentService.getStudentById(+localStorage.getItem("id")).subscribe(e=>{this.s=e},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(r.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-details"]],decls:5,vars:5,consts:[[1,"demo-container","p-p-4"],["header","Student Profile",1,"p-d-block","p-mx-auto"],["pTemplate","header"],["class","p-fluid p-grid",4,"ngIf"],["alt","Card","src","assets/6.jpg"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-4","p-md-6"],["styleClass","p-mb-2"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"p-card",1),b.zc(2,T,1,0,"ng-template",2),b.zc(3,P,43,26,"div",3),b.zc(4,j,43,0,"div",3),b.Nb(),b.Nb()),2&e&&(b.xb(1),b.xc(b.hc(4,E)),b.xb(2),b.ec("ngIf",t.s),b.xb(1),b.ec("ngIf",!t.s))},directives:[a.a,o.i,c.k,l.a],pipes:[c.d],styles:[""]}),e})();var U=i("0308");function R(e,t){if(1&e&&(b.Ob(0,"div",1),b.Ob(1,"div",2),b.Bc(2),b.Nb(),b.Ob(3,"div",2),b.Bc(4),b.Nb(),b.Nb()),2&e){const e=t.$implicit;b.xb(2),b.Dc(" ",e.SubjectName," "),b.xb(2),b.Dc(" ",e.TotalLecture," ")}}function V(e,t){if(1&e&&(b.Ob(0,"div",1),b.Ob(1,"div",5),b.Bc(2),b.Nb(),b.Ob(3,"div",5),b.Bc(4),b.Nb(),b.Nb()),2&e){const e=t.$implicit;b.xb(2),b.Dc(" ",e.SubjectName," "),b.xb(2),b.Dc(" ",e.TotalLecture," ")}}function $(e,t){if(1&e&&(b.Ob(0,"div",1),b.Ob(1,"div",5),b.Bc(2),b.Nb(),b.Ob(3,"div",5),b.Bc(4),b.Nb(),b.Nb()),2&e){const e=t.$implicit;b.xb(2),b.Dc(" ",e.SubjectName," "),b.xb(2),b.Dc(" ",e.TotalLecture," ")}}const Y=function(){return{margin:"20px"}};let X=(()=>{class e{constructor(e){this.attendenceService=e}ngOnInit(){this.getTotalLecture(),this.getPresentAttendence(),this.getAbsentAttendence()}getTotalLecture(){this.attendenceService.getTotalLecture(+localStorage.getItem("id")).subscribe(e=>{this.totalLecture=e},e=>console.log(e))}getPresentAttendence(){this.attendenceService.getPresentAttendence(+localStorage.getItem("id")).subscribe(e=>{this.presentLecture=e},e=>console.log(e))}getAbsentAttendence(){this.attendenceService.getAbsentAttendence(+localStorage.getItem("id")).subscribe(e=>{this.absentLecture=e},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(U.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-attendance"]],decls:30,vars:12,consts:[["header","Total Attendance"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-4","p-md-6","p-sm-6"],["class","p-fluid p-grid",4,"ngFor","ngForOf"],["header","Present Attendance"],[1,"p-col-12","p-lg-4","p-md-6"],["header","Absent Attendance"]],template:function(e,t){1&e&&(b.Jb(0,"br"),b.Ob(1,"p-card",0),b.Ob(2,"div",1),b.Ob(3,"div",2),b.Ob(4,"b"),b.Bc(5,"Subject"),b.Nb(),b.Nb(),b.Ob(6,"div",2),b.Ob(7,"b"),b.Bc(8,"Total Lecture"),b.Nb(),b.Nb(),b.Nb(),b.zc(9,R,5,2,"div",3),b.Nb(),b.Jb(10,"br"),b.Ob(11,"p-card",4),b.Ob(12,"div",1),b.Ob(13,"div",5),b.Ob(14,"b"),b.Bc(15,"Subject"),b.Nb(),b.Nb(),b.Ob(16,"div",5),b.Ob(17,"b"),b.Bc(18,"Present Lecture"),b.Nb(),b.Nb(),b.Nb(),b.zc(19,V,5,2,"div",3),b.Nb(),b.Jb(20,"br"),b.Ob(21,"p-card",6),b.Ob(22,"div",1),b.Ob(23,"div",5),b.Ob(24,"b"),b.Bc(25,"Subject"),b.Nb(),b.Nb(),b.Ob(26,"div",5),b.Ob(27,"b"),b.Bc(28,"Absent Lecture"),b.Nb(),b.Nb(),b.Nb(),b.zc(29,$,5,2,"div",3),b.Nb()),2&e&&(b.xb(1),b.xc(b.hc(9,Y)),b.xb(8),b.ec("ngForOf",t.totalLecture),b.xb(2),b.xc(b.hc(10,Y)),b.xb(8),b.ec("ngForOf",t.presentLecture),b.xb(2),b.xc(b.hc(11,Y)),b.xb(8),b.ec("ngForOf",t.absentLecture))},directives:[a.a,c.j],styles:[""]}),e})();var G=i("0UUG");function _(e,t){1&e&&(b.Ob(0,"h3",2),b.Bc(1,"loading..."),b.Nb())}const Z=function(){return{margin:"20px"}};function q(e,t){if(1&e&&(b.Ob(0,"p-card",3),b.Jb(1,"hr"),b.Ob(2,"div",4),b.Ob(3,"div",5),b.Bc(4),b.Nb(),b.Ob(5,"div",5),b.Bc(6),b.Yb(7,"date"),b.Nb(),b.Ob(8,"div",5),b.Bc(9),b.Nb(),b.Ob(10,"div",5),b.Bc(11),b.Nb(),b.Nb(),b.Nb()),2&e){const e=t.$implicit,i=t.index;b.xc(b.hc(10,Z)),b.gc("header","Fee Details ",i+1,""),b.xb(4),b.Dc(" Id : ",e.FeeId," "),b.xb(2),b.Dc(" Date : ",b.ac(7,7,e.Date,"dd/MM/yyyy")," "),b.xb(3),b.Dc(" Amount : Rs. ",e.Amount," "),b.xb(2),b.Dc(" Mode Of Payment : ",e.ModeOfPayment," ")}}let H=(()=>{class e{constructor(e){this.feeService=e}ngOnInit(){this.getFeeById()}getFeeById(){this.feeService.getFeeById(+localStorage.getItem("id")).subscribe(e=>this.feelist=e,e=>{})}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(G.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-fee"]],decls:3,vars:2,consts:[["class","p-ml-4",4,"ngIf"],[3,"header","style",4,"ngFor","ngForOf"],[1,"p-ml-4"],[3,"header"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-6","p-md-4"]],template:function(e,t){1&e&&(b.Jb(0,"br"),b.zc(1,_,2,0,"h3",0),b.zc(2,q,12,11,"p-card",1)),2&e&&(b.xb(1),b.ec("ngIf",!t.feelist),b.xb(1),b.ec("ngForOf",t.feelist))},directives:[c.k,c.j,a.a],pipes:[c.d],styles:[""]}),e})();var Q=i("tk/3"),K=i("m/l6");function W(e,t){if(1&e&&(b.Ob(0,"div",1),b.Ob(1,"div",2),b.Bc(2),b.Nb(),b.Ob(3,"div",3),b.Bc(4),b.Nb(),b.Ob(5,"div",3),b.Bc(6),b.Nb(),b.Nb()),2&e){const e=b.Xb().$implicit;b.xb(2),b.Dc(" ",e.SubjectName," "),b.xb(2),b.Dc(" ",e.MarksScored," "),b.xb(2),b.Dc(" ",e.TotalMarks," ")}}function ee(e,t){if(1&e&&(b.Ob(0,"div"),b.zc(1,W,7,3,"div",7),b.Nb()),2&e){const e=t.$implicit;b.xb(1),b.ec("ngIf","IT"==e.ExamType)}}function te(e,t){if(1&e&&(b.Ob(0,"div",1),b.Ob(1,"div",2),b.Bc(2),b.Nb(),b.Ob(3,"div",3),b.Bc(4),b.Nb(),b.Ob(5,"div",3),b.Bc(6),b.Nb(),b.Nb()),2&e){const e=b.Xb().$implicit;b.xb(2),b.Dc(" ",e.SubjectName," "),b.xb(2),b.Dc(" ",e.MarksScored," "),b.xb(2),b.Dc(" ",e.TotalMarks," ")}}function ie(e,t){if(1&e&&(b.Ob(0,"div"),b.zc(1,te,7,3,"div",7),b.Nb()),2&e){const e=t.$implicit;b.xb(1),b.ec("ngIf","ET"==e.ExamType)}}function ce(e,t){if(1&e&&(b.Ob(0,"div",1),b.Ob(1,"div",2),b.Bc(2),b.Nb(),b.Ob(3,"div",3),b.Bc(4),b.Nb(),b.Ob(5,"div",3),b.Bc(6),b.Nb(),b.Nb()),2&e){const e=b.Xb().$implicit;b.xb(2),b.Dc(" ",e.SubjectName," "),b.xb(2),b.Dc(" ",e.MarksScored," "),b.xb(2),b.Dc(" ",e.TotalMarks," ")}}function ne(e,t){if(1&e&&(b.Ob(0,"div"),b.zc(1,ce,7,3,"div",7),b.Nb()),2&e){const e=t.$implicit;b.xb(1),b.ec("ngIf","EP"==e.ExamType)}}const se=function(){return{margin:"20px"}};let be=(()=>{class e{constructor(e,t){this.resultService=e,this._router=t}ngOnInit(){this.getResult()}getResult(){this.resultService.getResultById(+localStorage.getItem("id")).subscribe(e=>this.resultlist=e,e=>{e instanceof Q.d&&401===e.status&&(localStorage.removeItem("token"),this._router.navigate(["/auth"]))})}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(K.a),b.Ib(s.b))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-result"]],decls:37,vars:12,consts:[["header","Internal Exam Result"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-4"],[1,"p-col-12","p-lg-2"],[4,"ngFor","ngForOf"],["header","External Theory Result"],["header","External Practical Result"],["class","p-fluid p-grid",4,"ngIf"]],template:function(e,t){1&e&&(b.Jb(0,"br"),b.Ob(1,"p-card",0),b.Ob(2,"div",1),b.Ob(3,"div",2),b.Ob(4,"b"),b.Bc(5,"Subject"),b.Nb(),b.Nb(),b.Ob(6,"div",3),b.Ob(7,"b"),b.Bc(8,"Marks Scored"),b.Nb(),b.Nb(),b.Ob(9,"div",3),b.Ob(10,"b"),b.Bc(11,"Total Scored"),b.Nb(),b.Nb(),b.Nb(),b.zc(12,ee,2,1,"div",4),b.Nb(),b.Ob(13,"p-card",5),b.Ob(14,"div",1),b.Ob(15,"div",2),b.Ob(16,"b"),b.Bc(17,"Subject"),b.Nb(),b.Nb(),b.Ob(18,"div",3),b.Ob(19,"b"),b.Bc(20,"Marks Scored"),b.Nb(),b.Nb(),b.Ob(21,"div",3),b.Ob(22,"b"),b.Bc(23,"Total Scored"),b.Nb(),b.Nb(),b.Nb(),b.zc(24,ie,2,1,"div",4),b.Nb(),b.Ob(25,"p-card",6),b.Ob(26,"div",1),b.Ob(27,"div",2),b.Ob(28,"b"),b.Bc(29,"Subject"),b.Nb(),b.Nb(),b.Ob(30,"div",3),b.Ob(31,"b"),b.Bc(32,"Marks Scored"),b.Nb(),b.Nb(),b.Ob(33,"div",3),b.Ob(34,"b"),b.Bc(35,"Total Scored"),b.Nb(),b.Nb(),b.Nb(),b.zc(36,ne,2,1,"div",4),b.Nb()),2&e&&(b.xb(1),b.xc(b.hc(9,se)),b.xb(11),b.ec("ngForOf",t.resultlist),b.xb(1),b.xc(b.hc(10,se)),b.xb(11),b.ec("ngForOf",t.resultlist),b.xb(1),b.xc(b.hc(11,se)),b.xb(11),b.ec("ngForOf",t.resultlist))},directives:[a.a,c.j,c.k],styles:[""]}),e})();var re=i("Dnfh");function ae(e,t){1&e&&(b.Ob(0,"h3",2),b.Bc(1,"Data no available"),b.Nb())}const oe=function(){return{margin:"20px"}};function le(e,t){if(1&e&&(b.Ob(0,"p-card",3),b.Jb(1,"hr"),b.Ob(2,"div",4),b.Ob(3,"div",5),b.Ob(4,"b"),b.Bc(5,"Date : "),b.Nb(),b.Bc(6),b.Yb(7,"date"),b.Jb(8,"br"),b.Jb(9,"br"),b.Ob(10,"b"),b.Bc(11,"Description : "),b.Nb(),b.Bc(12),b.Jb(13,"br"),b.Jb(14,"br"),b.Ob(15,"b"),b.Bc(16,"Registration Link : "),b.Nb(),b.Ob(17,"a",6),b.Bc(18),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e){const e=t.$implicit;b.xc(b.hc(10,oe)),b.fc("header",e.Title),b.xb(6),b.Dc(" ",b.ac(7,7,e.date,"dd/MM/yyyy")," "),b.xb(6),b.Dc("",e.Description," "),b.xb(5),b.fc("href",e.RegistrationLink,b.uc),b.xb(1),b.Cc(e.RegistrationLink)}}let de=(()=>{class e{constructor(e){this.placementService=e}ngOnInit(){this.getPlacementDetail()}getPlacementDetail(){this.placementService.getPlacementDetail(+localStorage.getItem("courseid"),+localStorage.getItem("semester")).subscribe(e=>this.placementlist=e,e=>{})}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(re.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-placement"]],decls:4,vars:2,consts:[["class","p-ml-4",4,"ngIf"],[3,"header","style",4,"ngFor","ngForOf"],[1,"p-ml-4"],[3,"header"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-sm-12"],["target","_blank",3,"href"]],template:function(e,t){1&e&&(b.Jb(0,"br"),b.zc(1,ae,2,0,"h3",0),b.zc(2,le,19,11,"p-card",1),b.Jb(3,"br")),2&e&&(b.xb(1),b.ec("ngIf",!t.placementlist),b.xb(1),b.ec("ngForOf",t.placementlist))},directives:[c.k,c.j,a.a],pipes:[c.d],styles:[""]}),e})();var pe=i("3Pt+"),ue=i("QKdN"),me=i("SwF3"),ge=i("z6cu"),he=i("oEQO");let fe=(()=>{class e{constructor(e){this._httpClient=e}addAttachment(e){return this._httpClient.post(`${he.a.BASE_URL}${he.a.ATTACHMENT}`,e)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(ge.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(t){return new(t||e)(b.Sb(Q.b))},e.\u0275prov=b.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var ve=i("7kUa"),Ne=i("Gxio");const Oe=function(){return{margin:"20px"}};function xe(e,t){if(1&e){const e=b.Pb();b.Ob(0,"p-card",13),b.Ob(1,"div",14),b.Ob(2,"div",15),b.Bc(3),b.Nb(),b.Ob(4,"div",15),b.Bc(5),b.Yb(6,"date"),b.Nb(),b.Ob(7,"div",15),b.Bc(8),b.Nb(),b.Ob(9,"div",15),b.Bc(10),b.Yb(11,"date"),b.Nb(),b.Ob(12,"div",15),b.Bc(13),b.Nb(),b.Ob(14,"div",15),b.Bc(15),b.Nb(),b.Jb(16,"div",15),b.Ob(17,"div",16),b.Ob(18,"p-button",17),b.Vb("click",function(){b.sc(e);const i=t.$implicit;return b.Xb().showDialog(i.AssignmentId,i.SubjectName,i.Name)}),b.Nb(),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit;b.xc(b.hc(15,Oe)),b.fc("header",e.AssignmentId+"  :  "+e.SubjectName),b.xb(3),b.Dc(" Title : ",e.Name," "),b.xb(2),b.Dc(" Date of assignment : ",b.ac(6,9,e.AssignmentDate,"dd/MM/yyyy")," "),b.xb(3),b.Dc(" Description : ",e.Description," "),b.xb(2),b.Dc(" Due Date : ",b.ac(11,12,e.DueDate,"dd/MM/yyyy")," "),b.xb(3),b.Dc(" Total Marks : ",e.TotalMarks," "),b.xb(2),b.Dc(" Given by : ",e.FacultyName," ")}}function ye(e,t){if(1&e&&(b.Ob(0,"span",18),b.Bc(1),b.Nb()),2&e){const e=b.Xb();b.xb(1),b.Ec(" ",e.progress,"% ",e.message," ")}}function De(e,t){if(1&e&&(b.Ob(0,"small",19),b.Bc(1),b.Nb()),2&e){const e=b.Xb();b.xb(1),b.Dc(" ",e.formErrors.AttachmentUrl,"")}}function Se(e,t){if(1&e&&(b.Ob(0,"p-card",13),b.Ob(1,"div",14),b.Ob(2,"div",15),b.Bc(3),b.Nb(),b.Ob(4,"div",15),b.Bc(5),b.Yb(6,"date"),b.Nb(),b.Ob(7,"div",15),b.Bc(8),b.Nb(),b.Ob(9,"div",15),b.Bc(10),b.Yb(11,"date"),b.Nb(),b.Ob(12,"div",15),b.Bc(13),b.Nb(),b.Ob(14,"div",15),b.Bc(15),b.Nb(),b.Ob(16,"div",15),b.Bc(17," Attachment : "),b.Ob(18,"a",20),b.Bc(19,"Click here to open Attachment"),b.Nb(),b.Nb(),b.Ob(20,"div",16),b.Bc(21),b.Nb(),b.Nb(),b.Nb()),2&e){const e=t.$implicit;b.xc(b.hc(17,Oe)),b.fc("header",e.AssignmentId+"  :  "+e.SubjectName+" "+(-1==e.MarksScored?" (Not Checked)":" (Checked)")),b.xb(3),b.Dc(" Title : ",e.Name," "),b.xb(2),b.Dc(" Date of assignment : ",b.ac(6,11,e.AssignmentDate,"dd/MM/yyyy")," "),b.xb(3),b.Dc(" Description : ",e.Description," "),b.xb(2),b.Dc(" Due Date : ",b.ac(11,14,e.DueDate,"dd/MM/yyyy")," "),b.xb(3),b.Dc(" Total Marks : ",e.TotalMarks," "),b.xb(2),b.Dc(" Given by : ",e.FacultyName," "),b.xb(3),b.fc("href","https://mycampusapp.azurewebsites.net/"+e.AttachmentUrl,b.uc),b.xb(3),b.Dc(" MarksScored : ",-1==e.MarksScored?"":e.MarksScored," ")}}const Be=function(){return{width:"50vw"}},ke=function(e){return{"ng-invalid ng-dirty":e}},Ie=[{path:"",component:z,children:[{path:"dashboard",component:x},{path:"info",component:L},{path:"attendance",component:X},{path:"assignment",component:(()=>{class e{constructor(e,t,i,c,n,s){this.assignmentService=e,this.http=t,this.fb=i,this.messageService=c,this._router=n,this.attachmentService=s,this.display=!1,this.validationMessages={AttachmentUrl:{required:"Attachment Url is required"}},this.formErrors={AttachmentUrl:""},this.uploadFile=e=>{if(0===e.length)return;let t=e[0];const i=new FormData;i.append("file",t,t.name),this.http.post("https://mycampusapp.azurewebsites.net/api/upload",i,{reportProgress:!0,observe:"events"}).subscribe(e=>{e.type===Q.e.UploadProgress?this.progress=Math.round(100*e.loaded/e.total):e.type===Q.e.Response&&(this.message="Upload successfully.",this.path=e.body,this.aForm.patchValue({AttachmentUrl:e.body}))})}}ngOnInit(){this.getPendingAssignment(),this.getSubmittedAssignment(),this.aForm=this.fb.group({AttachmentUrl:["",pe.n.required]}),this.aForm.valueChanges.subscribe(e=>{this.logValidationErrors(this.aForm)}),this.attachment={AttachmentId:0,UploadDate:null,AttachmentUrl:null,MarksScored:-1,StudentId:0,AssignmentId:0}}showDialog(e,t,i){this.display=!0,this.assignmentId=e,this.subjectName=t,this.title=i}getPendingAssignment(){this.assignmentService.getPendingAssignment(+localStorage.getItem("courseid"),+localStorage.getItem("semester"),+localStorage.getItem("id")).subscribe(e=>{this.assignmentlist=e},e=>console.log(e))}getSubmittedAssignment(){this.assignmentService.getSubmittedAssignment(+localStorage.getItem("courseid"),+localStorage.getItem("semester"),+localStorage.getItem("id")).subscribe(e=>{this.submittedlist=e},e=>console.log(e))}onSubmit(){this.mapFormValueToCourseModel(),this.attachmentService.addAttachment(this.attachment).subscribe(e=>{this.showSuccess("Assignment submitted successfully")},e=>{this.showError("Error while submitting assignment")})}mapFormValueToCourseModel(){this.attachment.AssignmentId=0,this.attachment.UploadDate=Object(ue.a)(new Date),this.attachment.AttachmentUrl=this.aForm.value.AttachmentUrl,this.attachment.MarksScored=-1,this.attachment.StudentId=+localStorage.getItem("id"),this.attachment.AssignmentId=this.assignmentId,console.log(this.attachment)}logValidationErrors(e=this.aForm){Object.keys(e.controls).forEach(t=>{const i=e.get(t);if(i instanceof pe.d)this.logValidationErrors(i);else if(this.formErrors[t]="",i&&!i.valid&&(i.touched||i.dirty)){const e=this.validationMessages[t];for(const c in i.errors)c&&(this.formErrors[t]+=e[c]+" ")}})}showSuccess(e){this.messageService.add({severity:"success",summary:"Success",detail:e}),this.display=!1,this.getPendingAssignment(),this.getSubmittedAssignment()}showError(e){this.messageService.add({severity:"error",summary:"Error",detail:e})}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(me.a),b.Ib(Q.b),b.Ib(pe.b),b.Ib(o.g),b.Ib(s.b),b.Ib(fe))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-assignment"]],decls:23,vars:17,consts:[[1,"p-ml-4"],[3,"header","style",4,"ngFor","ngForOf"],[3,"header","visible","baseZIndex","visibleChange"],[1,"p-mt-3"],["type","file","placeholder","Choose file",2,"display","none",3,"change"],["file",""],["type","button","styleClass","p-button p-button-success","label","Browse File","icon","pi pi-upload",3,"click"],["class","upload",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"p-field"],["id","AttachmentUrl","type","text","aria-describedby","AttachmentUrl-help","size","100","autocomplete","off","pInputText","","formControlName","AttachmentUrl","readonly","",1,"p-inputtext-sm",3,"ngClass","value","blur"],["id","AttachmentUrl-help","class","p-error",4,"ngIf"],["pButton","","type","submit","label","Submit","icon","pi pi-check-circle","pRipple","",1,"p-button","p-mr-4",3,"disabled"],[3,"header"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-6","p-md-6","p-sm-6"],[1,"p-col-12","p-lg-2","p-md-2","p-sm-6"],["type","button","icon","pi pi-save","styleClass","p-button-warning","label","Submit",3,"click"],[1,"upload"],["id","AttachmentUrl-help",1,"p-error"],["target","_blank",3,"href"]],template:function(e,t){if(1&e){const e=b.Pb();b.Jb(0,"br"),b.Ob(1,"h2",0),b.Bc(2,"Pending Assignment"),b.Nb(),b.zc(3,xe,19,16,"p-card",1),b.Ob(4,"p-dialog",2),b.Vb("visibleChange",function(e){return t.display=e}),b.Ob(5,"b"),b.Bc(6),b.Nb(),b.Ob(7,"div",3),b.Ob(8,"input",4,5),b.Vb("change",function(){b.sc(e);const i=b.rc(9);return t.uploadFile(i.files)}),b.Nb(),b.Ob(10,"p-button",6),b.Vb("click",function(){return b.sc(e),b.rc(9).click()}),b.Nb(),b.zc(11,ye,2,2,"span",7),b.Nb(),b.Jb(12,"br"),b.Ob(13,"Form",8),b.Vb("ngSubmit",function(){return t.onSubmit()}),b.Ob(14,"div",9),b.Ob(15,"input",10),b.Vb("blur",function(){return t.logValidationErrors()}),b.Nb(),b.zc(16,De,2,1,"small",11),b.Nb(),b.Jb(17,"button",12),b.Nb(),b.Nb(),b.Jb(18,"br"),b.Ob(19,"h2",0),b.Bc(20,"Submitted Assignment"),b.Nb(),b.zc(21,Se,22,18,"p-card",1),b.Jb(22,"p-toast")}2&e&&(b.xb(3),b.ec("ngForOf",t.assignmentlist),b.xb(1),b.xc(b.hc(14,Be)),b.fc("header",t.assignmentId+"  :  "+t.subjectName),b.ec("visible",t.display)("baseZIndex",1e4),b.xb(2),b.Dc("Title : ",t.title,""),b.xb(5),b.ec("ngIf",t.progress>0),b.xb(2),b.ec("formGroup",t.aForm),b.xb(2),b.fc("value",t.path),b.ec("ngClass",b.ic(15,ke,t.formErrors.AttachmentUrl)),b.xb(1),b.ec("ngIf",t.formErrors.AttachmentUrl),b.xb(1),b.ec("disabled",t.aForm.invalid),b.xb(4),b.ec("ngForOf",t.submittedlist))},directives:[c.j,B.a,I.a,c.k,pe.j,pe.e,pe.a,ve.a,pe.i,pe.c,c.i,I.b,A.a,Ne.a,a.a],pipes:[c.d],styles:[".upload[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#66c52f;margin-left:15px}"]}),e})()},{path:"result",component:be},{path:"fee",component:H},{path:"placement",component:de}]}];let Ae=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(t){return new(t||e)},imports:[[s.e.forChild(Ie)],s.e]}),e})();var Je=i("eksp"),Me=i("X2Lf");let we=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(t){return new(t||e)},providers:[Me.a,o.g,o.a,{provide:Q.a,useClass:Je.a,multi:!0}],imports:[[c.b,Ae,n.a]]}),e})()}}]);