(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-users-module"],{

/***/ "+P1L":
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: routes, UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "koPj");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ "DXe4");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users.component */ "Ag98");
/* harmony import */ var _users_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users.data */ "1/iZ");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-dialog/user-dialog.component */ "vfDu");
/* harmony import */ var src_app_services_AuthDeactivateGuard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/AuthDeactivateGuard */ "DvcX");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const routes = [
    { path: '', canActivate: [src_app_services_AuthDeactivateGuard__WEBPACK_IMPORTED_MODULE_12__["AutheactivateGuard"]], component: _users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"], pathMatch: 'full' }
];
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"].forRoot(_users_data__WEBPACK_IMPORTED_MODULE_10__["UsersData"], { delay: 500 }),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [
            _users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
            _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UserDialogComponent"]
        ],
        entryComponents: [
            _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UserDialogComponent"]
        ]
    })
], UsersModule);



/***/ }),

/***/ "/eOX":
/*!********************************************************************!*\
  !*** ./src/app/pages/users/user-dialog/user-dialog.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-form .form-field-outer {\n  width: 280px;\n}\n.user-form .mat-radio-button {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0FBQVIiLCJmaWxlIjoidXNlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1mb3Jte1xyXG4gICAgLmZvcm0tZmllbGQtb3V0ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1yYWRpby1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "0/8h":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/dialog-overview-example-dialog.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Delete user</h1>\r\n<div mat-dialog-content  class=\"w-100\">\r\n  <p>are you sure you want to delete?</p>\r\n</div>\r\n<div mat-dialog-actions  class=\"w-100\">\r\n  <button mat-button tabindex=\"1\" (click)=\"onConfirmClick()\">{{confirmButtonText}}</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">{{cancelButtonText}}</button>\r\n</div>");

/***/ }),

/***/ "1/iZ":
/*!*******************************************!*\
  !*** ./src/app/pages/users/users.data.ts ***!
  \*******************************************/
