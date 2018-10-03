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
var c = 0;
ReactDOM.render((React.createElement(ui_1.ButtonComponent, { text: "abc", onClick: function (_a) {
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
var component_1 = __webpack_require__(5);
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonComponent.prototype.render = function () {
        return React.createElement("button", { onClick: this.emit(this.props.onClick) }, this.model.text);
    };
    return ButtonComponent;
}(component_1.AbstractComponent));
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
var model_1 = __webpack_require__(6);
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
/* 6 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7O0FDbEZBLG1DQUErQjtBQUMvQixzQ0FBcUM7QUFDckMsa0NBQWtEO0FBRWxELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FB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SUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDO0FBdERZLHNDQUFhIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91aSc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5sZXQgYyA9IDA7XG5cblJlYWN0RE9NLnJlbmRlcigoXG4gPEJ1dHRvbkNvbXBvbmVudCB0ZXh0PVwiYWJjXCIgb25DbGljaz17KHsgbW9kZWwgfSkgPT4gbW9kZWwudGV4dCA9IGMrK30gLz5cbiksIGNvbnRhaW5lcik7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsImV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbXBvbmVudCwgSGFuZGxlciB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uQ29tcG9uZW50UHJvcHMge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBvbkNsaWNrPzogSGFuZGxlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50PEJ1dHRvbkNvbXBvbmVudFByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17dGhpcy5lbWl0KHRoaXMucHJvcHMub25DbGljayl9Pnt0aGlzLm1vZGVsLnRleHR9PC9idXR0b24+O1xuICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWJzdHJhY3RNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0Q29tcG9uZW50U3RhdGUge1xuICAvLyB0b2RvLi4uXG59O1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDb21wb25lbnQ8UHJvcHM+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBBYnN0cmFjdENvbXBvbmVudFN0YXRlPiB7XG4gIHN0YXRpYyBNb2RlbDogdHlwZW9mIEFic3RyYWN0TW9kZWw7XG5cbiAgbW9kZWw6IGFueTtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBtb2RlbCA9IG5ldyBBYnN0cmFjdE1vZGVsKHByb3BzKTtcbiAgICBtb2RlbC5hZGRMaXN0ZW5lcigoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYG9uOiBcIiR7a2V5fVwiOiAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1gKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBba2V5XTogdmFsdWUsXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj48L2Rpdj47XG4gIH1cblxuICBlbWl0IChmbikge1xuICAgIGlmICghZm4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKGUpID0+IGZuKHsgLi4uZSwgbW9kZWw6IHRoaXMubW9kZWwgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSGFuZGxlciA9IChlOiBhbnkpID0+IHZvaWQ7IiwiZXhwb3J0IHR5cGUgSGFuZGxlciA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgcHJldmlvdXNWYWx1ZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdE1vZGVsIHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRzPzogYW55O1xuICBwdWJsaWMgc3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IEhhbmRsZXJbXTtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBjb25zdCBzZWxmOiBhbnkgPSB0aGlzO1xuICAgIGNvbnN0IENsYXNzOiBhbnkgPSBzZWxmLl9fcHJvdG9fXy5jb25zdHJ1Y3RvcjtcbiAgICBjb25zb2xlLmxvZyhgPT4gJHtDbGFzcy5uYW1lfWApO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5kZWZhdWx0cyA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5wcm9wc1xuICAgIH07XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBhZGRMaXN0ZW5lciAoaGFuZGxlcjogSGFuZGxlcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdHM7XG4gICAgZm9yIChsZXQga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICAgICAgPyB0aGlzLnN0YXRlW2tleV1cbiAgICAgICAgICAgIDogZGVmYXVsdHNba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGhhbmRsZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoa2V5LCB0aGlzW2tleV0sIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBpbml0OiBcIiR7a2V5fVwiOiAke3RoaXNba2V5XX1gKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlIChkZWZhdWx0cykge1xuICAgIGNvbnN0IE1vZGVsID0gKHRoaXMgYXMgYW55KTtcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbChkZWZhdWx0cyk7XG4gICAgbW9kZWwuaW5pdCgpO1xuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=