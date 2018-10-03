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
        return $.select('form').title = 'foo';
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
        return (React.createElement("div", { "data-axis": axial_1.axis('form', this) },
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
var lastAxis;
var rootAxis;
function axis(id, component) {
    var componentModel = component.$;
    if (lastAxis) {
        console.log("sub-axis: \"" + lastAxis.__id + "." + id + "\"");
        lastAxis.__axises[id] = componentModel;
    }
    else {
        console.log("root-axis: \"" + id + "\"");
        rootAxis = componentModel;
    }
    lastAxis = componentModel;
    lastAxis.__axises = lastAxis.__axises || {};
    lastAxis.__id = id;
}
exports.axis = axis;
function root() {
    return rootAxis;
}
exports.root = root;
;
function select(selector) {
    var parts = selector.split('.');
    var ref = rootAxis;
    for (var i = 1; i < parts.length; i++) {
        var part = parts[i];
        ref = ref.__axises[part];
    }
    return ref;
}
exports.select = select;
;


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
var axial_1 = __webpack_require__(5);
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
    AbstractModel.prototype.select = function (selector) {
        return axial_1.select(selector);
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
        return React.createElement("label", { "data-axis": axial_1.axis('input', this) },
            this.$.label,
            React.createElement("input", { type: "text", defaultValue: this.$.text }));
    };
    return InputComponent;
}(axial_1.Component));
exports.InputComponent = InputComponent;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9heGlhbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxubGV0IGMgPSAwO1xuXG5SZWFjdERPTS5yZW5kZXIoKFxuIDxGb3JtQ29tcG9uZW50IHRpdGxlPVwidGhlIGZvcm1cIiBvbkNsaWNrPXsoeyAkIH0pID0+ICQuc2VsZWN0KCdmb3JtJykudGl0bGUgPSAnZm9vJ30gLz5cbiksIGNvbnRhaW5lcik7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsImV4cG9ydCAqIGZyb20gJy4vZm9ybSc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEhhbmRsZXIsIGF4aXMgfSBmcm9tICcuLi9heGlhbCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Db21wb25lbnRQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBvbkNsaWNrPzogRXZlbnRIYW5kbGVyO1xufVxuXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxGb3JtQ29tcG9uZW50UHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLWF4aXM9e2F4aXMoJ2Zvcm0nLCB0aGlzKX0+XG4gICAgICAgIDxoMT57IHRoaXMuJC50aXRsZSB9PC9oMT5cbiAgICAgICAgPElucHV0Q29tcG9uZW50IGxhYmVsPVwiaW5mb1wiIHRleHQ9XCJpbnB1dCB2YWx1ZVwiIC8+XG4gICAgICAgIDxCdXR0b25Db21wb25lbnQgdGV4dD1cIlN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuZW1pdCh0aGlzLnByb3BzLm9uQ2xpY2spfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuXG5sZXQgbGFzdEF4aXM7XG5sZXQgcm9vdEF4aXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzIChpZCwgY29tcG9uZW50KSB7XG4gIGNvbnN0IGNvbXBvbmVudE1vZGVsID0gY29tcG9uZW50LiQ7XG4gIGlmIChsYXN0QXhpcykge1xuICAgIGNvbnNvbGUubG9nKGBzdWItYXhpczogXCIke2xhc3RBeGlzLl9faWR9LiR7aWR9XCJgKTtcbiAgICBsYXN0QXhpcy5fX2F4aXNlc1tpZF0gPSBjb21wb25lbnRNb2RlbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgcm9vdC1heGlzOiBcIiR7aWR9XCJgKTtcbiAgICByb290QXhpcyA9IGNvbXBvbmVudE1vZGVsO1xuICB9XG4gIGxhc3RBeGlzID0gY29tcG9uZW50TW9kZWw7XG4gIGxhc3RBeGlzLl9fYXhpc2VzID0gbGFzdEF4aXMuX19heGlzZXMgfHwge307XG4gIGxhc3RBeGlzLl9faWQgPSBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvb3QgKCkge1xuICByZXR1cm4gcm9vdEF4aXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0IChzZWxlY3Rvcikge1xuICBjb25zdCBwYXJ0cyA9IHNlbGVjdG9yLnNwbGl0KCcuJyk7XG4gIGxldCByZWYgPSByb290QXhpcztcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICByZWYgPSByZWYuX19heGlzZXNbcGFydF07XG4gIH1cbiAgcmV0dXJuIHJlZjtcbn07IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWJzdHJhY3RNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFN0YXRlIHtcbiAgLy8gdG9kby4uLlxufTtcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxQcm9wcz4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIENvbXBvbmVudFN0YXRlPiB7XG4gIHN0YXRpYyBNb2RlbDogdHlwZW9mIEFic3RyYWN0TW9kZWw7XG5cbiAgJDogYW55O1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vZGVsID0gbmV3IEFic3RyYWN0TW9kZWwocHJvcHMpO1xuICAgIG1vZGVsLmFkZExpc3RlbmVyKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2tleV06IHZhbHVlLFxuICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLiQgPSBtb2RlbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj48L2Rpdj47XG4gIH1cblxuICBlbWl0IChmbikge1xuICAgIGlmICghZm4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKGUpID0+IGZuKHsgLi4uZSwgJDogdGhpcy4kIH0pO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlciA9IChlOiBhbnkpID0+IHZvaWQ7IiwiaW1wb3J0IHsgcm9vdCwgc2VsZWN0IH0gZnJvbSAnLi4vYXhpYWwnO1xuXG5leHBvcnQgdHlwZSBNb2RlbENoYW5nZUhhbmRsZXIgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHByZXZpb3VzVmFsdWU6IGFueSkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RNb2RlbCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0cz86IGFueTtcbiAgcHVibGljIHN0YXRlOiBhbnk7XG4gIHByaXZhdGUgbGlzdGVuZXJzOiBNb2RlbENoYW5nZUhhbmRsZXJbXTtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBjb25zdCBzZWxmOiBhbnkgPSB0aGlzO1xuICAgIGNvbnN0IENsYXNzOiBhbnkgPSBzZWxmLl9fcHJvdG9fXy5jb25zdHJ1Y3RvcjtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuZGVmYXVsdHMgPSBwcm9wcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIgKGhhbmRsZXI6IE1vZGVsQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdHM7XG4gICAgZm9yIChsZXQga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICAgICAgPyB0aGlzLnN0YXRlW2tleV1cbiAgICAgICAgICAgIDogZGVmYXVsdHNba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGhhbmRsZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoa2V5LCB0aGlzW2tleV0sIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0IChzZWxlY3Rvcikge1xuICAgIHJldHVybiBzZWxlY3Qoc2VsZWN0b3IpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSAoZGVmYXVsdHMpIHtcbiAgICBjb25zdCBNb2RlbCA9ICh0aGlzIGFzIGFueSk7XG4gICAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoZGVmYXVsdHMpO1xuICAgIG1vZGVsLmluaXQoKTtcbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2F4aWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Db21wb25lbnRQcm9wcyB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiBFdmVudEhhbmRsZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8QnV0dG9uQ29tcG9uZW50UHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVtaXQodGhpcy5wcm9wcy5vbkNsaWNrKX0+e3RoaXMuJC50ZXh0fTwvYnV0dG9uPjtcbiAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbXBvbmVudCwgYXhpcyB9IGZyb20gJy4uL2F4aWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dENvbXBvbmVudF9Qcm9wcyB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQ8SW5wdXRDb21wb25lbnRfUHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPGxhYmVsIGRhdGEtYXhpcz17YXhpcygnaW5wdXQnLCB0aGlzKX0+e3RoaXMuJC5sYWJlbH08aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuJC50ZXh0fSAvPjwvbGFiZWw+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==