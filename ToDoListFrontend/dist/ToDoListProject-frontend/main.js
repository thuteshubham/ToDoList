(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ToDoListProject-frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort-countries.pipe */ "./src/app/sort-countries.pipe.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _todo_todo_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./todo/todo.module */ "./src/app/todo/todo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//routing 



//for Http service

//for toast message



//import statement to use font awesome library

//for loading spinner





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_10__["SortCountriesPipe"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_14__["ServerErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_12__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _todo_todo_module__WEBPACK_IMPORTED_MODULE_16__["TodoModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], pathMatch: 'full' },
                    { path: 'page-not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"] },
                    { path: 'server-error', component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_14__["ServerErrorComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
                ])
            ],
            providers: [_sort_countries_pipe__WEBPACK_IMPORTED_MODULE_10__["SortCountriesPipe"], _app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for using cookies

//Importing the required files for http services.

//import { Observable } from 'rxjs';

var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.url = 'http://localhost:3004';
        this.baseURL = this.url + "/api/v1";
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        //Method to get country list
        this.getCountryList = function () {
            var response = _this.http.get('../assets/countries.json');
            return response;
        }; //end
        //method to get country code
        this.getCountryCode = function () {
            var response = _this.http.get('../assets/country-code-list.json');
            return response;
        }; //end
        //Get All Users:
        this.getAllpeople = function (token) {
            return _this.http.get(_this.baseURL + "/users/view/allUsers?authToken=" + token);
        };
        /*
          To-Do List related services
        */
        //Creating a new Todo List:
        this.createTodo = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("listName", data.listName)
                .set("userId", data.userId)
                .set("creator", data.creator)
                .set("private", data.private);
            return _this.http.post(_this.baseURL + "/lists/createList?authToken=" + token, params);
        };
        //Getting All Todo List:
        this.getAlltodo = function (token) {
            return _this.http.get(_this.baseURL + "/lists/allLists?authToken=" + token);
        };
        //Removing  todo List:
        this.removetodolist = function (listId, token) {
            return _this.http.post(_this.baseURL + "/lists/" + listId + "/delete?authToken=" + token, listId);
        };
        //Editing  todo List:
        this.edittodolist = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('listName', data.listName);
            return _this.http.put(_this.baseURL + "/lists/" + data.listId + "/edit?authToken=" + token, params);
        };
        /*
          Items related services
        */
        //Get Tasks
        this.getItems = function (token) {
            return _this.http.get(_this.baseURL + "/items/allItems?authToken=" + token);
        };
        //Create A New Item:
        this.createNewItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("listId", data.listId)
                .set("itemName", data.itemName);
            return _this.http.post(_this.baseURL + "/items/createItem?authToken=" + token, params);
        };
        //Delete A Item:
        this.deleteSingleItem = function (id, token) {
            _this.deleteItem = id;
            return _this.http.post(_this.baseURL + "/items/" + _this.deleteItem + "/delete?authToken=" + token, id);
        };
        //Edit a Item
        this.editItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('itemName', data.itemName);
            return _this.http.put(_this.baseURL + "/items/" + data.itemId + "/edit?authToken=" + token, params);
        };
        //Edit a Item
        this.markDoneOrOpenItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('isDone', data.isDone);
            return _this.http.put(_this.baseURL + "/items/" + data.itemId + "/markItemDone?authToken=" + token, params);
        };
        //Undo a Item
        this.undoItem = function (id, token) {
            return _this.http.get(_this.baseURL + "/itemsHistory/" + id + "/getLastItem?authToken=" + token);
        };
        //Delete A Item:
        this.deleteItemFromHistory = function (item, token) {
            return _this.http.post(_this.baseURL + "/itemsHistory/" + item.itemId + "/deleteFromHistory?authToken=" + token, item);
        };
        //save deleted Item to history
        this.saveDeleteHistoryItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("listId", data.listId)
                .set("itemId", data.itemId)
                .set("itemName", data.itemName)
                .set("isDone", data.isDone)
                .set("operationName", "Delete");
            return _this.http.post(_this.baseURL + "/itemsHistory/saveHistoryItem?authToken=" + token, params);
        };
        //save updated Item to history
        this.saveUpdateHistoryItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("listId", data.listId)
                .set("itemId", data.itemId)
                .set("itemName", data.itemName)
                .set("isDone", data.isDone)
                .set("operationName", "Update");
            return _this.http.post(_this.baseURL + "/itemsHistory/saveHistoryItem?authToken=" + token, params);
        };
        //save updated Item to history
        this.saveCreateHistoryItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("listId", data.listId)
                .set("itemId", data.itemId)
                .set("itemName", data.itemName)
                .set("isDone", data.isDone)
                .set("operationName", "Create");
            return _this.http.post(_this.baseURL + "/itemsHistory/saveHistoryItem?authToken=" + token, params);
        };
        /*
          Sub-Items related services
        */
        //Get Tasks
        this.getSubItems = function (token) {
            return _this.http.get(_this.baseURL + "/subItems/allSubItems?authToken=" + token);
        };
        //Create A New Item:
        this.createNewSubItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("itemId", data.itemId)
                .set("subItemName", data.subItemName);
            return _this.http.post(_this.baseURL + "/subItems/createSubItems?authToken=" + token, params);
        };
        //Delete A Sub-Item:
        this.deleteSingleSubItem = function (id, token) {
            _this.deleteSubItem = id;
            return _this.http.post(_this.baseURL + "/subItems/" + _this.deleteSubItem + "/delete?authToken=" + token, id);
        };
        //Edit a Sub-Item
        this.editSubItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('subItemName', data.subItemName);
            return _this.http.put(_this.baseURL + "/subItems/" + data.subItemId + "/edit?authToken=" + token, params);
        };
        //Edit a Sub-Item
        this.markSubDoneOrOpenItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('isDone', data.isDone);
            return _this.http.put(_this.baseURL + "/subItems/" + data.subItemId + "/markSubItemDone?authToken=" + token, params);
        };
        //Undo for Sub-Item
        //Undo a Item
        this.undoSubItem = function (id, token) {
            return _this.http.get(_this.baseURL + "/subItemsHistory/" + id + "/getLastSubItem?authToken=" + token);
        };
        //Delete A Item:
        this.deleteSubItemFromHistory = function (subItem, token) {
            return _this.http.post(_this.baseURL + "/subItemsHistory/" + subItem.subItemId + "/deleteSubItemFromHistory?authToken=" + token, subItem);
        };
        //save deleted Sub-Item to history
        this.saveDeleteHistorySubItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("itemId", data.itemId)
                .set("subItemId", data.subItemId)
                .set("subItemName", data.subItemName)
                .set("isDone", data.isDone)
                .set("operationName", "Delete");
            return _this.http.post(_this.baseURL + "/subItemsHistory/saveHistorySubItem?authToken=" + token, params);
        };
        //save updated Sub-Item to history
        this.saveUpdateHistorySubItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("itemId", data.itemId)
                .set("subItemId", data.subItemId)
                .set("subItemName", data.subItemName)
                .set("isDone", data.isDone)
                .set("operationName", "Update");
            return _this.http.post(_this.baseURL + "/subItemsHistory/saveHistorySubItem?authToken=" + token, params);
        };
        //save create Sub-Item to history
        this.saveCreateHistorySubItem = function (data, token) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("itemId", data.itemId)
                .set("subItemId", data.subItemId)
                .set("subItemName", data.subItemName)
                .set("isDone", data.isDone)
                .set("operationName", "Create");
            return _this.http.post(_this.baseURL + "/subItemsHistory/saveHistorySubItem?authToken=" + token, params);
        };
        this.clearItemUndos = function (token) {
            return _this.http.get(_this.baseURL + "/itemsHistory/clearItemUndoHistory?authToken=" + token);
        };
        this.clearSubItemUndos = function (token) {
            return _this.http.get(_this.baseURL + "/subItemsHistory/clearSubItemUndoHistory?authToken=" + token);
        };
    } //end of constructor
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('country', data.country);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    }; // end of signupFunction function.
    AppService.prototype.sendResetLink = function (email) {
        // console.log(this.url+"/api/v1/users/forgotPassword");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email);
        return this.http.post(this.url + "/api/v1/users/forgotPassword", params);
    }; // end of sendResetLink function.
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authtoken'));
        return this.http.post(this.baseURL + "/users/logout", params);
    }; // end logout function
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container\">   \r\n      <div class=\"row mt-4\">\r\n        <div class=\"col-12 text-center\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n                User not available, with given email address\r\n            </div>\r\n          <h5 class=\"text-danger\">Create account, \r\n            <a [routerLink]=\"['/signup']\">Signup</a>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/route-guard.service.ts":
/*!****************************************!*\
  !*** ./src/app/route-guard.service.ts ***!
  \****************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    RouteGuardService.prototype.canActivate = function (route) {
        console.log("in guard service");
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') === null) {
            this.toastr.error("Token Expired, Please login again");
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    RouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.component.css":
/*!*********************************************************!*\
  !*** ./src/app/server-error/server-error.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/server-error/server-error.component.html":
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container\">\r\n    <div>\r\n      \r\n      <div class=\"row mt-4\">\r\n        <div class=\"col-12 text-center\">\r\n          <h5 class=\"text-danger\">Try Again after email verification\r\n              <a [routerLink]=\"['/login']\">Redirect to Login</a>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/server-error/server-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/server-error/server-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.baseurl = "http://localhost:3004";
        //Authentication Section:
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("verify-user", function (socketData) {
                    observer.next(socketData);
                });
            });
        };
        this.setUser = function (token) {
            _this.socket.emit("set-user", token);
        };
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("onlineUsersTodoList", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        this.getOnlineUsers = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("onlineUsers", function (socketData) {
                    observer.next(socketData);
                });
            });
        };
        //list create socket service for multi user
        this.createToDoMulti = function (userName) {
            _this.socket.emit("createList", userName);
        };
        this.listAddedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("createList-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //list delete response for multi user
        this.deleteToDoMulti = function (userName) {
            _this.socket.emit("deleteList", userName);
        };
        this.listDeletedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("deleteList-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //list update(edit) respose for multi user
        this.updateTodoMulti = function (userName) {
            _this.socket.emit("updateList", userName);
        };
        this.listUpdatedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("updateList-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Item create socket service for multi user
        this.createItemMulti = function (userName) {
            _this.socket.emit("createItem", userName);
        };
        this.itemAddedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("createItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Item delete socket service for multi user
        this.deleteItemMulti = function (userName) {
            _this.socket.emit("deleteItem", userName);
        };
        this.itemDeletedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("deleteItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Item update socket service for multi user
        this.updateItemMulti = function (userName) {
            _this.socket.emit("updateItem", userName);
        };
        this.itemUpdatedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("updateItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Item marked done socket service for multi user
        this.markDoneItem = function (userName) {
            _this.socket.emit("markDoneItem", userName);
        };
        this.itemMarkedDoneResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("markDoneItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Item marked Open socket service for multi user
        this.markOpenItem = function (userName) {
            _this.socket.emit("markOpenItem", userName);
        };
        this.itemMarkedOpenResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("markOpenItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //undoItem socket service for multi user
        this.undoItemMulti = function (userName) {
            _this.socket.emit("undoItem", userName);
        };
        this.itemUndoResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("undoItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Sub Item create socket service for multi user
        this.createSubItemMulti = function (userName) {
            _this.socket.emit("createSubItem", (userName));
        };
        this.subItemAddedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("createSubItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //sub item delete socket service for multi user
        this.deleteSubItemMulti = function (userName) {
            _this.socket.emit("deleteSubItem", (userName));
        };
        this.subItemDeletedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("deleteSubItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //sub item update socket service for multi user
        this.updateSubItemMulti = function (userName) {
            _this.socket.emit("updateSubItem", (userName));
        };
        this.subItemUpdatedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("updateSubItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Item marked done socket service for multi user
        this.markDoneSubItemMulti = function (userName) {
            _this.socket.emit("markDoneSubItem", userName);
        };
        this.subItemMarkedDoneResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("markDoneSubItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Item marked Open socket service for multi user
        this.markOpenSubItemMulti = function (userName) {
            _this.socket.emit("markOpenSubItem", userName);
        };
        this.subItemMarkedOpenResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("markOpenSubItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //undoItem socket service for multi user
        this.undoSubItemMulti = function (userName) {
            _this.socket.emit("undoSubItem", userName);
        };
        this.subItemUndoResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("undoSubItem-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //clear undos socket service for multi user
        this.clearUndos = function (userName) {
            _this.socket.emit("clearUndos", userName);
        };
        this.clearUndosResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("clearUndos-res", function (data) {
                    observer.next(data);
                });
            });
        };
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        /**
         * functionalities for sending and recieving request
         */
        //Sending Request:
        this.sendRequest = function (data) {
            _this.socket.emit("request", data);
        };
        this.responseAlreadySent = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("reqAlreadySent", function (data) {
                    observer.next(data);
                });
            });
        };
        this.responseAlreadyFriend = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("alreadyFriend", function (data) {
                    observer.next(data);
                });
            });
        };
        this.savereq = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("savereq", function (data) {
                    observer.next(data);
                });
            });
        };
        //Rejecting Request:
        this.rejectRequest = function (data) {
            _this.socket.emit("reject", data);
        };
        this.rejectResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("rejecting", function (data) {
                    observer.next(data);
                });
            });
        };
        //Accepting Request:
        this.acceptRequest = function (data) {
            _this.socket.emit("accept", data);
        };
        this.acceptResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("accepting", function (data) {
                    observer.next(data);
                });
            });
        };
        //Removing Friend:
        this.unfriend = function (data) {
            _this.socket.emit("unfriend", data);
        };
        this.unfrndResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("removed", function (data) {
                    observer.next(data);
                });
            });
        };
        this.listenUpdate = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                });
            });
        };
        this.disconnect = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('disconnect', function () {
                    observer.next();
                }); //end On method
            }); //end observable
        }; //end disconnect
        this.disconnectedSocket = function () {
            _this.socket.emit("disconnect", ""); //end Socket
        }; //end disconnectedSocket
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.baseurl);
    }
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/sort-countries.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/sort-countries.pipe.ts ***!
  \****************************************/
