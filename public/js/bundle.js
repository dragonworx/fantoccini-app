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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9heGlhbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXhpYWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F4aWFsL3Njb3BlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNB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SSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDZCwrQkFBTyxHQUFHLEVBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRyxJQUFJLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDMUUsUUFBUSxFQUFHLElBQUksQ0FBQyxhQUFhLEVBQzdCLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTyxHQUN0QixDQUNJLENBQ1QsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQS9CRCx3Q0ErQkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi9heGlhbCc7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKChcclxuICAgIDxGb3JtQ29tcG9uZW50IHRpdGxlPVwidGhlIGZvcm1cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICQoJ2Zvcm0nKS50aXRsZSA9ICQoJ2Zvcm0uaW5wdXQnKS50ZXh0O1xyXG4gICAgfX0gLz5cclxuKSwgY29udGFpbmVyKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007IiwiZXhwb3J0ICogZnJvbSAnLi9mb3JtJztcclxuZXhwb3J0ICogZnJvbSAnLi9idXR0b24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2lucHV0JzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF4aWFsQ29tcG9uZW50LCBFdmVudEhhbmRsZXIsIFNjb3BlLCBFeHBvcnQgfSBmcm9tICcuLi9heGlhbCc7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uJztcclxuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUNvbXBvbmVudFByb3BzIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBvbkNsaWNrPzogRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIEF4aWFsQ29tcG9uZW50PEZvcm1Db21wb25lbnRQcm9wcz4ge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2NvcGUgaWQ9XCJmb3JtXCI+XHJcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgICAgPGgxPnsgdGhpcy4kLnRpdGxlIH08L2gxPlxyXG4gICAgICAgICAgPEV4cG9ydCBpZD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgPElucHV0Q29tcG9uZW50IGxhYmVsPVwibmFtZVwiIHRleHQ9XCJuYW1lXCIgLz5cclxuICAgICAgICAgIDwvRXhwb3J0PlxyXG4gICAgICAgICAgPEV4cG9ydCBpZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dENvbXBvbmVudCBsYWJlbD1cInBhc3N3b3JkXCIgdGV4dD1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgIDwvRXhwb3J0PlxyXG4gICAgICAgICAgPEJ1dHRvbkNvbXBvbmVudCB0ZXh0PXtgU3VibWl0JHtEYXRlLm5vdygpfWB9IG9uQ2xpY2s9eyB0aGlzLmJpbmQoJ29uQ2xpY2snKSB9IC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L1Njb3BlPlxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5sZXQgbGFzdEF4aXM7XHJcbmxldCByb290QXhpcztcclxuY29uc3QgYXhpc1BhdGhzID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJBeGlzIChpZCwgY29tcG9uZW50TW9kZWwpIHtcclxuICBpZiAobGFzdEF4aXMpIHtcclxuICAgIGxhc3RBeGlzLl9fYXhpc2VzW2lkXSA9IGNvbXBvbmVudE1vZGVsO1xyXG4gICAgY29tcG9uZW50TW9kZWwuX19wYXRoID0gYCR7bGFzdEF4aXMuX19wYXRofS4ke2lkfWA7XHJcbiAgICBjb25zb2xlLmxvZyhgc3ViLWF4aXMgfiBpZDogXCIke2lkfVwiIHBhdGg6IFwiJHtjb21wb25lbnRNb2RlbC5fX3BhdGh9XCJgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm9vdEF4aXMgPSBjb21wb25lbnRNb2RlbDtcclxuICAgIGNvbXBvbmVudE1vZGVsLl9fcGF0aCA9IGlkO1xyXG4gICAgY29uc29sZS5sb2coYHJvb3QtYXhpcyB+IGlkOiBcIiR7aWR9XCIgcGF0aDogXCIke2NvbXBvbmVudE1vZGVsLl9fcGF0aH1cImApO1xyXG4gIH1cclxuICBsYXN0QXhpcyA9IGNvbXBvbmVudE1vZGVsO1xyXG4gIGxhc3RBeGlzLl9fYXhpc2VzID0gbGFzdEF4aXMuX19heGlzZXMgfHwge307XHJcbiAgbGFzdEF4aXMuX19pZCA9IGlkO1xyXG4gIGF4aXNQYXRoc1tsYXN0QXhpcy5fX3BhdGhdID0gbGFzdEF4aXM7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhpdEF4aXMgKGlkLCBjb21wb25lbnQpIHtcclxuICBjb25zdCBwYXRoID0gY29tcG9uZW50LiQuX19wYXRoO1xyXG4gIGNvbnN0IGF4aXMgPSBheGlzUGF0aHNbcGF0aF07XHJcbiAgZGVsZXRlIGF4aXNQYXRoc1twYXRoXTtcclxuICBpZiAocm9vdEF4aXMgPT09IGF4aXMpIHtcclxuICAgIHJvb3RBeGlzID0gdW5kZWZpbmVkO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb290ICgpIHtcclxuICByZXR1cm4gcm9vdEF4aXM7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0IChzZWxlY3Rvcikge1xyXG4gIGNvbnN0IGF4aXMgPSBheGlzUGF0aHNbc2VsZWN0b3JdO1xyXG4gIGlmICghYXhpcykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBBeGlzIG5vdCBmb3VuZCBcIiR7c2VsZWN0b3J9XCJgKVxyXG4gIH1cclxuICByZXR1cm4gYXhpcztcclxufTtcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2NvcGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0ICQgPSBzZWxlY3Q7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnRTaG9ydE5hbWUgKHNlbGYpIHtcclxuICByZXR1cm4gKHNlbGYgYXMgYW55KS5fX3Byb3RvX18uY29uc3RydWN0b3IubmFtZS5yZXBsYWNlKC9Db21wb25lbnQkLywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50U3RhdGUge1xyXG4gIC8vIHRvZG8uLi5cclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBeGlhbENvbXBvbmVudDxQcm9wcz4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIENvbXBvbmVudFN0YXRlPiB7XHJcbiAgc3RhdGljIE1vZGVsOiB0eXBlb2YgQWJzdHJhY3RNb2RlbDtcclxuXHJcbiAgJDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBBYnN0cmFjdE1vZGVsKHByb3BzKTtcclxuICAgIG1vZGVsLmFkZExpc3RlbmVyKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIFtrZXldOiB2YWx1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25OZXdTdGF0ZShrZXksIHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy4kID0gbW9kZWw7XHJcbiAgfVxyXG5cclxuICBvbk5ld1N0YXRlIChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyBzdWJjbGFzcy4uLlxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gPD57IHByb3BzLmNoaWxkcmVuIH08Lz47XHJcbiAgfVxyXG5cclxuICBiaW5kIChuYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGZuID0gdGhpcy5wcm9wc1tuYW1lXTtcclxuICAgIGlmICghZm4pIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGUpID0+IGZuKHsgLi4uZSwgJDogdGhpcy4kIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRXZlbnRIYW5kbGVyID0gKGU6IGFueSkgPT4gdm9pZDsiLCJpbXBvcnQgeyBzZWxlY3QgfSBmcm9tICcuLi9heGlhbCc7XHJcblxyXG5leHBvcnQgdHlwZSBNb2RlbENoYW5nZUhhbmRsZXIgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHByZXZpb3VzVmFsdWU6IGFueSkgPT4gdm9pZFxyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0TW9kZWwge1xyXG4gIHByb3RlY3RlZCBkZWZhdWx0cz86IGFueTtcclxuICBwdWJsaWMgc3RhdGU6IGFueTtcclxuICBwcml2YXRlIGxpc3RlbmVyczogTW9kZWxDaGFuZ2VIYW5kbGVyW107XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgY29uc3Qgc2VsZjogYW55ID0gdGhpcztcclxuICAgIGNvbnN0IENsYXNzOiBhbnkgPSBzZWxmLl9fcHJvdG9fXy5jb25zdHJ1Y3RvcjtcclxuICAgIHRoaXMubGlzdGVuZXJzID0gW107XHJcbiAgICB0aGlzLmRlZmF1bHRzID0gcHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi5wcm9wc1xyXG4gICAgfTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgYWRkTGlzdGVuZXIgKGhhbmRsZXI6IE1vZGVsQ2hhbmdlSGFuZGxlcikge1xyXG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgY29uc3QgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRzO1xyXG4gICAgZm9yIChsZXQga2V5IGluIGRlZmF1bHRzKSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcclxuICAgICAgICBnZXQgKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KVxyXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGVba2V5XVxyXG4gICAgICAgICAgICA6IGRlZmF1bHRzW2tleV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZVtrZXldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9yIChsZXQgaGFuZGxlciBvZiB0aGlzLmxpc3RlbmVycykge1xyXG4gICAgICAgICAgICBoYW5kbGVyKGtleSwgdGhpc1trZXldLCBwcmV2aW91c1ZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZSAoZGVmYXVsdHMpIHtcclxuICAgIGNvbnN0IE1vZGVsID0gKHRoaXMgYXMgYW55KTtcclxuICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKGRlZmF1bHRzKTtcclxuICAgIG1vZGVsLmluaXQoKTtcclxuICAgIHJldHVybiBtb2RlbDtcclxuICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBzY29wZXM6IHt9W10gPSBbXTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NvcGVQcm9wcyB7XHJcbiAgaWQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NvcGVTdGF0ZSB7XHJcbiAgbGV2ZWw/OiBudW1iZXI7XHJcbiAgc2NvcGU/OiBhbnk7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY29wZSB7XHJcbiAgcGFyZW50PzogSVNjb3BlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2NvcGVQcm9wcywgU2NvcGVTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcclxuICAgIGNvbnN0IHsgcHJvcHM6IHsgaWQgfSB9ID0gdGhpcztcclxuICAgIGNvbnN0IG5ld1Njb3BlOiBJU2NvcGUgPSB7fTtcclxuICAgIGNvbnN0IGxldmVsID0gc2NvcGVzLmxlbmd0aDtcclxuICAgIGNvbnN0IHBhZCA9ICctPicucmVwZWF0KGxldmVsKTtcclxuICAgIGNvbnNvbGUubG9nKGAke3BhZH0ke2lkfWApO1xyXG4gICAgY29uc3QgY3VycmVudFNjb3BlOiBJU2NvcGUgfCB1bmRlZmluZWQgPSBzY29wZXNbc2NvcGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgc2NvcGVzLnB1c2gobmV3U2NvcGUpO1xyXG4gICAgaWYgKGN1cnJlbnRTY29wZSkge1xyXG4gICAgICBjdXJyZW50U2NvcGVbaWRdID0gbmV3U2NvcGU7XHJcbiAgICAgIG5ld1Njb3BlLnBhcmVudCA9IGN1cnJlbnRTY29wZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuIFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD57IHRoaXMucHJvcHMuY2hpbGRyZW4gfTwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXhwb3J0UHJvcHMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cG9ydFN0YXRlIHtcclxuICAvLyB0b2RvLi4uXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY29wZSB7XHJcbiAgcGFyZW50PzogSVNjb3BlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwb3J0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEV4cG9ydFByb3BzLCBFeHBvcnRTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xyXG4gXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC8+XHJcbiAgICApO1xyXG4gIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXhpYWxDb21wb25lbnQsIEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2F4aWFsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uQ29tcG9uZW50UHJvcHMge1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgb25DbGljaz86IEV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEF4aWFsQ29tcG9uZW50PEJ1dHRvbkNvbXBvbmVudFByb3BzPiB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17IHRoaXMuYmluZCgnb25DbGljaycpIH0+XHJcbiAgICAgICAgeyB0aGlzLiQudGV4dCB9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF4aWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vYXhpYWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dENvbXBvbmVudF9Qcm9wcyB7XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgQXhpYWxDb21wb25lbnQ8SW5wdXRDb21wb25lbnRfUHJvcHM+IHtcclxuICBfaW5wdXQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBvbklucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgdGhpcy4kLnRleHQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiYVwiKTtcclxuICB9O1xyXG5cclxuICBvbktleVVwID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgLy8gZXNjXHJcbiAgICAgIHRoaXMuJC50ZXh0ID0gJyc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25OZXdTdGF0ZSAoa2V5LCB2YWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2coJ3h4eCcsIGtleSwgdmFsdWUpO1xyXG4gICAgKHRoaXMuX2lucHV0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIHsgdGhpcy4kLmxhYmVsIH1cclxuICAgICAgICA8aW5wdXQgcmVmPXsgZWwgPT4gdGhpcy5faW5wdXQgPSBlbCB9IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXsgdGhpcy4kLnRleHQgfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UgfSBcclxuICAgICAgICAgIG9uS2V5VXA9eyB0aGlzLm9uS2V5VXAgfSBcclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9