/*! exports provided: UsersData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersData", function() { return UsersData; });
class UsersData {
    createDb() {
        const users = [
            {
                id: 1,
                username: "pretty",
                password: "pretty123",
                profile: {
                    name: "Ashley",
                    surname: "Ahlberg",
                    birthday: new Date(1981, 2, 29),
                    gender: "female",
                    image: "assets/img/profile/ashley.jpg"
                },
                work: {
                    company: "Google",
                    position: "Product designer",
                    salary: 5000
                },
                contacts: {
                    email: "ashley@gmail.com",
                    phone: "(202) 756-9756",
                    address: "Washington"
                },
                social: {
                    facebook: "ashley_ahlberg",
                    twitter: "ashley_ahlberg",
                    google: "ashley_ahlberg"
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-10-13T12:20:40.511Z",
                    joinedDate: "2017-04-21T18:25:43.511Z",
                    bgColor: "gradient-purple"
                }
            },
            {
                id: 2,
                username: "bruno.V",
                password: "bruno123",
                profile: {
                    name: "Bruno",
                    surname: "Vespa",
                    birthday: new Date(1992, 11, 20),
                    gender: "male",
                    image: "assets/img/profile/bruno.jpg"
                },
                work: {
                    company: "Dell EMC",
                    position: "Sale manager",
                    salary: 17000
                },
                contacts: {
                    email: "bruno@dell.com",
                    phone: "(415) 231-0332",
                    address: "San Francisco"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2011-01-05T08:45:23.511Z",
                    joinedDate: "2017-05-20T18:25:43.511Z",
                    bgColor: "gradient-teal"
                }
            },
            {
                id: 3,
                username: "andy.79",
                password: "andy123",
                profile: {
                    name: "Andy",
                    surname: "Warhol",
                    birthday: new Date(1979, 10, 21),
                    gender: "male",
                    image: "assets/img/avatars/avatar-3.png"
                },
                work: {
                    company: "Adecco",
                    position: "Product manager",
                    salary: 13000
                },
                contacts: {
                    email: "andy@adecco.com",
                    phone: "(212) 457-2308",
                    address: "New York"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-11-01T19:35:43.511Z",
                    joinedDate: "2017-06-28T15:25:43.511Z",
                    bgColor: "gradient-amber"
                }
            },
            {
                id: 4,
                username: "julia.a",
                password: "julia123",
                profile: {
                    name: "Julia",
                    surname: "Aniston",
                    birthday: new Date(1982, 6, 18),
                    gender: "female",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Apple",
                    position: "Sales manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@apple.com",
                    phone: "(224) 267-1346",
                    address: "Illinois, Chicago"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z",
                    bgColor: "gradient-brown"
                }
            },
            {
                id: 5,
                username: "lusia.m",
                password: "lusia123",
                profile: {
                    name: "Lusia",
                    surname: "Manuel",
                    birthday: new Date(1992, 12, 2),
                    gender: "female",
                    image: "assets/img/avatars/avatar-7.png"
                },
                work: {
                    company: "Alphabet",
                    position: "Office manager",
                    salary: 10000
                },
                contacts: {
                    email: "lusia@alphabet.com",
                    phone: "(224) 267-1346",
                    address: "California, Los Angeles"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: true,
                    registrationDate: "2014-01-10T10:20:20.511Z",
                    joinedDate: "2017-06-28T12:20:40.511Z",
                    bgColor: "gradient-indigo"
                }
            },
            {
                id: 6,
                username: "adam.82",
                password: "adam123",
                profile: {
                    name: "Adam",
                    surname: "Sandler",
                    birthday: new Date(1987, 12, 24),
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "General Electric",
                    position: "Product manager",
                    salary: 21000
                },
                contacts: {
                    email: "adam@gen-el.com",
                    phone: "(224) 267-1346",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-06-27T14:20:40.511Z",
                    bgColor: "gradient-green"
                }
            },
            {
                id: 7,
                username: "tereza.s",
                password: "tereza123",
                profile: {
                    name: "Tereza",
                    surname: "Stiles",
                    birthday: new Date(1979, 7, 9),
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Southwest Airlines",
                    position: "Sale manager",
                    salary: 31000
                },
                contacts: {
                    email: "tereza@airlines.com",
                    phone: "(214) 617-2614",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-06-29T15:20:40.511Z",
                    bgColor: "gradient-pink"
                }
            },
            {
                id: 8,
                username: "michael.b",
                password: "michael123",
                profile: {
                    name: "Michael",
                    surname: "Blair",
                    birthday: new Date(1978, 11, 15),
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "Microsoft",
                    position: "Software developer",
                    salary: 50000
                },
                contacts: {
                    email: "michael@microsoft.com",
                    phone: "(267) 388-1637",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-06-30T11:30:40.511Z",
                    bgColor: "gradient-gray"
                }
            },
            {
                id: 9,
                username: "michelle.81",
                password: "michelle123",
                profile: {
                    name: "Michelle",
                    surname: "Ormond",
                    birthday: new Date(1981, 11, 18),
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "Starbucks",
                    position: "Sale manager",
                    salary: 15000
                },
                contacts: {
                    email: "michelle@starbucks.com",
                    phone: "(267) 388-1637",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: true,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-03-29T17:20:40.511Z",
                    bgColor: "gradient-lime"
                }
            }
        ];
        return { users };
    }
}


/***/ }),

