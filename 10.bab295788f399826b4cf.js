(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"e/zx":function(e,t,i){"use strict";i.r(t),i.d(t,"StudentModule",function(){return We});var n=i("ofXK"),r=i("4TcP"),s=i("tyNb"),c=i("fXoL"),o=i("WP+7"),a=i("QIUk"),b=i("7zfz"),l=i("jeV5");function d(e,t){1&e&&c.Jb(0,"img",12)}function p(e,t){1&e&&(c.Ob(0,"div",13),c.Jb(1,"p-skeleton",14),c.Ob(2,"div"),c.Jb(3,"p-skeleton",15),c.Jb(4,"p-skeleton",16),c.Jb(5,"p-skeleton",17),c.Nb(),c.Nb())}function u(e,t){1&e&&c.Jb(0,"img",18)}function g(e,t){if(1&e&&(c.Ob(0,"div"),c.Bc(1),c.Nb()),2&e){const e=c.Xb();c.xb(1),c.Cc(e.attendance+"%")}}function m(e,t){1&e&&(c.Ob(0,"div",13),c.Jb(1,"p-skeleton",14),c.Ob(2,"div"),c.Jb(3,"p-skeleton",15),c.Jb(4,"p-skeleton",16),c.Jb(5,"p-skeleton",17),c.Nb(),c.Nb())}function h(e,t){1&e&&c.Jb(0,"img",19)}function f(e,t){if(1&e&&(c.Ob(0,"div"),c.Bc(1),c.Nb()),2&e){const e=c.Xb();c.xb(1),c.Cc(e.pendingassignment)}}function v(e,t){1&e&&(c.Ob(0,"div",13),c.Jb(1,"p-skeleton",14),c.Ob(2,"div"),c.Jb(3,"p-skeleton",15),c.Jb(4,"p-skeleton",16),c.Jb(5,"p-skeleton",17),c.Nb(),c.Nb())}const N=function(){return{margin:"15px",padding:"20px"}},O=function(){return{margin:"10px","margin-left":"20px"}},x=function(){return{width:"25rem"}},y=function(){return{margin:"10px"}};let I=(()=>{class e{constructor(e){this.studentService=e,this.sid=+localStorage.getItem("id"),this.cid=+localStorage.getItem("courseid"),this.sem=+localStorage.getItem("semester")}ngOnInit(){this.getAttendancePercent(),this.getPendingAssignmentNumber(),this.getCourseName()}getAttendancePercent(){this.studentService.getAttendancePercent(this.sid).subscribe(e=>{this.attendance=e},e=>console.log(e))}getPendingAssignmentNumber(){this.studentService.getPendingAssignmentNumber(this.cid,this.sem,this.sid).subscribe(e=>{this.pendingassignment=e},e=>console.log(e))}getCourseName(){this.studentService.getCourseName(this.sid).subscribe(e=>{this.coursename=e},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-dashboard"]],decls:22,vars:27,consts:[[1,"p-fluid","p-grid","p-mx-auto"],[1,"p-shadow-15"],["header","My Course"],["pTemplate","header"],[1,"card-body"],["class","p-d-flex p-mb-3",4,"ngIf"],[1,"pi","pi-book",2,"font-size","2rem","display","block","margin-top","20px","color","rgb(197, 46, 46)"],["header","Attendance"],[4,"ngIf"],[1,"pi","pi-calendar-plus",2,"font-size","2rem","display","block","margin-top","20px","color","rgb(60, 140, 151)"],["header","Pending Assignment"],[1,"pi","pi-inbox",2,"font-size","2rem","display","block","margin-top","20px","color","rgb(60, 151, 60)"],["alt","Card","src","assets/10.jpg"],[1,"p-d-flex","p-mb-3"],["shape","circle","size","5rem","styleClass","p-mr-2"],["width","10rem","styleClass","p-mb-2"],["width","5rem","styleClass","p-mb-2"],["height",".5rem"],["alt","Card","src","assets/3.jpg"],["alt","Card","src","assets/11.jpg"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"p-card",2),c.zc(3,d,1,0,"ng-template",3),c.Ob(4,"div",4),c.Bc(5),c.zc(6,p,6,0,"div",5),c.Jb(7,"div",6),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"div",1),c.Ob(9,"p-card",7),c.zc(10,u,1,0,"ng-template",3),c.Ob(11,"div",4),c.zc(12,g,2,1,"div",8),c.zc(13,m,6,0,"div",5),c.Jb(14,"div",9),c.Nb(),c.Nb(),c.Nb(),c.Ob(15,"div",1),c.Ob(16,"p-card",10),c.zc(17,h,1,0,"ng-template",3),c.Ob(18,"div",4),c.zc(19,f,2,1,"div",8),c.zc(20,v,6,0,"div",5),c.Jb(21,"div",11),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e&&(c.xc(c.gc(20,N)),c.xb(1),c.xc(c.gc(21,O)),c.xb(1),c.xc(c.gc(22,x)),c.xb(3),c.Dc(" ",t.coursename," "),c.xb(1),c.dc("ngIf",!t.coursename),c.xb(2),c.xc(c.gc(23,y)),c.xb(1),c.xc(c.gc(24,x)),c.xb(3),c.dc("ngIf",t.attendance),c.xb(1),c.dc("ngIf",!t.attendance),c.xb(2),c.xc(c.gc(25,y)),c.xb(1),c.xc(c.gc(26,x)),c.xb(3),c.dc("ngIf",t.pendingassignment),c.xb(1),c.dc("ngIf",!t.pendingassignment))},directives:[a.a,b.i,n.k,l.a],styles:[".card-body[_ngcontent-%COMP%]{height:180px;font-size:70px;font-weight:700;text-align:center;display:block;margin-left:auto;margin-right:auto;padding:30px;font-family:Montserrat}"]}),e})();var w=i("Ug1E"),k=i("Dxrl"),S=i("b1Ni"),D=i("/RsI"),B=i("fqaE"),C=i("xlun"),A=i("jIHw"),M=i("Q4Mo"),F=i("+F6F");function J(e,t){1&e&&c.Jb(0,"img",5)}function z(e,t){if(1&e){const e=c.Pb();c.Ob(0,"i",6),c.Vb("click",function(){return c.rc(e),c.Xb().showNotification()}),c.Nb(),c.Ob(1,"button",7),c.Vb("click",function(){return c.rc(e),c.Xb().logout()}),c.Nb(),c.Jb(2,"p-avatar",8)}if(2&e){const e=c.Xb();c.xb(2),c.ec("pTooltip","Hi, "+e.username)}}function P(e,t){if(1&e&&(c.Ob(0,"div",9),c.Jb(1,"p-avatar",10),c.Ob(2,"span",11),c.Bc(3),c.Jb(4,"br"),c.Ob(5,"span",12),c.Bc(6),c.Yb(7,"date"),c.Nb(),c.Ob(8,"span",13),c.Bc(9),c.Nb(),c.Nb(),c.Jb(10,"hr",14),c.Nb()),2&e){const e=t.$implicit;c.xb(3),c.Dc(" ",e.Description," "),c.xb(3),c.Cc(c.Zb(7,3,e.Date,"MMM d, y")),c.xb(3),c.Dc(" ",e.FacultyName,"")}}const U=function(){return{width:"\n    80vw"}};let T=(()=>{class e{constructor(e,t,i){this.auth=e,this.notificationService=t,this.router=i,this.display=!1}ngOnInit(){this.items=[{label:"Dashboard",icon:"pi pi-fw pi-chart-bar",routerLink:["dashboard"]},{label:"Profile",icon:"pi pi-fw pi-users",routerLink:["info"]},{label:"Attendance",icon:"pi pi-fw pi-calendar",routerLink:["attendance"]},{label:"Assignment",icon:"pi pi-fw pi-file",routerLink:["assignment"]},{label:"Result",icon:"pi pi-fw pi-id-card",routerLink:["result"]},{label:"Fee",icon:"pi pi-fw pi-money-bill",routerLink:["fee"]},{label:"Placement",icon:"pi pi-fw pi-briefcase",routerLink:["placement"]}],this.username=localStorage.getItem("username"),this.setUsername()}logout(){this.auth.logoutUser()}showNotification(){this.notificationService.getNotification(+localStorage.getItem("courseid"),+localStorage.getItem("semester")).subscribe(e=>this.notificationlist=e,e=>{}),this.display=!0}setUsername(){setTimeout(()=>this.username=localStorage.getItem("username"),2500)}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(w.a),c.Ib(k.a),c.Ib(s.b))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-home"]],decls:6,vars:10,consts:[[3,"model"],["pTemplate","start"],["pTemplate","end"],["header","Notification Center",3,"visible","baseZIndex","draggable","resizable","maximizable","visibleChange"],["style","font-size: 15px; vertical-align: middle; ",4,"ngFor","ngForOf"],["src","assets/android-chrome-96x96.png","height","40",1,"p-mr-2"],["pBadge","","pTooltip","Show Notification","tooltipPosition","bottom",1,"pi","pi-bell","p-mr-4","p-text-secondary",2,"font-size","20px",3,"click"],["pButton","","type","button","label","Logout","icon","pi pi-sign-out","pRipple","",1,"p-button-text","p-button-help",3,"click"],["label","S","shape","circle","icon","p-avatar-icon","tooltipPosition","left",1,"p-ml-2",3,"pTooltip"],[2,"font-size","15px","vertical-align","middle"],["label","F","shape","circle","icon","p-avatar-icon",1,"p-ml-2"],[2,"margin-left","10px"],[2,"color","grey","margin-left","55px","font-size","13px"],[2,"color","grey","margin-left","20px","font-size","13px"],[2,"color","rgb(223, 223, 223)"]],template:function(e,t){1&e&&(c.Ob(0,"p-menubar",0),c.zc(1,J,1,0,"ng-template",1),c.zc(2,z,3,1,"ng-template",2),c.Nb(),c.Jb(3,"router-outlet"),c.Ob(4,"p-dialog",3),c.Vb("visibleChange",function(e){return t.display=e}),c.zc(5,P,11,6,"div",4),c.Nb()),2&e&&(c.dc("model",t.items),c.xb(4),c.xc(c.gc(9,U)),c.dc("visible",t.display)("baseZIndex",1e4)("draggable",!1)("resizable",!1)("maximizable",!0),c.xb(1),c.dc("ngForOf",t.notificationlist))},directives:[S.a,b.i,s.f,D.a,n.j,B.a,C.a,A.b,M.a,F.a],pipes:[n.d],styles:[".container[_ngcontent-%COMP%]{background-image:url(2.f2fe646c401ec6f46147.jpg)}"]}),e})();function V(e,t){1&e&&c.Jb(0,"img",4)}function L(e,t){if(1&e&&(c.Ob(0,"div",5),c.Ob(1,"div",6),c.Bc(2),c.Nb(),c.Ob(3,"div",6),c.Bc(4),c.Nb(),c.Ob(5,"div",6),c.Bc(6),c.Nb(),c.Ob(7,"div",6),c.Bc(8),c.Nb(),c.Ob(9,"div",6),c.Bc(10),c.Nb(),c.Ob(11,"div",6),c.Bc(12),c.Nb(),c.Ob(13,"div",6),c.Bc(14),c.Yb(15,"date"),c.Nb(),c.Ob(16,"div",6),c.Bc(17),c.Nb(),c.Ob(18,"div",6),c.Bc(19),c.Nb(),c.Ob(20,"div",6),c.Bc(21),c.Nb(),c.Ob(22,"div",6),c.Bc(23),c.Nb(),c.Ob(24,"div",6),c.Bc(25),c.Nb(),c.Ob(26,"div",6),c.Bc(27),c.Nb(),c.Ob(28,"div",6),c.Bc(29),c.Nb(),c.Ob(30,"div",6),c.Bc(31),c.Nb(),c.Ob(32,"div",6),c.Bc(33),c.Nb(),c.Ob(34,"div",6),c.Bc(35),c.Yb(36,"date"),c.Nb(),c.Ob(37,"div",6),c.Bc(38),c.Nb(),c.Ob(39,"div",6),c.Bc(40),c.Nb(),c.Ob(41,"div",6),c.Bc(42),c.Nb(),c.Nb()),2&e){const e=c.Xb();c.xb(2),c.Dc(" Name : ",e.s.Name," "),c.xb(2),c.Dc(" Admission Year : ",e.s.AdmissionYear," "),c.xb(2),c.Dc(" Branch : ",e.s.Branch," "),c.xb(2),c.Dc(" Current Semester : ",e.s.CurrentSemester," "),c.xb(2),c.Dc(" Division : ",e.s.Division," "),c.xb(2),c.Dc(" RollNo : ",e.s.RollNo," "),c.xb(2),c.Dc(" Date Of Birth : ",c.Zb(15,20,e.s.DateOfBirth,"dd/MM/yyyy")," "),c.xb(3),c.Dc(" Gender : ","M"===e.s.Gender?"Male":"F"===e.s.Gender?"Female":"Other"," "),c.xb(2),c.Dc(" Residential Address : ",e.s.ResidentialAddress," "),c.xb(2),c.Dc(" Native Address : ",e.s.NativeAddress," "),c.xb(2),c.Dc(" Mobile No 1 : ",e.s.MobileNo1," "),c.xb(2),c.Dc(" Mobile No 2 : ",e.s.MobileNo2," "),c.xb(2),c.Dc(" Email : ",e.s.Email," "),c.xb(2),c.Dc(" Nationality : ",e.s.Nationality," "),c.xb(2),c.Dc(" MotherTongue : ",e.s.MotherTongue," "),c.xb(2),c.Dc(" Discipline : ",e.s.Discipline," "),c.xb(2),c.Dc(" Joining Date : ",c.Zb(36,23,e.s.JoiningDate,"dd/MM/yyyy")," "),c.xb(3),c.Dc(" Physically Handicapped : ","Y"===e.s.PhysicallyHandicapped?"Yes":"No"," "),c.xb(2),c.Dc(" MentorName : ",e.s.MentorName," "),c.xb(2),c.Dc(" CourseId : ",e.s.CourseId," ")}}function j(e,t){1&e&&(c.Ob(0,"div",5),c.Ob(1,"div",6),c.Jb(2,"p-skeleton",7),c.Nb(),c.Ob(3,"div",6),c.Jb(4,"p-skeleton",7),c.Nb(),c.Ob(5,"div",6),c.Jb(6,"p-skeleton",7),c.Nb(),c.Ob(7,"div",6),c.Jb(8,"p-skeleton",7),c.Nb(),c.Ob(9,"div",6),c.Jb(10,"p-skeleton",7),c.Nb(),c.Ob(11,"div",6),c.Jb(12,"p-skeleton",7),c.Nb(),c.Ob(13,"div",6),c.Jb(14,"p-skeleton",7),c.Nb(),c.Ob(15,"div",6),c.Jb(16,"p-skeleton",7),c.Nb(),c.Ob(17,"div",6),c.Jb(18,"p-skeleton",7),c.Nb(),c.Ob(19,"div",6),c.Jb(20,"p-skeleton",7),c.Nb(),c.Ob(21,"div",6),c.Jb(22,"p-skeleton",7),c.Nb(),c.Ob(23,"div",6),c.Jb(24,"p-skeleton",7),c.Nb(),c.Ob(25,"div",6),c.Jb(26,"p-skeleton",7),c.Nb(),c.Ob(27,"div",6),c.Jb(28,"p-skeleton",7),c.Nb(),c.Ob(29,"div",6),c.Jb(30,"p-skeleton",7),c.Nb(),c.Ob(31,"div",6),c.Jb(32,"p-skeleton",7),c.Nb(),c.Ob(33,"div",6),c.Jb(34,"p-skeleton",7),c.Nb(),c.Ob(35,"div",6),c.Jb(36,"p-skeleton",7),c.Nb(),c.Ob(37,"div",6),c.Jb(38,"p-skeleton",7),c.Nb(),c.Ob(39,"div",6),c.Jb(40,"p-skeleton",7),c.Nb(),c.Ob(41,"div",6),c.Jb(42,"p-skeleton",7),c.Nb(),c.Nb())}const E=function(){return{margin:"5spx"}};let $=(()=>{class e{constructor(e){this.studentService=e}ngOnInit(){this.getStudentById()}getStudentById(){this.studentService.getStudentById(+localStorage.getItem("id")).subscribe(e=>{this.s=e},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-details"]],decls:5,vars:5,consts:[[1,"demo-container","p-p-4"],["header","Student Profile",1,"p-d-block","p-mx-auto"],["pTemplate","header"],["class","p-fluid p-grid",4,"ngIf"],["alt","Card","src","assets/6.jpg"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-4","p-md-6"],["styleClass","p-mb-2"]],template:function(e,t){1&e&&(c.Ob(0,"div",0),c.Ob(1,"p-card",1),c.zc(2,V,1,0,"ng-template",2),c.zc(3,L,43,26,"div",3),c.zc(4,j,43,0,"div",3),c.Nb(),c.Nb()),2&e&&(c.xb(1),c.xc(c.gc(4,E)),c.xb(2),c.dc("ngIf",t.s),c.xb(1),c.dc("ngIf",!t.s))},directives:[a.a,b.i,n.k,l.a],pipes:[n.d],styles:[""]}),e})();var R=i("0308");function X(e,t){if(1&e&&(c.Ob(0,"div",1),c.Ob(1,"div",2),c.Bc(2),c.Nb(),c.Ob(3,"div",2),c.Bc(4),c.Nb(),c.Nb()),2&e){const e=t.$implicit;c.xb(2),c.Dc(" ",e.SubjectName," "),c.xb(2),c.Dc(" ",e.TotalLecture," ")}}function Z(e,t){if(1&e&&(c.Ob(0,"div",1),c.Ob(1,"div",5),c.Bc(2),c.Nb(),c.Ob(3,"div",5),c.Bc(4),c.Nb(),c.Nb()),2&e){const e=t.$implicit;c.xb(2),c.Dc(" ",e.SubjectName," "),c.xb(2),c.Dc(" ",e.TotalLecture," ")}}function _(e,t){if(1&e&&(c.Ob(0,"div",1),c.Ob(1,"div",5),c.Bc(2),c.Nb(),c.Ob(3,"div",5),c.Bc(4),c.Nb(),c.Nb()),2&e){const e=t.$implicit;c.xb(2),c.Dc(" ",e.SubjectName," "),c.xb(2),c.Dc(" ",e.TotalLecture," ")}}const H=function(){return{margin:"20px"}};let Y=(()=>{class e{constructor(e){this.attendenceService=e}ngOnInit(){this.getTotalLecture(),this.getPresentAttendence(),this.getAbsentAttendence()}getTotalLecture(){this.attendenceService.getTotalLecture(+localStorage.getItem("id")).subscribe(e=>{this.totalLecture=e},e=>console.log(e))}getPresentAttendence(){this.attendenceService.getPresentAttendence(+localStorage.getItem("id")).subscribe(e=>{this.presentLecture=e},e=>console.log(e))}getAbsentAttendence(){this.attendenceService.getAbsentAttendence(+localStorage.getItem("id")).subscribe(e=>{this.absentLecture=e},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(R.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-attendance"]],decls:30,vars:12,consts:[["header","Total Attendance"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-4","p-md-6","p-sm-6"],["class","p-fluid p-grid",4,"ngFor","ngForOf"],["header","Present Attendance"],[1,"p-col-12","p-lg-4","p-md-6"],["header","Absent Attendance"]],template:function(e,t){1&e&&(c.Jb(0,"br"),c.Ob(1,"p-card",0),c.Ob(2,"div",1),c.Ob(3,"div",2),c.Ob(4,"b"),c.Bc(5,"Subject"),c.Nb(),c.Nb(),c.Ob(6,"div",2),c.Ob(7,"b"),c.Bc(8,"Total Lecture"),c.Nb(),c.Nb(),c.Nb(),c.zc(9,X,5,2,"div",3),c.Nb(),c.Jb(10,"br"),c.Ob(11,"p-card",4),c.Ob(12,"div",1),c.Ob(13,"div",5),c.Ob(14,"b"),c.Bc(15,"Subject"),c.Nb(),c.Nb(),c.Ob(16,"div",5),c.Ob(17,"b"),c.Bc(18,"Present Lecture"),c.Nb(),c.Nb(),c.Nb(),c.zc(19,Z,5,2,"div",3),c.Nb(),c.Jb(20,"br"),c.Ob(21,"p-card",6),c.Ob(22,"div",1),c.Ob(23,"div",5),c.Ob(24,"b"),c.Bc(25,"Subject"),c.Nb(),c.Nb(),c.Ob(26,"div",5),c.Ob(27,"b"),c.Bc(28,"Absent Lecture"),c.Nb(),c.Nb(),c.Nb(),c.zc(29,_,5,2,"div",3),c.Nb()),2&e&&(c.xb(1),c.xc(c.gc(9,H)),c.xb(8),c.dc("ngForOf",t.totalLecture),c.xb(2),c.xc(c.gc(10,H)),c.xb(8),c.dc("ngForOf",t.presentLecture),c.xb(2),c.xc(c.gc(11,H)),c.xb(8),c.dc("ngForOf",t.absentLecture))},directives:[a.a,n.j],styles:[""]}),e})();var G=i("0UUG");function q(e,t){1&e&&(c.Ob(0,"h3",2),c.Bc(1,"loading..."),c.Nb())}const W=function(){return{margin:"20px"}};function Q(e,t){if(1&e&&(c.Ob(0,"p-card",3),c.Jb(1,"hr"),c.Ob(2,"div",4),c.Ob(3,"div",5),c.Bc(4),c.Nb(),c.Ob(5,"div",5),c.Bc(6),c.Yb(7,"date"),c.Nb(),c.Ob(8,"div",5),c.Bc(9),c.Nb(),c.Ob(10,"div",5),c.Bc(11),c.Nb(),c.Nb(),c.Nb()),2&e){const e=t.$implicit,i=t.index;c.xc(c.gc(10,W)),c.fc("header","Fee Details ",i+1,""),c.xb(4),c.Dc(" Id : ",e.FeeId," "),c.xb(2),c.Dc(" Date : ",c.Zb(7,7,e.Date,"dd/MM/yyyy")," "),c.xb(3),c.Dc(" Amount : Rs. ",e.Amount," "),c.xb(2),c.Dc(" Mode Of Payment : ",e.ModeOfPayment," ")}}let K=(()=>{class e{constructor(e){this.feeService=e}ngOnInit(){this.getFeeById()}getFeeById(){this.feeService.getFeeById(+localStorage.getItem("id")).subscribe(e=>this.feelist=e,e=>{})}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(G.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-fee"]],decls:3,vars:2,consts:[["class","p-ml-4",4,"ngIf"],[3,"header","style",4,"ngFor","ngForOf"],[1,"p-ml-4"],[3,"header"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-6","p-md-4"]],template:function(e,t){1&e&&(c.Jb(0,"br"),c.zc(1,q,2,0,"h3",0),c.zc(2,Q,12,11,"p-card",1)),2&e&&(c.xb(1),c.dc("ngIf",!t.feelist),c.xb(1),c.dc("ngForOf",t.feelist))},directives:[n.k,n.j,a.a],pipes:[n.d],styles:[""]}),e})();var ee=i("tk/3"),te=i("m/l6");function ie(e,t){if(1&e&&(c.Ob(0,"div",1),c.Ob(1,"div",2),c.Bc(2),c.Nb(),c.Ob(3,"div",3),c.Bc(4),c.Nb(),c.Ob(5,"div",3),c.Bc(6),c.Nb(),c.Nb()),2&e){const e=c.Xb().$implicit;c.xb(2),c.Dc(" ",e.SubjectName," "),c.xb(2),c.Dc(" ",e.MarksScored," "),c.xb(2),c.Dc(" ",e.TotalMarks," ")}}function ne(e,t){if(1&e&&(c.Ob(0,"div"),c.zc(1,ie,7,3,"div",7),c.Nb()),2&e){const e=t.$implicit;c.xb(1),c.dc("ngIf","IT"==e.ExamType)}}function re(e,t){if(1&e&&(c.Ob(0,"div",1),c.Ob(1,"div",2),c.Bc(2),c.Nb(),c.Ob(3,"div",3),c.Bc(4),c.Nb(),c.Ob(5,"div",3),c.Bc(6),c.Nb(),c.Nb()),2&e){const e=c.Xb().$implicit;c.xb(2),c.Dc(" ",e.SubjectName," "),c.xb(2),c.Dc(" ",e.MarksScored," "),c.xb(2),c.Dc(" ",e.TotalMarks," ")}}function se(e,t){if(1&e&&(c.Ob(0,"div"),c.zc(1,re,7,3,"div",7),c.Nb()),2&e){const e=t.$implicit;c.xb(1),c.dc("ngIf","ET"==e.ExamType)}}function ce(e,t){if(1&e&&(c.Ob(0,"div",1),c.Ob(1,"div",2),c.Bc(2),c.Nb(),c.Ob(3,"div",3),c.Bc(4),c.Nb(),c.Ob(5,"div",3),c.Bc(6),c.Nb(),c.Nb()),2&e){const e=c.Xb().$implicit;c.xb(2),c.Dc(" ",e.SubjectName," "),c.xb(2),c.Dc(" ",e.MarksScored," "),c.xb(2),c.Dc(" ",e.TotalMarks," ")}}function oe(e,t){if(1&e&&(c.Ob(0,"div"),c.zc(1,ce,7,3,"div",7),c.Nb()),2&e){const e=t.$implicit;c.xb(1),c.dc("ngIf","EP"==e.ExamType)}}const ae=function(){return{margin:"20px"}};let be=(()=>{class e{constructor(e,t){this.resultService=e,this._router=t}ngOnInit(){this.getResult()}getResult(){this.resultService.getResultById(+localStorage.getItem("id")).subscribe(e=>this.resultlist=e,e=>{e instanceof ee.d&&401===e.status&&(localStorage.removeItem("token"),this._router.navigate(["/auth"]))})}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(te.a),c.Ib(s.b))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-result"]],decls:37,vars:12,consts:[["header","Internal Exam Result"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-4"],[1,"p-col-12","p-lg-2"],[4,"ngFor","ngForOf"],["header","External Theory Result"],["header","External Practical Result"],["class","p-fluid p-grid",4,"ngIf"]],template:function(e,t){1&e&&(c.Jb(0,"br"),c.Ob(1,"p-card",0),c.Ob(2,"div",1),c.Ob(3,"div",2),c.Ob(4,"b"),c.Bc(5,"Subject"),c.Nb(),c.Nb(),c.Ob(6,"div",3),c.Ob(7,"b"),c.Bc(8,"Marks Scored"),c.Nb(),c.Nb(),c.Ob(9,"div",3),c.Ob(10,"b"),c.Bc(11,"Total Scored"),c.Nb(),c.Nb(),c.Nb(),c.zc(12,ne,2,1,"div",4),c.Nb(),c.Ob(13,"p-card",5),c.Ob(14,"div",1),c.Ob(15,"div",2),c.Ob(16,"b"),c.Bc(17,"Subject"),c.Nb(),c.Nb(),c.Ob(18,"div",3),c.Ob(19,"b"),c.Bc(20,"Marks Scored"),c.Nb(),c.Nb(),c.Ob(21,"div",3),c.Ob(22,"b"),c.Bc(23,"Total Scored"),c.Nb(),c.Nb(),c.Nb(),c.zc(24,se,2,1,"div",4),c.Nb(),c.Ob(25,"p-card",6),c.Ob(26,"div",1),c.Ob(27,"div",2),c.Ob(28,"b"),c.Bc(29,"Subject"),c.Nb(),c.Nb(),c.Ob(30,"div",3),c.Ob(31,"b"),c.Bc(32,"Marks Scored"),c.Nb(),c.Nb(),c.Ob(33,"div",3),c.Ob(34,"b"),c.Bc(35,"Total Scored"),c.Nb(),c.Nb(),c.Nb(),c.zc(36,oe,2,1,"div",4),c.Nb()),2&e&&(c.xb(1),c.xc(c.gc(9,ae)),c.xb(11),c.dc("ngForOf",t.resultlist),c.xb(1),c.xc(c.gc(10,ae)),c.xb(11),c.dc("ngForOf",t.resultlist),c.xb(1),c.xc(c.gc(11,ae)),c.xb(11),c.dc("ngForOf",t.resultlist))},directives:[a.a,n.j,n.k],styles:[""]}),e})();var le=i("Dnfh");function de(e,t){1&e&&(c.Ob(0,"h3",2),c.Bc(1,"Data no available"),c.Nb())}const pe=function(){return{margin:"20px"}};function ue(e,t){if(1&e&&(c.Ob(0,"p-card",3),c.Jb(1,"hr"),c.Ob(2,"div",4),c.Ob(3,"div",5),c.Ob(4,"b"),c.Bc(5,"Date : "),c.Nb(),c.Bc(6),c.Yb(7,"date"),c.Jb(8,"br"),c.Jb(9,"br"),c.Ob(10,"b"),c.Bc(11,"Description : "),c.Nb(),c.Bc(12),c.Jb(13,"br"),c.Jb(14,"br"),c.Ob(15,"b"),c.Bc(16,"Registration Link : "),c.Nb(),c.Ob(17,"a",6),c.Bc(18),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e){const e=t.$implicit;c.xc(c.gc(10,pe)),c.ec("header",e.Title),c.xb(6),c.Dc(" ",c.Zb(7,7,e.date,"dd/MM/yyyy")," "),c.xb(6),c.Dc("",e.Description," "),c.xb(5),c.ec("href",e.RegistrationLink,c.uc),c.xb(1),c.Cc(e.RegistrationLink)}}let ge=(()=>{class e{constructor(e){this.placementService=e}ngOnInit(){this.getPlacementDetail()}getPlacementDetail(){this.placementService.getPlacementDetail(+localStorage.getItem("courseid"),+localStorage.getItem("semester")).subscribe(e=>this.placementlist=e,e=>{})}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(le.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-placement"]],decls:4,vars:2,consts:[["class","p-ml-4",4,"ngIf"],[3,"header","style",4,"ngFor","ngForOf"],[1,"p-ml-4"],[3,"header"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-sm-12"],["target","_blank",3,"href"]],template:function(e,t){1&e&&(c.Jb(0,"br"),c.zc(1,de,2,0,"h3",0),c.zc(2,ue,19,11,"p-card",1),c.Jb(3,"br")),2&e&&(c.xb(1),c.dc("ngIf",!t.placementlist),c.xb(1),c.dc("ngForOf",t.placementlist))},directives:[n.k,n.j,a.a],pipes:[n.d],styles:[""]}),e})();var me=i("3Pt+"),he=i("QKdN"),fe=i("SwF3"),ve=i("z6cu"),Ne=i("oEQO");let Oe=(()=>{class e{constructor(e){this._httpClient=e}addAttachment(e){return this._httpClient.post(`${Ne.a.BASE_URL}${Ne.a.ATTACHMENT}`,e)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(ve.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(t){return new(t||e)(c.Sb(ee.b))},e.\u0275prov=c.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var xe=i("7kUa"),ye=i("Gxio");function Ie(e,t,i,n){return new(i||(i=Promise))(function(r,s){function c(e){try{a(n.next(e))}catch(t){s(t)}}function o(e){try{a(n.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(c,o)}a((n=n.apply(e,t||[])).next())})}var we=i("jhN1");const ke=["iframe"];function Se(e,t){if(1&e&&c.Jb(0,"div",3),2&e){const e=c.Xb(2);c.dc("innerHtml",e.docHtml,c.sc)}}function De(e,t){if(1&e&&(c.Ob(0,"object",4),c.Ob(1,"p"),c.Bc(2," Your browser does not support PDFs. "),c.Ob(3,"a",5),c.Bc(4,"Download the PDF"),c.Nb(),c.Bc(5,". "),c.Nb(),c.Nb()),2&e){const e=c.Xb(2);c.dc("data",e.fullUrl,c.tc),c.xb(3),c.dc("href",e.fullUrl,c.uc)}}function Be(e,t){if(1&e&&(c.Mb(0),c.zc(1,Se,1,1,"div",1),c.zc(2,De,6,2,"object",2),c.Lb()),2&e){const e=c.Xb();c.xb(1),c.dc("ngIf","pdf"!==e.configuredViewer),c.xb(1),c.dc("ngIf",e.fullUrl&&"pdf"===e.configuredViewer)}}function Ce(e,t){if(1&e){const e=c.Pb();c.Ob(0,"iframe",8,9),c.Vb("load",function(){return c.rc(e),c.Xb(2).iframeLoaded()}),c.Nb()}if(2&e){const e=c.Xb(2);c.dc("src",e.fullUrl,c.tc)}}function Ae(e,t){if(1&e){const e=c.Pb();c.Ob(0,"iframe",12,9),c.Vb("load",function(){return c.rc(e),c.Xb(3).iframeLoaded()}),c.Nb()}if(2&e){const e=c.Xb(3);c.dc("src",e.fullUrl,c.tc)}}function Me(e,t){if(1&e&&(c.Ob(0,"div",10),c.Jb(1,"div"),c.zc(2,Ae,2,1,"iframe",11),c.Nb()),2&e){const e=c.Xb(2);c.xb(1),c.yc("background-color","popout-hide"===e.disableContent?"#fff":"transparent"),c.Ab("overlay-full","all"===e.disableContent)("overlay-popout-google","google"===e.configuredViewer&&("popout"===e.disableContent||"popout-hide"===e.disableContent))("overlay-popout-office","office"===e.configuredViewer&&("popout"===e.disableContent||"popout-hide"===e.disableContent)),c.xb(1),c.dc("ngIf",e.fullUrl)}}function Fe(e,t){if(1&e&&(c.Mb(0),c.zc(1,Ce,2,1,"iframe",6),c.zc(2,Me,3,9,"div",7),c.Lb()),2&e){const e=c.Xb();c.xb(1),c.dc("ngIf",e.fullUrl&&"none"===e.disableContent),c.xb(1),c.dc("ngIf","none"!==e.disableContent)}}const Je=e=>{const t=e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);return t&&{href:e,protocol:t[1],host:t[2],hostname:t[3],port:t[4],pathname:t[5],search:t[6],hash:t[7]}},ze=e=>{var t;let i=!1;try{i=Pe()?!(null===(t=null==e?void 0:e.contentWindow)||void 0===t?void 0:t.document):!(null==e?void 0:e.contentDocument)}catch(n){}return i},Pe=()=>/MSIE (\d+\.\d+);/.test(navigator.userAgent)||navigator.userAgent.indexOf("Trident/")>-1,Ue=(e,t="google",i="",n="")=>{switch(t){case"google":n="https://docs.google.com/gview?url=%URL%&embedded=true";break;case"office":n="https://view.officeapps.live.com/op/embed.aspx?src=%URL%";break;case"pdf":n=""}const r="google"===t||"office"===t||"url"===t,s=e.indexOf("/")?encodeURIComponent(e):e;let c=n?n.replace("%URL%",s):e;return i&&r&&"url"!==t&&(c=`${c}${i.startsWith("&")?"":"&"}${i}`),{url:c,externalViewer:r}};let Te=(()=>{class e{constructor(e,t){this.domSanitizer=e,this.ngZone=t,this.loaded=new c.n,this.url="",this.queryParams="",this.viewerUrl="",this.googleCheckInterval=3e3,this.googleMaxChecks=5,this.disableContent="none",this.googleCheckContentLoaded=!0,this.fullUrl=null,this.externalViewer=!1,this.docHtml="",this.configuredViewer="google",this.shouldCheckIframe=!1}ngAfterViewInit(){var e,t;if(this.shouldCheckIframe){const i=null===(t=null===(e=this.iframes)||void 0===e?void 0:e.first)||void 0===t?void 0:t.nativeElement;i&&(this.shouldCheckIframe=!1,this.reloadIframe(i))}}ngOnDestroy(){this.checkIFrameSubscription&&this.checkIFrameSubscription.unsubscribe()}ngOnChanges(e){return Ie(this,void 0,void 0,function*(){if(e&&e.viewer&&(e.viewer.isFirstChange||e.viewer.currentValue!==e.viewer.previousValue)&&("google"!==this.viewer&&"office"!==this.viewer&&"mammoth"!==this.viewer&&"pdf"!==this.viewer&&"url"!==this.viewer&&console.error(`Unsupported viewer: '${this.viewer}'. Supported viewers: google, office, mammoth and pdf`),this.configuredViewer=this.viewer),e.url&&e.url.currentValue!==e.url.previousValue||e.viewer&&e.viewer.currentValue!==e.viewer.previousValue||e.viewerUrl&&e.viewerUrl.currentValue!==e.viewerUrl.previousValue){let e=Ue(this.url,this.configuredViewer,this.queryParams,this.viewerUrl);if(this.externalViewer=e.externalViewer,e.externalViewer&&this.overrideLocalhost&&(e=>{const t=Je(this.url),i=(null==t?void 0:t.hostname)||"";return["localhost","127.0.0.1","","::1"].includes(i)||i.startsWith("192.168.")||i.startsWith("10.0.")||i.endsWith(".local")})()){const t=((e,t)=>{const i=Je(e),n=Je(t);return i&&n?e.replace(i.port?`${i.hostname}:${i.port}`:i.hostname,n.port?`${n.hostname}:${n.port}`:n.hostname):e})(this.url,this.overrideLocalhost);e=Ue(t,this.configuredViewer,this.queryParams,this.viewerUrl)}this.docHtml="",this.checkIFrameSubscription&&this.checkIFrameSubscription.unsubscribe(),this.url?e.externalViewer||"url"===this.configuredViewer?(this.fullUrl=this.domSanitizer.bypassSecurityTrustResourceUrl(e.url),"google"===this.configuredViewer&&this.googleCheckContentLoaded&&this.ngZone.runOutsideAngular(()=>{var e,t;const i=null===(t=null===(e=this.iframes)||void 0===e?void 0:e.first)||void 0===t?void 0:t.nativeElement;i?this.reloadIframe(i):this.shouldCheckIframe=!0})):"mammoth"===this.configuredViewer&&(this.docHtml=yield(t=this.url,Ie(void 0,void 0,void 0,function*(){mammoth||console.error("Please install mammoth and make sure mammoth.browser.min.js is loaded.");const e=yield(e=>new Promise((t,i)=>{try{const i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="blob",i.onload=()=>{const e=new FileReader;e.readAsArrayBuffer(i.response),e.onloadend=()=>{t(e.result)}},i.send()}catch(n){i(`error while retrieving file ${e}.`)}}))(t);return(yield mammoth.convertToHtml({arrayBuffer:e})).value}))):this.fullUrl=null}var t})}reloadIframe(e){this.checkIFrameSubscription=(()=>{let e=null,t=0;return{subscribe:(i,n=3e3,r=5)=>{if(!ze(i))return e=setInterval(()=>{t++,t>=r&&clearInterval(e),(e=>{e&&(console.log("reloading.."),e.src=e.src)})(i)},n),e;e&&clearInterval(e)},unsubscribe:()=>{e&&clearInterval(e)}}})(),this.checkIFrameSubscription.subscribe(e,this.googleCheckInterval,this.googleMaxChecks)}iframeLoaded(){var e,t;const i=null===(t=null===(e=this.iframes)||void 0===e?void 0:e.first)||void 0===t?void 0:t.nativeElement;i&&ze(i)&&(this.loaded.emit(null),this.checkIFrameSubscription&&this.checkIFrameSubscription.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(we.b),c.Ib(c.z))},e.\u0275cmp=c.Cb({type:e,selectors:[["ngx-doc-viewer"]],viewQuery:function(e,t){if(1&e&&c.Fc(ke,!0),2&e){let e;c.pc(e=c.Wb())&&(t.iframes=e)}},inputs:{url:"url",queryParams:"queryParams",viewerUrl:"viewerUrl",googleCheckInterval:"googleCheckInterval",googleMaxChecks:"googleMaxChecks",disableContent:"disableContent",googleCheckContentLoaded:"googleCheckContentLoaded",viewer:"viewer",overrideLocalhost:"overrideLocalhost"},outputs:{loaded:"loaded"},features:[c.vb],decls:2,vars:2,consts:[[4,"ngIf"],[3,"innerHtml",4,"ngIf"],["type","application/pdf","width","100%","height","100%",3,"data",4,"ngIf"],[3,"innerHtml"],["type","application/pdf","width","100%","height","100%",3,"data"],[3,"href"],["id","iframe-doc-viewer","frameBorder","0",3,"src","load",4,"ngIf"],["class","container",4,"ngIf"],["id","iframe-doc-viewer","frameBorder","0",3,"src","load"],["iframe",""],[1,"container"],["id","iframe","frameBorder","0",3,"src","load",4,"ngIf"],["id","iframe","frameBorder","0",3,"src","load"]],template:function(e,t){1&e&&(c.zc(0,Be,3,2,"ng-container",0),c.zc(1,Fe,3,2,"ng-container",0)),2&e&&(c.dc("ngIf",!t.externalViewer),c.xb(1),c.dc("ngIf",t.externalViewer))},directives:[n.k],styles:["[_nghost-%COMP%] {\n        display: block;\n      }\n      .container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: relative;\n      }\n      .overlay-popout-google[_ngcontent-%COMP%] {\n        width: 40px;\n        height: 40px;\n        right: 26px;\n        top: 11.5px;\n        position: absolute;\n        z-index: 1000;\n      }\n      .overlay-popout-office[_ngcontent-%COMP%] {\n        width: 100px;\n        height: 20px;\n        right: 0;\n        bottom: 0;\n        position: absolute;\n        z-index: 1000;\n      }\n      .overlay-full[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        right: 0;\n        top: 0;\n        position: absolute;\n        z-index: 1000;\n      }\n      iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }"]}),e})(),Ve=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[n.b]]}),e})();const Le=function(){return{margin:"20px"}};function je(e,t){if(1&e){const e=c.Pb();c.Ob(0,"p-card",15),c.Ob(1,"div",16),c.Ob(2,"div",17),c.Bc(3),c.Nb(),c.Ob(4,"div",17),c.Bc(5),c.Yb(6,"date"),c.Nb(),c.Ob(7,"div",17),c.Bc(8),c.Nb(),c.Ob(9,"div",17),c.Bc(10),c.Yb(11,"date"),c.Nb(),c.Ob(12,"div",17),c.Bc(13),c.Nb(),c.Ob(14,"div",17),c.Bc(15),c.Nb(),c.Jb(16,"div",17),c.Ob(17,"div",18),c.Ob(18,"p-button",19),c.Vb("click",function(){c.rc(e);const i=t.$implicit;return c.Xb().showDialog(i.AssignmentId,i.SubjectName,i.Name)}),c.Nb(),c.Nb(),c.Nb(),c.Nb()}if(2&e){const e=t.$implicit;c.xc(c.gc(15,Le)),c.ec("header",e.AssignmentId+"  :  "+e.SubjectName),c.xb(3),c.Dc(" Title : ",e.Name," "),c.xb(2),c.Dc(" Date of assignment : ",c.Zb(6,9,e.AssignmentDate,"dd/MM/yyyy")," "),c.xb(3),c.Dc(" Description : ",e.Description," "),c.xb(2),c.Dc(" Due Date : ",c.Zb(11,12,e.DueDate,"dd/MM/yyyy")," "),c.xb(3),c.Dc(" Total Marks : ",e.TotalMarks," "),c.xb(2),c.Dc(" Given by : ",e.FacultyName," ")}}function Ee(e,t){if(1&e&&(c.Ob(0,"span",20),c.Bc(1),c.Nb()),2&e){const e=c.Xb();c.xb(1),c.Ec(" ",e.progress,"% ",e.message," ")}}function $e(e,t){if(1&e&&(c.Ob(0,"small",21),c.Bc(1),c.Nb()),2&e){const e=c.Xb();c.xb(1),c.Dc(" ",e.formErrors.AttachmentUrl,"")}}function Re(e,t){if(1&e){const e=c.Pb();c.Ob(0,"p-card",15),c.Ob(1,"div",16),c.Ob(2,"div",17),c.Bc(3),c.Nb(),c.Ob(4,"div",17),c.Bc(5),c.Yb(6,"date"),c.Nb(),c.Ob(7,"div",17),c.Bc(8),c.Nb(),c.Ob(9,"div",17),c.Bc(10),c.Yb(11,"date"),c.Nb(),c.Ob(12,"div",17),c.Bc(13),c.Nb(),c.Ob(14,"div",17),c.Bc(15),c.Nb(),c.Ob(16,"div",17),c.Bc(17," Attachment : "),c.Ob(18,"a",22),c.Bc(19,"Click here to open Attachment"),c.Nb(),c.Ob(20,"p-button",23),c.Vb("click",function(){c.rc(e);const i=t.$implicit;return c.Xb().showDialogForDoc(i.AttachmentUrl)}),c.Nb(),c.Nb(),c.Ob(21,"div",18),c.Bc(22),c.Nb(),c.Nb(),c.Nb()}if(2&e){const e=t.$implicit;c.xc(c.gc(17,Le)),c.ec("header",e.AssignmentId+"  :  "+e.SubjectName+" "+(-1==e.MarksScored?" (Not Checked)":" (Checked)")),c.xb(3),c.Dc(" Title : ",e.Name," "),c.xb(2),c.Dc(" Date of assignment : ",c.Zb(6,11,e.AssignmentDate,"dd/MM/yyyy")," "),c.xb(3),c.Dc(" Description : ",e.Description," "),c.xb(2),c.Dc(" Due Date : ",c.Zb(11,14,e.DueDate,"dd/MM/yyyy")," "),c.xb(3),c.Dc(" Total Marks : ",e.TotalMarks," "),c.xb(2),c.Dc(" Given by : ",e.FacultyName," "),c.xb(3),c.ec("href","https://mycampusapp.azurewebsites.net/"+e.AttachmentUrl,c.uc),c.xb(4),c.Dc(" MarksScored : ",-1==e.MarksScored?"":e.MarksScored," ")}}const Xe=function(){return{width:"50vw"}},Ze=function(e){return{"ng-invalid ng-dirty":e}},_e=function(){return{width:"80vw"}},He=[{path:"",component:T,children:[{path:"dashboard",component:I},{path:"info",component:$},{path:"attendance",component:Y},{path:"assignment",component:(()=>{class e{constructor(e,t,i,n,r,s){this.assignmentService=e,this.http=t,this.fb=i,this.messageService=n,this._router=r,this.attachmentService=s,this.display=!1,this.displayForDoc=!1,this.validationMessages={AttachmentUrl:{required:"Attachment Url is required"}},this.formErrors={AttachmentUrl:""},this.uploadFile=e=>{if(0===e.length)return;let t=e[0];const i=new FormData;i.append("file",t,t.name),this.http.post("https://mycampusapp.azurewebsites.net/api/upload",i,{reportProgress:!0,observe:"events"}).subscribe(e=>{e.type===ee.e.UploadProgress?this.progress=Math.round(100*e.loaded/e.total):e.type===ee.e.Response&&(this.message="Upload successfully.",this.path=e.body,this.aForm.patchValue({AttachmentUrl:e.body}))})}}ngOnInit(){this.docurl="https://mycampusapp.azurewebsites.net/",this.getPendingAssignment(),this.getSubmittedAssignment(),this.aForm=this.fb.group({AttachmentUrl:["",me.n.required]}),this.aForm.valueChanges.subscribe(e=>{this.logValidationErrors(this.aForm)}),this.attachment={AttachmentId:0,UploadDate:null,AttachmentUrl:null,MarksScored:-1,StudentId:0,AssignmentId:0}}showDialog(e,t,i){this.display=!0,this.assignmentId=e,this.subjectName=t,this.title=i}getPendingAssignment(){this.assignmentService.getPendingAssignment(+localStorage.getItem("courseid"),+localStorage.getItem("semester"),+localStorage.getItem("id")).subscribe(e=>{this.assignmentlist=e},e=>console.log(e))}getSubmittedAssignment(){this.assignmentService.getSubmittedAssignment(+localStorage.getItem("courseid"),+localStorage.getItem("semester"),+localStorage.getItem("id")).subscribe(e=>{this.submittedlist=e},e=>console.log(e))}onSubmit(){this.mapFormValueToCourseModel(),this.attachmentService.addAttachment(this.attachment).subscribe(e=>{this.showSuccess("Assignment submitted successfully")},e=>{this.showError("Error while submitting assignment")})}mapFormValueToCourseModel(){this.attachment.AssignmentId=0,this.attachment.UploadDate=Object(he.a)(new Date),this.attachment.AttachmentUrl=this.aForm.value.AttachmentUrl,this.attachment.MarksScored=-1,this.attachment.StudentId=+localStorage.getItem("id"),this.attachment.AssignmentId=this.assignmentId,console.log(this.attachment)}logValidationErrors(e=this.aForm){Object.keys(e.controls).forEach(t=>{const i=e.get(t);if(i instanceof me.d)this.logValidationErrors(i);else if(this.formErrors[t]="",i&&!i.valid&&(i.touched||i.dirty)){const e=this.validationMessages[t];for(const n in i.errors)n&&(this.formErrors[t]+=e[n]+" ")}})}showSuccess(e){this.messageService.add({severity:"success",summary:"Success",detail:e}),this.display=!1,this.getPendingAssignment(),this.getSubmittedAssignment()}showError(e){this.messageService.add({severity:"error",summary:"Error",detail:e})}showDialogForDoc(e){this.docurl="https://mycampusapp.azurewebsites.net/"+e,this.displayForDoc=!0}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(fe.a),c.Ib(ee.b),c.Ib(me.b),c.Ib(b.g),c.Ib(s.b),c.Ib(Oe))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-assignment"]],decls:27,vars:26,consts:[[1,"p-ml-4"],[3,"header","style",4,"ngFor","ngForOf"],[3,"header","visible","baseZIndex","visibleChange"],[1,"p-mt-3"],["type","file","placeholder","Choose file",2,"display","none",3,"change"],["file",""],["type","button","styleClass","p-button p-button-success","label","Browse File","icon","pi pi-upload",3,"click"],["class","upload",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"p-field"],["id","AttachmentUrl","type","text","aria-describedby","AttachmentUrl-help","size","100","autocomplete","off","pInputText","","formControlName","AttachmentUrl","readonly","",1,"p-inputtext-sm",3,"ngClass","value","blur"],["id","AttachmentUrl-help","class","p-error",4,"ngIf"],["pButton","","type","submit","label","Submit","icon","pi pi-check-circle","pRipple","",1,"p-button","p-mr-4",3,"disabled"],["header","Preview",3,"visible","draggable","resizable","maximizable","baseZIndex","visibleChange"],["viewer","google",2,"width","100%","height","100%",3,"url"],[3,"header"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-6","p-md-6","p-sm-6"],[1,"p-col-12","p-lg-2","p-md-2","p-sm-6"],["type","button","icon","pi pi-save","styleClass","p-button-warning","label","Submit",3,"click"],[1,"upload"],["id","AttachmentUrl-help",1,"p-error"],["target","_blank",3,"href"],["type","button","icon","pi pi-file-pdf","styleClass","p-button-success p-ml-4",3,"click"]],template:function(e,t){if(1&e){const e=c.Pb();c.Jb(0,"br"),c.Ob(1,"h2",0),c.Bc(2,"Pending Assignment"),c.Nb(),c.zc(3,je,19,16,"p-card",1),c.Ob(4,"p-dialog",2),c.Vb("visibleChange",function(e){return t.display=e}),c.Ob(5,"b"),c.Bc(6),c.Nb(),c.Jb(7,"br"),c.Bc(8," Please upload only document file. "),c.Ob(9,"div",3),c.Ob(10,"input",4,5),c.Vb("change",function(){c.rc(e);const i=c.qc(11);return t.uploadFile(i.files)}),c.Nb(),c.Ob(12,"p-button",6),c.Vb("click",function(){return c.rc(e),c.qc(11).click()}),c.Nb(),c.zc(13,Ee,2,2,"span",7),c.Nb(),c.Jb(14,"br"),c.Ob(15,"Form",8),c.Vb("ngSubmit",function(){return t.onSubmit()}),c.Ob(16,"div",9),c.Ob(17,"input",10),c.Vb("blur",function(){return t.logValidationErrors()}),c.Nb(),c.zc(18,$e,2,1,"small",11),c.Nb(),c.Jb(19,"button",12),c.Nb(),c.Nb(),c.Jb(20,"br"),c.Ob(21,"h2",0),c.Bc(22,"Submitted Assignment"),c.Nb(),c.zc(23,Re,23,18,"p-card",1),c.Jb(24,"p-toast"),c.Ob(25,"p-dialog",13),c.Vb("visibleChange",function(e){return t.displayForDoc=e}),c.Jb(26,"ngx-doc-viewer",14),c.Nb()}2&e&&(c.xb(3),c.dc("ngForOf",t.assignmentlist),c.xb(1),c.xc(c.gc(22,Xe)),c.ec("header",t.assignmentId+"  :  "+t.subjectName),c.dc("visible",t.display)("baseZIndex",1e4),c.xb(2),c.Dc("Title : ",t.title,""),c.xb(7),c.dc("ngIf",t.progress>0),c.xb(2),c.dc("formGroup",t.aForm),c.xb(2),c.ec("value",t.path),c.dc("ngClass",c.hc(23,Ze,t.formErrors.AttachmentUrl)),c.xb(1),c.dc("ngIf",t.formErrors.AttachmentUrl),c.xb(1),c.dc("disabled",t.aForm.invalid),c.xb(4),c.dc("ngForOf",t.submittedlist),c.xb(2),c.xc(c.gc(25,_e)),c.dc("visible",t.displayForDoc)("draggable",!1)("resizable",!1)("maximizable",!0)("baseZIndex",1e4),c.xb(1),c.dc("url",t.docurl))},directives:[n.j,D.a,A.a,n.k,me.j,me.e,me.a,xe.a,me.i,me.c,n.i,A.b,M.a,ye.a,Te,a.a],pipes:[n.d],styles:[".upload[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#66c52f;margin-left:15px}"]}),e})()},{path:"result",component:be},{path:"fee",component:K},{path:"placement",component:ge}]}];let Ye=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[s.e.forChild(He)],s.e]}),e})();var Ge=i("eksp"),qe=i("X2Lf");let We=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},providers:[qe.a,b.g,b.a,{provide:ee.a,useClass:Ge.a,multi:!0}],imports:[[n.b,Ye,r.a,Ve]]}),e})()}}]);