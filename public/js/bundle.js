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
ReactDOM.render((React.createElement(components_1.ButtonComponent, { text: "abc", onClick: function (_a) {
        var model = _a.model;
        return model.text = c++;
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
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonComponent.prototype.render = function () {
        return React.createElement("button", { onClick: this.emit(this.props.onClick) }, this.model.text);
    };
    return ButtonComponent;
}(axial_1.AbstractComponent));
exports.ButtonComponent = ButtonComponent;


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
var AbstractComponent = /** @class */ (function (_super) {
    __extends(AbstractComponent, _super);
    function AbstractComponent(props) {
        var _this = _super.call(this, props) || this;
        var model = new model_1.AbstractModel(props);
        model.addListener(function (key, value) {
            var _a;
            console.log("on: \"" + key + "\": " + JSON.stringify(value));
            _this.setState((_a = {},
                _a[key] = value,
                _a));
        });
        _this.model = model;
        return _this;
    }
    AbstractComponent.prototype.render = function () {
        return React.createElement("div", { className: "container" });
    };
    AbstractComponent.prototype.emit = function (fn) {
        var _this = this;
        if (!fn) {
            return null;
        }
        return function (e) { return fn(__assign({}, e, { model: _this.model })); };
    };
    return AbstractComponent;
}(React.Component));
exports.AbstractComponent = AbstractComponent;


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
        console.log("=> " + Class.name);
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
        for (var key in this.state) {
            console.log("init: \"" + key + "\": " + this[key]);
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2F4aWFsL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9heGlhbC9jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9heGlhbC9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7O0FDbEZBLG1DQUErQjtBQUMvQixzQ0FBcUM7QUFDckMsMENBQStDO0FBRS9DLElBQU0s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QUFNLEdBQWIsVUFBZSxRQUFRO1FBQ3JCLElBQU0sS0FBSyxHQUFJLElBQVksQ0FBQztRQUM1QixJQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDYixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7QUF0RFksc0NBQWEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbmxldCBjID0gMDtcblxuUmVhY3RET00ucmVuZGVyKChcbiA8QnV0dG9uQ29tcG9uZW50IHRleHQ9XCJhYmNcIiBvbkNsaWNrPXsoeyBtb2RlbCB9KSA9PiBtb2RlbC50ZXh0ID0gYysrfSAvPlxuKSwgY29udGFpbmVyKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007IiwiZXhwb3J0ICogZnJvbSAnLi9idXR0b24nOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFic3RyYWN0Q29tcG9uZW50LCBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9heGlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uQ29tcG9uZW50UHJvcHMge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBvbkNsaWNrPzogRXZlbnRIYW5kbGVyO1xufVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQ8QnV0dG9uQ29tcG9uZW50UHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVtaXQodGhpcy5wcm9wcy5vbkNsaWNrKX0+e3RoaXMubW9kZWwudGV4dH08L2J1dHRvbj47XG4gIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBYnN0cmFjdE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWJzdHJhY3RDb21wb25lbnRTdGF0ZSB7XG4gIC8vIHRvZG8uLi5cbn07XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdENvbXBvbmVudDxQcm9wcz4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIEFic3RyYWN0Q29tcG9uZW50U3RhdGU+IHtcbiAgc3RhdGljIE1vZGVsOiB0eXBlb2YgQWJzdHJhY3RNb2RlbDtcblxuICBtb2RlbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vZGVsID0gbmV3IEFic3RyYWN0TW9kZWwocHJvcHMpO1xuICAgIG1vZGVsLmFkZExpc3RlbmVyKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgb246IFwiJHtrZXl9XCI6ICR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjwvZGl2PjtcbiAgfVxuXG4gIGVtaXQgKGZuKSB7XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoZSkgPT4gZm4oeyAuLi5lLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBFdmVudEhhbmRsZXIgPSAoZTogYW55KSA9PiB2b2lkOyIsImV4cG9ydCB0eXBlIE1vZGVsQ2hhbmdlSGFuZGxlciA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgcHJldmlvdXNWYWx1ZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdE1vZGVsIHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRzPzogYW55O1xuICBwdWJsaWMgc3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IE1vZGVsQ2hhbmdlSGFuZGxlcltdO1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIGNvbnN0IHNlbGY6IGFueSA9IHRoaXM7XG4gICAgY29uc3QgQ2xhc3M6IGFueSA9IHNlbGYuX19wcm90b19fLmNvbnN0cnVjdG9yO1xuICAgIGNvbnNvbGUubG9nKGA9PiAke0NsYXNzLm5hbWV9YCk7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLmRlZmF1bHRzID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGFkZExpc3RlbmVyIChoYW5kbGVyOiBNb2RlbENoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRzO1xuICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KGtleSlcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZVtrZXldXG4gICAgICAgICAgICA6IGRlZmF1bHRzW2tleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBoYW5kbGVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGtleSwgdGhpc1trZXldLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgaW5pdDogXCIke2tleX1cIjogJHt0aGlzW2tleV19YCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSAoZGVmYXVsdHMpIHtcbiAgICBjb25zdCBNb2RlbCA9ICh0aGlzIGFzIGFueSk7XG4gICAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoZGVmYXVsdHMpO1xuICAgIG1vZGVsLmluaXQoKTtcbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9