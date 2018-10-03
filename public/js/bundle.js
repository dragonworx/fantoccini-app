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
var ui_1 = __webpack_require__(3);
var container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render((React.createElement(ui_1.ButtonComponent, null)), container);


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
var abstract_1 = __webpack_require__(5);
var models_1 = __webpack_require__(6);
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonComponent.prototype.render = function () {
        return (React.createElement("button", null, this.model.text));
    };
    ButtonComponent.Model = models_1.ButtonModel;
    return ButtonComponent;
}(abstract_1.AbstractComponent));
exports.ButtonComponent = ButtonComponent;
;


/***/ }),
/* 5 */
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
;
var AbstractComponent = /** @class */ (function (_super) {
    __extends(AbstractComponent, _super);
    function AbstractComponent(props) {
        var _this = _super.call(this, props) || this;
        var Model = _this.__proto__.constructor.Model;
        var model = Model.create(props);
        model.addListener(function (key, value) {
            console.log('!', key, value);
        });
        _this.model = model;
        return _this;
    }
    AbstractComponent.prototype.render = function () {
        return React.createElement("div", { className: "container" });
    };
    AbstractComponent.prototype.componentDidCatch = function (error, info) {
        // Display fallback UI
        // this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        console.log(error, info);
    };
    return AbstractComponent;
}(React.Component));
exports.AbstractComponent = AbstractComponent;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(8));


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
    function AbstractModel(defaults) {
        if (defaults === void 0) { defaults = {}; }
        var self = this;
        var Class = self.__proto__.constructor;
        console.log("New \"" + Class.name + "\"");
        this.listeners = [];
        this.defaults = defaults;
        this.state = __assign({}, defaults);
    }
    AbstractModel.prototype.addListener = function (handler) {
        this.listeners.push(handler);
    };
    AbstractModel.prototype.init = function () {
        var defaults = this.defaults;
        var _loop_1 = function (key) {
            // console.log(`"${key}": ${JSON.stringify(defaults[key])}`);
            Object.defineProperty(this_1, key, {
                get: function () {
                    return this.state.hasOwnProperty(key)
                        ? this.state[key]
                        : defaults[key];
                },
                set: function (value) {
                    var previousValue = this.state[key];
                    this.state[key] = value;
                    for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                        var handler = _a[_i];
                        handler(key, value, previousValue);
                    }
                }
            });
            for (var key_1 in this_1.state) {
                console.log('[' + key_1 + '] ' + this_1[key_1]);
            }
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
var abstract_1 = __webpack_require__(7);
var ButtonModel = /** @class */ (function (_super) {
    __extends(ButtonModel, _super);
    function ButtonModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = 'some-text';
        return _this;
    }
    return ButtonModel;
}(abstract_1.AbstractModel));
exports.ButtonModel = ButtonModel;
;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvYWJzdHJhY3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9hYnN0cmFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7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UUFEQyxVQUFJLEdBQUcsV0FBVyxDQUFDOztJQUNyQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLENBRmdDLHdCQUFhLEdBRTdDO0FBRlksa0NBQVc7QUFFdkIsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdWknO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuUmVhY3RET00ucmVuZGVyKChcbiA8QnV0dG9uQ29tcG9uZW50PjwvQnV0dG9uQ29tcG9uZW50PiBcbiksIGNvbnRhaW5lcik7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsImV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4vYWJzdHJhY3QnO1xuaW1wb3J0IHsgQnV0dG9uTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG4gIHN0YXRpYyBNb2RlbCA9IEJ1dHRvbk1vZGVsO1xuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24+e3RoaXMubW9kZWwudGV4dH08L2J1dHRvbj5cbiAgICApO1xuICB9XG59OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFic3RyYWN0TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0Q29tcG9uZW50U3RhdGUge1xuICAvLyB0b2RvLi4uXG59O1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBBYnN0cmFjdENvbXBvbmVudFN0YXRlPiB7XG4gIHN0YXRpYyBNb2RlbDogdHlwZW9mIEFic3RyYWN0TW9kZWw7XG5cbiAgbW9kZWw6IGFueTtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBNb2RlbCA9ICh0aGlzIGFzIGFueSkuX19wcm90b19fLmNvbnN0cnVjdG9yLk1vZGVsO1xuICAgIGNvbnN0IG1vZGVsOiBBYnN0cmFjdE1vZGVsID0gTW9kZWwuY3JlYXRlKHByb3BzKTtcbiAgICBtb2RlbC5hZGRMaXN0ZW5lcigoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJyEnLCBrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+PC9kaXY+O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGluZm8pIHtcbiAgICAvLyBEaXNwbGF5IGZhbGxiYWNrIFVJXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiB0cnVlIH0pO1xuICAgIC8vIFlvdSBjYW4gYWxzbyBsb2cgdGhlIGVycm9yIHRvIGFuIGVycm9yIHJlcG9ydGluZyBzZXJ2aWNlXG4gICAgY29uc29sZS5sb2coZXJyb3IsIGluZm8pO1xuICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9hYnN0cmFjdCc7XG5leHBvcnQgKiBmcm9tICcuL2J1dHRvbic7IiwiZXhwb3J0IHR5cGUgSGFuZGxlciA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgcHJldmlvdXNWYWx1ZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdE1vZGVsIHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRzPzogYW55O1xuICBwdWJsaWMgc3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IEhhbmRsZXJbXTtcblxuICBjb25zdHJ1Y3RvciAoZGVmYXVsdHM6IHt9ID0ge30pIHtcbiAgICBjb25zdCBzZWxmOiBhbnkgPSB0aGlzO1xuICAgIGNvbnN0IENsYXNzOiBhbnkgPSBzZWxmLl9fcHJvdG9fXy5jb25zdHJ1Y3RvcjtcbiAgICBjb25zb2xlLmxvZyhgTmV3IFwiJHtDbGFzcy5uYW1lfVwiYCk7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLmRlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLmRlZmF1bHRzXG4gICAgfTtcbiAgfVxuXG4gIGFkZExpc3RlbmVyIChoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0cztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBcIiR7a2V5fVwiOiAke0pTT04uc3RyaW5naWZ5KGRlZmF1bHRzW2tleV0pfWApO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICAgICAgPyB0aGlzLnN0YXRlW2tleV1cbiAgICAgICAgICAgIDogZGVmYXVsdHNba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICAgICAgaGFuZGxlcihrZXksIHZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnWycgKyBrZXkgKyAnXSAnICsgdGhpc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlIChkZWZhdWx0cykge1xuICAgIGNvbnN0IE1vZGVsID0gKHRoaXMgYXMgYW55KTtcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbChkZWZhdWx0cyk7XG4gICAgbW9kZWwuaW5pdCgpO1xuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufSIsImltcG9ydCB7IEFic3RyYWN0TW9kZWwgfSBmcm9tICcuL2Fic3RyYWN0JztcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZGVsIGV4dGVuZHMgQWJzdHJhY3RNb2RlbCB7XG4gIHRleHQgPSAnc29tZS10ZXh0Jztcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==