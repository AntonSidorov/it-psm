webpackJsonp([0,3],{

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.open = false;
        this.landing = true;
        this.onclick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.autoOpen();
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.toggleLanding = function () {
        if (!this.open)
            return;
        this.landing = false;
    };
    NavComponent.prototype.toggleOpen = function () {
        this.open = !this.open;
    };
    NavComponent.prototype.close = function () {
        this.open = false;
    };
    NavComponent.prototype.minimise = function () {
        this.landing = false;
    };
    NavComponent.prototype.autoOpen = function () {
        var _this = this;
        this.landing = true;
        setTimeout(function () {
            _this.open = true;
        }, 840);
    };
    NavComponent.prototype.navTo = function (i, event) {
        if (!this.open)
            return false;
        event.preventDefault();
        event.stopPropagation();
        console.log(i);
        console.log(event);
        this.onclick.emit(i);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]) === 'function' && _a) || Object)
    ], NavComponent.prototype, "onclick", void 0);
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
    var _a;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/nav.component.js.map

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
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
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.onLanding = true;
        this.setup = false;
        this.navVis = [false, false, false, false];
        this.pages = ["#analysis", "#design", "#development", "#evaluation"];
        this.navs = [
            ['Analysis:', 'Solution requirements', 'Solution constraints', 'Scope of solution'],
            ['Design:', 'Solution design', 'Evaluation criteria'],
            ['Development:', 'Manipulation', 'Validation', 'Testing', 'Documentation'],
            ['Evaluation:', 'Strategy', 'Report'],
        ];
        this.rects = [];
        this.title = 'app works!';
        // This works!
        //this.titleService.setTitle('Test Dynamic title');
        //this.nav.
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setup = true;
        setTimeout(function () {
            _this.updateRects();
        }, 100);
    };
    AppComponent.prototype.updateRects = function () {
        this.rects[0] = this.landing.nativeElement.getBoundingClientRect();
        this.rects[1] = this.analysis.nativeElement.getBoundingClientRect();
        this.rects[2] = this.design.nativeElement.getBoundingClientRect();
        this.rects[3] = this.development.nativeElement.getBoundingClientRect();
        this.rects[4] = this.evaluation.nativeElement.getBoundingClientRect();
    };
    AppComponent.prototype.onScroll = function (event) {
        //Now all we have to do is just check which element is focused the most out of those
        this.updateRects();
        if (this.rects[0].top < 0) {
            this.nav.minimise();
            this.nav.close();
            if (this.onLanding) {
                this.onLanding = false;
            }
        }
        else {
            this.nav.autoOpen();
            this.onLanding = true;
        }
        this.navVis[0] = this.rects[1].top <= 0 && this.rects[1].bottom >= 0;
        this.navVis[1] = this.rects[2].top <= 0 && this.rects[2].bottom >= 0;
        this.navVis[2] = this.rects[3].top <= 0 && this.rects[3].bottom >= 0;
        this.navVis[3] = this.rects[4].top <= 0 && this.rects[4].bottom >= 0;
    };
    AppComponent.prototype.onnav = function (event) {
        this.jump(this.rects[event + 1].top);
        //this.scrollTo(this.pages[event + 1]);
    };
    AppComponent.prototype.jump = function (target) {
        // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
        function easing(t, b, c, d) {
            t /= d / 2;
            if (t < 1)
                return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        var start = window.pageYOffset, duration = 400, timeStart, timeElapsed;
        requestAnimationFrame(function (time) {
            timeStart = time;
            loop(time);
        });
        function loop(time) {
            timeElapsed = time - timeStart;
            window.scrollTo(0, easing(timeElapsed, start, target, duration));
            if (timeElapsed < duration)
                requestAnimationFrame(loop);
            else
                end();
        }
        function end() {
            window.scrollTo(0, start + target);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('landing'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "landing", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('analysis'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "analysis", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('design'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "design", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('development'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "development", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('evaluation'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "evaluation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */]), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "nav", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* HostListener */])('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/app.component.js.map

/***/ },

/***/ 267:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 267;


/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(103);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/main.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_src_browser_title__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component_scss_shim_ngstyle__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_query_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_nav_nav_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__nav_nav_component_ngfactory__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__ = __webpack_require__(65);
/* unused harmony export Wrapper_AppComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponentNgFactory; });
/* unused harmony export View_AppComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





















var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */](p0);
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'window:scroll')) {
            var pd_sub_0 = (this.context.onScroll($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-root', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_src_browser_title__["a" /* Title */], this.parentIndex));
        this.compView_0.create(this._AppComponent_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'scroll', 'window'), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._AppComponent_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._AppComponent_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var AppComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-root', View_AppComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]);
var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_8__app_component_scss_shim_ngstyle__["a" /* styles */]];
var View_AppComponent2 = (function (_super) {
    __extends(View_AppComponent2, _super);
    function View_AppComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent2, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent2;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent1 = (function (_super) {
    __extends(View_AppComponent1, _super);
    function View_AppComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent1, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'analysis'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[0];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent4 = (function (_super) {
    __extends(View_AppComponent4, _super);
    function View_AppComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent4, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent4;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent3 = (function (_super) {
    __extends(View_AppComponent3, _super);
    function View_AppComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent3, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'design'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[1];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent3.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent4(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent3;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent6 = (function (_super) {
    __extends(View_AppComponent6, _super);
    function View_AppComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent6, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent6;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent5 = (function (_super) {
    __extends(View_AppComponent5, _super);
    function View_AppComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent5, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'development'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[2];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent5.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent5.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent6(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent5;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent8 = (function (_super) {
    __extends(View_AppComponent8, _super);
    function View_AppComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent8, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent8;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent7 = (function (_super) {
    __extends(View_AppComponent7, _super);
    function View_AppComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent7, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'evaluation'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[3];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent7.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent7.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent8(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent7;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent10 = (function (_super) {
    __extends(View_AppComponent10, _super);
    function View_AppComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent10, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, 'Analysis:', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_6 = this.renderer.createText(this._el_5, 'Solution requirements', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_9 = this.renderer.createText(this._el_8, 'Solution constraints', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_12 = this.renderer.createText(this._el_11, 'Scope of solution', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13
        ]), null);
        return null;
    };
    View_AppComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent10;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent9 = (function (_super) {
    __extends(View_AppComponent9, _super);
    function View_AppComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent9, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'analysis'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'Determining the solution requirements', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, 'What output is the solution to provide? What data is needed to produce the output? What functions must the solution provide?\n      ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_13 = this.renderer.createText(this._el_9, ' These requirements can be classified as being functional, that is, what the solution is required to do,\n      and non-functional, which describes the attributes the solution should possess including useability, reliability, portability,\n      robustness, maintainability.\n      ', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_16 = this.renderer.createText(this._el_9, ' Tools to assist in determining the solution requirements include context diagrams, data flow diagrams and\n      use cases.\n    ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_19 = this.renderer.createText(this._el_18, 'Identifying the constraints on the solution', null);
        this._text_20 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_22 = this.renderer.createText(this._el_21, '\n      What conditions need to be considered when designing a solution? Typical constraints include economic, such as cost and time;\n      technical, such as speed of processing, capacity, availability of equipment, compatibility and security; social, such\n      as level of expertise of users; legal, such as ownership and privacy of data requirements; and useability, such as\n      usefulness and ease of use of solutions.\n    ', null);
        this._text_23 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_25 = this.renderer.createText(this._el_24, 'Determining the scope of the solution', null);
        this._text_26 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_28 = this.renderer.createText(this._el_27, 'Determining the scope of the solution. The scope states the boundaries or parameters of the solution. It identifies the\n      area of interest or what aspects of the problem will and will not be addressed by the solution.\n    ', null);
        this._text_29 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30
        ]), null);
        return null;
    };
    View_AppComponent9.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[0];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent9.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_analysis_1.setDirty();
    };
    View_AppComponent9.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent9.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent10(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent9;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent12 = (function (_super) {
    __extends(View_AppComponent12, _super);
    function View_AppComponent12(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent12, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, 'Design:', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_6 = this.renderer.createText(this._el_5, 'Solution design', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_9 = this.renderer.createText(this._el_8, 'Evaluation criteria', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10
        ]), null);
        return null;
    };
    View_AppComponent12.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent12;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent11 = (function (_super) {
    __extends(View_AppComponent11, _super);
    function View_AppComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent11, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'design'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'Planning how the solution will function and its appearance.', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, 'The solution design typically involves identifying what specific data is required and how the data will be named, structured,\n      validated and manipulated. Typical design tools for this purpose include data dictionaries and data structure diagrams,\n      input-process-output (IPO) charts, flowcharts, pseudocode, object descriptions. Solution design also involves, where\n      appropriate, showing how the various components of a solution relate to one another, for example web pages, style sheets,\n      scripts; queries, forms, reports; modules, procedures, methods, functions. Typical design tools used to show relationships\n      include storyboards, site maps, entity-relationship diagrams, data flow diagrams, structure charts, hierarchy charts,\n      and context diagrams.\n      ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_12 = this.renderer.createText(this._el_9, ' ', null);
        this._el_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_14 = this.renderer.createText(this._el_9, 'Planning the solution also involves determining its appearance, including, where appropriate, the user interface.\n      This typically involves identifying the position and size of text, images and graphics, font types, colours and text\n      enhancements. Design tools used for this purpose include layout diagrams, annotated diagrams/mock ups.\n    ', null);
        this._text_15 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_17 = this.renderer.createText(this._el_16, 'Determining the evaluation criteria.', null);
        this._text_18 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_20 = this.renderer.createText(this._el_19, '\n      What measures will be used to judge whether or not the solution meets the requirements? These criteria should arise from\n      the solution requirements identified in the analysis stage.\n    ', null);
        this._text_21 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_22 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22
        ]), null);
        return null;
    };
    View_AppComponent11.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[1];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent11.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_design_2.setDirty();
    };
    View_AppComponent11.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent11.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent12(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent11;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent14 = (function (_super) {
    __extends(View_AppComponent14, _super);
    function View_AppComponent14(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent14, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent14.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, 'Development:', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_6 = this.renderer.createText(this._el_5, 'Manipulation', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_9 = this.renderer.createText(this._el_8, 'Validation', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_12 = this.renderer.createText(this._el_11, 'Testing', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_15 = this.renderer.createText(this._el_14, 'Documentation', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16
        ]), null);
        return null;
    };
    View_AppComponent14.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent14;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent13 = (function (_super) {
    __extends(View_AppComponent13, _super);
    function View_AppComponent13(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent13, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent13.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'development'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'Electronically ‘building’ or creating the solution following initial designs.', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, 'It may, however, warrant modifying initial designs in order to create a working solution.', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_13 = this.renderer.createText(this._el_12, 'Validation to check for the reasonableness of data being input.', null);
        this._text_14 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_16 = this.renderer.createText(this._el_15, '\n      Validation can be both manual and electronic. Proofreading is a manual technique and it occurs when a human scans the data\n      for errors. Electronic validation occurs when the validation process is built into the solution. Its effectiveness\n      is determined through the testing activity.\n    ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_19 = this.renderer.createText(this._el_18, 'Testing whether the solution does what it was intended to do. This activity typically involves:', null);
        this._text_20 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_22 = this.renderer.createText(this._el_21, '\n      ', null);
        this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_21, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_24 = this.renderer.createText(this._el_23, 'establishing what tests will be conducted', null);
        this._text_25 = this.renderer.createText(this._el_21, '\n      ', null);
        this._el_26 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_21, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_27 = this.renderer.createText(this._el_26, 'determining what test data will be used', null);
        this._text_28 = this.renderer.createText(this._el_21, '\n      ', null);
        this._el_29 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_21, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_30 = this.renderer.createText(this._el_29, 'determining expected results', null);
        this._text_31 = this.renderer.createText(this._el_21, '\n      ', null);
        this._el_32 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_21, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_33 = this.renderer.createText(this._el_32, 'conducting the test', null);
        this._text_34 = this.renderer.createText(this._el_21, '\n      ', null);
        this._el_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_21, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_36 = this.renderer.createText(this._el_35, 'recording the actual results', null);
        this._text_37 = this.renderer.createText(this._el_21, '\n      ', null);
        this._el_38 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_21, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_39 = this.renderer.createText(this._el_38, 'correcting any identified errors', null);
        this._text_40 = this.renderer.createText(this._el_21, '\n    ', null);
        this._text_41 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_42 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_43 = this.renderer.createText(this._el_42, 'Writing internal and user documentation, including within the user interface, to support the functioning and use of the\n      solution.\n    ', null);
        this._text_44 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_45 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._text_45
        ]), null);
        return null;
    };
    View_AppComponent13.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent13.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[2];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent13.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_development_3.setDirty();
    };
    View_AppComponent13.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent13.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent13.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent14(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent13;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent16 = (function (_super) {
    __extends(View_AppComponent16, _super);
    function View_AppComponent16(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent16, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent16.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, 'Evaluation:', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_6 = this.renderer.createText(this._el_5, 'Strategy', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_9 = this.renderer.createText(this._el_8, 'Report', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10
        ]), null);
        return null;
    };
    View_AppComponent16.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent16;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent15 = (function (_super) {
    __extends(View_AppComponent15, _super);
    function View_AppComponent15(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent15, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent15.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'evaluation'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'Planning how the solution will function and its appearance.', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, 'The solution design typically involves identifying what specific data is required and how the data will be named, structured,\n      validated and manipulated. Typical design tools for this purpose include data dictionaries and data structure diagrams,\n      input-process-output (IPO) charts, flowcharts, pseudocode, object descriptions. Solution design also involves, where\n      appropriate, showing how the various components of a solution relate to one another, for example web pages, style sheets,\n      scripts; queries, forms, reports; modules, procedures, methods, functions. Typical design tools used to show relationships\n      include storyboards, site maps, entity-relationship diagrams, data flow diagrams, structure charts, hierarchy charts,\n      and context diagrams.\n      ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_12 = this.renderer.createText(this._el_9, ' ', null);
        this._el_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_14 = this.renderer.createText(this._el_9, 'Planning the solution also involves determining its appearance, including, where appropriate, the user interface.\n      This typically involves identifying the position and size of text, images and graphics, font types, colours and text\n      enhancements. Design tools used for this purpose include layout diagrams, annotated diagrams/mock ups.\n    ', null);
        this._text_15 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_17 = this.renderer.createText(this._el_16, 'Determining the evaluation criteria.', null);
        this._text_18 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_20 = this.renderer.createText(this._el_19, '\n      What measures will be used to judge whether or not the solution meets the requirements? These criteria should arise from\n      the solution requirements identified in the analysis stage.\n    ', null);
        this._text_21 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_22 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22
        ]), null);
        return null;
    };
    View_AppComponent15.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent15.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[3];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent15.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_evaluation_4.setDirty();
    };
    View_AppComponent15.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent15.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent15.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent16(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent15;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_AppComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_landing_0 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_analysis_1 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_design_2 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_development_3 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_evaluation_4 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_NavComponent_5 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'app-nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_1 = new __WEBPACK_IMPORTED_MODULE_19__nav_nav_component_ngfactory__["a" /* View_NavComponent0 */](this.viewUtils, this, 1, this._el_1);
        this._NavComponent_1_3 = new __WEBPACK_IMPORTED_MODULE_19__nav_nav_component_ngfactory__["b" /* Wrapper_NavComponent */]();
        this.compView_1.create(this._NavComponent_1_3.context);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'fixed'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n  ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_5 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](5, 3, this, this._anchor_5);
        this._TemplateRef_5_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 5, this._anchor_5);
        this._NgIf_5_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_5.vcRef, this._TemplateRef_5_5);
        this._text_6 = this.renderer.createText(this._el_3, '\n  ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_7 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](7, 3, this, this._anchor_7);
        this._TemplateRef_7_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 7, this._anchor_7);
        this._NgIf_7_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_3, '\n  ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_9 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](9, 3, this, this._anchor_9);
        this._TemplateRef_9_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 9, this._anchor_9);
        this._NgIf_9_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_3, '\n  ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_11 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](11, 3, this, this._anchor_11);
        this._TemplateRef_11_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 11, this._anchor_11);
        this._NgIf_11_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(this._el_3, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'landing'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n', null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_17 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_17 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](17, null, this, this._anchor_17);
        this._TemplateRef_17_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 17, this._anchor_17);
        this._NgIf_17_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_17.vcRef, this._TemplateRef_17_5);
        this._text_18 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_19 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](19, null, this, this._anchor_19);
        this._TemplateRef_19_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 19, this._anchor_19);
        this._NgIf_19_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_21 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](21, null, this, this._anchor_21);
        this._TemplateRef_21_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 21, this._anchor_21);
        this._NgIf_21_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_21.vcRef, this._TemplateRef_21_5);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_23 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](23, null, this, this._anchor_23);
        this._TemplateRef_23_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 23, this._anchor_23);
        this._NgIf_23_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_1, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'onclick', null), this.eventHandler(this.handleEvent_1));
        this._NavComponent_1_3.subscribe(this, this.eventHandler(this.handleEvent_1), true);
        this._viewQuery_landing_0.reset([new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_14)]);
        this.context.landing = this._viewQuery_landing_0.first;
        this._viewQuery_NavComponent_5.reset([this._NavComponent_1_3.context]);
        this.context.nav = this._viewQuery_NavComponent_5.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._anchor_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._anchor_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._anchor_21,
            this._text_22,
            this._anchor_23,
            this._text_24
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_18__app_nav_nav_component__["a" /* NavComponent */]) && (1 === requestNodeIndex))) {
            return this._NavComponent_1_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (5 === requestNodeIndex))) {
            return this._NgIf_5_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (17 === requestNodeIndex))) {
            return this._TemplateRef_17_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (17 === requestNodeIndex))) {
            return this._NgIf_17_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (21 === requestNodeIndex))) {
            return this._NgIf_21_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavComponent_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        var currVal_5_0_0 = this.context.navVis[0];
        this._NgIf_5_6.check_ngIf(currVal_5_0_0, throwOnChange, false);
        this._NgIf_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        var currVal_7_0_0 = this.context.navVis[1];
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        var currVal_9_0_0 = this.context.navVis[2];
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        var currVal_11_0_0 = this.context.navVis[3];
        this._NgIf_11_6.check_ngIf(currVal_11_0_0, throwOnChange, false);
        this._NgIf_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        var currVal_17_0_0 = this.context.setup;
        this._NgIf_17_6.check_ngIf(currVal_17_0_0, throwOnChange, false);
        this._NgIf_17_6.ngDoCheck(this, this._anchor_17, throwOnChange);
        var currVal_19_0_0 = this.context.setup;
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        var currVal_21_0_0 = this.context.setup;
        this._NgIf_21_6.check_ngIf(currVal_21_0_0, throwOnChange, false);
        this._NgIf_21_6.ngDoCheck(this, this._anchor_21, throwOnChange);
        var currVal_23_0_0 = this.context.setup;
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
        this._vc_17.detectChangesInNestedViews(throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        this._vc_21.detectChangesInNestedViews(throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        this.compView_1.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_analysis_1.dirty) {
                this._viewQuery_analysis_1.reset([this._vc_17.mapNestedViews(View_AppComponent9, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.analysis = this._viewQuery_analysis_1.first;
            }
            if (this._viewQuery_design_2.dirty) {
                this._viewQuery_design_2.reset([this._vc_19.mapNestedViews(View_AppComponent11, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.design = this._viewQuery_design_2.first;
            }
            if (this._viewQuery_development_3.dirty) {
                this._viewQuery_development_3.reset([this._vc_21.mapNestedViews(View_AppComponent13, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.development = this._viewQuery_development_3.first;
            }
            if (this._viewQuery_evaluation_4.dirty) {
                this._viewQuery_evaluation_4.reset([this._vc_23.mapNestedViews(View_AppComponent15, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.evaluation = this._viewQuery_evaluation_4.first;
            }
        }
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
        this._vc_7.destroyNestedViews();
        this._vc_9.destroyNestedViews();
        this._vc_11.destroyNestedViews();
        this._vc_17.destroyNestedViews();
        this._vc_19.destroyNestedViews();
        this._vc_21.destroyNestedViews();
        this._vc_23.destroyNestedViews();
        this.compView_1.destroy();
        this._NavComponent_1_3.ngOnDestroy();
    };
    View_AppComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_AppComponent1(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        if ((nodeIndex == 7)) {
            return new View_AppComponent3(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        if ((nodeIndex == 9)) {
            return new View_AppComponent5(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        if ((nodeIndex == 11)) {
            return new View_AppComponent7(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        if ((nodeIndex == 17)) {
            return new View_AppComponent9(this.viewUtils, this, 17, this._anchor_17, this._vc_17);
        }
        if ((nodeIndex == 19)) {
            return new View_AppComponent11(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        if ((nodeIndex == 21)) {
            return new View_AppComponent13(this.viewUtils, this, 21, this._anchor_21, this._vc_21);
        }
        if ((nodeIndex == 23)) {
            return new View_AppComponent15(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        return null;
    };
    View_AppComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'onclick')) {
            var pd_sub_0 = (this.context.onnav($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/app.component.ngfactory.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.description[_ngcontent-%COMP%] {\n  margin: 1rem 15rem; }\n  .description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    font-weight: 300; }\n  .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 2rem 0;\n    margin-left: 1rem;\n    line-height: 1.2rem;\n    margin-bottom: 4rem; }'];
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/app.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_compiler__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_dom_renderer__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_queue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_browser_title__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_radio_control_value_accessor__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http_src_backends_browser_xhr__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http_src_base_response_options__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http_src_backends_xhr_backend__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http_src_base_request_options__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_component_ngfactory__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_core_src_i18n_tokens__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_core_src_application_tokens__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_src_dom_events_dom_events__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_src_dom_events_key_events__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_debug_ng_probe__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_core_src_console__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_core_src_error_handler__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_src_dom_dom_tokens__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_src_dom_animation_driver__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_core_src_render_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_core_src_security__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_http_src_interfaces__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_http_src_http__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};











































var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [__WEBPACK_IMPORTED_MODULE_26__app_component_ngfactory__["a" /* AppComponentNgFactory */]], [__WEBPACK_IMPORTED_MODULE_26__app_component_ngfactory__["a" /* AppComponentNgFactory */]]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_7", {
        get: function () {
            if ((this.__LOCALE_ID_7 == null)) {
                (this.__LOCALE_ID_7 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["b" /* _localeFactory */](this.parent.get(__WEBPACK_IMPORTED_MODULE_27__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */], null)));
            }
            return this.__LOCALE_ID_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["c" /* NgLocaleLocalization */](this._LOCALE_ID_7));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_13", {
        get: function () {
            if ((this.__ApplicationRef_13 == null)) {
                (this.__ApplicationRef_13 = this._ApplicationRef__12);
            }
            return this.__ApplicationRef_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_14", {
        get: function () {
            if ((this.__Compiler_14 == null)) {
                (this.__Compiler_14 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_compiler__["b" /* Compiler */]());
            }
            return this.__Compiler_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_15", {
        get: function () {
            if ((this.__APP_ID_15 == null)) {
                (this.__APP_ID_15 = __WEBPACK_IMPORTED_MODULE_28__angular_core_src_application_tokens__["e" /* _appIdRandomProviderFactory */]());
            }
            return this.__APP_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_16", {
        get: function () {
            if ((this.__DOCUMENT_16 == null)) {
                (this.__DOCUMENT_16 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["e" /* _document */]());
            }
            return this.__DOCUMENT_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_17 = new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__["c" /* HammerGestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_18 = [
                    new __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_src_dom_events_dom_events__["a" /* DomEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_src_dom_events_key_events__["a" /* KeyEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__["a" /* HammerGesturesPlugin */](this._HAMMER_GESTURE_CONFIG_17)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_19", {
        get: function () {
            if ((this.__EventManager_19 == null)) {
                (this.__EventManager_19 = new __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */](this._EVENT_MANAGER_PLUGINS_18, this.parent.get(__WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__EventManager_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_20", {
        get: function () {
            if ((this.__DomSharedStylesHost_20 == null)) {
                (this.__DomSharedStylesHost_20 = new __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */](this._DOCUMENT_16));
            }
            return this.__DomSharedStylesHost_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_21", {
        get: function () {
            if ((this.__AnimationDriver_21 == null)) {
                (this.__AnimationDriver_21 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["f" /* _resolveDefaultAnimationDriver */]());
            }
            return this.__AnimationDriver_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_22", {
        get: function () {
            if ((this.__DomRootRenderer_22 == null)) {
                (this.__DomRootRenderer_22 = new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_dom_renderer__["b" /* DomRootRenderer_ */](this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21, this._APP_ID_15));
            }
            return this.__DomRootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_23", {
        get: function () {
            if ((this.__RootRenderer_23 == null)) {
                (this.__RootRenderer_23 = __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_debug_ng_probe__["b" /* _createConditionalRootRenderer */](this._DomRootRenderer_22, this.parent.get(__WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_debug_ng_probe__["c" /* NgProbeToken */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["g" /* NgProbeToken */], null)));
            }
            return this.__RootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_24", {
        get: function () {
            if ((this.__DomSanitizer_24 == null)) {
                (this.__DomSanitizer_24 = new __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizerImpl */]());
            }
            return this.__DomSanitizer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_25", {
        get: function () {
            if ((this.__Sanitizer_25 == null)) {
                (this.__Sanitizer_25 = this._DomSanitizer_24);
            }
            return this.__Sanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_26", {
        get: function () {
            if ((this.__AnimationQueue_26 == null)) {
                (this.__AnimationQueue_26 = new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */](this.parent.get(__WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__AnimationQueue_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_27", {
        get: function () {
            if ((this.__ViewUtils_27 == null)) {
                (this.__ViewUtils_27 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_view_utils__["ViewUtils"](this._RootRenderer_23, this._Sanitizer_25, this._AnimationQueue_26));
            }
            return this.__ViewUtils_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_28", {
        get: function () {
            if ((this.__IterableDiffers_28 == null)) {
                (this.__IterableDiffers_28 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["c" /* _iterableDiffersFactory */]());
            }
            return this.__IterableDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_29", {
        get: function () {
            if ((this.__KeyValueDiffers_29 == null)) {
                (this.__KeyValueDiffers_29 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["d" /* _keyValueDiffersFactory */]());
            }
            return this.__KeyValueDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_30", {
        get: function () {
            if ((this.__SharedStylesHost_30 == null)) {
                (this.__SharedStylesHost_30 = this._DomSharedStylesHost_20);
            }
            return this.__SharedStylesHost_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_31", {
        get: function () {
            if ((this.__Title_31 == null)) {
                (this.__Title_31 = new __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_browser_title__["a" /* Title */]());
            }
            return this.__Title_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_32", {
        get: function () {
            if ((this.__RadioControlRegistry_32 == null)) {
                (this.__RadioControlRegistry_32 = new __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */]());
            }
            return this.__RadioControlRegistry_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_33", {
        get: function () {
            if ((this.__BrowserXhr_33 == null)) {
                (this.__BrowserXhr_33 = new __WEBPACK_IMPORTED_MODULE_22__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */]());
            }
            return this.__BrowserXhr_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_34", {
        get: function () {
            if ((this.__ResponseOptions_34 == null)) {
                (this.__ResponseOptions_34 = new __WEBPACK_IMPORTED_MODULE_23__angular_http_src_base_response_options__["b" /* BaseResponseOptions */]());
            }
            return this.__ResponseOptions_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_35", {
        get: function () {
            if ((this.__XSRFStrategy_35 == null)) {
                (this.__XSRFStrategy_35 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["b" /* _createDefaultCookieXSRFStrategy */]());
            }
            return this.__XSRFStrategy_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_36", {
        get: function () {
            if ((this.__XHRBackend_36 == null)) {
                (this.__XHRBackend_36 = new __WEBPACK_IMPORTED_MODULE_24__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */](this._BrowserXhr_33, this._ResponseOptions_34, this._XSRFStrategy_35));
            }
            return this.__XHRBackend_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_37", {
        get: function () {
            if ((this.__RequestOptions_37 == null)) {
                (this.__RequestOptions_37 = new __WEBPACK_IMPORTED_MODULE_25__angular_http_src_base_request_options__["b" /* BaseRequestOptions */]());
            }
            return this.__RequestOptions_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_38", {
        get: function () {
            if ((this.__Http_38 == null)) {
                (this.__Http_38 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["c" /* httpFactory */](this._XHRBackend_36, this._RequestOptions_37));
            }
            return this.__Http_38;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._ApplicationModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */]();
        this._BrowserModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */], null));
        this._InternalFormsSharedModule_3 = new __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */]();
        this._FormsModule_4 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */]();
        this._HttpModule_5 = new __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */]();
        this._AppModule_6 = new __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]();
        this._ErrorHandler_9 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["g" /* errorHandler */]();
        this._ApplicationInitStatus_10 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__["a" /* ApplicationInitStatus */](this.parent.get(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__["b" /* APP_INITIALIZER */], null));
        this._Testability_11 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__["a" /* Testability */](this.parent.get(__WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__["a" /* NgZone */]));
        this._ApplicationRef__12 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["d" /* ApplicationRef_ */](this.parent.get(__WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__["a" /* NgZone */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_33__angular_core_src_console__["a" /* Console */]), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__["b" /* TestabilityRegistry */], null), this._Testability_11);
        return this._AppModule_6;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */])) {
            return this._ApplicationModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */])) {
            return this._BrowserModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */])) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */])) {
            return this._FormsModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */])) {
            return this._HttpModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])) {
            return this._AppModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_27__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])) {
            return this._LOCALE_ID_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_34__angular_core_src_error_handler__["a" /* ErrorHandler */])) {
            return this._ErrorHandler_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__["a" /* ApplicationInitStatus */])) {
            return this._ApplicationInitStatus_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__["a" /* Testability */])) {
            return this._Testability_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["d" /* ApplicationRef_ */])) {
            return this._ApplicationRef__12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["e" /* ApplicationRef */])) {
            return this._ApplicationRef_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_compiler__["b" /* Compiler */])) {
            return this._Compiler_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_28__angular_core_src_application_tokens__["d" /* APP_ID */])) {
            return this._APP_ID_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_src_dom_dom_tokens__["a" /* DOCUMENT */])) {
            return this._DOCUMENT_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__["b" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */])) {
            return this._EventManager_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */])) {
            return this._DomSharedStylesHost_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_src_dom_animation_driver__["a" /* AnimationDriver */])) {
            return this._AnimationDriver_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_dom_renderer__["a" /* DomRootRenderer */])) {
            return this._DomRootRenderer_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_37__angular_core_src_render_api__["a" /* RootRenderer */])) {
            return this._RootRenderer_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_security_dom_sanitization_service__["a" /* DomSanitizer */])) {
            return this._DomSanitizer_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_38__angular_core_src_security__["a" /* Sanitizer */])) {
            return this._Sanitizer_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */])) {
            return this._AnimationQueue_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_view_utils__["ViewUtils"])) {
            return this._ViewUtils_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_39__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */])) {
            return this._IterableDiffers_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_40__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */])) {
            return this._KeyValueDiffers_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__["b" /* SharedStylesHost */])) {
            return this._SharedStylesHost_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_browser_title__["a" /* Title */])) {
            return this._Title_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */])) {
            return this._RadioControlRegistry_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_22__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */])) {
            return this._BrowserXhr_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_23__angular_http_src_base_response_options__["a" /* ResponseOptions */])) {
            return this._ResponseOptions_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_41__angular_http_src_interfaces__["b" /* XSRFStrategy */])) {
            return this._XSRFStrategy_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_24__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */])) {
            return this._XHRBackend_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_25__angular_http_src_base_request_options__["a" /* RequestOptions */])) {
            return this._RequestOptions_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_42__angular_http_src_http__["a" /* Http */])) {
            return this._Http_38;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__12.ngOnDestroy();
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/app.module.ngfactory.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_nav_nav_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_component_scss_shim_ngstyle__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Wrapper_NavComponent; });
/* unused harmony export NavComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return View_NavComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};









var Wrapper_NavComponent = (function () {
    function Wrapper_NavComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_nav_nav_component__["a" /* NavComponent */]();
    }
    Wrapper_NavComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NavComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_NavComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_NavComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NavComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NavComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.onclick.subscribe(_eventHandler.bind(view, 'onclick')));
        }
    };
    return Wrapper_NavComponent;
}());
var renderType_NavComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_NavComponent_Host0 = (function (_super) {
    __extends(View_NavComponent_Host0, _super);
    function View_NavComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NavComponent_Host0, renderType_NavComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_NavComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_NavComponent0(this.viewUtils, this, 0, this._el_0);
        this._NavComponent_0_3 = new Wrapper_NavComponent();
        this.compView_0.create(this._NavComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._NavComponent_0_3.context);
    };
    View_NavComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_nav_nav_component__["a" /* NavComponent */]) && (0 === requestNodeIndex))) {
            return this._NavComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_NavComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_NavComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._NavComponent_0_3.ngOnDestroy();
    };
    View_NavComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NavComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var NavComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-nav', View_NavComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_nav_nav_component__["a" /* NavComponent */]);
