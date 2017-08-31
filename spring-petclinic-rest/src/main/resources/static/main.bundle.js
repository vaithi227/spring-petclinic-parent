webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/parts/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parts_welcome_welcome_component__ = __webpack_require__("./src/app/parts/welcome/welcome.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */




var appRoutes = [
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_3__parts_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__parts_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__parts_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n\n<nav class=\"navbar navbar-default \" role=\"navigation\">\n  <div class=\"container-fluid\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"#\"><span></span></a>\n  </div>\n\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a routerLink=\"welcome\" title=\"home page\">\n          <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\n          <span>Home</span>\n        </a>\n      </li>\n\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n           aria-haspopup=\"true\" aria-expanded=\"false\">Owners<span class=\"caret\"></span>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/owners\"><span class=\"glyphicon glyphicon-search\"\n                                            aria-hidden=\"true\"></span><span> All</span></a></li>\n          <li><a routerLink=\"/owners/add\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span><span> Add New</span></a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n           aria-haspopup=\"true\" aria-expanded=\"false\">Veterinarians<span class=\"caret\"></span>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/vets\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span><span> All</span></a>\n          </li>\n          <li><a routerLink=\"/vets/add\"><span class=\"glyphicon glyphicon-plus\"\n                                              aria-hidden=\"true\"></span><span> Add New</span></a></li>\n        </ul>\n      </li>\n      <li>\n        <a routerLink=\"/pettypes\" routerLinkActive=\"active\" title=\"pettypes\">\n          <span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\"></span>\n          <span>Pet Types</span>\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"/specialties\" routerLinkActive=\"active\" title=\"specialties\">\n          <span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\"></span>\n          <span>Specialties</span>\n        </a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n\n</div>\n\n\n\n<router-outlet></router-outlet>\n\n<br/>\n<br/>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center\"><img src=\"../../../assets/images/angular.png\"\n                                         alt=\"Angular\" height=\"80\" width=\"80\"/>\n      <img src=\"../../../assets/images/spring-pivotal-logo.png\"\n           alt=\"Sponsored by Pivotal\"/></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__owners_owners_module__ = __webpack_require__("./src/app/owners/owners.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pets_pets_module__ = __webpack_require__("./src/app/pets/pets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visits_visits_module__ = __webpack_require__("./src/app/visits/visits.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pettypes_pettypes_module__ = __webpack_require__("./src/app/pettypes/pettypes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vets_vets_module__ = __webpack_require__("./src/app/vets/vets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__parts_parts_module__ = __webpack_require__("./src/app/parts/parts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__specialties_specialies_module__ = __webpack_require__("./src/app/specialties/specialies.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_md2__ = __webpack_require__("./node_modules/md2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__owners_owners_module__["a" /* OwnersModule */],
            __WEBPACK_IMPORTED_MODULE_7__pets_pets_module__["a" /* PetsModule */],
            __WEBPACK_IMPORTED_MODULE_8__visits_visits_module__["a" /* VisitsModule */],
            __WEBPACK_IMPORTED_MODULE_9__pettypes_pettypes_module__["a" /* PetTypesModule */],
            __WEBPACK_IMPORTED_MODULE_10__vets_vets_module__["a" /* VetsModule */],
            __WEBPACK_IMPORTED_MODULE_12__specialties_specialies_module__["a" /* SpecialiesModule */],
            __WEBPACK_IMPORTED_MODULE_11__parts_parts_module__["a" /* PartsModule */],
            __WEBPACK_IMPORTED_MODULE_14_md2__["a" /* Md2Module */],
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/owners/owner-add/owner-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/owners/owner-add/owner-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>\n      New Owner\n    </h2>\n    <form (ngSubmit)=\"onSubmit(ownerForm.value)\" #ownerForm=\"ngForm\" class=\"form-horizontal\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"owner.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"firstName.dirty && firstName.valid\" [class.has-error]=\"firstName.dirty &&  !firstName.valid\">\n        <label for=\"firstName\" class=\"col-sm-2 control-label\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"owner.firstName\" minlength=\"2\" required name=\"firstName\" #firstName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"firstName.valid\" [class.glyphicon-remove]=\"!firstName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('required')\">First name is required</span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('minlength')\">First name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"lastName.dirty && lastName.valid\" [class.has-error]=\"lastName.dirty && !lastName.valid\">\n        <label for=\"lastName\" class=\"col-sm-2 control-label\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"owner.lastName\" name=\"lastName\" minlength=\"2\" required #lastName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"lastName.valid\" [class.glyphicon-remove]=\"!lastName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('required')\">Last name is required</span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('minlength')\">Last name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"address.dirty && address.valid\" [class.has-error]=\"address.dirty && !address.valid\">\n        <label for=\"address\" class=\"col-sm-2 control-label\">Address</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"owner.address\" name=\"address\" required #address=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"address.valid\" [class.glyphicon-remove]=\"!address.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"address.dirty && address.hasError('required')\">Address is required</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"city.dirty && city.valid\" [class.has-error]=\"city.dirty && !city.valid\">\n        <label for=\"city\" class=\"col-sm-2 control-label\">City</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"owner.city\" name=\"city\" required #city=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"city.valid\" [class.glyphicon-remove]=\"!city.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"city.dirty && city.hasError('required')\">City is required</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"telephone.dirty && telephone.valid\" [class.has-error]=\"telephone.dirty && !telephone.valid\">\n        <label for=\"telephone\" class=\"col-sm-2 control-label\">Telephone</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"telephone\" [(ngModel)]=\"owner.telephone\" name=\"telephone\" required maxlength=\"10\" pattern=\"^[0-9]{0,10}$\" #telephone=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"telephone.valid\" [class.glyphicon-remove]=\"!telephone.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('required')\">Phone number is required</span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('maxlength')\">Phone number cannot be more than 10 digits long</span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('pattern')\" >Phone number only accept digits</span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnersList()\">Back</button>\n          <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"!ownerForm.valid\">Add Owner</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/owners/owner-add/owner-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__owner_service__ = __webpack_require__("./src/app/owners/owner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerAddComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */



var OwnerAddComponent = (function () {
    function OwnerAddComponent(ownerService, router) {
        this.ownerService = ownerService;
        this.router = router;
        this.owner = {};
    }
    OwnerAddComponent.prototype.ngOnInit = function () {
    };
    OwnerAddComponent.prototype.onSubmit = function (owner) {
        var _this = this;
        owner.id = null;
        this.ownerService.addOwner(owner).subscribe(function (new_owner) {
            _this.owner = new_owner;
            _this.gotoOwnersList();
        }, function (error) { return _this.errorMessage = error; });
    };
    OwnerAddComponent.prototype.gotoOwnersList = function () {
        this.router.navigate(['/owners']);
    };
    return OwnerAddComponent;
}());
OwnerAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-owner-add',
        template: __webpack_require__("./src/app/owners/owner-add/owner-add.component.html"),
        styles: [__webpack_require__("./src/app/owners/owner-add/owner-add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__owner_service__["a" /* OwnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__owner_service__["a" /* OwnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], OwnerAddComponent);

var _a, _b;
//# sourceMappingURL=owner-add.component.js.map

/***/ }),

/***/ "./src/app/owners/owner-detail/owner-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/owners/owner-detail/owner-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Owner Information</h2>\n\n\n    <table class=\"table table-striped\">\n      <tr>\n        <th>Name</th>\n        <td><b>{{owner.firstName}} {{owner.lastName}}</b></td>\n      </tr>\n      <tr>\n        <th>Address</th>\n        <td>{{owner.address}}</td>\n      </tr>\n      <tr>\n        <th>City</th>\n        <td>{{owner.city}}</td>\n      </tr>\n      <tr>\n        <th>Telephone</th>\n        <td>{{owner.telephone}}</td>\n      </tr>\n    </table>\n\n    <button class=\"btn btn-default\" (click)=\"gotoOwnersList()\">< Back</button>\n    <button class=\"btn btn-default\" (click)=\"editOwner()\">Edit Owner</button>\n    <button class=\"btn btn-default\" (click)=\"addPet(owner)\">Add New Pet</button>\n\n    <br/>\n    <br/>\n    <br/>\n    <h2>Pets and Visits</h2>\n\n    <table class=\"table table-striped\">\n      <tr>\n        <app-pet-list *ngFor=\"let pet of owner.pets\" [pet]=\"pet\"></app-pet-list>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/owners/owner-detail/owner-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__owner_service__ = __webpack_require__("./src/app/owners/owner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerDetailComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var OwnerDetailComponent = (function () {
    function OwnerDetailComponent(route, router, ownerService) {
        this.route = route;
        this.router = router;
        this.ownerService = ownerService;
        this.owner = {};
    }
    OwnerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ownerId = this.route.snapshot.params['id'];
        this.ownerService.getOwnerById(ownerId).subscribe(function (owner) { return _this.owner = owner; }, function (error) { return _this.errorMessage = error; });
    };
    OwnerDetailComponent.prototype.gotoOwnersList = function () {
        this.router.navigate(['/owners']);
    };
    OwnerDetailComponent.prototype.editOwner = function () {
        this.router.navigate(['/owners', this.owner.id, 'edit']);
    };
    OwnerDetailComponent.prototype.addPet = function (owner) {
        this.router.navigate(['/owners', owner.id, 'pets', 'add']);
    };
    return OwnerDetailComponent;
}());
OwnerDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-owner-detail',
        template: __webpack_require__("./src/app/owners/owner-detail/owner-detail.component.html"),
        styles: [__webpack_require__("./src/app/owners/owner-detail/owner-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__owner_service__["a" /* OwnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__owner_service__["a" /* OwnerService */]) === "function" && _c || Object])
], OwnerDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=owner-detail.component.js.map

/***/ }),

