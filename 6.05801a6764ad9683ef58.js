(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"305l":function(t,n,o){"use strict";o.r(n),o.d(n,"AuthModule",function(){return d});var e=o("ofXK"),u=o("tyNb"),r=o("fXoL"),i=o("7zfz"),b=o("jIHw"),p=o("Q4Mo");let a=(()=>{class t{constructor(t,n){this.router=t,this.primengConfig=n}ngOnInit(){this.primengConfig.ripple=!0}onAdmin(){this.router.navigate(["/admin"])}onFaculty(){this.router.navigate(["/faculty/dashboard"])}onStudent(){this.router.navigate(["/student/dashboard"])}onParent(){this.router.navigate(["/parent/dashboard"])}}return t.\u0275fac=function(n){return new(n||t)(r.Ib(u.a),r.Ib(i.g))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-login"]],decls:8,vars:0,consts:[[1,"p-buttonset"],["pButton","","type","button","pRipple","","label","Admin",1,"p-button-raised","p-button-rounded","p-button-danger",3,"click"],["pButton","","type","button","pRipple","","label","Faculty",1,"p-button-raised","p-button-rounded","p-button-success",3,"click"],["pButton","","type","button","pRipple","","label","Student",1,"p-button-raised","p-button-rounded","p-button-info",3,"click"],["pButton","","type","button","pRipple","","label","Parent",1,"p-button-raised","p-button-rounded","p-button-warning",3,"click"]],template:function(t,n){1&t&&(r.Ob(0,"h1"),r.wc(1,"Login Module"),r.Nb(),r.Jb(2,"br"),r.Ob(3,"span",0),r.Ob(4,"button",1),r.Vb("click",function(){return n.onAdmin()}),r.Nb(),r.Ob(5,"button",2),r.Vb("click",function(){return n.onFaculty()}),r.Nb(),r.Ob(6,"button",3),r.Vb("click",function(){return n.onStudent()}),r.Nb(),r.Ob(7,"button",4),r.Vb("click",function(){return n.onParent()}),r.Nb(),r.Nb())},directives:[b.a,p.a],styles:[""]}),t})();const c=[{path:"",component:a},{path:"login",component:a}];let s=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[u.d.forChild(c)],u.d]}),t})();var l=o("4TcP");let d=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[e.b,s,l.a]]}),t})()}}]);