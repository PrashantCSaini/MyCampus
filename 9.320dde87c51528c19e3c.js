(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0LKD":function(e,t,i){"use strict";i.r(t),i.d(t,"ParentModule",function(){return ue});var c=i("ofXK"),b=i("4TcP"),n=i("tk/3"),s=i("eksp"),r=i("tyNb"),o=i("fXoL"),a=i("WP+7"),d=i("QIUk"),l=i("7zfz"),p=i("jeV5");function u(e,t){1&e&&o.Jb(0,"img",12)}function g(e,t){1&e&&(o.Ob(0,"div",13),o.Jb(1,"p-skeleton",14),o.Ob(2,"div"),o.Jb(3,"p-skeleton",15),o.Jb(4,"p-skeleton",16),o.Jb(5,"p-skeleton",17),o.Nb(),o.Nb())}function f(e,t){1&e&&o.Jb(0,"img",18)}function N(e,t){if(1&e&&(o.Ob(0,"div"),o.Bc(1),o.Nb()),2&e){const e=o.Xb();o.xb(1),o.Cc(e.attendance+"%")}}function v(e,t){1&e&&(o.Ob(0,"div",13),o.Jb(1,"p-skeleton",14),o.Ob(2,"div"),o.Jb(3,"p-skeleton",15),o.Jb(4,"p-skeleton",16),o.Jb(5,"p-skeleton",17),o.Nb(),o.Nb())}function m(e,t){1&e&&o.Jb(0,"img",19)}function O(e,t){if(1&e&&(o.Ob(0,"div"),o.Bc(1),o.Nb()),2&e){const e=o.Xb();o.xb(1),o.Cc(e.pendingassignment)}}function x(e,t){1&e&&(o.Ob(0,"div",13),o.Jb(1,"p-skeleton",14),o.Ob(2,"div"),o.Jb(3,"p-skeleton",15),o.Jb(4,"p-skeleton",16),o.Jb(5,"p-skeleton",17),o.Nb(),o.Nb())}const h=function(){return{margin:"15px",padding:"20px"}},B=function(){return{margin:"10px","margin-left":"20px"}},y=function(){return{width:"25rem"}},D=function(){return{margin:"10px"}};let I=(()=>{class e{constructor(e){this.studentService=e,this.sid=+localStorage.getItem("studentId"),this.cid=+localStorage.getItem("courseid"),this.sem=+localStorage.getItem("semester")}ngOnInit(){this.getAttendancePercent(),this.getCourseName(),this.getPendingAssignmentNumber()}getAttendancePercent(){this.studentService.getAttendancePercent(this.sid).subscribe(e=>{this.attendance=e},e=>console.log(e))}getPendingAssignmentNumber(){this.studentService.getPendingAssignmentNumber(this.cid,this.sem,this.sid).subscribe(e=>{this.pendingassignment=e},e=>console.log(e))}getCourseName(){this.studentService.getCourseName(this.sid).subscribe(e=>{this.coursename=e},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(a.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-dashboard"]],decls:22,vars:27,consts:[[1,"p-fluid","p-grid","p-mx-auto"],[1,"p-shadow-15"],["header","My Course"],["pTemplate","header"],[1,"card-body"],["class","p-d-flex p-mb-3",4,"ngIf"],[1,"pi","pi-book",2,"font-size","2rem","display","block","margin-top","20px","color","rgb(197, 46, 46)"],["header","Attendance"],[4,"ngIf"],[1,"pi","pi-calendar-plus",2,"font-size","2rem","display","block","margin-top","20px","color","rgb(60, 140, 151)"],["header","Pending Assignment"],[1,"pi","pi-inbox",2,"font-size","2rem","display","block","margin-top","20px","color","rgb(60, 151, 60)"],["alt","Card","src","assets/10.jpg"],[1,"p-d-flex","p-mb-3"],["shape","circle","size","5rem","styleClass","p-mr-2"],["width","10rem","styleClass","p-mb-2"],["width","5rem","styleClass","p-mb-2"],["height",".5rem"],["alt","Card","src","assets/3.jpg"],["alt","Card","src","assets/11.jpg"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"p-card",2),o.zc(3,u,1,0,"ng-template",3),o.Ob(4,"div",4),o.Bc(5),o.zc(6,g,6,0,"div",5),o.Jb(7,"div",6),o.Nb(),o.Nb(),o.Nb(),o.Ob(8,"div",1),o.Ob(9,"p-card",7),o.zc(10,f,1,0,"ng-template",3),o.Ob(11,"div",4),o.zc(12,N,2,1,"div",8),o.zc(13,v,6,0,"div",5),o.Jb(14,"div",9),o.Nb(),o.Nb(),o.Nb(),o.Ob(15,"div",1),o.Ob(16,"p-card",10),o.zc(17,m,1,0,"ng-template",3),o.Ob(18,"div",4),o.zc(19,O,2,1,"div",8),o.zc(20,x,6,0,"div",5),o.Jb(21,"div",11),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&e&&(o.xc(o.gc(20,h)),o.xb(1),o.xc(o.gc(21,B)),o.xb(1),o.xc(o.gc(22,y)),o.xb(3),o.Dc(" ",t.coursename," "),o.xb(1),o.dc("ngIf",!t.coursename),o.xb(2),o.xc(o.gc(23,D)),o.xb(1),o.xc(o.gc(24,y)),o.xb(3),o.dc("ngIf",t.attendance),o.xb(1),o.dc("ngIf",!t.attendance),o.xb(2),o.xc(o.gc(25,D)),o.xb(1),o.xc(o.gc(26,y)),o.xb(3),o.dc("ngIf",t.pendingassignment),o.xb(1),o.dc("ngIf",!t.pendingassignment))},directives:[d.a,l.i,c.k,p.a],styles:[".card-body[_ngcontent-%COMP%]{height:180px;font-size:70px;font-weight:700;text-align:center;display:block;margin-left:auto;margin-right:auto;padding:30px;font-family:Montserrat}"]}),e})();var S=i("0UUG");function M(e,t){1&e&&(o.Ob(0,"h3",2),o.Bc(1,"loading..."),o.Nb())}const k=function(){return{margin:"20px"}};function F(e,t){if(1&e&&(o.Ob(0,"p-card",3),o.Jb(1,"hr"),o.Ob(2,"div",4),o.Ob(3,"div",5),o.Bc(4),o.Nb(),o.Ob(5,"div",5),o.Bc(6),o.Yb(7,"date"),o.Nb(),o.Ob(8,"div",5),o.Bc(9),o.Nb(),o.Ob(10,"div",5),o.Bc(11),o.Nb(),o.Nb(),o.Nb()),2&e){const e=t.$implicit,i=t.index;o.xc(o.gc(10,k)),o.fc("header","Fee Details ",i+1,""),o.xb(4),o.Dc(" Id : ",e.FeeId," "),o.xb(2),o.Dc(" Date : ",o.Zb(7,7,e.Date,"dd/MM/yyyy")," "),o.xb(3),o.Dc(" Amount : Rs. ",e.Amount," "),o.xb(2),o.Dc(" Mode Of Payment : ",e.ModeOfPayment," ")}}let z=(()=>{class e{constructor(e){this.feeService=e}ngOnInit(){this.getFeeById()}getFeeById(){this.feeService.getFeeById(+localStorage.getItem("studentId")).subscribe(e=>this.feelist=e,e=>{})}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(S.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-fee"]],decls:3,vars:2,consts:[["class","p-ml-4",4,"ngIf"],[3,"header","style",4,"ngFor","ngForOf"],[1,"p-ml-4"],[3,"header"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-6","p-md-4"]],template:function(e,t){1&e&&(o.Jb(0,"br"),o.zc(1,M,2,0,"h3",0),o.zc(2,F,12,11,"p-card",1)),2&e&&(o.xb(1),o.dc("ngIf",!t.feelist),o.xb(1),o.dc("ngForOf",t.feelist))},directives:[c.k,c.j,d.a],pipes:[c.d],styles:[""]}),e})();var J=i("0308");function A(e,t){if(1&e&&(o.Ob(0,"div",1),o.Ob(1,"div",2),o.Bc(2),o.Nb(),o.Ob(3,"div",2),o.Bc(4),o.Nb(),o.Nb()),2&e){const e=t.$implicit;o.xb(2),o.Dc(" ",e.SubjectName," "),o.xb(2),o.Dc(" ",e.TotalLecture," ")}}function w(e,t){if(1&e&&(o.Ob(0,"div",1),o.Ob(1,"div",5),o.Bc(2),o.Nb(),o.Ob(3,"div",5),o.Bc(4),o.Nb(),o.Nb()),2&e){const e=t.$implicit;o.xb(2),o.Dc(" ",e.SubjectName," "),o.xb(2),o.Dc(" ",e.TotalLecture," ")}}function P(e,t){if(1&e&&(o.Ob(0,"div",1),o.Ob(1,"div",5),o.Bc(2),o.Nb(),o.Ob(3,"div",5),o.Bc(4),o.Nb(),o.Nb()),2&e){const e=t.$implicit;o.xb(2),o.Dc(" ",e.SubjectName," "),o.xb(2),o.Dc(" ",e.TotalLecture," ")}}const C=function(){return{margin:"20px"}};let T=(()=>{class e{constructor(e){this.attendenceService=e}ngOnInit(){this.getTotalLecture(),this.getPresentAttendence(),this.getAbsentAttendence()}getTotalLecture(){this.attendenceService.getTotalLecture(+localStorage.getItem("id")).subscribe(e=>{this.totalLecture=e},e=>console.log(e))}getPresentAttendence(){this.attendenceService.getPresentAttendence(+localStorage.getItem("id")).subscribe(e=>{this.presentLecture=e},e=>console.log(e))}getAbsentAttendence(){this.attendenceService.getAbsentAttendence(+localStorage.getItem("id")).subscribe(e=>{this.absentLecture=e},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(J.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-attendance"]],decls:30,vars:12,consts:[["header","Total Attendance"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-4","p-md-6","p-sm-6"],["class","p-fluid p-grid",4,"ngFor","ngForOf"],["header","Present Attendance"],[1,"p-col-12","p-lg-4","p-md-6"],["header","Absent Attendance"]],template:function(e,t){1&e&&(o.Jb(0,"br"),o.Ob(1,"p-card",0),o.Ob(2,"div",1),o.Ob(3,"div",2),o.Ob(4,"b"),o.Bc(5,"Subject"),o.Nb(),o.Nb(),o.Ob(6,"div",2),o.Ob(7,"b"),o.Bc(8,"Total Lecture"),o.Nb(),o.Nb(),o.Nb(),o.zc(9,A,5,2,"div",3),o.Nb(),o.Jb(10,"br"),o.Ob(11,"p-card",4),o.Ob(12,"div",1),o.Ob(13,"div",5),o.Ob(14,"b"),o.Bc(15,"Subject"),o.Nb(),o.Nb(),o.Ob(16,"div",5),o.Ob(17,"b"),o.Bc(18,"Present Lecture"),o.Nb(),o.Nb(),o.Nb(),o.zc(19,w,5,2,"div",3),o.Nb(),o.Jb(20,"br"),o.Ob(21,"p-card",6),o.Ob(22,"div",1),o.Ob(23,"div",5),o.Ob(24,"b"),o.Bc(25,"Subject"),o.Nb(),o.Nb(),o.Ob(26,"div",5),o.Ob(27,"b"),o.Bc(28,"Absent Lecture"),o.Nb(),o.Nb(),o.Nb(),o.zc(29,P,5,2,"div",3),o.Nb()),2&e&&(o.xb(1),o.xc(o.gc(9,C)),o.xb(8),o.dc("ngForOf",t.totalLecture),o.xb(2),o.xc(o.gc(10,C)),o.xb(8),o.dc("ngForOf",t.presentLecture),o.xb(2),o.xc(o.gc(11,C)),o.xb(8),o.dc("ngForOf",t.absentLecture))},directives:[d.a,c.j],styles:[""]}),e})();var L=i("rqY4");function j(e,t){if(1&e&&(o.Ob(0,"div",3),o.Ob(1,"div",4),o.Bc(2),o.Nb(),o.Ob(3,"div",4),o.Bc(4),o.Nb(),o.Ob(5,"div",4),o.Bc(6),o.Nb(),o.Ob(7,"div",4),o.Bc(8),o.Nb(),o.Ob(9,"div",4),o.Bc(10),o.Nb(),o.Ob(11,"div",4),o.Bc(12),o.Nb(),o.Ob(13,"div",4),o.Bc(14),o.Nb(),o.Ob(15,"div",4),o.Bc(16),o.Nb(),o.Ob(17,"div",4),o.Bc(18),o.Nb(),o.Ob(19,"div",4),o.Bc(20),o.Nb(),o.Ob(21,"div",4),o.Bc(22),o.Nb(),o.Ob(23,"div",4),o.Bc(24),o.Nb(),o.Ob(25,"div",4),o.Bc(26),o.Nb(),o.Ob(27,"div",4),o.Bc(28),o.Nb(),o.Nb()),2&e){const e=o.Xb();o.xb(2),o.Dc(" FatherName : ",e.p.FatherName," "),o.xb(2),o.Dc(" Father Education : ",e.p.FatherEducation," "),o.xb(2),o.Dc(" Father Occupation : ",e.p.FatherOccupation," "),o.xb(2),o.Dc(" Father Office Address : ",e.p.FatherOfficeAddress," "),o.xb(2),o.Dc(" FatherMobileNo : ",e.p.FatherMobileNo," "),o.xb(2),o.Dc(" FatherEmail : ",e.p.FatherEmail," "),o.xb(2),o.Dc(" Mother Name : ",e.p.MotherName," "),o.xb(2),o.Dc(" Mother Education : ",e.p.MotherEducation," "),o.xb(2),o.Dc(" Mother Office Address : ",e.p.MotherOfficeAddress," "),o.xb(2),o.Dc(" MotherMobileNo : ",e.p.MotherMobileNo," "),o.xb(2),o.Dc(" Mother Email : ",e.p.MotherEmail," "),o.xb(2),o.Dc(" Mobile No 2 : ",e.s.MobileNo2," "),o.xb(2),o.Dc(" Email : ",e.s.Email," "),o.xb(2),o.Dc(" Student Id : ",e.p.StudentId," ")}}function E(e,t){if(1&e&&(o.Ob(0,"div",3),o.Ob(1,"div",4),o.Bc(2),o.Nb(),o.Ob(3,"div",4),o.Bc(4),o.Nb(),o.Ob(5,"div",4),o.Bc(6),o.Nb(),o.Ob(7,"div",4),o.Bc(8),o.Nb(),o.Ob(9,"div",4),o.Bc(10),o.Nb(),o.Ob(11,"div",4),o.Bc(12),o.Nb(),o.Ob(13,"div",4),o.Bc(14),o.Yb(15,"date"),o.Nb(),o.Ob(16,"div",4),o.Bc(17),o.Nb(),o.Ob(18,"div",4),o.Bc(19),o.Nb(),o.Ob(20,"div",4),o.Bc(21),o.Nb(),o.Ob(22,"div",4),o.Bc(23),o.Nb(),o.Ob(24,"div",4),o.Bc(25),o.Nb(),o.Ob(26,"div",4),o.Bc(27),o.Nb(),o.Ob(28,"div",4),o.Bc(29),o.Nb(),o.Ob(30,"div",4),o.Bc(31),o.Nb(),o.Ob(32,"div",4),o.Bc(33),o.Nb(),o.Ob(34,"div",4),o.Bc(35),o.Yb(36,"date"),o.Nb(),o.Ob(37,"div",4),o.Bc(38),o.Nb(),o.Ob(39,"div",4),o.Bc(40),o.Nb(),o.Ob(41,"div",4),o.Bc(42),o.Nb(),o.Nb()),2&e){const e=o.Xb();o.xb(2),o.Dc(" Name : ",e.s.Name," "),o.xb(2),o.Dc(" Admission Year : ",e.s.AdmissionYear," "),o.xb(2),o.Dc(" Branch : ",e.s.Branch," "),o.xb(2),o.Dc(" Current Semester : ",e.s.CurrentSemester," "),o.xb(2),o.Dc(" Division : ",e.s.Division," "),o.xb(2),o.Dc(" RollNo : ",e.s.RollNo," "),o.xb(2),o.Dc(" Date Of Birth : ",o.Zb(15,20,e.s.DateOfBirth,"dd/MM/yyyy")," "),o.xb(3),o.Dc(" Gender : ","M"===e.s.Gender?"Male":"F"===e.s.Gender?"Female":"Other"," "),o.xb(2),o.Dc(" Residential Address : ",e.s.ResidentialAddress," "),o.xb(2),o.Dc(" Native Address : ",e.s.NativeAddress," "),o.xb(2),o.Dc(" Mobile No 1 : ",e.s.MobileNo1," "),o.xb(2),o.Dc(" Mobile No 2 : ",e.s.MobileNo2," "),o.xb(2),o.Dc(" Email : ",e.s.Email," "),o.xb(2),o.Dc(" Nationality : ",e.s.Nationality," "),o.xb(2),o.Dc(" MotherTongue : ",e.s.MotherTongue," "),o.xb(2),o.Dc(" Discipline : ",e.s.Discipline," "),o.xb(2),o.Dc(" Joining Date : ",o.Zb(36,23,e.s.JoiningDate,"dd/MM/yyyy")," "),o.xb(3),o.Dc(" Physically Handicapped : ","Y"===e.s.PhysicallyHandicapped?"Yes":"No"," "),o.xb(2),o.Dc(" MentorName : ",e.s.MentorName," "),o.xb(2),o.Dc(" CourseId : ",e.s.CourseId," ")}}const R=function(){return{margin:"20px"}};let X=(()=>{class e{constructor(e,t){this.parentService=e,this.studentService=t}ngOnInit(){this.getParentById()}getParentById(){this.parentService.getParentById(+localStorage.getItem("id")).subscribe(e=>{this.p=e,this.getStudentById()},e=>console.log(e))}getStudentById(){this.studentService.getStudentById(this.p.StudentId).subscribe(e=>{this.s=e},e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(L.a),o.Ib(a.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-details"]],decls:6,vars:8,consts:[["header","Parent info"],["class","p-fluid p-grid",4,"ngIf"],["header","Student info"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-4","p-md-6"]],template:function(e,t){1&e&&(o.Jb(0,"br"),o.Ob(1,"p-card",0),o.zc(2,j,29,14,"div",1),o.Nb(),o.Jb(3,"br"),o.Ob(4,"p-card",2),o.zc(5,E,43,26,"div",1),o.Nb()),2&e&&(o.xb(1),o.xc(o.gc(6,R)),o.xb(1),o.dc("ngIf",t.s),o.xb(2),o.xc(o.gc(7,R)),o.xb(1),o.dc("ngIf",t.s))},directives:[d.a,c.k],pipes:[c.d],styles:[""]}),e})();var $=i("Ug1E"),Y=i("Dxrl"),G=i("b1Ni"),Z=i("/RsI"),U=i("xlun"),H=i("fqaE"),V=i("jIHw"),_=i("Q4Mo"),q=i("+F6F");function K(e,t){1&e&&o.Jb(0,"img",5)}function Q(e,t){if(1&e){const e=o.Pb();o.Ob(0,"i",6),o.Vb("click",function(){return o.rc(e),o.Xb().showNotification()}),o.Nb(),o.Ob(1,"button",7),o.Vb("click",function(){return o.rc(e),o.Xb().logout()}),o.Nb(),o.Jb(2,"p-avatar",8)}if(2&e){const e=o.Xb();o.xb(2),o.ec("pTooltip","Hi, "+e.username)}}function W(e,t){if(1&e&&(o.Ob(0,"div",9),o.Jb(1,"p-avatar",10),o.Ob(2,"span",11),o.Bc(3),o.Jb(4,"br"),o.Ob(5,"span",12),o.Bc(6),o.Yb(7,"date"),o.Nb(),o.Ob(8,"span",13),o.Bc(9),o.Nb(),o.Nb(),o.Jb(10,"hr",14),o.Nb()),2&e){const e=t.$implicit;o.xb(3),o.Dc(" ",e.Description," "),o.xb(3),o.Cc(o.Zb(7,3,e.Date,"MMM d, y")),o.xb(3),o.Dc(" ",e.FacultyName,"")}}const ee=function(){return{width:"\n    80vw"}};let te=(()=>{class e{constructor(e,t){this.auth=e,this.notificationService=t,this.display=!1}ngOnInit(){this.items=[{label:"Dashboard",icon:"pi pi-fw pi-chart-bar",routerLink:["dashboard"]},{label:"Profile",icon:"pi pi-fw pi-users",routerLink:["info"]},{label:"Attendance",icon:"pi pi-fw pi-calendar",routerLink:["attendance"]},{label:"Result",icon:"pi pi-fw pi-id-card",routerLink:["result"]},{label:"Fee",icon:"pi pi-fw pi-money-bill",routerLink:["fee"]}],this.username=localStorage.getItem("username")}logout(){this.auth.logoutUser()}showNotification(){this.notificationService.getNotificationForParent().subscribe(e=>this.notificationlist=e,e=>{}),this.display=!0}}return e.\u0275fac=function(t){return new(t||e)(o.Ib($.a),o.Ib(Y.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-home"]],decls:6,vars:10,consts:[[3,"model"],["pTemplate","start"],["pTemplate","end"],["header","Notification Center",3,"visible","baseZIndex","draggable","resizable","maximizable","visibleChange"],["style","font-size: 15px; vertical-align: middle; ",4,"ngFor","ngForOf"],["src","https://primefaces.org/primeng/showcase/assets/showcase/images/primeng.svg","height","40",1,"p-mr-2"],["pTooltip","Show Notification","tooltipPosition","bottom","pBadge","",1,"pi","pi-bell","p-mr-4","p-text-secondary",2,"font-size","20px",3,"click"],["pButton","","type","button","label","Logout","icon","pi pi-sign-out","pRipple","",1,"p-button-text","p-button-help",3,"click"],["label","S","shape","circle","icon","p-avatar-icon","tooltipPosition","left",1,"p-ml-2",3,"pTooltip"],[2,"font-size","15px","vertical-align","middle"],["label","F","shape","circle","icon","p-avatar-icon",1,"p-ml-2"],[2,"margin-left","10px"],[2,"color","grey","margin-left","55px","font-size","13px"],[2,"color","grey","margin-left","20px","font-size","13px"],[2,"color","rgb(223, 223, 223)"]],template:function(e,t){1&e&&(o.Ob(0,"p-menubar",0),o.zc(1,K,1,0,"ng-template",1),o.zc(2,Q,3,1,"ng-template",2),o.Nb(),o.Jb(3,"router-outlet"),o.Ob(4,"p-dialog",3),o.Vb("visibleChange",function(e){return t.display=e}),o.zc(5,W,11,6,"div",4),o.Nb()),2&e&&(o.dc("model",t.items),o.xb(4),o.xc(o.gc(9,ee)),o.dc("visible",t.display)("baseZIndex",1e4)("draggable",!1)("resizable",!1)("maximizable",!0),o.xb(1),o.dc("ngForOf",t.notificationlist))},directives:[G.a,l.i,r.f,Z.a,c.j,U.a,H.a,V.b,_.a,q.a],pipes:[c.d],styles:[""]}),e})();var ie=i("m/l6");function ce(e,t){if(1&e&&(o.Ob(0,"div",1),o.Ob(1,"div",2),o.Bc(2),o.Nb(),o.Ob(3,"div",3),o.Bc(4),o.Nb(),o.Ob(5,"div",3),o.Bc(6),o.Nb(),o.Nb()),2&e){const e=o.Xb().$implicit;o.xb(2),o.Dc(" ",e.SubjectName," "),o.xb(2),o.Dc(" ",e.MarksScored," "),o.xb(2),o.Dc(" ",e.TotalMarks," ")}}function be(e,t){if(1&e&&(o.Ob(0,"div"),o.zc(1,ce,7,3,"div",7),o.Nb()),2&e){const e=t.$implicit;o.xb(1),o.dc("ngIf","IT"==e.ExamType)}}function ne(e,t){if(1&e&&(o.Ob(0,"div",1),o.Ob(1,"div",2),o.Bc(2),o.Nb(),o.Ob(3,"div",3),o.Bc(4),o.Nb(),o.Ob(5,"div",3),o.Bc(6),o.Nb(),o.Nb()),2&e){const e=o.Xb().$implicit;o.xb(2),o.Dc(" ",e.SubjectName," "),o.xb(2),o.Dc(" ",e.MarksScored," "),o.xb(2),o.Dc(" ",e.TotalMarks," ")}}function se(e,t){if(1&e&&(o.Ob(0,"div"),o.zc(1,ne,7,3,"div",7),o.Nb()),2&e){const e=t.$implicit;o.xb(1),o.dc("ngIf","ET"==e.ExamType)}}function re(e,t){if(1&e&&(o.Ob(0,"div",1),o.Ob(1,"div",2),o.Bc(2),o.Nb(),o.Ob(3,"div",3),o.Bc(4),o.Nb(),o.Ob(5,"div",3),o.Bc(6),o.Nb(),o.Nb()),2&e){const e=o.Xb().$implicit;o.xb(2),o.Dc(" ",e.SubjectName," "),o.xb(2),o.Dc(" ",e.MarksScored," "),o.xb(2),o.Dc(" ",e.TotalMarks," ")}}function oe(e,t){if(1&e&&(o.Ob(0,"div"),o.zc(1,re,7,3,"div",7),o.Nb()),2&e){const e=t.$implicit;o.xb(1),o.dc("ngIf","EP"==e.ExamType)}}const ae=function(){return{margin:"20px"}},de=[{path:"",component:te,children:[{path:"dashboard",component:I},{path:"info",component:X},{path:"attendance",component:T},{path:"fee",component:z},{path:"result",component:(()=>{class e{constructor(e,t){this.resultService=e,this._router=t}ngOnInit(){this.getResult()}getResult(){this.resultService.getResultById(+localStorage.getItem("studentId")).subscribe(e=>this.resultlist=e,e=>{e instanceof n.d&&401===e.status&&(localStorage.removeItem("token"),this._router.navigate(["/auth"]))})}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(ie.a),o.Ib(r.b))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-result"]],decls:37,vars:12,consts:[["header","Internal Exam Result"],[1,"p-fluid","p-grid"],[1,"p-col-12","p-lg-4"],[1,"p-col-12","p-lg-2"],[4,"ngFor","ngForOf"],["header","External Theory Result"],["header","External Practical Result"],["class","p-fluid p-grid",4,"ngIf"]],template:function(e,t){1&e&&(o.Jb(0,"br"),o.Ob(1,"p-card",0),o.Ob(2,"div",1),o.Ob(3,"div",2),o.Ob(4,"b"),o.Bc(5,"Subject"),o.Nb(),o.Nb(),o.Ob(6,"div",3),o.Ob(7,"b"),o.Bc(8,"Marks Scored"),o.Nb(),o.Nb(),o.Ob(9,"div",3),o.Ob(10,"b"),o.Bc(11,"Total Scored"),o.Nb(),o.Nb(),o.Nb(),o.zc(12,be,2,1,"div",4),o.Nb(),o.Ob(13,"p-card",5),o.Ob(14,"div",1),o.Ob(15,"div",2),o.Ob(16,"b"),o.Bc(17,"Subject"),o.Nb(),o.Nb(),o.Ob(18,"div",3),o.Ob(19,"b"),o.Bc(20,"Marks Scored"),o.Nb(),o.Nb(),o.Ob(21,"div",3),o.Ob(22,"b"),o.Bc(23,"Total Scored"),o.Nb(),o.Nb(),o.Nb(),o.zc(24,se,2,1,"div",4),o.Nb(),o.Ob(25,"p-card",6),o.Ob(26,"div",1),o.Ob(27,"div",2),o.Ob(28,"b"),o.Bc(29,"Subject"),o.Nb(),o.Nb(),o.Ob(30,"div",3),o.Ob(31,"b"),o.Bc(32,"Marks Scored"),o.Nb(),o.Nb(),o.Ob(33,"div",3),o.Ob(34,"b"),o.Bc(35,"Total Scored"),o.Nb(),o.Nb(),o.Nb(),o.zc(36,oe,2,1,"div",4),o.Nb()),2&e&&(o.xb(1),o.xc(o.gc(9,ae)),o.xb(11),o.dc("ngForOf",t.resultlist),o.xb(1),o.xc(o.gc(10,ae)),o.xb(11),o.dc("ngForOf",t.resultlist),o.xb(1),o.xc(o.gc(11,ae)),o.xb(11),o.dc("ngForOf",t.resultlist))},directives:[d.a,c.j,c.k],styles:[""]}),e})()}]}];let le=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[r.e.forChild(de)],r.e]}),e})();var pe=i("X2Lf");let ue=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},providers:[pe.a,l.g,l.a,{provide:n.a,useClass:s.a,multi:!0}],imports:[[c.b,le,b.a]]}),e})()}}]);