(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-core-modules-page-not-found-pagenotfound-module"],{

/***/ "/XVP":
/*!********************************************************************!*\
  !*** ./src/app/core/modules/page-not-found/pagenotfound.module.ts ***!
  \********************************************************************/
/*! exports provided: PagenotfoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundModule", function() { return PagenotfoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/modules/shared.module */ "4TcP");
/* harmony import */ var _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagenotfound-routing.module */ "zi7J");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.component */ "hLcP");





class PagenotfoundModule {
}
PagenotfoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagenotfoundModule });
PagenotfoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagenotfoundModule_Factory(t) { return new (t || PagenotfoundModule)(); }, imports: [[
            app_core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagenotfoundRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagenotfoundModule, { declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]], imports: [app_core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagenotfoundRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]],
                imports: [
                    app_core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagenotfoundRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hLcP":
/*!*************************************************************************!*\
  !*** ./src/app/core/modules/page-not-found/page-not-found.component.ts ***!
  \*************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zi7J":
/*!****************************************************************************!*\
  !*** ./src/app/core/modules/page-not-found/pagenotfound-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: PagenotfoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundRoutingModule", function() { return PagenotfoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "hLcP");





const routes = [
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
class PagenotfoundRoutingModule {
}
PagenotfoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagenotfoundRoutingModule });
PagenotfoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagenotfoundRoutingModule_Factory(t) { return new (t || PagenotfoundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagenotfoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-core-modules-page-not-found-pagenotfound-module.js.map