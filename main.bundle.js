webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/ActivationGuards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationGuards; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivationGuards = (function () {
    function ActivationGuards(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ActivationGuards.prototype.canActivate = function () {
        if (!this.userService.checkLogin()) {
            this.router.navigate(["/home"]);
            return false;
        }
        else {
            return true;
        }
    };
    ActivationGuards = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__form_form_service__["a" /* FormService */]])
    ], ActivationGuards);
    return ActivationGuards;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__child_routes__ = __webpack_require__("../../../../../src/app/child-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introduce_introduce_component__ = __webpack_require__("../../../../../src/app/introduce/introduce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/form/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_register_register_component__ = __webpack_require__("../../../../../src/app/form/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/form/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__form_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/form/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");











var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_3__news_news_component__["a" /* NewsComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_5__form_checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__form_register_register_component__["a" /* RegisterComponent */] },
    { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_7__form_sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'editUser', component: __WEBPACK_IMPORTED_MODULE_8__form_edit_user_edit_user_component__["a" /* EditUserComponent */] },
    { path: 'introduce', component: __WEBPACK_IMPORTED_MODULE_4__introduce_introduce_component__["a" /* IntroduceComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_10__cart_cart_component__["a" /* CartComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */] },
    { path: 'news/:id', component: __WEBPACK_IMPORTED_MODULE_3__news_news_component__["a" /* NewsComponent */] }
].concat(__WEBPACK_IMPORTED_MODULE_1__child_routes__["a" /* ChildRecordRoutes */]);
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes);
// @NgModule({
//   exports: [ RouterModule ],
//   imports: [ RouterModule.forRoot(routes) ],
//   providers: [WorksheetAccessGuard]
// })
// export class AppRoutingModule {
// } 


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"page!='/checkout'\">\r\n        <app-header></app-header>\r\n</ng-container>\r\n\r\n<router-outlet></router-outlet>\r\n<ng-container *ngIf=\"page!='/checkout'\">\r\n        <app-footer></app-footer>\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.title = 'app';
        this.page = '';
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                _this.page = event.url;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.mainJs();
    };
    AppComponent.prototype.mainJs = function () {
        $.fn.animation = function (options) {
            var settings = $.extend({
                time_delay: 0,
                offset: 450,
            }, options);
            //lấy hiệu ứng dùng cho đối tượng
            var data_animate = $(this).attr('data-animate');
            // khoảng cách của đối tượng đến đầu trang
            var element_offset = $(this).offset().top;
            // khoảng cách muốn hiển thị cho đối tượng tính từ đầu màn hình
            var active_offset = element_offset - settings.offset;
            var scroll = $(window).scrollTop();
            if (scroll > active_offset) {
                $(this).addClass(data_animate);
                $(this).css({
                    'animation-delay': settings.time_delay + 's',
                });
            }
        };
        $.fn.callanimation = function (options) {
            // This is the easiest way to have default options.
            return this.each(function () {
                // khoảng cách muốn hiển thị cho đối tượng tính từ đầu màn hình
                var data_offset = $(this).attr('data-offset');
                // delay thoi gian chay hieu ung
                var data_delay = $(this).attr('data-delay');
                var $this = $(this);
                $(window).scroll(function (event) {
                    $this.animation({
                        time_delay: data_delay,
                        offset: data_offset
                    });
                });
                $this.animation({
                    time_delay: data_delay,
                    offset: data_offset
                });
            });
            // Greenify the collection based on the settings variable.
        };
        function header_animate() {
            var scroll = $(window).scrollTop();
            if (scroll > 85) {
                $("header").addClass('fixed');
            }
            if (scroll < 85) {
                $("header").removeClass('fixed');
            }
        }
        $(window).scroll(function (event) {
            header_animate();
        });
        header_animate();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__introduce_introduce_component__ = __webpack_require__("../../../../../src/app/introduce/introduce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_item_product_item_component__ = __webpack_require__("../../../../../src/app/product-item/product-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ultil_service__ = __webpack_require__("../../../../../src/app/ultil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form_form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__search_search_service__ = __webpack_require__("../../../../../src/app/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__form_checkout_get_http_service__ = __webpack_require__("../../../../../src/app/form/checkout/get-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ActivationGuards__ = __webpack_require__("../../../../../src/app/ActivationGuards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__form_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/form/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__form_register_register_component__ = __webpack_require__("../../../../../src/app/form/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__form_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/form/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__search_form_search_form_search_component__ = __webpack_require__("../../../../../src/app/search/form-search/form-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__form_form_menu_form_menu_component__ = __webpack_require__("../../../../../src/app/form/form-menu/form-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__form_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/form/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//SERVICE







//FORM COMPONENT








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__introduce_introduce_component__["a" /* IntroduceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__product_item_product_item_component__["a" /* ProductItemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_23__form_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_24__form_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__form_sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_26__search_form_search_form_search_component__["a" /* FormSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_27__form_form_menu_form_menu_component__["a" /* FormMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_28__form_edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_29__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_30__cart_cart_component__["a" /* CartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_18__ultil_service__["a" /* UltilService */], __WEBPACK_IMPORTED_MODULE_16__cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_19__form_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_20__search_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_21__form_checkout_get_http_service__["a" /* GetHttpService */], __WEBPACK_IMPORTED_MODULE_22__ActivationGuards__["a" /* ActivationGuards */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartItem__ = __webpack_require__("../../../../../src/app/cartItem.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = (function () {
    function CartService() {
        this.cart = [];
        this.dialog = null;
        this.cart = this.getCart();
    }
    ;
    CartService.prototype.addToCart = function (productDetail, quantity) {
        this.cart = this.getCart();
        var index = this.checkProduct(productDetail.id);
        if (index == -1) {
            var cardItem = new __WEBPACK_IMPORTED_MODULE_1__cartItem__["a" /* CartItem */](productDetail, Number(quantity));
            //cardItem.func_log();
            this.cart.push(cardItem);
        }
        else {
            this.cart[index].quantity += Number(quantity);
        }
        this.saveCart();
        this.dialog = productDetail;
        $(".dialog-box").addClass('is-active');
        setTimeout(function () {
            var isHovered = $('.dialog-box').is(":hover");
            if (!isHovered) {
                $(".dialog-box").removeClass('is-active');
            }
            else {
                $(".dialog-box").mouseout(function () {
                    $(".dialog-box").removeClass('is-active');
                });
            }
        }, 1000);
    };
    CartService.prototype.changeNumberCart = function (id, quantity) {
        var cart = this.getCart();
        var index = this.checkProduct(id);
        if (index !== -1) {
            cart[index].quantity = quantity;
            this.cart = cart;
        }
        this.saveCart();
    };
    CartService.prototype.saveCart = function () {
        sessionStorage.cart = JSON.stringify(this.cart);
    };
    CartService.prototype.getCart = function () {
        if (sessionStorage.cart) {
            return JSON.parse(sessionStorage.cart);
        }
        else {
            return [];
        }
    };
    CartService.prototype.checkProduct = function (id) {
        var cart = this.getCart();
        for (var i in cart) {
            if (cart[i].product.id === id) {
                return Number(i);
            }
        }
        return -1;
    };
    CartService.prototype.getCartItem = function (id) {
        var index = this.checkProduct(id);
        if (index !== -1) {
            return this.getCart()[index];
        }
        return null;
    };
    CartService.prototype.totalCart = function () {
        var cart = this.getCart();
        var total = 0;
        for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
            var item = cart_1[_i];
            total += item.product.price * item.quantity;
        }
        return total;
    };
    CartService.prototype.countCart = function () {
        var cart = this.getCart();
        var count = 0;
        for (var _i = 0, cart_2 = cart; _i < cart_2.length; _i++) {
            var item = cart_2[_i];
            count += item.quantity;
        }
        return count;
    };
    CartService.prototype.deleteCartItem = function (id) {
        var cart = this.getCart();
        var index = this.checkProduct(id);
        if (index !== -1) {
            cart.splice(index, 1);
            this.cart = cart;
        }
        this.saveCart();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page{\r\n\tborder-top: 85px solid rgba(54,46,41,1);\r\n\tpadding: 30px;\r\n}\r\n.breakcrumb{\r\n\tbackground: #f5f5f5;\r\n\tpadding: 5px;\r\n\twidth: 100%;\r\n\tmargin-bottom: 20px;\r\n}\r\n.breakcrumb ul li a{\r\n\tcolor: #555;\r\n}\r\n.breakcrumb ul li:after{\r\n\tcontent: \"\\F105\";\r\n\tfont-family:'FontAwesome';\r\n\tmargin-right: 5px;\r\n}\r\n.breakcrumb ul li:last-child:after{\r\n\tdisplay: none;\r\n}\r\n.page__content{\r\n\tmax-width: 100%;\r\n\twidth: 100%;\r\n}\r\n.page__content >h1{\r\n\tcolor: rgba(54,46,41,1);\r\n\tfont-size: 35px;\r\n}\r\n.page_title{\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n.page_title__content{\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\tleft: 0;\r\n\tpadding: 30px;\r\n\tbackground: rgba(0,0,0, 0.6);\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n}\r\n.page_title__content img{\r\n\tborder-radius: 50%;\r\n\tmax-width: 40px;\r\n\tmargin-right: 20px;\r\n}\r\n.page_title__content h2{\r\n\tmargin-top: 10px;\r\n}\r\n.news-list{\r\n\tmargin-top: 50px;\r\n}\r\n.news-item{\r\n\tmargin-top: 30px;\r\n\tmargin-bottom: 30px;\r\n}\r\n.news-item__img{\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\twidth: 200px;\r\n\theight: 250px;\r\n}\r\n.news-item__detail{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width: 400px;\r\n    height: 250px;\r\n    padding: 0 30px;\r\n}\r\n.img-circle{\r\n\tborder-radius: 50%;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n.news-item__detail h3 a{\r\n\tfont-weight: normal;\r\n\tfont-size: 30px;\r\n\tcolor: #000;\r\n}\r\n.news-item__detail h3 a:hover{\r\n\tcolor: #dc8068;\r\n}\r\n.read-more{\r\n\tborder: 1px solid #000;\r\n    color: #000;\r\n    text-transform: uppercase;\r\n    padding: 6px 10px;\r\n    font-size: 13px;\r\n    display: block;\r\n    height: 35px;\r\n    transition:all 0.2s linear;\r\n}\r\n.read-more:hover{\r\n\tcolor: #fff;\r\n\tbackground: #dc8068;\r\n\tborder: 1px solid #dc8068;\r\n}\r\na:hover{\r\n\ttext-decoration: none;\r\n}\r\n.pagination li a{\r\n\tcolor: #fff;\r\n\tbackground:#dc8068;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tposition: relative;\r\n\tborder:1px solid #dc8068;\r\n\tborder-right: none;\r\n\tborder-left: 1px solid #fff;\r\n\tposition: relative;\r\n}\r\n.pagination li.is-active a,.pagination li:hover a{\r\n\tbackground: #fff;\r\n\tcolor: #dc8068;\r\n\tborder-left: 1px solid #dc8068;\r\n}\r\n.pagination li.is-active a:after,.pagination li:hover a:after{\r\n\tcontent: '';\r\n\tbackground: #dc8068;\r\n\tdisplay: block;\r\n\twidth: 1px;\r\n\theight: 30px;\r\n\ttop: -1px;\r\n    right: -1px;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n.pagination li:first-child a{\r\n\tborder-radius: 5px 0 0 5px;\r\n\tborder-left-color: #dc8068;\r\n}\r\n.pagination li:last-child a{\r\n\tborder-radius: 0 5px 5px 0;\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a,.pagination li:last-child:hover a{\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a:after,.pagination li:last-child:hover a:after{\r\n\tdisplay: none;\r\n}\r\n.image-ship{\r\n\tmargin: 50px 0;\r\n}\r\n.sort{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n.sort .dropdown{\r\n\tborder:1px solid #999;\r\n\tposition: relative;\r\n\tmargin-left: 20px;\r\n}\r\n.dropdown >ul{\r\n\tposition: absolute;\r\n\tz-index: 11; \r\n\ttransition: max-height 0.2s;  \r\n\tmax-height: 0;\r\n\tbackground: #fff;\r\n\tmin-width: 200px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n\toverflow: hidden;\r\n}\r\n.dropdown.is-active >ul{\r\n\tmax-height: 300px;\r\n\tborder: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.dropdown >ul >li>a{\r\n\tcolor: #555;\r\n\tdisplay: block;\r\n\tpadding: 5px;\r\n}\r\n.dropdown >ul >li>a:hover{\r\n\tbackground: rgba(0,0,0,0.15)\r\n}\r\n.dropdown>span{\r\n\tdisplay: block;\r\n\tpadding: 3px 10px;\r\n\tfont-size: 13px;\r\n}\r\n.dropdown>span:after{\r\n\tcontent: \"\\F0D7\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-left: 20px;\r\n\tdisplay: inline-block;\r\n\ttransition: -webkit-transform 0.2s;\r\n\ttransition: transform 0.2s;\r\n\ttransition:transform 0.2s, -webkit-transform 0.2s;\r\n}\r\n.dropdown{\r\n\tcursor: pointer;\r\n}\r\n.dropdown.is-active >span:after{\r\n\t-webkit-transform:rotate(180deg);\r\n\t        transform:rotate(180deg);\r\n}\r\n.slider-for{\r\n\tmax-width: 80%;\r\n\tmargin: 0 auto;\r\n}\r\n.slider-nav{\r\n\tmax-width: 100%;\r\n\tposition: relative;\r\n}\r\n/*********PAGE PRODUCT DETAIL**************/\r\n.product-detail .product-detail__price{\r\n\tfont-size: 30px;\r\n}\r\n.product-detail .product-detail__number{\r\n\tborder-bottom: 1px solid #000;\r\n\tdisplay: table;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.product-detail  .product-detail__number span:not(.number){\r\n\topacity: 0.7;\r\n\tcursor: pointer;\r\n}\r\n.product-detail  .product-detail__number span:not(.number):hover{\r\n\topacity: 1;\r\n}\r\n.product-detail .product-detail__number span.number{\r\n\tmargin: 0 20px;\r\n}\r\n.product-detail .add-to-cart{\r\n\tbackground: #5c4543;\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    padding: 5px 15px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.product-detail .add-to-cart:hover{\r\n\tbackground: #3f3530;\r\n}\r\n.product-detail .add-to-cart:before{\r\n\tcontent: \"\\F290\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-right: 10px;\r\n}\r\n.page__cart table{\r\n\twidth: 100%;\r\n}\r\n.page__cart tr{\r\n\tborder-bottom: 1px solid #eee;\r\n\tmin-height: 50px;\r\n}\r\n.page__cart th,.page__cart td{\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n}\r\n.page__cart td img{\r\n\tmax-width: 100px;\r\n}\r\n.page__cart td input[type=\"number\"]{\r\n\twidth: 80px;\r\n\tborder:1px solid #ccc;\r\n\tpadding: 5px 10px;\r\n}\r\n.page__cart >a{\r\n    border-radius: 3px;\r\n    padding: 7px 10px;\r\n    font-size: 14px;\r\n    float: right;\r\n}\r\n.text-left{\r\n\ttext-align: left;\r\n}\r\n.text-right{\r\n\ttext-align: right;\r\n}\r\n.cart-total{\r\n\tfont-size: 20px;\r\n\tmargin-top: 20px;\r\n}\r\na.btn--primary:hover{\r\n\tcolor: #dc8068;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #dc8068; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"breakcrumb\">\n\t\t\t\t<ul class=\"flex_center\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Trang chủ</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Giỏ hàng</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"page__content page__cart\">\n        <div *ngIf=\"cartService.countCart()>0;else elseBlock \">\n          <table>\n            <tr>\n              <th colspan=\"2\">Thông tin sản phẩm</th>\n              <th>Giá</th>\n              <th>Số lượng</th>\n              <th>Thành tiền</th>\n            </tr>\n            <tr *ngFor=\"let item of cartService.cart\">\n              <td><img src=\"assets/images/p1.jpg\"></td>\n              <td class=\"text-left\">\n                <h6>{{item.product.name}}</h6>\n                <p class=\"hover\" (click)=\"cartService.deleteCartItem(item.product.id)\">Xóa</p>\t\n              </td>\n              <td>{{item.product.price}} <sup>đ</sup></td>\n              <td><input type=\"number\" #quantity=\"ngModel\" name=\"quantity\" [(ngModel)]=\"item.quantity\" min=\"1\" (change)=\"cartService.changeNumberCart(item.product.id,quantity.value)\"></td>\n              <td>{{item.product.price*item.quantity}} <sup>đ</sup></td>\n            </tr>\n          </table>\n          <p class=\"cart-total text-right\">Tổng cộng: <span>{{cartService.totalCart()}}</span><sup>đ</sup></p>\n          <a class=\"btn--primary\" routerLink=\"/checkout\"><i class=\"fa fa-money\"></i> THANH TOÁN</a>\n        </div>\n      </div>\n      <ng-template #elseBlock>\n        <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>\n        <a class=\"hover text--primary\" routerLink=\"/product\">Tiếp tục mua sắm</a>\n      </ng-template>\n\t\t</div>\n\t</div>\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cartItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = (function () {
    function CartItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    return CartItem;
}());



/***/ }),

/***/ "../../../../../src/app/child-routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildRecordRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");


var ChildRecordRoutes = [
    {
        path: 'product',
        children: [
            { path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__product_list_product_list_component__["a" /* ProductListComponent */] },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_0__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/data_product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data_product; });
var data_product = [
    { id: 1, name: 'Cà phê sáng tạo 8', price: 250000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p1.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 2, name: 'Bà phê sáng tạo 9', price: 280000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p2.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 3, name: 'Cà phê sáng tạo 10', price: 50000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p3.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 4, name: 'Aà phê LEGEND 1', price: 25000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p4.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 5, name: 'Dà phê LEGEND 2', price: 450000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p1.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 6, name: 'Aà phê LEGEND 3', price: 150000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p2.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 7, name: 'Là phê LEGEND 4', price: 250000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p3.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 8, name: 'Hà phê + hộp quà sáng tạo 8', price: 250000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p4.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 9, name: 'Oà phê + hộp quà sáng tạo 9', price: 250000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p1.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 10, name: 'Eà phê + hộp quà sáng tạo 10', price: 250000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p2.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 11, name: 'Fà phê + hộp quà LEGEND 6', price: 250000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p3.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 12, name: 'Và phê + hộp quà LEGEND 7', price: 250000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p4.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 13, name: 'Cà phê + hộp quà LEGEND 8', price: 250000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p1.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
    { id: 14, name: 'Aà phê + hộp quà LEGEND 9', price: 250000, detail: 'Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một sự cân bằng hoàn hảo giữa hương và vị.', weight: 250, thumbnail: 'p2.jpg', images: ['p1.jpg', 'p2.jpg', 'p3.jpg'] },
];


/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n\t<div class=\"footer-top\">\n\t\t<h2>Ghé thăm cửa hàng</h2>\n\t\t<p>Ngay hôm nay</p>\n\t\t<img src=\"assets/images/logo-cup.png\">\n\t\t<a href=\"\">VÀO SHOP CAFE</a>\n\t\t<ul> \n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/home\">TRANG CHỦ</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"/product\">THỰC ĐƠN</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"#\">THƯ VIỆN</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"#\">LIÊN HỆ</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"footer-bottom\">\n\t\t<div id=\"scrolltop\"><i class=\"fa fa-angle-up\"></i></div>\n\t\t© 2017 Bản quyền thuộc về Kiến Vàng. Cung cấp bởi Bizweb\n\t</div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/form/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-cup{\r\n\twidth: 100px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.form-information{\r\n\tpadding: 30px;\r\n}\r\nform input,form select,form textarea{\r\n\twidth: 100%;\r\n    display: block;\r\n    border-radius: 3px;\r\n    border: 1px solid #ccc;\r\n    color: #ccc;\r\n    margin-bottom: 15px;\r\n    padding: 7px;\r\n}\r\nform select{\r\n\tcolor: #888\r\n}\r\n.cart-information{\r\n\tbackground: #fafafa;\r\n    border-left: 1px solid #ddd;\r\n    padding: 30px;\r\n}\r\n.cart-information h5{\r\n\tmargin: -30px;\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n.cart-information table{\r\n\twidth: 100%;\r\n}\r\n.cart-information table tr td:last-child{\r\n\ttext-align: right;\r\n}\r\n.cart-information table img{\r\n\theight: 100%;\r\n}\r\n.cart-information table td.img div{\r\n\tborder: 1px solid #ccc;\r\n    border-radius: 2px;\r\n    background: #fff;\r\n    /* overflow: hidden; */\r\n    width: 60px;\r\n    height: 60px;\r\n    text-align: center;\r\n}\r\nbutton.btn--secondary{\r\n\tborder-radius: 3px;\r\n\tpadding: 5px 20px;\r\n}\r\nbutton.btn--secondary:hover{\r\n\tcolor: #5c4543;\r\n\tbackground: #fff;\r\n}\r\n.cart-information__btn{\r\n\tmargin-top: 20px;\r\n}\r\ntd>div{\r\n    position: relative;\r\n}\r\n.quantity{\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    background: #000;\r\n    color: #fff;\r\n    font-size: 11px;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    position: absolute;\r\n}\r\nbutton{\r\n\tcursor: pointer;\r\n}\r\n.information-more div.flex_between{\r\n\twidth: 100%;\r\n    border-radius: 3px;\r\n    border: 1px solid #ccc;\r\n    margin-bottom: 15px;\r\n    padding: 15px;\r\n    margin-top: 10px;\r\n}\r\n.wrap-table{\r\n    width: 100%;\r\n    max-height: 335px;\r\n    overflow: auto;\r\n}\r\ntable{\r\n    border-collapse: separate;\r\n    border-spacing: 0 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <form>\n        <div class=\"row\">\n            <div class=\"col-md-8 form-information\">\n                <img class=\"logo-cup\" src=\"assets/images/logo-cup.png\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4>Thông tin người mua hàng</h4>\n                        <form action=\"\">\n                            <input type=\"text\" name=\"customer-name\" placeholder=\"Họ tên\">\n                            <input type=\"email\" name=\"customer-email\" placeholder=\"Email\">\n                            <input type=\"text\" name=\"customer-phone\" placeholder=\"Điện thoại\">\n                            <input type=\"text\" name=\"customer-address\" placeholder=\"Địa chỉ\">  \n                            <select>\n                                <option>Chọn Tỉnh/TP</option>\n                                <option>TP Hồ Chí Minh</option>\n                                <option>Hà Nội</option>\n                                <option>Đà Nẵng</option>\n                            </select>    \n                            <select>\n                                <option>Chọn Quận/Huyện</option>\n                                <option>Bình Thạnh</option>\n                                <option>Bình Tân</option>\n                                <option>Bình Chánh</option>\n                            </select>\n                            <textarea rows=\"3\" placeholder=\"Ghi chú\"></textarea>\n                        </form>\n                    </div>\n                    <div class=\"col-md-6 information-more\">\n                        <h4>Thông tin người nhận hàng</h4>\n                        <form action=\"\">\n                            <input type=\"text\" name=\"customer-name\" placeholder=\"Họ tên\">\n                            <input type=\"text\" name=\"customer-phone\" placeholder=\"Điện thoại\">\n                            <input type=\"text\" name=\"customer-address\" placeholder=\"Địa chỉ\">  \n                            <select>\n                                <option>Chọn Tỉnh/TP</option>\n                                <option>TP Hồ Chí Minh</option>\n                                <option>Hà Nội</option>\n                                <option>Đà Nẵng</option>\n                            </select>    \n                            <select>\n                                <option>Chọn Quận/Huyện</option>\n                                <option>Bình Thạnh</option>\n                                <option>Bình Tân</option>\n                                <option>Bình Chánh</option>\n                            </select>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 cart-information\">\n                <h5>Đơn hàng({{cartService.countCart()}} sản phẩm)</h5>\n                <div class=\"wrap-table\">\n                    <table>\n                        <tr *ngFor=\"let item of cartService.cart\">\n                            <td class=\"img\">\n                                <div>\n                                    <img src=\"assets/images/p1.jpg\">\n                                    <span class=\"quantity\">{{item.quantity}}</span>\n                                </div>\n                            </td>\n                            <td>{{item.product.name}}</td>\n                            <td>{{item.product.price * item.quantity}} <sup>đ</sup></td>\n                        </tr>\n                    </table>\n                </div>\n                <hr>\n                <div class=\"flex_between\">\n                    <span>Tạm tính</span>\n                    <span>{{cartService.totalCart()}} <sup>đ</sup></span>\n                </div>\n                <div class=\"flex_between\">\n                    <span>Phí vận chuyển</span>\n                    <div><span #ship>40000</span><sup>đ</sup></div>\n                </div>\n                <hr>\n                <div class=\"flex_between\">\n                    <span>Tổng cộng</span>\n                    <span>{{ship.innerText*1 + cartService.totalCart()}}<sup>đ</sup></span>\n                </div>\n                <div class=\"flex_between cart-information__btn\">\n                    <a class=\"text--secondary\" href=\"cart.php\">< Quay về giỏ hàng</a>\n                    <button class=\"btn--secondary\">Đặt hàng</button>    \n                </div>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/form/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__get_http_service__ = __webpack_require__("../../../../../src/app/form/checkout/get-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutComponent = (function () {
    function CheckoutComponent(cartService, formService, getHttp) {
        this.cartService = cartService;
        this.formService = formService;
        this.getHttp = getHttp;
        this.getHttp.getCity();
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__("../../../../../src/app/form/checkout/checkout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_2__form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_3__get_http_service__["a" /* GetHttpService */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/form/checkout/get-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Headers, Http, Response } from "@angular/http";

var GetHttpService = (function () {
    function GetHttpService(http) {
        this.http = http;
        this.url = "https://thongtindoanhnghiep.co/api/city";
    }
    GetHttpService.prototype.getCity = function () {
        this.http.get(this.url).subscribe(function (data) {
            console.log(data);
        });
        // data.subscribe((x)=>{
        //  console.log(x) 
        // })
    };
    GetHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GetHttpService);
    return GetHttpService;
}());



/***/ }),

/***/ "../../../../../src/app/form/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div class=\"container\">\n      <div class=\"row page__content\">\n        <div class=\"col-md-8\">\n            <h4>Lịch sử đơn hàng</h4>\n            <pre>\n              {{user | json}}\n            </pre>\n        </div>\n        <div class=\"col-md-4\">\n          <h4 class=\"text-center\">Thông tin tài khoản</h4>\n          <h6 class=\"text--primary text-center\" *ngIf=\"update\">(Cập nhật thành công)</h6>\n          <form #editForm=\"ngForm\" (ngSubmit)=\"edit(editForm)\">\n            <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"user.id\">\n            <div class=\"form-group\">\n              <div class=\"row\">\n                  <label class=\"col-md-3\" for=\"\">Họ tên</label>\n                  <div class=\"col-md-9 error\" [hidden]=\"full_name.valid || full_name.pristine\"> \n                    <span *ngIf=\"full_name.hasError('required')\">Bạn chưa nhập mật khẩu</span>   \n                  </div>\n              </div>\n              <input type=\"text\" #full_name=\"ngModel\" name=\"full_name\" [(ngModel)]=\"user.full_name\" required=\"required\">\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                  <label class=\"col-md-3\" for=\"\">Email</label>\n                  <div class=\"col-md-9 error\" [hidden]=\"email.valid || email.pristine\">\n                      <span *ngIf=\"email.hasError('required')\">Bạn chưa nhập email</span>\n                      <span *ngIf=\"email.hasError('pattern')\">Email không hợp lệ</span>\n                      <span *ngIf=\"email.hasError('isset_email')\">Tài khoản này đã tồn tại</span>\n                  </div>\n              </div>\n              <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"user.email\" name=\"email\" required=\"required\" pattern=\"^[A-Za-z0-9-_#$%+*()/^]+@\\w{3,6}.\\w{3,3}(.\\w{2,5})?$\">\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <label class=\"col-md-3\" for=\"\">Mật khẩu</label>\n                    <div class=\"col-md-9 error\" [hidden]=\"password.valid || password.pristine\"> \n                      <span *ngIf=\"password.hasError('required')\">Bạn chưa nhập mật khẩu</span>   \n                      <span *ngIf=\"password.hasError('minlength')\">Mật khẩu phải có ít nhất 6 ký tự</span>\n                    </div>\n                </div>\n              <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" required=\"required\" [minlength]=\"6\">\n            </div>\n            <div class=\"form-group\">\n            <button class=\"bg--primary\" [disabled]=\"!editForm.valid\">CẬP NHẬT TÀI KHOẢN</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\t\n  </div>\n    \n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/form/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditUserComponent = (function () {
    function EditUserComponent(formService, location) {
        this.formService = formService;
        this.location = location;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */]();
        this.update = false;
        if (typeof localStorage.user == 'undefined') {
            //this.location.back(); 
        }
        else {
            this.user = JSON.parse(localStorage.user);
        }
    }
    EditUserComponent.prototype.ngOnInit = function () {
    };
    EditUserComponent.prototype.edit = function (editForm) {
        var err = this.formService.edit(this.user);
        if (err == undefined) {
            this.update = true;
        }
        else {
            this.update = false;
            editForm.form.controls.email.setErrors({ 'isset_email': true });
        }
    };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-user',
            template: __webpack_require__("../../../../../src/app/form/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form/form.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/form/form-menu/form-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"formService.user.id!='' else elseBlock\">\n  <p>Chào, {{formService.user.full_name | uppercase}}</p>\n  <ul>\n    <li routerLink=\"/editUser\">Chỉnh sửa tài khoản</li>\n    <li (click)=\"formService.signOut()\">Đăng xuất</li>\n  </ul>\n</div>\n<ng-template #elseBlock>\n    <form #formMenu=\"ngForm\">\n        <h6 class=\"text-center\">Đăng nhập</h6>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <label class=\"col-md-3\" for=\"\">Email</label>\n                <div class=\"col-md-9 error\" [hidden]=\"email.valid || email.pristine\">\n                    <span *ngIf=\"email.hasError('required')\">Bạn chưa nhập email</span>\n                    <span *ngIf=\"email.hasError('pattern')\">Email không hợp lệ</span>\n                    <span *ngIf=\"email.hasError('incorrect')\">Tài khoản này chưa đăng ký</span>\n                    <span *ngIf=\"email.hasError('isset_email')\">Tài khoản này đã tồn tại</span>\n                </div>\n            </div>\n            <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"user.email\" name=\"email\" required=\"required\" pattern=\"^[A-Za-z0-9-_#$%+*()/^]+@\\w{3,6}.\\w{3,3}(.\\w{2,5})?$\">\n        </div>\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <label class=\"col-md-4\" for=\"\">Mật khẩu</label>\n                <div class=\"col-md-8 error\" [hidden]=\"password.valid || password.pristine\"> \n                    <span *ngIf=\"password.hasError('required')\">Bạn chưa nhập mật khẩu</span>   \n                    <span *ngIf=\"password.hasError('minlength')\">Mật khẩu phải có ít nhất 6 ký tự</span>\n                    <span *ngIf=\"password.hasError('incorrect')\">Password sai</span>\n                </div>\n            </div>\n            <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" required=\"required\" [minlength]=\"6\">\n        </div>    \n        <div>\n            <button (click)=\"signIn(formMenu)\">Đăng nhập</button>\n            <button (click)=\"register(formMenu)\">Đăng ký</button>\n        </div>\n    </form>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/form/form-menu/form-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormMenuComponent = (function () {
    function FormMenuComponent(formService, router) {
        this.formService = formService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* User */]();
    }
    FormMenuComponent.prototype.ngOnInit = function () {
    };
    FormMenuComponent.prototype.signIn = function (signInForm) {
        if (signInForm.value.email == '') {
            this.router.navigate(["/signIn"]);
        }
        else {
            var err = this.formService.checkAcount(this.user);
            console.log('menu ' + err);
            switch (err) {
                case 'email':
                    signInForm.form.controls.email.setErrors({ 'incorrect': true });
                    break;
                case 'password':
                    signInForm.form.controls.password.setErrors({ 'incorrect': true });
                    break;
                case undefined:
                    this.router.navigate(["/signIn"]);
                    break;
            }
        }
    };
    FormMenuComponent.prototype.register = function (registerForm) {
        if (registerForm.value.email == '') {
            this.router.navigate(["/register"]);
        }
        else {
            var err = this.formService.register(this.user);
            console.log(err);
            if (err != undefined) {
                registerForm.form.controls.email.setErrors({ isset_email: true });
            }
            else {
                this.router.navigate(["/register"]);
            }
        }
    };
    FormMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-menu',
            template: __webpack_require__("../../../../../src/app/form/form-menu/form-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form/form.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], FormMenuComponent);
    return FormMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/form/form.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg--primary{\r\n    background: #dc8068;\r\n}\r\nh2{\r\n    font-size: 28px;\r\n    margin: 10px 0;\r\n}\r\nlabel{\r\n    font-size: 15px;\r\n}\r\n.error{\r\n    text-align: right\r\n}\r\n.page{\r\n\tborder-top: 85px solid rgba(54,46,41,1);\r\n\tpadding: 30px;\r\n}\r\nform{\r\n    width: 100%;\r\n    margin: 20px auto 0;\r\n}\r\n.form-group >input{\r\n    width: 100%;\r\n    padding: 5px 15px;\r\n    outline: none;\r\n}\r\n.form-group >input.ng-invalid{\r\n    border: 1px solid #999;\r\n}\r\n.form-group >input.ng-pristine{\r\n    border: 1px solid #eee;\r\n}\r\n\r\n\r\n/* .form-group> button:not([disable]){\r\n    background:#dc8068;\r\n} */\r\n.form-group> button:focus{\r\n    outline: none;\r\n}\r\n.form-group> button {\r\n    border: none;\r\n    border-radius: 5px;\r\n    display: block;\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 10px;\r\n    color: #fff;\r\n    border: 1px solid #dc8068;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n    opacity: 0.8;\r\n}\r\n.form-group> button:not([disabled]){\r\n    opacity: 1;\r\n}\r\n.form-group> button:not([disabled]):hover{\r\n    color: #dc8068;\r\n    background: #fff;\r\n}\r\n.form-group .error{\r\n    color: #f00;\r\n}\r\n.text--default{\r\n    color: #333;\r\n}\r\n.hover{\r\n    cursor: pointer\r\n}\r\n.text--default.hover:hover{\r\n    color: #dc8068;\r\n}\r\n.text--primary{\r\n    color: #dc8068;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_model_user__ = __webpack_require__("../../../../../src/app/model/model-user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormService = (function () {
    function FormService(location, http) {
        this.location = location;
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_user__["a" /* User */]();
        this.show_form = true;
        if (typeof localStorage.user != 'undefined') {
            this.user = JSON.parse(localStorage.user);
            this.show_form = false;
        }
    }
    FormService.prototype.checkLogin = function () {
        if (typeof localStorage.user != 'undefined') {
            return true;
        }
        return false;
    };
    FormService.prototype.checkAcount = function (user) {
        for (var i in __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */]) {
            var item = __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */][i];
            if (item.email == user.email) {
                if (item.password != user.password) {
                    return 'password';
                }
                else {
                    this.user = __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */][i];
                    localStorage.user = JSON.stringify(__WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */][i]);
                    //tat an form trong trang dang nhap
                    this.show_form = false;
                }
                break;
            }
            else {
                if (Number(i) == __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */].length - 1) {
                    return 'email';
                }
            }
        }
    };
    FormService.prototype.checkEmail = function (email, id) {
        if (id === void 0) { id = undefined; }
        //kiem tra da ton tai email 
        var index = -1;
        for (var i in __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */]) {
            if (id == __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */][i].id) {
                continue;
            }
            if (__WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */][i].email == email) {
                index = Number(i);
                break;
            }
        }
        return index;
    };
    FormService.prototype.edit = function (user) {
        for (var i in __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */]) {
            var item = __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */][i];
            if (item.id == user.id) {
                var result_check = this.checkEmail(user.email, user.id);
                if (result_check != -1) {
                    return 'Email đã tồn tại';
                }
                else {
                    // Cập nhật data array user
                    __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */][i] = user;
                    //gán lại cho service.user
                    this.user = Object.assign({}, user);
                    //luu session
                    localStorage.user = JSON.stringify(this.user);
                }
                break;
            }
        }
    };
    FormService.prototype.register = function (user) {
        if (this.checkEmail(user.email) != -1) {
            return 'Email này đã tồn tại';
        }
        else {
            user.id = (Number(__WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */][__WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */].length - 1].id) + 1).toString();
            __WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */][__WEBPACK_IMPORTED_MODULE_4__model_model_user__["a" /* Array_user */].length] = user;
            //gán lại cho service.user
            this.user = user;
            //luu session
            localStorage.user = JSON.stringify(this.user);
            //tat an form trong trang dang ky
            this.show_form = false;
        }
    };
    FormService.prototype.signOut = function () {
        console.log('sign out');
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_user__["a" /* User */]();
        localStorage.removeItem('user');
        //tat an form trong trang dang nhap
        this.show_form = true;
        //quay ve trang cũ
        this.location.back();
    };
    FormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "../../../../../src/app/form/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div class=\"container\">\n      <!-- Hiện khi chưa đăng ký -->\n      <div class=\"row page__content\" [hidden]=\"!formService.show_form\">\n          <div class=\"col-md-12 text-center\">\n              <h2>ĐĂNG Ký</h2>\n              <div>\n                Nếu bạn chưa có tài khoản hãy đăng ký dưới đây\n              </div>\n          </div>\n          <form #registerForm=\"ngForm\" (ngSubmit)=\"register(registerForm)\">\n            <div class=\"col-md-4 offset-md-4 form-group\">\n              <div class=\"row\">\n                  <label class=\"col-md-3\" for=\"\">Họ tên</label>\n                  <div class=\"col-md-9 error\" [hidden]=\"full_name.valid || full_name.pristine\"> \n                    <span *ngIf=\"full_name.hasError('required')\">Bạn chưa nhập mật khẩu</span>   \n                  </div>\n              </div>\n              <input type=\"text\" #full_name=\"ngModel\" name=\"full_name\" [(ngModel)]=\"user.full_name\" required=\"required\">\n            </div>\n            <div class=\"col-md-4 offset-md-4 form-group\">\n              <div class=\"row\">\n                  <label class=\"col-md-3\" for=\"\">Email</label>\n                  <div class=\"col-md-9 error\" [hidden]=\"email.valid || email.pristine\">\n                      <span *ngIf=\"email.hasError('required')\">Bạn chưa nhập email</span>\n                      <span *ngIf=\"email.hasError('pattern')\">Email không hợp lệ</span>\n                      <span *ngIf=\"email.hasError('isset_email')\">Tài khoản này đã tồn tại</span>\n                  </div>\n              </div>\n              <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"user.email\" name=\"email\" required=\"required\" pattern=\"^[A-Za-z0-9-_#$%+*()/^]+@\\w{3,6}.\\w{3,3}(.\\w{2,5})?$\">\n            </div>\n            <div class=\"col-md-4 offset-md-4 form-group\">\n                <div class=\"row\">\n                    <label class=\"col-md-3\" for=\"\">Mật khẩu</label>\n                    <div class=\"col-md-9 error\" [hidden]=\"password.valid || password.pristine\"> \n                      <span *ngIf=\"password.hasError('required')\">Bạn chưa nhập mật khẩu</span>   \n                      <span *ngIf=\"password.hasError('minlength')\">Mật khẩu phải có ít nhất 6 ký tự</span>\n                    </div>\n                </div>\n              <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" required=\"required\" [minlength]=\"6\">\n            </div>\n            <div class=\"col-md-4 offset-md-4 form-group\">\n              <button [disabled]=\"!registerForm.valid\" class=\"bg--primary\">TẠO TÀI KHOẢN</button>\n            </div>\n          </form>\n          <div class=\"col-md-12 text-center\">\n            <p class=\"text--default hover\">Trở về</p>\n          </div>\n      </div>\n      <!-- Hiện khi đã đăng ký -->\n      <div class=\"row page__content\" [hidden]=\"formService.show_form\">\n        <div class=\"col-md-12\"><h5>Chào, {{formService.user.full_name}}</h5></div>\n        <div class=\"col-md-12\"><h2>Chúc mừng bạn đã đăng ký thành công</h2>\n          <a class=\"text--primary hover\" routerLink=\"/editUser\">=> Cập nhật tài khoản của bạn</a>\n        </div>\n        \n      </div>\n    </div>\t\n</div>\n    \n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/form/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(formService) {
        this.formService = formService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (registerForm) {
        var err = this.formService.register(this.user);
        if (err != undefined) {
            registerForm.form.controls.email.setErrors({ isset_email: true });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/form/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form/form.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/form/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<div class=\"container\">\n    <!-- Hiện khi chưa đăng nhập -->\n\t\t<div class=\"row page__content\" [hidden]=\"!formService.show_form\">\n        <h2 class=\"text-center col-md-12\">ĐĂNG NHẬP</h2>\n\t\t\t\t<form #signInForm=\"ngForm\" (ngSubmit)=\"signIn(signInForm)\">\n          <div class=\"col-md-4 offset-md-4 form-group\">\n            <div class=\"row\">\n                <label class=\"col-md-3\" for=\"\">Email</label>\n                <div class=\"col-md-9 error\" [hidden]=\"email.valid || email.pristine\">\n                    <span *ngIf=\"email.hasError('required')\">Bạn chưa nhập email</span>\n                    <span *ngIf=\"email.hasError('pattern')\">Email không hợp lệ</span>\n                    <span *ngIf=\"email.hasError('incorrect')\">Tài khoản này chưa đăng ký</span>\n                </div>\n            </div>\n            <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"user.email\" name=\"email\" required=\"required\" pattern=\"^[A-Za-z0-9-_#$%+*()/^]+@\\w{3,6}.\\w{3,3}(.\\w{2,5})?$\">\n          </div>\n          <div class=\"col-md-4 offset-md-4 form-group\">\n              <div class=\"row\">\n                  <label class=\"col-md-3\" for=\"\">Mật khẩu</label>\n                  <div class=\"col-md-9 error\" [hidden]=\"password.valid || password.pristine\"> \n                    <span *ngIf=\"password.hasError('required')\">Bạn chưa nhập mật khẩu</span>   \n                    <span *ngIf=\"password.hasError('minlength')\">Mật khẩu phải có ít nhất 6 ký tự</span>\n                    <span *ngIf=\"password.hasError('incorrect')\">Password sai</span>\n                  </div>\n              </div>\n            <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" required=\"required\" [minlength]=\"6\">\n          </div>\n          <div class=\"col-md-4 offset-md-4 form-group\">\n          <button [disabled]=\"!signInForm.valid\" class=\"bg--primary\">ĐĂNG NHẬP</button>\n          </div>\n        </form>\n        <div class=\"col-md-12 text-center\">\n          <p class=\"text--default hover\" (click)=\"goback()\">Trở về</p>\n        </div>\n    </div> \n    <!-- Hiện khi đã đăng nhập -->\n    <div class=\"row page__content\" [hidden]=\"formService.show_form\">\n      <div class=\"col-md-12\">\n          <h5>Chào, {{formService.user.full_name}}</h5>\n      </div>\n      <div class=\"col-md-12\">\n        <h2>Đăng nhập thành công</h2>\n      </div>\n    </div>\n\t</div>\t\n</div>\n\t\n\n\n "

/***/ }),