/***/ "2NOk":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/user-dialog/user-dialog.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title><span *ngIf=\"!user._id\">Add</span><span *ngIf=\"user._id\">Edit</span> user</h1>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"form\" class=\"user-form\">\r\n        <mat-tab-group class=\"vertical-tabs\">\r\n            <mat-tab label=\"Basic\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-placeholder>\r\n                            <mat-icon>person</mat-icon> Username\r\n                        </mat-placeholder>\r\n                        <input matInput formControlName=\"username\" required>\r\n                        <mat-error *ngIf=\"form.controls.username.errors?.required\">Username is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.username.hasError('minlength')\">Username isn't long enough,\r\n                            minimum of 5 characters</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-placeholder>\r\n                            <mat-icon>vpn_key</mat-icon> Password\r\n                        </mat-placeholder>\r\n                        <input matInput formControlName=\"password\" required [type]=\"passwordHide ? 'password' : 'text'\">\r\n                        <mat-icon matSuffix (click)=\"passwordHide = !passwordHide\">{{passwordHide ? 'visibility' :\r\n                            'visibility_off'}}</mat-icon>\r\n                        <mat-error *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough,\r\n                            minimum of 6 characters</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Personal\" formGroupName=\"profile\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Surname\" formControlName=\"surname\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput [matDatepicker]=\"birthday\" placeholder=\"Birthday\" formControlName=\"birthday\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"birthday\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #birthday></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <mat-radio-group formControlName=\"gender\">\r\n                        <mat-radio-button value=\"male\" labelPosition=\"before\">Male</mat-radio-button>\r\n                        <mat-radio-button value=\"female\" labelPosition=\"before\">Female</mat-radio-button>\r\n                    </mat-radio-group>\r\n                    <!-- <mat-form-field class=\"w-100\">\r\n                        \r\n                    </mat-form-field> -->\r\n                    <p>add a photo please</p>\r\n                    <input type=\"file\" (change)=\"selectImage($event)\" accept=\"image/*\">\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Work\" formGroupName=\"work\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Company\" formControlName=\"company\">\r\n                    </mat-form-field>\r\n                    <!-- <input matInput placeholder=\"Position\" formControlName=\"roles\"> -->\r\n                    <div class=\"w-100\">\r\n                        <mat-card-header>\r\n                            <!-- <mat-card-subtitle><h2>Basic select</h2></mat-card-subtitle> -->\r\n                        </mat-card-header>\r\n                        <mat-card-content>\r\n                            <mat-form-field class=\"w-100\">\r\n                                <mat-select placeholder=\"Position\" formControlName=\"roles\">\r\n                                    <mat-option *ngFor=\"let role of roles\" [value]=\"role._id\">\r\n                                        {{role.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                            <!-- <p class=\"pt-3 mx-2\"> Selected value: <b>{{work.roles}}</b> </p> -->\r\n                        </mat-card-content>\r\n                    </div>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"days off\" formControlName=\"soldeConge\">\r\n                        <span matPrefix>&nbsp;</span>\r\n                        <span matSuffix></span>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Contacts\" formGroupName=\"contacts\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Phone\" formControlName=\"phone\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Address\" formControlName=\"address\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <!-- <mat-tab label=\"Social life\" formGroupName=\"social\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Facebook\" formControlName=\"facebook\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Twitter\" formControlName=\"twitter\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Google\" formControlName=\"google\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab> -->\r\n            <mat-tab label=\"Settings\" formGroupName=\"settings\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <!-- <mat-checkbox formControlName=\"isActive\" class=\"pb-3\">Active</mat-checkbox> -->\r\n                    <!-- <mat-checkbox formControlName=\"isDeleted\" class=\"pb-3\">Blocked</mat-checkbox> -->\r\n                    <!-- <p *ngIf=\"user._id\" class=\"pb-3\"><span>Registration date:</span> <i class=\"mx-1\">{{user.settings.registrationDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i></p> \r\n                       <p *ngIf=\"user._id\" class=\"pb-3\"><span>Last joined date:</span> <i class=\"mx-1\">{{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i> </p>      -->\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Choose bg color\" formControlName=\"bgColor\" name=\"bgColor\">\r\n                            <mat-option *ngFor=\"let color of colors\" [value]=\"color.value\">\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <div class=\"p-2\" [ngClass]=\"color.value\"></div>\r\n                                    <span class=\"mx-3\">{{color.viewValue}}</span>\r\n                                </div>\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"formData\" [disabled]=\"!form.valid\"><span\r\n            *ngIf=\"!user._id\" (click)=\"openSnackBarAdd()\">Save</span><span *ngIf=\"user._id\"\r\n            (click)=\"openSnackBarUpdate()\">Update</span></button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"close()\">Cancel</button>\r\n</div>");

/***/ }),

