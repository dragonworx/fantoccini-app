/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(2);
var components_1 = __webpack_require__(3);
var container = document.createElement('div');
document.body.appendChild(container);
var c = 0;
ReactDOM.render((React.createElement(components_1.FormComponent, { title: "the form", onClick: function (_a) {
        var $ = _a.$;
        return console.log("!!!");
    } })), container);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var axial_1 = __webpack_require__(5);
var button_1 = __webpack_require__(8);
var input_1 = __webpack_require__(9);
var FormComponent = /** @class */ (function (_super) {
    __extends(FormComponent, _super);
    function FormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, this.$.title),
            React.createElement(input_1.InputComponent, { label: "info", text: "input value" }),
            React.createElement(button_1.ButtonComponent, { text: "Submit", onClick: this.emit(this.props.onClick) })));
    };
    return FormComponent;
}(axial_1.Component));
exports.FormComponent = FormComponent;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(7));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var model_1 = __webpack_require__(7);
;
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component(props) {
        var _this = _super.call(this, props) || this;
        var model = new model_1.AbstractModel(props);
        model.addListener(function (key, value) {
            var _a;
            _this.setState((_a = {},
                _a[key] = value,
                _a));
        });
        _this.$ = model;
        return _this;
    }
    Component.prototype.render = function () {
        return React.createElement("div", { className: "container" });
    };
    Component.prototype.emit = function (fn) {
        var _this = this;
        if (!fn) {
            return null;
        }
        return function (e) { return fn(__assign({}, e, { $: _this.$ })); };
    };
    return Component;
}(React.Component));
exports.Component = Component;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractModel = /** @class */ (function () {
    function AbstractModel(props) {
        var self = this;
        var Class = self.__proto__.constructor;
        this.listeners = [];
        this.defaults = props;
        this.state = __assign({}, props);
        this.init();
    }
    AbstractModel.prototype.addListener = function (handler) {
        this.listeners.push(handler);
    };
    AbstractModel.prototype.init = function () {
        var defaults = this.defaults;
        var _loop_1 = function (key) {
            Object.defineProperty(this_1, key, {
                get: function () {
                    return this.state.hasOwnProperty(key)
                        ? this.state[key]
                        : defaults[key];
                },
                set: function (value) {
                    var previousValue = this.state[key];
                    this.state[key] = value;
                    if (typeof value === 'undefined') {
                        delete this.state[key];
                    }
                    for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                        var handler = _a[_i];
                        handler(key, this[key], previousValue);
                    }
                }
            });
        };
        var this_1 = this;
        for (var key in defaults) {
            _loop_1(key);
        }
    };
    AbstractModel.create = function (defaults) {
        var Model = this;
        var model = new Model(defaults);
        model.init();
        return model;
    };
    return AbstractModel;
}());
exports.AbstractModel = AbstractModel;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var axial_1 = __webpack_require__(5);
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonComponent.prototype.render = function () {
        return React.createElement("button", { onClick: this.emit(this.props.onClick) }, this.$.text);
    };
    return ButtonComponent;
}(axial_1.Component));
exports.ButtonComponent = ButtonComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var axial_1 = __webpack_require__(5);
var InputComponent = /** @class */ (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputComponent.prototype.render = function () {
        return React.createElement("label", null,
            this.$.label,
            React.createElement("input", { type: "text", defaultValue: this.$.text }));
    };
    return InputComponent;
}(axial_1.Component));
exports.InputComponent = InputComponent;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9heGlhbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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QUFLLEdBQUksSUFBWSxDQUFDO1FBQzVCLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQztBQWpEWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMUIsbUNBQStCO0FBQy9CLHFDQUFtRDtBQU9uRDtJQUFxQyxtQ0FBK0I7SUFBcEU7O0lBSUEsQ0FBQztJQUhDLGdDQUFNLEdBQU47UUFDRSxPQUFPLGdDQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQVUsQ0FBQztJQUNoRixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLENBSm9DLGlCQUFTLEdBSTdDO0FBSlksMENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjVCLG1DQUErQjtBQUMvQixxQ0FBbUQ7QUFPbkQ7SUFBb0Msa0NBQStCO0lBQW5FOztJQUlBLENBQUM7SUFIQywrQkFBTSxHQUFOO1FBQ0UsT0FBTztZQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSztZQUFDLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFJLENBQVEsQ0FBQztJQUN2RixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLENBSm1DLGlCQUFTLEdBSTVDO0FBSlksd0NBQWMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5sZXQgYyA9IDA7XG5cblJlYWN0RE9NLnJlbmRlcigoXG4gPEZvcm1Db21wb25lbnQgdGl0bGU9XCJ0aGUgZm9ybVwiIG9uQ2xpY2s9eyh7ICQgfSkgPT4gY29uc29sZS5sb2coXCIhISFcIil9IC8+XG4pLCBjb250YWluZXIpOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiLCJleHBvcnQgKiBmcm9tICcuL2Zvcm0nOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vYXhpYWwnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0JztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQ29tcG9uZW50UHJvcHMge1xuICB0aXRsZT86IHN0cmluZztcbiAgb25DbGljaz86IEV2ZW50SGFuZGxlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8Rm9ybUNvbXBvbmVudFByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT57IHRoaXMuJC50aXRsZSB9PC9oMT5cbiAgICAgICAgPElucHV0Q29tcG9uZW50IGxhYmVsPVwiaW5mb1wiIHRleHQ9XCJpbnB1dCB2YWx1ZVwiIC8+XG4gICAgICAgIDxCdXR0b25Db21wb25lbnQgdGV4dD1cIlN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuZW1pdCh0aGlzLnByb3BzLm9uQ2xpY2spfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFic3RyYWN0TW9kZWwgfSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRTdGF0ZSB7XG4gIC8vIHRvZG8uLi5cbn07XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQ8UHJvcHM+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBDb21wb25lbnRTdGF0ZT4ge1xuICBzdGF0aWMgTW9kZWw6IHR5cGVvZiBBYnN0cmFjdE1vZGVsO1xuXG4gICQ6IGFueTtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBtb2RlbCA9IG5ldyBBYnN0cmFjdE1vZGVsKHByb3BzKTtcbiAgICBtb2RlbC5hZGRMaXN0ZW5lcigoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgdGhpcy4kID0gbW9kZWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+PC9kaXY+O1xuICB9XG5cbiAgZW1pdCAoZm4pIHtcbiAgICBpZiAoIWZuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChlKSA9PiBmbih7IC4uLmUsICQ6IHRoaXMuJCB9KTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFdmVudEhhbmRsZXIgPSAoZTogYW55KSA9PiB2b2lkOyIsImV4cG9ydCB0eXBlIE1vZGVsQ2hhbmdlSGFuZGxlciA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgcHJldmlvdXNWYWx1ZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdE1vZGVsIHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRzPzogYW55O1xuICBwdWJsaWMgc3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IE1vZGVsQ2hhbmdlSGFuZGxlcltdO1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIGNvbnN0IHNlbGY6IGFueSA9IHRoaXM7XG4gICAgY29uc3QgQ2xhc3M6IGFueSA9IHNlbGYuX19wcm90b19fLmNvbnN0cnVjdG9yO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5kZWZhdWx0cyA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5wcm9wc1xuICAgIH07XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBhZGRMaXN0ZW5lciAoaGFuZGxlcjogTW9kZWxDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0cztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGVba2V5XVxuICAgICAgICAgICAgOiBkZWZhdWx0c1trZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICAgICAgaGFuZGxlcihrZXksIHRoaXNba2V5XSwgcHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlIChkZWZhdWx0cykge1xuICAgIGNvbnN0IE1vZGVsID0gKHRoaXMgYXMgYW55KTtcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbChkZWZhdWx0cyk7XG4gICAgbW9kZWwuaW5pdCgpO1xuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vYXhpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkNvbXBvbmVudFByb3BzIHtcbiAgdGV4dD86IHN0cmluZztcbiAgb25DbGljaz86IEV2ZW50SGFuZGxlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxCdXR0b25Db21wb25lbnRQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZW1pdCh0aGlzLnByb3BzLm9uQ2xpY2spfT57dGhpcy4kLnRleHR9PC9idXR0b24+O1xuICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9heGlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDb21wb25lbnRfUHJvcHMge1xuICBsYWJlbD86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PElucHV0Q29tcG9uZW50X1Byb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxsYWJlbD57dGhpcy4kLmxhYmVsfTxpbnB1dCB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17dGhpcy4kLnRleHR9IC8+PC9sYWJlbD47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9