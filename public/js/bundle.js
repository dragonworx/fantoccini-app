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
ReactDOM.render((React.createElement(components_1.App, null,
    React.createElement(components_1.FormComponent, { title: "the form", onClick: function (_a) {
            var $ = _a.$;
            $.select('form').title = $.select('form.input').text;
        } }))), container);


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
__export(__webpack_require__(10));


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
        return (React.createElement(axial_1.Axis, { id: "form", component: this },
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
var lastAxis;
var rootAxis;
var axisPaths = {};
function enterAxis(id, component) {
    var componentModel = component.$;
    if (lastAxis) {
        lastAxis.__axises[id] = componentModel;
        componentModel.__path = lastAxis.__path + "." + id;
        console.log("sub-axis ~ id: \"" + id + "\" path: \"" + componentModel.__path + "\"");
    }
    else {
        rootAxis = componentModel;
        componentModel.__path = id;
        console.log("root-axis ~ id: \"" + id + "\" path: \"" + componentModel.__path + "\"");
    }
    lastAxis = componentModel;
    lastAxis.__axises = lastAxis.__axises || {};
    lastAxis.__id = id;
    axisPaths[lastAxis.__path] = lastAxis;
}
exports.enterAxis = enterAxis;
;
function exitAxis(id, component) {
    var path = component.$.__path;
    var axis = axisPaths[path];
    delete axisPaths[path];
    if (rootAxis === axis) {
        rootAxis = undefined;
    }
}
exports.exitAxis = exitAxis;
;
function root() {
    return rootAxis;
}
exports.root = root;
;
function select(selector) {
    var axis = axisPaths[selector];
    if (!axis) {
        throw new Error("Axis not found \"" + selector + "\"");
    }
    return axis;
}
exports.select = select;
;
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
var index_1 = __webpack_require__(5);
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
;
;
var Axis = /** @class */ (function (_super) {
    __extends(Axis, _super);
    function Axis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Axis.prototype.componentWillMount = function () {
        index_1.enterAxis(this.props.id, this.props.component);
    };
    Axis.prototype.componentWillUnmount = function () {
        index_1.exitAxis(this.props.id, this.props.component);
    };
    Axis.prototype.render = function () {
        return (React.createElement("div", null, this.props.children));
    };
    return Axis;
}(React.Component));
exports.Axis = Axis;


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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (e) {
            _this.$.text = e.target.value;
        };
        return _this;
    }
    InputComponent.prototype.render = function () {
        return (React.createElement(axial_1.Axis, { id: "input", component: this },
            React.createElement("label", null,
                this.$.label,
                React.createElement("input", { type: "text", defaultValue: this.$.text, onChange: this.onChange }))));
    };
    return InputComponent;
}(axial_1.Component));
exports.InputComponent = InputComponent;