/*! exports provided: SortCountriesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortCountriesPipe", function() { return SortCountriesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortCountriesPipe = /** @class */ (function () {
    function SortCountriesPipe() {
    }
    SortCountriesPipe.prototype.transform = function (array, args) {
        if (array == null) {
            return null;
        }
        var finalArray = array.sort(function (a, b) {
            var textA = a['value'].toLowerCase();
            var textB = b['value'].toLowerCase();
            return textA < textB ? -1 : (textA > textB) ? 1 : 0;
        });
        return finalArray;
    };
    SortCountriesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortCountries'
        })
    ], SortCountriesPipe);
    return SortCountriesPipe;
}());



/***/ }),

/***/ "./src/app/todo/friends/friends.component.css":
/*!****************************************************!*\
  !*** ./src/app/todo/friends/friends.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/friends/friends.component.html":
/*!*****************************************************!*\
  !*** ./src/app/todo/friends/friends.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/friends/friends.component.ts":
/*!***************************************************!*\
  !*** ./src/app/todo/friends/friends.component.ts ***!
  \***************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendsComponent = /** @class */ (function () {
    function FriendsComponent() {
    }
    FriendsComponent.prototype.ngOnInit = function () {
    };
    FriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.component.html */ "./src/app/todo/friends/friends.component.html"),
            styles: [__webpack_require__(/*! ./friends.component.css */ "./src/app/todo/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-list-multi/todo-list-multi.component.css":
/*!********************************************************************!*\
  !*** ./src/app/todo/todo-list-multi/todo-list-multi.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color:#305693;\r\n    color: white;\r\n    padding: 2%;\r\n    text-align: center;\r\n  }\r\n  .navbar{\r\n    cursor: pointer;\r\n  }\r\n  .aside{\r\n    background:  #f5f5f5;\r\n    height:100vh;\r\n    overflow:auto;\r\n    margin-top:2%;\r\n}\r\n  h5{\r\n    font-weight: bold;\r\n    color:black;\r\n    background:#f5f5f5;\r\n    padding:1%;\r\n}\r\n  .list{\r\n    list-style-type: square;\r\n    display:inline-block;\r\n    \r\n}\r\n  .user{\r\n    background-color:#7c8ca5;\r\n    color:black;\r\n    padding:5%;\r\n    display:block;\r\n    width:100%;\r\n    font-size:1.2em;\r\n    text-align:center;\r\n    font-family:sans-serif;\r\n}\r\n  .all{\r\n    font-size:1.3em;\r\n    margin:3vh 0;\r\n}\r\n  .lists{\r\n    text-transform:capitalize;\r\n    font-family:sans-serif;\r\n    font-size:1.3em;\r\n}\r\n  .lists:hover{\r\n    cursor:pointer;\r\n    text-decoration:underline;\r\n}\r\n  .fasquare{\r\n    text-align: center;\r\n    font-size:2.2em;\r\n    margin-left:43%;\r\n    margin-top:3%;\r\n}\r\n  .fasquare:hover{\r\n    color:red;\r\n    cursor:pointer;\r\n}\r\n  .fa-user{\r\n    margin-right:1%;\r\n    font-size:1.4em;\r\n}\r\n  .trash1{\r\n    color: red;;\r\n    float:right;\r\n    font-size:1.2em;\r\n    cursor:pointer;\r\n    padding-right: 0.2em;\r\n}\r\n  .edit1{\r\n    color: green;;\r\n    float:right;\r\n    font-size:1.2em;\r\n    cursor:pointer;\r\n    padding-right: 0.2em;\r\n}\r\n  .fa-trash-o:hover{\r\n    cursor:pointer;\r\n    color:red;\r\n}\r\n  .input{\r\n    margin-top:3%;\r\n}\r\n  .textfield{\r\n    border-top:none;\r\n    border-left:none;\r\n    border-right:none;\r\n    border-bottom:3px solid #9966ff;\r\n}\r\n  .square2{\r\n    font-size:2em;\r\n    margin-left:1%;\r\n}\r\n  .square2:hover{\r\ncolor:red;\r\ncursor:pointer;\r\n}\r\n  .tasklist{\r\n    margin-top:2%;\r\n    overflow:auto;\r\n    height:82vh;\r\n}\r\n  .listname{\r\n    font-size:1.5em;\r\n    text-transform:uppercase;\r\n    color:black;\r\n    background:#7c8ca5;\r\n    text-align:center;\r\n    margin-top:2%;\r\n    font-family:Arial, Helvetica, sans-serif;\r\n}\r\n  .itemName{\r\n    background-color:#EBA189;\r\n    color:black;\r\n    padding:2%;\r\n    font-size:1.2em;\r\n    font-family:sans-serif;\r\n    text-transform: capitalize;\r\n    margin:0.5% 4%;\r\n}\r\n  .subItemName{\r\n    background-color:#7583D2;\r\n    color:black;\r\n    padding:1.2%;\r\n    font-size:0.8em;\r\n    font-family:sans-serif;\r\n    text-transform: capitalize;\r\n    margin:0.5% 4%;\r\n}\r\n  .leftMargin{\r\n    margin-left: 4%;\r\n}\r\n  .trash2{\r\n    float: right;\r\n    font-size:1.2em;\r\n    color:red;\r\n    padding-right: 0.2em\r\n}\r\n  .trash2:hover{\r\n    color:rgb(207, 78, 78);\r\n}\r\n  .undoSub{\r\n    float: right;\r\n    font-size:1.2em;\r\n    color:rgb(175, 24, 125);\r\n    cursor:pointer;\r\n\r\n}\r\n  .undoSub:hover{\r\n    color:rgb(114, 38, 38);\r\n}\r\n  .blankContent{\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 3rem;\r\n    color: #999;\r\n}\r\n  .squareItem{\r\n    color:#3F414D;\r\n    font-size:1.2em;\r\n    float:right;\r\n    cursor:pointer;\r\n    padding-right: 0.2em\r\n}\r\n  .addicon{\r\n    font-size:2em;\r\n    margin-left:45%;\r\n    margin-top:1%;\r\n    margin-bottom:1%\r\n}\r\n  .addicon:hover{\r\n    color: red;\r\n    font-size:2em;\r\n    margin-left:45%;\r\n    margin-top:1%;\r\n    margin-bottom:1%\r\n}\r\n  .online{\r\n    text-align:center;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size:1.1em;\r\n    background-color:#F08A98;\r\n    color:black;\r\n    padding:1%\r\n}\r\n  .friends{\r\n    text-align:center;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size:1.1em;\r\n    background-color:rgb(17, 194, 126);\r\n    color:black;\r\n    padding:1%\r\n}\r\n  .listBar{\r\n    text-align:center;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size:1.1em;\r\n    background-color:rgb(240, 162, 110);\r\n    color:black;\r\n    padding:1%\r\n}\r\n  .on-users{\r\n    font-size:1.1em;\r\n}\r\n  .onicon{\r\n    color:green;\r\n    padding-left:2%    \r\n}"

/***/ }),

/***/ "./src/app/todo/todo-list-multi/todo-list-multi.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/todo/todo-list-multi/todo-list-multi.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"col-12 header\">\r\n        <h1>To-Do List Application</h1>\r\n    </div>\r\n\r\n    <!--Nav Bar-->\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <b><a class=\"nav-link\" [routerLink]=\"['/todo-list']\">Single-User</a></b>\r\n                </li>\r\n                <li class=\"nav-item active\">\r\n                    <b><a class=\"nav-link\">Multi-User</a></b>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                        <b><a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#friend-list\" >Friends</a></b>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <b><a class=\"nav-link\" (click)=logout()>Logout</a></b>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <!--End Nav Bar-->\r\n\r\n\r\n    <!-- friends Modal-->\r\n\r\n\r\n    <div id=\"friend-list\" class=\"modal fade\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Friend-List</h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                            &times;\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"container-fluid\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12\">\r\n                                    <h5>All Users:</h5>\r\n                                    <div *ngFor=\"let user of users1\">\r\n                                        <p *ngIf=\"userId!=user.userId\">\r\n                                            <li class=\"list\">{{user.firstName}} {{user.lastName}}</li>\r\n                                            <button style=\"margin-left:1%; color: white;\" class=\"btn btn-secondary\" (click)=sendreq(user.userId)>Request</button>\r\n                                        </p>\r\n                                    </div>\r\n                                    <h5>Requests:</h5>\r\n                                    <div *ngFor=\"let user of users1\">\r\n                                        <div *ngFor=\"let req of user.requests\" >\r\n                                            <p *ngIf=\"userId==req.receiverId\">\r\n                                                <li class=\"list\">{{req.senderName}}</li>\r\n                                                <button style=\"margin:0 1%;\" class=\"btn btn-success\" (click)=acceptReq(req.senderId,req.senderName)>Accept</button>\r\n                                                <button class=\"btn btn-danger\" (click)=rejectReq(req.senderId)>Reject</button>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <h5>Friends:</h5>\r\n                                    <div *ngFor=\"let user of users1\">\r\n                                        <div *ngIf=\"userId==user.userId\">\r\n                                            <p *ngFor=\"let frnd of user.friends\">\r\n                                                <li class=\"list\" style=\"font-size:1.1em\"> {{frnd.friendName}}\r\n                                                </li>\r\n                                                <i (click)=deletefriend(frnd.friendId) style=\"margin-left:2%\" class=\"fa fa-trash-o\"></i>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    \r\n    <!--End Friends Modal-->\r\n\r\n    <!-- Modal for adding a new public list-->\r\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Add New Public To-Do List</h4>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                        &times;\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form class=\"form-group\">\r\n                        <label for=\"input\">\r\n                            Name:\r\n                        </label>\r\n                        <input [(ngModel)]=\"listName1\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\" type=\"text\" />\r\n                    </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"newTodoListMulti()\">Save</button>\r\n                    <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--End add public list modal-->\r\n\r\n    <!-- Modal for updating a public list -->\r\n    <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Edit List</h4>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                        &times;\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form class=\"form-group\">\r\n                        <label for=\"input\">\r\n                            List Name:\r\n                        </label>\r\n\r\n                        <input [(ngModel)]=\"listName\" name=\"name\" class=\"form-control\" placeholder=\"Edit Name\" type=\"text\" />\r\n\r\n\r\n                    </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"updatetodoListMulti()\">Save</button>\r\n                    <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--End update public list modal-->\r\n\r\n    <!-- Modal for updating a public item -->\r\n    <div id=\"myModal2\" class=\"modal fade\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Edit Item</h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                            &times;\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form class=\"form-group\">\r\n                            <label for=\"input\">\r\n                                Item Name:\r\n                            </label>\r\n    \r\n                            <input [(ngModel)]=\"itemName\" name=\"name\" class=\"form-control\" placeholder=\"Edit Item Name\" type=\"text\" />\r\n    \r\n    \r\n                        </form>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"updateItemMulti()\">Save</button>\r\n                        <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n    \r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n    <!--End update public item modal-->\r\n\r\n    <!-- Modal for adding a new public sub-item-->\r\n    <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Add a Sub-Item to Item</h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                            &times;\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form class=\"form-group\">\r\n                            <label for=\"input\">\r\n                                Sub-Item Name:\r\n                            </label>\r\n    \r\n                            <input [(ngModel)]=\"subItemName1\" name=\"name\" class=\"form-control\" placeholder=\"Enter Sub-Item Name\" type=\"text\" />\r\n    \r\n    \r\n                        </form>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"createSubItemMulti()\">Save</button>\r\n                        <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n    \r\n                </div>\r\n            </div>\r\n    </div>\r\n    <!--End add public item modal-->\r\n\r\n    <!-- Modal for updating a new public sub-item-->\r\n    <div id=\"myModal4\" class=\"modal fade\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Edit Sub-Item</h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                            &times;\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form class=\"form-group\">\r\n                            <label for=\"input\">\r\n                                Sub-Item Name:\r\n                            </label>\r\n    \r\n                            <input [(ngModel)]=\"subItemName\" name=\"name\" class=\"form-control\" placeholder=\"Edit Sub-Item Name\" type=\"text\" />\r\n            \r\n                        </form>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"updateSubItemMulti()\">Save</button>\r\n                        <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n    \r\n                </div>\r\n            </div>\r\n    </div>\r\n    <!--End updating public item modal-->\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n        <!--aside-->\r\n\r\n        <div class=\"col-md-3 aside\">\r\n          \r\n            <span class=\"user\">\r\n              <b> Welcome! {{userName}} </b><br>\r\n              <small style=\"font-weight:bold;\">Multi User Platform</small>\r\n            </span>\r\n\r\n            <div>\r\n                <i class=\"fa fa-plus-square addicon\" data-toggle=\"modal\" data-target=\"#myModal\" title=\"Add List\"></i>\r\n            </div>\r\n            <h6 class=\"online\">All Online Users</h6>\r\n            <div class=\"on-users\" *ngFor=\"let user of users\">\r\n                    <p *ngIf=\"user.userId!=userId\">\r\n                        <i class=\"fa fa-user onicon\"></i>\r\n                        <strong>{{user.fullName}}</strong>\r\n                    </p>\r\n            </div>\r\n\r\n            \r\n            <h6 class=\"friends\">My Friends</h6>\r\n            <div class=\"on-users\" *ngFor=\"let user of users1\">\r\n                <div *ngIf=\"userId==user.userId\">\r\n                    <p class=\"lists\" *ngFor=\"let frnd of user.friends\">\r\n                        <i class=\"fa fa-user onicon\"></i>\r\n                        <strong>{{frnd.friendName}}</strong>   \r\n                        <i (click)=deletefriend(frnd.friendId) style=\"margin-left:2%\" class=\"fa fa-trash-o trash1\" title=\"Unfriend\"></i>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <hr>\r\n\r\n            <h6 class=\"listBar\">Lists</h6>\r\n            <div *ngFor=\"let list of response\">\r\n                <div *ngIf=\"list.private==false\">\r\n                    <p class=\"lists\">\r\n                        <span (click)=selectlist(list.listId,list.listName)>\r\n                            <i class=\"fa fa-list-alt\"></i> {{list.listName}}\r\n                        </span>\r\n                        <i class=\"fa fa-trash-o trash1\" (click)=deletetodoListMulti(list.listId) title=\"Delete\"></i>\r\n                        <i class=\"fa fa-edit edit1\" title=\"Edit\"  data-toggle=\"modal\" data-target=\"#myModal1\" (click)=\"setListName(list.listId,list.listName)\"></i>\r\n                    </p>\r\n\r\n                    <br>\r\n                    <small style=\"font-weight:bold\" class=\"text-muted\">\r\n                        <i class=\"fa fa-user\"></i> Created By: {{list.creator}} </small>\r\n                    <hr>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <!-- Main task menu -->\r\n\r\n        <div class=\"col-md-9 maintask\">\r\n            <div class=\"input\">\r\n                <input [(ngModel)]=\"itemName\" name=\"item\" style=\"width:75%; display:inline-block\" class=\"textfield\" type=\"text\" placeholder=\"Enter New Item\"\r\n                (keydown)=\"addItemUsingKeypress($event)\">\r\n                <i (click)=createItemMulti() class=\"fa fa-plus-square square2\" title=\"Add Item\"></i>\r\n                <i (click)=\"clearUndos()\" class=\"fa fa-minus-circle square2\" title=\"Clear All Undos\"></i>\r\n            </div>\r\n\r\n            <div *ngIf=\"!listName\" class=\"col-sm blankContent\">\r\n                Click on List to schedule your task !!!\r\n            </div>\r\n\r\n\r\n            <div class=\"listname\">{{listName}} <span (click)=\"undoItem(listId)\" style=\"float:right; padding-right:2em\"><i class=\"fa fa-undo fa-lg\" style=\"cursor:pointer;\" title=\"Undo Item\"></i></span></div>\r\n            <div class=\"tasklist\">\r\n\r\n                <div *ngFor=\"let item of itemData\">\r\n                    <div class=\"itemName\"  *ngIf=\"item.listId==listId\">\r\n                        \r\n                        <input type=\"checkbox\" *ngIf = \"item.isDone==false\" (click)=markDoneItemMulti(item.itemId) title=\"Click to Mark Done\">\r\n                        <i class=\"fa fa-check-circle\" style=\"color:darkgreen\"  *ngIf = \"item.isDone==true\" (click)=markOpenItemMulti(item.itemId)  title=\"Click to Open Again\"></i>\r\n                        {{item.itemName}}\r\n                        <i *ngIf = \"item.isDone==false\" (click)=\"undoSubItem(itemId)\" class=\"fa fa-undo undoSub\" style=\"float :right\" title=\"Undo SubItem\"></i>\r\n                        <i *ngIf = \"item.isDone==false\" class=\"fa fa-trash-o trash2\" (click)=deleteItemMulti(item) title=\"Delete Item\"></i>\r\n                        <i *ngIf = \"item.isDone==false\" class=\"fa fa-pencil edit1\" data-toggle=\"modal\" data-target=\"#myModal2\" (click)=\"setItemName(item.itemId,item.itemName)\" (click)=\"saveItemUpdateHistory(item)\" title=\"Edit Item\"></i>\r\n                        <i *ngIf = \"item.isDone==false\" class=\"fa fa-plus-square squareItem\" title=\"Add SubItem\" data-toggle=\"modal\" data-target=\"#myModal3\" (click)=\"addSubItemIcon(item.itemId)\"></i>\r\n\r\n                    </div>\r\n\r\n                    <br>                        \r\n                        <!-- Sub-Items -->\r\n                    <div class=\"leftMargin\" *ngIf=\"item.listId==listId\">\r\n                        <div *ngFor=\"let subItem of response1\">\r\n                            <p class=\"subItemName\" *ngIf=\"subItem.itemId==item.itemId\">\r\n                                <input type=\"checkbox\" *ngIf = \"item.isDone==false && subItem.isDone==false\"  (click)=markDoneSubItemMulti(subItem.subItemId) title=\"Click to Mark Done\">\r\n                                <i class=\"fa fa-check-circle\" *ngIf = \"item.isDone==false && subItem.isDone==true\" style=\"color:darkgreen\" (click)=markOpenSubItemMulti(subItem.subItemId) title=\"Click to Mark Open\"></i>\r\n                                {{subItem.subItemName}}\r\n                                <i *ngIf = \"item.isDone==false && subItem.isDone==false\" class=\"fa fa-trash-o trash2\" (click)=deleteSubItemMulti(subItem) title=\"Delete Sub-Item\"></i>\r\n                                <i *ngIf = \"item.isDone==false && subItem.isDone==false\" class=\"fa fa-pencil edit1\"  data-toggle=\"modal\" data-target=\"#myModal4\" (click)=\"setSubItemName(subItem.subItemId,subItem.subItemName)\"  (click)=\"saveSubItemUpdateHistory(subItem)\" title=\"Edit Sub-Item\"></i>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>                  \r\n                \r\n\r\n\r\n            </div>\r\n        </div>\r\n        <!--end task menu-->\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/todo/todo-list-multi/todo-list-multi.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/todo/todo-list-multi/todo-list-multi.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodoListMultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListMultiComponent", function() { return TodoListMultiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoListMultiComponent = /** @class */ (function () {
    function TodoListMultiComponent(socketService, appService, toastr, router) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.requests = [];
        this.isPrivate = false;
        this.response = [];
        this.itemData = [];
        this.response1 = [];
        this.gotologin = function () {
            _this.router.navigate(['/login']);
        };
        //for getting all users
        this.getAllUsers = function () {
            _this.appService.getAllpeople(_this.token).subscribe(function (apiResponse) {
                _this.users1 = apiResponse.data;
                //  this.requests = apiResponse.data.requests;
                console.log(_this.users1);
            });
        };
        //user confirmation
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (response) {
                _this.socketService.setUser(_this.token);
                console.log("User is verified");
            });
        };
        /*
          public onlineUsers = () => {
            this.users=[]
            this.socketService.getOnlineUsers().subscribe((response)=>{
              
              this.users = response
              console.log(this.users);
            })
          }
        */
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.users = [];
                console.log(userListfromdb);
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'fullName': userListfromdb[x] };
                    _this.users.push(temp);
                    console.log(_this.users);
                }
            }); //end subscribe
        }; //end getOnlineUserList
        //Selecting A List:
        this.selectlist = function (listId, listName) {
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set("listId", listId);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set("listName", listName);
            _this.listName = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("listName");
            _this.listId = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("listId");
            _this.toastr.info(_this.listName + " Selected");
        };
        //for getting all list
        this.getAlltodoList = function () {
            _this.response = [];
            _this.appService.getAlltodo(_this.token).subscribe(function (apiResponse) {
                //  console.log(apiResponse)
                for (var index in apiResponse.data) {
                    _this.response.push(apiResponse.data[index]);
                }
                console.log(_this.response);
            }, function (err) {
                console.log("Error Occured");
            });
        };
        //Getting All Items:
        this.getAllItems = function () {
            _this.appService.getItems(_this.token).subscribe(function (apiResponse) {
                _this.itemData = apiResponse.data;
                console.log(_this.itemData);
            }, function (err) {
                console.log(err);
            });
        };
        //getting all subItems
        this.getAllSubItems = function () {
            _this.response1 = [];
            _this.appService.getSubItems(_this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                _this.response1 = apiResponse.data;
                console.log(_this.response1);
            }, function (err) {
                console.log("Error Occured");
            });
        };
        /**
         *  List functions for Multi-User
         */
        //for adding and sharing to-do-list with all users
        this.newTodoListMulti = function () {
            if (_this.listName1 == undefined || _this.listName1 == "") {
                return _this.toastr.warning("List Name is required");
            }
            else {
                var values = {
                    listName: _this.listName1,
                    userId: _this.userId,
                    creator: _this.userName,
                    private: false
                };
                console.log(values);
                _this.appService.createTodo(values, _this.token).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.listName1 = "";
                        _this.response = [];
                        //added for socket response
                        _this.socketService.createToDoMulti(_this.userName);
                        //this.getAlltodoList()
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        this.newListAddedResponse = function () {
            _this.socketService.listAddedResponse().subscribe(function (response) {
                _this.getAlltodoList();
                _this.toastr.success(response);
            });
        };
        //Deleting a todolist for all users :
        this.deletetodoListMulti = function (id) {
            _this.appService.removetodolist(id, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('listId');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('listName');
                _this.listName = "";
                _this.response = [];
                _this.socketService.deleteToDoMulti(_this.userName);
                // this.getAlltodoList();
            }, function (err) {
                _this.toastr.error("Unable to Delete list");
            });
        };
        this.listDeletedResponse = function () {
            _this.socketService.listDeletedResponse().subscribe(function (response) {
                _this.getAlltodoList();
                _this.toastr.warning(response);
            });
        };
        //Update a todolist for all users:
        this.setListName = function (listId, listName) {
            _this.listId = listId;
            _this.listName = listName;
        };
        this.updatetodoListMulti = function () {
            var data = {
                listName: _this.listName,
                listId: _this.listId
            };
            _this.appService.edittodolist(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                // this.getAlltodoList();
                _this.socketService.updateTodoMulti(_this.userName);
            }, function (err) {
                _this.toastr.error("Unable to Update list");
            });
        };
        this.listUpdatedResponse = function () {
            _this.socketService.listUpdatedResponse().subscribe(function (response) {
                _this.toastr.info(response);
                _this.getAlltodoList();
            });
        };
        /**
       *  Item related functions for Multi-User
       */
        //for new creating item for Multi user
        this.createItemMulti = function () {
            if (_this.listId == undefined) {
                return _this.toastr.warning("Select List");
            }
            else {
            }
            if (_this.itemName == undefined || _this.itemName == "" || _this.itemName == null) {
                return _this.toastr.warning("Item Cannot be empty");
            }
            else {
                var data = {
                    listId: _this.listId,
                    itemName: _this.itemName
                };
                console.log(data.itemName);
                _this.appService.createNewItem(data, _this.token).subscribe(function (apiResponse) {
                    _this.itemName = "";
                    _this.item = apiResponse.data;
                    console.log(_this.item);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('itemId', apiResponse.data.itemId);
                    _this.socketService.createItemMulti(_this.userName);
                    _this.appService.saveCreateHistoryItem(_this.item, _this.token).subscribe(function (apiResponse) {
                        //this.toastr.success(apiResponse.message); 
                        console.log(apiResponse.message);
                    });
                }, function (err) {
                    _this.toastr.error("Error Occured");
                });
            }
        };
        this.newItemAddedResponse = function () {
            _this.socketService.itemAddedResponse().subscribe(function (response) {
                _this.getAllItems();
                _this.toastr.success(response);
            });
        };
        //Deleting a items for multi user :
        this.deleteItemMulti = function (item) {
            _this.itemSave = item;
            console.log(item);
            _this.appService.deleteSingleItem(item.itemId, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    //this.toastr.warning(apiResponse.message)
                    //this.getAllItems();
                    _this.socketService.deleteItemMulti(_this.userName);
                    _this.saveDeletedItem();
                }
            }, function (err) {
                console.log(err);
                _this.toastr.error("Unable to delete");
            });
        };
        this.saveDeletedItem = function () {
            //for saving to history
            _this.appService.saveDeleteHistoryItem(_this.itemSave, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    // this.toastr.success(apiResponse.message); 
                    _this.getAlltodoList();
                }
            }, function (error) {
                console.log("Error Occured");
            });
        };
        this.itemDeletedResponse = function () {
            _this.socketService.itemDeletedResponse().subscribe(function (response) {
                _this.getAllItems();
                _this.toastr.warning(response);
            });
        };
        //Updating items for multi user
        this.setItemName = function (itemId, itemName) {
            _this.itemId = itemId;
            _this.itemName = itemName;
        };
        this.saveItemUpdateHistory = function (item) {
            _this.appService.saveUpdateHistoryItem(item, _this.token).subscribe(function (apiResponse) {
                // this.toastr.success(apiResponse.message); 
                console.log(apiResponse.message);
            });
        };
        this.updateItemMulti = function () {
            var data = {
                itemName: _this.itemName,
                itemId: _this.itemId
            };
            _this.appService.editItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                _this.getAllItems();
                _this.socketService.updateItemMulti(_this.userName);
            }, function (err) {
                _this.toastr.error("Unable to Update Item");
            });
        };
        this.itemUpdatedResponse = function () {
            _this.socketService.itemUpdatedResponse().subscribe(function (response) {
                _this.getAllItems();
                _this.toastr.info(response);
            });
        };
        //for Mark Done 
        this.markDoneItemMulti = function (itemId) {
            var data = {
                isDone: true,
                itemId: itemId
            };
            console.log(data);
            _this.appService.markDoneOrOpenItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                //this.toastr.success("Item Marked Done")      
                //this.getAllItems();
                _this.socketService.markDoneItem(_this.userName);
            }, function (err) {
                _this.toastr.error("Unable to Mark Done");
            });
        };
        this.itemMarkedDoneResponse = function () {
            _this.socketService.itemMarkedDoneResponse().subscribe(function (response) {
                _this.getAllItems();
                _this.toastr.success(response);
            });
        };
        //for Mark Open Item
        this.markOpenItemMulti = function (itemId) {
            var data = {
                isDone: false,
                itemId: itemId
            };
            console.log(data);
            _this.appService.markDoneOrOpenItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                _this.socketService.markOpenItem(_this.userName);
            }, function (err) {
                _this.toastr.error("Unable to Open");
            });
        };
        this.itemMarkedOpenResponse = function () {
            _this.socketService.itemMarkedOpenResponse().subscribe(function (response) {
                _this.getAllItems();
                _this.toastr.info(response);
            });
        };
        //method to undo item 
        this.undoItem = function (listId) {
            console.log(listId);
            _this.appService.undoItem(listId, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.undoObj = apiResponse.data;
                    console.log(_this.undoObj);
                    if (_this.undoObj.hasOwnProperty('itemName')) {
                        if (_this.undoObj.operationName == "Update") {
                            //this.toastr.info("Item deleted from history");
                            _this.appService.editItem(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                console.log(apiResponse.data);
                                _this.appService.deleteItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                    _this.getAllItems();
                                });
                            });
                            console.log(_this.itemData);
                        }
                        if (_this.undoObj.operationName == "Delete") {
                            var data = {
                                "listId": _this.undoObj.listId,
                                "itemName": _this.undoObj.itemName
                            };
                            _this.appService.createNewItem(data, _this.token).subscribe(function (apiResponse) {
                                console.log(apiResponse.data);
                                ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('itemId', apiResponse.data.itemId);
                                _this.getAllItems();
                                _this.getAllSubItems();
                                _this.appService.deleteItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                    //this.toastr.info("Item deleted from history");
                                });
                            }, function (err) {
                                _this.toastr.error("Error Occured");
                            });
                            //console.log(this.itemData);
                        }
                        if (_this.undoObj.operationName == "Create") {
                            _this.appService.deleteSingleItem(_this.undoObj.itemId, _this.token).subscribe(function (apiResponse) {
                                if (apiResponse.status == 200) {
                                    //this.toastr.warning(apiResponse.message)
                                    _this.getAllItems();
                                    _this.appService.deleteItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                        //this.toastr.info("Item deleted from history");
                                    });
                                }
                            }, function (err) {
                                console.log(err);
                                _this.toastr.error("Unable to delete");
                            });
                            console.log(_this.itemData);
                        }
                    }
                    _this.socketService.undoItemMulti(_this.userName);
                }
                else {
                    _this.toastr.warning('No undo found!');
                }
            }, function (error) {
                _this.toastr.error('Some Server error occured!');
            });
        }; //end
        this.itemUndoResponse = function () {
            _this.socketService.itemUndoResponse().subscribe(function (response) {
                _this.getAllItems();
                _this.toastr.warning(response);
            });
        };
        /**
        * SubItems related functions for multi user
        */
        /* Sub-Item related functionality */
        //create sub-items for multi users
        this.addSubItemIcon = function (itemId) {
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set("itemId", itemId);
            _this.itemId = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("itemId");
        };
        this.createSubItemMulti = function () {
            if (!_this.subItemName1) {
                _this.toastr.warning("Name is required");
            }
            else { }
            var data = {
                itemId: _this.itemId,
                subItemName: _this.subItemName1
            };
            console.log(data.subItemName);
            console.log(data.itemId);
            _this.appService.createNewSubItem(data, _this.token).subscribe(function (apiResponse) {
                _this.subItemName1 = "";
                //this.getAllSubItems();
                _this.subItem = apiResponse.data;
                console.log(_this.subItem);
                _this.appService.saveCreateHistorySubItem(_this.subItem, _this.token).subscribe(function (apiResponse) {
                    //this.toastr.success(apiResponse.message); 
                    console.log(apiResponse.message);
                });
                _this.socketService.createSubItemMulti(_this.userName);
            }, function (err) {
                _this.toastr.error("Error Occured");
            });
        };
        this.newSubItemAddedResponse = function () {
            _this.socketService.subItemAddedResponse().subscribe(function (response) {
                _this.getAllSubItems();
                _this.toastr.success(response);
            });
        };
        //delete sub-items for multi user
        this.deleteSubItemMulti = function (subItem) {
            _this.subItemSave = subItem;
            console.log(subItem);
            _this.appService.deleteSingleSubItem(subItem.subItemId, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    //this.toastr.warning(apiResponse.message)
                    //this.getAllSubItems();
                    _this.socketService.deleteSubItemMulti(_this.userName);
                    _this.saveDeletedSubItem();
                }
            }, function (err) {
                console.log(err);
                _this.toastr.error("Unable to delete");
            });
        };
        this.saveDeletedSubItem = function () {
            //for saving to history
            _this.appService.saveDeleteHistorySubItem(_this.subItemSave, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    // this.toastr.success(apiResponse.message); 
                    _this.getAlltodoList();
                }
            }, function (error) {
                console.log("Error Occured");
            });
        };
        this.subItemDeletedResponse = function () {
            _this.socketService.subItemDeletedResponse().subscribe(function (response) {
                _this.getAllSubItems();
                _this.toastr.warning(response);
            });
        };
        //update sub-items for multi-user
        this.setSubItemName = function (subItemId, subItemName) {
            console.log(subItemId);
            console.log(subItemName);
            _this.subItemId = subItemId;
            _this.subItemName = subItemName;
        };
        this.saveSubItemUpdateHistory = function (item) {
            _this.appService.saveUpdateHistorySubItem(item, _this.token).subscribe(function (apiResponse) {
                // this.toastr.success(apiResponse.message); 
                console.log(apiResponse.message);
            });
        };
        this.updateSubItemMulti = function () {
            var data = {
                subItemName: _this.subItemName,
                subItemId: _this.subItemId
            };
            console.log(data);
            _this.appService.editSubItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                //this.getAllSubItems();
                _this.socketService.updateSubItemMulti(_this.userName);
            }, function (err) {
                _this.toastr.error("Unable to Update Sub-Item");
            });
        };
        this.subItemUpdatedResponse = function () {
            _this.socketService.subItemUpdatedResponse().subscribe(function (response) {
                _this.getAllSubItems();
                _this.toastr.info(response);
            });
        };
        //for Mark Done 
        this.markDoneSubItemMulti = function (subItemId) {
            var data = {
                isDone: true,
                subItemId: subItemId
            };
            console.log(data);
            _this.appService.markSubDoneOrOpenItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                _this.socketService.markDoneSubItemMulti(_this.userName);
            }, function (err) {
                _this.toastr.error("Unable to Mark Done");
            });
        };
        this.subItemMarkedDoneResponse = function () {
            _this.socketService.subItemMarkedDoneResponse().subscribe(function (response) {
                _this.getAllSubItems();
                _this.toastr.success(response);
            });
        };
        //for Mark Open Item
        this.markOpenSubItemMulti = function (subItemId) {
            var data = {
                isDone: false,
                subItemId: subItemId
            };
            console.log(data);
            _this.appService.markSubDoneOrOpenItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                _this.socketService.markOpenSubItemMulti(_this.userName);
            }, function (err) {
                _this.toastr.error("Unable to Open");
            });
        };
        this.subItemMarkedOpenResponse = function () {
            _this.socketService.subItemMarkedOpenResponse().subscribe(function (response) {
                _this.getAllSubItems();
                _this.toastr.info(response);
            });
        };
        //method to undo item 
        this.undoSubItem = function (itemId) {
            console.log(itemId);
            _this.appService.undoSubItem(itemId, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.undoObj = apiResponse.data;
                    console.log(_this.undoObj);
                    if (_this.undoObj.hasOwnProperty('subItemName')) {
                        if (_this.undoObj.operationName == "Update") {
                            //this.toastr.info("Item deleted from history");
                            _this.appService.editSubItem(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                console.log(apiResponse.data);
                                _this.appService.deleteSubItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                    _this.getAllSubItems();
                                });
                            });
                            console.log(_this.itemData);
                        }
                        if (_this.undoObj.operationName == "Delete") {
                            var data = {
                                "itemId": _this.undoObj.itemId,
                                "subItemName": _this.undoObj.subItemName
                            };
                            _this.appService.createNewSubItem(data, _this.token).subscribe(function (apiResponse) {
                                console.log(apiResponse.data);
                                ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('subItemId', apiResponse.data.subItemId);
                                _this.appService.deleteSubItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                    //this.toastr.info("Item deleted from history");
                                });
                                _this.getAllSubItems();
                            }, function (err) {
                                _this.toastr.error("Error Occured");
                            });
                            //console.log(this.itemData);
                        }
                        if (_this.undoObj.operationName == "Create") {
                            _this.appService.deleteSingleSubItem(_this.undoObj.subItemId, _this.token).subscribe(function (apiResponse) {
                                if (apiResponse.status == 200) {
                                    //this.toastr.warning(apiResponse.message)
                                    _this.getAllItems();
                                    _this.getAllSubItems();
                                    _this.appService.deleteSubItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                        //this.toastr.info("Sub-Item deleted from history");
                                    });
                                }
                            }, function (err) {
                                console.log(err);
                                _this.toastr.error("Unable to delete");
                            });
                            console.log(_this.itemData);
                        }
                    }
                    _this.socketService.undoSubItemMulti(_this.userName);
                }
                else {
                    _this.toastr.info('No undo found!');
                }
            }, function (error) {
                _this.toastr.error('Some Server error occured!');
            });
        }; //end
        this.subItemUndoResponse = function () {
            _this.socketService.subItemUndoResponse().subscribe(function (response) {
                _this.getAllSubItems();
                _this.getAllSubItems();
                _this.toastr.warning(response);
            });
        };
        //Logout:
        this.logout = function () {
            _this.appService.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('authtoken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('receiverName');
                    _this.socketService.disconnectedSocket(); //calling the method which emits the disconnect event.
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.addItemUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                _this.createItemMulti();
            }
        }; // end addItemUsingKeypress
        //Sending The Request:
        this.sendreq = function (id) {
            var data = {
                receiverId: id,
                senderId: _this.userId,
                senderName: _this.userName
            };
            _this.socketService.sendRequest(data);
        };
        this.alreadySentResponse = function () {
            _this.socketService.responseAlreadySent().subscribe(function (apiResponse) {
                _this.toastr.error(apiResponse);
            });
        };
        this.alreadyFriendResponse = function () {
            _this.socketService.responseAlreadyFriend().subscribe(function (apiResponse) {
                _this.toastr.error(apiResponse);
            });
        };
        this.saveRequest = function () {
            console.log("request called");
            _this.socketService.savereq().subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse);
                console.log(apiResponse);
                _this.getAllUsers();
            });
        };
        //Rejecting The Request:
        this.rejectReq = function (id) {
            var data = {
                receiverId: _this.userId,
                senderId: id,
                receiverName: _this.userName,
                action: "Reject"
            };
            _this.socketService.rejectRequest(data);
        };
        this.rejectResponse = function () {
            _this.socketService.rejectResponse().subscribe(function (apiResponse) {
                _this.toastr.warning("Request Rejected");
                _this.getAllUsers();
            });
        };
        //Accepting the request
        this.acceptReq = function (id, name) {
            var data = {
                senderId: id,
                receiverId: _this.userId,
                receiverName: _this.userName,
                senderName: name
            };
            _this.socketService.acceptRequest(data);
        };
        this.acceptResponse = function () {
            _this.socketService.acceptResponse().subscribe(function (apiResponse) {
                _this.toastr.info(apiResponse);
                _this.getAllUsers();
            });
        };
        //Deleting A Friend:
        this.deletefriend = function (id) {
            var data = {
                friendId: id,
                myId: _this.userId,
                myName: _this.userName,
                action: "Unfriend"
            };
            _this.socketService.unfriend(data);
        };
        this.unfriendResponse = function () {
            _this.socketService.unfrndResponse().subscribe(function (apiResponse) {
                _this.toastr.warning(apiResponse);
                _this.getAllUsers();
            });
        };
        this.listenUpdate = function () {
            _this.socketService.listenUpdate(_this.userId).subscribe(function (apiResponse) {
                if (apiResponse.action == "Accept") {
                    _this.toastr.success(apiResponse.friendName + " has accepted your friend request");
                }
                else if (apiResponse.action == "Request") {
                    _this.toastr.info(apiResponse.senderName + " sent you friend request");
                    _this.getAllUsers();
                }
                else if (apiResponse.action == "Unfriend") {
                    _this.toastr.error(apiResponse.myName + " removed you from friend list");
                }
                else if (apiResponse.action == "Reject") {
                    _this.toastr.error(apiResponse.receiverName + " rejected your friend request");
                }
                else { }
                _this.getAllUsers();
            });
        };
        this.clearUndos = function () {
            _this.appService.clearItemUndos(_this.token).subscribe(function (apiResponse) {
                //this.toastr.info(apiResponse.message)       
            }, function (err) {
                _this.toastr.error("Unable to clear history");
            });
            _this.appService.clearSubItemUndos(_this.token).subscribe(function (apiResponse) {
                //this.toastr.info(apiResponse.message)       
            }, function (err) {
                _this.toastr.error("Unable to clear history");
            });
            _this.socketService.clearUndos(_this.userName);
        };
        this.clearUndosResponse = function () {
            _this.socketService.clearUndosResponse().subscribe(function (response) {
                _this.getAllSubItems();
                _this.toastr.info(response);
            });
        };
    }
    TodoListMultiComponent.prototype.ngOnInit = function () {
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("receiverId");
        this.userName = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("receiverName");
        this.verifyUserConfirmation();
        //this.onlineUsers();
        this.getOnlineUserList();
        this.getAllUsers();
        this.getAlltodoList();
        this.getAllItems();
        this.getAllSubItems();
        this.newListAddedResponse();
        this.listDeletedResponse();
        this.listUpdatedResponse();
        this.newItemAddedResponse();
        this.itemDeletedResponse();
        this.itemUpdatedResponse();
        this.itemMarkedDoneResponse();
        this.itemMarkedOpenResponse();
        this.itemUndoResponse();
        this.newSubItemAddedResponse();
        this.subItemDeletedResponse();
        this.subItemUpdatedResponse();
        this.subItemMarkedDoneResponse();
        this.subItemMarkedOpenResponse();
        this.subItemUndoResponse();
        this.clearUndosResponse();
        this.alreadySentResponse();
        this.alreadyFriendResponse();
        this.saveRequest();
        // this.listenRequest();
        this.rejectResponse();
        // this.listenReject();
        this.acceptResponse();
        // this.listenAccept()
        this.unfriendResponse();
        // this.listenUnfriend();
        this.listenUpdate();
    };
    TodoListMultiComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    TodoListMultiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list-multi',
            template: __webpack_require__(/*! ./todo-list-multi.component.html */ "./src/app/todo/todo-list-multi/todo-list-multi.component.html"),
            styles: [__webpack_require__(/*! ./todo-list-multi.component.css */ "./src/app/todo/todo-list-multi/todo-list-multi.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TodoListMultiComponent);
    return TodoListMultiComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color:#305693;\r\n    color: white;\r\n    padding: 2%;\r\n    text-align: center;\r\n  }\r\n  .navbar{\r\n    cursor: pointer;\r\n  }\r\n  .aside{\r\n    background:  #f5f5f5;\r\n    height:100vh;\r\n    overflow:auto;\r\n    margin-top:2%;\r\n}\r\n  h5{\r\n    font-weight: bold;\r\n    color:black;\r\n    background:#f5f5f5;\r\n    padding:1%;\r\n}\r\n  .list{\r\n    list-style-type: square;\r\n    display:inline-block;\r\n    \r\n}\r\n  .user{\r\n    background-color:#7c8ca5;\r\n    color:black;\r\n    padding:5%;\r\n    display:block;\r\n    width:100%;\r\n    font-size:1.2em;\r\n    text-align:center;\r\n    font-family:sans-serif;\r\n}\r\n  .all{\r\n    font-size:1.3em;\r\n    margin:3vh 0;\r\n}\r\n  .lists{\r\n    text-transform:capitalize;\r\n    font-family:sans-serif;\r\n    font-size:1.3em;\r\n}\r\n  .lists:hover{\r\n    cursor:pointer;\r\n    text-decoration:underline;\r\n}\r\n  .fasquare{\r\n    text-align: center;\r\n    font-size:2.2em;\r\n    margin-left:43%;\r\n    margin-top:3%;\r\n}\r\n  .fasquare:hover{\r\n    color:red;\r\n    cursor:pointer;\r\n}\r\n  .fa-user{\r\n    margin-right:1%;\r\n    font-size:1.4em;\r\n}\r\n  .trash1{\r\n    color: red;;\r\n    float:right;\r\n    font-size:1.2em;\r\n    cursor:pointer;\r\n    padding-right: 0.2em;\r\n}\r\n  .edit1{\r\n    color: green;;\r\n    float:right;\r\n    font-size:1.2em;\r\n    cursor:pointer;\r\n    padding-right: 0.2em;\r\n}\r\n  .fa-trash-o:hover{\r\n    cursor:pointer;\r\n    color:red;\r\n}\r\n  .input{\r\n    margin-top:3%;\r\n}\r\n  .textfield{\r\n    border-top:none;\r\n    border-left:none;\r\n    border-right:none;\r\n    border-bottom:3px solid #9966ff;\r\n}\r\n  .square2{\r\n    font-size:2em;\r\n    margin-left:1%;\r\n}\r\n  .square2:hover{\r\ncolor:red;\r\ncursor:pointer;\r\n}\r\n  .tasklist{\r\n    margin-top:2%;\r\n    overflow:auto;\r\n    height:82vh;\r\n}\r\n  .listname{\r\n    font-size:1.5em;\r\n    text-transform:uppercase;\r\n    color:black;\r\n    background:#7c8ca5;\r\n    text-align:center;\r\n    margin-top:2%;\r\n    font-family:Arial, Helvetica, sans-serif;\r\n}\r\n  .itemName{\r\n    background-color:#EBA189;\r\n    color:black;\r\n    padding:2%;\r\n    font-size:1.2em;\r\n    font-family:sans-serif;\r\n    text-transform: capitalize;\r\n    margin:0.5% 4%;\r\n}\r\n  .subItemName{\r\n    background-color:#7583D2;\r\n    color:black;\r\n    padding:1.2%;\r\n    font-size:0.8em;\r\n    font-family:sans-serif;\r\n    text-transform: capitalize;\r\n    margin:0.5% 4%;\r\n}\r\n  .leftMargin{\r\n    margin-left: 4%;\r\n}\r\n  .trash2{\r\n    float: right;\r\n    font-size:1.2em;\r\n    color:red;\r\n    padding-right: 0.2em\r\n}\r\n  .trash2:hover{\r\n    color:rgb(207, 78, 78);\r\n}\r\n  .undoSub{\r\n    float: right;\r\n    font-size:1.2em;\r\n    color:rgb(175, 24, 125);\r\n    cursor:pointer;\r\n\r\n}\r\n  .undoSub:hover{\r\n    color:rgb(114, 38, 38);\r\n}\r\n  .blankContent{\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 3rem;\r\n    color: #999;\r\n}\r\n  .squareItem{\r\n    color:#3F414D;\r\n    font-size:1.2em;\r\n    float:right;\r\n    cursor:pointer;\r\n    padding-right: 0.2em\r\n}"

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <div class=\"col-12 header\">\r\n        <h1>To-Do List Application</h1>\r\n    </div>\r\n    <!--Navigation Bar-->\r\n\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\">\r\n\r\n                <li class=\"nav-item\">\r\n                    <b><a class=\"nav-link active\">Single-User</a></b>\r\n                </li>\r\n\r\n                <li class=\"nav-item\">\r\n                    <b><a class=\"nav-link\"[routerLink]=\"['/todo-list-multi']\">Multi-User</a></b>\r\n                </li>\r\n\r\n                <li class=\"nav-item\">\r\n                    <b><a class=\"nav-link\" (click)=logout()>Logout</a></b>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n\r\n    <!--Modal to add item List-->\r\n\r\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Add a New List</h4>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                        &times;\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form class=\"form-group\">\r\n                        <label for=\"input\">\r\n                            List Name:\r\n                        </label>\r\n\r\n                        <input [(ngModel)]=\"listName1\" name=\"name\" class=\"form-control\" placeholder=\"Enter List Name\" type=\"text\" />\r\n\r\n\r\n                    </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"newtodo()\">Save</button>\r\n                    <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal to edit List-->\r\n\r\n    <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Edit List</h4>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                        &times;\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form class=\"form-group\">\r\n                        <label for=\"input\">\r\n                            List Name:\r\n                        </label>\r\n\r\n                        <input [(ngModel)]=\"listName\" name=\"name\" class=\"form-control\" placeholder=\"Edit Name\" type=\"text\" />\r\n\r\n\r\n                    </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"updatetodoList()\">Save</button>\r\n                    <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Modal to edit item-->\r\n    <div id=\"myModal2\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Edit Item</h4>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                        &times;\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form class=\"form-group\">\r\n                        <label for=\"input\">\r\n                            Item Name:\r\n                        </label>\r\n\r\n                        <input [(ngModel)]=\"itemName\" name=\"name\" class=\"form-control\" placeholder=\"Edit Item Name\" type=\"text\" />\r\n\r\n\r\n                    </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"updateItem()\">Save</button>\r\n                    <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Modal to add Sub-item to Item-->\r\n    <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title\">Add a Sub-Item to Item</h4>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                        &times;\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form class=\"form-group\">\r\n                        <label for=\"input\">\r\n                            Sub-Item Name:\r\n                        </label>\r\n\r\n                        <input [(ngModel)]=\"subItemName1\" name=\"name\" class=\"form-control\" placeholder=\"Enter Sub-Item Name\" type=\"text\" />\r\n\r\n\r\n                    </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"createSubItem()\">Save</button>\r\n                    <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!--Modal to edit item-->\r\n    <div id=\"myModal4\" class=\"modal fade\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Edit Sub-Item</h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                            &times;\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form class=\"form-group\">\r\n                            <label for=\"input\">\r\n                                Sub-Item Name:\r\n                            </label>\r\n    \r\n                            <input [(ngModel)]=\"subItemName\" name=\"name\" class=\"form-control\" placeholder=\"Edit Sub-Item Name\" type=\"text\" />\r\n            \r\n                        </form>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"updateSubItem()\">Save</button>\r\n                        <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n    \r\n                </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n    <!--  SideBar   -->\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 aside\">\r\n            <span class=\"user\">\r\n                <b> Welcome! {{fullName}} </b><br>\r\n                <small style=\"font-weight:bold;\">Single User Platform</small>\r\n            </span>\r\n            <div>\r\n                <i class=\"fa fa-plus-square fasquare\" data-toggle=\"modal\" data-target=\"#myModal\" title=\"Add New ToDo List\"></i>\r\n            </div>\r\n            <hr class=\"lead\">\r\n            <div *ngFor=\"let res of response\">\r\n                <div *ngIf = \"res.private==true\">\r\n                    <p class=\"lists\">\r\n                        <span (click)=selectlist(res.listId,res.listName)>\r\n                            <i class=\"fa fa-list-alt\"></i> {{res.listName}}\r\n                        </span>\r\n                        <i class=\"fa fa-trash-o trash1\" title=\"Delete\" (click)=deletetodoList(res.listId)></i>\r\n                        <i class=\"fa fa-edit edit1\" title=\"Edit\" data-toggle=\"modal\" data-target=\"#myModal1\" (click)=\"setListName(res.listId,res.listName)\"></i>\r\n                    </p>\r\n\r\n                    <small style=\"font-weight:bold ;font-style:sans-serif;\" class=\"text-muted text-sm\">Created on : {{res.createdOn | date}}</small>\r\n\r\n                    <hr class=\"lead\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <!--  Task Menu -->\r\n        <div class=\"col-md-9\">\r\n            <div class=\"input\">\r\n                <input [(ngModel)]=\"itemName1\" name=\"item\" style=\"width:75%; display:inline-block\" class=\"textfield\" type=\"text\" placeholder=\"Add New Item\"\r\n                    (keydown)=\"addItemUsingKeypress($event)\">\r\n                <i (click)=\"createItem()\" class=\"fa fa-plus-square square2\" title=\"Add Item\"></i>\r\n                <i (click)=\"clearUndos()\" class=\"fa fa-minus-circle square2\" title=\"Clear All Undos\"></i>\r\n\r\n            </div>    \r\n\r\n\r\n            <div *ngIf=\"!listName\" class=\"col-sm blankContent\">\r\n                Click on List to schedule your task !!!\r\n            </div>\r\n\r\n\r\n            <div>\r\n                <div class=\"listname\">{{listName}}<span (click)=\"undoItem(listId)\" style=\"float:right; padding-right:2em\"><i class=\"fa fa-undo fa-lg\" style=\"cursor:pointer;\" title=\"Undo Item\"></i></span></div>\r\n                <div class=\"tasklist\">\r\n                    <div *ngFor=\"let item of itemData\">\r\n                        <div class=\"itemName\" *ngIf=\"item.listId==listId\">\r\n                            \r\n                            <input type=\"checkbox\" *ngIf = \"item.isDone==false\" (click)=markDoneItem(item.itemId) title=\"Click to Mark Done\">\r\n                            <i class=\"fa fa-check-circle\" style=\"color:darkgreen\" *ngIf = \"item.isDone==true\" (click)=markOpenItem(item.itemId)  title=\"Click to Open Again\"></i>\r\n                            {{item.itemName}}\r\n                            <i *ngIf = \"item.isDone==false\" (click)=\"undoSubItem(itemId)\" class=\"fa fa-undo undoSub\" style=\"float :right\" title=\"Undo SubItem\"></i>\r\n                            <i  *ngIf = \"item.isDone==false\" (click)=deleteItem(item) class=\"fa fa-trash-o trash2\" title=\"Delete Item\"></i>\r\n                            <i  *ngIf = \"item.isDone==false\" class=\"fa fa-pencil edit1\" data-toggle=\"modal\" data-target=\"#myModal2\" (click)=\"setItemName(item.itemId,item.itemName)\" (click)=\"saveItemUpdateHistory(item)\" title=\"Edit Item\"></i>\r\n                            <i  *ngIf = \"item.isDone==false\" class=\"fa fa-plus-square squareItem\" title=\"Add SubItem\" data-toggle=\"modal\" data-target=\"#myModal3\" (click)=\"addSubItemIcon(item.itemId)\"></i>\r\n                            \r\n                        </div>\r\n\r\n                        <br>                        \r\n                            <!-- Sub-Items -->\r\n                        <div class=\"leftMargin\"  *ngIf=\"item.listId==listId\">\r\n                            <div *ngFor=\"let subItem of response1\">\r\n                                <p class=\"subItemName\" *ngIf=\"subItem.itemId==item.itemId\">\r\n                                    <input type=\"checkbox\" *ngIf =\"subItem.isDone==false && item.isDone==false\" (click)=markDoneSubItem(subItem.subItemId) title=\"Click to Mark Done\">\r\n                                    <i class=\"fa fa-check-circle\" *ngIf =\"subItem.isDone==true && item.isDone==false\" style=\"color:darkgreen\" (click)=markOpenSubItem(subItem.subItemId) title=\"Click to Mark Open\"></i>\r\n                                    \r\n                                    {{subItem.subItemName}}\r\n                                    \r\n                                    <i *ngIf = \"item.isDone==false && subItem.isDone==false\" class=\"fa fa-trash-o trash2\" (click)=deleteSubItem(subItem) title=\"Delete\"></i>\r\n                                    <i *ngIf = \"item.isDone==false && subItem.isDone==false\" class=\"fa fa-pencil edit1\"  data-toggle=\"modal\" data-target=\"#myModal4\" (click)=\"setSubItemName(subItem.subItemId,subItem.subItemName)\" (click)=\"saveSubItemUpdateHistory(subItem)\" title=\"Edit Sub-Item\"></i>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                       \r\n\r\n                    </div>    \r\n                    <br>              \r\n                </div>\r\n            \r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(appService, toastr, router, socketService) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
        this.response = [];
        this.response1 = [];
        this.itemData = [];
        this.gotologin = function () {
            _this.router.navigate(['/login']);
        };
        //for getting all users
        this.getAllUsers = function () {
            _this.appService.getAllpeople(_this.token).subscribe(function (apiResponse) {
                _this.users = apiResponse.data;
                console.log(_this.users);
            });
        };
        /* To-Do list related functionality */
        //Selecting A List:
        this.selectlist = function (listId, listName) {
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set("listId", listId);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set("listName", listName);
            _this.listName = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("listName");
            _this.listId = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("listId");
            _this.toastr.info(_this.listName + " Selected");
        };
        //for getting all to do list for single user
        this.getAlltodoList = function () {
            //console.log(this.response)
            _this.response = [];
            _this.appService.getAlltodo(_this.token).subscribe(function (apiResponse) {
                for (var index in apiResponse.data) {
                    if (apiResponse.data[index].userId == _this.userId)
                        _this.response.push(apiResponse.data[index]);
                    else
                        console.log("Does Not Match");
                }
                // console.log(this.response);
            }, function (err) {
                console.log("Error Occured");
            });
        };
        //Getting All Items:
        this.getAllItems = function () {
            _this.appService.getItems(_this.token).subscribe(function (apiResponse) {
                _this.itemData = apiResponse.data;
                console.log(_this.itemData);
            }, function (err) {
                console.log(err);
            });
        };
        //getting all subItems
        this.getAllSubItems = function () {
            _this.response1 = [];
            _this.appService.getSubItems(_this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                _this.response1 = apiResponse.data;
                console.log(_this.response1);
            }, function (err) {
                console.log("Error Occured");
            });
        };
        //for creating new todo list for single user
        this.newtodo = function () {
            if (!_this.listName1) {
                _this.toastr.warning("List Name is required");
            }
            else {
                var values = {
                    listName: _this.listName1,
                    userId: _this.userId,
                    creator: _this.fullName,
                    private: true
                };
                _this.appService.createTodo(values, _this.token).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success("List Created");
                        _this.listName1 = "";
                        _this.response = [];
                        _this.getAlltodoList();
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        //Deleting a todolist:
        this.deletetodoList = function (id) {
            _this.appService.removetodolist(id, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('listId');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('listName');
                _this.listName = "";
                _this.toastr.warning(apiResponse.message);
                _this.response = [];
                _this.getAlltodoList();
            }, function (err) {
                _this.toastr.error("Unable to Delete list");
            });
        };
        //Update a todolist:
        this.setListName = function (listId, listName) {
            _this.listId = listId;
            _this.listName = listName;
        };
        this.updatetodoList = function () {
            //console.log("data in componet : "+ data.listId);
            //console.log("data in componet : "+ data.listName);
            var data = {
                listName: _this.listName,
                listId: _this.listId
            };
            _this.appService.edittodolist(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                _this.getAlltodoList();
            }, function (err) {
                _this.toastr.error("Unable to Update list");
            });
        };
        /*
        *Item related functionality
        */
        //for new creating item for sigle user
        this.createItem = function () {
            if (_this.listId == undefined) {
                return _this.toastr.warning("Select List");
            }
            else {
            }
            if (_this.itemName1 == undefined || _this.itemName1 == "" || _this.itemName1 == null) {
                return _this.toastr.warning("Item Cannot be empty");
            }
            else {
                var data = {
                    listId: _this.listId,
                    itemName: _this.itemName1
                };
                console.log(data.itemName);
                _this.appService.createNewItem(data, _this.token).subscribe(function (apiResponse) {
                    _this.itemName1 = "";
                    _this.item = apiResponse.data;
                    console.log(_this.item);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('itemId', apiResponse.data.itemId);
                    _this.appService.saveCreateHistoryItem(_this.item, _this.token).subscribe(function (apiResponse) {
                        //this.toastr.success(apiResponse.message); 
                        console.log(apiResponse.message);
                    });
                    _this.getAllItems();
                    _this.toastr.success("Item Created");
                }, function (err) {
                    _this.toastr.error("Error Occured");
                });
            }
        };
        //Deleting A Item:
        this.deleteItem = function (item) {
            _this.itemSave = item;
            console.log(item);
            _this.appService.deleteSingleItem(item.itemId, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.warning(apiResponse.message);
                    _this.getAllItems();
                    _this.saveDeletedItem();
                }
            }, function (err) {
                console.log(err);
                _this.toastr.error("Unable to delete");
            });
        };
        this.saveDeletedItem = function () {
            //for saving to history
            _this.appService.saveDeleteHistoryItem(_this.itemSave, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    // this.toastr.success(apiResponse.message); 
                    _this.getAlltodoList();
                }
            }, function (error) {
                console.log("Error Occured");
            });
        };
        //Update a ItemName:
        this.setItemName = function (itemId, itemName) {
            _this.itemId = itemId;
            _this.itemName = itemName;
        };
        this.saveItemUpdateHistory = function (item) {
            _this.appService.saveUpdateHistoryItem(item, _this.token).subscribe(function (apiResponse) {
                // this.toastr.success(apiResponse.message); 
                console.log(apiResponse.message);
            });
        };
        this.updateItem = function () {
            var data = {
                itemName: _this.itemName,
                itemId: _this.itemId
            };
            _this.appService.editItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                _this.getAllItems();
                _this.getAllSubItems();
            }, function (err) {
                _this.toastr.error("Unable to Update Item");
            });
        };
        //for Mark Done and Open Item
        this.markDoneItem = function (itemId) {
            var data = {
                isDone: true,
                itemId: itemId
            };
            console.log(data);
            _this.appService.markDoneOrOpenItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                _this.toastr.success("Item Marked Done");
                _this.getAllItems();
            }, function (err) {
                _this.toastr.error("Unable to Mark Done");
            });
        };
        this.markOpenItem = function (itemId) {
            var data = {
                isDone: false,
                itemId: itemId
            };
            console.log(data);
            _this.appService.markDoneOrOpenItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                _this.toastr.info("Item Marked Open");
                _this.getAllItems();
            }, function (err) {
                _this.toastr.error("Unable to Open");
            });
        };
        //method to undo item 
        this.undoItem = function (listId) {
            console.log(listId);
            _this.appService.undoItem(listId, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.undoObj = apiResponse.data;
                    console.log(_this.undoObj);
                    if (_this.undoObj.hasOwnProperty('itemName')) {
                        if (_this.undoObj.operationName == "Update") {
                            //this.toastr.info("Item deleted from history");
                            _this.appService.editItem(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                console.log(apiResponse.data);
                                _this.appService.deleteItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                    _this.getAllItems();
                                });
                            });
                            console.log(_this.itemData);
                        }
                        if (_this.undoObj.operationName == "Delete") {
                            var data = {
                                "listId": _this.undoObj.listId,
                                "itemName": _this.undoObj.itemName
                            };
                            _this.appService.createNewItem(data, _this.token).subscribe(function (apiResponse) {
                                console.log(apiResponse.data);
                                ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('itemId', apiResponse.data.itemId);
                                _this.getAllItems();
                                _this.getAllSubItems();
                                _this.appService.deleteItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                    //this.toastr.info("Item deleted from history");
                                });
                            }, function (err) {
                                _this.toastr.error("Error Occured");
                            });
                            //console.log(this.itemData);
                        }
                        if (_this.undoObj.operationName == "Create") {
                            _this.appService.deleteSingleItem(_this.undoObj.itemId, _this.token).subscribe(function (apiResponse) {
                                if (apiResponse.status == 200) {
                                    _this.toastr.warning(apiResponse.message);
                                    _this.getAllItems();
                                    _this.appService.deleteItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                        //this.toastr.info("Item deleted from history");
                                    });
                                }
                            }, function (err) {
                                console.log(err);
                                _this.toastr.error("Unable to delete");
                            });
                            console.log(_this.itemData);
                        }
                    }
                }
                else {
                    _this.toastr.warning('No undo found!');
                }
            }, function (error) {
                _this.toastr.error('Some Server error occured!');
            });
        }; //end
        /* Sub-Item related functionality */
        this.addSubItemIcon = function (itemId) {
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set("itemId", itemId);
            _this.itemId = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("itemId");
        };
        this.createSubItem = function () {
            if (!_this.subItemName1) {
                _this.toastr.warning("Name is required");
            }
            else { }
            var data = {
                itemId: _this.itemId,
                subItemName: _this.subItemName1
            };
            console.log(data.subItemName);
            console.log(data.itemId);
            _this.appService.createNewSubItem(data, _this.token).subscribe(function (apiResponse) {
                _this.subItemName1 = "";
                _this.subItem = apiResponse.data;
                console.log(_this.subItem);
                _this.appService.saveCreateHistorySubItem(_this.subItem, _this.token).subscribe(function (apiResponse) {
                    //this.toastr.success(apiResponse.message); 
                    console.log(apiResponse.message);
                });
                _this.getAllSubItems();
                _this.toastr.success("Sub-Item Created");
            }, function (err) {
                _this.toastr.error("Error Occured");
            });
        };
        //Deleting A Sub-Item:
        this.deleteSubItem = function (subItem) {
            _this.subItemSave = subItem;
            console.log(subItem);
            _this.appService.deleteSingleSubItem(subItem.subItemId, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.warning(apiResponse.message);
                    _this.getAllSubItems();
                    _this.saveDeletedSubItem();
                }
            }, function (err) {
                console.log(err);
                _this.toastr.error("Unable to delete");
            });
        };
        this.saveDeletedSubItem = function () {
            //for saving to history
            _this.appService.saveDeleteHistorySubItem(_this.subItemSave, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    // this.toastr.success(apiResponse.message); 
                    _this.getAlltodoList();
                }
            }, function (error) {
                console.log("Error Occured");
            });
        };
        //Update a Sub-ItemName:
        this.setSubItemName = function (subItemId, subItemName) {
            console.log(subItemId);
            console.log(subItemName);
            _this.subItemId = subItemId;
            _this.subItemName = subItemName;
        };
        this.saveSubItemUpdateHistory = function (item) {
            _this.appService.saveUpdateHistorySubItem(item, _this.token).subscribe(function (apiResponse) {
                // this.toastr.success(apiResponse.message); 
                console.log(apiResponse.message);
            });
        };
        this.updateSubItem = function () {
            var data = {
                subItemName: _this.subItemName,
                subItemId: _this.subItemId
            };
            console.log(data);
            _this.appService.editSubItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                _this.getAllSubItems();
            }, function (err) {
                _this.toastr.error("Unable to Update Sub-Item");
            });
        };
        //for marking item Done or Open
        this.markDoneSubItem = function (subItemId) {
            var data = {
                isDone: true,
                subItemId: subItemId
            };
            console.log(data);
            _this.appService.markSubDoneOrOpenItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                _this.toastr.success("Sub-Item Marked Done");
                _this.getAllSubItems();
            }, function (err) {
                _this.toastr.error("Unable to Mark Done");
            });
        };
        this.markOpenSubItem = function (subItemId) {
            var data = {
                isDone: false,
                subItemId: subItemId
            };
            console.log(data);
            _this.appService.markSubDoneOrOpenItem(data, _this.token).subscribe(function (apiResponse) {
                console.log(apiResponse);
                //Cookie.set('listName', data.listName);
                _this.toastr.info("Sub-Item Marked Open");
                _this.getAllSubItems();
            }, function (err) {
                _this.toastr.error("Unable to Open");
            });
        };
        this.clearUndos = function () {
            _this.appService.clearItemUndos(_this.token).subscribe(function (apiResponse) {
                _this.toastr.info(apiResponse.message);
            }, function (err) {
                _this.toastr.error("Unable to clear history");
            });
            _this.appService.clearSubItemUndos(_this.token).subscribe(function (apiResponse) {
                _this.toastr.info(apiResponse.message);
            }, function (err) {
                _this.toastr.error("Unable to clear history");
            });
        };
        //method to undo item 
        this.undoSubItem = function (itemId) {
            console.log(itemId);
            _this.appService.undoSubItem(itemId, _this.token).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.undoObj = apiResponse.data;
                    console.log(_this.undoObj);
                    if (_this.undoObj.hasOwnProperty('subItemName')) {
                        if (_this.undoObj.operationName == "Update") {
                            //this.toastr.info("Item deleted from history");
                            _this.appService.editSubItem(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                console.log(apiResponse.data);
                                _this.appService.deleteSubItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                    _this.getAllSubItems();
                                });
                            });
                            console.log(_this.itemData);
                        }
                        if (_this.undoObj.operationName == "Delete") {
                            var data = {
                                "itemId": _this.undoObj.itemId,
                                "subItemName": _this.undoObj.subItemName
                            };
                            _this.appService.createNewSubItem(data, _this.token).subscribe(function (apiResponse) {
                                console.log(apiResponse.data);
                                ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('subItemId', apiResponse.data.subItemId);
                                _this.getAllSubItems();
                                _this.appService.deleteSubItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                    //this.toastr.info("Item deleted from history");
                                });
                            }, function (err) {
                                _this.toastr.error("Error Occured");
                            });
                            //console.log(this.itemData);
                        }
                        if (_this.undoObj.operationName == "Create") {
                            _this.appService.deleteSingleSubItem(_this.undoObj.subItemId, _this.token).subscribe(function (apiResponse) {
                                if (apiResponse.status == 200) {
                                    //this.toastr.warning(apiResponse.message)
                                    _this.getAllItems();
                                    _this.getAllSubItems();
                                    _this.appService.deleteSubItemFromHistory(_this.undoObj, _this.token).subscribe(function (apiResponse) {
                                        //this.toastr.info("Sub-Item deleted from history");
                                    });
                                }
                            }, function (err) {
                                console.log(err);
                                _this.toastr.error("Unable to delete");
                            });
                            console.log(_this.itemData);
                        }
                    }
                }
                else {
                    _this.toastr.warning('No undo found!');
                }
            }, function (error) {
                _this.toastr.error('Some Server error occured!');
            });
        }; //end
        //Logout:
        this.logout = function () {
            _this.appService.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('authtoken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('receiverName');
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.addItemUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                _this.createItem();
            }
        }; // end sendMessageUsingKeypress
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("receiverId");
        this.fullName = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("receiverName");
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
        this.getAllUsers();
        this.getAlltodoList();
        this.userInfo = this.appService.getUserInfoFromLocalstorage();
        this.getAllItems();
        this.getAllSubItems();
    };
    TodoListComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    //method to do undo using keyboard
    TodoListComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.ctrlKey && event.key == 'z' || event.metaKey && event.key == 'z') {
            // console.log(event);
            if (this.listId) {
                this.undoItem(this.listId);
            }
        }
    }; //end
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], TodoListComponent.prototype, "handleKeyboardEvent", null);
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todo/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo/todo-list/todo-list.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.module.ts":
/*!*************************************!*\
  !*** ./src/app/todo/todo.module.ts ***!
  \*************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_list_multi_todo_list_multi_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-list-multi/todo-list-multi.component */ "./src/app/todo/todo-list-multi/todo-list-multi.component.ts");
/* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/todo/friends/friends.component.ts");
/* harmony import */ var _route_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../route-guard.service */ "./src/app/route-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//for toast message





//for enabling gaurd to routes

var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'todo-list', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_9__["RouteGuardService"]] },
                    { path: 'todo-list-multi', component: _todo_list_multi_todo_list_multi_component__WEBPACK_IMPORTED_MODULE_7__["TodoListMultiComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_9__["RouteGuardService"]] },
                    { path: 'friends', component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_8__["FriendsComponent"] }
                ])
            ],
            declarations: [_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"], _todo_list_multi_todo_list_multi_component__WEBPACK_IMPORTED_MODULE_7__["TodoListMultiComponent"], _friends_friends_component__WEBPACK_IMPORTED_MODULE_8__["FriendsComponent"]]
        })
    ], TodoModule);
    return TodoModule;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n\r\n  <a class=\"navbar-brand\" href=\"/\">TO-DO App</a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <li class=\"nav-item\">\r\n\r\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Signup</a>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n\r\n  </div>\r\n\r\n</nav>\r\n\r\n<div class=\"row p-0 m-0\">\r\n\r\n  <div class=\"col-sm\"></div>\r\n\r\n  <div class=\"col-sm p-5\">\r\n\r\n    <h2 class=\"form-signin-heading\">Email Address</h2>\r\n\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n\r\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\r\n\r\n    <br>\r\n\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"sendResetLinkFunction()\">Send Reset Link</button>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-sm\"></div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.sendResetLinkFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email address');
            }
            _this.appService.sendResetLink(_this.email)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Reset Link Sent SuccessFully", "Success!");
                    setTimeout(function () {
                        _this.router.navigate(['/login']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error! Try Again");
                }
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
            });
        }; //end of sendResetLink 
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.goToSignUp = function () {
        this.router.navigate(['/signup']);
    }; //end goToSignUp
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n\r\n  <a class=\"navbar-brand\" href=\"/\">TO-DO List Application</a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <li class=\"nav-item\">\r\n\r\n        <a class=\"nav-link\" style=\"cursor: pointer\" (click) = \"goToSignUp()\" >SignUp</a>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n\r\n  </div>\r\n\r\n</nav>\r\n\r\n<div class=\"row p-0 m-0\">\r\n\r\n  <div class=\"col-sm\"></div>\r\n\r\n  <div class=\"col-sm p-5\">\r\n\r\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n\r\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\r\n\r\n    <br>\r\n\r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n\r\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"  (keydown)=\"doLoginUsingKeypress($event)\" required>\r\n\r\n    <br>\r\n\r\n\r\n    <a [routerLink]=\"['/forgot-password']\">Forgot Password ?</a>\r\n\r\n    <br><br>\r\n\r\n\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click) = \"signinFunction()\" >Sign in</button>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-sm\"></div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import for toastr