/***/ "./src/app/owners/owner-edit/owner-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/owners/owner-edit/owner-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>\n      Edit Owner\n    </h2>\n    <form (ngSubmit)=\"onSubmit(ownerForm.value)\" #ownerForm=\"ngForm\" class=\"form-horizontal\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"owner.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"firstName.valid\" [class.has-error]=\"!firstName.valid\">\n        <label for=\"firstName\" class=\"col-sm-2 control-label\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"owner.firstName\" minlength=\"2\" required name=\"firstName\" #firstName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"firstName.valid\" [class.glyphicon-remove]=\"!firstName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('required')\">First name is required</span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('minlength')\">First name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"lastName.valid\" [class.has-error]=\"!lastName.valid\">\n        <label for=\"lastName\" class=\"col-sm-2 control-label\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"owner.lastName\" name=\"lastName\" minlength=\"2\" required #lastName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"lastName.valid\" [class.glyphicon-remove]=\"!lastName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('required')\">Last name is required</span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('minlength')\">Last name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"address.valid\" [class.has-error]=\"!address.valid\">\n        <label for=\"address\" class=\"col-sm-2 control-label\">Address</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"owner.address\" name=\"address\" required #address=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"address.valid\" [class.glyphicon-remove]=\"!address.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"address.dirty && address.hasError('required')\">Address is required</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"city.valid\" [class.has-error]=\"!city.valid\">\n        <label for=\"city\" class=\"col-sm-2 control-label\">City</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"owner.city\" name=\"city\" required #city=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"city.valid\" [class.glyphicon-remove]=\"!city.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"city.dirty && city.hasError('required')\">City is required</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"telephone.valid\" [class.has-error]=\"!telephone.valid\">\n        <label for=\"telephone\" class=\"col-sm-2 control-label\">Telephone</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"telephone\" [(ngModel)]=\"owner.telephone\" name=\"telephone\" required maxlength=\"10\" pattern=\"^[0-9]{0,10}$\" #telephone=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"telephone.valid\" [class.glyphicon-remove]=\"!telephone.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('required')\">Phone number is required</span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('maxlength')\">Phone number cannot be more than 10 digits long</span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('pattern')\" >Phone number only accept digits</span>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button class=\"btn btn-default\" (click)=\"gotoOwnerDetail(owner)\">Back</button>\n          <button type=\"submit\" [disabled]=\"!ownerForm.valid\" class=\"btn btn-default\">Update Owner</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/owners/owner-edit/owner-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__owner_service__ = __webpack_require__("./src/app/owners/owner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerEditComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var OwnerEditComponent = (function () {
    function OwnerEditComponent(ownerService, route, router) {
        this.ownerService = ownerService;
        this.route = route;
        this.router = router;
        this.owner = {};
    }
    OwnerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ownerId = this.route.snapshot.params['id'];
        this.ownerService.getOwnerById(ownerId).subscribe(function (owner) { return _this.owner = owner; }, function (error) { return _this.errorMessage = error; });
    };
    OwnerEditComponent.prototype.onSubmit = function (owner) {
        var that = this;
        this.ownerService.updateOwner(owner.id.toString(), owner).subscribe(get_result, get_error);
        function get_error(error) {
            console.log(error);
            console.log('error catched');
            return this.errorMessage = error;
        }
        function get_result(update_status) {
            console.log(update_status);
            if (update_status.status === 204) {
                console.log('update success');
                that.gotoOwnerDetail(owner);
            }
            else {
                return console.log('update failed');
            }
        }
    };
    ;
    OwnerEditComponent.prototype.gotoOwnerDetail = function (owner) {
        this.router.navigate(['/owners', owner.id]);
    };
    return OwnerEditComponent;
}());
OwnerEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-owner-edit',
        template: __webpack_require__("./src/app/owners/owner-edit/owner-edit.component.html"),
        styles: [__webpack_require__("./src/app/owners/owner-edit/owner-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__owner_service__["a" /* OwnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__owner_service__["a" /* OwnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OwnerEditComponent);

var _a, _b, _c;
//# sourceMappingURL=owner-edit.component.js.map

/***/ }),

/***/ "./src/app/owners/owner-list/owner-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/owners/owner-list/owner-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>Owners</h2>\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped\">\n        <thead>\n        <tr>\n          <th>Name</th>\n          <th>Address</th>\n          <th>City</th>\n          <th>Telephone</th>\n          <th>Pets</th>\n        </tr>\n        </thead>\n\n        <tbody>\n        <!-- <a  routerLink=\"/owners/{{owner.id}}\" routerLinkActive=\"active\" -->\n        <tr *ngFor=\"let owner of owners\">\n          <td class=\"ownerFullName\"><a routerLink=\"/owners/{{owner.id}}\" routerLinkActive=\"active\"\n                                       (click)=\"onSelect(owner)\">{{owner.firstName}} {{owner.lastName}}</a></td>\n          <td>{{owner.address}}</td>\n          <td>{{owner.city}}</td>\n          <td>{{owner.telephone}}</td>\n          <td>\n        <tr *ngFor=\"let pet of owner.pets\">\n          {{pet.name}}\n        </tr>\n        </td>\n        </tr>\n        </tbody>\n      </table>\n      <div>\n        <button class=\"btn btn-default\" (click)=\"addOwner()\">Add Owner</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/owners/owner-list/owner-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__owner_service__ = __webpack_require__("./src/app/owners/owner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerListComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var OwnerListComponent = (function () {
    function OwnerListComponent(router, ownerService) {
        this.router = router;
        this.ownerService = ownerService;
    }
    OwnerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ownerService.getOwners().subscribe(function (owners) { return _this.owners = owners; }, function (error) { return _this.errorMessage = error; });
    };
    OwnerListComponent.prototype.onSelect = function (owner) {
        this.router.navigate(['/owners', owner.id]);
    };
    OwnerListComponent.prototype.addOwner = function () {
        this.router.navigate(['/owners/add']);
    };
    return OwnerListComponent;
}());
OwnerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-owner-list',
        template: __webpack_require__("./src/app/owners/owner-list/owner-list.component.html"),
        styles: [__webpack_require__("./src/app/owners/owner-list/owner-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__owner_service__["a" /* OwnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__owner_service__["a" /* OwnerService */]) === "function" && _b || Object])
], OwnerListComponent);

var _a, _b;
//# sourceMappingURL=owner-list.component.js.map

/***/ }),

/***/ "./src/app/owners/owner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerService; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var OwnerService = (function () {
    function OwnerService(_http) {
        this._http = _http;
        this.entity_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].REST_API_URL + 'owners';
    }
    OwnerService.prototype.getOwners = function () {
        return this._http.get(this.entity_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OwnerService.prototype.getOwnerById = function (owner_id) {
        return this._http.get((this.entity_url + '/' + owner_id))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OwnerService.prototype.addOwner = function (owner) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return this._http.post(this.entity_url, JSON.stringify(owner), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OwnerService.prototype.updateOwner = function (owner_id, owner) {
        var body = JSON.stringify(owner);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': ' application/json;charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.put((this.entity_url + '/' + owner_id), body, options)
            .map(function (response) { return response; })
            .catch(this.handleError); // TODO parse response header when error ?
    };
    OwnerService.prototype.deleteOwner = function (owner_id) {
        return this._http.delete((this.entity_url + '/' + owner_id))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OwnerService.prototype.handleError = function (error) {
        console.log('handleError log: ');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            if (!(error.text() === '')) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                console.log('binding errors header not empty');
                errMsg = error.headers.get('errors').toString();
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    return OwnerService;
}());
OwnerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], OwnerService);

var _a;
//# sourceMappingURL=owner.service.js.map

/***/ }),

