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
const example_1 = __webpack_require__(3);
let container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render((React.createElement(example_1.Example, null)), container);


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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const scope_1 = __webpack_require__(4);
const EventA_1 = __webpack_require__(6);
const EventB_1 = __webpack_require__(7);
const EventC_1 = __webpack_require__(8);
const ComponentA_1 = __webpack_require__(9);
const ComponentB_1 = __webpack_require__(10);
const ComponentC_1 = __webpack_require__(11);
class Example extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            mode: 1,
        };
        this.onClick = (mode) => () => this.setState({ mode });
        this.renderMode1 = () => (React.createElement(EventA_1.EventA, { aProp: "foo1" },
            React.createElement("h2", null, "Mode 1"),
            React.createElement("p", null, "aProp=\"foo1\""),
            React.createElement(EventB_1.EventB, { bProp2: 123 },
                React.createElement("p", null, "bProp2=123"),
                React.createElement(ComponentB_1.ComponentB, null,
                    React.createElement("p", null, "+ bProp1=\"xyz\""))),
            React.createElement(ComponentA_1.ComponentA, null,
                React.createElement("p", null, "+ aProp=\"efg\""),
                React.createElement(EventC_1.EventC, null,
                    React.createElement(ComponentC_1.ComponentC, null,
                        React.createElement("p", null, "+ cProp1=Date.now()"),
                        React.createElement("p", null, "+ cProp2=\"bar\"")))),
            React.createElement("p", null,
                React.createElement("button", { onClick: this.onClick(2) }, "Switch"))));
        this.renderMode2 = () => (React.createElement(EventA_1.EventA, { aProp: "foo2" },
            React.createElement("h2", null, "Mode 2"),
            React.createElement("p", null, "aProp=\"foo2\""),
            React.createElement(EventB_1.EventB, { bProp2: 456 },
                React.createElement("p", null, "bProp2=456"),
                React.createElement(ComponentB_1.ComponentB, null,
                    React.createElement("p", null, "+ bProp1=\"xyz\""),
                    React.createElement(EventC_1.EventC, null,
                        React.createElement(ComponentC_1.ComponentC, null,
                            React.createElement("p", null, "+ cProp1=Date.now()"),
                            React.createElement("p", null, "+ cProp2=\"bar\""))))),
            React.createElement("p", null,
                React.createElement("button", { onClick: this.onClick(1) }, "Switch"))));
    }
    render() {
        return (React.createElement(scope_1.EventWrapper, null, this.state.mode === 1
            ? this.renderMode1()
            : this.renderMode2()));
    }
}
exports.Example = Example;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const index_1 = __webpack_require__(5);
class EventWrapper extends React.Component {
    render() {
        index_1.clearScope();
        console.clear();
        console.log("Event Stack Cleared!");
        return (React.createElement("div", { className: "eventWrapper" },
            React.createElement("h1", null, "Event Wrapper"),
            this.props.children));
    }
}
exports.EventWrapper = EventWrapper;
class ScopeTrigger extends React.Component {
    render() {
        const { scope, type } = this.props;
        console.log(`render ${type}`, scope.fullPath);
        if (type === 'enter') {
            index_1.enterScope(scope.fullPath);
        }
        else {
            index_1.exitScope(scope.fullPath);
        }
        return React.createElement("span", { className: `scopeTrigger ${type}` },
            "<",
            type === 'exit' ? '/' : '',
            React.createElement("b", null, scope.type),
            " ",
            React.createElement("i", null, scope.fullPath),
            ">");
    }
}
exports.ScopeTrigger = ScopeTrigger;
class EventScopeComponent extends React.Component {
    get type() {
        return this.constructor.name;
    }
    render() {
        this.scope = index_1.defineScope(this.type, this);
        return (React.createElement("div", { className: "scopeComponent" },
            React.createElement(ScopeTrigger, { type: "enter", scope: this.scope }),
            this.props.children,
            React.createElement(ScopeTrigger, { type: "exit", scope: this.scope })));
    }
}
exports.EventScopeComponent = EventScopeComponent;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const guid = (function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
})();
class EventScope {
    constructor(type, parentScope, component) {
        this.type = type;
        this.parentScope = parentScope;
        this.component = component;
    }
    fire(props) {
        const passedProps = props;
        const fullPath = this.fullPath;
        const fullPassedProps = {};
        Object.keys(passedProps).forEach(key => {
            fullPassedProps[`${fullPath}.${key}`] = passedProps[key];
        });
        const allProps = Object.assign({}, this.allProps, fullPassedProps);
        const event = Object.assign({ type: fullPath, guid, time: Date.now(), majVer: 1, minVer: 0, patVer: 0 }, allProps);
        console.log(`${this.fullPath}!`, event);
    }
    get fullPath() {
        const paths = [];
        let ref = this;
        while (ref) {
            paths.splice(0, 0, ref.type);
            ref = ref.parentScope;
        }
        return paths.join('.');
    }
    get allProps() {
        const props = {};
        let ref = this;
        while (ref) {
            const componentProps = ref.component.props;
            Object.keys(componentProps).forEach(key => {
                if (key !== 'children') {
                    props[`${ref.component.scope.fullPath}.${key}`] = componentProps[key];
                }
            });
            ref = ref.parentScope;
        }
        return props;
    }
}
exports.EventScope = EventScope;
let scopes = [];
let scopesByPath = {};
function defineScope(type, component) {
    const scope = new EventScope(type, currentScope(), component);
    scopesByPath[scope.fullPath] = scope;
    return scope;
}
exports.defineScope = defineScope;
function currentScope() {
    return scopes[scopes.length - 1];
}
exports.currentScope = currentScope;
function currentDispatcher() {
    const scope = currentScope();
    return (data) => scope.fire(data);
}
exports.currentDispatcher = currentDispatcher;
function clearScope() {
    scopes = [];
    scopesByPath = {};
}
exports.clearScope = clearScope;
function enterScope(fullPath) {
    console.group("enter scope!", fullPath);
    const scope = scopesByPath[fullPath];
    scopes.push(scope);
    return null;
}
exports.enterScope = enterScope;
function exitScope(fullPath) {
    console.log("exit scope!", fullPath);
    console.groupEnd();
    scopes.pop();
    return null;
}
exports.exitScope = exitScope;
__export(__webpack_require__(4));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const scope_1 = __webpack_require__(4);
class EventA extends scope_1.EventScopeComponent {
}
exports.EventA = EventA;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const scope_1 = __webpack_require__(4);
class EventB extends scope_1.EventScopeComponent {
}
exports.EventB = EventB;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const scope_1 = __webpack_require__(4);
class EventC extends scope_1.EventScopeComponent {
}
exports.EventC = EventC;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const index_1 = __webpack_require__(5);
class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            this.dispatch({
                aProp: 'efg',
            });
        };
        this.dispatch = index_1.currentDispatcher();
    }
    render() {
        return (React.createElement("div", { className: "eventConsumerComponent", onClick: this.onClick },
            React.createElement("h1", null, "ComponentA"),
            this.props.children));
    }
}
exports.ComponentA = ComponentA;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const analytics_1 = __webpack_require__(5);
class ComponentB extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            this.dispatch({
                bProp1: 'xyz',
            });
        };
        this.dispatch = analytics_1.currentDispatcher();
    }
    render() {
        return (React.createElement("div", { className: "eventConsumerComponent", onClick: this.onClick },
            React.createElement("h1", null, "ComponentB"),
            this.props.children));
    }
}
exports.ComponentB = ComponentB;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(1);
const analytics_1 = __webpack_require__(5);
class ComponentC extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = (e) => {
            this.dispatch({
                cProp1: Date.now(),
                cProp2: "bar",
            });
            e.stopPropagation();
        };
        this.dispatch = analytics_1.currentDispatcher();
    }
    render() {
        return (React.createElement("div", { className: "eventConsumerComponent", onClick: this.onClick },
            React.createElement("h1", null, "ComponentC"),
            this.props.children));
    }
}
exports.ComponentC = ComponentC;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hbmFseXRpY3Mvc2NvcGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hbmFseXRpY3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuYWx5dGljcy9leGFtcGxlLWV2ZW50cy9FdmVudEEudHN4Iiwid2VicGFjazovLy8uL3NyYy9hbmFseXRpY3MvZXhhbXBsZS1ldmVudHMvRXZlbnRCLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYW5hbHl0aWNzL2V4YW1wbGUtZXZlbnRzL0V2ZW50Qy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tcG9uZW50QS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tcG9uZW50Qi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tcG9uZW50Qy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFp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dGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IEV4YW1wbGUgfSBmcm9tICcuL2V4YW1wbGUnO1xyXG5cclxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoKFxyXG4gIDxFeGFtcGxlIC8+XHJcbiksIGNvbnRhaW5lcik7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV2ZW50V3JhcHBlciB9IGZyb20gJy4vYW5hbHl0aWNzL3Njb3BlJztcbmltcG9ydCB7IEV2ZW50QSB9IGZyb20gJy4vYW5hbHl0aWNzL2V4YW1wbGUtZXZlbnRzL0V2ZW50QSc7XG5pbXBvcnQgeyBFdmVudEIgfSBmcm9tICcuL2FuYWx5dGljcy9leGFtcGxlLWV2ZW50cy9FdmVudEInO1xuaW1wb3J0IHsgRXZlbnRDIH0gZnJvbSAnLi9hbmFseXRpY3MvZXhhbXBsZS1ldmVudHMvRXZlbnRDJztcbmltcG9ydCB7IENvbXBvbmVudEEgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29tcG9uZW50QSc7XG5pbXBvcnQgeyBDb21wb25lbnRCIH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudEInO1xuaW1wb3J0IHsgQ29tcG9uZW50QyB9IGZyb20gJy4vY29tcG9uZW50cy9Db21wb25lbnRDJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIG1vZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIFN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIG1vZGU6IDEsXG4gIH07XG5cbiAgb25DbGljayA9IChtb2RlOiBudW1iZXIpID0+ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2RlIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEV2ZW50V3JhcHBlcj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUubW9kZSA9PT0gMSBcbiAgICAgICAgICAgID8gdGhpcy5yZW5kZXJNb2RlMSgpIFxuICAgICAgICAgICAgOiB0aGlzLnJlbmRlck1vZGUyKClcbiAgICAgICAgfVxuICAgICAgICA8L0V2ZW50V3JhcHBlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXJNb2RlMSA9ICgpID0+IChcbiAgICA8RXZlbnRBIGFQcm9wPVwiZm9vMVwiPlxuICAgICAgPGgyPk1vZGUgMTwvaDI+XG4gICAgICA8cD5hUHJvcD1cImZvbzFcIjwvcD5cbiAgICAgIDxFdmVudEIgYlByb3AyPXsxMjN9PlxuICAgICAgICA8cD5iUHJvcDI9MTIzPC9wPlxuICAgICAgICA8Q29tcG9uZW50Qj5cbiAgICAgICAgICA8cD4rIGJQcm9wMT1cInh5elwiPC9wPlxuICAgICAgICA8L0NvbXBvbmVudEI+XG4gICAgICA8L0V2ZW50Qj5cbiAgICAgIDxDb21wb25lbnRBPlxuICAgICAgICA8cD4rIGFQcm9wPVwiZWZnXCI8L3A+XG4gICAgICAgIDxFdmVudEM+XG4gICAgICAgICAgPENvbXBvbmVudEM+XG4gICAgICAgICAgICA8cD4rIGNQcm9wMT1EYXRlLm5vdygpPC9wPlxuICAgICAgICAgICAgPHA+KyBjUHJvcDI9XCJiYXJcIjwvcD5cbiAgICAgICAgICA8L0NvbXBvbmVudEM+XG4gICAgICAgIDwvRXZlbnRDPlxuICAgICAgPC9Db21wb25lbnRBPlxuICAgICAgPHA+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrKDIpfT5Td2l0Y2g8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICA8L0V2ZW50QT5cbiAgKTtcblxuICByZW5kZXJNb2RlMiA9ICgpID0+IChcbiAgICA8RXZlbnRBIGFQcm9wPVwiZm9vMlwiPlxuICAgICAgPGgyPk1vZGUgMjwvaDI+XG4gICAgICA8cD5hUHJvcD1cImZvbzJcIjwvcD5cbiAgICAgIDxFdmVudEIgYlByb3AyPXs0NTZ9PlxuICAgICAgICA8cD5iUHJvcDI9NDU2PC9wPlxuICAgICAgICA8Q29tcG9uZW50Qj5cbiAgICAgICAgICA8cD4rIGJQcm9wMT1cInh5elwiPC9wPlxuICAgICAgICAgIDxFdmVudEM+XG4gICAgICAgICAgICA8Q29tcG9uZW50Qz5cbiAgICAgICAgICAgICAgPHA+KyBjUHJvcDE9RGF0ZS5ub3coKTwvcD5cbiAgICAgICAgICAgICAgPHA+KyBjUHJvcDI9XCJiYXJcIjwvcD5cbiAgICAgICAgICAgIDwvQ29tcG9uZW50Qz5cbiAgICAgICAgICA8L0V2ZW50Qz5cbiAgICAgICAgPC9Db21wb25lbnRCPlxuICAgICAgPC9FdmVudEI+XG4gICAgICA8cD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2soMSl9PlN3aXRjaDwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgIDwvRXZlbnRBPlxuICApO1xufSIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lU2NvcGUsIEV2ZW50U2NvcGUsIGNsZWFyU2NvcGUsIGVudGVyU2NvcGUsIGV4aXRTY29wZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTY29wZWRDb21wb25lbnQge1xuICBzY29wZTogRXZlbnRTY29wZTxhbnk+O1xuICBwcm9wczoge307XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XG4gIHJlbmRlciAoKSB7XG4gICAgY2xlYXJTY29wZSgpO1xuICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICBjb25zb2xlLmxvZyhcIkV2ZW50IFN0YWNrIENsZWFyZWQhXCIpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50V3JhcHBlclwiPlxuICAgICAgICA8aDE+RXZlbnQgV3JhcHBlcjwvaDE+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjb3BlVHJpZ2dlclByb3BzIHtcbiAgc2NvcGU6IEV2ZW50U2NvcGU8YW55PjtcbiAgdHlwZTogJ2VudGVyJyB8ICdleGl0J1xufVxuXG5leHBvcnQgY2xhc3MgU2NvcGVUcmlnZ2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFNjb3BlVHJpZ2dlclByb3BzLCB7fT4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY29wZSwgdHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyhgcmVuZGVyICR7dHlwZX1gLCBzY29wZS5mdWxsUGF0aCk7XG4gICAgaWYgKHR5cGUgPT09ICdlbnRlcicpIHtcbiAgICAgIGVudGVyU2NvcGUoc2NvcGUuZnVsbFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGl0U2NvcGUoc2NvcGUuZnVsbFBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtgc2NvcGVUcmlnZ2VyICR7dHlwZX1gfT4mbHQ7e3R5cGUgPT09ICdleGl0JyA/ICcvJyA6ICcnfTxiPntzY29wZS50eXBlfTwvYj4gPGk+e3Njb3BlLmZ1bGxQYXRofTwvaT4mZ3Q7PC9zcGFuPjtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXZlbnRTY29wZUNvbXBvbmVudDxUPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxULCB7fT4gaW1wbGVtZW50cyBJU2NvcGVkQ29tcG9uZW50IHtcbiAgc2NvcGU6IEV2ZW50U2NvcGU8YW55PjtcblxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcyBhcyBhbnkpLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zY29wZSA9IGRlZmluZVNjb3BlPFQ+KHRoaXMudHlwZSwgdGhpcyBhcyBJU2NvcGVkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29wZUNvbXBvbmVudFwiPlxuICAgICAgICA8U2NvcGVUcmlnZ2VyIHR5cGU9XCJlbnRlclwiIHNjb3BlPXt0aGlzLnNjb3BlfSAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPFNjb3BlVHJpZ2dlciB0eXBlPVwiZXhpdFwiIHNjb3BlPXt0aGlzLnNjb3BlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsImltcG9ydCB7IElTY29wZWRDb21wb25lbnQgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBndWlkID0gKGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgfSk7XG4gIH0pKCk7XG5cbmV4cG9ydCBjbGFzcyBFdmVudFNjb3BlPFQ+IHtcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSB0eXBlLCByZWFkb25seSBwYXJlbnRTY29wZSwgcmVhZG9ubHkgY29tcG9uZW50OiBJU2NvcGVkQ29tcG9uZW50KSB7XG4gICAgfVxuXG4gICAgZmlyZSAocHJvcHM6IFQpIHtcbiAgICAgICAgY29uc3QgcGFzc2VkUHJvcHMgPSBwcm9wcyBhcyB7fTtcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSB0aGlzLmZ1bGxQYXRoO1xuICAgICAgICBjb25zdCBmdWxsUGFzc2VkUHJvcHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFzc2VkUHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGZ1bGxQYXNzZWRQcm9wc1tgJHtmdWxsUGF0aH0uJHtrZXl9YF0gPSBwYXNzZWRQcm9wc1trZXldO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBhbGxQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuYWxsUHJvcHMsXG4gICAgICAgICAgICAuLi5mdWxsUGFzc2VkUHJvcHMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgdHlwZTogZnVsbFBhdGgsXG4gICAgICAgICAgICBndWlkLFxuICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIG1halZlcjogMSxcbiAgICAgICAgICAgIG1pblZlcjogMCxcbiAgICAgICAgICAgIHBhdFZlcjogMCxcbiAgICAgICAgICAgIC4uLmFsbFByb3BzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuZnVsbFBhdGh9IWAsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBnZXQgZnVsbFBhdGggKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICAgIGxldCByZWY6IEV2ZW50U2NvcGU8YW55PiA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChyZWYpIHtcbiAgICAgICAgICAgIHBhdGhzLnNwbGljZSgwLCAwLCByZWYudHlwZSk7XG4gICAgICAgICAgICByZWYgPSByZWYucGFyZW50U2NvcGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGhzLmpvaW4oJy4nKTtcbiAgICB9XG5cbiAgICBnZXQgYWxsUHJvcHMgKCk6IHt9IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgbGV0IHJlZjogRXZlbnRTY29wZTxhbnk+ID0gdGhpcztcbiAgICAgICAgd2hpbGUgKHJlZikge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSByZWYuY29tcG9uZW50LnByb3BzO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcG9uZW50UHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW2Ake3JlZi5jb21wb25lbnQuc2NvcGUuZnVsbFBhdGh9LiR7a2V5fWBdID0gY29tcG9uZW50UHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlZiA9IHJlZi5wYXJlbnRTY29wZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxufVxuXG5sZXQgc2NvcGVzOiBFdmVudFNjb3BlPGFueT5bXSA9IFtdO1xubGV0IHNjb3Blc0J5UGF0aDoge30gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVNjb3BlPFQ+ICh0eXBlOiBzdHJpbmcsIGNvbXBvbmVudDogSVNjb3BlZENvbXBvbmVudCkge1xuICAgIGNvbnN0IHNjb3BlID0gbmV3IEV2ZW50U2NvcGU8VD4odHlwZSwgY3VycmVudFNjb3BlKCksIGNvbXBvbmVudCk7XG4gICAgc2NvcGVzQnlQYXRoW3Njb3BlLmZ1bGxQYXRoXSA9IHNjb3BlO1xuICAgIHJldHVybiBzY29wZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRTY29wZSAoKSB7XG4gICAgcmV0dXJuIHNjb3Blc1tzY29wZXMubGVuZ3RoIC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50RGlzcGF0Y2hlcjxUPiAoKTogRXZlbnREaXNwYXRjaGVyPFQ+IHtcbiAgICBjb25zdCBzY29wZSA9IGN1cnJlbnRTY29wZSgpO1xuICAgIHJldHVybiAoZGF0YTogVCkgPT4gc2NvcGUuZmlyZShkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU2NvcGUgKCkge1xuICAgIHNjb3BlcyA9IFtdO1xuICAgIHNjb3Blc0J5UGF0aCA9IHt9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJTY29wZSAoZnVsbFBhdGg6IHN0cmluZyk6IG51bGwge1xuICAgIGNvbnNvbGUuZ3JvdXAoXCJlbnRlciBzY29wZSFcIiwgZnVsbFBhdGgpO1xuICAgIGNvbnN0IHNjb3BlID0gc2NvcGVzQnlQYXRoW2Z1bGxQYXRoXTtcbiAgICBzY29wZXMucHVzaChzY29wZSk7XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGl0U2NvcGUgKGZ1bGxQYXRoOiBzdHJpbmcpOiBudWxsIHtcbiAgICBjb25zb2xlLmxvZyhcImV4aXQgc2NvcGUhXCIsIGZ1bGxQYXRoKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgc2NvcGVzLnBvcCgpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgdHlwZSBFdmVudERpc3BhdGNoZXI8VD4gPSAoZGF0YTogVCkgPT4gdm9pZDtcblxuZXhwb3J0ICogZnJvbSAnLi9zY29wZSc7IiwiaW1wb3J0IHsgRXZlbnRTY29wZUNvbXBvbmVudCB9IGZyb20gJy4uL3Njb3BlJztcblxuZXhwb3J0IGludGVyZmFjZSBBRXZlbnQge1xuICAgIGFQcm9wPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRBIGV4dGVuZHMgRXZlbnRTY29wZUNvbXBvbmVudDxBRXZlbnQ+IHsgfVxuIiwiaW1wb3J0IHsgRXZlbnRTY29wZUNvbXBvbmVudCB9IGZyb20gJy4uL3Njb3BlJztcblxuZXhwb3J0IGludGVyZmFjZSBCRXZlbnQge1xuICAgIGJQcm9wMT86IHN0cmluZztcbiAgICBiUHJvcDI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudEIgZXh0ZW5kcyBFdmVudFNjb3BlQ29tcG9uZW50PEJFdmVudD4geyB9XG4iLCJpbXBvcnQgeyBFdmVudFNjb3BlQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NvcGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENFdmVudCB7XG4gICAgY1Byb3AxPzogbnVtYmVyO1xuICAgIGNQcm9wMj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50QyBleHRlbmRzIEV2ZW50U2NvcGVDb21wb25lbnQ8Q0V2ZW50PiB7IH1cbiIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3VycmVudERpc3BhdGNoZXIsIEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uL2FuYWx5dGljcy9pbmRleCc7XG5pbXBvcnQgeyBBRXZlbnQgfSBmcm9tICcuLi9hbmFseXRpY3MvZXhhbXBsZS1ldmVudHMvRXZlbnRBJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XG4gICAgZGlzcGF0Y2g6IEV2ZW50RGlzcGF0Y2hlcjxBRXZlbnQ+O1xuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCA9IGN1cnJlbnREaXNwYXRjaGVyPEFFdmVudD4oKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgICAgIGFQcm9wOiAnZWZnJyxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRDb25zdW1lckNvbXBvbmVudFwiIG9uQ2xpY2s9e3RoaXMub25DbGlja30+XG4gICAgICAgICAgICAgICAgPGgxPkNvbXBvbmVudEE8L2gxPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iLCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGN1cnJlbnREaXNwYXRjaGVyLCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9hbmFseXRpY3MnO1xuaW1wb3J0IHsgQkV2ZW50IH0gZnJvbSAnLi4vYW5hbHl0aWNzL2V4YW1wbGUtZXZlbnRzL0V2ZW50Qic7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRCIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuICAgIGRpc3BhdGNoOiBFdmVudERpc3BhdGNoZXI8QkV2ZW50PjtcblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2ggPSBjdXJyZW50RGlzcGF0Y2hlcjxCRXZlbnQ+KCk7XG4gICAgfVxuXG4gICAgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgICAgICBiUHJvcDE6ICd4eXonLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudENvbnN1bWVyQ29tcG9uZW50XCIgb25DbGljaz17dGhpcy5vbkNsaWNrfT5cbiAgICAgICAgICAgICAgICA8aDE+Q29tcG9uZW50QjwvaDE+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3VycmVudERpc3BhdGNoZXIsIEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uL2FuYWx5dGljcyc7XG5pbXBvcnQgeyBDRXZlbnQgfSBmcm9tICcuLi9hbmFseXRpY3MvZXhhbXBsZS1ldmVudHMvRXZlbnRDJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XG4gICAgZGlzcGF0Y2g6IEV2ZW50RGlzcGF0Y2hlcjxDRXZlbnQ+O1xuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaCA9IGN1cnJlbnREaXNwYXRjaGVyPENFdmVudD4oKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrID0gKGU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgICAgIGNQcm9wMTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGNQcm9wMjogXCJiYXJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRDb25zdW1lckNvbXBvbmVudFwiIG9uQ2xpY2s9e3RoaXMub25DbGlja30+XG4gICAgICAgICAgICAgICAgPGgxPkNvbXBvbmVudEM8L2gxPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9