//for loading spinner
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        }; // end goToSignUp
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        //   this.router.navigate(['/']);
                        setTimeout(function () {
                            _this.router.navigate(['/todo-list']);
                        }, 1000);
                    }
                    else {
                        setTimeout(function () {
                            _this.toastr.error(apiResponse.message);
                        }, 1000);
                    }
                }, function (err) {
                    if (err.status == 404) {
                        setTimeout(function () {
                            _this.router.navigate(['/page-not-found']);
                        }, 1000);
                    }
                    else if (err.status == 500) {
                        setTimeout(function () {
                            _this.router.navigate(['/server-error']);
                        }, 1000);
                    }
                    else if (err.status == 400) {
                        setTimeout(function () {
                            _this.toastr.error('Password incorrect');
                        });
                    }
                    else {
                        setTimeout(function () {
                            _this.router.navigate(['/signup']);
                            _this.toastr.error('Please, create account');
                        });
                    }
                });
            } // end condition
        }; // end signinFunction
        this.doLoginUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                _this.signinFunction();
            }
        }; // end sendMessageUsingKeypress
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n\r\n  <a class=\"navbar-brand\" href=\"/\">TO-DO List Application</a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n    <ul class=\"navbar-nav mr-auto\">\r\n\r\n      <li class=\"nav-item\">\r\n\r\n        <a class=\"nav-link\" style=\"cursor: pointer\" (click)=\"goToSignIn()\">SignIn</a>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n\r\n  </div>\r\n\r\n</nav>\r\n\r\n<div class=\"row p-0 m-0\">\r\n\r\n  <div class=\"col-sm\"></div>\r\n\r\n  <div class=\"col-sm p-5\">\r\n\r\n    <h2 class=\"form-signin-heading\">Sign Up To Create your TO-DO List</h2>\r\n\r\n    <br>\r\n\r\n    <span>FirstName: </span>\r\n\r\n    <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\r\n\r\n    <input type=\"text\" #first=\"ngModel\" pattern=\"^[A-Z][A-za-z ]+$\" minlength=\"2\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\r\n\r\n    <br>\r\n    <div [hidden]=\"first.pristine || first.valid\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"first.errors?.pattern\">\r\n        Warning : Please tart with Capital and contain only letters !\r\n            <div *ngIf=\"first.errors?.minlength\">\r\n              Warning : Minimum 2 letters required!\r\n            </div>\r\n      </div>\r\n      <div *ngIf=\"first.errors?.required\">\r\n        Warning : First Name is required!\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <span>LastName: </span>\r\n\r\n    <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\r\n\r\n    <input type=\"text\" #last=\"ngModel\" pattern=\"^[A-Z][A-za-z ]+$\" minlength=\"2\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\r\n\r\n    <br>\r\n\r\n    <div [hidden]=\"last.pristine || last.valid\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"last.errors?.pattern\">\r\n        Warning : Please tart with Capital and contain only letters !\r\n        <div *ngIf=\"last.errors?.minlength\">\r\n          Warning : Minimum 2 letters required!\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"last.errors?.required\">\r\n        Warning : Last Name is required!\r\n      </div>\r\n\r\n    </div>\r\n<!--\r\n    <span>Mobile: </span>\r\n\r\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\r\n\r\n    <input type=\"number\" id=\"inputMobileNumber\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" placeholder=\"Mobile Number\" required>\r\n-->\r\n\r\n    <span>Email: </span>\r\n\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n\r\n    <input type=\"email\" #emailId=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\r\n\r\n    <br>\r\n    <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\r\n      <!--\r\n        <div *ngIf=\"emailId.errors?.pattern\">\r\n       Warning : Email is invalid!\r\n\r\n      </div>\r\n      -->\r\n      \r\n      <div *ngIf=\"emailId.errors?.required\">\r\n       Warning : Email is required!\r\n      </div>\r\n    </div>\r\n\r\n    <span>Password: </span>\r\n\r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n\r\n    <input type=\"password\" #pass=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\r\n\r\n    <br>\r\n    <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"pass.errors?.pattern\">\r\n       Warning : Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!\r\n      </div>\r\n      <div *ngIf=\"pass.errors?.required\">\r\n       Warning : Password is required!\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <span class=\"sub-heading\">Confirm Password: </span>\r\n\r\n    <label for=\"inputConPassword\" class=\"sr-only\">Confirm Password</label>\r\n\r\n    <input type=\"password\" #conPass=\"ngModel\"  id=\"inputConPassword\" class=\"form-control\" name=\"conPass\" [(ngModel)]=\"confirmPassword\"\r\n      placeholder=\"Confirm Password\" required>\r\n\r\n    <br>\r\n   \r\n    <div [hidden]=\"conPass.pristine || password==confirmPassword\" class=\"alert alert-danger\">\r\n       <div *ngIf=\"password!=confirmPassword\">\r\n          Warning : Password and Confirm Password does not match!\r\n       </div>\r\n      <div *ngIf=\"conPass.errors?.required\">\r\n          Warning: Confirm Password is required!\r\n      </div>\r\n    </div>\r\n\r\n    <span class=\"sub-heading\">Country: </span>\r\n\r\n    <label for=\"inputCountry\" class=\"sr-only\">Country</label>\r\n    \r\n    <select [(ngModel)]=\"countryName\" #Country=\"ngModel\"  name=\"countryName\" class=\"form-control\" \r\n    id=\"inputCountry\" (change)=\"onChange()\" required>\r\n       <option value=\"\" >Select</option>\r\n      <option *ngFor=\"let country of finalCountryList\" [value]=\"country.key\">{{country.value}}</option>\r\n    </select>\r\n      <br>\r\n      <div [hidden]=\"Country.valid || Country.pristine  \" class=\"alert alert-danger\">\r\n      ** Country Name is required \r\n      </div>\r\n    \r\n\r\n    <span class=\"sub-heading\">Mobile: </span>\r\n\r\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\r\n    <div class=\"input-group\">\r\n        <div class=\"input-group-text\">+{{code}}</div>\r\n        <input type=\"number\" #mobileNum=\"ngModel\" pattern=\"^\\d{10}$\" id=\"inputMobile\" class=\"form-control\" name=\"mobile\" [(ngModel)]=\"mobile\"\r\n        placeholder=\"Mobile\" required>\r\n      </div>\r\n \r\n\r\n    <br>\r\n    <div [hidden]=\"mobileNum.valid || mobileNum.pristine\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"mobileNum.errors?.pattern\">\r\n        Mobile Number should only start contain only 10 digits!\r\n\r\n      </div>\r\n      <div *ngIf=\"mobileNum.errors?.required\">\r\n        Mobile Number is required!\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-sm\"></div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sort-countries.pipe */ "./src/app/sort-countries.pipe.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import for toastr