/***/ "./src/app/owners/owners-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owner_detail_owner_detail_component__ = __webpack_require__("./src/app/owners/owner-detail/owner-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__owner_list_owner_list_component__ = __webpack_require__("./src/app/owners/owner-list/owner-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__owner_edit_owner_edit_component__ = __webpack_require__("./src/app/owners/owner-edit/owner-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__owner_add_owner_add_component__ = __webpack_require__("./src/app/owners/owner-add/owner-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pets_pet_add_pet_add_component__ = __webpack_require__("./src/app/pets/pet-add/pet-add.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnersRoutingModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */







var ownerRoutes = [
    { path: 'owners', component: __WEBPACK_IMPORTED_MODULE_3__owner_list_owner_list_component__["a" /* OwnerListComponent */] },
    { path: 'owners/add', component: __WEBPACK_IMPORTED_MODULE_5__owner_add_owner_add_component__["a" /* OwnerAddComponent */] },
    { path: 'owners/:id', component: __WEBPACK_IMPORTED_MODULE_2__owner_detail_owner_detail_component__["a" /* OwnerDetailComponent */] },
    { path: 'owners/:id/edit', component: __WEBPACK_IMPORTED_MODULE_4__owner_edit_owner_edit_component__["a" /* OwnerEditComponent */] },
    { path: 'owners/:id/pets/add', component: __WEBPACK_IMPORTED_MODULE_6__pets_pet_add_pet_add_component__["a" /* PetAddComponent */] }
];
var OwnersRoutingModule = (function () {
    function OwnersRoutingModule() {
    }
    return OwnersRoutingModule;
}());
OwnersRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(ownerRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], OwnersRoutingModule);

//# sourceMappingURL=owners-routing.module.js.map

/***/ }),

/***/ "./src/app/owners/owners.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__owner_service__ = __webpack_require__("./src/app/owners/owner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owner_list_owner_list_component__ = __webpack_require__("./src/app/owners/owner-list/owner-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__owner_detail_owner_detail_component__ = __webpack_require__("./src/app/owners/owner-detail/owner-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__owner_add_owner_add_component__ = __webpack_require__("./src/app/owners/owner-add/owner-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__owner_edit_owner_edit_component__ = __webpack_require__("./src/app/owners/owner-edit/owner-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__owners_routing_module__ = __webpack_require__("./src/app/owners/owners-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pets_pets_module__ = __webpack_require__("./src/app/pets/pets.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnersModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */










var OwnersModule = (function () {
    function OwnersModule() {
    }
    return OwnersModule;
}());
OwnersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__owners_routing_module__["a" /* OwnersRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__pets_pets_module__["a" /* PetsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__owner_list_owner_list_component__["a" /* OwnerListComponent */],
            __WEBPACK_IMPORTED_MODULE_3__owner_detail_owner_detail_component__["a" /* OwnerDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__owner_edit_owner_edit_component__["a" /* OwnerEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__owner_add_owner_add_component__["a" /* OwnerAddComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__owner_service__["a" /* OwnerService */]]
    })
], OwnersModule);

//# sourceMappingURL=owners.module.js.map

/***/ }),

/***/ "./src/app/parts/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/parts/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<h1>Oops! Page not found !</h1>\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Not Found - 404 error</h2>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <img class=\"img-responsive\" src=\"../../../assets/images/pets.png\" alt=\"pets logo\"/>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/parts/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("./src/app/parts/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("./src/app/parts/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "./src/app/parts/parts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/parts/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__ = __webpack_require__("./src/app/parts/welcome/welcome.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartsModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */





var PartsModule = (function () {
    function PartsModule() {
    }
    return PartsModule;
}());
PartsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__["a" /* WelcomeComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__["a" /* WelcomeComponent */]
        ]
    })
], PartsModule);

//# sourceMappingURL=parts.module.js.map

/***/ }),