/***/ "Ag98":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./users.component.html */ "plWm");
/* harmony import */ var _users_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component.scss */ "CoRL");
/* harmony import */ var _raw_loader_dialog_overview_example_dialog_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "0/8h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.settings */ "/RaO");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-dialog/user-dialog.component */ "vfDu");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let UsersComponent = class UsersComponent {
    constructor(appSettings, dialog, UserService, snackBar) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.UserService = UserService;
        this.snackBar = snackBar;
        this.showSearch = false;
        this.viewType = 'grid';
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.users = null; //for show spinner each time
        this.UserService.getAllUsers().subscribe(res => {
            this.users = res;
        });
    }
    addUser(user) {
        this.UserService.addUser(user).subscribe(res => this.getUsers());
    }
    updateUser(user) {
        this.UserService.updateUser(JSON.parse(user.get("_id")), user).subscribe(user => this.getUsers());
    }
    changeView(viewType) {
        this.viewType = viewType;
        this.showSearch = false;
    }
    onPageChanged(event) {
        this.page = event;
        this.getUsers();
        document.getElementById('main').scrollTop = 0;
    }
    openUserDialog(user) {
        let dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UserDialogComponent"], {
            data: user
        });
        dialogRef.afterClosed().subscribe(formData => {
            let user = formData;
            if (formData) {
                if (JSON.parse(user.get("_id")) != '') {
                    if (JSON.parse(user.get("password")) === '') {
                        formData.delete("password");
                    }
                    this.updateUser(formData);
                }
                else {
                    formData.delete("_id");
                    this.addUser(formData);
                }
            }
        });
        this.showSearch = false;
    }
    openDialog(user) {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            data: {
                message: 'Are you sure want to delete ?',
                buttonText: {
                    ok: 'Save',
                    cancel: 'No'
                }
            }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
            let confirm = confirmed;
            if (confirm) {
                this.UserService.deleteUser(user._id).subscribe(user => {
                    this.getUsers();
                    let message = "User deleted successfully";
                    let action = "close";
                    this.snackBar.open(message, action, {
                        duration: 2000,
                    });
                });
            }
        });
    }
};
UsersComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
];
UsersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-users',
        template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        providers: [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]],
        styles: [_users_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
], UsersComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.message = "Are you sure?";
        this.confirmButtonText = "Yes";
        this.cancelButtonText = "Cancel";
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onConfirmClick() {
        this.dialogRef.close(true);
    }
};
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: _raw_loader_dialog_overview_example_dialog_html__WEBPACK_IMPORTED_MODULE_2__["default"],
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
], DialogOverviewExampleDialog);



/***/ }),

