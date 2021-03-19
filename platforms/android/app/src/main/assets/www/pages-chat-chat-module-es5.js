(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"], {
    /***/
    "3wAj":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function wAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-content-header [title]=\"'Chat'\" [hideBreadcrumb]=\"false\" [hasBgImage]=\"true\" [class]=\"'pb-5'\"></app-content-header>\r\n\r\n<mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"px-2 chat-toolbar\">\r\n    <div fxLayout=\"row\">\r\n        <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n            <mat-icon>list</mat-icon>\r\n        </button>\r\n        <button mat-icon-button class=\"mx-2\">\r\n            <mat-icon>search</mat-icon>\r\n        </button>\r\n    </div>\r\n    <form class=\"user-search\" >\r\n        <mat-form-field class=\"user-search-input\">\r\n            <input matInput placeholder=\"Search user by name...\" [(ngModel)]=\"searchText\" name=\"search\">\r\n        </mat-form-field>\r\n    </form>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-list class=\"p-0\">\r\n            <mat-list-item>\r\n                <img matListAvatar [src]=\"currentChat.candidat1._id != userId ?currentChat.candidat1.profile.image : currentChat.candidat2.profile.image \"\r\n                    class=\"author-img\">\r\n            </mat-list-item>\r\n        </mat-list>\r\n        <span class=\"author-name\">{{currentChat.candidat1._id != userId ?currentChat.candidat1.profile.name :currentChat.candidat2.profile.name }} {{currentChat.candidat1._id != userId ?currentChat.candidat1.profile.surname :currentChat.candidat2.profile.surname}}</span>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"personMenu\" #personMenuTrigger=\"matMenuTrigger\">\r\n            <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #personMenu=\"matMenu\" xPosition=\"before\">\r\n            <span (mouseleave)=\"personMenuTrigger.closeMenu()\">\r\n                <button mat-menu-item (click)=\"personInfo.toggle()\">\r\n                    <mat-icon>account_circle</mat-icon>\r\n                    <span>Contact info</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"deleteChat(currentChat._id)\">\r\n                    <mat-icon>delete_forever</mat-icon>\r\n                    <span>Clear chat</span>\r\n                </button>\r\n            </span>\r\n        </mat-menu>\r\n    </div>\r\n</mat-toolbar>\r\n\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\">\r\n        <mat-card class=\"p-0 chat\">\r\n            <mat-drawer-container class=\"chat-container\">\r\n                <mat-drawer #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\"\r\n                    class=\"chat-sidenav mat-elevation-z1\" autoFocus=\"false\">\r\n                    <mat-nav-list class=\"p-0 chat-sidenav-list\" perfectScrollbar>\r\n                        <mat-list-item *ngFor=\"let chat of listeCandidats |  UserSearchPipe : searchText\" (click)=\"clickUser(chat._id)\" >\r\n                            <img matListAvatar [src]=\"chat.profile.image\">\r\n                            <h6 matLine> {{chat.profile.name}} {{chat.profile.surname}}  </h6>\r\n                            <p matLine fxLayout=\"row\" fxLayoutAlign=\"none center\" class=\"secondary-text-color\">\r\n                                <span [ngSwitch]=\"chat.authorStatus\">\r\n                                    <mat-icon *ngSwitchCase=\"'Online'\" class=\"chat-status-icon\">check_circle</mat-icon>\r\n                                    <mat-icon *ngSwitchCase=\"'Offline'\" class=\"chat-status-icon\">highlight_off\r\n                                    </mat-icon>\r\n                                    <mat-icon *ngSwitchCase=\"'Away'\" class=\"chat-status-icon\">schedule</mat-icon>\r\n                                    <mat-icon *ngSwitchCase=\"'Do not disturb'\" class=\"chat-status-icon\">not_interested\r\n                                    </mat-icon>\r\n                                </span>\r\n                                <!-- <span class=\"author-status\">{{chat.authorStatus}}</span> -->\r\n                            </p>\r\n                        </mat-list-item>\r\n                    </mat-nav-list>\r\n                </mat-drawer>\r\n\r\n                <div>\r\n                    <div class=\"chat-content\" [class.actions-visible]=\"talks\" perfectScrollbar >\r\n                        <mat-list *ngIf=\"talks\" class=\"p-0\">\r\n                            <mat-list-item *ngFor=\"let talk of talks \" class=\"talk-item\">\r\n                                <img matListAvatar [src]=\"talk.logo\"  *ngIf=\"(talk.content != undefined && talk.content != '' )||(talk.files != undefined && talk.files != '' )\">\r\n                                <p matLine class=\"message\" >\r\n                                    <span [ngClass]=\"(talk.candidat !== userId) ? 'bg-primary' : 'bg-accent'\"\r\n                                    *ngIf=\"talk.content != undefined && talk.content != '' \" >{{talk.content}}</span>\r\n                                </p>\r\n                                <p matLine class=\"message\" *ngIf=\"talk.files.length > 0\">\r\n                                    <a [href]=\"talk.files\"\r\n                                        [ngClass]=\"(talk.candidat != userId) ? 'bg-primary' : 'bg-accent'\">{{talk.files[0] | slice:-17}}</a>\r\n                                </p>\r\n                                <p matLine class=\"message-date\">\r\n                                    <small *ngIf=\"(talk.content != undefined && talk.content != '' )|| talk.files.length >0\" >{{talk.createdDate |timeAgo}}</small>\r\n                                </p>\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                        <div *ngIf=\"!talks\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"h-100 empty\">\r\n                            <mat-icon>chat</mat-icon>\r\n                            <p>Select a interlocutor for talk</p>\r\n                        </div>\r\n                    </div>\r\n                    <mat-card *ngIf=\"talks\" class=\"chat-actions\">\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <form [formGroup]=\"messageForm\">\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"Enter your text...\" formControlName=\"content\">\r\n                                </mat-form-field>\r\n\r\n                            </form>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"scenter center\">\r\n                                <input type=\"file\" name=\"myFiles\" [(ngModel)]=\"myFiles\" (change)=\"selectFile($event)\" accept=\"file/*\">\r\n                                <!-- <mat-icon>attach_file</mat-icon> -->\r\n                                <button mat-mini-fab color=\"primary\" type=\"button\" (click)=\"sendMessage()\">\r\n                                    <mat-icon>send</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n\r\n                <mat-drawer #personInfo mode=\"over\" position=\"end\" class=\"person-info-sidenav mat-elevation-z1\"\r\n                    autoFocus=\"false\">\r\n                    <div class=\"p-0 h-100\" perfectScrollbar>\r\n\r\n                        <div class=\"bg-primary w-100 text-center\">\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"p-2\">\r\n                                <h2>Contact Info</h2>\r\n                                <button mat-icon-button (click)=\"personInfo.toggle()\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                            <img *ngIf=\"currentChat\"\r\n                                [src]=\"currentChat.candidat1._id != userId ?currentChat.candidat1.profile.image :currentChat.candidat2.profile.image\" class=\"py-2\">\r\n                            <h2 *ngIf=\"currentChat\" class=\"pb-3\">{{currentChat.candidat1._id != userId ?currentChat.candidat1.profile.surname :currentChat.candidat2.profile.surname }} {{currentChat.candidat1._id != userId ?currentChat.candidat1.profile.name :currentChat.candidat2.profile.name }}</h2>\r\n                        </div>\r\n                        <mat-list>\r\n                            <mat-list-item>\r\n                                <mat-icon matListIcon class=\"secondary-text-color\">mail_outline</mat-icon>\r\n                                <h3 matLine>{{currentChat.candidat1._id != userId ?currentChat.candidat1.contacts.email:currentChat.candidat2.contacts.email}}</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <mat-icon matListIcon class=\"secondary-text-color\">call</mat-icon>\r\n                                <h3 matLine>{{currentChat.candidat1._id != userId ?currentChat.candidat1.contacts.phone:currentChat.candidat2.contacts.phone}}</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <mat-icon matListIcon class=\"secondary-text-color\">location_on</mat-icon>\r\n                                <h3 matLine>Y</h3>\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                    </div>\r\n                </mat-drawer>\r\n\r\n            </mat-drawer-container>\r\n        </mat-card>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "6PM2":
    /*!********************************************!*\
      !*** ./src/app/pages/chat/chat.service.ts ***!
      \********************************************/

    /*! exports provided: ChatService */

    /***/
    function PM2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

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

      var ChatService = /*#__PURE__*/function () {
        function ChatService(httpClient) {
          _classCallCheck(this, ChatService);

          this.httpClient = httpClient;
          this.url = 'http://localhost:3000';
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
        }

        _createClass(ChatService, [{
          key: "getPrivateMessage",
          value: function getPrivateMessage(idCandidat1, idCandidat2) {
            return this.httpClient.get(this.url + '/chat/getPrivateMessage/' + idCandidat1 + '/' + idCandidat2);
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(message, idChat) {
            return this.httpClient.post(this.url + '/chat/sendMessage/' + idChat, message);
          }
        }, {
          key: "deleteChat",
          value: function deleteChat(chatId) {
            return this.httpClient.get(this.url + '/chat/deleteChat/' + chatId);
          }
        }]);

        return ChatService;
      }();

      ChatService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ChatService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ChatService);
      /***/
    },

    /***/
    "EdD2":
    /*!*******************************************!*\
      !*** ./src/app/pages/chat/chat.module.ts ***!
      \*******************************************/

    /*! exports provided: routes, ChatModule */

    /***/
    function EdD2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatModule", function () {
        return ChatModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat.component */
      "WSoB");
      /* harmony import */


      var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../theme/pipes/pipes.module */
      "DXe4");

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
        component: _chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
        pathMatch: 'full'
      }];

      var ChatModule = function ChatModule() {
        _classCallCheck(this, ChatModule);
      };

      ChatModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]]
      })], ChatModule);
      /***/
    },

    /***/
    "WSoB":
    /*!**********************************************!*\
      !*** ./src/app/pages/chat/chat.component.ts ***!
      \**********************************************/

    /*! exports provided: ChatComponent */

    /***/
    function WSoB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
      });
      /* harmony import */


      var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./chat.component.html */
      "3wAj");
      /* harmony import */


      var _chat_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chat.component.scss */
      "i5kj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.settings */
      "/RaO");
      /* harmony import */


      var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chat.service */
      "6PM2");
      /* harmony import */


      var _node_modules_jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../node_modules/jwt-decode */
      "EjJx");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-socket-io */
      "7JkF");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var src_app_theme_components_messages_messages_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/theme/components/messages/messages.service */
      "5KN4");

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

      var ChatComponent = /*#__PURE__*/function () {
        function ChatComponent(appSettings, socket, chatService, auth, messagesService) {
          _classCallCheck(this, ChatComponent);

          this.appSettings = appSettings;
          this.socket = socket;
          this.chatService = chatService;
          this.auth = auth;
          this.messagesService = messagesService;
          this.userImage = 'assets/img/users/user.jpg';
          this.sidenavOpen = true;
          this.token = localStorage.getItem('token');
          this.decoded = JSON.parse(JSON.stringify(Object(_node_modules_jwt_decode__WEBPACK_IMPORTED_MODULE_5__["default"])(this.token)));
          this.userId = this.decoded._id;
          this.listeMessages = [];
          this.listeCandidats = [];
          this.settings = this.appSettings.settings;
        }

        _createClass(ChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (window.innerWidth <= 768) {
              this.sidenavOpen = false;
            }

            this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
              content: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              candidat: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.decoded._id),
              logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.decoded.user.profile.image)
            });
            this.socket.on('newUserAdded', function () {
              _this.auth.getAllUsers().subscribe(function (res) {
                _this.chats = _this.listeCandidats = res.filter(function (obj) {
                  return obj._id !== _this.userId;
                });
              });
            });
            this.auth.getAllUsers().subscribe(function (res) {
              _this.chats = _this.listeCandidats = res.filter(function (obj) {
                return obj._id !== _this.userId;
              });

              _this.clickUser(_this.listeCandidats[0]._id);
            });
            this.socket.on('newMessageSended', function () {
              _this.clickUser(_this.chosenUser);
            });
          }
        }, {
          key: "clickUser",
          value: function clickUser(idCandidat) {
            var _this2 = this;

            this.chosenUser = idCandidat;
            this.chatService.getPrivateMessage(idCandidat, this.userId).subscribe(function (res) {
              _this2.conversation = res._id;
              _this2.currentChat = res;

              if (window.innerWidth <= 768) {
                _this2.sidenav.close();
              }

              _this2.talks = _this2.listeMessages = res.messages;
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this3 = this;

            this.formData = new FormData();

            if (this.file != null) {
              this.formData.append('myFiles', this.file, this.file.name);
            }

            Object.keys(this.messageForm.value).forEach(function (fieldName) {
              _this3.formData.append(fieldName, _this3.messageForm.value[fieldName]);
            });
            this.chatService.sendMessage(this.formData, this.conversation).subscribe(function (res) {});
            this.myFiles = '';
            this.messageForm.patchValue({
              content: '',
              files: ''
            });
            this.file = null;
            var message = {
              reciever: this.chosenUser,
              text: "sent you a message",
              userOwner: this.userId,
              messages: true,
              chatUrl: 'chat'
            };
            this.messagesService.sendNotification(message).subscribe(); // let chatContainer = document.querySelector('.chat-content');
            // if (chatContainer) {
            //   setTimeout(() => {
            //     var nodes = chatContainer.querySelectorAll('.mat-list-item');
            //     let newChatTextHeight = nodes[nodes.length - 1];
            //     chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight.clientHeight;
            //   });
            // }
          }
        }, {
          key: "selectFile",
          value: function selectFile(event) {
            if (event.target.value) {
              this.file = event.target.files[0];
            }
          }
        }, {
          key: "deleteChat",
          value: function deleteChat(chatId) {
            this.chatService.deleteChat(chatId).subscribe(function (res) {});
          }
        }, {
          key: "onWindowResize",
          value: function onWindowResize() {
            window.innerWidth <= 768 ? this.sidenavOpen = false : this.sidenavOpen = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.talks) this.talks.length = 2;
          }
        }]);

        return ChatComponent;
      }();

      ChatComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }, {
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"]
        }, {
          type: _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]
        }, {
          type: src_app_theme_components_messages_messages_service__WEBPACK_IMPORTED_MODULE_9__["MessagesService"]
        }];
      };

      ChatComponent.propDecorators = {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['sidenav']
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['window:resize']
        }]
      };
      ChatComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"], src_app_theme_components_messages_messages_service__WEBPACK_IMPORTED_MODULE_9__["MessagesService"]],
        styles: [_chat_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"], _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], src_app_theme_components_messages_messages_service__WEBPACK_IMPORTED_MODULE_9__["MessagesService"]])], ChatComponent);
      /***/
    },

    /***/
    "i5kj":
    /*!************************************************!*\
      !*** ./src/app/pages/chat/chat.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function i5kj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chat-container {\n  height: calc(100vh - (56px + 56px + 148px));\n}\n\n.chat-toolbar {\n  background: transparent !important;\n  height: 40px;\n  margin-top: -40px;\n}\n\n.chat-toolbar .author-img {\n  width: 34px;\n  height: 34px;\n}\n\n.chat-toolbar .author-name {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.chat {\n  border-radius: 0;\n}\n\n.chat .chat-actions {\n  padding: 12px;\n}\n\n.chat .talk-item {\n  padding: 6px 0;\n  height: 100%;\n}\n\n.chat .message {\n  white-space: unset;\n  text-overflow: unset;\n}\n\n.chat .message span {\n  padding: 6px 10px;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 14px;\n}\n\n.chat .message-date {\n  opacity: 0.8;\n}\n\n.chat .empty mat-icon {\n  font-size: 220px;\n  height: 220px;\n  width: 220px;\n  opacity: 0.4;\n}\n\n.chat .empty p {\n  font-size: 18px;\n  opacity: 0.8;\n}\n\n.chat-status-icon {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  line-height: 22px;\n  margin-right: 6px;\n}\n\n.author-status {\n  font-size: 13px;\n}\n\n.chat-sidenav {\n  border-right: 1px solid transparent;\n  overflow: hidden;\n}\n\n.chat-content {\n  padding: 12px;\n  height: calc(100vh - (56px + 56px + 174px));\n}\n\n.chat-content.actions-visible {\n  height: calc(100vh - (56px + 56px + 254px));\n}\n\n.chat-sidenav-list {\n  height: 100%;\n}\n\n.person-info-sidenav {\n  width: 280px;\n}\n\n.person-info-sidenav h2 {\n  font-weight: 400;\n}\n\n.person-info-sidenav img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n}\n\n@media (max-width: 960px) {\n  .chat-container {\n    height: calc(100vh - (56px + 56px + 130px));\n  }\n\n  .chat-content {\n    height: calc(100vh - (56px + 56px + 154px));\n  }\n  .chat-content.actions-visible {\n    height: calc(100vh - (56px + 56px + 236px));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMkNBQUE7QUFESjs7QUFHQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ1I7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUNJO0VBQ0ksYUFBQTtBQUNSOztBQUNJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFDUjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFDUjs7QUFBUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFFWjs7QUFDSTtFQUNJLFlBQUE7QUFDUjs7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQVo7O0FBRVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFaOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksbUNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLDJDQUFBO0FBRUo7O0FBREk7RUFDSSwyQ0FBQTtBQUdSOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUhJO0VBQ0ksZ0JBQUE7QUFLUjs7QUFISTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFLUjs7QUFBQTtFQUNJO0lBQ0ksMkNBQUE7RUFHTjs7RUFERTtJQUNJLDJDQUFBO0VBSU47RUFITTtJQUNJLDJDQUFBO0VBS1Y7QUFDRiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5jaGF0LWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b3AtdG9vbGJhci1oZWlnaHR9ICsgI3skZm9vdGVyLXRvb2xiYXItaGVpZ2h0fSArIDE0OHB4KSk7XHJcbn1cclxuLmNoYXQtdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIC5hdXRob3ItaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgIH1cclxuICAgIC5hdXRob3ItbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgICBcclxufVxyXG4uY2hhdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAuY2hhdC1hY3Rpb25ze1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9ICAgIFxyXG4gICAgLnRhbGstaXRlbXtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZXtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7ICAgICAgIFxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlLWRhdGV7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG4gICAgLmVtcHR5e1xyXG4gICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jaGF0LXN0YXR1cy1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbi5hdXRob3Itc3RhdHVze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jaGF0LXNpZGVuYXZ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICAgXHJcbn1cclxuLmNoYXQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoI3skdG9wLXRvb2xiYXItaGVpZ2h0fSArICN7JGZvb3Rlci10b29sYmFyLWhlaWdodH0gKyAxNzRweCkpO1xyXG4gICAgJi5hY3Rpb25zLXZpc2libGV7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItdG9vbGJhci1oZWlnaHR9ICsgMjU0cHgpKTtcclxuICAgIH1cclxufVxyXG4uY2hhdC1zaWRlbmF2LWxpc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wZXJzb24taW5mby1zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHsgXHJcbiAgICAuY2hhdC1jb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItdG9vbGJhci1oZWlnaHR9ICsgMTMwcHgpKTtcclxuICAgIH1cclxuICAgIC5jaGF0LWNvbnRlbnR7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItdG9vbGJhci1oZWlnaHR9ICsgMTU0cHgpKTtcclxuICAgICAgICAmLmFjdGlvbnMtdmlzaWJsZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRmb290ZXItdG9vbGJhci1oZWlnaHR9ICsgMjM2cHgpKTtcclxuICAgICAgICB9ICBcclxuICAgIH0gIFxyXG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-chat-chat-module-es5.js.map