/***/ "./src/app/parts/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/parts/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<h1>Welcome to Petclinic</h1>\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Welcome</h2>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <img class=\"img-responsive\" src=\"../../../assets/images/pets.png\" alt=\"pets logo\"/>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/parts/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("./src/app/parts/welcome/welcome.component.html"),
        styles: [__webpack_require__("./src/app/parts/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "./src/app/pets/pet-add/pet-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/pets/pet-add/pet-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>\n      Add Pet\n    </h2>\n    <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit(petForm.value)\" #petForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"pet.id\" name=\"id\"/>\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"owner\" [(ngModel)]=\"pet.owner\" name=\"owner\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"owner\" class=\"col-sm-2 control-label\">Owner</label>\n        <div class=\"col-sm-10\">\n          <input id=\"owner_name\" name=\"owner_name\" class=\"form-control\" type=\"text\"\n                 value=\"{{ current_owner.firstName }} {{ current_owner.lastName }}\" readonly/>\n        </div>\n      </div>\n      <br/>\n      <div class=\"form-group \">\n        <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n        <div class=\"col-sm-10\">\n          <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.name\"/>\n        </div>\n      </div>\n      <div class=\"form-group \">\n        <label for=\"birthDate\" class=\"col-sm-2 control-label\">Birth Date</label>\n        <!--\n        <div class=\"col-sm-10\">\n          <input id=\"birthDate\" name=\"birthDate\" class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.birthDate\"/>\n        </div>\n        -->\n        <md2-datepicker name=\"birthDate\"\n                        [(ngModel)]=\"pet.birthDate\"\n                        [required]=\"true\"\n                        [disabled]=\"false\"\n                        [openOnFocus]=\"true\"\n                        [isOpen]=\"false\"\n                        [type]=\"date\"\n                        [mode]=\"auto\"\n                        [container]=\"inline\"\n                        [format]=\"yyyy/MM/dd\"\n                        #dateControl=\"ngModel\">\n        </md2-datepicker>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"form-group \">\n          <label for=\"type\" class=\"col-sm-2 control-label\">Type </label>\n          <div class=\"col-sm-10\">\n            <select id=\"type\" name=\"type\" class=\"form-control\" [(ngModel)]=\"pet.type\">\n              <option *ngFor=\"let type of pet_types\"\n                      [ngValue]=\"type\">{{ type.name }}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <br/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnerDetail()\">< Back</button>\n          <button class=\"btn btn-default\" type=\"submit\">Save Pet</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pets/pet-add/pet-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pettypes_pettype__ = __webpack_require__("./src/app/pettypes/pettype.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pettypes_pettype___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pettypes_pettype__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pettypes_pettype_service__ = __webpack_require__("./src/app/pettypes/pettype.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pet_service__ = __webpack_require__("./src/app/pets/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__owners_owner_service__ = __webpack_require__("./src/app/owners/owner.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetAddComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */






var PetAddComponent = (function () {
    function PetAddComponent(ownerService, petService, petTypeService, router, route) {
        this.ownerService = ownerService;
        this.petService = petService;
        this.petTypeService = petTypeService;
        this.router = router;
        this.route = route;
        this.added_success = false;
        this.pet = {};
        this.current_owner = {};
        this.current_type = {};
        this.pet_types = [];
    }
    PetAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.petTypeService.getPetTypes().subscribe(function (pettypes) { return _this.pet_types = pettypes; }, function (error) { return _this.errorMessage = error; });
        var ownerId = this.route.snapshot.params['id'];
        this.ownerService.getOwnerById(ownerId).subscribe(function (response) {
            _this.current_owner = response;
        }, function (error) { return _this.errorMessage = error; });
    };
    PetAddComponent.prototype.onSubmit = function (pet) {
        var _this = this;
        pet.id = null;
        pet.owner = this.current_owner;
        // format output from datepicker to short string yyyy/mm/dd format
        pet.birthDate = new Date(pet.birthDate).toISOString().substring(0, 10).replace(/-/g, '/');
        this.petService.addPet(pet).subscribe(function (new_pet) {
            _this.pet = new_pet;
            _this.added_success = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    PetAddComponent.prototype.gotoOwnerDetail = function () {
        this.router.navigate(['/owners', this.current_owner.id]);
    };
    return PetAddComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pettypes_pettype__["PetType"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pettypes_pettype__["PetType"]) === "function" && _a || Object)
], PetAddComponent.prototype, "current_type", void 0);
PetAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-pet-add',
        template: __webpack_require__("./src/app/pets/pet-add/pet-add.component.html"),
        styles: [__webpack_require__("./src/app/pets/pet-add/pet-add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__owners_owner_service__["a" /* OwnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__owners_owner_service__["a" /* OwnerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__pet_service__["a" /* PetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__pettypes_pettype_service__["a" /* PetTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pettypes_pettype_service__["a" /* PetTypeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], PetAddComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=pet-add.component.js.map

/***/ }),

/***/ "./src/app/pets/pet-edit/pet-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/pets/pet-edit/pet-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>\n      Pet\n    </h2>\n    <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit(petForm.value)\" #petForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"pet.id\" name=\"id\"/>\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"owner\" [(ngModel)]=\"pet.owner\" name=\"owner\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"owner\" class=\"col-sm-2 control-label\">Owner</label>\n        <div class=\"col-sm-10\">\n          <input id=\"owner_name\" name=\"owner_name\" class=\"form-control\" type=\"text\"\n                 value=\"{{ current_owner.firstName }} {{ current_owner.lastName }}\" readonly/>\n        </div>\n      </div>\n      <br/>\n      <div class=\"form-group \">\n        <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n        <div class=\"col-sm-10\">\n          <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.name\"/>\n        </div>\n      </div>\n      <div class=\"form-group \">\n        <label for=\"birthDate\" class=\"col-sm-2 control-label\">Birth Date</label>\n        <!--\n        <div class=\"col-sm-10\">\n          <input id=\"birthDate\" name=\"birthDate\" class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.birthDate\"/>\n        </div>\n        -->\n        <md2-datepicker name=\"birthDate\"\n                        [(ngModel)]=\"pet.birthDate\"\n                        [required]=\"true\"\n                        [disabled]=\"false\"\n                        [openOnFocus]=\"true\"\n                        [isOpen]=\"false\"\n                        [type]=\"date\"\n                        [mode]=\"auto\"\n                        [container]=\"inline\"\n                        [format]=\"yyyy/MM/dd\"\n                        #dateControl=\"ngModel\">\n        </md2-datepicker>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"form-group \">\n          <label for=\"type\" class=\"col-sm-2 control-label\">Type </label>\n          <div class=\"col-sm-10\">\n            <div class=\"col-sm-2\">\n              <input id=\"type1\" name=\"type1\" class=\"form-control\" type=\"text\" value=\"{{ current_type.name }}\" readonly/>\n            </div>\n            <div class=\"col-sm-8\">\n              <select id=\"type\" name=\"type\" class=\"form-control\" [(ngModel)]=\"current_type\">\n                <option *ngFor=\"let type of pet_types\"\n                        [selected]=\"type.id == current_type.id ? true : null\"\n                        [ngValue]=\"type\">{{ type.name }}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <br/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnerDetail(pet.owner)\">< Back</button>\n          <button class=\"btn btn-default\" type=\"submit\">Update Pet</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pets/pet-edit/pet-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pet_service__ = __webpack_require__("./src/app/pets/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pettypes_pettype__ = __webpack_require__("./src/app/pettypes/pettype.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pettypes_pettype___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pettypes_pettype__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pettypes_pettype_service__ = __webpack_require__("./src/app/pettypes/pettype.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetEditComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */





var PetEditComponent = (function () {
    function PetEditComponent(petService, petTypeService, router, route) {
        this.petService = petService;
        this.petTypeService = petTypeService;
        this.router = router;
        this.route = route;
        this.pet = {};
        this.current_owner = {};
        this.current_type = {};
        this.pet_types = [];
    }
    PetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.petTypeService.getPetTypes().subscribe(function (pettypes) { return _this.pet_types = pettypes; }, function (error) { return _this.errorMessage = error; });
        var petId = this.route.snapshot.params['id'];
        this.petService.getPetById(petId).subscribe(function (pet) {
            _this.pet = pet;
            _this.current_owner = _this.pet.owner;
            _this.current_type = _this.pet.type;
        }, function (error) { return _this.errorMessage = error; });
    };
    PetEditComponent.prototype.onSubmit = function (pet) {
        var _this = this;
        pet.type = this.current_type;
        var that = this;
        // format output from datepicker to short string yyyy/mm/dd format, and timezone correct
        var tzoffset = (new Date()).getTimezoneOffset() * 60000;
        var pet_date_as_time = new Date(pet.birthDate).getTime();
        pet.birthDate = new Date(pet_date_as_time - tzoffset).toISOString().substring(0, 10).replace(/-/g, '/');
        this.petService.updatePet(pet.id.toString(), pet).subscribe(get_result, function (error) { return _this.errorMessage = error; });
        function get_result(update_status) {
            if (update_status.status === 204) {
                console.log('update success');
                that.gotoOwnerDetail(pet.owner);
            }
            else {
                return console.log('update failed');
            }
        }
    };
    PetEditComponent.prototype.gotoOwnerDetail = function (owner) {
        this.router.navigate(['/owners', owner.id]);
    };
    return PetEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__pettypes_pettype__["PetType"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pettypes_pettype__["PetType"]) === "function" && _a || Object)
], PetEditComponent.prototype, "current_type", void 0);
PetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-pet-edit',
        template: __webpack_require__("./src/app/pets/pet-edit/pet-edit.component.html"),
        styles: [__webpack_require__("./src/app/pets/pet-edit/pet-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pet_service__["a" /* PetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__pettypes_pettype_service__["a" /* PetTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__pettypes_pettype_service__["a" /* PetTypeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], PetEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pet-edit.component.js.map

/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<table [hidden]=\"delete_success\" class=\"table table-striped\">\n  <tr>\n    <td valign=\"top\">\n      <dl class=\"dl-horizontal\">\n        <dt>Name</dt>\n        <dd>{{pet.name}}</dd>\n        <dt>Birth Date</dt>\n        <dd>{{pet.birthDate}}</dd>\n        <dt>Type</dt>\n        <dd *ngIf=\"!delete_success\">{{pet.type.name}}</dd>\n        <button class=\"btn btn-default\" (click)=\"editPet(pet)\">Edit Pet</button>\n        <button class=\"btn btn-default\" (click)=\"deletePet(pet)\">Delete Pet</button>\n        <button class=\"btn btn-default\" (click)=\"addVisit(pet)\">Add Visit</button>\n\n      </dl>\n    </td>\n    <td valign=\"top\">\n      <app-visit-list [visits]=\"pet.visits\"></app-visit-list>\n    </td>\n  </tr>\n\n</table>\n"

/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pet_service__ = __webpack_require__("./src/app/pets/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pet__ = __webpack_require__("./src/app/pets/pet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pet__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetListComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var PetListComponent = (function () {
    function PetListComponent(router, petService) {
        this.router = router;
        this.petService = petService;
        this.delete_success = false;
        this.pet = {};
    }
    PetListComponent.prototype.ngOnInit = function () {
        // this.petService.getPets().subscribe(
        //   response => this.pets = response,
        //   error => this.errorMessage = <any> error);
    };
    PetListComponent.prototype.editPet = function (pet) {
        this.router.navigate(['/pets', pet.id, 'edit']);
    };
    PetListComponent.prototype.deletePet = function (pet) {
        var _this = this;
        this.petService.deletePet(pet.id.toString()).subscribe(function (response) {
            _this.response_status = response;
            if (_this.response_status === 204) {
                _this.delete_success = true;
                _this.pet = {};
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    PetListComponent.prototype.addVisit = function (pet) {
        this.router.navigate(['/pets', pet.id, 'visits', 'add']);
    };
    return PetListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__pet__["Pet"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pet__["Pet"]) === "function" && _a || Object)
], PetListComponent.prototype, "pet", void 0);
PetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-pet-list',
        template: __webpack_require__("./src/app/pets/pet-list/pet-list.component.html"),
        styles: [__webpack_require__("./src/app/pets/pet-list/pet-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pet_service__["a" /* PetService */]) === "function" && _c || Object])
], PetListComponent);

var _a, _b, _c;
//# sourceMappingURL=pet-list.component.js.map

/***/ }),

/***/ "./src/app/pets/pet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetService; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var PetService = (function () {
    function PetService(_http) {
        this._http = _http;
        this.entity_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].REST_API_URL + 'pets';
    }
    PetService.prototype.getPets = function () {
        return this._http.get(this.entity_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PetService.prototype.getPetById = function (pet_id) {
        return this._http.get(this.entity_url + '/' + pet_id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PetService.prototype.addPet = function (pet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        var body = JSON.stringify(pet);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return this._http.post(this.entity_url, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PetService.prototype.updatePet = function (pet_id, pet) {
        var body = JSON.stringify(pet);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': ' application/json;charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.put((this.entity_url + '/' + pet_id), body, options)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    PetService.prototype.deletePet = function (pet_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': ' application/json;charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.entity_url + '/' + pet_id, options)
            .map(function (response) { return response.status; })
            .catch(this.handleError);
    };
    PetService.prototype.handleError = function (error) {
        console.log('handleError log: ');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Response */]) {
            if (!(error.text() === '')) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                console.log('binding errors header not empty');
                errMsg = error.headers.get('errors').toString();
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(errMsg);
    };
    return PetService;
}());
PetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object])
], PetService);

var _a;
//# sourceMappingURL=pet.service.js.map

/***/ }),

/***/ "./src/app/pets/pet.ts":
/***/ (function(module, exports) {

/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
//# sourceMappingURL=pet.js.map

/***/ }),

/***/ "./src/app/pets/pets-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pet_list_pet_list_component__ = __webpack_require__("./src/app/pets/pet-list/pet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visits_visit_add_visit_add_component__ = __webpack_require__("./src/app/visits/visit-add/visit-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pet_edit_pet_edit_component__ = __webpack_require__("./src/app/pets/pet-edit/pet-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pet_add_pet_add_component__ = __webpack_require__("./src/app/pets/pet-add/pet-add.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsRoutingModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */






var petRoutes = [
    { path: 'pets', component: __WEBPACK_IMPORTED_MODULE_1__pet_list_pet_list_component__["a" /* PetListComponent */] },
    { path: 'pets/add', component: __WEBPACK_IMPORTED_MODULE_5__pet_add_pet_add_component__["a" /* PetAddComponent */] },
    {
        path: 'pets/:id',
        children: [
            {
                path: 'edit',
                component: __WEBPACK_IMPORTED_MODULE_4__pet_edit_pet_edit_component__["a" /* PetEditComponent */]
            },
            {
                path: 'visits\/add',
                component: __WEBPACK_IMPORTED_MODULE_3__visits_visit_add_visit_add_component__["a" /* VisitAddComponent */]
            }
        ]
    }
];
var PetsRoutingModule = (function () {
    function PetsRoutingModule() {
    }
    return PetsRoutingModule;
}());
PetsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(petRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], PetsRoutingModule);

//# sourceMappingURL=pets-routing.module.js.map

/***/ }),

/***/ "./src/app/pets/pets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pets_routing_module__ = __webpack_require__("./src/app/pets/pets-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pet_list_pet_list_component__ = __webpack_require__("./src/app/pets/pet-list/pet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pet_service__ = __webpack_require__("./src/app/pets/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visits_visits_module__ = __webpack_require__("./src/app/visits/visits.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pet_edit_pet_edit_component__ = __webpack_require__("./src/app/pets/pet-edit/pet-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pet_add_pet_add_component__ = __webpack_require__("./src/app/pets/pet-add/pet-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_md2__ = __webpack_require__("./node_modules/md2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */










var PetsModule = (function () {
    function PetsModule() {
    }
    return PetsModule;
}());
PetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_md2__["a" /* Md2Module */],
            __WEBPACK_IMPORTED_MODULE_2__pets_routing_module__["a" /* PetsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__visits_visits_module__["a" /* VisitsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__pet_list_pet_list_component__["a" /* PetListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pet_edit_pet_edit_component__["a" /* PetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pet_add_pet_add_component__["a" /* PetAddComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__pet_list_pet_list_component__["a" /* PetListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pet_edit_pet_edit_component__["a" /* PetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pet_add_pet_add_component__["a" /* PetAddComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__pet_service__["a" /* PetService */]]
    })
], PetsModule);

//# sourceMappingURL=pets.module.js.map

/***/ }),