/***/ }),
/* 10 */
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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, this.props.children));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9heGlhbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtB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RSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBSSxDQUNuRSxDQUNILENBQ1IsQ0FBQztJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQ0FmbUMsaUJBQVMsR0FlNUM7QUFmWSx3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSM0IsbUNBQStCO0FBRS9CO0lBQXlCLHVCQUF1QjtJQUFoRDs7SUFRQSxDQUFDO0lBUEMsb0JBQU0sR0FBTjtRQUNFLE9BQU8sQ0FDTCxpQ0FDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsQ0FDUDtJQUNILENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQyxDQVJ3QixLQUFLLENBQUMsU0FBUyxHQVF2QztBQVJZLGtCQUFHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IEFwcCwgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5sZXQgYyA9IDA7XG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxBcHA+XG4gICAgPEZvcm1Db21wb25lbnQgdGl0bGU9XCJ0aGUgZm9ybVwiIG9uQ2xpY2s9eyh7ICQgfSkgPT4ge1xuICAgICAgJC5zZWxlY3QoJ2Zvcm0nKS50aXRsZSA9ICQuc2VsZWN0KCdmb3JtLmlucHV0JykudGV4dDtcbiAgICB9fSAvPlxuICA8L0FwcD5cbiksIGNvbnRhaW5lcik7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsImV4cG9ydCAqIGZyb20gJy4vZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL2FwcCciLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50SGFuZGxlciwgQXhpcyB9IGZyb20gJy4uL2F4aWFsJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUNvbXBvbmVudFByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiBFdmVudEhhbmRsZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50PEZvcm1Db21wb25lbnRQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXhpcyBpZD1cImZvcm1cIiBjb21wb25lbnQ9e3RoaXN9PlxuICAgICAgICA8aDE+eyB0aGlzLiQudGl0bGUgfTwvaDE+XG4gICAgICAgIDxJbnB1dENvbXBvbmVudCBsYWJlbD1cImluZm9cIiB0ZXh0PVwiaW5wdXQgdmFsdWVcIiAvPlxuICAgICAgICA8QnV0dG9uQ29tcG9uZW50IHRleHQ9XCJTdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmVtaXQodGhpcy5wcm9wcy5vbkNsaWNrKX0gLz5cbiAgICAgIDwvQXhpcz5cbiAgICApO1xuICB9XG59IiwibGV0IGxhc3RBeGlzO1xubGV0IHJvb3RBeGlzO1xuY29uc3QgYXhpc1BhdGhzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRlckF4aXMgKGlkLCBjb21wb25lbnQpIHtcbiAgY29uc3QgY29tcG9uZW50TW9kZWwgPSBjb21wb25lbnQuJDtcbiAgaWYgKGxhc3RBeGlzKSB7XG4gICAgbGFzdEF4aXMuX19heGlzZXNbaWRdID0gY29tcG9uZW50TW9kZWw7XG4gICAgY29tcG9uZW50TW9kZWwuX19wYXRoID0gYCR7bGFzdEF4aXMuX19wYXRofS4ke2lkfWA7XG4gICAgY29uc29sZS5sb2coYHN1Yi1heGlzIH4gaWQ6IFwiJHtpZH1cIiBwYXRoOiBcIiR7Y29tcG9uZW50TW9kZWwuX19wYXRofVwiYCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdEF4aXMgPSBjb21wb25lbnRNb2RlbDtcbiAgICBjb21wb25lbnRNb2RlbC5fX3BhdGggPSBpZDtcbiAgICBjb25zb2xlLmxvZyhgcm9vdC1heGlzIH4gaWQ6IFwiJHtpZH1cIiBwYXRoOiBcIiR7Y29tcG9uZW50TW9kZWwuX19wYXRofVwiYCk7XG4gIH1cbiAgbGFzdEF4aXMgPSBjb21wb25lbnRNb2RlbDtcbiAgbGFzdEF4aXMuX19heGlzZXMgPSBsYXN0QXhpcy5fX2F4aXNlcyB8fCB7fTtcbiAgbGFzdEF4aXMuX19pZCA9IGlkO1xuICBheGlzUGF0aHNbbGFzdEF4aXMuX19wYXRoXSA9IGxhc3RBeGlzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRBeGlzIChpZCwgY29tcG9uZW50KSB7XG4gIGNvbnN0IHBhdGggPSBjb21wb25lbnQuJC5fX3BhdGg7XG4gIGNvbnN0IGF4aXMgPSBheGlzUGF0aHNbcGF0aF07XG4gIGRlbGV0ZSBheGlzUGF0aHNbcGF0aF07XG4gIGlmIChyb290QXhpcyA9PT0gYXhpcykge1xuICAgIHJvb3RBeGlzID0gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcm9vdCAoKSB7XG4gIHJldHVybiByb290QXhpcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3QgKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGF4aXMgPSBheGlzUGF0aHNbc2VsZWN0b3JdO1xuICBpZiAoIWF4aXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEF4aXMgbm90IGZvdW5kIFwiJHtzZWxlY3Rvcn1cImApXG4gIH1cbiAgcmV0dXJuIGF4aXM7XG59O1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBYnN0cmFjdE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBlbnRlckF4aXMsIGV4aXRBeGlzIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50U3RhdGUge1xuICAvLyB0b2RvLi4uXG59O1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50PFByb3BzPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgQ29tcG9uZW50U3RhdGU+IHtcbiAgc3RhdGljIE1vZGVsOiB0eXBlb2YgQWJzdHJhY3RNb2RlbDtcblxuICAkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgbW9kZWwgPSBuZXcgQWJzdHJhY3RNb2RlbChwcm9wcyk7XG4gICAgbW9kZWwuYWRkTGlzdGVuZXIoKGtleSwgdmFsdWUpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBba2V5XTogdmFsdWUsXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMuJCA9IG1vZGVsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjwvZGl2PjtcbiAgfVxuXG4gIGVtaXQgKGZuKSB7XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoZSkgPT4gZm4oeyAuLi5lLCAkOiB0aGlzLiQgfSk7XG4gIH1cbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEF4aXNQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50PGFueT47XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEF4aXNTdGF0ZSB7XG59O1xuXG5leHBvcnQgY2xhc3MgQXhpcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBeGlzUHJvcHMsIEF4aXNTdGF0ZT4ge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGVudGVyQXhpcyh0aGlzLnByb3BzLmlkLCB0aGlzLnByb3BzLmNvbXBvbmVudCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgZXhpdEF4aXModGhpcy5wcm9wcy5pZCwgdGhpcy5wcm9wcy5jb21wb25lbnQpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlciA9IChlOiBhbnkpID0+IHZvaWQ7XG4iLCJpbXBvcnQgeyByb290LCBzZWxlY3QgfSBmcm9tICcuLi9heGlhbCc7XG5cbmV4cG9ydCB0eXBlIE1vZGVsQ2hhbmdlSGFuZGxlciA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgcHJldmlvdXNWYWx1ZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdE1vZGVsIHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRzPzogYW55O1xuICBwdWJsaWMgc3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IE1vZGVsQ2hhbmdlSGFuZGxlcltdO1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIGNvbnN0IHNlbGY6IGFueSA9IHRoaXM7XG4gICAgY29uc3QgQ2xhc3M6IGFueSA9IHNlbGYuX19wcm90b19fLmNvbnN0cnVjdG9yO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5kZWZhdWx0cyA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5wcm9wc1xuICAgIH07XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBhZGRMaXN0ZW5lciAoaGFuZGxlcjogTW9kZWxDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0cztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGVba2V5XVxuICAgICAgICAgICAgOiBkZWZhdWx0c1trZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICAgICAgaGFuZGxlcihrZXksIHRoaXNba2V5XSwgcHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3QgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHNlbGVjdChzZWxlY3Rvcik7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlIChkZWZhdWx0cykge1xuICAgIGNvbnN0IE1vZGVsID0gKHRoaXMgYXMgYW55KTtcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbChkZWZhdWx0cyk7XG4gICAgbW9kZWwuaW5pdCgpO1xuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vYXhpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkNvbXBvbmVudFByb3BzIHtcbiAgdGV4dD86IHN0cmluZztcbiAgb25DbGljaz86IEV2ZW50SGFuZGxlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxCdXR0b25Db21wb25lbnRQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZW1pdCh0aGlzLnByb3BzLm9uQ2xpY2spfT57dGhpcy4kLnRleHR9PC9idXR0b24+O1xuICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBBeGlzIH0gZnJvbSAnLi4vYXhpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0Q29tcG9uZW50X1Byb3BzIHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudDxJbnB1dENvbXBvbmVudF9Qcm9wcz4ge1xuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICB0aGlzLiQudGV4dCA9IGUudGFyZ2V0LnZhbHVlOyBcbiAgfTtcblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXhpcyBpZD1cImlucHV0XCIgY29tcG9uZW50PXt0aGlzfT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHt0aGlzLiQubGFiZWx9XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXt0aGlzLiQudGV4dH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L0F4aXM+XG4gICAgKTtcbiAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=