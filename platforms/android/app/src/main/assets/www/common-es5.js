(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "A2gu":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-bda125fb.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function A2gu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-cf6e85ee.js */
      "Ke8Y");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context2.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_cf6e85ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context2.abrupt("return", el);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "BUgR":
    /*!**************************************************!*\
      !*** ./src/app/services/actionnaires.service.ts ***!
      \**************************************************/

    /*! exports provided: ActionnairesService */

    /***/
    function BUgR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionnairesService", function () {
        return ActionnairesService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

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

      var ActionnairesService = /*#__PURE__*/function () {
        function ActionnairesService(http) {
          _classCallCheck(this, ActionnairesService);

          this.http = http;
          this.actionnairesUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].basUrl;
        }

        _createClass(ActionnairesService, [{
          key: "addActionnaire",
          value: function addActionnaire(data) {
            return this.http.post(this.actionnairesUrl + "actionnaires/actionnaire/add", data);
          }
        }, {
          key: "getActionnaire",
          value: function getActionnaire(id) {
            return this.http.get(this.actionnairesUrl + "actionnaires/actionnaire" + id);
          }
        }, {
          key: "updateActionnaire",
          value: function updateActionnaire(id, data) {
            return this.http.put(this.actionnairesUrl + "actionnaires/actionnaire/update/" + id, data);
          }
        }, {
          key: "deleteActionnaire",
          value: function deleteActionnaire(id) {
            return this.http["delete"](this.actionnairesUrl + "actionnaires/actionnaire/delete/" + id);
          }
        }, {
          key: "getAllActionnaires",
          value: function getAllActionnaires() {
            return this.http.get(this.actionnairesUrl + "actionnaires/getAllactionnaires");
          }
        }]);

        return ActionnairesService;
      }();

      ActionnairesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      ActionnairesService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], ActionnairesService);
      /***/
    },

    /***/
    "EFyh":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function EFyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

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

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http) {
          _classCallCheck(this, LoginService);

          this.http = http;
          this.usersUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].basUrl;
        }

        _createClass(LoginService, [{
          key: "loginUser",
          value: function loginUser(data) {
            return this.http.post(this.usersUrl + "users/login/", data);
          }
        }, {
          key: "addUser",
          value: function addUser(data) {
            return this.http.post(this.usersUrl + "users/user/add/", data);
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            return this.http.get(this.usersUrl + "users/user/" + id);
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, data) {
            return this.http.put(this.usersUrl + "users/user/update/" + id, data);
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            return this.http["delete"](this.usersUrl + "users/user/delete/" + id);
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers() {
            return this.http.get(this.usersUrl + "users/getAllusers");
          }
        }, {
          key: "getAllRoles",
          value: function getAllRoles() {
            return this.http.get(this.usersUrl + "users/getAllRoles");
          }
        }, {
          key: "updateUserConge",
          value: function updateUserConge(id, data) {
            return this.http.put(this.usersUrl + "users/user/updateConge/" + id, data);
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      LoginService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], LoginService);
      /***/
    },

    /***/
    "QCQZ":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/form-field/form-field.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QCQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-content-header [icon]=\"'view_stream'\" [title]=\"'Maintenance'\" [hideBreadcrumb]=\"false\" [hasBgImage]=\"true\"\r\n    [class]=\"'pb-4'\"></app-content-header>\r\n\r\n<div fxLayout=\"column\" class=\"p-2\">\r\n    <div class=\"p-2\">\r\n        <form [formGroup]=\"formMaintenance\">\r\n            <mat-card>\r\n                <mat-card-header fxLayoutAlign=\"center\">\r\n                    <mat-card-subtitle>\r\n                        <h2>Demande de maintenance</h2>\r\n                    </mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Titre\" formControlName=\"title\" >\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <textarea matInput placeholder=\"description\" formControlName=\"descriptionMaintenance\"></textarea>\r\n                    </mat-form-field>\r\n                   \r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Type de Maintenance\" formControlName=\"type\">\r\n                            <mat-option value=\"informatique\">Informatique</mat-option>\r\n                            <mat-option value=\"autres\">Autres</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                       <br>\r\n                       <br>                  \r\n                </mat-card-content>\r\n                <div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit()\" [mat-dialog-close]=\"formMaintenance.value\" [disabled]=\"!formMaintenance.valid\" >Envoyé Demande</button>\r\n                    \r\n                </div>\r\n            </mat-card>\r\n        </form>\r\n    </div>\r\n\r\n</div>";
      /***/
    },

    /***/
    "YE1e":
    /*!**********************************************!*\
      !*** ./src/app/services/patients.service.ts ***!
      \**********************************************/

    /*! exports provided: PatientsService */

    /***/
    function YE1e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatientsService", function () {
        return PatientsService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

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

      var PatientsService = /*#__PURE__*/function () {
        function PatientsService(http) {
          _classCallCheck(this, PatientsService);

          this.http = http;
          this.patientsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].basUrl;
        }

        _createClass(PatientsService, [{
          key: "addPatient",
          value: function addPatient(data) {
            return this.http.post(this.patientsUrl + "patients/patient/add", data);
          }
        }, {
          key: "getPatient",
          value: function getPatient(id) {
            return this.http.get(this.patientsUrl + "patients/patient" + id);
          }
        }, {
          key: "updatePatient",
          value: function updatePatient(id, data) {
            return this.http.put(this.patientsUrl + "patients/patient/update/" + id, data);
          }
        }, {
          key: "deletePatient",
          value: function deletePatient(id) {
            return this.http["delete"](this.patientsUrl + "patients/patient/delete/" + id);
          }
        }, {
          key: "getAllPatients",
          value: function getAllPatients() {
            return this.http.get(this.patientsUrl + "patients/getAllpatients");
          }
        }]);

        return PatientsService;
      }();

      PatientsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      PatientsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], PatientsService);
      /***/
    },

    /***/
    "ZV6X":
    /*!*******************************************************!*\
      !*** ./src/app/services/canActivateDocsPats.guard.ts ***!
      \*******************************************************/

    /*! exports provided: AuthActivateGuard */

    /***/
    function ZV6X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthActivateGuard", function () {
        return AuthActivateGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _guardservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guardservice.service */
      "tA9a");

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

      var AuthActivateGuard = /*#__PURE__*/function () {
        function AuthActivateGuard(auth, router) {
          _classCallCheck(this, AuthActivateGuard);

          this.auth = auth;
          this.router = router;
        }

        _createClass(AuthActivateGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (!this.auth.isAllowed()) {
              this.router.navigate(['']);
              return false;
            }

            return true;
          }
        }]);

        return AuthActivateGuard;
      }();

      AuthActivateGuard.ctorParameters = function () {
        return [{
          type: _guardservice_service__WEBPACK_IMPORTED_MODULE_2__["GuardserviceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AuthActivateGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_guardservice_service__WEBPACK_IMPORTED_MODULE_2__["GuardserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AuthActivateGuard);
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "jgvw":
    /*!*********************************************!*\
      !*** ./src/app/services/doctors.service.ts ***!
      \*********************************************/

    /*! exports provided: DoctorsService */

    /***/
    function jgvw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorsService", function () {
        return DoctorsService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

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

      var DoctorsService = /*#__PURE__*/function () {
        function DoctorsService(http) {
          _classCallCheck(this, DoctorsService);

          this.http = http;
          this.doctorsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].basUrl;
        }

        _createClass(DoctorsService, [{
          key: "addDoctor",
          value: function addDoctor(data) {
            return this.http.post(this.doctorsUrl + "doctors/doctor/add/", data);
          }
        }, {
          key: "getDoctor",
          value: function getDoctor(id) {
            return this.http.get(this.doctorsUrl + "doctors/doctor/" + id);
          }
        }, {
          key: "updateDoctor",
          value: function updateDoctor(id, data) {
            return this.http.put(this.doctorsUrl + "doctors/doctor/update/" + id, data);
          }
        }, {
          key: "deleteDoctor",
          value: function deleteDoctor(id) {
            return this.http["delete"](this.doctorsUrl + "doctors/doctor/delete/" + id);
          }
        }, {
          key: "getAllDoctors",
          value: function getAllDoctors() {
            return this.http.get(this.doctorsUrl + "doctors/getAllDoctors");
          }
        }, {
          key: "postImage",
          value: function postImage(data) {
            return this.http.post(this.doctorsUrl + "users/upload/", data);
          }
        }]);

        return DoctorsService;
      }();

      DoctorsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      DoctorsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], DoctorsService);
      /***/
    },

    /***/
    "pX2f":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-e272e3f1.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function pX2f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-3ccd7557.js */
      "2atR");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_3ccd7557_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "v+1Q":
    /*!************************************************************************!*\
      !*** ./src/app/pages/form-controls/form-field/form-field.component.ts ***!
      \************************************************************************/

    /*! exports provided: FormFieldComponent */

    /***/
    function v1Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldComponent", function () {
        return FormFieldComponent;
      });
      /* harmony import */


      var _raw_loader_form_field_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./form-field.component.html */
      "QCQZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/maintenance.service */
      "or22");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _node_modules_jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../node_modules/jwt-decode */
      "EjJx");
      /* harmony import */


      var src_app_theme_components_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/theme/components/messages/messages.service */
      "5KN4");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/users.service */
      "6Qg2");

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

      var FormFieldComponent = /*#__PURE__*/function () {
        function FormFieldComponent(maintenancesService, snackBar, loginService, messagesService, UserService) {
          _classCallCheck(this, FormFieldComponent);

          this.maintenancesService = maintenancesService;
          this.snackBar = snackBar;
          this.loginService = loginService;
          this.messagesService = messagesService;
          this.UserService = UserService;
          this.formMaintenance = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            descriptionMaintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }

        _createClass(FormFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formMaintenance = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              descriptionMaintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
              userOwner: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            });
          } // add maintenance

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            var token = localStorage.getItem('token');
            var decoded = Object(_node_modules_jwt_decode__WEBPACK_IMPORTED_MODULE_5__["default"])(token);
            this.formMaintenance.patchValue({
              userOwner: JSON.parse(JSON.stringify(decoded))._id
            });
            this.maintenancesService.addMaintenance(this.formMaintenance.value).subscribe(function (val) {
              var message = "Maintenance added successfully";
              var action = "close";

              _this.snackBar.open(message, action, {
                duration: 2000
              });

              if (_this.formMaintenance.value.type === "informatique") {
                _this.UserService.getAllUsers().subscribe(function (res) {
                  var user = res.find(function (x) {
                    return x.work.roles[0].name === 'Responsable-info';
                  });
                  _this.messages = {
                    reciever: user._id,
                    text: "you have new maintenance",
                    userOwner: JSON.parse(JSON.stringify(decoded))._id,
                    maintenance: true
                  };

                  _this.messagesService.sendNotification(_this.messages).subscribe();
                });
              }

              if (_this.formMaintenance.value.type === "autres") {
                _this.UserService.getAllUsers().subscribe(function (res) {
                  var user1 = res.find(function (x) {
                    return x.work.roles[0].name === 'respon-maintenance';
                  });
                  _this.messages = {
                    reciever: user1._id,
                    text: "you have new maintenance",
                    userOwner: JSON.parse(JSON.stringify(decoded))._id,
                    maintenance: true
                  };

                  _this.messagesService.sendNotification(_this.messages).subscribe();
                });
              }

              _this.ngOnInit();
            });
          }
        }]);

        return FormFieldComponent;
      }();

      FormFieldComponent.ctorParameters = function () {
        return [{
          type: src_app_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenancesService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
        }, {
          type: src_app_theme_components_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]
        }, {
          type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
        }];
      };

      FormFieldComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-field',
        template: _raw_loader_form_field_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [src_app_theme_components_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]]
      }), __metadata("design:paramtypes", [src_app_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenancesService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], src_app_theme_components_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"], src_app_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]])], FormFieldComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map