/***/ "./src/app/pettypes/pettype.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetTypeService; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var PetTypeService = (function () {
    function PetTypeService(_http) {
        this._http = _http;
        this.entity_url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].REST_API_URL + 'pettypes';
    }
    PetTypeService.prototype.getPetTypes = function () {
        return this._http.get(this.entity_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PetTypeService.prototype.getPetTypeById = function (type_id) {
        return this._http.get((this.entity_url + '/' + type_id))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PetTypeService.prototype.updatePetType = function (type_id, petType) {
        var body = JSON.stringify(petType);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': ' application/json;charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.put((this.entity_url + '/' + type_id), body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PetTypeService.prototype.addPetType = function (petType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var body = JSON.stringify(petType);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return this._http.post(this.entity_url, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PetTypeService.prototype.deletePetType = function (type_id) {
        return this._http.delete(this.entity_url + '/' + type_id)
            .map(function (response) { return response.status; })
            .catch(this.handleError);
    };
    PetTypeService.prototype.handleError = function (error) {
        console.log('handleError log: ');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            if (!(error.text() === '')) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                console.log('binding errors header not empty');
                errMsg = error.headers.get('errors').toString();
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(errMsg);
    };
    return PetTypeService;
}());
PetTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], PetTypeService);

var _a;
//# sourceMappingURL=pettype.service.js.map

/***/ }),

/***/ "./src/app/pettypes/pettype.ts":
/***/ (function(module, exports) {

/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
//# sourceMappingURL=pettype.js.map

/***/ }),

/***/ "./src/app/pettypes/pettypes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pettype_service__ = __webpack_require__("./src/app/pettypes/pettype.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetTypesModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */




var PetTypesModule = (function () {
    function PetTypesModule() {
    }
    return PetTypesModule;
}());
PetTypesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_3__pettype_service__["a" /* PetTypeService */]]
    })
], PetTypesModule);

//# sourceMappingURL=pettypes.module.js.map

/***/ }),

/***/ "./src/app/specialties/specialies.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specialty_service__ = __webpack_require__("./src/app/specialties/specialty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__specialty_list_specialty_list_component__ = __webpack_require__("./src/app/specialties/specialty-list/specialty-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__specialties_routing_module__ = __webpack_require__("./src/app/specialties/specialties-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__specialty_add_specialty_add_component__ = __webpack_require__("./src/app/specialties/specialty-add/specialty-add.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialiesModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */







var SpecialiesModule = (function () {
    function SpecialiesModule() {
    }
    return SpecialiesModule;
}());
SpecialiesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__specialties_routing_module__["a" /* SpecialtiesRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__specialty_list_specialty_list_component__["a" /* SpecialtyListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__specialty_add_specialty_add_component__["a" /* SpecialtyAddComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__specialty_list_specialty_list_component__["a" /* SpecialtyListComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__specialty_service__["a" /* SpecialtyService */]]
    })
], SpecialiesModule);

//# sourceMappingURL=specialies.module.js.map

/***/ }),

/***/ "./src/app/specialties/specialties-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialty_list_specialty_list_component__ = __webpack_require__("./src/app/specialties/specialty-list/specialty-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialtiesRoutingModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */



var specialtyRoutes = [
    { path: 'specialties', component: __WEBPACK_IMPORTED_MODULE_2__specialty_list_specialty_list_component__["a" /* SpecialtyListComponent */] }
    // {path: 'specialties/add', component: SpecialtyAddComponent},
    // {path: 'specialties/:id', component: SpecialtyDetailComponent},
    // {path: 'specialties/:id/edit', component: SpecialtyEditComponent}
];
var SpecialtiesRoutingModule = (function () {
    function SpecialtiesRoutingModule() {
    }
    return SpecialtiesRoutingModule;
}());
SpecialtiesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(specialtyRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], SpecialtiesRoutingModule);

//# sourceMappingURL=specialties-routing.module.js.map

/***/ }),

/***/ "./src/app/specialties/specialty-add/specialty-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/specialties/specialty-add/specialty-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>New Specialty</h2>\n    <form id=\"specialty\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(specialtyForm.value)\" #specialtyForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"specialty.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <div class=\"form-group \">\n          <label class=\"col-sm-1 control-label\">Name</label>\n          <div class=\"col-sm-6\">\n            <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"specialty.name\"/>\n          </div>\n          <button class=\"btn btn-default\" type=\"submit\">Save</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/specialties/specialty-add/specialty-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialtyAddComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpecialtyAddComponent = (function () {
    function SpecialtyAddComponent() {
        this.specialty = {};
    }
    SpecialtyAddComponent.prototype.ngOnInit = function () {
    };
    SpecialtyAddComponent.prototype.onSubmit = function (specialty) {
        // TODO not completed
    };
    return SpecialtyAddComponent;
}());
SpecialtyAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-specialty-add',
        template: __webpack_require__("./src/app/specialties/specialty-add/specialty-add.component.html"),
        styles: [__webpack_require__("./src/app/specialties/specialty-add/specialty-add.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SpecialtyAddComponent);

//# sourceMappingURL=specialty-add.component.js.map

/***/ }),

