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
ReactDOM.render((React.createElement(ui_1.ButtonComponent, { text: "abc" })), container);


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
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonComponent.prototype.render = function () {
        return React.createElement("button", null, this.model.text);
    };
    return ButtonComponent;
}(abstract_1.AbstractComponent));
exports.ButtonComponent = ButtonComponent;


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
var models_1 = __webpack_require__(6);
var Models = {
    ButtonModel: models_1.ButtonModel,
};
;
var AbstractComponent = /** @class */ (function (_super) {
    __extends(AbstractComponent, _super);
    function AbstractComponent(props) {
        var _this = _super.call(this, props) || this;
        var modelName = _this.__proto__.constructor.name.replace(/Component$/, 'Model');
        var Model = Models[modelName];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvYWJzdHJhY3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9hYnN0cmFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7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Q0gsb0JBQUM7QUFBRCxDQUFDO0FBcERZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQix3Q0FBMkM7QUFFM0M7SUFBaUMsK0JBQWE7SUFBOUM7UUFBQSxxRUFFQztRQURDLFVBQUksR0FBRyxXQUFXLENBQUM7O0lBQ3JCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQ0FGZ0Msd0JBQWEsR0FFN0M7QUFGWSxrQ0FBVztBQUV2QixDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aSc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5SZWFjdERPTS5yZW5kZXIoKFxuIDxCdXR0b25Db21wb25lbnQgdGV4dD1cImFiY1wiPjwvQnV0dG9uQ29tcG9uZW50PiBcbiksIGNvbnRhaW5lcik7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsImV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4vYWJzdHJhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkNvbXBvbmVudFByb3BzIHtcbiAgdGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50PEJ1dHRvbkNvbXBvbmVudFByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxidXR0b24+e3RoaXMubW9kZWwudGV4dH08L2J1dHRvbj47XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBBYnN0cmFjdE1vZGVsLFxuICBCdXR0b25Nb2RlbCxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuY29uc3QgTW9kZWxzID0ge1xuICBCdXR0b25Nb2RlbCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWJzdHJhY3RDb21wb25lbnRTdGF0ZSB7XG4gIC8vIHRvZG8uLi5cbn07XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdENvbXBvbmVudDxQcm9wcz4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIEFic3RyYWN0Q29tcG9uZW50U3RhdGU+IHtcbiAgc3RhdGljIE1vZGVsOiB0eXBlb2YgQWJzdHJhY3RNb2RlbDtcblxuICBtb2RlbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vZGVsTmFtZSA9ICh0aGlzIGFzIGFueSkuX19wcm90b19fLmNvbnN0cnVjdG9yLm5hbWUucmVwbGFjZSgvQ29tcG9uZW50JC8sICdNb2RlbCcpO1xuICAgIGNvbnN0IE1vZGVsID0gTW9kZWxzW21vZGVsTmFtZV07XG4gICAgY29uc3QgbW9kZWw6IEFic3RyYWN0TW9kZWwgPSBNb2RlbC5jcmVhdGUocHJvcHMpO1xuICAgIG1vZGVsLmFkZExpc3RlbmVyKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnIScsIGtleSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj48L2Rpdj47XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgaW5mbykge1xuICAgIC8vIERpc3BsYXkgZmFsbGJhY2sgVUlcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3I6IHRydWUgfSk7XG4gICAgLy8gWW91IGNhbiBhbHNvIGxvZyB0aGUgZXJyb3IgdG8gYW4gZXJyb3IgcmVwb3J0aW5nIHNlcnZpY2VcbiAgICBjb25zb2xlLmxvZyhlcnJvciwgaW5mbyk7XG4gIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2Fic3RyYWN0JztcbmV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJzsiLCJleHBvcnQgdHlwZSBIYW5kbGVyID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBwcmV2aW91c1ZhbHVlOiBhbnkpID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIEFic3RyYWN0TW9kZWwge1xuICBwcm90ZWN0ZWQgZGVmYXVsdHM/OiBhbnk7XG4gIHB1YmxpYyBzdGF0ZTogYW55O1xuICBwcml2YXRlIGxpc3RlbmVyczogSGFuZGxlcltdO1xuXG4gIGNvbnN0cnVjdG9yIChkZWZhdWx0czoge30gPSB7fSkge1xuICAgIGNvbnN0IHNlbGY6IGFueSA9IHRoaXM7XG4gICAgY29uc3QgQ2xhc3M6IGFueSA9IHNlbGYuX19wcm90b19fLmNvbnN0cnVjdG9yO1xuICAgIGNvbnNvbGUubG9nKGBOZXcgXCIke0NsYXNzLm5hbWV9XCJgKTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuZGVmYXVsdHMgPSBkZWZhdWx0cztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4uZGVmYXVsdHNcbiAgICB9O1xuICB9XG5cbiAgYWRkTGlzdGVuZXIgKGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRzO1xuICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgLy8gY29uc29sZS5sb2coYFwiJHtrZXl9XCI6ICR7SlNPTi5zdHJpbmdpZnkoZGVmYXVsdHNba2V5XSl9YCk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGVba2V5XVxuICAgICAgICAgICAgOiBkZWZhdWx0c1trZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICBmb3IgKGxldCBoYW5kbGVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGtleSwgdmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbJyArIGtleSArICddICcgKyB0aGlzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUgKGRlZmF1bHRzKSB7XG4gICAgY29uc3QgTW9kZWwgPSAodGhpcyBhcyBhbnkpO1xuICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKGRlZmF1bHRzKTtcbiAgICBtb2RlbC5pbml0KCk7XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59IiwiaW1wb3J0IHsgQWJzdHJhY3RNb2RlbCB9IGZyb20gJy4vYWJzdHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uTW9kZWwgZXh0ZW5kcyBBYnN0cmFjdE1vZGVsIHtcbiAgdGV4dCA9ICdzb21lLXRleHQnO1xufTsiXSwic291cmNlUm9vdCI6IiJ9