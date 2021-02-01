(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-admin-admin-module"],{

/***/ "13Ib":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-routing.module */ "JoD2");
/* harmony import */ var app_modules_admin_pages_create_student_create_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/pages/create-student/create-student.component */ "tfYe");
/* harmony import */ var app_core_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/modules/shared.module */ "4TcP");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "kzhv");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "qV7O");
/* harmony import */ var _pages_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/create-course/create-course.component */ "7LVV");
/* harmony import */ var app_core_services_http_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/services/http/course/course.service */ "X2Lf");









class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [app_core_services_http_course_course_service__WEBPACK_IMPORTED_MODULE_7__["CourseService"]], imports: [[
            app_core_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [app_modules_admin_pages_create_student_create_student_component__WEBPACK_IMPORTED_MODULE_2__["CreateStudentComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_6__["CreateCourseComponent"]], imports: [app_core_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [app_modules_admin_pages_create_student_create_student_component__WEBPACK_IMPORTED_MODULE_2__["CreateStudentComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_6__["CreateCourseComponent"]],
                imports: [
                    app_core_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"],
                ],
                providers: [app_core_services_http_course_course_service__WEBPACK_IMPORTED_MODULE_7__["CourseService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "7LVV":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/pages/create-course/create-course.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCourseComponent", function() { return CreateCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_services_http_course_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/services/http/course/course.service */ "X2Lf");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "rEr+");






function CreateCourseComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Course Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-sortIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Course Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-sortIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateCourseComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r4.CourseId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r4.CourseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r4.CourseFee);
} }
function CreateCourseComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No course found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateCourseComponent {
    constructor(courseService, primengConfig) {
        this.courseService = courseService;
        this.primengConfig = primengConfig;
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
        this.getCourse();
    }
    getCourse() {
        this.courseService
            .getCourse()
            .subscribe((data) => (this.courses = data));
    }
}
CreateCourseComponent.ɵfac = function CreateCourseComponent_Factory(t) { return new (t || CreateCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_services_http_course_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"])); };
CreateCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateCourseComponent, selectors: [["app-create-course"]], decls: 6, vars: 1, consts: [["styleClass", "p-datatable-sm p-datatable-striped", "sortMode", "multiple", "dataKey", "id", 3, "value"], ["dt1", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pSortableColumn", "CourseId"], ["field", "CourseId"], ["pSortableColumn", "CourseName"], ["field", "CourseName"], ["pSortableColumn", "CourseFee"], ["field", "CourseFee"], ["colspan", "2"], ["colspan", "4"]], template: function CreateCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateCourseComponent_ng_template_3_Template, 12, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateCourseComponent_ng_template_4_Template, 7, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateCourseComponent_ng_template_5_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.courses);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_3__["Card"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["SortIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY291cnNlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-course',
                templateUrl: './create-course.component.html',
                styleUrls: ['./create-course.component.css']
            }]
    }], function () { return [{ type: app_core_services_http_course_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"] }]; }, null); })();


/***/ }),

/***/ "JoD2":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_modules_admin_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/admin/pages/home/home.component */ "qV7O");
/* harmony import */ var app_modules_admin_pages_create_student_create_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/admin/pages/create-student/create-student.component */ "tfYe");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "kzhv");
/* harmony import */ var _pages_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/create-course/create-course.component */ "7LVV");








const routes = [
    // { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: '', component: app_modules_admin_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], children: [
            { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'create-student', component: app_modules_admin_pages_create_student_create_student_component__WEBPACK_IMPORTED_MODULE_3__["CreateStudentComponent"] },
            { path: 'create-course', component: _pages_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_5__["CreateCourseComponent"] },
        ]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "X2Lf":
/*!*************************************************************!*\
  !*** ./src/app/core/services/http/course/course.service.ts ***!
  \*************************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CourseService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.baseUrl = 'https://mycampusapp.azurewebsites.net';
    }
    // GET Cousre list
    getCourse() {
        return this._httpClient.get(`${this.baseUrl}/api/course`); //.pipe( 
        // retry(2), // retry a failed request up to 2 times
        //  catchError(this.handleError) // the handle the error
        //  );
    }
    // GET Employee by Id
    // getEmployeeById(id: number): Observable<IEmployeeList> {
    //   return this._httpClient.get<IEmployeeList>(`${this.baseUrl}/${id}`).pipe(
    //     retry(2), // retry a failed request up to 2 times
    //     catchError(this.handleError) // the handle the error
    //   );
    // }
    //  POST new Employee
    // addEmployee(employeeData: IEmployeeList): Observable<string> {
    //   return this._httpClient.post<string>(this.baseUrl, employeeData).pipe(
    //     catchError(this.handleError) // the handle the error
    //   );
    // }
    //  PUT Employee
    // updateEmployee(employeeData: IEmployeeList): Observable<string> {
    //   return this._httpClient.put<string>(this.baseUrl, employeeData).pipe(
    //     catchError(this.handleError) // the handle the error
    //   );
    // }
    //  DELETE Employee
    // deleteEmployee(id: number): Observable<string> {
    //   return this._httpClient.delete<string>(`${this.baseUrl}/${id}`).pipe(
    //     catchError(this.handleError) // the handle the error
    //   );
    // }
    handleError(errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            //A client-side or network error occured. Handle it accordingly.
            console.error('Client side error: ' + errorResponse.error.message);
        }
        else {
            // Server side error
            // The backend returned an unsuccessful reponse code.
            // The reponse body may contain clues as to what went wrong.
            console.error('Server side error : ' +
                errorResponse.status +
                ' ' +
                errorResponse.error);
        }
        // return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('This is a problem with the service. We are notified and working on it. Please try again later.');
    }
}
CourseService.ɵfac = function CourseService_Factory(t) { return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseService, factory: CourseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kzhv":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/pages/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 5, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qV7O":
/*!************************************************************!*\
  !*** ./src/app/modules/admin/pages/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/avatar */ "+F6F");







function HomeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} }
function HomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-avatar", 5);
} }
class HomeComponent {
    constructor() { }
    ngOnInit() {
        this.items = [
            // {
            //   label: 'File',
            //   icon: 'pi pi-fw pi-file',
            //   items: [
            //     {
            //       label: 'New',
            //       icon: 'pi pi-fw pi-plus',
            //       items: [
            //         {
            //           label: 'Bookmark',
            //           icon: 'pi pi-fw pi-bookmark'
            //         },
            //         {
            //           label: 'Video',
            //           icon: 'pi pi-fw pi-video'
            //         },
            //       ]
            //     },
            //     {
            //       label: 'Delete',
            //       icon: 'pi pi-fw pi-trash'
            //     },
            //     {
            //       separator: true
            //     },
            //     {
            //       label: 'Export',
            //       icon: 'pi pi-fw pi-external-link'
            //     }
            //   ]
            // },
            // {
            //   label: 'Edit',
            //   icon: 'pi pi-fw pi-pencil',
            //   items: [
            //     {
            //       label: 'Left',
            //       icon: 'pi pi-fw pi-align-left'
            //     },
            //     {
            //       label: 'Right',
            //       icon: 'pi pi-fw pi-align-right'
            //     },
            //     {
            //       label: 'Center',
            //       icon: 'pi pi-fw pi-align-center'
            //     },
            //     {
            //       label: 'Justify',
            //       icon: 'pi pi-fw pi-align-justify'
            //     },
            //   ]
            // },
            // {
            //   label: 'Users',
            //   icon: 'pi pi-fw pi-user',
            //   items: [
            //     {
            //       label: 'New',
            //       icon: 'pi pi-fw pi-user-plus',
            //     },
            //     {
            //       label: 'Delete',
            //       icon: 'pi pi-fw pi-user-minus',
            //     },
            //     {
            //       label: 'Search',
            //       icon: 'pi pi-fw pi-users',
            //       items: [
            //         {
            //           label: 'Filter',
            //           icon: 'pi pi-fw pi-filter',
            //           items: [
            //             {
            //               label: 'Print',
            //               icon: 'pi pi-fw pi-print'
            //             }
            //           ]
            //         },
            //         {
            //           icon: 'pi pi-fw pi-bars',
            //           label: 'List'
            //         }
            //       ]
            //     }
            //   ]
            // },
            // {
            //   label: 'Events',
            //   icon: 'pi pi-fw pi-calendar',
            //   items: [
            //     {
            //       label: 'Edit',
            //       icon: 'pi pi-fw pi-pencil',
            //       items: [
            //         {
            //           label: 'Save',
            //           icon: 'pi pi-fw pi-calendar-plus'
            //         },
            //         {
            //           label: 'Delete',
            //           icon: 'pi pi-fw pi-calendar-minus'
            //         },
            //       ]
            //     },
            //     {
            //       label: 'Archieve',
            //       icon: 'pi pi-fw pi-calendar-times',
            //       items: [
            //         {
            //           label: 'Remove',
            //           icon: 'pi pi-fw pi-calendar-minus'
            //         }
            //       ]
            //     }
            //   ]
            // },
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-chart-bar',
                routerLink: ['dashboard']
            },
            {
                label: 'Add Course',
                icon: 'pi pi-fw pi-book',
                routerLink: ['create-course']
            },
            {
                label: 'Add Student',
                icon: 'pi pi-fw pi-user-plus',
                routerLink: ['create-student']
            }
        ];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 1, consts: [[3, "model"], ["pTemplate", "start"], ["pTemplate", "end"], ["src", "https://primefaces.org/primeng/showcase/assets/showcase/images/primeng.svg", "height", "40", 1, "p-mr-2"], ["type", "text", "pInputText", "", "placeholder", "Search", 1, "p-mr-4"], ["label", "P", "shape", "circle", "icon", "p-avatar-icon"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_template_1_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
    } }, directives: [primeng_menubar__WEBPACK_IMPORTED_MODULE_1__["Menubar"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], primeng_avatar__WEBPACK_IMPORTED_MODULE_5__["Avatar"]], styles: [".p-menu[_ngcontent-%COMP%]{\r\n    border-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucC1tZW51e1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tfYe":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/pages/create-student/create-student.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStudentComponent", function() { return CreateStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");



class CreateStudentComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateStudentComponent.ɵfac = function CreateStudentComponent_Factory(t) { return new (t || CreateStudentComponent)(); };
CreateStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateStudentComponent, selectors: [["app-create-student"]], decls: 2, vars: 0, consts: [["type", "text", "pInputText", ""]], template: function CreateStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);
    } }, directives: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputText"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-student',
                templateUrl: './create-student.component.html',
                styleUrls: ['./create-student.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=app-modules-admin-admin-module.js.map