var styles_NavComponent = [__WEBPACK_IMPORTED_MODULE_7__nav_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_NavComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_NavComponent, {});
var View_NavComponent0 = (function (_super) {
    __extends(View_NavComponent0, _super);
    function View_NavComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NavComponent0, renderType_NavComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_33 = __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_34 = __WEBPACK_IMPORTED_MODULE_8__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_NavComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav-container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav bg'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav-text'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'PSM', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav analysis'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n      ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav-text'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Analysis', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav design'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n      ', null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_13, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav-text'), null);
        this._text_16 = this.renderer.createText(this._el_15, 'Design', null);
        this._text_17 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_18 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav development'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n      ', null);
        this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_19, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav-text'), null);
        this._text_22 = this.renderer.createText(this._el_21, 'Development', null);
        this._text_23 = this.renderer.createText(this._el_19, '\n    ', null);
        this._text_24 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_25 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav evaluation'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n      ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_25, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nav-text'), null);
        this._text_28 = this.renderer.createText(this._el_27, 'Evaluation', null);
        this._text_29 = this.renderer.createText(this._el_25, '\n    ', null);
        this._text_30 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n', null);
        this._text_32 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_7, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_7));
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_13, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_13));
        var disposable_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_19, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_19));
        var disposable_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_25, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_25));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_NavComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_33 = this.context.landing;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_0, 'landing', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = this.context.open;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setElementClass(this._el_0, 'open', currVal_34);
            this._expr_34 = currVal_34;
        }
    };
    View_NavComponent0.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.toggleOpen() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NavComponent0.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.navTo(0, $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NavComponent0.prototype.handleEvent_13 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.navTo(1, $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NavComponent0.prototype.handleEvent_19 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.navTo(2, $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_NavComponent0.prototype.handleEvent_25 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.navTo(3, $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_NavComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/nav.component.ngfactory.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.nav.analysis[_ngcontent-%COMP%] {\n  background-color: #BB6BD9;\n  top: -0.25rem;\n  left: -0.40625rem; }\n  .landing[_ngcontent-%COMP%]   .nav.analysis[_ngcontent-%COMP%] {\n    top: -0.5rem;\n    left: -0.8125rem; }\n  .landing.open[_ngcontent-%COMP%]   .nav.analysis[_ngcontent-%COMP%] {\n    left: -8.75rem;\n    top: -10rem;\n    border: 4px solid #a842cf; }\n  .open[_ngcontent-%COMP%]   .nav.analysis[_ngcontent-%COMP%] {\n    left: 1.75rem;\n    top: -5.5rem; }\n\n.nav.design[_ngcontent-%COMP%] {\n  background-color: #09c;\n  top: -0.40625rem;\n  left: 0.25rem; }\n  .landing[_ngcontent-%COMP%]   .nav.design[_ngcontent-%COMP%] {\n    top: -0.8125rem;\n    left: 0.5rem; }\n  .landing.open[_ngcontent-%COMP%]   .nav.design[_ngcontent-%COMP%] {\n    left: 10rem;\n    top: -8.75rem;\n    border: 4px solid #007399; }\n  .open[_ngcontent-%COMP%]   .nav.design[_ngcontent-%COMP%] {\n    left: 5rem;\n    top: -2.25rem; }\n\n.nav.development[_ngcontent-%COMP%] {\n  background-color: #00e25e;\n  top: 0.25rem;\n  left: 0.40625rem; }\n  .landing[_ngcontent-%COMP%]   .nav.development[_ngcontent-%COMP%] {\n    top: 0.5rem;\n    left: 0.8125rem; }\n  .landing.open[_ngcontent-%COMP%]   .nav.development[_ngcontent-%COMP%] {\n    left: 8.75rem;\n    top: 10rem;\n    border: 4px solid #00af49; }\n  .open[_ngcontent-%COMP%]   .nav.development[_ngcontent-%COMP%] {\n    left: 5rem;\n    top: 2.25rem; }\n\n.nav.evaluation[_ngcontent-%COMP%] {\n  background-color: #fbc02d;\n  top: 0.40625rem;\n  left: -0.25rem; }\n  .landing[_ngcontent-%COMP%]   .nav.evaluation[_ngcontent-%COMP%] {\n    top: 0.8125rem;\n    left: -0.5rem; }\n  .landing.open[_ngcontent-%COMP%]   .nav.evaluation[_ngcontent-%COMP%] {\n    left: -8.75rem;\n    top: 10rem;\n    border: 4px solid #f0ad05; }\n  .open[_ngcontent-%COMP%]   .nav.evaluation[_ngcontent-%COMP%] {\n    left: 1.75rem;\n    top: 5.5rem; }\n\n.nav[_ngcontent-%COMP%] {\n  mix-blend-mode: multiply;\n  width: 5rem;\n  height: 5rem;\n  border-radius: 5rem;\n  z-index: 1;\n  -webkit-transition: all ease-in-out 0.84s, top cubic-bezier(0.5, 1.5, 0.5, 1) 0.84s, left cubic-bezier(0.5, 1.5, 0.5, 1) 0.84s, color ease-in-out 0.28s;\n  transition: all ease-in-out 0.84s, top cubic-bezier(0.5, 1.5, 0.5, 1) 0.84s, left cubic-bezier(0.5, 1.5, 0.5, 1) 0.84s, color ease-in-out 0.28s; }\n  .nav[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n    position: absolute;\n    color: inherit;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    font-size: 0.75rem;\n    -webkit-transition: font-size ease-in-out 0.84s;\n    transition: font-size ease-in-out 0.84s; }\n  .nav[_ngcontent-%COMP%]:not(.bg) {\n    position: absolute;\n    color: black; }\n    .nav[_ngcontent-%COMP%]:not(.bg)   .nav-text[_ngcontent-%COMP%] {\n      opacity: 0;\n      -webkit-transition: opacity 0.84s ease-in-out, font-size 0.84s ease-in-out;\n      transition: opacity 0.84s ease-in-out, font-size 0.84s ease-in-out; }\n      .open[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:not(.bg)   .nav-text[_ngcontent-%COMP%] {\n        opacity: 1; }\n  .nav.bg[_ngcontent-%COMP%] {\n    position: relative;\n    margin-left: 1rem;\n    color: white; }\n    .open[_ngcontent-%COMP%]   .nav.bg[_ngcontent-%COMP%] {\n      border: .3125rem solid #eee;\n      color: black; }\n    .nav.bg[_ngcontent-%COMP%]    > .nav-text[_ngcontent-%COMP%] {\n      font-size: 1.25rem; }\n  .nav-container[_ngcontent-%COMP%] {\n    z-index: 20;\n    -webkit-transition: all .86s ease-in-out;\n    transition: all .86s ease-in-out;\n    position: fixed;\n    top: 50%;\n    left: 0;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%); }\n    .nav-container.landing[_ngcontent-%COMP%] {\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      left: 50%;\n      position: absolute; }\n\n.landing[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: 10rem;\n  border-radius: 10rem; }\n  .landing[_ngcontent-%COMP%]   .nav.bg[_ngcontent-%COMP%] {\n    margin-left: 0; }\n    .landing[_ngcontent-%COMP%]   .nav.bg[_ngcontent-%COMP%]    > .nav-text[_ngcontent-%COMP%] {\n      font-size: 2.5rem; }\n  .landing[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n    font-size: 1.5rem; }\n\n.nav-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  z-index: 2; }'];
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/nav.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgFor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgFor = (function () {
    function Wrapper_NgFor(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__["a" /* NgFor */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgFor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgFor.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgFor.prototype.check_ngForOf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngForOf = currValue;
            this._changes['ngForOf'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTrackBy = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.ngForTrackBy = currValue;
            this._changes['ngForTrackBy'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTemplate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.ngForTemplate = currValue;
            this._changes['ngForTemplate'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_NgFor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgFor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgFor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgFor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgFor;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/ng_for.ngfactory.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgIf; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgIf = (function () {
    function Wrapper_NgIf(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__["a" /* NgIf */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgIf.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgIf.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgIf.prototype.check_ngIf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngIf = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgIf.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgIf.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgIf.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgIf.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgIf;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/ng_if.ngfactory.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_test_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/app.module.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/menu.component.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: 'app-test',
            templateUrl: './test.component.html',
            styleUrls: ['./test.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/test.component.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/environment.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-psm/src/polyfills.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(268);


/***/ }

},[509]);
//# sourceMappingURL=main.bundle.map