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
    }
    render() {
        return React.createElement(scope_1.EventWrapper, null, this.state.mode === 1
            ? (React.createElement(EventA_1.EventA, { aProp: "foo1" },
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
                    React.createElement("button", { onClick: this.onClick(2) }, "Switch"))))
            : (React.createElement(EventA_1.EventA, { aProp: "foo2" },
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
                    React.createElement("button", { onClick: this.onClick(1) }, "Switch")))));
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
const index_1 = __webpack_require__(5);
class ComponentB extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            this.dispatch({
                bProp1: 'xyz',
            });
        };
        this.dispatch = index_1.currentDispatcher();
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
const index_1 = __webpack_require__(5);
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
        this.dispatch = index_1.currentDispatcher();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hbmFseXRpY3Mvc2NvcGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hbmFseXRpY3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuYWx5dGljcy9leGFtcGxlLWV2ZW50cy9FdmVudEEudHN4Iiwid2VicGFjazovLy8uL3NyYy9hbmFseXRpY3MvZXhhbXBsZS1ldmVudHMvRXZlbnRCLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYW5hbHl0aWNzL2V4YW1wbGUtZXZlbnRzL0V2ZW50Qy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuYWx5dGljcy9leGFtcGxlLWV2ZW50cy9Db21wb25lbnRBLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYW5hbHl0aWNzL2V4YW1wbGUtZXZlbnRzL0NvbXBvbmVudEIudHN4Iiwid2VicGFjazovLy8uL3NyYy9hbmFseXRpY3MvZXhhbXBsZS1ldmVudHMvQ29tcG9uZW50Qy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LENBQUMsUUFBUSxDQUFDO2dCQUNWLE1BQU0sRUFBRSxLQUFLO2FBQ2hCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQVBFLElBQUksQ0FBQyxRQUFRLEdBQUcseUJBQWlCLEVBQVUsQ0FBQztJQUNoRCxDQUFDO0lBUUQsTUFBTTtRQUNGLE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUMsd0JBQXdCLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3pELDZDQUFtQjtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDbkIsQ0FDVDtJQUNMLENBQUM7Q0FDSjtBQXRCRCxnQ0FzQkM7Ozs7Ozs7Ozs7QUMxQkQscUNBQStCO0FBQy9CLHVDQUE4RDtBQUc5RCxnQkFBd0IsU0FBUSxLQUFLLENBQUMsU0FBaUI7SUFHbkQsWUFBYSxLQUFLO1FBQ2QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSWpCLFlBQU8sR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2xCLE1BQU0sRUFBRSxLQUFLO2FBQ2hCLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFURSxJQUFJLENBQUMsUUFBUSxHQUFHLHlCQUFpQixFQUFVLENBQUM7SUFDaEQsQ0FBQztJQVVELE1BQU07UUFDRixPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFDLHdCQUF3QixFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUN6RCw2Q0FBbUI7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ25CLENBQ1Q7SUFDTCxDQUFDO0NBQ0o7QUF4QkQsZ0NBd0JDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgRXhhbXBsZSB9IGZyb20gJy4vZXhhbXBsZSc7XHJcblxyXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcigoXHJcbiAgPEV4YW1wbGUgLz5cclxuKSwgY29udGFpbmVyKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFdmVudFdyYXBwZXIgfSBmcm9tICcuL2FuYWx5dGljcy9zY29wZSc7XHJcbmltcG9ydCB7IEV2ZW50QSB9IGZyb20gJy4vYW5hbHl0aWNzL2V4YW1wbGUtZXZlbnRzL0V2ZW50QSc7XHJcbmltcG9ydCB7IEV2ZW50QiB9IGZyb20gJy4vYW5hbHl0aWNzL2V4YW1wbGUtZXZlbnRzL0V2ZW50Qic7XHJcbmltcG9ydCB7IEV2ZW50QyB9IGZyb20gJy4vYW5hbHl0aWNzL2V4YW1wbGUtZXZlbnRzL0V2ZW50Qyc7XHJcbmltcG9ydCB7IENvbXBvbmVudEEgfSBmcm9tICcuL2FuYWx5dGljcy9leGFtcGxlLWV2ZW50cy9Db21wb25lbnRBJztcclxuaW1wb3J0IHsgQ29tcG9uZW50QiB9IGZyb20gJy4vYW5hbHl0aWNzL2V4YW1wbGUtZXZlbnRzL0NvbXBvbmVudEInO1xyXG5pbXBvcnQgeyBDb21wb25lbnRDIH0gZnJvbSAnLi9hbmFseXRpY3MvZXhhbXBsZS1ldmVudHMvQ29tcG9uZW50Qyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIG1vZGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIFN0YXRlPiB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb2RlOiAxLFxyXG4gICAgfTtcclxuXHJcbiAgICBvbkNsaWNrID0gKG1vZGU6IG51bWJlcikgPT4gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vZGUgfSk7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8RXZlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1vZGUgPT09IDFcclxuICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50QSBhUHJvcD1cImZvbzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Nb2RlIDE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+YVByb3A9XCJmb28xXCI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRCIGJQcm9wMj17MTIzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5iUHJvcDI9MTIzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRCPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rIGJQcm9wMT1cInh5elwiPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tcG9uZW50Qj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRXZlbnRCPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudEE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+KyBhUHJvcD1cImVmZ1wiPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudEM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRDPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+KyBjUHJvcDE9RGF0ZS5ub3coKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPisgY1Byb3AyPVwiYmFyXCI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tcG9uZW50Qz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0V2ZW50Qz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tcG9uZW50QT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrKDIpfT5Td2l0Y2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9FdmVudEE+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRBIGFQcm9wPVwiZm9vMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPk1vZGUgMjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5hUHJvcD1cImZvbzJcIjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudEIgYlByb3AyPXs0NTZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmJQcm9wMj00NTY8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudEI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPisgYlByb3AxPVwieHl6XCI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudEM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50Qz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rIGNQcm9wMT1EYXRlLm5vdygpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPisgY1Byb3AyPVwiYmFyXCI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbXBvbmVudEM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRXZlbnRDPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tcG9uZW50Qj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRXZlbnRCPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2soMSl9PlN3aXRjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0V2ZW50QT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0V2ZW50V3JhcHBlcj5cclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRlZmluZVNjb3BlLCBFdmVudFNjb3BlLCBjbGVhclNjb3BlLCBlbnRlclNjb3BlLCBleGl0U2NvcGUgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNjb3BlZENvbXBvbmVudCB7XHJcbiAgc2NvcGU6IEV2ZW50U2NvcGU8YW55PjtcclxuICBwcm9wczoge307XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNsZWFyU2NvcGUoKTtcclxuICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRXZlbnQgU3RhY2sgQ2xlYXJlZCFcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50V3JhcHBlclwiPlxyXG4gICAgICAgIDxoMT5FdmVudCBXcmFwcGVyPC9oMT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY29wZVRyaWdnZXJQcm9wcyB7XHJcbiAgc2NvcGU6IEV2ZW50U2NvcGU8YW55PjtcclxuICB0eXBlOiAnZW50ZXInIHwgJ2V4aXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY29wZVRyaWdnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2NvcGVUcmlnZ2VyUHJvcHMsIHt9PiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzY29wZSwgdHlwZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnNvbGUubG9nKGByZW5kZXIgJHt0eXBlfWAsIHNjb3BlLmZ1bGxQYXRoKTtcclxuICAgIGlmICh0eXBlID09PSAnZW50ZXInKSB7XHJcbiAgICAgIGVudGVyU2NvcGUoc2NvcGUuZnVsbFBhdGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXhpdFNjb3BlKHNjb3BlLmZ1bGxQYXRoKTtcclxuICAgIH1cclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2BzY29wZVRyaWdnZXIgJHt0eXBlfWB9PiZsdDt7dHlwZSA9PT0gJ2V4aXQnID8gJy8nIDogJyd9PGI+e3Njb3BlLnR5cGV9PC9iPiA8aT57c2NvcGUuZnVsbFBhdGh9PC9pPiZndDs8L3NwYW4+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV2ZW50U2NvcGVDb21wb25lbnQ8VD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VCwge30+IGltcGxlbWVudHMgSVNjb3BlZENvbXBvbmVudCB7XHJcbiAgc2NvcGU6IEV2ZW50U2NvcGU8YW55PjtcclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gZGVmaW5lU2NvcGU8VD4odGhpcy50eXBlLCB0aGlzIGFzIElTY29wZWRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29wZUNvbXBvbmVudFwiPlxyXG4gICAgICAgIDxTY29wZVRyaWdnZXIgdHlwZT1cImVudGVyXCIgc2NvcGU9e3RoaXMuc2NvcGV9IC8+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPFNjb3BlVHJpZ2dlciB0eXBlPVwiZXhpdFwiIHNjb3BlPXt0aGlzLnNjb3BlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgSVNjb3BlZENvbXBvbmVudCB9IGZyb20gJy4vc2NvcGUnXHJcblxyXG5jb25zdCBndWlkID0gKGZ1bmN0aW9uIHV1aWR2NCgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxuICB9KSgpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50U2NvcGU8VD4ge1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgdHlwZSwgcmVhZG9ubHkgcGFyZW50U2NvcGUsIHJlYWRvbmx5IGNvbXBvbmVudDogSVNjb3BlZENvbXBvbmVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUgKHByb3BzOiBUKSB7XHJcbiAgICAgICAgY29uc3QgcGFzc2VkUHJvcHMgPSBwcm9wcyBhcyB7fTtcclxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHRoaXMuZnVsbFBhdGg7XHJcbiAgICAgICAgY29uc3QgZnVsbFBhc3NlZFByb3BzID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMocGFzc2VkUHJvcHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgZnVsbFBhc3NlZFByb3BzW2Ake2Z1bGxQYXRofS4ke2tleX1gXSA9IHBhc3NlZFByb3BzW2tleV07XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBhbGxQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5hbGxQcm9wcyxcclxuICAgICAgICAgICAgLi4uZnVsbFBhc3NlZFByb3BzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IGZ1bGxQYXRoLFxyXG4gICAgICAgICAgICBndWlkLFxyXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBtYWpWZXI6IDEsXHJcbiAgICAgICAgICAgIG1pblZlcjogMCxcclxuICAgICAgICAgICAgcGF0VmVyOiAwLFxyXG4gICAgICAgICAgICAuLi5hbGxQcm9wcyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmZ1bGxQYXRofSFgLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZ1bGxQYXRoICgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHBhdGhzID0gW107XHJcbiAgICAgICAgbGV0IHJlZjogRXZlbnRTY29wZTxhbnk+ID0gdGhpcztcclxuICAgICAgICB3aGlsZSAocmVmKSB7XHJcbiAgICAgICAgICAgIHBhdGhzLnNwbGljZSgwLCAwLCByZWYudHlwZSk7XHJcbiAgICAgICAgICAgIHJlZiA9IHJlZi5wYXJlbnRTY29wZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGhzLmpvaW4oJy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsUHJvcHMgKCk6IHt9IHtcclxuICAgICAgICBjb25zdCBwcm9wcyA9IHt9O1xyXG4gICAgICAgIGxldCByZWY6IEV2ZW50U2NvcGU8YW55PiA9IHRoaXM7XHJcbiAgICAgICAgd2hpbGUgKHJlZikge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRQcm9wcyA9IHJlZi5jb21wb25lbnQucHJvcHM7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudFByb3BzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbYCR7cmVmLmNvbXBvbmVudC5zY29wZS5mdWxsUGF0aH0uJHtrZXl9YF0gPSBjb21wb25lbnRQcm9wc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVmID0gcmVmLnBhcmVudFNjb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvcHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBzY29wZXM6IEV2ZW50U2NvcGU8YW55PltdID0gW107XHJcbmxldCBzY29wZXNCeVBhdGg6IHt9ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lU2NvcGU8VD4gKHR5cGU6IHN0cmluZywgY29tcG9uZW50OiBJU2NvcGVkQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBzY29wZSA9IG5ldyBFdmVudFNjb3BlPFQ+KHR5cGUsIGN1cnJlbnRTY29wZSgpLCBjb21wb25lbnQpO1xyXG4gICAgc2NvcGVzQnlQYXRoW3Njb3BlLmZ1bGxQYXRoXSA9IHNjb3BlO1xyXG4gICAgcmV0dXJuIHNjb3BlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudFNjb3BlICgpIHtcclxuICAgIHJldHVybiBzY29wZXNbc2NvcGVzLmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudERpc3BhdGNoZXI8VD4gKCk6IEV2ZW50RGlzcGF0Y2hlcjxUPiB7XHJcbiAgICBjb25zdCBzY29wZSA9IGN1cnJlbnRTY29wZSgpO1xyXG4gICAgcmV0dXJuIChkYXRhOiBUKSA9PiBzY29wZS5maXJlKGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTY29wZSAoKSB7XHJcbiAgICBzY29wZXMgPSBbXTtcclxuICAgIHNjb3Blc0J5UGF0aCA9IHt9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW50ZXJTY29wZSAoZnVsbFBhdGg6IHN0cmluZyk6IG51bGwge1xyXG4gICAgY29uc29sZS5ncm91cChcImVudGVyIHNjb3BlIVwiLCBmdWxsUGF0aCk7XHJcbiAgICBjb25zdCBzY29wZSA9IHNjb3Blc0J5UGF0aFtmdWxsUGF0aF07XHJcbiAgICBzY29wZXMucHVzaChzY29wZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRTY29wZSAoZnVsbFBhdGg6IHN0cmluZyk6IG51bGwge1xyXG4gICAgY29uc29sZS5sb2coXCJleGl0IHNjb3BlIVwiLCBmdWxsUGF0aCk7XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICBzY29wZXMucG9wKCk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRXZlbnREaXNwYXRjaGVyPFQ+ID0gKGRhdGE6IFQpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL3Njb3BlJzsiLCJpbXBvcnQgeyBFdmVudFNjb3BlQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NvcGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBRXZlbnQge1xyXG4gICAgYVByb3A/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEEgZXh0ZW5kcyBFdmVudFNjb3BlQ29tcG9uZW50PEFFdmVudD4geyB9XHJcbiIsImltcG9ydCB7IEV2ZW50U2NvcGVDb21wb25lbnQgfSBmcm9tICcuLi9zY29wZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJFdmVudCB7XHJcbiAgICBiUHJvcDE/OiBzdHJpbmc7XHJcbiAgICBiUHJvcDI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEIgZXh0ZW5kcyBFdmVudFNjb3BlQ29tcG9uZW50PEJFdmVudD4geyB9XHJcbiIsImltcG9ydCB7IEV2ZW50U2NvcGVDb21wb25lbnQgfSBmcm9tICcuLi9zY29wZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENFdmVudCB7XHJcbiAgICBjUHJvcDE/OiBudW1iZXI7XHJcbiAgICBjUHJvcDI/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEMgZXh0ZW5kcyBFdmVudFNjb3BlQ29tcG9uZW50PENFdmVudD4geyB9XHJcbiIsIlxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGN1cnJlbnREaXNwYXRjaGVyLCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IEFFdmVudCB9IGZyb20gJy4vRXZlbnRBJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRBIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgZGlzcGF0Y2g6IEV2ZW50RGlzcGF0Y2hlcjxBRXZlbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoID0gY3VycmVudERpc3BhdGNoZXI8QUV2ZW50PigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIGFQcm9wOiAnZWZnJyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRDb25zdW1lckNvbXBvbmVudFwiIG9uQ2xpY2s9e3RoaXMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICA8aDE+Q29tcG9uZW50QTwvaDE+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjdXJyZW50RGlzcGF0Y2hlciwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBCRXZlbnQgfSBmcm9tICcuL0V2ZW50Qic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50QiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICAgIGRpc3BhdGNoOiBFdmVudERpc3BhdGNoZXI8QkV2ZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaCA9IGN1cnJlbnREaXNwYXRjaGVyPEJFdmVudD4oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICBiUHJvcDE6ICd4eXonLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudENvbnN1bWVyQ29tcG9uZW50XCIgb25DbGljaz17dGhpcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxoMT5Db21wb25lbnRCPC9oMT5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGN1cnJlbnREaXNwYXRjaGVyLCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IENFdmVudCB9IGZyb20gJy4vRXZlbnRDJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgZGlzcGF0Y2g6IEV2ZW50RGlzcGF0Y2hlcjxDRXZlbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoID0gY3VycmVudERpc3BhdGNoZXI8Q0V2ZW50PigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2sgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIGNQcm9wMTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgY1Byb3AyOiBcImJhclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50Q29uc3VtZXJDb21wb25lbnRcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgPGgxPkNvbXBvbmVudEM8L2gxPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==