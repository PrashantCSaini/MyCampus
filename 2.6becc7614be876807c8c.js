(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0308":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("oEQO"),o=r("fXoL"),i=r("tk/3");let a=(()=>{class e{constructor(e){this._httpClient=e}addAttendence(e){return this._httpClient.post(`${n.a.BASE_URL}${n.a.ATTENDENCE}`,e)}getStudentByCourse(e,t){return this._httpClient.get(`${n.a.BASE_URL}${n.a.ATTENDENCE}/GetStudentByCourse/${e}/${t}`)}getTotalLecture(e){return this._httpClient.get(`${n.a.BASE_URL}${n.a.ATTENDENCE}/GetTotalLecture/${e}`)}getPresentAttendence(e){return this._httpClient.get(`${n.a.BASE_URL}${n.a.ATTENDENCE}/GetPresentAttendence/${e}`)}getAbsentAttendence(e){return this._httpClient.get(`${n.a.BASE_URL}${n.a.ATTENDENCE}/GetAbsentAttendence/${e}`)}getAttendanceForFaculty(e,t,r,o){return this._httpClient.get(`${n.a.BASE_URL}${n.a.ATTENDENCE}/GetAttendanceForFaculty/${e}/${t}/${r}/${o}`)}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(i.b))},e.\u0275prov=o.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Dnfh:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("z6cu"),o=r("oEQO"),i=r("fXoL"),a=r("tk/3");let s=(()=>{class e{constructor(e){this._httpClient=e}getPlacementDetail(e,t){return this._httpClient.get(`${o.a.BASE_URL}${o.a.PLACEMENT}/${e}/${t}`)}addPlacement(e){return this._httpClient.post(`${o.a.BASE_URL}${o.a.PLACEMENT}`,e)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(n.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(a.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Dxrl:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("z6cu"),o=r("oEQO"),i=r("fXoL"),a=r("tk/3");let s=(()=>{class e{constructor(e){this._httpClient=e}getNotification(e,t){return this._httpClient.get(`${o.a.BASE_URL}${o.a.NOTIFICATION}/${e}/${t}`)}getNotificationForParent(){return this._httpClient.get(`${o.a.BASE_URL}${o.a.NOTIFICATION}/GetNotificationForParent`)}addNotification(e){return this._httpClient.post(`${o.a.BASE_URL}${o.a.NOTIFICATION}`,e)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(n.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(a.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},QKdN:function(e,t,r){"use strict";function n(e){var t=new Date(e),r=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2);return[t.getFullYear(),r,n].join("-")}function o(e){let t=e.substring(0,10).split("-");return new Date(+t[0],+t[1]-1,+t[2])}r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o})},SwF3:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("z6cu"),o=r("oEQO"),i=r("fXoL"),a=r("tk/3");let s=(()=>{class e{constructor(e){this._httpClient=e}getAssignmentByFacultyId(e,t,r,n){return this._httpClient.get(`${o.a.BASE_URL}${o.a.ASSIGNMENT}/${e}/${t}/${r}/${n}`)}getPendingAssignment(e,t,r){return this._httpClient.get(`${o.a.BASE_URL}${o.a.ASSIGNMENT}/GetPendingAssignment/${e}/${t}/${r}`)}getSubmittedAssignment(e,t,r){return this._httpClient.get(`${o.a.BASE_URL}${o.a.ASSIGNMENT}/GetSubmittedAssignment/${e}/${t}/${r}`)}getAssignmentById(e){return this._httpClient.get(`${o.a.BASE_URL}${o.a.ASSIGNMENT}/${e}`)}addAssignmemt(e){return this._httpClient.post(`${o.a.BASE_URL}${o.a.ASSIGNMENT}`,e)}updateMarks(e){return this._httpClient.put(`${o.a.BASE_URL}${o.a.ATTACHMENT}`,e)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(n.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(a.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Ug1E:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r("z6cu"),o=r("oEQO"),i=r("fXoL"),a=r("tk/3"),s=r("tyNb");let c=(()=>{class e{constructor(e,t){this._httpClient=e,this.router=t}loginUser(e){return this._httpClient.post(`${o.a.BASE_URL}${o.a.LOGIN}`,e)}getStudentId(e){return this._httpClient.get(`${o.a.BASE_URL}${o.a.STUDENT}/id/${e}`)}getParentId(e){return this._httpClient.get(`${o.a.BASE_URL}${o.a.PARENT}/id/${e}`)}getFacultyId(e){return this._httpClient.get(`${o.a.BASE_URL}${o.a.FACULTY}/id/${e}`)}logoutUser(){localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("id"),localStorage.removeItem("studentId"),localStorage.removeItem("courseid"),localStorage.removeItem("semester"),this.router.navigate(["/auth"])}addLogin(e){return this._httpClient.post(`${o.a.BASE_URL}${o.a.CREATE_LOGIN}`,e)}getLogin(){return this._httpClient.get(`${o.a.BASE_URL}${o.a.CREATE_LOGIN}`)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(n.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(a.b),i.Sb(s.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},X2Lf:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("z6cu"),o=r("oEQO"),i=r("fXoL"),a=r("tk/3");let s=(()=>{class e{constructor(e){this._httpClient=e}getCourse(){return this._httpClient.get(`${o.a.BASE_URL}${o.a.COURSE}`)}addCourse(e){return this._httpClient.post(`${o.a.BASE_URL}${o.a.COURSE}`,e)}deleteCourse(e){return this._httpClient.delete(`${o.a.BASE_URL}${o.a.COURSE}/${e}`)}getCourseById(e){return this._httpClient.get(`${o.a.BASE_URL}${o.a.COURSE}/${e}`)}updateCourse(e){return this._httpClient.put(`${o.a.BASE_URL}${o.a.COURSE}`,e)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(n.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(a.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"m/l6":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("z6cu"),o=r("oEQO"),i=r("fXoL"),a=r("tk/3");let s=(()=>{class e{constructor(e){this._httpClient=e}getResultById(e){return this._httpClient.get(`${o.a.BASE_URL}${o.a.RESULT}/${e}`)}addResult(e){return this._httpClient.post(`${o.a.BASE_URL}${o.a.RESULT}`,e)}deleteResult(e){return this._httpClient.delete(`${o.a.BASE_URL}${o.a.RESULT}/${e}`)}handleError(e){return e.error instanceof ErrorEvent?console.error("Client side error: "+e.error.message):console.error("Server side error : "+e.status+" "+e.error),Object(n.a)("This is a problem with the service. We are notified and working on it. Please try again later.")}}return e.\u0275fac=function(t){return new(t||e)(i.Sb(a.b))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},oEQO:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(e){return e.BASE_URL="https://mycampusapp.azurewebsites.net/api/",e.COURSE="course",e.SUBJECT="subject",e.LOGIN="login/authenticate",e.CREATE_LOGIN="applicationlogin",e.STUDENT="student",e.PARENT="parent",e.FACULTY="faculty",e.PLACEMENT="placement",e.FEE="FeePaymentDetail",e.FACULTYWISESUBJECT="facultywisesubject",e.ATTENDENCE="Attendance",e.RESULT="result",e.ASSIGNMENT="assignment",e.ATTACHMENT="attachment",e.UPLOAD="upload",e.NOTIFICATION="notification",e.STUDENTDASHBOARD="studentdashboard",e}({})},w4ga:function(e,t,r){"use strict";function n(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function s(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(a,s)}c((n=n.apply(e,t||[])).next())})}r.d(t,"a",function(){return E}),r.d(t,"b",function(){return C});var o=r("fXoL"),i=r("ofXK"),a=r("jhN1");const s=["iframe"];function c(e,t){if(1&e&&o.Jb(0,"div",3),2&e){const e=o.Xb(2);o.dc("innerHtml",e.docHtml,o.sc)}}function l(e,t){if(1&e&&(o.Ob(0,"object",4),o.Ob(1,"p"),o.Bc(2," Your browser does not support PDFs. "),o.Ob(3,"a",5),o.Bc(4,"Download the PDF"),o.Nb(),o.Bc(5,". "),o.Nb(),o.Nb()),2&e){const e=o.Xb(2);o.dc("data",e.fullUrl,o.tc),o.xb(3),o.dc("href",e.fullUrl,o.uc)}}function u(e,t){if(1&e&&(o.Mb(0),o.zc(1,c,1,1,"div",1),o.zc(2,l,6,2,"object",2),o.Lb()),2&e){const e=o.Xb();o.xb(1),o.dc("ngIf","pdf"!==e.configuredViewer),o.xb(1),o.dc("ngIf",e.fullUrl&&"pdf"===e.configuredViewer)}}function d(e,t){if(1&e){const e=o.Pb();o.Ob(0,"iframe",8,9),o.Vb("load",function(){return o.rc(e),o.Xb(2).iframeLoaded()}),o.Nb()}if(2&e){const e=o.Xb(2);o.dc("src",e.fullUrl,o.tc)}}function h(e,t){if(1&e){const e=o.Pb();o.Ob(0,"iframe",12,9),o.Vb("load",function(){return o.rc(e),o.Xb(3).iframeLoaded()}),o.Nb()}if(2&e){const e=o.Xb(3);o.dc("src",e.fullUrl,o.tc)}}function f(e,t){if(1&e&&(o.Ob(0,"div",10),o.Jb(1,"div"),o.zc(2,h,2,1,"iframe",11),o.Nb()),2&e){const e=o.Xb(2);o.xb(1),o.yc("background-color","popout-hide"===e.disableContent?"#fff":"transparent"),o.Ab("overlay-full","all"===e.disableContent)("overlay-popout-google","google"===e.configuredViewer&&("popout"===e.disableContent||"popout-hide"===e.disableContent))("overlay-popout-office","office"===e.configuredViewer&&("popout"===e.disableContent||"popout-hide"===e.disableContent)),o.xb(1),o.dc("ngIf",e.fullUrl)}}function g(e,t){if(1&e&&(o.Mb(0),o.zc(1,d,2,1,"iframe",6),o.zc(2,f,3,9,"div",7),o.Lb()),2&e){const e=o.Xb();o.xb(1),o.dc("ngIf",e.fullUrl&&"none"===e.disableContent),o.xb(1),o.dc("ngIf","none"!==e.disableContent)}}const p=e=>{const t=e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);return t&&{href:e,protocol:t[1],host:t[2],hostname:t[3],port:t[4],pathname:t[5],search:t[6],hash:t[7]}},v=e=>{var t;let r=!1;try{r=b()?!(null===(t=null==e?void 0:e.contentWindow)||void 0===t?void 0:t.document):!(null==e?void 0:e.contentDocument)}catch(n){}return r},b=()=>/MSIE (\d+\.\d+);/.test(navigator.userAgent)||navigator.userAgent.indexOf("Trident/")>-1,m=(e,t="google",r="",n="")=>{switch(t){case"google":n="https://docs.google.com/gview?url=%URL%&embedded=true";break;case"office":n="https://view.officeapps.live.com/op/embed.aspx?src=%URL%";break;case"pdf":n=""}const o="google"===t||"office"===t||"url"===t,i=e.indexOf("/")?encodeURIComponent(e):e;let a=n?n.replace("%URL%",i):e;return r&&o&&"url"!==t&&(a=`${a}${r.startsWith("&")?"":"&"}${r}`),{url:a,externalViewer:o}};let E=(()=>{class e{constructor(e,t){this.domSanitizer=e,this.ngZone=t,this.loaded=new o.n,this.url="",this.queryParams="",this.viewerUrl="",this.googleCheckInterval=3e3,this.googleMaxChecks=5,this.disableContent="none",this.googleCheckContentLoaded=!0,this.fullUrl=null,this.externalViewer=!1,this.docHtml="",this.configuredViewer="google",this.shouldCheckIframe=!1}ngAfterViewInit(){var e,t;if(this.shouldCheckIframe){const r=null===(t=null===(e=this.iframes)||void 0===e?void 0:e.first)||void 0===t?void 0:t.nativeElement;r&&(this.shouldCheckIframe=!1,this.reloadIframe(r))}}ngOnDestroy(){this.checkIFrameSubscription&&this.checkIFrameSubscription.unsubscribe()}ngOnChanges(e){return n(this,void 0,void 0,function*(){if(e&&e.viewer&&(e.viewer.isFirstChange||e.viewer.currentValue!==e.viewer.previousValue)&&("google"!==this.viewer&&"office"!==this.viewer&&"mammoth"!==this.viewer&&"pdf"!==this.viewer&&"url"!==this.viewer&&console.error(`Unsupported viewer: '${this.viewer}'. Supported viewers: google, office, mammoth and pdf`),this.configuredViewer=this.viewer),e.url&&e.url.currentValue!==e.url.previousValue||e.viewer&&e.viewer.currentValue!==e.viewer.previousValue||e.viewerUrl&&e.viewerUrl.currentValue!==e.viewerUrl.previousValue){let e=m(this.url,this.configuredViewer,this.queryParams,this.viewerUrl);if(this.externalViewer=e.externalViewer,e.externalViewer&&this.overrideLocalhost&&(e=>{const t=p(this.url),r=(null==t?void 0:t.hostname)||"";return["localhost","127.0.0.1","","::1"].includes(r)||r.startsWith("192.168.")||r.startsWith("10.0.")||r.endsWith(".local")})()){const t=((e,t)=>{const r=p(e),n=p(t);return r&&n?e.replace(r.port?`${r.hostname}:${r.port}`:r.hostname,n.port?`${n.hostname}:${n.port}`:n.hostname):e})(this.url,this.overrideLocalhost);e=m(t,this.configuredViewer,this.queryParams,this.viewerUrl)}this.docHtml="",this.checkIFrameSubscription&&this.checkIFrameSubscription.unsubscribe(),this.url?e.externalViewer||"url"===this.configuredViewer?(this.fullUrl=this.domSanitizer.bypassSecurityTrustResourceUrl(e.url),"google"===this.configuredViewer&&this.googleCheckContentLoaded&&this.ngZone.runOutsideAngular(()=>{var e,t;const r=null===(t=null===(e=this.iframes)||void 0===e?void 0:e.first)||void 0===t?void 0:t.nativeElement;r?this.reloadIframe(r):this.shouldCheckIframe=!0})):"mammoth"===this.configuredViewer&&(this.docHtml=yield(t=this.url,n(void 0,void 0,void 0,function*(){mammoth||console.error("Please install mammoth and make sure mammoth.browser.min.js is loaded.");const e=yield(e=>new Promise((t,r)=>{try{const r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="blob",r.onload=()=>{const e=new FileReader;e.readAsArrayBuffer(r.response),e.onloadend=()=>{t(e.result)}},r.send()}catch(n){r(`error while retrieving file ${e}.`)}}))(t);return(yield mammoth.convertToHtml({arrayBuffer:e})).value}))):this.fullUrl=null}var t})}reloadIframe(e){this.checkIFrameSubscription=(()=>{let e=null,t=0;return{subscribe:(r,n=3e3,o=5)=>{if(!v(r))return e=setInterval(()=>{t++,t>=o&&clearInterval(e),(e=>{e&&(console.log("reloading.."),e.src=e.src)})(r)},n),e;e&&clearInterval(e)},unsubscribe:()=>{e&&clearInterval(e)}}})(),this.checkIFrameSubscription.subscribe(e,this.googleCheckInterval,this.googleMaxChecks)}iframeLoaded(){var e,t;const r=null===(t=null===(e=this.iframes)||void 0===e?void 0:e.first)||void 0===t?void 0:t.nativeElement;r&&v(r)&&(this.loaded.emit(null),this.checkIFrameSubscription&&this.checkIFrameSubscription.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(a.b),o.Ib(o.z))},e.\u0275cmp=o.Cb({type:e,selectors:[["ngx-doc-viewer"]],viewQuery:function(e,t){if(1&e&&o.Fc(s,!0),2&e){let e;o.pc(e=o.Wb())&&(t.iframes=e)}},inputs:{url:"url",queryParams:"queryParams",viewerUrl:"viewerUrl",googleCheckInterval:"googleCheckInterval",googleMaxChecks:"googleMaxChecks",disableContent:"disableContent",googleCheckContentLoaded:"googleCheckContentLoaded",viewer:"viewer",overrideLocalhost:"overrideLocalhost"},outputs:{loaded:"loaded"},features:[o.vb],decls:2,vars:2,consts:[[4,"ngIf"],[3,"innerHtml",4,"ngIf"],["type","application/pdf","width","100%","height","100%",3,"data",4,"ngIf"],[3,"innerHtml"],["type","application/pdf","width","100%","height","100%",3,"data"],[3,"href"],["id","iframe-doc-viewer","frameBorder","0",3,"src","load",4,"ngIf"],["class","container",4,"ngIf"],["id","iframe-doc-viewer","frameBorder","0",3,"src","load"],["iframe",""],[1,"container"],["id","iframe","frameBorder","0",3,"src","load",4,"ngIf"],["id","iframe","frameBorder","0",3,"src","load"]],template:function(e,t){1&e&&(o.zc(0,u,3,2,"ng-container",0),o.zc(1,g,3,2,"ng-container",0)),2&e&&(o.dc("ngIf",!t.externalViewer),o.xb(1),o.dc("ngIf",t.externalViewer))},directives:[i.k],styles:["[_nghost-%COMP%] {\n        display: block;\n      }\n      .container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: relative;\n      }\n      .overlay-popout-google[_ngcontent-%COMP%] {\n        width: 40px;\n        height: 40px;\n        right: 26px;\n        top: 11.5px;\n        position: absolute;\n        z-index: 1000;\n      }\n      .overlay-popout-office[_ngcontent-%COMP%] {\n        width: 100px;\n        height: 20px;\n        right: 0;\n        bottom: 0;\n        position: absolute;\n        z-index: 1000;\n      }\n      .overlay-full[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        right: 0;\n        top: 0;\n        position: absolute;\n        z-index: 1000;\n      }\n      iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }"]}),e})(),C=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[i.b]]}),e})()}}]);