/***/ "../../../../../src/app/form/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = (function () {
    function SignInComponent(formService, router, location) {
        this.formService = formService;
        this.router = router;
        this.location = location;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */]();
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent.prototype.signIn = function (signInForm) {
        var err = this.formService.checkAcount(this.user);
        switch (err) {
            case 'email':
                signInForm.form.controls.email.setErrors({ 'incorrect': true });
                break;
            case 'password':
                signInForm.form.controls.password.setErrors({ 'incorrect': true });
                break;
        }
    };
    SignInComponent.prototype.goback = function () {
        this.location.back();
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("../../../../../src/app/form/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form/form.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"header-top\">\n        <div class=\"container\">\n            <div class=\"row flex_center\">\n                <div class=\"col-md-9 header-top__left flex_center\">\n                    <a class=\"logo-main\" routerLink=\"/home\"><img src=\"../assets/images/logo-main.png\"></a>\n                    <ul>\n                        <li> \n                            <a routerLinkActive=\"is-active\" routerLink=\"/home\">Trang chủ</a>\n                        </li>\n                        <li>\n                            <a routerLinkActive=\"is-active\" routerLink=\"/introduce\">Giới thiệu</a>\n                        </li>\n                        <li>\n                            <a routerLinkActive=\"is-active\" routerLink=\"/news\">Tin tức</a>\n                        </li>\n                        <li>\n                            <!-- [routerLinkActiveOptions]=\"{exact: true}\" them vao neu muon duong link chinh xac moi actve -->\n                            <a routerLinkActive=\"is-active\" routerLink=\"/product\">Cửa hàng</a>\n                            <ul>\n                                <li>\n                                    <a href=\"#\">Thực đơn cafe</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li>\n                            <a href=\"contact.php\">Liên hệ</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-md-3 header-top__right\">\n                    <ul class=\"flex_center\">\n                        <li>\n                            <a href=\"cart.php\">\n                                <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"><span id=\"cart_number\">{{cartService.countCart()}}</span></i>\n                            </a>\n                            <div *ngIf=\"cartService.getCart().length>0 else elseBlock\" class=\"show-cart\" id=\"target_cart\">\n                                <ul>\n                                    <li *ngFor=\"let cartItem of cartService.getCart()\">\n                                        <img src=\"../assets/images/{{cartItem.product.thumbnail}}\">\n                                        <div>\n                                            <h6>{{cartItem.product.name}}</h6>\n                                            <p><span>{{ultilService.formatNumber(cartItem.product.price)}}</span><sup>đ</sup></p>\n                                            <span>Số lượng: {{cartItem.quantity}}</span>\n                                        </div> \n                                        <span (click)=\"cartService.deleteCartItem(cartItem.product.id)\">Xóa</span> \n                                    </li> \n                                </ul>\n                                <p>Tổng tiền: <span>{{ultilService.formatNumber(cartService.totalCart())}}</span><sup>đ</sup></p>\n                                <div class=\"flex_between\">\n                                    <a class=\"btn--primary\" routerLink=\"/cart\">GIỎ HÀNG</a>\n                                    <a class=\"btn--secondary\" routerLink=\"/checkout\">THANH TOÁN</a>  \n                                </div>\n                            </div>\n                            <ng-template #elseBlock><div class=\"show-cart\">Không có sản phẩm trong giỏ hàng</div></ng-template>\n                            <div *ngIf=\"cartService.dialog !=null\" class=\"dialog-box is-active\" id=\"target\">\n                                <img src=\"../assets/images/{{cartService.dialog.thumbnail}}\">\n                                <div>\n                                    <p>SẢN PHẨM ĐÃ CHO VÀO GIỎ HÀNG</p>\n                                    <span>{{cartService.dialog.name}}</span>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"#\" data-target=\"#mySearch\" data-toggle=\"modal\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a>\n                            \n                        </li>\n                        <li>\n                            <a href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n                            <div>\n                                <app-form-menu></app-form-menu>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"#\"><i class=\"fa fa-long-arrow-up\" aria-hidden=\"true\"></i>ĐẶT BÀN</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</header> \n<div id=\"mySearch\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"flex_between\">\n        <h4>NHẬP TỪ KHÓA TÌM KIẾM</h4>\n        <div class=\"btn-close\" data-dismiss=\"modal\">X</div>    \n      </div>\n      <app-form-search [page]=\"'menu'\"></app-form-search>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ultil_service__ = __webpack_require__("../../../../../src/app/ultil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(cartService, ultilService, route, location) {
        this.cartService = cartService;
        this.ultilService = ultilService;
        this.route = route;
        this.location = location;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.delete = function () {
        console.log('delete header');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_2__ultil_service__["a" /* UltilService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- <div>\n    \t<img src=\"../assets/images/slider-01.jpg\">\n    </div> -->\n    <div id=\"slider\">\n        <div class=\"item-img\" *ngFor=\"let item of slider_data\" [@slider]=\"item.state\">\n          <img src=\"{{item.img}}\" alt=\"\">\n        </div>\n    </div>      \n    <!-- menu -->\n    <section class=\"menu\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"logo center\"><img src=\"../assets/images/coffees.svg\"></div>\n            </div>\n            <div class=\"row section__title\">\n                <div class=\"container animated\" data-animate=\"fadeinup\">\n                    <div class=\"heading center\"><span>COFFE VÀ TÔI</span></div>\n                    <h2 class=\"center\">Menu</h2>\n                </div>\n            </div>\n            <div class=\"table\">\n                <div class=\"table__left\">\n                    <img src=\"../assets/images/index_special_morning.png\">\n                    <div>\n                        <h4>Thức uống đặc biệt</h4>\n                        <span>Cafe không phải là thú thanh thản như trà, càng không mạnh mẽ bạo liệt như rượu</span>\n                    </div>\n                </div>\n                <div class=\"table__right\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">1/Cafe <span>sáng tạo 8</span></a>\n                            <span>Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là...</span>\n                            <div class=\"price\">130.000 <sup>đ</sup></div>\n                        </li>\n                        <li>\n                            <a href=\"#\">2/Cafe <span>sáng tạo 8</span></a>\n                            <span>Từ những hạt cà phê Arabica, Robusta, Excelsa. Có hương thơm đầm, thơm rất lâu với hậu vị đậm và êm. Là một...</span>\n                            <div class=\"price\">130.000 <sup>đ</sup></div>\n                        </li>\n                        <li>\n                            <a href=\"#\">3/Cafe <span>LEGEND</span></a>\n                            <span>LEGEND là cà phê chồn được sản xuất bằng phương pháp \"Lên men sinh học\", sản phẩm chỉ có duy nhất ở Trung Nguyên....</span>\n                            <div class=\"price\">130.000 <sup>đ</sup></div>\n                        </li>\n                        <li>\n                            <a href=\"#\">4/Hộp quà <span>LEGEND</span></a>\n                            <span>Trong mỗi hộp quà LEGEND gồm có: - Cà phê Legend 225 gram - Phin cà phê mang hình các danh nhân nổi..</span>\n                            <div class=\"price\">130.000 <sup>đ</sup></div>\n                        </li>\n                        \n                    </ul>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section>\n        <div class=\"container\">\n            <div class=\"bg_ship\">\n                <img src=\"../assets/images/takeaway.png\">\n                <div>\n                    <h4>Gọi điện giao hàng tận nơi</h4>\n                    <i class=\"fa fa-volume-control-phone\"></i> 090 777 8678\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"introduce\">\n        <div class=\"left animated\" data-animate=\"show\" data-delay=\"0\" data-offset=\"200\">\n            <img class=\"cup\" src=\"../assets/images/pour-cup.png\">\n            <div class=\"pour\">\n                <img src=\"../assets/images/milk-pour2.png\">    \n            </div>\n            <img class=\"drop\" src=\"../assets/images/milk-drops.png\">\n        </div>\n        <div class=\"right\">\n            <h4>\"COFFEE AND YOU\"</h4>\n            <h4>CỬA HÀNG CÀ PHÊ PREMIUM</h4>\n            <div>Cà phê không phải là thú thanh thản như trà, càng không mạnh mẽ bạo liệt như rượu. Người thưởng thức nhẹ nhàng cho rằng cà phê là gạch nối giữa niềm vui và nỗi buồn. Với ai đang muộn phiền, cà phê càng day dứt như một bản nhạc có nhiều dấu lặng. Còn những kẻ môn đồ của giáo phái cà phê thì cho đó là người đàn bà mang bùa ngải trong mình...</div>\n            <a href=\"\">Tìm hiểu thêm</a>\n        </div>\n    </section>\n    <section>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"logo center\"><img src=\"../assets/images/coffees.svg\"></div>\n            </div>\n            <div class=\"row section__title\">\n                <div class=\"container animated\" data-animate=\"fadeinup\">\n                    <div class=\"heading center\"><span>CỬA HÀNG</span></div>\n                    <h2 class=\"center\">Cafe</h2>\n                </div> \n            </div>\n            <app-product-item [product_list]=\"product_list\"></app-product-item>\n        </div>\n    </section>\n    <!-- mã vạch -->\n    <section class=\"qr\">\n        <div class=\"container flex_between flex_center\">\n            <div class=\"qr-text flex_center\">\n                <img src=\"../assets/images/percent-off.png\">\n                <div>\n                    <p>Trên tất cả các hương vị</p>\n                    <h4>CHỈ THỨ SÁU</h4>\n                    <p>Coupon chỉ có giá trị vào ngày thứ Sáu từ 1/11 - 30/12/2016</p>\n                </div>    \n            </div>\n            <div class=\"qr-code\">\n                <div>\n                    <img src=\"../assets/images/qr-code.jpg\">\n                    <p>COFFEE AND YOU</p>\n                </div>\n            </div>    \n        </div>\n    </section>\n    <!-- order -->\n    <section class=\"order\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"logo center\"><img src=\"../assets/images/coffees.svg\"></div>\n            </div>\n            <div class=\"row section__title\">\n                <div class=\"container animated\" data-animate=\"fadeinup\">\n                    <div class=\"heading center\"><span>ĐẶT BÀN</span></div>\n                    <h2 class=\"center\">TRỰC TUYẾN</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 order_content flex_center animated\" data-animate=\"fadeinup\" data-delay=\"1\">\n                    <img src=\"../assets/images/book-table-img.jpg\">\n                    <div>\n                        <h4>Điền thông tin đặt bàn</h4>\n                        <form>\n                            <div class=\"person\">\n                                <label for=\"person\">Số người</label>\n                                <div>\n                                    <span>Chọn</span>\n                                    <ul>\n                                        <li>\n                                            2 người\n                                        </li>\n                                        <li>\n                                            3 người\n                                        </li>\n                                        <li>\n                                            10 người\n                                        </li>\n                                    </ul>\n                                </div>\n                                <input type=\"text\" name=\"\" id=\"person\">    \n                            </div>\n                            <div class=\"date\">\n                                <label>Ngày đặt</label>\n                                <div><input type=\"text\" placeholder=\"Chọn ngày\" value=\"\" class=\"form_datetime\"></div>\n                            </div>               \n                            <div class=\"customer flex_center flex_between\">\n                                <div>\n                                    <label>Họ tên</label>\n                                    <input type=\"text\" name=\"\" placeholder=\"Họ tên khách hàng\">\n                                </div>\n                                <div>\n                                    <label>Số điện thoại</label>\n                                    <input type=\"number\" name=\"\" placeholder=\"Số điện thoại\">\n                                </div>\n                            </div>   \n                            <div>\n                                <label>Ghi chú</label>\n                                <textarea rows=\"4\" placeholder=\"Ghi chú của khách hàng\"></textarea>\n                            </div>          \n                            <button>Đặt bàn</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"cmt\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"logo center\"><img src=\"../assets/images/coffees.svg\"></div>\n            </div>\n            <div class=\"row section__title\">\n                <div class=\"container animated\" data-animate=\"fadeinup\">\n                    <div class=\"heading center\"><span>CẢM NHẬN</span></div>\n                    <h2 class=\"center\">KHÁCH HÀNG</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div id=\"cmt-items\">\n                    <div class=\"cmt-items\">\n                        <img src=\"../assets/images/member1.jpg\">\n                        <div>\n                            <h3>Nguyễn Thảo Mai</h3>\n                            <p>Phục vụ ly cà phê Truyền Thống và Mang Đi hoàn hảo, mọi lúc mọi nơi, chúng tôi là dân văn phòng, đã quen và nghiện ly cà phê của Coffee And You. Xin cảm ơn cho trải nghiệm cà phê lạ, độc đáo này</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"contact\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"logo center\"><img src=\"../assets/images/coffees.svg\"></div>\n            </div>\n            <div class=\"row section__title\">\n                <div class=\"container animated\" data-animate=\"fadeinup\">\n                    <div class=\"heading center\"><span>LIÊN HỆ</span></div>\n                    <h2 class=\"center\">CỬA HÀNG</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"row\">\n                <div class=\"col-md-6 address\">\n                    <h1><img src=\"../assets/images/contact-img.png\">COFFE VÀ BẠN</h1>\n                    <p>70 LỮ GIA</p>\n                    <span>PHƯỜNG 1, QUẬN 11, TPHCM</span>\n                </div>\n                <div class=\"col-md-6\">\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5194898815907!2d106.6559000143504!3d10.7714671923249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec18e8d2c03%3A0x67495af602943e42!2zxJBoIELDoWNoIEtob2EgVHAgSGNt!5e0!3m2!1sen!2sin!4v1506691968420\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                </div>\n            </div>\n        </div>\n    </section>\n    \n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(ProductsService) {
        this.ProductsService = ProductsService;
        this.slider_data = [
            {
                img: 'https://porchco.com/wp-content/uploads/2014/02/bed-swing-banner-1200x400.jpg',
                state: 'normal',
            },
            {
                img: 'http://www.pwbeck.com.au/blog/wp-content/uploads/2014/08/RP-Banner-1200-x-400px.jpg',
                state: 'normal',
            },
            {
                img: 'http://www.popeselectrical.com.au/wp-content/uploads/2015/07/AUG_DEAL_FULL-WIDTH-BANNER-1200x400.jpg',
                state: 'normal',
            },
            {
                img: 'http://rotherwood-recruitment.com/wp-content/uploads/sm-banner-1200x400.jpg',
                state: 'normal',
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initAnimation();
        this.getProductList();
        var self = this;
        setTimeout(function () {
            self.slider();
        }, 0);
    };
    HomeComponent.prototype.getProductList = function () {
        var _this = this;
        this.ProductsService.getProductList().subscribe(function (list) { return _this.product_list = list.slice(0, 4); });
    };
    HomeComponent.prototype.initAnimation = function () {
        // chay hieu ung cho comment
        $('#cmt-items').slick({
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
        // chay hieu ung truot len khi xuat hien
        $(".animated").callanimation();
        // show picker chon ngay thang
        $(document).ready(function () {
            setTimeout(function () { window.scrollTo(0, 0); }, 0);
            $(".form_datetime").datetimepicker();
        });
    };
    HomeComponent.prototype.slider = function () {
        var self = this;
        var time_animate = 500;
        $(document).ready(function () {
            var length = $(".item-img").length - 1;
            //Tao wrap cho slider,set height cho no
            $("#slider").wrapInner("<div class='wrap-slider'></div>");
            var wrap_slider_height = $(".item-img").outerHeight();
            $(".wrap-slider").css('height', wrap_slider_height + 'px');
            //Tao navigation
            $("#slider").append("<ul class='navigation'></ul>");
            for (var li = 0; li <= length; li++) {
                $("#slider .navigation").append("<li></li");
            }
            //Tao nut pre,next
            $("#slider").append("<div class='button'><span id='pre'><</span><span id='next'>></span></div>");
            //Code cho phan run slider
            var active = 0;
            $("#slider .item-img:eq(" + active + ")").css('z-index', 1);
            $("#slider li:eq(" + active + ")").addClass("active");
            var run = setTime();
            function setTime() {
                return setInterval(function () {
                    setActive(active, checkAsc(active));
                }, 4000);
            }
            $("#pre").click(function () {
                clearInterval(run);
                setActive(active, checkDsc(active));
                setTimeout(function () {
                    run = setTime();
                }, time_animate);
            });
            $("#next").click(function () {
                clearInterval(run);
                setActive(active, checkAsc(active));
                setTimeout(function () {
                    run = setTime();
                }, time_animate);
            });
            $("li").click(function () {
                var item = $(this).index();
                clearInterval(run);
                setActive(active, item);
                setTimeout(function () {
                    run = setTime();
                }, time_animate);
            });
            function setActive(x, func) {
                $("#slider .item-img:eq(" + x + ")").css('z-index', 1);
                $("#slider .item-img:eq(" + x + ")").siblings().css('z-index', -1);
                $("#slider .item-img:eq(" + func + ")").css('z-index', 0);
                var animate = ['scale', 'translateY', 'translateX', 'fade'];
                self.slider_data[x].state = animate[x];
                //$("#slider .item-img:eq("+x+")").addClass("scale-rotate");
                active = func;
                $("#slider li:eq(" + active + ")").siblings().removeClass("active");
                $("#slider li:eq(" + active + ")").addClass("active");
                setTimeout(function () {
                    $("#slider .item-img:eq(" + x + ")").css('z-index', -1);
                    self.slider_data[x].state = 'normal';
                }, 2000);
            }
            function checkAsc(index) {
                return (index < length) ? index + 1 : 0;
            }
            function checkDsc(index) {
                return (index > 0) ? index - 1 : length;
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* trigger */])('slider', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* state */])('normal', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({
                        transform: 'scale(1) translate(0px, 0px) ',
                        opacity: 1,
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* state */])('scale', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({
                        transform: 'scale(0) translate(0px, -300px)',
                        opacity: 1,
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* state */])('fade', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({
                        transform: 'scale(1) translate(0px, 0px) ',
                        opacity: 0,
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* state */])('translateY', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({
                        transform: 'scale(1) translate(0px, 100%)',
                        opacity: 1,
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* state */])('translateX', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* style */])({
                        transform: 'scale(1) translate(100vw,0px)',
                        opacity: 1,
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* transition */])('normal => scale', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('0.5s linear')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* transition */])('normal => translateY', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('0.5s linear')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* transition */])('normal => translateX', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('0.5s linear')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* transition */])('normal => fade', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* animate */])('0.5s linear')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/introduce/introduce.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page{\r\n\tborder-top: 85px solid rgba(54,46,41,1);\r\n\tpadding: 30px;\r\n}\r\n.breakcrumb{\r\n\tbackground: #f5f5f5;\r\n\tpadding: 5px;\r\n\twidth: 100%;\r\n\tmargin-bottom: 20px;\r\n}\r\n.breakcrumb ul li a{\r\n\tcolor: #555;\r\n}\r\n.breakcrumb ul li:after{\r\n\tcontent: \"\\F105\";\r\n\tfont-family:'FontAwesome';\r\n\tmargin-right: 5px;\r\n}\r\n.breakcrumb ul li:last-child:after{\r\n\tdisplay: none;\r\n}\r\n.page__content{\r\n\tmax-width: 100%;\r\n\twidth: 100%;\r\n}\r\n.page__content >h1{\r\n\tcolor: rgba(54,46,41,1);\r\n\tfont-size: 35px;\r\n}\r\n.page_title{\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n.page_title__content{\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\tleft: 0;\r\n\tpadding: 30px;\r\n\tbackground: rgba(0,0,0, 0.6);\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n}\r\n.page_title__content img{\r\n\tborder-radius: 50%;\r\n\tmax-width: 40px;\r\n\tmargin-right: 20px;\r\n}\r\n.page_title__content h2{\r\n\tmargin-top: 10px;\r\n}\r\n.news-list{\r\n\tmargin-top: 50px;\r\n}\r\n.news-item{\r\n\tmargin-top: 30px;\r\n\tmargin-bottom: 30px;\r\n}\r\n.news-item__img{\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\twidth: 200px;\r\n\theight: 250px;\r\n}\r\n.news-item__detail{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width: 400px;\r\n    height: 250px;\r\n    padding: 0 30px;\r\n}\r\n.img-circle{\r\n\tborder-radius: 50%;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n.news-item__detail h3 a{\r\n\tfont-weight: normal;\r\n\tfont-size: 30px;\r\n\tcolor: #000;\r\n}\r\n.news-item__detail h3 a:hover{\r\n\tcolor: #dc8068;\r\n}\r\n.read-more{\r\n\tborder: 1px solid #000;\r\n    color: #000;\r\n    text-transform: uppercase;\r\n    padding: 6px 10px;\r\n    font-size: 13px;\r\n    display: block;\r\n    height: 35px;\r\n    transition:all 0.2s linear;\r\n}\r\n.read-more:hover{\r\n\tcolor: #fff;\r\n\tbackground: #dc8068;\r\n\tborder: 1px solid #dc8068;\r\n}\r\na:hover{\r\n\ttext-decoration: none;\r\n}\r\n.pagination li a{\r\n\tcolor: #fff;\r\n\tbackground:#dc8068;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tposition: relative;\r\n\tborder:1px solid #dc8068;\r\n\tborder-right: none;\r\n\tborder-left: 1px solid #fff;\r\n\tposition: relative;\r\n}\r\n.pagination li.is-active a,.pagination li:hover a{\r\n\tbackground: #fff;\r\n\tcolor: #dc8068;\r\n\tborder-left: 1px solid #dc8068;\r\n}\r\n.pagination li.is-active a:after,.pagination li:hover a:after{\r\n\tcontent: '';\r\n\tbackground: #dc8068;\r\n\tdisplay: block;\r\n\twidth: 1px;\r\n\theight: 30px;\r\n\ttop: -1px;\r\n    right: -1px;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n.pagination li:first-child a{\r\n\tborder-radius: 5px 0 0 5px;\r\n\tborder-left-color: #dc8068;\r\n}\r\n.pagination li:last-child a{\r\n\tborder-radius: 0 5px 5px 0;\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a,.pagination li:last-child:hover a{\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a:after,.pagination li:last-child:hover a:after{\r\n\tdisplay: none;\r\n}\r\n.image-ship{\r\n\tmargin: 50px 0;\r\n}\r\n.sort{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n.sort .dropdown{\r\n\tborder:1px solid #999;\r\n\tposition: relative;\r\n\tmargin-left: 20px;\r\n}\r\n.dropdown >ul{\r\n\tposition: absolute;\r\n\tz-index: 11; \r\n\ttransition: max-height 0.2s;  \r\n\tmax-height: 0;\r\n\tbackground: #fff;\r\n\tmin-width: 200px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n\toverflow: hidden;\r\n}\r\n.dropdown.is-active >ul{\r\n\tmax-height: 300px;\r\n\tborder: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.dropdown >ul >li>a{\r\n\tcolor: #555;\r\n\tdisplay: block;\r\n\tpadding: 5px;\r\n}\r\n.dropdown >ul >li>a:hover{\r\n\tbackground: rgba(0,0,0,0.15)\r\n}\r\n.dropdown>span{\r\n\tdisplay: block;\r\n\tpadding: 3px 10px;\r\n\tfont-size: 13px;\r\n}\r\n.dropdown>span:after{\r\n\tcontent: \"\\F0D7\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-left: 20px;\r\n\tdisplay: inline-block;\r\n\ttransition: -webkit-transform 0.2s;\r\n\ttransition: transform 0.2s;\r\n\ttransition:transform 0.2s, -webkit-transform 0.2s;\r\n}\r\n.dropdown{\r\n\tcursor: pointer;\r\n}\r\n.dropdown.is-active >span:after{\r\n\t-webkit-transform:rotate(180deg);\r\n\t        transform:rotate(180deg);\r\n}\r\n.slider-for{\r\n\tmax-width: 80%;\r\n\tmargin: 0 auto;\r\n}\r\n.slider-nav{\r\n\tmax-width: 100%;\r\n\tposition: relative;\r\n}\r\n/*********PAGE PRODUCT DETAIL**************/\r\n.product-detail .product-detail__price{\r\n\tfont-size: 30px;\r\n}\r\n.product-detail .product-detail__number{\r\n\tborder-bottom: 1px solid #000;\r\n\tdisplay: table;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.product-detail  .product-detail__number span:not(.number){\r\n\topacity: 0.7;\r\n\tcursor: pointer;\r\n}\r\n.product-detail  .product-detail__number span:not(.number):hover{\r\n\topacity: 1;\r\n}\r\n.product-detail .product-detail__number span.number{\r\n\tmargin: 0 20px;\r\n}\r\n.product-detail .add-to-cart{\r\n\tbackground: #5c4543;\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    padding: 5px 15px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.product-detail .add-to-cart:hover{\r\n\tbackground: #3f3530;\r\n}\r\n.product-detail .add-to-cart:before{\r\n\tcontent: \"\\F290\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-right: 10px;\r\n}\r\n.page__cart table{\r\n\twidth: 100%;\r\n}\r\n.page__cart tr{\r\n\tborder-bottom: 1px solid #eee;\r\n\tmin-height: 50px;\r\n}\r\n.page__cart th,.page__cart td{\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n}\r\n.page__cart td img{\r\n\tmax-width: 100px;\r\n}\r\n.page__cart td input[type=\"number\"]{\r\n\twidth: 80px;\r\n\tborder:1px solid #ccc;\r\n\tpadding: 5px 10px;\r\n}\r\n.page__cart >a{\r\n    border-radius: 3px;\r\n    padding: 7px 10px;\r\n    font-size: 14px;\r\n    float: right;\r\n}\r\n.text-left{\r\n\ttext-align: left;\r\n}\r\n.text-right{\r\n\ttext-align: right;\r\n}\r\n.cart-total{\r\n\tfont-size: 20px;\r\n\tmargin-top: 20px;\r\n}\r\na.btn--primary:hover{\r\n\tcolor: #dc8068;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #dc8068; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/introduce/introduce.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"breakcrumb\">\n\t\t\t\t<ul class=\"flex_center\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Trang chủ</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Giới thiệu</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"page__content\">\n\t\t\t\t<h1>GIỚI THIỆU</h1>\n\t\t\t\t\"Đi cà phê\" từ lâu không đơn thuần chỉ là uống một tách cà phê mà còn là dịp gặp mặt và trò chuyện cùng bạn bè. Tại Coffee Và Bạn, chúng tôi trân trọng và đề cao giá trị kết nối giữa con người và trải nghiệm của khách hàng.\n\t\t\t\tChúng tôi được truyền cảm hứng từ những tách cà phê và thức uống mình tạo ra. Chúng tôi tin tưởng mạnh mẽ rằng thức uống với chất lượng tốt nhất được phục vụ trong không gian thân thiện.\n\t\t\t\t<br>\n\t\t\t\tTại Coffee Và Bạn, nguyên liệu làm ra cà phê và tất cả các loại thức uống đều được chọn lọc từ những nguồn cung ứng được kiểm định gắt gao, đáp ứng tiêu chuẩn chất lượng cao nhất. Và một “nguyên liệu” quan trọng hơn hết chúng tôi đưa vào từng sản phẩm là sự tâm huyết của cả đội ngũ nhân viên Coffee Và Bạn. \n\t\t\t\tNiềm đam mê với hương vị, sự nhiệt thành khi phục vụ, kĩ năng pha chế được đào tạo chuyên sâu là tất cả những gì Coffee Và Bạn cam kết khi phục vụ bất kì sản phẩm nào cho khách hàng nhằm tạo ra trải nghiệm “đi cà phê” tốt nhất cho bạn.\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>\n\t\n"

/***/ }),