/***/ "./src/app/specialties/specialty-list/specialty-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/specialties/specialty-list/specialty-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Specialties</h2>\n\n    <table id=\"vets\" class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let specialty of specialties; let element_id=index\">\n        <td>\n          {{ specialty.id }}\n        </td>\n        <td>\n          <input [readonly]=\"!is_edit\" type=\"text\" class=\"form-control\"  [id]=element_id [(ngModel)]=\"specialty.name\" name=\"spec_name\" />\n        </td>\n        <td>\n          <button class=\"btn btn-default\" (click)=\"editSpecialty(specialty)\">{{current_state}}</button>\n          <button class=\"btn btn-default\" (click)=\"deleteSpecialty(specialty)\">Delete</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <div *ngIf=\"is_insert\">\n      <app-specialty-add>...</app-specialty-add>\n    </div>\n    <div>\n      <button class=\"btn btn-default\" (click)=\"gotoHome()\">Home</button>\n      <button class=\"btn btn-default\" (click)=\"addSpecialty()\"> Add </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/specialties/specialty-list/specialty-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__specialty_service__ = __webpack_require__("./src/app/specialties/specialty.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialtyListComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */



var SpecialtyListComponent = (function () {
    function SpecialtyListComponent(specService, router) {
        this.specService = specService;
        this.router = router;
        this.is_edit = false;
        this.is_insert = false;
        this.current_state = 'Edit';
        this.specialties = [];
    }
    SpecialtyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specService.getSpecialties().subscribe(function (specialties) { return _this.specialties = specialties; }, function (error) { return _this.errorMessage = error; });
    };
    SpecialtyListComponent.prototype.gotoHome = function () {
        this.router.navigate(['/welcome']);
    };
    SpecialtyListComponent.prototype.addSpecialty = function () {
        if (this.is_insert) {
            this.is_insert = false;
        }
        else {
            this.is_insert = true;
        }
    };
    SpecialtyListComponent.prototype.editSpecialty = function (specialty) {
        var _this = this;
        if (this.is_edit) {
            this.specService.updateSpecialty(specialty.id.toString(), specialty).subscribe(function (response) {
                if (response.status === 204) {
                    console.log('update success');
                    _this.is_edit = false;
                    _this.current_state = 'Edit';
                }
                else {
                    console.log('update uncomplete, response status: ' + response.status);
                    _this.is_edit = false;
                    _this.current_state = 'Edit';
                }
            }, function (error) {
                console.log('error catched');
                console.log(error);
                return _this.errorMessage = error;
            });
        }
        else {
            this.is_edit = true;
            this.current_state = 'Update';
        }
    };
    SpecialtyListComponent.prototype.deleteSpecialty = function (specialty) {
        var _this = this;
        this.specService.deleteSpecialty(specialty.id.toString()).subscribe(function (response) {
            _this.response_status = response;
            if (_this.response_status === 204) {
                _this.specialties = _this.specialties.filter(function (current_item) { return !(current_item.id === specialty.id); });
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    return SpecialtyListComponent;
}());
SpecialtyListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-specialty-list',
        template: __webpack_require__("./src/app/specialties/specialty-list/specialty-list.component.html"),
        styles: [__webpack_require__("./src/app/specialties/specialty-list/specialty-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__specialty_service__["a" /* SpecialtyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__specialty_service__["a" /* SpecialtyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SpecialtyListComponent);

var _a, _b;
//# sourceMappingURL=specialty-list.component.js.map

/***/ }),

/***/ "./src/app/specialties/specialty.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialtyService; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var SpecialtyService = (function () {
    function SpecialtyService(_http) {
        this._http = _http;
        this.entity_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].REST_API_URL + 'specialties';
    }
    SpecialtyService.prototype.getSpecialties = function () {
        return this._http.get(this.entity_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SpecialtyService.prototype.getSpecialtyById = function (spec_id) {
        return this._http.get((this.entity_url + '/' + spec_id))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SpecialtyService.prototype.addSpecialty = function (specialty) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return this._http.post(this.entity_url, JSON.stringify(specialty), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SpecialtyService.prototype.updateSpecialty = function (spec_id, specialty) {
        var body = JSON.stringify(specialty);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': ' application/json;charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.put((this.entity_url + '/' + spec_id), body, options)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    SpecialtyService.prototype.deleteSpecialty = function (spec_id) {
        return this._http.delete((this.entity_url + '/' + spec_id))
            .map(function (response) { return response.status; })
            .catch(this.handleError);
    };
    SpecialtyService.prototype.handleError = function (error) {
        console.log('handleError log: ');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Response */]) {
            if (!(error.text() === '')) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                console.log('binding errors header not empty');
                errMsg = error.headers.get('errors').toString();
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(errMsg);
    };
    return SpecialtyService;
}());
SpecialtyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object])
], SpecialtyService);

var _a;
//# sourceMappingURL=specialty.service.js.map

/***/ }),

/***/ "./src/app/vets/vet-add/vet-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/vets/vet-add/vet-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<p>\n  vet-add works!\n</p>\n"

/***/ }),

/***/ "./src/app/vets/vet-add/vet-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VetAddComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */

var VetAddComponent = (function () {
    function VetAddComponent() {
    }
    VetAddComponent.prototype.ngOnInit = function () {
    };
    return VetAddComponent;
}());
VetAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-vet-add',
        template: __webpack_require__("./src/app/vets/vet-add/vet-add.component.html"),
        styles: [__webpack_require__("./src/app/vets/vet-add/vet-add.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VetAddComponent);

//# sourceMappingURL=vet-add.component.js.map

/***/ }),

/***/ "./src/app/vets/vet-edit/vet-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/vets/vet-edit/vet-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<p>\n  vet-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/vets/vet-edit/vet-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VetEditComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */

var VetEditComponent = (function () {
    function VetEditComponent() {
    }
    VetEditComponent.prototype.ngOnInit = function () {
    };
    return VetEditComponent;
}());
VetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-vet-edit',
        template: __webpack_require__("./src/app/vets/vet-edit/vet-edit.component.html"),
        styles: [__webpack_require__("./src/app/vets/vet-edit/vet-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VetEditComponent);

//# sourceMappingURL=vet-edit.component.js.map

/***/ }),

/***/ "./src/app/vets/vet-list/vet-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/vets/vet-list/vet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Veterinarians</h2>\n\n    <table id=\"vets\" class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Specialties</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let vet of vets\">\n        <td>\n          {{ vet.firstName }} {{ vet.lastName }}\n        </td>\n        <td>\n          <div *ngFor=\"let spec of vet.specialties\">\n            {{ spec.name }}\n          </div>\n        </td>\n        <td>\n          <button class=\"btn btn-default\" (click)=\"editVet(vet)\">Edit Vet</button>\n          <button class=\"btn btn-default\" (click)=\"deleteVet(vet)\">Delete Vet</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <div>\n      <button class=\"btn btn-default\" (click)=\"gotoHome()\">Home</button>\n      <button class=\"btn btn-default\" (click)=\"addVet()\">Add Vet</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/vets/vet-list/vet-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vet_service__ = __webpack_require__("./src/app/vets/vet.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VetListComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */


var VetListComponent = (function () {
    function VetListComponent(vetService) {
        this.vetService = vetService;
        this.vets = [];
    }
    VetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vetService.getVets().subscribe(function (vets) { return _this.vets = vets; }, function (error) { return _this.errorMessage = error; });
    };
    VetListComponent.prototype.gotoHome = function () {
        // TODO not completed
    };
    VetListComponent.prototype.addVet = function () {
        // TODO not completed
    };
    return VetListComponent;
}());
VetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-vet-list',
        template: __webpack_require__("./src/app/vets/vet-list/vet-list.component.html"),
        styles: [__webpack_require__("./src/app/vets/vet-list/vet-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vet_service__["a" /* VetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vet_service__["a" /* VetService */]) === "function" && _a || Object])
], VetListComponent);

var _a;
//# sourceMappingURL=vet-list.component.js.map

/***/ }),

/***/ "./src/app/vets/vet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VetService; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var VetService = (function () {
    function VetService(_http) {
        this._http = _http;
        this.entity_url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].REST_API_URL + 'vets';
    }
    VetService.prototype.getVets = function () {
        return this._http.get(this.entity_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    VetService.prototype.handleError = function (error) {
        console.log('handleError log: ');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Response */]) {
            if (!(error.text() === '')) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                console.log('binding errors header not empty');
                errMsg = error.headers.get('errors').toString();
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(errMsg);
    };
    return VetService;
}());
VetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object])
], VetService);

var _a;
//# sourceMappingURL=vet.service.js.map

/***/ }),

