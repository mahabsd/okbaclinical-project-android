(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-doctors-doctors-module"], {
    /***/
    "0FgK":
    /*!***********************************************!*\
      !*** ./src/app/pages/doctors/doctors.data.ts ***!
      \***********************************************/

    /*! exports provided: DoctorsData */

    /***/
    function FgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorsData", function () {
        return DoctorsData;
      });

      var DoctorsData = /*#__PURE__*/function () {
        function DoctorsData() {
          _classCallCheck(this, DoctorsData);
        }

        _createClass(DoctorsData, [{
          key: "createDb",
          value: function createDb() {
            var users = [{
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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
            }];
            return {
              users: users
            };
          }
        }]);

        return DoctorsData;
      }();
      /***/

    },

    /***/
    "0x2j":
    /*!***********************************************!*\
      !*** ./src/app/pages/doctors/doctor.model.ts ***!
      \***********************************************/

    /*! exports provided: Doctor, DoctorProfile, DoctorWork, DoctorContacts, DoctorSettings */

    /***/
    function x2j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Doctor", function () {
        return Doctor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorProfile", function () {
        return DoctorProfile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorWork", function () {
        return DoctorWork;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorContacts", function () {
        return DoctorContacts;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorSettings", function () {
        return DoctorSettings;
      });

      var Doctor = function Doctor() {
        _classCallCheck(this, Doctor);
      };

      var DoctorProfile = function DoctorProfile() {
        _classCallCheck(this, DoctorProfile);
      };

      var DoctorWork = function DoctorWork() {
        _classCallCheck(this, DoctorWork);
      };

      var DoctorContacts = function DoctorContacts() {
        _classCallCheck(this, DoctorContacts);
      };

      var DoctorSettings = function DoctorSettings() {
        _classCallCheck(this, DoctorSettings);
      };
      /***/

    },

    /***/
    "3RPT":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctors/dialog-overview-example-dialog.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RPT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 mat-dialog-title>Delete user</h1>\r\n<div mat-dialog-content  class=\"w-100\">\r\n  <p>are you sure you want to delete?</p>\r\n</div>\r\n<div mat-dialog-actions  class=\"w-100\">\r\n  <button mat-button tabindex=\"1\"  (click)=\"onConfirmClick()\">{{confirmButtonText}}</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">{{cancelButtonText}}</button>\r\n</div>";
      /***/
    },

    /***/
    "A7sX":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctors/doctors.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function A7sX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-content-header \r\n    [icon]=\"'supervisor_account'\" \r\n    [title]=\"'Doctors'\" \r\n    [desc]=\"'View information about the doctors, search, add, edit or delete any doctor.'\"\r\n    [hideBreadcrumb]=\"false\"\r\n    [hasBgImage]=\"true\" \r\n    [class]=\"'pb-5'\"></app-content-header>\r\n\r\n<mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"px-2 user-toolbar\">\r\n    <div fxLayout=\"row\">\r\n        <button mat-icon-button (click)=\"openDoctorDialog(null)\">\r\n            <mat-icon>person_add</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"showSearch = !showSearch\" class=\"mx-2\">\r\n            <mat-icon>search</mat-icon>\r\n        </button>\r\n    </div>\r\n    <form class=\"doctor-search\" [class.show]=\"showSearch\">\r\n        <mat-form-field class=\"doctor-search-input\">\r\n            <input matInput placeholder=\"Search doctor by name...\" [(ngModel)]=\"searchText\" name=\"search\">\r\n        </mat-form-field>\r\n    </form>\r\n    <div fxLayout=\"row\">\r\n        <button mat-icon-button (click)=\"changeView('grid')\" class=\"mx-2\">\r\n            <mat-icon>view_module</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"changeView('list')\">\r\n            <mat-icon>view_list</mat-icon>\r\n        </button>\r\n    </div>\r\n</mat-toolbar>\r\n\r\n<div class=\"doctors-wrapper p-2\">\r\n    <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\">    \r\n        <div *ngFor=\"let doctor of doctors | UserSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: page }\" fxFlex=\"100\" fxFlex.gt-md=\"33.3\" fxFlex.md=\"50\" fxFlex.sm=\"50\" class=\"p-2\"> \r\n            <mat-card fxLayout=\"row\" class=\"p-0 doctor-content\">  \r\n                <div fxFlex=\"35\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary\" [ngClass]=\"(doctor.settings.isDeleted) ? '' : doctor.settings.bgColor\">\r\n                    <div class=\"doctor-img\">\r\n                        <!-- <img *ngIf=\"doctor.profile.image\" [src]=\"doctor.profile.image\" class=\"transition mb-2\" [class.blocked]=\"doctor.settings.isDeleted\"> -->\r\n                        <img  src=\"assets/img/users/default-user.jpg\" class=\"transition mb-2\" [class.blocked]=\"doctor.settings.isDeleted\">  \r\n                        <mat-icon *ngIf=\"doctor.settings.isDeleted\" class=\"warn-color block-icon\">block</mat-icon>\r\n                        <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"social-icons\">\r\n                            <a [href]=\"'https://www.facebook.com/'+doctor.social.facebook\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\r\n                                </svg>\r\n                            </a>\r\n                            <a [href]=\"'https://twitter.com/'+doctor.social.twitter\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\r\n                                </svg>\r\n                            </a>\r\n                            <a [href]=\"'https://plus.google.com/'+doctor.social.google\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path d=\"M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z\" />\r\n                                </svg>\r\n                            </a>\r\n                        </div> -->\r\n                    </div>\r\n                </div>       \r\n                <div fxFlex=\"65\" [class.blocked]=\"doctor.settings.isDeleted\" class=\"doctor-details\"> \r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <h4 *ngIf=\"!doctor.settings.isDeleted\" class=\"doctor-name px-2\">{{doctor.profile.name}} {{doctor.profile.surname}}</h4> \r\n                        <h4 *ngIf=\"doctor.settings.isDeleted\" class=\"doctor-name px-2\">User blocked</h4>\r\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>\r\n                    </div>                  \r\n                    <mat-menu #menu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                        <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                            <button mat-menu-item (click)=\"openDoctorDialog(doctor)\">\r\n                                <mat-icon>mode_edit</mat-icon>\r\n                                <span>Edit</span>\r\n                            </button>\r\n                            <button mat-menu-item (click)=\"  openDialog(doctor);\">\r\n                                <mat-icon>delete</mat-icon>\r\n                                <span>Delete</span>\r\n                            </button>\r\n                            <button mat-menu-item (click)=\"doctor.settings.isDeleted = !doctor.settings.isDeleted\">\r\n                                <mat-icon>block</mat-icon>\r\n                                <span *ngIf=\"!doctor.settings.isDeleted\">Block</span>\r\n                                <span *ngIf=\"doctor.settings.isDeleted\">Unblock</span>\r\n                            </button>\r\n                            <button mat-menu-item (click)=\"openSmsDialog(doctor)\">\r\n                                <mat-icon>mode_edit</mat-icon>\r\n                                <span>Envoyer SmS</span>\r\n                            </button>\r\n                        </span>\r\n                    </mat-menu>\r\n                    <mat-divider></mat-divider>\r\n                    <div class=\"info-list mx-2\" [class.blocked]=\"doctor.settings.isDeleted\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">card_membership</mat-icon>\r\n                            <span>{{doctor.work.position}}</span>\r\n\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">mail_outline</mat-icon>\r\n                            <span>{{doctor.contacts.email}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">call</mat-icon>\r\n                            <span>{{doctor.contacts.phone}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">location_on</mat-icon>\r\n                            <span>{{doctor.contacts.address}}</span>\r\n                        </p>\r\n                    </div>                    \r\n                </div>\r\n            </mat-card>        \r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"viewType == 'list'\" fxLayout=\"row wrap\">\r\n        <div *ngFor=\"let doctor of doctors | UserSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: page }\" fxFlex=\"100\" class=\"p-2\"> \r\n            <mat-card class=\"p-0 doctor-content\"> \r\n                <div fxFlex=\"20\" fxFlex.xs=\"30\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary\" [ngClass]=\"(doctor.settings.isDeleted) ? '' : doctor.settings.bgColor\">\r\n                    <div class=\"doctor-img\">\r\n                        <img *ngIf=\"doctor.profile.image\" [src]=\"doctor.profile.image\" class=\"transition mb-2\" [class.blocked]=\"doctor.settings.isDeleted\">\r\n                        <img *ngIf=\"!doctor.profile.image\" src=\"assets/img/doctors/default-doctor.jpg\" class=\"transition mb-2\" [class.blocked]=\"doctor.settings.isDeleted\">  \r\n                        <mat-icon *ngIf=\"doctor.settings.isDeleted\" class=\"warn-color block-icon\">block</mat-icon>\r\n                        <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"social-icons\">\r\n                            <a [href]=\"'https://www.facebook.com/'+doctor.social.facebook\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\r\n                                </svg>\r\n                            </a>\r\n                            <a [href]=\"'https://twitter.com/'+doctor.social.twitter\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\r\n                                </svg>\r\n                            </a>\r\n                            <a [href]=\"'https://plus.google.com/'+doctor.social.google\" target=\"_blank\">\r\n                                <svg class=\"mat-icon mat-icon-sm mx-1\" viewBox=\"0 0 24 24\">\r\n                                    <path d=\"M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z\" />\r\n                                </svg>\r\n                            </a>\r\n                        </div> -->\r\n                    </div>\r\n                </div> \r\n                <div fxFlex=\"80\" fxFlex.xs=\"70\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" class=\"doctor-details\">\r\n                    <div class=\"w-100\">\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <h4 *ngIf=\"!doctor.settings.isDeleted\" class=\"doctor-name px-2\">{{doctor.profile.name}} {{doctor.profile.surname}}</h4> \r\n                            <h4 *ngIf=\"doctor.settings.isDeleted\" class=\"doctor-name px-2\">User blocked</h4>\r\n                            <button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\r\n                                <mat-icon>more_vert</mat-icon>\r\n                            </button>\r\n                        </div>                  \r\n                        <mat-menu #menu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                            <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                                <button mat-menu-item (click)=\"openDoctorDialog(doctor)\">\r\n                                    <mat-icon>mode_edit</mat-icon>\r\n                                    <span>Edit</span>\r\n                                </button>\r\n                                <button mat-menu-item (click)=\"deleteDoctor(doctor);\">\r\n                                    <mat-icon>delete</mat-icon>\r\n                                    <span>Delete</span>\r\n                                </button>\r\n                                <button mat-menu-item (click)=\"doctor.settings.isDeleted = !doctor.settings.isDeleted\">\r\n                                    <mat-icon>block</mat-icon>\r\n                                    <span *ngIf=\"!doctor.settings.isDeleted\">Block</span>\r\n                                    <span *ngIf=\"doctor.settings.isDeleted\">Unblock</span>\r\n                                </button>\r\n                                <button mat-menu-item (click)=\"openSmsDialog(Doctor)\">\r\n                                    <mat-icon>mode_edit</mat-icon>\r\n                                    <span>Envoyer SmS</span>\r\n                                </button>\r\n                            </span>\r\n                        </mat-menu>\r\n                        <mat-divider></mat-divider>                        \r\n                    </div>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"100\" fxLayout=\"column\" class=\"info-list px-2\" [class.blocked]=\"doctor.settings.isDeleted\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">business</mat-icon>\r\n                            <span>{{doctor.work.company}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">card_membership</mat-icon>\r\n                            <span>{{doctor.work.position}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">attach_money</mat-icon>\r\n                            <span>{{doctor.work.salary}}</span>\r\n                        </p>                                               \r\n                    </div>\r\n                    <div fxFlex=\"30\" fxFlex.xs=\"100\" fxLayout=\"column\" class=\"info-list px-2\" [class.blocked]=\"doctor.settings.isDeleted\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">mail_outline</mat-icon>\r\n                            <span>{{doctor.contacts.email}}</span>\r\n                        </p> \r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">call</mat-icon>\r\n                            <span>{{doctor.contacts.phone}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">location_on</mat-icon>\r\n                            <span>{{doctor.contacts.address}}</span>\r\n                        </p>                        \r\n                    </div>\r\n                    <div fxFlex=\"40\" fxFlex.xs=\"100\" fxLayout=\"column\" class=\"info-list px-2\" [class.blocked]=\"doctor.settings.isDeleted\">\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">event_available</mat-icon>\r\n                            <span>Registration {{doctor.settings.registrationDate | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</span>\r\n                        </p>\r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"secondary-text-color\">date_range</mat-icon>\r\n                            <span>Joined {{doctor.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</span>\r\n                        </p> \r\n                        <p fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon *ngIf=\"doctor.settings.isDeleted\" class=\"secondary-text-color\">person_outline</mat-icon>\r\n                            <mat-icon *ngIf=\"!doctor.settings.isDeleted\" class=\"secondary-text-color\">person</mat-icon>\r\n                            <span>{{ (doctor.settings.isDeleted) ? 'Blocked' : 'Active' }}</span>\r\n                        </p>                       \r\n                    </div>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"doctors\" fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" class=\"p-2\"> \r\n            <mat-card class=\"p-0 text-center\">           \r\n                <pagination-controls class=\"annular-pagination\" autoHide=\"true\" maxSize=\"3\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n            </mat-card>\r\n        </div>\r\n    </div>    \r\n    <div *ngIf=\"!doctors\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"doctor-spinner\">   \r\n        <mat-spinner color=\"accent\"></mat-spinner>    \r\n    </div>   \r\n</div>";
      /***/
    },

    /***/
    "HLp0":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctors/doctor-sms/doctor-sms.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HLp0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 mat-dialog-title><span >Send </span> Sms</h1>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"form\" class=\"user-form\">      \r\n        <mat-tab-group class=\"vertical-tabs\">\r\n            <mat-tab label=\"Contacts\" formGroupName=\"contacts\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Phone\" formControlName=\"phone\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Type de message\" formControlName=\"type\">\r\n                            <mat-option value=\"0\">Francais</mat-option>\r\n                            <mat-option value=\"1\">Arabe</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <textarea matInput placeholder=\"message\" formControlName=\"message\"></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            \r\n        </mat-tab-group>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"form.value\" [disabled]=\"!form.valid\"><span (click)=\"openSnackBarUpdate()\">Send</span></button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"close()\">Cancel</button>\r\n</div>";
      /***/
    },

    /***/
    "Jm/O":
    /*!******************************************************!*\
      !*** ./src/app/pages/doctors/doctors.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function JmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".doctors-wrapper {\n  position: relative;\n  min-height: 150px;\n}\n\n.doctor-toolbar {\n  background: transparent !important;\n  height: 40px;\n  margin-top: -40px;\n}\n\n.doctor-details {\n  position: relative;\n}\n\n.doctor-details .doctor-name {\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.doctor-content .more-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.doctor-content .doctor-img {\n  position: relative;\n  text-align: center;\n}\n\n.doctor-content .doctor-img .social-icons a {\n  color: #fff;\n}\n\n.doctor-content .doctor-img img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n\n.doctor-content .doctor-img img.blocked {\n  opacity: 0.5;\n}\n\n.doctor-content .doctor-img .mat-icon.block-icon {\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n}\n\n.doctor-content .info-list {\n  position: relative;\n}\n\n.doctor-content .info-list span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 8px;\n}\n\n.doctor-content .info-list p {\n  padding: 2px 0;\n}\n\n.doctor-content .info-list p:first-child {\n  padding-top: 8px;\n}\n\n.doctor-content .info-list p:last-child {\n  padding-bottom: 8px;\n}\n\n.doctor-content .info-list.blocked {\n  opacity: 0.5;\n}\n\n.doctor-search {\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n  font-size: 14px;\n}\n\n.doctor-search .mat-form-field {\n  width: 100% !important;\n  text-align: center !important;\n  height: 36px;\n}\n\n.doctor-search .mat-form-field-infix {\n  padding: 5px;\n  width: 100px;\n}\n\n.doctor-search .mat-input-element {\n  text-align: center;\n}\n\n.doctor-search.show {\n  width: 100%;\n  overflow: visible;\n}\n\n.doctor-spinner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkb2N0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBRkc7RUFDSyxnQkFBQTtFQUNBLHlCQUFBO0FBSVI7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUdSOztBQURJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUdSOztBQUZRO0VBQ0ksV0FBQTtBQUlaOztBQUZRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlaOztBQUhZO0VBQ0ksWUFBQTtBQUtoQjs7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFJWjs7QUFESTtFQUNJLGtCQUFBO0FBR1I7O0FBRlE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlaOztBQUZRO0VBQ0ksY0FBQTtBQUlaOztBQUhZO0VBQ0ksZ0JBQUE7QUFLaEI7O0FBSFk7RUFDSSxtQkFBQTtBQUtoQjs7QUFGUTtFQUNJLFlBQUE7QUFJWjs7QUFBQTtFQUNJLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUZJO0VBQ0ksc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFJUjs7QUFGSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBSVI7O0FBRkk7RUFDSSxrQkFBQTtBQUlSOztBQUZJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBSVI7O0FBREE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFBTyxRQUFBO0VBQVUsU0FBQTtFQUFXLE9BQUE7QUFPaEMiLCJmaWxlIjoiZG9jdG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb2N0b3JzLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxufVxyXG4uZG9jdG9yLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbn1cclxuLmRvY3Rvci1kZXRhaWxze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAuZG9jdG9yLW5hbWV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfSAgICBcclxufVxyXG4uZG9jdG9yLWNvbnRlbnR7XHJcbiAgICAubW9yZS1idG57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLmRvY3Rvci1pbWd7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAuc29jaWFsLWljb25zIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAmLmJsb2NrZWR7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29uLmJsb2NrLWljb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtOHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDk2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDk2cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluZm8tbGlzdHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgJi5ibG9ja2Vke1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufVxyXG4uZG9jdG9yLXNlYXJjaHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAubWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7ICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICYuc2hvd3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxufVxyXG4uZG9jdG9yLXNwaW5uZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDowO1xyXG59Il19 */";
      /***/
    },

    /***/
    "QDud":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctors/doctor-dialog/doctor-dialog.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QDud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 mat-dialog-title><span *ngIf=\"!doctor._id\">Add</span><span *ngIf=\"doctor._id\">Edit</span> doctor</h1>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"form\" class=\"user-form\">\r\n        <mat-tab-group class=\"vertical-tabs\">\r\n            <mat-tab label=\"Personal\" formGroupName=\"profile\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Surname\" formControlName=\"surname\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput [matDatepicker]=\"birthday\" placeholder=\"Birthday\" formControlName=\"birthday\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"birthday\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #birthday></mat-datepicker>\r\n                    </mat-form-field>\r\n                   \r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Work\" formGroupName=\"work\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Position\" formControlName=\"position\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Contacts\" formGroupName=\"contacts\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Phone\" formControlName=\"phone\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Address\" formControlName=\"address\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"Settings\" formGroupName=\"settings\">\r\n                <div fxLayout=\"column\" class=\"form-field-outer\">\r\n                    <!-- <mat-checkbox formControlName=\"isActive\" class=\"pb-3\">Active</mat-checkbox>\r\n                    <mat-checkbox formControlName=\"isDeleted\" class=\"pb-3\">Blocked</mat-checkbox>\r\n                    <p *ngIf=\"user._id\" class=\"pb-3\"><span>Registration date:</span> <i class=\"mx-1\">{{user.settings.registrationDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i></p> \r\n                    <p *ngIf=\"user._id\" class=\"pb-3\"><span>Last joined date:</span> <i class=\"mx-1\">{{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i> </p>      -->\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Choose bg color\" formControlName=\"bgColor\" name=\"bgColor\">\r\n                            <mat-option *ngFor=\"let color of colors\" [value]=\"color.value\">\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <div class=\"p-2\" [ngClass]=\"color.value\"></div>\r\n                                    <span class=\"mx-3\">{{color.viewValue}}</span>\r\n                                </div>\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"form.value\" [disabled]=\"!form.valid\"><span\r\n            *ngIf=\"!doctor._id\" (click)=\"openSnackBarAdd()\">Save</span><span *ngIf=\"doctor._id\"\r\n            (click)=\"openSnackBarUpdate()\">Update</span></button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"close()\">Cancel</button>\r\n</div>";
      /***/
    },

    /***/
    "TD+Z":
    /*!************************************************************************!*\
      !*** ./src/app/pages/doctors/doctor-dialog/doctor-dialog.component.ts ***!
      \************************************************************************/

    /*! exports provided: DoctorDialogComponent */

    /***/
    function TDZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorDialogComponent", function () {
        return DoctorDialogComponent;
      });
      /* harmony import */


      var _raw_loader_doctor_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./doctor-dialog.component.html */
      "QDud");
      /* harmony import */


      var _doctor_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./doctor-dialog.component.scss */
      "xsyV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _doctor_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../doctor.model */
      "0x2j");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_doctors_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/doctors.service */
      "jgvw");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var DoctorDialogComponent = /*#__PURE__*/function () {
        function DoctorDialogComponent(dialogRef, doctor, snackBar, doctorsService) {
          _classCallCheck(this, DoctorDialogComponent);

          this.dialogRef = dialogRef;
          this.doctor = doctor;
          this.snackBar = snackBar;
          this.doctorsService = doctorsService;
          this.passwordHide = true;
          this.colors = [{
            value: 'gradient-purple',
            viewValue: 'Purple'
          }, {
            value: 'gradient-indigo',
            viewValue: 'Indigo'
          }, {
            value: 'gradient-teal',
            viewValue: 'Teal'
          }, {
            value: 'gradient-blue',
            viewValue: 'Blue'
          }, {
            value: 'gradient-orange',
            viewValue: 'Orange'
          }, {
            value: 'gradient-green',
            viewValue: 'Green'
          }, {
            value: 'gradient-pink',
            viewValue: 'Pink'
          }, {
            value: 'gradient-red',
            viewValue: 'Red'
          }, {
            value: 'gradient-amber',
            viewValue: 'Amber'
          }, {
            value: 'gradient-gray',
            viewValue: 'Gray'
          }, {
            value: 'gradient-brown',
            viewValue: 'Brown'
          }, {
            value: 'gradient-lime',
            viewValue: 'Lime'
          }];
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            }),
            work: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              position: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            }),
            contacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            }),
            settings: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              // isActive: new FormControl(''),
              // isDeleted: new FormControl(''),
              bgColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            })
          });
        }

        _createClass(DoctorDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.doctor) {
              this.form.patchValue(this.doctor);
            } else {
              this.doctor = new _doctor_model__WEBPACK_IMPORTED_MODULE_5__["Doctor"]();
              this.doctor.profile = new _doctor_model__WEBPACK_IMPORTED_MODULE_5__["DoctorProfile"]();
              this.doctor.work = new _doctor_model__WEBPACK_IMPORTED_MODULE_5__["DoctorWork"]();
              this.doctor.contacts = new _doctor_model__WEBPACK_IMPORTED_MODULE_5__["DoctorContacts"]();
              this.doctor.settings = new _doctor_model__WEBPACK_IMPORTED_MODULE_5__["DoctorSettings"]();
            }
          }
        }, {
          key: "openSnackBarAdd",
          value: function openSnackBarAdd() {
            var message = "Doctor added successfully";
            var action = "Annuler";
            this.snackBar.open(message, action, {
              duration: 2000
            });
          }
        }, {
          key: "openSnackBarUpdate",
          value: function openSnackBarUpdate() {
            var message = "Doctor updated successfully";
            var action = "Annuler";
            this.snackBar.open(message, action, {
              duration: 2000
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }, {
          key: "selectImage",
          value: function selectImage(event) {
            if (event.target.value) {
              this.form.patchValue({
                profile: {
                  image: event
                }
              });
              this.image = event.target.files[0];
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var fd = new FormData();

            if (this.image) {
              fd.append('image', this.image, this.image.name);
            }

            this.form.patchValue({
              profile: {
                image: fd
              }
            });
            this.doctorsService.postImage(fd).subscribe();
          }
        }]);

        return DoctorDialogComponent;
      }();

      DoctorDialogComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: _doctor_model__WEBPACK_IMPORTED_MODULE_5__["Doctor"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }, {
          type: src_app_services_doctors_service__WEBPACK_IMPORTED_MODULE_7__["DoctorsService"]
        }];
      };

      DoctorDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-doctor-dialog',
        template: _raw_loader_doctor_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_doctor_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _doctor_model__WEBPACK_IMPORTED_MODULE_5__["Doctor"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], src_app_services_doctors_service__WEBPACK_IMPORTED_MODULE_7__["DoctorsService"]])], DoctorDialogComponent);
      /***/
    },

    /***/
    "YZ0C":
    /*!****************************************************!*\
      !*** ./src/app/pages/doctors/doctors.component.ts ***!
      \****************************************************/

    /*! exports provided: DoctorsComponent, DialogOverviewExampleDialog */

    /***/
    function YZ0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorsComponent", function () {
        return DoctorsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function () {
        return DialogOverviewExampleDialog;
      });
      /* harmony import */


      var _raw_loader_doctors_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./doctors.component.html */
      "A7sX");
      /* harmony import */


      var _doctors_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./doctors.component.scss */
      "Jm/O");
      /* harmony import */


      var _raw_loader_dialog_overview_example_dialog_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! raw-loader!./dialog-overview-example-dialog.html */
      "3RPT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../app.settings */
      "/RaO");
      /* harmony import */


      var _services_doctors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/doctors.service */
      "jgvw");
      /* harmony import */


      var _doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./doctor-dialog/doctor-dialog.component */
      "TD+Z");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _doctor_sms_doctor_sms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./doctor-sms/doctor-sms.component */
      "ls96");
      /* harmony import */


      var src_app_services_sms_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/sms.service */
      "RElC");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var DoctorsComponent = /*#__PURE__*/function () {
        function DoctorsComponent(appSettings, dialog, doctorsService, smsService, snackBar) {
          _classCallCheck(this, DoctorsComponent);

          this.appSettings = appSettings;
          this.dialog = dialog;
          this.doctorsService = doctorsService;
          this.smsService = smsService;
          this.snackBar = snackBar;
          this.showSearch = false;
          this.viewType = 'grid';
          this.settings = this.appSettings.settings;
        }

        _createClass(DoctorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDoctors();
          }
        }, {
          key: "AddetSendSms",
          value: function AddetSendSms(Sms) {
            this.smsService.addSms(Sms).subscribe(function (sms) {});
            this.smsService.SendSms(Sms.contacts.type, Sms.contacts.phone, Sms.contacts.message).subscribe(function (sms) {});
          }
        }, {
          key: "getDoctors",
          value: function getDoctors() {
            var _this = this;

            this.doctors = null; //for show spinner each time

            this.doctorsService.getAllDoctors().subscribe(function (doctor) {
              return _this.doctors = doctor;
            });
          }
        }, {
          key: "addDoctor",
          value: function addDoctor(doctor) {
            var _this2 = this;

            this.doctorsService.addDoctor(doctor).subscribe(function (doctor) {
              _this2.getDoctors();
            });
          }
        }, {
          key: "updateDoctor",
          value: function updateDoctor(doctor) {
            var _this3 = this;

            this.doctorsService.updateDoctor(doctor._id, doctor).subscribe(function (doctor) {
              return _this3.getDoctors();
            });
          }
        }, {
          key: "changeView",
          value: function changeView(viewType) {
            this.viewType = viewType;
            this.showSearch = false;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.page = event;
            this.getDoctors();
            document.getElementById('main').scrollTop = 0;
          }
        }, {
          key: "openDoctorDialog",
          value: function openDoctorDialog(doctor) {
            var _this4 = this;

            var dialogRef = this.dialog.open(_doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DoctorDialogComponent"], {
              data: doctor
            });
            dialogRef.afterClosed().subscribe(function (doctor) {
              var doc = doctor;

              if (doc) {
                if (doc._id) {
                  _this4.updateDoctor(doc);
                } else {
                  delete doc._id;

                  _this4.addDoctor(doc);
                } //   (doc._id) ? this.updateDoctor(doc) : delete doc._id; this.addDoctor(doc);

              }
            });
            this.showSearch = false;
          }
        }, {
          key: "openDialog",
          value: function openDialog(user) {
            var _this5 = this;

            var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
              data: {
                message: 'Are you sure want to delete ?',
                buttonText: {
                  ok: 'Save',
                  cancel: 'No'
                }
              }
            });
            dialogRef.afterClosed().subscribe(function (confirmed) {
              var confirm = confirmed;

              if (confirm) {
                _this5.doctorsService.deleteDoctor(user._id).subscribe(function (user) {
                  _this5.getDoctors();

                  var message = "User deleted successfully";
                  var action = "close";

                  _this5.snackBar.open(message, action, {
                    duration: 2000
                  });
                });
              }
            });
          }
        }, {
          key: "openSmsDialog",
          value: function openSmsDialog(Doctor) {
            var _this6 = this;

            var dialogRef = this.dialog.open(_doctor_sms_doctor_sms_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsmsComponent"], {
              data: Doctor
            });
            dialogRef.afterClosed().subscribe(function (sms) {
              var message = sms;

              if (message) {
                delete message._id;
                console.log(message + " hiiii from open dialog");

                _this6.AddetSendSms(sms);
              }
            });
            this.showSearch = false;
          }
        }]);

        return DoctorsComponent;
      }();

      DoctorsComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _services_doctors_service__WEBPACK_IMPORTED_MODULE_6__["DoctorsService"]
        }, {
          type: src_app_services_sms_service__WEBPACK_IMPORTED_MODULE_10__["SmsService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }];
      };

      DoctorsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-doctors',
        template: _raw_loader_doctors_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_doctors_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _services_doctors_service__WEBPACK_IMPORTED_MODULE_6__["DoctorsService"], src_app_services_sms_service__WEBPACK_IMPORTED_MODULE_10__["SmsService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])], DoctorsComponent);

      var DialogOverviewExampleDialog = /*#__PURE__*/function () {
        function DialogOverviewExampleDialog(dialogRef, data) {
          _classCallCheck(this, DialogOverviewExampleDialog);

          this.dialogRef = dialogRef;
          this.data = data;
          this.message = "Are you sure?";
          this.confirmButtonText = "Yes";
          this.cancelButtonText = "Cancel";
        } // if(data) {
        //     this.message = data.message || this.message;
        //     if (data.buttonText) {
        //         console.log("data.buttonText" + data.buttonText);
        //         this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        //         this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        //     }
        // }


        _createClass(DialogOverviewExampleDialog, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "onConfirmClick",
          value: function onConfirmClick() {
            this.dialogRef.close(true);
          }
        }]);

        return DialogOverviewExampleDialog;
      }();

      DialogOverviewExampleDialog.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      DialogOverviewExampleDialog = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: _raw_loader_dialog_overview_example_dialog_html__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])], DialogOverviewExampleDialog);
      /***/
    },

    /***/
    "j6/c":
    /*!*************************************************!*\
      !*** ./src/app/pages/doctors/doctors.module.ts ***!
      \*************************************************/

    /*! exports provided: routes, DoctorsModule */

    /***/
    function j6C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorsModule", function () {
        return DoctorsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      "koPj");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../theme/pipes/pipes.module */
      "DXe4");
      /* harmony import */


      var _doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./doctors.component */
      "YZ0C");
      /* harmony import */


      var _doctors_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./doctors.data */
      "0FgK");
      /* harmony import */


      var _doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./doctor-dialog/doctor-dialog.component */
      "TD+Z");
      /* harmony import */


      var _doctor_sms_doctor_sms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./doctor-sms/doctor-sms.component */
      "ls96");
      /* harmony import */


      var src_app_services_canActivateDocsPats_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/canActivateDocsPats.guard */
      "ZV6X");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        canActivate: [src_app_services_canActivateDocsPats_guard__WEBPACK_IMPORTED_MODULE_13__["AuthActivateGuard"]],
        component: _doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"],
        pathMatch: 'full'
      }];

      var DoctorsModule = function DoctorsModule() {
        _classCallCheck(this, DoctorsModule);
      };

      DoctorsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["InMemoryWebApiModule"].forRoot(_doctors_data__WEBPACK_IMPORTED_MODULE_10__["DoctorsData"], {
          delay: 500
        }), ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DoctorDialogComponent"], _doctor_sms_doctor_sms_component__WEBPACK_IMPORTED_MODULE_12__["DoctorsmsComponent"]],
        entryComponents: [_doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DoctorDialogComponent"]]
      })], DoctorsModule);
      /***/
    },

    /***/
    "ls96":
    /*!******************************************************************!*\
      !*** ./src/app/pages/doctors/doctor-sms/doctor-sms.component.ts ***!
      \******************************************************************/

    /*! exports provided: DoctorsmsComponent */

    /***/
    function ls96(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorsmsComponent", function () {
        return DoctorsmsComponent;
      });
      /* harmony import */


      var _raw_loader_doctor_sms_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./doctor-sms.component.html */
      "HLp0");
      /* harmony import */


      var _doctor_sms_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./doctor-sms.component.scss */
      "tPKs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _doctor_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../doctor.model */
      "0x2j");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var DoctorsmsComponent = /*#__PURE__*/function () {
        function DoctorsmsComponent(dialogRef, doctor, snackBar) {
          _classCallCheck(this, DoctorsmsComponent);

          this.dialogRef = dialogRef;
          this.doctor = doctor;
          this.snackBar = snackBar;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            userOwner: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            smsOwner: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            onModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            contacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            })
          });
        }

        _createClass(DoctorsmsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var token = localStorage.getItem('token');
            var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(token);

            if (this.doctor) {
              this.form.patchValue(this.doctor);
              this.form.patchValue({
                smsOwner: this.doctor._id,
                onModel: 'Doctor',
                userOwner: JSON.parse(JSON.stringify(decoded))._id,
                status: "envoyé"
              });
            } else {
              this.doctor = new _doctor_model__WEBPACK_IMPORTED_MODULE_5__["Doctor"]();
              this.doctor.contacts = new _doctor_model__WEBPACK_IMPORTED_MODULE_5__["DoctorContacts"]();
            }
          }
        }, {
          key: "openSnackBarAdd",
          value: function openSnackBarAdd() {
            var message = "sms added successfully";
            var action = "Annuler";
            this.snackBar.open(message, action, {
              duration: 2000
            });
          }
        }, {
          key: "openSnackBarUpdate",
          value: function openSnackBarUpdate() {
            var message = "sms updated successfully";
            var action = "Annuler";
            this.snackBar.open(message, action, {
              duration: 2000
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return DoctorsmsComponent;
      }();

      DoctorsmsComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: _doctor_model__WEBPACK_IMPORTED_MODULE_5__["Doctor"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      };

      DoctorsmsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-doctor-dialog',
        template: _raw_loader_doctor_sms_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_doctor_sms_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _doctor_model__WEBPACK_IMPORTED_MODULE_5__["Doctor"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])], DoctorsmsComponent);
      /***/
    },

    /***/
    "tPKs":
    /*!********************************************************************!*\
      !*** ./src/app/pages/doctors/doctor-sms/doctor-sms.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function tPKs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".patient-form .form-field-outer {\n  width: 280px;\n}\n.patient-form .mat-radio-button {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZG9jdG9yLXNtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7QUFBUiIsImZpbGUiOiJkb2N0b3Itc21zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhdGllbnQtZm9ybXtcclxuICAgIC5mb3JtLWZpZWxkLW91dGVye1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgIH1cclxuICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "xsyV":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/doctors/doctor-dialog/doctor-dialog.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function xsyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-form .form-field-outer {\n  width: 280px;\n}\n.user-form .mat-radio-button {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZG9jdG9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7QUFBUiIsImZpbGUiOiJkb2N0b3ItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItZm9ybXtcclxuICAgIC5mb3JtLWZpZWxkLW91dGVye1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgIH1cclxuICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-doctors-doctors-module-es5.js.map