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
const React = __webpack_require__(1);
const ReactDOM = __webpack_require__(2);
const components_1 = __webpack_require__(3);
const axial_1 = __webpack_require__(5);
const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render((React.createElement(components_1.FormComponent, { title: "the form", onClick: () => {
        axial_1.$('form').title = axial_1.$('form.input').text;
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
__export(__webpack_require__(9));
__export(__webpack_require__(10));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const axial_1 = __webpack_require__(5);
const button_1 = __webpack_require__(9);
const input_1 = __webpack_require__(10);
class FormComponent extends axial_1.AxialComponent {
    render() {
        return (React.createElement(axial_1.Scope, { id: "form" },
            React.createElement("form", { action: "#" },
                React.createElement("h1", null, this.$.title),
                React.createElement(axial_1.Export, { id: "name" },
                    React.createElement(input_1.InputComponent, { label: "name", text: "name" })),
                React.createElement(axial_1.Export, { id: "password" },
                    React.createElement(input_1.InputComponent, { label: "password", text: "password" })),
                React.createElement(button_1.ButtonComponent, { text: `Submit${Date.now()}`, onClick: this.bind('onClick') }))));
    }
}
exports.FormComponent = FormComponent;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
let lastAxis;
let rootAxis;
const axisPaths = {};
function enterAxis(id, componentModel) {
    if (lastAxis) {
        lastAxis.__axises[id] = componentModel;
        componentModel.__path = `${lastAxis.__path}.${id}`;
        console.log(`sub-axis ~ id: "${id}" path: "${componentModel.__path}"`);
    }
    else {
        rootAxis = componentModel;
        componentModel.__path = id;
        console.log(`root-axis ~ id: "${id}" path: "${componentModel.__path}"`);
    }
    lastAxis = componentModel;
    lastAxis.__axises = lastAxis.__axises || {};
    lastAxis.__id = id;
    axisPaths[lastAxis.__path] = lastAxis;
}
exports.enterAxis = enterAxis;
;
function exitAxis(id, component) {
    const path = component.$.__path;
    const axis = axisPaths[path];
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
    const axis = axisPaths[selector];
    if (!axis) {
        throw new Error(`Axis not found "${selector}"`);
    }
    return axis;
}
exports.select = select;
;
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
exports.$ = select;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const model_1 = __webpack_require__(7);
function getComponentShortName(self) {
    return self.__proto__.constructor.name.replace(/Component$/, '').toLowerCase();
}
;
class AxialComponent extends React.Component {
    constructor(props) {
        super(props);
        const model = new model_1.AbstractModel(props);
        model.addListener((key, value) => {
            this.setState({
                [key]: value,
            });
            this.onNewState(key, value);
        });
        this.$ = model;
    }
    onNewState(key, value) {
        // subclass...
    }
    render() {
        const { props } = this;
        return React.createElement(React.Fragment, null, props.children);
    }
    bind(name) {
        const fn = this.props[name];
        if (!fn) {
            return null;
        }
        return (e) => fn(Object.assign({}, e, { $: this.$ }));
    }
}
exports.AxialComponent = AxialComponent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AbstractModel {
    constructor(props) {
        const self = this;
        const Class = self.__proto__.constructor;
        this.listeners = [];
        this.defaults = props;
        this.state = Object.assign({}, props);
        this.init();
    }
    addListener(handler) {
        this.listeners.push(handler);
    }
    init() {
        const defaults = this.defaults;
        for (let key in defaults) {
            Object.defineProperty(this, key, {
                get() {
                    return this.state.hasOwnProperty(key)
                        ? this.state[key]
                        : defaults[key];
                },
                set(value) {
                    const previousValue = this.state[key];
                    this.state[key] = value;
                    if (typeof value === 'undefined') {
                        delete this.state[key];
                    }
                    for (let handler of this.listeners) {
                        handler(key, this[key], previousValue);
                    }
                }
            });
        }
    }
    static create(defaults) {
        const Model = this;
        const model = new Model(defaults);
        model.init();
        return model;
    }
}
exports.AbstractModel = AbstractModel;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const scopes = [];
;
;
class Scope extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const { props: { id } } = this;
        const newScope = {};
        const level = scopes.length;
        const pad = '->'.repeat(level);
        console.log(`${pad}${id}`);
        const currentScope = scopes[scopes.length - 1];
        scopes.push(newScope);
        if (currentScope) {
            currentScope[id] = newScope;
            newScope.parent = currentScope;
        }
    }
    componentWillUnmount() {
    }
    render() {
        return (React.createElement(React.Fragment, null, this.props.children));
    }
}
exports.Scope = Scope;
;
;
class Export extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (React.createElement(React.Fragment, null, this.props.children));
    }
}
exports.Export = Export;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const axial_1 = __webpack_require__(5);
class ButtonComponent extends axial_1.AxialComponent {
    render() {
        return (React.createElement("button", { onClick: this.bind('onClick') }, this.$.text));
    }
}
exports.ButtonComponent = ButtonComponent;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const axial_1 = __webpack_require__(5);
class InputComponent extends axial_1.AxialComponent {
    constructor() {
        super(...arguments);
        this.onInputChange = (e) => {
            this.$.text = e.target.value;
            console.log("a");
        };
        this.onKeyUp = (e) => {
            if (e.keyCode === 27) {
                // esc
                this.$.text = '';
            }
        };
    }
    onNewState(key, value) {
        console.log('xxx', key, value);
        this._input.value = value;
    }
    render() {
        return (React.createElement("label", null,
            this.$.label,
            React.createElement("input", { ref: el => this._input = el, type: "text", defaultValue: this.$.text, onChange: this.onInputChange, onKeyUp: this.onKeyUp })));
    }
}
exports.InputComponent = InputComponent;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9heGlhbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F4aWFsL3Njb3BlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNB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SSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDZCwrQkFBTyxHQUFHLEVBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRyxJQUFJLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDMUUsUUFBUSxFQUFHLElBQUksQ0FBQyxhQUFhLEVBQzdCLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTyxHQUN0QixDQUNJLENBQ1QsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQS9CRCx3Q0ErQkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi9heGlhbCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5SZWFjdERPTS5yZW5kZXIoKFxuICAgIDxGb3JtQ29tcG9uZW50IHRpdGxlPVwidGhlIGZvcm1cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAkKCdmb3JtJykudGl0bGUgPSAkKCdmb3JtLmlucHV0JykudGV4dDtcbiAgICB9fSAvPlxuKSwgY29udGFpbmVyKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007IiwiZXhwb3J0ICogZnJvbSAnLi9mb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQnOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF4aWFsQ29tcG9uZW50LCBFdmVudEhhbmRsZXIsIFNjb3BlLCBFeHBvcnQgfSBmcm9tICcuLi9heGlhbCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Db21wb25lbnRQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBvbkNsaWNrPzogRXZlbnRIYW5kbGVyO1xufVxuXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIEF4aWFsQ29tcG9uZW50PEZvcm1Db21wb25lbnRQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2NvcGUgaWQ9XCJmb3JtXCI+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgICA8aDE+eyB0aGlzLiQudGl0bGUgfTwvaDE+XG4gICAgICAgICAgPEV4cG9ydCBpZD1cIm5hbWVcIj5cbiAgICAgICAgICAgIDxJbnB1dENvbXBvbmVudCBsYWJlbD1cIm5hbWVcIiB0ZXh0PVwibmFtZVwiIC8+XG4gICAgICAgICAgPC9FeHBvcnQ+XG4gICAgICAgICAgPEV4cG9ydCBpZD1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICA8SW5wdXRDb21wb25lbnQgbGFiZWw9XCJwYXNzd29yZFwiIHRleHQ9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgPC9FeHBvcnQ+XG4gICAgICAgICAgPEJ1dHRvbkNvbXBvbmVudCB0ZXh0PXtgU3VibWl0JHtEYXRlLm5vdygpfWB9IG9uQ2xpY2s9eyB0aGlzLmJpbmQoJ29uQ2xpY2snKSB9IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvU2NvcGU+XG4gICAgKTtcbiAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IGxhc3RBeGlzO1xubGV0IHJvb3RBeGlzO1xuY29uc3QgYXhpc1BhdGhzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRlckF4aXMgKGlkLCBjb21wb25lbnRNb2RlbCkge1xuICBpZiAobGFzdEF4aXMpIHtcbiAgICBsYXN0QXhpcy5fX2F4aXNlc1tpZF0gPSBjb21wb25lbnRNb2RlbDtcbiAgICBjb21wb25lbnRNb2RlbC5fX3BhdGggPSBgJHtsYXN0QXhpcy5fX3BhdGh9LiR7aWR9YDtcbiAgICBjb25zb2xlLmxvZyhgc3ViLWF4aXMgfiBpZDogXCIke2lkfVwiIHBhdGg6IFwiJHtjb21wb25lbnRNb2RlbC5fX3BhdGh9XCJgKTtcbiAgfSBlbHNlIHtcbiAgICByb290QXhpcyA9IGNvbXBvbmVudE1vZGVsO1xuICAgIGNvbXBvbmVudE1vZGVsLl9fcGF0aCA9IGlkO1xuICAgIGNvbnNvbGUubG9nKGByb290LWF4aXMgfiBpZDogXCIke2lkfVwiIHBhdGg6IFwiJHtjb21wb25lbnRNb2RlbC5fX3BhdGh9XCJgKTtcbiAgfVxuICBsYXN0QXhpcyA9IGNvbXBvbmVudE1vZGVsO1xuICBsYXN0QXhpcy5fX2F4aXNlcyA9IGxhc3RBeGlzLl9fYXhpc2VzIHx8IHt9O1xuICBsYXN0QXhpcy5fX2lkID0gaWQ7XG4gIGF4aXNQYXRoc1tsYXN0QXhpcy5fX3BhdGhdID0gbGFzdEF4aXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZXhpdEF4aXMgKGlkLCBjb21wb25lbnQpIHtcbiAgY29uc3QgcGF0aCA9IGNvbXBvbmVudC4kLl9fcGF0aDtcbiAgY29uc3QgYXhpcyA9IGF4aXNQYXRoc1twYXRoXTtcbiAgZGVsZXRlIGF4aXNQYXRoc1twYXRoXTtcbiAgaWYgKHJvb3RBeGlzID09PSBheGlzKSB7XG4gICAgcm9vdEF4aXMgPSB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByb290ICgpIHtcbiAgcmV0dXJuIHJvb3RBeGlzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdCAoc2VsZWN0b3IpIHtcbiAgY29uc3QgYXhpcyA9IGF4aXNQYXRoc1tzZWxlY3Rvcl07XG4gIGlmICghYXhpcykge1xuICAgIHRocm93IG5ldyBFcnJvcihgQXhpcyBub3QgZm91bmQgXCIke3NlbGVjdG9yfVwiYClcbiAgfVxuICByZXR1cm4gYXhpcztcbn07XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zY29wZSc7XG5cbmV4cG9ydCBjb25zdCAkID0gc2VsZWN0OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFic3RyYWN0TW9kZWwgfSBmcm9tICcuL21vZGVsJztcblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50U2hvcnROYW1lIChzZWxmKSB7XG4gIHJldHVybiAoc2VsZiBhcyBhbnkpLl9fcHJvdG9fXy5jb25zdHJ1Y3Rvci5uYW1lLnJlcGxhY2UoL0NvbXBvbmVudCQvLCAnJykudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRTdGF0ZSB7XG4gIC8vIHRvZG8uLi5cbn07XG5cbmV4cG9ydCBjbGFzcyBBeGlhbENvbXBvbmVudDxQcm9wcz4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIENvbXBvbmVudFN0YXRlPiB7XG4gIHN0YXRpYyBNb2RlbDogdHlwZW9mIEFic3RyYWN0TW9kZWw7XG5cbiAgJDogYW55O1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vZGVsID0gbmV3IEFic3RyYWN0TW9kZWwocHJvcHMpO1xuICAgIG1vZGVsLmFkZExpc3RlbmVyKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2tleV06IHZhbHVlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uTmV3U3RhdGUoa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgdGhpcy4kID0gbW9kZWw7XG4gIH1cblxuICBvbk5ld1N0YXRlIChrZXksIHZhbHVlKSB7XG4gICAgLy8gc3ViY2xhc3MuLi5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuIDw+eyBwcm9wcy5jaGlsZHJlbiB9PC8+O1xuICB9XG5cbiAgYmluZCAobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZm4gPSB0aGlzLnByb3BzW25hbWVdO1xuICAgIGlmICghZm4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKGUpID0+IGZuKHsgLi4uZSwgJDogdGhpcy4kIH0pO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlciA9IChlOiBhbnkpID0+IHZvaWQ7IiwiaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnLi4vYXhpYWwnO1xuXG5leHBvcnQgdHlwZSBNb2RlbENoYW5nZUhhbmRsZXIgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHByZXZpb3VzVmFsdWU6IGFueSkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RNb2RlbCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0cz86IGFueTtcbiAgcHVibGljIHN0YXRlOiBhbnk7XG4gIHByaXZhdGUgbGlzdGVuZXJzOiBNb2RlbENoYW5nZUhhbmRsZXJbXTtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBjb25zdCBzZWxmOiBhbnkgPSB0aGlzO1xuICAgIGNvbnN0IENsYXNzOiBhbnkgPSBzZWxmLl9fcHJvdG9fXy5jb25zdHJ1Y3RvcjtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuZGVmYXVsdHMgPSBwcm9wcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIgKGhhbmRsZXI6IE1vZGVsQ2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdHM7XG4gICAgZm9yIChsZXQga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICAgICAgPyB0aGlzLnN0YXRlW2tleV1cbiAgICAgICAgICAgIDogZGVmYXVsdHNba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGhhbmRsZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoa2V5LCB0aGlzW2tleV0sIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZSAoZGVmYXVsdHMpIHtcbiAgICBjb25zdCBNb2RlbCA9ICh0aGlzIGFzIGFueSk7XG4gICAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoZGVmYXVsdHMpO1xuICAgIG1vZGVsLmluaXQoKTtcbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHNjb3Blczoge31bXSA9IFtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjb3BlUHJvcHMge1xuICBpZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBTY29wZVN0YXRlIHtcbiAgbGV2ZWw/OiBudW1iZXI7XG4gIHNjb3BlPzogYW55O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJU2NvcGUge1xuICBwYXJlbnQ/OiBJU2NvcGU7XG59XG5cbmV4cG9ydCBjbGFzcyBTY29wZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTY29wZVByb3BzLCBTY29wZVN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3QgeyBwcm9wczogeyBpZCB9IH0gPSB0aGlzO1xuICAgIGNvbnN0IG5ld1Njb3BlOiBJU2NvcGUgPSB7fTtcbiAgICBjb25zdCBsZXZlbCA9IHNjb3Blcy5sZW5ndGg7XG4gICAgY29uc3QgcGFkID0gJy0+Jy5yZXBlYXQobGV2ZWwpO1xuICAgIGNvbnNvbGUubG9nKGAke3BhZH0ke2lkfWApO1xuICAgIGNvbnN0IGN1cnJlbnRTY29wZTogSVNjb3BlIHwgdW5kZWZpbmVkID0gc2NvcGVzW3Njb3Blcy5sZW5ndGggLSAxXTtcbiAgICBzY29wZXMucHVzaChuZXdTY29wZSk7XG4gICAgaWYgKGN1cnJlbnRTY29wZSkge1xuICAgICAgY3VycmVudFNjb3BlW2lkXSA9IG5ld1Njb3BlO1xuICAgICAgbmV3U2NvcGUucGFyZW50ID0gY3VycmVudFNjb3BlO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD57IHRoaXMucHJvcHMuY2hpbGRyZW4gfTwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4cG9ydFN0YXRlIHtcbiAgLy8gdG9kby4uLlxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJU2NvcGUge1xuICBwYXJlbnQ/OiBJU2NvcGU7XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RXhwb3J0UHJvcHMsIEV4cG9ydFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC8+XG4gICAgKTtcbiAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF4aWFsQ29tcG9uZW50LCBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9heGlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uQ29tcG9uZW50UHJvcHMge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBvbkNsaWNrPzogRXZlbnRIYW5kbGVyO1xufVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQXhpYWxDb21wb25lbnQ8QnV0dG9uQ29tcG9uZW50UHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgdGhpcy5iaW5kKCdvbkNsaWNrJykgfT5cbiAgICAgICAgeyB0aGlzLiQudGV4dCB9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXhpYWxDb21wb25lbnQgfSBmcm9tICcuLi9heGlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDb21wb25lbnRfUHJvcHMge1xuICBsYWJlbD86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQXhpYWxDb21wb25lbnQ8SW5wdXRDb21wb25lbnRfUHJvcHM+IHtcbiAgX2lucHV0OiBIVE1MRWxlbWVudDtcblxuICBvbklucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHRoaXMuJC50ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJhXCIpO1xuICB9O1xuXG4gIG9uS2V5VXAgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIC8vIGVzY1xuICAgICAgdGhpcy4kLnRleHQgPSAnJztcbiAgICB9XG4gIH07XG5cbiAgb25OZXdTdGF0ZSAoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKCd4eHgnLCBrZXksIHZhbHVlKTtcbiAgICAodGhpcy5faW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbD5cbiAgICAgICAgeyB0aGlzLiQubGFiZWwgfVxuICAgICAgICA8aW5wdXQgcmVmPXsgZWwgPT4gdGhpcy5faW5wdXQgPSBlbCB9IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXsgdGhpcy4kLnRleHQgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlIH0gXG4gICAgICAgICAgb25LZXlVcD17IHRoaXMub25LZXlVcCB9IFxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICApO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==