var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr, sortCountries) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.sortCountries = sortCountries;
        this.countryName = "";
        this.finalCountryList = [];
        this.codeList = [];
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning('enter first name');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('enter last name');
            }
            else if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else if (!_this.password) {
                _this.toastr.warning('Select country');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    email: _this.email,
                    password: _this.password,
                    mobileNumber: "+" + _this.code + "-" + _this.mobileNumber,
                    country: _this.countryName
                };
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Account Created');
                        setTimeout(function () {
                            _this.goToSignIn();
                        }, 2000);
                    }
                    else if (apiResponse.status == 404) {
                        setTimeout(function () {
                            _this.router.navigate(['/page-not-found']);
                        }, 1000);
                    }
                    else if (apiResponse.status == 500) {
                        setTimeout(function () {
                            _this.router.navigate(['/server-error']);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message, 'error occured');
                    }
                });
            } // end condition
        }; // end signupFunction
        this.onChange = function () {
            _this.appService.getCountryCode().subscribe(function (Response) {
                _this.codeList = Response;
                _this.code = _this.codeList[_this.countryName];
            });
        }; //end
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getCountryList().subscribe(function (Response) {
            _this.countryList = Response;
            for (var prop in _this.countryList) {
                _this.finalCountryList.push({
                    'key': prop,
                    'value': _this.countryList[prop]
                });
            }
            _this.finalCountryList = _this.sortCountries.transform(_this.finalCountryList);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _sort_countries_pipe__WEBPACK_IMPORTED_MODULE_3__["SortCountriesPipe"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
                    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"] }
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Project\ToDoList\ToDoListFrontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map