/***/ "CoRL":
/*!**************************************************!*\
  !*** ./src/app/pages/users/users.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".users-wrapper {\n  position: relative;\n  min-height: 150px;\n}\n\n.user-toolbar {\n  background: transparent !important;\n  height: 40px;\n  margin-top: -40px;\n}\n\n.user-details {\n  position: relative;\n}\n\n.user-details .user-name {\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.user-content .more-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.user-content .user-img {\n  position: relative;\n  text-align: center;\n}\n\n.user-content .user-img .social-icons a {\n  color: #fff;\n}\n\n.user-content .user-img img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n\n.user-content .user-img img.blocked {\n  opacity: 0.5;\n}\n\n.user-content .user-img .mat-icon.block-icon {\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n}\n\n.user-content .info-list {\n  position: relative;\n}\n\n.user-content .info-list span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 8px;\n}\n\n.user-content .info-list p {\n  padding: 2px 0;\n}\n\n.user-content .info-list p:first-child {\n  padding-top: 8px;\n}\n\n.user-content .info-list p:last-child {\n  padding-bottom: 8px;\n}\n\n.user-content .info-list.blocked {\n  opacity: 0.5;\n}\n\n.user-search {\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n  font-size: 14px;\n}\n\n.user-search .mat-form-field {\n  width: 100% !important;\n  text-align: center !important;\n  height: 36px;\n}\n\n.user-search .mat-form-field-infix {\n  padding: 5px;\n  width: 100px;\n}\n\n.user-search .mat-input-element {\n  text-align: center;\n}\n\n.user-search.show {\n  width: 100%;\n  overflow: visible;\n}\n\n.user-spinner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQUZHO0VBQ0ssZ0JBQUE7RUFDQSx5QkFBQTtBQUlSOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFHUjs7QUFESTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFHUjs7QUFGUTtFQUNJLFdBQUE7QUFJWjs7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJWjs7QUFIWTtFQUNJLFlBQUE7QUFLaEI7O0FBRlE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSVo7O0FBREk7RUFDSSxrQkFBQTtBQUdSOztBQUZRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFJWjs7QUFGUTtFQUNJLGNBQUE7QUFJWjs7QUFIWTtFQUNJLGdCQUFBO0FBS2hCOztBQUhZO0VBQ0ksbUJBQUE7QUFLaEI7O0FBRlE7RUFDSSxZQUFBO0FBSVo7O0FBQUE7RUFDSSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFGSTtFQUNJLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBSVI7O0FBRkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7QUFJUjs7QUFGSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUlSOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQU8sUUFBQTtFQUFVLFNBQUE7RUFBVyxPQUFBO0FBT2hDIiwiZmlsZSI6InVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxufVxyXG4udXNlci10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG59XHJcbi51c2VyLWRldGFpbHN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIC51c2VyLW5hbWV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfSAgICBcclxufVxyXG4udXNlci1jb250ZW50e1xyXG4gICAgLm1vcmUtYnRue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC51c2VyLWltZ3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5zb2NpYWwtaWNvbnMgYXtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICYuYmxvY2tlZHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWljb24uYmxvY2staWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC04cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTZweDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mby1saXN0e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICAmLmJsb2NrZWR7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcbi51c2VyLXNlYXJjaHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAubWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7ICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICYuc2hvd3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxufVxyXG4udXNlci1zcGlubmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6MDtcclxufSJdfQ== */");

/***/ }),

/***/ "DvcX":
/*!*************************************************!*\
  !*** ./src/app/services/AuthDeactivateGuard.ts ***!
  \*************************************************/
/*! exports provided: AutheactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutheactivateGuard", function() { return AutheactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guardservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guardservice.service */ "tA9a");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AutheactivateGuard = class AutheactivateGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isNotAllowed()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
};
AutheactivateGuard.ctorParameters = () => [
    { type: _guardservice_service__WEBPACK_IMPORTED_MODULE_2__["GuardserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AutheactivateGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_guardservice_service__WEBPACK_IMPORTED_MODULE_2__["GuardserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AutheactivateGuard);



/***/ }),

/***/ "h3nO":
/*!*******************************************!*\
  !*** ./src/app/pages/users/user.model.ts ***!
  \*******************************************/
/*! exports provided: User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWork", function() { return UserWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContacts", function() { return UserContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSocial", function() { return UserSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettings", function() { return UserSettings; });
class User {
}
class UserProfile {
}
class UserWork {
}
class UserContacts {
}
class UserSocial {
}
class UserSettings {
}


/***/ }),