/***/ "../../../../../src/app/introduce/introduce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroduceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroduceComponent = (function () {
    function IntroduceComponent() {
    }
    IntroduceComponent.prototype.ngOnInit = function () {
        setTimeout(function () { window.scrollTo(0, 0); }, 0);
    };
    IntroduceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-introduce',
            template: __webpack_require__("../../../../../src/app/introduce/introduce.component.html"),
            styles: [__webpack_require__("../../../../../src/app/introduce/introduce.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroduceComponent);
    return IntroduceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/model-user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Array_user; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__("../../../../../src/app/model/user.ts");

var Array_user = [
    new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]('1', 'sangthai1', 'huesang1@gmail.com', 'sangthai1'),
    new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]('2', 'sangthai2', 'huesang2@gmail.com', 'sangthai2'),
    new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]('3', 'sangthai3', 'huesang3@gmail.com', 'sangthai3'),
    new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]('4', 'sangthai4', 'huesang4@gmail.com', 'sangthai4'),
    new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]('5', 'sangthai5', 'huesang5@gmail.com', 'sangthai5'),
    new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]('6', 'sangthai6', 'huesang6@gmail.com', 'sangthai6'),
    new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]('7', 'sangthai7', 'huesang7@gmail.com', 'sangthai7'),
];


/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, full_name, email, password) {
        if (id === void 0) { id = ""; }
        if (full_name === void 0) { full_name = ""; }
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        this.id = id;
        this.full_name = full_name;
        this.email = email;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page{\r\n\tborder-top: 85px solid rgba(54,46,41,1);\r\n\tpadding: 30px;\r\n}\r\n.breakcrumb{\r\n\tbackground: #f5f5f5;\r\n\tpadding: 5px;\r\n\twidth: 100%;\r\n\tmargin-bottom: 20px;\r\n}\r\n.breakcrumb ul li a{\r\n\tcolor: #555;\r\n}\r\n.breakcrumb ul li:after{\r\n\tcontent: \"\\F105\";\r\n\tfont-family:'FontAwesome';\r\n\tmargin-right: 5px;\r\n}\r\n.breakcrumb ul li:last-child:after{\r\n\tdisplay: none;\r\n}\r\n.page__content{\r\n\tmax-width: 100%;\r\n\twidth: 100%;\r\n}\r\n.page__content >h1{\r\n\tcolor: rgba(54,46,41,1);\r\n\tfont-size: 35px;\r\n}\r\n.page_title{\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n.page_title__content{\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\tleft: 0;\r\n\tpadding: 30px;\r\n\tbackground: rgba(0,0,0, 0.6);\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n}\r\n.page_title__content img{\r\n\tborder-radius: 50%;\r\n\tmax-width: 40px;\r\n\tmargin-right: 20px;\r\n}\r\n.page_title__content h2{\r\n\tmargin-top: 10px;\r\n}\r\n.news-list{\r\n\tmargin-top: 50px;\r\n}\r\n.news-item{\r\n\tmargin-top: 30px;\r\n\tmargin-bottom: 30px;\r\n}\r\n.news-item__img{\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\twidth: 200px;\r\n\theight: 250px;\r\n}\r\n.news-item__detail{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width: 400px;\r\n    height: 250px;\r\n    padding: 0 30px;\r\n}\r\n.img-circle{\r\n\tborder-radius: 50%;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n.news-item__detail h3 a{\r\n\tfont-weight: normal;\r\n\tfont-size: 30px;\r\n\tcolor: #000;\r\n}\r\n.news-item__detail h3 a:hover{\r\n\tcolor: #dc8068;\r\n}\r\n.read-more{\r\n\tborder: 1px solid #000;\r\n    color: #000;\r\n    text-transform: uppercase;\r\n    padding: 6px 10px;\r\n    font-size: 13px;\r\n    display: block;\r\n    height: 35px;\r\n    transition:all 0.2s linear;\r\n}\r\n.read-more:hover{\r\n\tcolor: #fff;\r\n\tbackground: #dc8068;\r\n\tborder: 1px solid #dc8068;\r\n}\r\na:hover{\r\n\ttext-decoration: none;\r\n}\r\n.pagination li a{\r\n\tcolor: #fff;\r\n\tbackground:#dc8068;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tposition: relative;\r\n\tborder:1px solid #dc8068;\r\n\tborder-right: none;\r\n\tborder-left: 1px solid #fff;\r\n\tposition: relative;\r\n}\r\n.pagination li.is-active a,.pagination li:hover a{\r\n\tbackground: #fff;\r\n\tcolor: #dc8068;\r\n\tborder-left: 1px solid #dc8068;\r\n}\r\n.pagination li.is-active a:after,.pagination li:hover a:after{\r\n\tcontent: '';\r\n\tbackground: #dc8068;\r\n\tdisplay: block;\r\n\twidth: 1px;\r\n\theight: 30px;\r\n\ttop: -1px;\r\n    right: -1px;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n.pagination li:first-child a{\r\n\tborder-radius: 5px 0 0 5px;\r\n\tborder-left-color: #dc8068;\r\n}\r\n.pagination li:last-child a{\r\n\tborder-radius: 0 5px 5px 0;\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a,.pagination li:last-child:hover a{\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a:after,.pagination li:last-child:hover a:after{\r\n\tdisplay: none;\r\n}\r\n.image-ship{\r\n\tmargin: 50px 0;\r\n}\r\n.sort{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n.sort .dropdown{\r\n\tborder:1px solid #999;\r\n\tposition: relative;\r\n\tmargin-left: 20px;\r\n}\r\n.dropdown >ul{\r\n\tposition: absolute;\r\n\tz-index: 11; \r\n\ttransition: max-height 0.2s;  \r\n\tmax-height: 0;\r\n\tbackground: #fff;\r\n\tmin-width: 200px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n\toverflow: hidden;\r\n}\r\n.dropdown.is-active >ul{\r\n\tmax-height: 300px;\r\n\tborder: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.dropdown >ul >li>a{\r\n\tcolor: #555;\r\n\tdisplay: block;\r\n\tpadding: 5px;\r\n}\r\n.dropdown >ul >li>a:hover{\r\n\tbackground: rgba(0,0,0,0.15)\r\n}\r\n.dropdown>span{\r\n\tdisplay: block;\r\n\tpadding: 3px 10px;\r\n\tfont-size: 13px;\r\n}\r\n.dropdown>span:after{\r\n\tcontent: \"\\F0D7\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-left: 20px;\r\n\tdisplay: inline-block;\r\n\ttransition: -webkit-transform 0.2s;\r\n\ttransition: transform 0.2s;\r\n\ttransition:transform 0.2s, -webkit-transform 0.2s;\r\n}\r\n.dropdown{\r\n\tcursor: pointer;\r\n}\r\n.dropdown.is-active >span:after{\r\n\t-webkit-transform:rotate(180deg);\r\n\t        transform:rotate(180deg);\r\n}\r\n.slider-for{\r\n\tmax-width: 80%;\r\n\tmargin: 0 auto;\r\n}\r\n.slider-nav{\r\n\tmax-width: 100%;\r\n\tposition: relative;\r\n}\r\n/*********PAGE PRODUCT DETAIL**************/\r\n.product-detail .product-detail__price{\r\n\tfont-size: 30px;\r\n}\r\n.product-detail .product-detail__number{\r\n\tborder-bottom: 1px solid #000;\r\n\tdisplay: table;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.product-detail  .product-detail__number span:not(.number){\r\n\topacity: 0.7;\r\n\tcursor: pointer;\r\n}\r\n.product-detail  .product-detail__number span:not(.number):hover{\r\n\topacity: 1;\r\n}\r\n.product-detail .product-detail__number span.number{\r\n\tmargin: 0 20px;\r\n}\r\n.product-detail .add-to-cart{\r\n\tbackground: #5c4543;\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    padding: 5px 15px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.product-detail .add-to-cart:hover{\r\n\tbackground: #3f3530;\r\n}\r\n.product-detail .add-to-cart:before{\r\n\tcontent: \"\\F290\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-right: 10px;\r\n}\r\n.page__cart table{\r\n\twidth: 100%;\r\n}\r\n.page__cart tr{\r\n\tborder-bottom: 1px solid #eee;\r\n\tmin-height: 50px;\r\n}\r\n.page__cart th,.page__cart td{\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n}\r\n.page__cart td img{\r\n\tmax-width: 100px;\r\n}\r\n.page__cart td input[type=\"number\"]{\r\n\twidth: 80px;\r\n\tborder:1px solid #ccc;\r\n\tpadding: 5px 10px;\r\n}\r\n.page__cart >a{\r\n    border-radius: 3px;\r\n    padding: 7px 10px;\r\n    font-size: 14px;\r\n    float: right;\r\n}\r\n.text-left{\r\n\ttext-align: left;\r\n}\r\n.text-right{\r\n\ttext-align: right;\r\n}\r\n.cart-total{\r\n\tfont-size: 20px;\r\n\tmargin-top: 20px;\r\n}\r\na.btn--primary:hover{\r\n\tcolor: #dc8068;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #dc8068; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"breakcrumb\">\n\t\t\t\t<ul class=\"flex_center\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Trang chủ</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Tin tức</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"page__content\">\n\t\t\t\t<div class=\"page_title\">\n\t\t\t\t\t<img src=\"../assets/images/mrcoffee.jpg\" width=\"100%\">\n\t\t\t\t\t<div class=\"page_title__content\">\n\t\t\t\t\t\t<div class=\"flex_center\">\n\t\t\t\t\t\t\t<img src=\"../assets/images/member1.jpg\">\n\t\t\t\t\t\t\tTác giả, Trần Như Thảo Trang\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h2>Vị cha đẻ của chiếc máy pha huyền thoại Mr Coffee</h2>\n\t\t\t\t\t\t<p>12/06/2017</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h1>Tin tức</h1>\n\t\t\t\t\"Đi cà phê\" từ lâu không đơn thuần chỉ là uống một tách cà phê mà còn là dịp gặp mặt và trò chuyện cùng bạn bè. Tại Coffee Và Bạn, chúng tôi trân trọng và đề cao giá trị kết nối giữa con người và trải nghiệm của khách hàng.\n\t\t\t\tChúng tôi được truyền cảm hứng từ những tách cà phê và thức uống mình tạo ra. Chúng tôi tin tưởng mạnh mẽ rằng thức uống với chất lượng tốt nhất được phục vụ trong không gian thân thiện.\n\t\t\t\t<br>\n\t\t\t\t<div class=\"col-md-12 news-list\">\n\t\t\t\t\t\t<div class=\"row news-item\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 news-item__img\" style=\"background: url('../assets/images/new1.jpg');\"></div>\n\t\t\t\t\t\t\t<div class=\"col-md-8 news-item__detail\">\n\t\t\t\t\t\t\t\t<h3><a href=\"\">Văn hóa uống cà phê của người Sài Gòn lên báo Anh</a></h3>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\tBài viết trên tờ Telegraph (Anh) nhận định văn hóa thưởng thức cà phê ở TPHCM không giống như ở bất cứ nơi nào khác trên thế giới. Ở đây, cà phê là thức uống đem lại năng lượng cho người dân của cả một thành phố sôi động. Điều đầu tiên một du khách cần phải học khi đặt chân tới TPHCM, đó là biết cách qua đường. Đó là một thử thách hóc búa đòi hỏi...\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"flex_between\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"../assets/images/member1.jpg\">\n\t\t\t\t\t\t\t\t\t\tTác giả Nguyễn Chánh Bảo Chung\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a class=\"read-more\" href=\"\">Đọc thêm</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\" style=\"justify-content: flex-end;\">\n\t\t\t\t\t\t<ul class=\"pagination\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-caret-left\"></i></a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">1</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"is-active\">\n\t\t\t\t\t\t\t\t<a href=\"#\">2</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">3</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">4</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-caret-right\"></i></a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>\n\t\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
        setTimeout(function () { window.scrollTo(0, 0); }, 0);
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page{\r\n\tborder-top: 85px solid rgba(54,46,41,1);\r\n\tpadding: 30px;\r\n}\r\n.breakcrumb{\r\n\tbackground: #f5f5f5;\r\n\tpadding: 5px;\r\n\twidth: 100%;\r\n\tmargin-bottom: 20px;\r\n}\r\n.breakcrumb ul li a{\r\n\tcolor: #555;\r\n}\r\n.breakcrumb ul li:after{\r\n\tcontent: \"\\F105\";\r\n\tfont-family:'FontAwesome';\r\n\tmargin-right: 5px;\r\n}\r\n.breakcrumb ul li:last-child:after{\r\n\tdisplay: none;\r\n}\r\n.page__content{\r\n\tmax-width: 100%;\r\n\twidth: 100%;\r\n}\r\n.page__content >h1{\r\n\tcolor: rgba(54,46,41,1);\r\n\tfont-size: 35px;\r\n}\r\n.page_title{\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n.page_title__content{\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\tleft: 0;\r\n\tpadding: 30px;\r\n\tbackground: rgba(0,0,0, 0.6);\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n}\r\n.page_title__content img{\r\n\tborder-radius: 50%;\r\n\tmax-width: 40px;\r\n\tmargin-right: 20px;\r\n}\r\n.page_title__content h2{\r\n\tmargin-top: 10px;\r\n}\r\n.news-list{\r\n\tmargin-top: 50px;\r\n}\r\n.news-item{\r\n\tmargin-top: 30px;\r\n\tmargin-bottom: 30px;\r\n}\r\n.news-item__img{\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\twidth: 200px;\r\n\theight: 250px;\r\n}\r\n.news-item__detail{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width: 400px;\r\n    height: 250px;\r\n    padding: 0 30px;\r\n}\r\n.img-circle{\r\n\tborder-radius: 50%;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n.news-item__detail h3 a{\r\n\tfont-weight: normal;\r\n\tfont-size: 30px;\r\n\tcolor: #000;\r\n}\r\n.news-item__detail h3 a:hover{\r\n\tcolor: #dc8068;\r\n}\r\n.read-more{\r\n\tborder: 1px solid #000;\r\n    color: #000;\r\n    text-transform: uppercase;\r\n    padding: 6px 10px;\r\n    font-size: 13px;\r\n    display: block;\r\n    height: 35px;\r\n    transition:all 0.2s linear;\r\n}\r\n.read-more:hover{\r\n\tcolor: #fff;\r\n\tbackground: #dc8068;\r\n\tborder: 1px solid #dc8068;\r\n}\r\na:hover{\r\n\ttext-decoration: none;\r\n}\r\n.pagination li a{\r\n\tcolor: #fff;\r\n\tbackground:#dc8068;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tposition: relative;\r\n\tborder:1px solid #dc8068;\r\n\tborder-right: none;\r\n\tborder-left: 1px solid #fff;\r\n\tposition: relative;\r\n}\r\n.pagination li.is-active a,.pagination li:hover a{\r\n\tbackground: #fff;\r\n\tcolor: #dc8068;\r\n\tborder-left: 1px solid #dc8068;\r\n}\r\n.pagination li.is-active a:after,.pagination li:hover a:after{\r\n\tcontent: '';\r\n\tbackground: #dc8068;\r\n\tdisplay: block;\r\n\twidth: 1px;\r\n\theight: 30px;\r\n\ttop: -1px;\r\n    right: -1px;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n.pagination li:first-child a{\r\n\tborder-radius: 5px 0 0 5px;\r\n\tborder-left-color: #dc8068;\r\n}\r\n.pagination li:last-child a{\r\n\tborder-radius: 0 5px 5px 0;\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a,.pagination li:last-child:hover a{\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a:after,.pagination li:last-child:hover a:after{\r\n\tdisplay: none;\r\n}\r\n.image-ship{\r\n\tmargin: 50px 0;\r\n}\r\n.sort{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n.sort .dropdown{\r\n\tborder:1px solid #999;\r\n\tposition: relative;\r\n\tmargin-left: 20px;\r\n}\r\n.dropdown >ul{\r\n\tposition: absolute;\r\n\tz-index: 11; \r\n\ttransition: max-height 0.2s;  \r\n\tmax-height: 0;\r\n\tbackground: #fff;\r\n\tmin-width: 200px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n\toverflow: hidden;\r\n}\r\n.dropdown.is-active >ul{\r\n\tmax-height: 300px;\r\n\tborder: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.dropdown >ul >li>a{\r\n\tcolor: #555;\r\n\tdisplay: block;\r\n\tpadding: 5px;\r\n}\r\n.dropdown >ul >li>a:hover{\r\n\tbackground: rgba(0,0,0,0.15)\r\n}\r\n.dropdown>span{\r\n\tdisplay: block;\r\n\tpadding: 3px 10px;\r\n\tfont-size: 13px;\r\n}\r\n.dropdown>span:after{\r\n\tcontent: \"\\F0D7\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-left: 20px;\r\n\tdisplay: inline-block;\r\n\ttransition: -webkit-transform 0.2s;\r\n\ttransition: transform 0.2s;\r\n\ttransition:transform 0.2s, -webkit-transform 0.2s;\r\n}\r\n.dropdown{\r\n\tcursor: pointer;\r\n}\r\n.dropdown.is-active >span:after{\r\n\t-webkit-transform:rotate(180deg);\r\n\t        transform:rotate(180deg);\r\n}\r\n.slider-for{\r\n\tmax-width: 80%;\r\n\tmargin: 0 auto;\r\n}\r\n.slider-nav{\r\n\tmax-width: 100%;\r\n\tposition: relative;\r\n}\r\n/*********PAGE PRODUCT DETAIL**************/\r\n.product-detail .product-detail__price{\r\n\tfont-size: 30px;\r\n}\r\n.product-detail .product-detail__number{\r\n\tborder-bottom: 1px solid #000;\r\n\tdisplay: table;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.product-detail  .product-detail__number span:not(.number){\r\n\topacity: 0.7;\r\n\tcursor: pointer;\r\n}\r\n.product-detail  .product-detail__number span:not(.number):hover{\r\n\topacity: 1;\r\n}\r\n.product-detail .product-detail__number span.number{\r\n\tmargin: 0 20px;\r\n}\r\n.product-detail .add-to-cart{\r\n\tbackground: #5c4543;\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    padding: 5px 15px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.product-detail .add-to-cart:hover{\r\n\tbackground: #3f3530;\r\n}\r\n.product-detail .add-to-cart:before{\r\n\tcontent: \"\\F290\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-right: 10px;\r\n}\r\n.page__cart table{\r\n\twidth: 100%;\r\n}\r\n.page__cart tr{\r\n\tborder-bottom: 1px solid #eee;\r\n\tmin-height: 50px;\r\n}\r\n.page__cart th,.page__cart td{\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n}\r\n.page__cart td img{\r\n\tmax-width: 100px;\r\n}\r\n.page__cart td input[type=\"number\"]{\r\n\twidth: 80px;\r\n\tborder:1px solid #ccc;\r\n\tpadding: 5px 10px;\r\n}\r\n.page__cart >a{\r\n    border-radius: 3px;\r\n    padding: 7px 10px;\r\n    font-size: 14px;\r\n    float: right;\r\n}\r\n.text-left{\r\n\ttext-align: left;\r\n}\r\n.text-right{\r\n\ttext-align: right;\r\n}\r\n.cart-total{\r\n\tfont-size: 20px;\r\n\tmargin-top: 20px;\r\n}\r\na.btn--primary:hover{\r\n\tcolor: #dc8068;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #dc8068; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"breakcrumb\">\n\t\t\t\t<ul class=\"flex_center\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Trang chủ</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Cafe sáng tạo 8</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"page__content\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t<div class=\"slider-for\">\n\t\t\t\t\t\t\t<img src=\"../assets/images/p3.jpg\">\n\t\t\t\t\t\t\t<img src=\"../assets/images/p2.jpg\">\n\t\t\t\t\t\t\t<img src=\"../assets/images/p1.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"slider-nav\">\n\t\t\t\t\t\t\t<img src=\"../assets/images/p3.jpg\">\n\t\t\t\t\t\t\t<img src=\"../assets/images/p2.jpg\">\n\t\t\t\t\t\t\t<img src=\"../assets/images/p1.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"product-detail product-item\">\n\t\t\t\t\t\t\t<h1 class=\"product-detail__name\">{{productDetail.name}}</h1>\n\t\t\t\t\t\t\t<div class=\"product-detail__description\">\n\t\t\t\t\t\t\t\t{{productDetail.detail}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"product-detail__price\"><span>{{ultilService.formatNumber(productDetail.price)}}</span><sup>đ</sup></p>\n\t\t\t\t\t\t\t<p>Số lượng</p>\n\t\t\t\t\t\t\t<div class=\"product-detail__number\">\n\t\t\t\t\t\t\t\t<span (click)=\"sub()\">-</span>\n\t\t\t\t\t\t\t\t<span class=\"number\" #quantity>{{num}}</span>\n\t\t\t\t\t\t\t\t<span (click)=\"add()\">+</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button (click)=\"cartService.addToCart(productDetail,quantity.innerText)\" class=\"add-to-cart\">Thêm vào giỏ hàng</button>\n\t\t\t\t\t\t\t<div class=\"fb-share-button\" \n\t\t\t\t\t\t\t\tdata-href=\"https://themes.bizweb.vn/\" \n\t\t\t\t\t\t\t\tdata-layout=\"button\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ultil_service__ = __webpack_require__("../../../../../src/app/ultil.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailComponent = (function () {
    function ProductDetailComponent(activatedRoute, router, location, productsService, ultilService, cartService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.productsService = productsService;
        this.ultilService = ultilService;
        this.cartService = cartService;
        this.num = 1;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        setTimeout(function () { window.scrollTo(0, 0); }, 0);
        this.getProduct();
        this.importJs();
    };
    ProductDetailComponent.prototype.importJs = function () {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
        // myExtObject.func1();
    };
    ProductDetailComponent.prototype.sub = function () {
        var num = this.quantity.nativeElement.innerText * 1;
        this.num = (num > 1) ? num - 1 : num;
    };
    ProductDetailComponent.prototype.add = function () {
        var num = this.quantity.nativeElement.innerText * 1;
        this.num = num + 1;
    };
    ProductDetailComponent.prototype.getProduct = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        var item = this.cartService.getCartItem(id);
        if (item != null) {
            this.num = item.quantity;
            this.productDetail = item.product;
        }
        else {
            this.productsService.getProductDetail(id).subscribe(function (product) { return _this.productDetail = product; });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("quantity"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProductDetailComponent.prototype, "quantity", void 0);
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-detail',
            template: __webpack_require__("../../../../../src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_5__ultil_service__["a" /* UltilService */],
            __WEBPACK_IMPORTED_MODULE_4__cart_service__["a" /* CartService */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-item/product-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-item/product-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div *ngFor=\"let product of product_list\" class=\"col-md-3 section__product\">\n\t\t<div class=\"section__product__img\">\n\t\t<img src=\"../assets/images/{{product.thumbnail}}\">\n\t\t</div>\n\t\t<div class=\"section__product__detail\">\n\t\t\t<div class=\"price\">{{ultilService.formatNumber(product.price)}}<sup>đ</sup></div>\n\t\t\t<h4>{{product.name}}</h4>\n\t\t\t<span>1 gói 250 gram</span>\n\t\t\t<div>\n\t\t\t\t<a (click)=\"cartService.addToCart(product,1)\">Mua ngay</a>\n\t\t\t\t<a routerLink=\"/product/{{product.id}}\">Chi tiết</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product-item/product-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ultil_service__ = __webpack_require__("../../../../../src/app/ultil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductItemComponent = (function () {
    function ProductItemComponent(ultilService, cartService) {
        this.ultilService = ultilService;
        this.cartService = cartService;
    }
    ProductItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ProductItemComponent.prototype, "product_list", void 0);
    ProductItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-item',
            template: __webpack_require__("../../../../../src/app/product-item/product-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-item/product-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ultil_service__["a" /* UltilService */], __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]])
    ], ProductItemComponent);
    return ProductItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page{\r\n\tborder-top: 85px solid rgba(54,46,41,1);\r\n\tpadding: 30px;\r\n}\r\n.breakcrumb{\r\n\tbackground: #f5f5f5;\r\n\tpadding: 5px;\r\n\twidth: 100%;\r\n\tmargin-bottom: 20px;\r\n}\r\n.breakcrumb ul li a{\r\n\tcolor: #555;\r\n}\r\n.breakcrumb ul li:after{\r\n\tcontent: \"\\F105\";\r\n\tfont-family:'FontAwesome';\r\n\tmargin-right: 5px;\r\n}\r\n.breakcrumb ul li:last-child:after{\r\n\tdisplay: none;\r\n}\r\n.page__content{\r\n\tmax-width: 100%;\r\n\twidth: 100%;\r\n}\r\n.page__content >h1{\r\n\tcolor: rgba(54,46,41,1);\r\n\tfont-size: 35px;\r\n}\r\n.page_title{\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n.page_title__content{\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\tleft: 0;\r\n\tpadding: 30px;\r\n\tbackground: rgba(0,0,0, 0.6);\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n}\r\n.page_title__content img{\r\n\tborder-radius: 50%;\r\n\tmax-width: 40px;\r\n\tmargin-right: 20px;\r\n}\r\n.page_title__content h2{\r\n\tmargin-top: 10px;\r\n}\r\n.news-list{\r\n\tmargin-top: 50px;\r\n}\r\n.news-item{\r\n\tmargin-top: 30px;\r\n\tmargin-bottom: 30px;\r\n}\r\n.news-item__img{\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\twidth: 200px;\r\n\theight: 250px;\r\n}\r\n.news-item__detail{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width: 400px;\r\n    height: 250px;\r\n    padding: 0 30px;\r\n}\r\n.img-circle{\r\n\tborder-radius: 50%;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n.news-item__detail h3 a{\r\n\tfont-weight: normal;\r\n\tfont-size: 30px;\r\n\tcolor: #000;\r\n}\r\n.news-item__detail h3 a:hover{\r\n\tcolor: #dc8068;\r\n}\r\n.read-more{\r\n\tborder: 1px solid #000;\r\n    color: #000;\r\n    text-transform: uppercase;\r\n    padding: 6px 10px;\r\n    font-size: 13px;\r\n    display: block;\r\n    height: 35px;\r\n    transition:all 0.2s linear;\r\n}\r\n.read-more:hover{\r\n\tcolor: #fff;\r\n\tbackground: #dc8068;\r\n\tborder: 1px solid #dc8068;\r\n}\r\na:hover{\r\n\ttext-decoration: none;\r\n}\r\n.image-ship{\r\n\tmargin: 50px 0;\r\n}\r\n.sort{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n.sort .dropdown{\r\n\tborder:1px solid #999;\r\n\tposition: relative;\r\n\tmargin-left: 20px;\r\n}\r\n.dropdown >ul{\r\n\tposition: absolute;\r\n\tz-index: 11; \r\n\ttransition: max-height 0.2s;  \r\n\tmax-height: 0;\r\n\tbackground: #fff;\r\n\tmin-width: 200px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n\toverflow: hidden;\r\n}\r\n.dropdown.is-active >ul{\r\n\tmax-height: 300px;\r\n\tborder: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.dropdown >ul >li>a{\r\n\tcolor: #555;\r\n\tdisplay: block;\r\n\tpadding: 5px;\r\n}\r\n.dropdown >ul >li>a:hover{\r\n\tbackground: rgba(0,0,0,0.15)\r\n}\r\n.dropdown>span{\r\n\tdisplay: block;\r\n\tpadding: 3px 10px;\r\n\tfont-size: 13px;\r\n}\r\n.dropdown>span:after{\r\n\tcontent: \"\\F0D7\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-left: 20px;\r\n\tdisplay: inline-block;\r\n\ttransition: -webkit-transform 0.2s;\r\n\ttransition: transform 0.2s;\r\n\ttransition:transform 0.2s, -webkit-transform 0.2s;\r\n}\r\n.dropdown{\r\n\tcursor: pointer;\r\n}\r\n.dropdown.is-active >span:after{\r\n\t-webkit-transform:rotate(180deg);\r\n\t        transform:rotate(180deg);\r\n}\r\n.slider-for{\r\n\tmax-width: 80%;\r\n\tmargin: 0 auto;\r\n}\r\n.slider-nav{\r\n\tmax-width: 100%;\r\n\tposition: relative;\r\n}\r\n/*********PAGE PRODUCT DETAIL**************/\r\n.product-detail .product-detail__price{\r\n\tfont-size: 30px;\r\n}\r\n.product-detail .product-detail__number{\r\n\tborder-bottom: 1px solid #000;\r\n\tdisplay: table;\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 20px;\r\n}\r\n.product-detail  .product-detail__number span:not(.number){\r\n\topacity: 0.7;\r\n\tcursor: pointer;\r\n}\r\n.product-detail  .product-detail__number span:not(.number):hover{\r\n\topacity: 1;\r\n}\r\n.product-detail .product-detail__number span.number{\r\n\tmargin: 0 20px;\r\n}\r\n.product-detail .add-to-cart{\r\n\tbackground: #5c4543;\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    padding: 5px 15px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    border: none;\r\n}\r\n.product-detail .add-to-cart:hover{\r\n\tbackground: #3f3530;\r\n}\r\n.product-detail .add-to-cart:before{\r\n\tcontent: \"\\F290\";\r\n\tfont-family: FontAwesome;\r\n\tmargin-right: 10px;\r\n}\r\n.page__cart table{\r\n\twidth: 100%;\r\n}\r\n.page__cart tr{\r\n\tborder-bottom: 1px solid #eee;\r\n\tmin-height: 50px;\r\n}\r\n.page__cart th,.page__cart td{\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n}\r\n.page__cart td img{\r\n\tmax-width: 100px;\r\n}\r\n.page__cart td input[type=\"number\"]{\r\n\twidth: 80px;\r\n\tborder:1px solid #ccc;\r\n\tpadding: 5px 10px;\r\n}\r\n.page__cart >a{\r\n    border-radius: 3px;\r\n    padding: 7px 10px;\r\n    font-size: 14px;\r\n    float: right;\r\n}\r\n.text-left{\r\n\ttext-align: left;\r\n}\r\n.text-right{\r\n\ttext-align: right;\r\n}\r\n.cart-total{\r\n\tfont-size: 20px;\r\n\tmargin-top: 20px;\r\n}\r\na.btn--primary:hover{\r\n\tcolor: #dc8068;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #dc8068; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"breakcrumb\">\n        <ul class=\"flex_center\">\n          <li>\n            <a href=\"#\">Trang chủ</a>\n          </li>\n          <li>\n            <a href=\"#\">Tất cả sản phẩm</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"sort\">\n        <span>Sắp xếp</span>\n        <div class=\"dropdown\">\n          <span>{{typeSort}}</span>\n          <ul>\n            <li (click)=\"sort('Tên. A->Z','name','asc')\">\n              <a>Tên. A->Z</a>\n            </li>\n            <li (click)=\"sort('Tên. Z->A','name','dsc')\">\n              <a>Tên. Z->A</a>\n            </li>\n            <li (click)=\"sort('Giá. Cao->Thấp','price','dsc')\">\n              <a>Giá. Cao->Thấp</a>\n            </li>\n            <li (click)=\"sort('Giá. Thấp->Cao','price','asc')\">\n              <a>Giá. Thấp->Cao</a>\n            </li>\n          </ul>\n        </div>\n        <!-- <div class=\"zalo-share-button\" data-href=\"http://developers.zalo.me\" data-oaid=\"579745863508352884\" data-layout=\"2\" data-color=\"blue\" data-customize=false></div> -->\n      </div>\n      <div class=\"page__content\">\n        <app-product-item [product_list]=\"product_list\"></app-product-item>\n        <ul class=\"pagination\">\n          <li (click)=getProductPage(pageActived-1)>\n            <a><i class=\"fa fa-caret-left\"></i></a>\n          </li>\n           <li [class.is-active]=\"pageActived==index+1\" (click)=getProductPage(index+1) *ngFor=\"let a of getNumberPage(); let index = index\">\n            <a>{{ index + 1 }}</a>\n          </li>\n          <li (click)=getProductPage(pageActived+1)>\n            <a><i class=\"fa fa-caret-right\"></i></a>\n          </li>\n        </ul>\n        <img class=\"image-ship\" src=\"../assets/images/ship_image.jpg\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = (function () {
    function ProductListComponent(ProductsService) {
        this.ProductsService = ProductsService;
        this.productOnPage = 4;
        this.typeSort = 'Mặc định';
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductsService.getProductList().subscribe(function (list) { return _this.allProduct = list; });
        this.initAnimation();
        this.getNumberPage();
        this.getProductPage(1);
    };
    ProductListComponent.prototype.getNumberPage = function () {
        this.numberPage = Math.ceil(this.allProduct.length / this.productOnPage);
        var fakeArray = new Array(this.numberPage);
        return fakeArray;
    };
    ProductListComponent.prototype.getProductPage = function (page) {
        if (page <= this.numberPage && page > 0) {
            var from = (page - 1) * this.productOnPage;
            var to = page * this.productOnPage;
            this.product_list = this.allProduct.slice(from, to);
            this.pageActived = page;
        }
    };
    ProductListComponent.prototype.sort = function (name, filter, sort) {
        var array = this.allProduct;
        var length = this.allProduct.length;
        for (var i = 0; i < length - 1; i++) {
            for (var j = i + 1; j < length; j++) {
                if (array[j][filter] < array[i][filter]) {
                    var x = array[i];
                    array[i] = array[j];
                    array[j] = x;
                }
            }
        }
        if (sort == 'dsc') {
            array.reverse();
        }
        ;
        this.product_list = array;
        this.getProductPage(1);
        this.typeSort = name;
    };
    ProductListComponent.prototype.initAnimation = function () {
        setTimeout(function () { window.scrollTo(0, 0); }, 0);
        $(".dropdown").click(function (event) {
            $(this).toggleClass('is-active');
        });
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_product__ = __webpack_require__("../../../../../src/app/data_product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsService = (function () {
    function ProductsService() {
    }
    ProductsService.prototype.getProductList = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__data_product__["a" /* data_product */]);
    };
    ProductsService.prototype.getProductDetail = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__data_product__["a" /* data_product */].find(function (val) { return val.id == id; }));
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "../../../../../src/app/search/form-search/form-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Form search */\r\nform{\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n\tline-height: 25px;\r\n\tmargin: 10px 0;\r\n\tdisplay: table;\r\n\tposition: relative;\r\n}\r\nform input{\r\n\twidth: 80%;\r\n\tborder:1px solid #ccc;\r\n\tborder-right: none;\r\n\tline-height: inherit;\r\n\tfloat: left;\r\n\tpadding: 5px;\r\n}\r\nform input:focus,form button:focus{\r\n\toutline: none;\r\n}\r\nform button{\r\n\tcursor: pointer;\r\n\tline-height: inherit;\r\n\twidth: 20%;\r\n\tpadding: 5px;\r\n\tfloat: left;\r\n}\r\nform >ul{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tborder: 1px solid #ccc;\r\n\tborder-top: none;\r\n\ttop: 32px;\r\n\tbackground: #fff;\r\n\t/* max-height: 310px; */\r\n\tz-index: 1;\r\n}\r\nform >ul >li:hover{\r\n\tbackground: #f1f1f1;\r\n\tcursor: pointer;\r\n}\r\nform >ul >li>a{\r\n\tcolor: #777;\r\n\tdisplay: block;\r\n\tpadding: 5px 10px;\r\n}\r\nform >ul >li:first-child a{\r\n\tpadding-top: 10px;\r\n}\r\nform >ul >li:last-child a{\r\n\tpadding-bottom: 10px;\r\n}\r\nform >ul >li.is-active{\r\n\tbackground: #f1f1f1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/form-search/form-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form #formSearch=\"ngForm\" (ngSubmit)=\"submit(formSearch)\" class=\"formSearch\" autocomplete=\"off\">\n  <input type=\"text\" [(ngModel)]=\"key_search\" name=\"key_search\" (keyup)=\"search($event)\" (keyup.ArrowDown)=\"down()\" (keyup.ArrowUp)=\"up()\">\n  <button class=\"btn--primary\" *ngIf=\"page=='search'\">Tìm kiếm</button>\n  <ul *ngIf=\"array_search.length >0\">\n    <ng-container *ngFor=\"let item of array_search.slice(0,5); let i=index\">\n      <li [class.is-active]=\"i==select\">\n        <a routerLink=\"/product/{{item.id}}\">{{item.name}}</a>\n      </li>\n    </ng-container>\n  </ul>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/search/form-search/form-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormSearchComponent = (function () {
    function FormSearchComponent(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        //Page để hiển thị button khi đang ở trang search
        this.select = -1;
        this.key_search = '';
        this.array_search = [];
    }
    FormSearchComponent.prototype.ngOnInit = function () {
        var self = this;
        $(document).ready(function () {
            $("body").click(function () {
                $(".formSearch >ul").css('display', 'none');
            });
            $(".formSearch").click(function (event) {
                event.stopPropagation();
            });
            $(".formSearch input").focus(function (event) {
                $(".formSearch >ul").css('display', 'block');
            });
        });
    };
    FormSearchComponent.prototype.search = function (input) {
        this.array_search = this.searchService.search(input.target.value);
    };
    FormSearchComponent.prototype.submit = function (form) {
        if (this.select >= 0) {
            var url = $(".formSearch ul li:eq(" + this.select + ")").find("a").attr('href');
            this.router.navigate([url]);
        }
        else {
            //Đóng modal search ở menu
            $("#mySearch").click();
            var key_search = this.key_search.replace(' ', '-');
            this.router.navigate(['/search'], { queryParams: { key_search: key_search } });
        }
    };
    FormSearchComponent.prototype.down = function () {
        this.select += (this.select < 10) ? 1 : 0;
    };
    FormSearchComponent.prototype.up = function () {
        this.select -= (this.select > 0) ? 1 : 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FormSearchComponent.prototype, "page", void 0);
    FormSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-search',
            template: __webpack_require__("../../../../../src/app/search/form-search/form-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/form-search/form-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], FormSearchComponent);
    return FormSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page{\r\n\tborder-top: 85px solid rgba(54,46,41,1);\r\n\tpadding: 30px;\r\n}\r\na:hover{\r\n\ttext-decoration: none;\r\n}\r\n\r\n.text-left{\r\n\ttext-align: left;\r\n}\r\n.text-right{\r\n\ttext-align: right;\r\n}\r\nbutton.btn--primary:hover{\r\n\tcolor: #dc8068;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #dc8068; \r\n}\r\n.breakcrumb{\r\n\tbackground: #f5f5f5;\r\n\tpadding: 5px;\r\n\twidth: 100%;\r\n\tmargin-bottom: 20px;\r\n}\r\n.breakcrumb ul li a{\r\n\tcolor: #555;\r\n}\r\n.breakcrumb ul li:after{\r\n\tcontent: \"\\F105\";\r\n\tfont-family:'FontAwesome';\r\n\tmargin-right: 5px;\r\n}\r\n.breakcrumb ul li:last-child:after{\r\n\tdisplay: none;\r\n}\r\n.page__content{\r\n\tmax-width: 100%;\r\n\twidth: 100%;\r\n}\r\n.page__content >h1{\r\n\tcolor: rgba(54,46,41,1);\r\n\tfont-size: 35px;\r\n}\r\n.page_title{\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n.page_title__content{\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\tleft: 0;\r\n\tpadding: 30px;\r\n\tbackground: rgba(0,0,0, 0.6);\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n}\r\n.page_title__content img{\r\n\tborder-radius: 50%;\r\n\tmax-width: 40px;\r\n\tmargin-right: 20px;\r\n}\r\n.page_title__content h2{\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.pagination li a{\r\n\tcolor: #fff;\r\n\tbackground:#dc8068;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tposition: relative;\r\n\tborder:1px solid #dc8068;\r\n\tborder-right: none;\r\n\tborder-left: 1px solid #fff;\r\n\tposition: relative;\r\n}\r\n.pagination li.is-active a,.pagination li:hover a{\r\n\tbackground: #fff;\r\n\tcolor: #dc8068;\r\n\tborder-left: 1px solid #dc8068;\r\n}\r\n.pagination li.is-active a:after,.pagination li:hover a:after{\r\n\tcontent: '';\r\n\tbackground: #dc8068;\r\n\tdisplay: block;\r\n\twidth: 1px;\r\n\theight: 30px;\r\n\ttop: -1px;\r\n    right: -1px;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n.pagination li:first-child a{\r\n\tborder-radius: 5px 0 0 5px;\r\n\tborder-left-color: #dc8068;\r\n}\r\n.pagination li:last-child a{\r\n\tborder-radius: 0 5px 5px 0;\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a,.pagination li:last-child:hover a{\r\n\tborder-right: 1px solid #dc8068;\r\n}\r\n.pagination li:last-child.is-active a:after,.pagination li:last-child:hover a:after{\r\n\tdisplay: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"breakcrumb\">\n\t\t\t\t<ul class=\"flex_center\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Trang chủ</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">Kết quả tìm kiếm</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"page__content\">\n        <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n\t\t\t\t\t\t\t<!-- Thêm page để phân biệt load cho trang search component hay header component -->\n              <app-form-search [page]=\"'search'\"></app-form-search>\n              <h5 class=\"text-center\">Kết quả tìm kiếm với từ khóa: {{key_search}} </h5>\n          </div>\n        </div>\t\n        <!--  List search -->\n        <ng-container *ngIf=\"array_search.length >0 else elseBlock\">\n            <app-product-item [product_list]=\"array_search\"></app-product-item>\n        </ng-container>\n        <ng-template #elseBlock>\n          <div>Không tìm thấy kết quả với từ khóa: {{key_search}}</div>\n        </ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n</div>\n\t\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("../../../../../src/app/search/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(searchService, router, activatedRoute) {
        this.searchService = searchService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.key_search = '';
        this.array_search = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { window.scrollTo(0, 0); }, 0);
        $(document).ready(function () {
            $("body").click();
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.key_search = params['key_search'].replace('-', ' ');
            _this.array_search = _this.searchService.search(_this.key_search);
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_product__ = __webpack_require__("../../../../../src/app/data_product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService() {
    }
    SearchService.prototype.convert = function (str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        str = str.replace(/ + /g, " ");
        str = str.trim();
        return str;
    };
    SearchService.prototype.search = function (key) {
        var self = this;
        if (key != '') {
            key = this.convert(key);
            var pattern_1 = new RegExp(key);
            return __WEBPACK_IMPORTED_MODULE_1__data_product__["a" /* data_product */].filter(function (item) {
                var name = self.convert(item.name);
                if (pattern_1.test(name)) {
                    return item;
                }
            });
        }
        else {
            return [];
        }
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/ultil.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UltilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UltilService = (function () {
    function UltilService() {
    }
    UltilService.prototype.formatNumber = function (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };
    UltilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UltilService);
    return UltilService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map