/***/ "./src/app/vets/vets-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vet_list_vet_list_component__ = __webpack_require__("./src/app/vets/vet-list/vet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vet_add_vet_add_component__ = __webpack_require__("./src/app/vets/vet-add/vet-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vet_edit_vet_edit_component__ = __webpack_require__("./src/app/vets/vet-edit/vet-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VetsRoutingModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */





var vetRoutes = [
    { path: 'vets', component: __WEBPACK_IMPORTED_MODULE_1__vet_list_vet_list_component__["a" /* VetListComponent */] },
    { path: 'vets/add', component: __WEBPACK_IMPORTED_MODULE_2__vet_add_vet_add_component__["a" /* VetAddComponent */] },
    { path: 'vets/:id/edit', component: __WEBPACK_IMPORTED_MODULE_3__vet_edit_vet_edit_component__["a" /* VetEditComponent */] }
];
var VetsRoutingModule = (function () {
    function VetsRoutingModule() {
    }
    return VetsRoutingModule;
}());
VetsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(vetRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], VetsRoutingModule);

//# sourceMappingURL=vets-routing.module.js.map

/***/ }),

/***/ "./src/app/vets/vets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vet_list_vet_list_component__ = __webpack_require__("./src/app/vets/vet-list/vet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vet_service__ = __webpack_require__("./src/app/vets/vet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vets_routing_module__ = __webpack_require__("./src/app/vets/vets-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vet_edit_vet_edit_component__ = __webpack_require__("./src/app/vets/vet-edit/vet-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vet_add_vet_add_component__ = __webpack_require__("./src/app/vets/vet-add/vet-add.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VetsModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */








var VetsModule = (function () {
    function VetsModule() {
    }
    return VetsModule;
}());
VetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__vets_routing_module__["a" /* VetsRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__vet_list_vet_list_component__["a" /* VetListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__vet_edit_vet_edit_component__["a" /* VetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_7__vet_add_vet_add_component__["a" /* VetAddComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__vet_list_vet_list_component__["a" /* VetListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__vet_edit_vet_edit_component__["a" /* VetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_7__vet_add_vet_add_component__["a" /* VetAddComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__vet_service__["a" /* VetService */]]
    })
], VetsModule);

//# sourceMappingURL=vets.module.js.map

/***/ }),

/***/ "./src/app/visits/visit-add/visit-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/visits/visit-add/visit-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>New Visit</h2>\n\n    <b>Pet</b>\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Birth Date</th>\n        <th>Type</th>\n        <th>Owner</th>\n      </tr>\n      </thead>\n      <tr>\n        <td>{{ current_pet.name }}</td>\n        <td>{{ current_pet.birthDate }}</td>\n        <td>{{ current_pet_type.name }}</td>\n        <td>{{ current_owner.firstName }} {{ current_owner.lastName }}</td>\n      </tr>\n\n    </table>\n\n    <form id=\"visit\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(visitForm.value)\" #visitForm=\"ngForm\">\n\n      <div class=\"form-group has-feedback\">\n\n        <div class=\"form-group \">\n          <label class=\"col-sm-2 control-label\">Date</label>\n          <div class=\"col-sm-10\">\n            <!--\n            <input id=\"date\" name=\"date\" class=\"form-control\" type=\"text\" [(ngModel)]=\"visit.date\"/>\n            <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            -->\n            <md2-datepicker name=\"date\"\n                            placeholder=\"Select Date\"\n                            [(ngModel)]=\"visit.date\"\n                            [required]=\"true\"\n                            [disabled]=\"false\"\n                            [openOnFocus]=\"true\"\n                            [isOpen]=\"false\"\n                            [type]=\"date\"\n                            [mode]=\"auto\"\n                            [container]=\"inline\"\n                            [format]=\"yyyy/MM/dd\"\n                            #dateControl=\"ngModel\">\n            </md2-datepicker>\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label class=\"col-sm-2 control-label\">Description</label>\n          <div class=\"col-sm-10\">\n            <input id=\"description\" name=\"description\" class=\"form-control\" type=\"text\"\n                   [(ngModel)]=\"visit.description\"/>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <input type=\"hidden\" name=\"id\" id=\"id\" [(ngModel)]=\"visit.id\"/>\n          <input type=\"hidden\" name=\"pet\" id=\"pet\" [(ngModel)]=\"visit.pet\"/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnerDetail()\">Back</button>\n          <button class=\"btn btn-default\" type=\"submit\">Add Visit</button>\n        </div>\n      </div>\n    </form>\n\n    <br/>\n    <div class=\"col-12 text-left\">\n      <p>\n        <b>Previous Visits</b>\n      </p>\n    </div>\n    <br/>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 text-center\">\n          <app-visit-list [visits]=\"current_pet.visits\"></app-visit-list>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/visits/visit-add/visit-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visit_service__ = __webpack_require__("./src/app/visits/visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pets_pet_service__ = __webpack_require__("./src/app/pets/pet.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitAddComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var VisitAddComponent = (function () {
    function VisitAddComponent(visitService, petService, router, route) {
        this.visitService = visitService;
        this.petService = petService;
        this.router = router;
        this.route = route;
        this.added_success = false;
        this.visit = {};
        this.current_pet = {};
        this.current_owner = {};
        this.current_pet_type = {};
    }
    VisitAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.parent);
        var petId = this.route.snapshot.params['id'];
        this.petService.getPetById(petId).subscribe(function (response) {
            _this.current_pet = response;
            _this.visit.pet = _this.current_pet;
            _this.current_pet_type = _this.current_pet.type;
            _this.current_owner = _this.current_pet.owner;
        }, function (error) { return _this.errorMessage = error; });
    };
    VisitAddComponent.prototype.onSubmit = function (visit) {
        var _this = this;
        visit.id = null;
        var that = this;
        // format output from datepicker to short string yyyy/mm/dd format
        visit.date = new Date(visit.date).toISOString().substring(0, 10).replace(/-/g, '/');
        this.visitService.addVisit(visit).subscribe(function (new_visit) {
            _this.visit = new_visit;
            _this.added_success = true;
            that.gotoOwnerDetail();
        }, function (error) { return _this.errorMessage = error; });
    };
    VisitAddComponent.prototype.gotoOwnerDetail = function () {
        this.router.navigate(['/owners', this.current_owner.id]);
    };
    return VisitAddComponent;
}());
VisitAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-visit-add',
        template: __webpack_require__("./src/app/visits/visit-add/visit-add.component.html"),
        styles: [__webpack_require__("./src/app/visits/visit-add/visit-add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__visit_service__["a" /* VisitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__visit_service__["a" /* VisitService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__pets_pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pets_pet_service__["a" /* PetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], VisitAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=visit-add.component.js.map

/***/ }),

/***/ "./src/app/visits/visit-edit/visit-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/visits/visit-edit/visit-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Edit Visit</h2>\n\n    <b>Pet</b>\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Birth Date</th>\n        <th>Type</th>\n        <th>Owner</th>\n      </tr>\n      </thead>\n      <tr>\n        <td>{{ current_pet.name }}</td>\n        <td>{{ current_pet.birthDate }}</td>\n        <td>{{ current_pet_type.name }}</td>\n        <td>{{ current_owner.firstName }} {{ current_owner.lastName }}</td>\n      </tr>\n\n    </table>\n\n    <form id=\"visit\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(visitForm.value)\" #visitForm=\"ngForm\">\n\n      <div class=\"form-group has-feedback\">\n\n        <div class=\"form-group \">\n          <label class=\"col-sm-2 control-label\">Date</label>\n          <div class=\"col-sm-10\">\n            <!--\n            <input id=\"date\" name=\"date\" class=\"form-control\" type=\"text\" [(ngModel)]=\"visit.date\"/>\n            <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            -->\n            <md2-datepicker name=\"date\"\n                            [(ngModel)]=\"visit.date\"\n                            [required]=\"true\"\n                            [disabled]=\"false\"\n                            [openOnFocus]=\"true\"\n                            [isOpen]=\"false\"\n                            [type]=\"date\"\n                            [mode]=\"auto\"\n                            [container]=\"inline\"\n                            [format]=\"yyyy/MM/dd\"\n                            #dateControl=\"ngModel\">\n            </md2-datepicker>\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label class=\"col-sm-2 control-label\">Description</label>\n          <div class=\"col-sm-10\">\n            <input id=\"description\" name=\"description\" class=\"form-control\" type=\"text\"\n                   [(ngModel)]=\"visit.description\"/>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <input type=\"hidden\" name=\"id\" id=\"id\" [(ngModel)]=\"visit.id\"/>\n          <input type=\"hidden\" name=\"pet\" id=\"pet\" [(ngModel)]=\"visit.pet\"/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnerDetail()\">Back</button>\n          <button class=\"btn btn-default\" type=\"submit\">Update Visit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/visits/visit-edit/visit-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visit_service__ = __webpack_require__("./src/app/visits/visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitEditComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */



var VisitEditComponent = (function () {
    function VisitEditComponent(visitService, route, router) {
        this.visitService = visitService;
        this.route = route;
        this.router = router;
        this.update_success = false;
        this.visit = {};
        this.current_pet = {};
        this.current_owner = {};
        this.current_pet_type = {};
    }
    VisitEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var visitId = this.route.snapshot.params['id'];
        this.visitService.getVisitById(visitId).subscribe(function (response) {
            _this.visit = response;
            _this.current_pet = _this.visit.pet;
            _this.current_pet_type = _this.current_pet.type;
            _this.current_owner = _this.current_pet.owner;
        }, function (error) { return _this.errorMessage = error; });
    };
    VisitEditComponent.prototype.onSubmit = function (visit) {
        var _this = this;
        visit.pet = this.current_pet;
        var that = this;
        // format output from datepicker to short string yyyy/mm/dd format, and timezone correct
        var tzoffset = (new Date()).getTimezoneOffset() * 60000;
        var visit_date_as_time = new Date(visit.date).getTime();
        visit.date = new Date(visit_date_as_time - tzoffset).toISOString().substring(0, 10).replace(/-/g, '/');
        this.visitService.updateVisit(visit.id.toString(), visit).subscribe(get_result, function (error) { return _this.errorMessage = error; });
        function get_result(update_status) {
            if (update_status.status === 204) {
                console.log('update success');
                that.gotoOwnerDetail();
            }
            else {
                return console.log('update failed');
            }
        }
    };
    VisitEditComponent.prototype.gotoOwnerDetail = function () {
        this.router.navigate(['/owners', this.current_owner.id]);
    };
    return VisitEditComponent;
}());
VisitEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-visit-edit',
        template: __webpack_require__("./src/app/visits/visit-edit/visit-edit.component.html"),
        styles: [__webpack_require__("./src/app/visits/visit-edit/visit-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__visit_service__["a" /* VisitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__visit_service__["a" /* VisitService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], VisitEditComponent);

var _a, _b, _c;
//# sourceMappingURL=visit-edit.component.js.map

/***/ }),

/***/ "./src/app/visits/visit-list/visit-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/visits/visit-list/visit-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<table [hidden]=\"no_visits\" class=\" table table-condensed\">\n  <thead>\n  <tr>\n    <th>Visit Date</th>\n    <th>Description</th>\n    <th>Actions</th>\n  </tr>\n  </thead>\n  <tr *ngFor=\"let visit of visits\">\n    <td>{{visit.date}}</td>\n    <td>{{visit.description}}</td>\n    <td>\n      <button class=\"btn btn-default\" (click)=\"editVisit(visit)\">Edit Visit</button>\n      <button class=\"btn btn-default\" (click)=\"deleteVisit(visit)\">Delete Visit</button>\n    </td>\n  </tr>\n</table>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/visits/visit-list/visit-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visit_service__ = __webpack_require__("./src/app/visits/visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitListComponent; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */



var VisitListComponent = (function () {
    function VisitListComponent(router, visitService) {
        this.router = router;
        this.visitService = visitService;
        this.no_visits = false;
        this.visits = [];
    }
    VisitListComponent.prototype.ngOnInit = function () {
    };
    VisitListComponent.prototype.editVisit = function (visit) {
        this.router.navigate(['/visits', visit.id, 'edit']);
    };
    VisitListComponent.prototype.deleteVisit = function (visit) {
        var _this = this;
        this.visitService.deleteVisit(visit.id.toString()).subscribe(function (response) {
            _this.response_status = response;
            if (_this.response_status === 204) {
                console.log('delete success');
                _this.visits.splice(_this.visits.indexOf(visit), 1);
                if (_this.visits.length === 0) {
                    _this.no_visits = true;
                }
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    return VisitListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Array)
], VisitListComponent.prototype, "visits", void 0);
VisitListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-visit-list',
        template: __webpack_require__("./src/app/visits/visit-list/visit-list.component.html"),
        styles: [__webpack_require__("./src/app/visits/visit-list/visit-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__visit_service__["a" /* VisitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__visit_service__["a" /* VisitService */]) === "function" && _b || Object])
], VisitListComponent);

var _a, _b;
//# sourceMappingURL=visit-list.component.js.map

/***/ }),

/***/ "./src/app/visits/visit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitService; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Vitaliy Fedoriv
 */




var VisitService = (function () {
    function VisitService(_http) {
        this._http = _http;
        this.entity_url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].REST_API_URL + 'visits';
    }
    VisitService.prototype.getVisits = function () {
        return this._http.get(this.entity_url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    VisitService.prototype.getVisitById = function (visit_id) {
        return this._http.get(this.entity_url + '/' + visit_id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    VisitService.prototype.addVisit = function (visit) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return this._http.post(this.entity_url, JSON.stringify(visit), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    VisitService.prototype.updateVisit = function (visit_id, visit) {
        var body = JSON.stringify(visit);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': ' application/json;charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.put((this.entity_url + '/' + visit_id), body, options)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    VisitService.prototype.deleteVisit = function (visit_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': ' application/json;charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.delete((this.entity_url + '/' + visit_id), options)
            .map(function (response) { return response.status; })
            .catch(this.handleError);
    };
    VisitService.prototype.handleError = function (error) {
        console.log('handleError log: ');
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Response */]) {
            if (!(error.text() === '')) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                console.log('binding errors header not empty');
                errMsg = error.headers.get('errors').toString();
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(errMsg);
    };
    return VisitService;
}());
VisitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _a || Object])
], VisitService);

var _a;
//# sourceMappingURL=visit.service.js.map

/***/ }),

/***/ "./src/app/visits/visits-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visit_list_visit_list_component__ = __webpack_require__("./src/app/visits/visit-list/visit-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visit_edit_visit_edit_component__ = __webpack_require__("./src/app/visits/visit-edit/visit-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visit_add_visit_add_component__ = __webpack_require__("./src/app/visits/visit-add/visit-add.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsRoutingModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */





var visitRoutes = [
    { path: 'visits', component: __WEBPACK_IMPORTED_MODULE_2__visit_list_visit_list_component__["a" /* VisitListComponent */] },
    { path: 'visits/add', component: __WEBPACK_IMPORTED_MODULE_4__visit_add_visit_add_component__["a" /* VisitAddComponent */] },
    { path: 'visits/:id/edit', component: __WEBPACK_IMPORTED_MODULE_3__visit_edit_visit_edit_component__["a" /* VisitEditComponent */] }
];
var VisitsRoutingModule = (function () {
    function VisitsRoutingModule() {
    }
    return VisitsRoutingModule;
}());
VisitsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(visitRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], VisitsRoutingModule);

//# sourceMappingURL=visits-routing.module.js.map

/***/ }),

/***/ "./src/app/visits/visits.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visits_routing_module__ = __webpack_require__("./src/app/visits/visits-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visit_list_visit_list_component__ = __webpack_require__("./src/app/visits/visit-list/visit-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visit_edit_visit_edit_component__ = __webpack_require__("./src/app/visits/visit-edit/visit-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visit_service__ = __webpack_require__("./src/app/visits/visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__visit_add_visit_add_component__ = __webpack_require__("./src/app/visits/visit-add/visit-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pets_pets_routing_module__ = __webpack_require__("./src/app/pets/pets-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_md2__ = __webpack_require__("./node_modules/md2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsModule; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Vitaliy Fedoriv
 */










var VisitsModule = (function () {
    function VisitsModule() {
    }
    return VisitsModule;
}());
VisitsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_md2__["a" /* Md2Module */],
            __WEBPACK_IMPORTED_MODULE_0__visits_routing_module__["a" /* VisitsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__pets_pets_routing_module__["a" /* PetsRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__visit_list_visit_list_component__["a" /* VisitListComponent */],
            __WEBPACK_IMPORTED_MODULE_3__visit_edit_visit_edit_component__["a" /* VisitEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__visit_add_visit_add_component__["a" /* VisitAddComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__visit_list_visit_list_component__["a" /* VisitListComponent */],
            __WEBPACK_IMPORTED_MODULE_3__visit_edit_visit_edit_component__["a" /* VisitEditComponent */],
            __WEBPACK_IMPORTED_MODULE_6__visit_add_visit_add_component__["a" /* VisitAddComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__visit_service__["a" /* VisitService */]]
    })
], VisitsModule);

//# sourceMappingURL=visits.module.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 * REST_API_URL: 'http://localhost:9966/petclinic/api/'
 */
/**
 * @author Vitaliy Fedoriv
 */
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 * REST_API_URL: 'http://localhost:9966/petclinic/api/'
 */ var environment = {
    production: true,
    REST_API_URL: 'http://localhost:9966/petclinic/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
// import './polyfills.ts';




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map