/***/ "plWm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-content-header [icon]=\"'supervisor_account'\" [title]=\"'Users'\"\r\n    [desc]=\"'View information about the users, search, add, edit or delete any user.'\" [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" [class]=\"'pb-5'\"></app-content-header>\r\n\r\n<mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"px-2 user-toolbar\">\r\n    <div fxLayout=\"row\">\r\n        <button mat-icon-button (click)=\"openUserDialog(null)\">\r\n            <mat-icon>person_add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"showSearch = !showSearch\" class=\"mx-2\">\r\n            <mat-icon>search</mat-icon>\r\n        </button>\r\n    </div>\r\n    <form class=\"user-search\" [class.show]=\"showSearch\">\r\n        <mat-form-field class=\"user-search-input\">\r\n            <input matInput placeholder=\"Search user by name...\" [(ngModel)]=\"searchText\" name=\"search\">\r\n        </mat-form-field>\r\n    </form>\r\n    <div fxLayout=\"row\">\r\n        <button mat-icon-button (click)=\"changeView('grid')\" class=\"mx-2\">\r\n            <mat-icon>view_module</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"changeView('list')\">\r\n            <mat-icon>view_list</mat-icon>\r\n        </button>\r\n    </div>\r\n</mat-toolbar>\r\n\r\n<div class=\"users-wrapper p-2\">\r\n    <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\">\r\n        <div *ngFor=\"let user of users | UserSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: page }\"\r\n            fxFlex=\"100\" fxFlex.gt-md=\"33.3\" fxFlex.md=\"50\" fxFlex.sm=\"50\" class=\"p-2\">\r\n            <mat-card fxLayout=\"row\" class=\"p-0 user-content\">\r\n                <div fxFlex=\"35\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary\"\r\n                    [ngClass]=\"(user.settings.isDeleted) ? '' : user.settings.bgColor\">\r\n                    <div class=\"user-img\">\r\n                        <img *ngIf=\"user.profile.image\" [src]=\"user.profile.image\" class=\"transition mb-2\"\r\n                            [class.blocked]=\"user.settings.isDeleted\">\r\n                        <img *ngIf=\"!user.profile.image\" src=\"assets/img/users/default-user.jpg\" class=\"transition mb-2\"\r\n                            [class.blocked]=\"user.settings.isDeleted\">\r\n                        <mat-icon *ngIf=\"user.settings.isDeleted\" class=\"warn-color block-icon\">block</mat-icon>\r\n                        <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"social-icons\">\r\n                            <a [href]=\"'https://www.facebook.com/'+user.social.facebook\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path\r\n                                        d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\r\n                                </svg>\r\n                            </a>\r\n                            <a [href]=\"'https://twitter.com/'+user.social.twitter\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path\r\n                                        d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\r\n                                </svg>\r\n                            </a>\r\n                            <a [href]=\"'https://plus.google.com/'+user.social.google\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path\r\n                                        d=\"M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z\" />\r\n                                </svg>\r\n                            </a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"65\" [class.blocked]=\"user.settings.isDeleted\" class=\"user-details\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <h4 *ngIf=\"!user.settings.isDeleted\" class=\"user-name px-2\">{{user.profile.name}}\r\n                            {{user.profile.surname}}</h4>\r\n                        <h4 *ngIf=\"user.settings.isDeleted\" class=\"user-name px-2\">User blocked</h4>\r\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                    <mat-menu #menu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                        <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                            <button mat-menu-item (click)=\"openUserDialog(user)\">\r\n                                <mat-icon>mode_edit</mat-icon>\r\n                                <span>Edit</span>\r\n                            </button>\r\n                            <button mat-menu-item (click)=\"openDialog(user);\">\r\n                                <mat-icon>delete</mat-icon>\r\n                                <span>Delete</span>\r\n                            </button>\r\n                            <button mat-menu-item (click)=\"user.settings.isDeleted = !user.settings.isDeleted\">\r\n                                <mat-icon>block</mat-icon>\r\n                                <span *ngIf=\"!user.settings.isDeleted\">Block</span>\r\n                                <span *ngIf=\"user.settings.isDeleted\">Unblock</span>\r\n                            </button>\r\n                        </span>\r\n                    </mat-menu>\r\n                    <mat-divider></mat-divider>\r\n                    <div class=\"info-list mx-2\" [class.blocked]=\"user.settings.isDeleted\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">card_membership</mat-icon>\r\n                            <span>{{user.work.position}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">mail_outline</mat-icon>\r\n                            <span>{{user.contacts.email}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">call</mat-icon>\r\n                            <span>{{user.contacts.phone}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">location_on</mat-icon>\r\n                            <span>{{user.contacts.address}}</span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"viewType == 'list'\" fxLayout=\"row wrap\">\r\n        <div *ngFor=\"let user of users | UserSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: page }\"\r\n            fxFlex=\"100\" class=\"p-2\">\r\n            <mat-card class=\"p-0 user-content\">\r\n                <div fxFlex=\"20\" fxFlex.xs=\"30\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary\"\r\n                    [ngClass]=\"(user.settings.isDeleted) ? '' : user.settings.bgColor\">\r\n                    <div class=\"user-img\">\r\n                        <img *ngIf=\"user.profile.image\" [src]=\"user.profile.image\" class=\"transition mb-2\"\r\n                            [class.blocked]=\"user.settings.isDeleted\">\r\n                        <img *ngIf=\"!user.profile.image\" src=\"assets/img/users/default-user.jpg\" class=\"transition mb-2\"\r\n                            [class.blocked]=\"user.settings.isDeleted\">\r\n                        <mat-icon *ngIf=\"user.settings.isDeleted\" class=\"warn-color block-icon\">block</mat-icon>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"social-icons\">\r\n                            <a [href]=\"'https://www.facebook.com/'+user.social.facebook\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path\r\n                                        d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\r\n                                </svg>\r\n                            </a>\r\n                            <a [href]=\"'https://twitter.com/'+user.social.twitter\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path\r\n                                        d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\r\n                                </svg>\r\n                            </a>\r\n                            <a [href]=\"'https://plus.google.com/'+user.social.google\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path\r\n                                        d=\"M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z\" />\r\n                                </svg>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"80\" fxFlex.xs=\"70\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" class=\"user-details\">\r\n                    <div class=\"w-100\">\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <h4 *ngIf=\"!user.settings.isDeleted\" class=\"user-name px-2\">{{user.profile.name}}\r\n                                {{user.profile.surname}}</h4>\r\n                            <h4 *ngIf=\"user.settings.isDeleted\" class=\"user-name px-2\">User blocked</h4>\r\n                            <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                                <mat-icon>more_vert</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                        <mat-menu #menu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                            <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                                <button mat-menu-item (click)=\"openUserDialog(user)\">\r\n                                    <mat-icon>mode_edit</mat-icon>\r\n                                    <span>Edit</span>\r\n                                </button>\r\n                                <button mat-menu-item  (click)=\"openDialog(user);\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                    <span>Delete</span>\r\n                                </button>\r\n                                <button mat-menu-item (click)=\"user.settings.isDeleted = !user.settings.isDeleted\">\r\n                                    <mat-icon>block</mat-icon>\r\n                                    <span *ngIf=\"!user.settings.isDeleted\">Block</span>\r\n                                    <span *ngIf=\"user.settings.isDeleted\">Unblock</span>\r\n                                </button>\r\n                            </span>\r\n                        </mat-menu>\r\n                        <mat-divider></mat-divider>\r\n                    </div>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"100\" fxLayout=\"column\" class=\"info-list px-2\"\r\n                        [class.blocked]=\"user.settings.isDeleted\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">business</mat-icon>\r\n                            <span>{{user.work.company}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">card_membership</mat-icon>\r\n                            <span>{{user.work.position}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">attach_money</mat-icon>\r\n                            <span>{{user.work.salary}}</span>\r\n                        </p>\r\n                    </div>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"100\" fxLayout=\"column\" class=\"info-list px-2\"\r\n                        [class.blocked]=\"user.settings.isDeleted\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">mail_outline</mat-icon>\r\n                            <span>{{user.contacts.email}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">call</mat-icon>\r\n                            <span>{{user.contacts.phone}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">location_on</mat-icon>\r\n                            <span>{{user.contacts.address}}</span>\r\n                        </p>\r\n                    </div>\r\n                    <div fxFlex=\"40\" fxFlex.xs=\"100\" fxLayout=\"column\" class=\"info-list px-2\"\r\n                        [class.blocked]=\"user.settings.isDeleted\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">event_available</mat-icon>\r\n                            <span>Registration {{user.settings.registrationDate | date:\"dd MMMM, yyyy 'at'\r\n                                HH:mm\"}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">date_range</mat-icon>\r\n                            <span>Joined {{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon *ngIf=\"user.settings.isDeleted\" class=\"secondary-text-color\">person_outline\r\n                            </mat-icon>\r\n                            <mat-icon *ngIf=\"!user.settings.isDeleted\" class=\"secondary-text-color\">person</mat-icon>\r\n                            <span>{{ (user.settings.isDeleted) ? 'Blocked' : 'Active' }}</span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"users\" fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" class=\"p-2\">\r\n            <mat-card class=\"p-0 text-center\">\r\n                <pagination-controls class=\"annular-pagination\" autoHide=\"true\" maxSize=\"3\"\r\n                    (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!users\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-spinner\">\r\n        <mat-spinner color=\"accent\"></mat-spinner>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "vfDu":
/*!******************************************************************!*\
  !*** ./src/app/pages/users/user-dialog/user-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: UserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function() { return UserDialogComponent; });
/* harmony import */ var _raw_loader_user_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-dialog.component.html */ "2NOk");
/* harmony import */ var _user_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-dialog.component.scss */ "/eOX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.model */ "h3nO");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let UserDialogComponent = class UserDialogComponent {
    constructor(dialogRef, user, userService, snackBar) {
        this.dialogRef = dialogRef;
        this.user = user;
        this.userService = userService;
        this.snackBar = snackBar;
        this.passwordHide = true;
        this.colors = [
            { value: 'gradient-purple', viewValue: 'Purple' },
            { value: 'gradient-indigo', viewValue: 'Indigo' },
            { value: 'gradient-teal', viewValue: 'Teal' },
            { value: 'gradient-blue', viewValue: 'Blue' },
            { value: 'gradient-orange', viewValue: 'Orange' },
            { value: 'gradient-green', viewValue: 'Green' },
            { value: 'gradient-pink', viewValue: 'Pink' },
            { value: 'gradient-red', viewValue: 'Red' },
            { value: 'gradient-amber', viewValue: 'Amber' },
            { value: 'gradient-gray', viewValue: 'Gray' },
            { value: 'gradient-brown', viewValue: 'Brown' },
            { value: 'gradient-lime', viewValue: 'Lime' }
        ];
        this.image = null;
        this.formData = new FormData();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            }),
            work: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                company: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([]),
                soldeConge: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            }),
            contacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            }),
            // social: new FormGroup({
            //   facebook: new FormControl(''),
            //   twitter: new FormControl(''),
            //   google: new FormControl('')
            // }),
            settings: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                // isActive: new FormControl(''),
                // isDeleted: new FormControl(''),
                registrationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                joinedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                bgColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            })
        });
    }
    ngOnInit() {
        if (this.user) {
            this.form.patchValue(this.user);
            this.form.patchValue({ password: '' });
        }
        else {
            this.user = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
            this.user.profile = new _user_model__WEBPACK_IMPORTED_MODULE_5__["UserProfile"]();
            this.user.work = new _user_model__WEBPACK_IMPORTED_MODULE_5__["UserWork"]();
            this.user.contacts = new _user_model__WEBPACK_IMPORTED_MODULE_5__["UserContacts"]();
            this.user.social = new _user_model__WEBPACK_IMPORTED_MODULE_5__["UserSocial"]();
            this.user.settings = new _user_model__WEBPACK_IMPORTED_MODULE_5__["UserSettings"]();
        }
        this.getRoles();
    }
    getRoles() {
        this.roles = null; //for show spinner each time
        this.userService.getAllRoles().subscribe(res => {
            this.roles = res;
        });
    }
    openSnackBarUpdate() {
        if (this.image != null) {
            this.formData.append('image', this.image, this.image.name);
        }
        Object.keys(this.form.value).forEach(fieldName => {
            this.formData.append(fieldName, JSON.stringify(this.form.value[fieldName]));
        });
        let message = "User updated successfully";
        let action = "close";
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
    close() {
        this.dialogRef.close();
    }
    selectImage(event) {
        if (event.target.value) {
            this.image = event.target.files[0];
        }
    }
    openSnackBarAdd() {
        if (this.image != null) {
            this.formData.append('image', this.image, this.image.name);
        }
        Object.keys(this.form.value).forEach(fieldName => {
            this.formData.append(fieldName, JSON.stringify(this.form.value[fieldName]));
        });
        let message = "User added successfully";
        let action = "close";
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
UserDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _user_model__WEBPACK_IMPORTED_MODULE_5__["User"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
UserDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-dialog',
        template: _raw_loader_user_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
        _user_model__WEBPACK_IMPORTED_MODULE_5__["User"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
], UserDialogComponent);



/***/ })

}]);
//# sourceMappingURL=pages-users-users-module-es2015.js.map