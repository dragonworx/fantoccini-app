import { IScopedComponent } from './scope'

const guid = (function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  })();

export class EventScope<T> {
    constructor(readonly type, readonly parentScope, readonly component: IScopedComponent) {
    }

    fire (props: T) {
        const passedProps = props as {};
        const fullPath = this.fullPath;
        const fullPassedProps = {};
        Object.keys(passedProps).forEach(key => {
            fullPassedProps[`${fullPath}.${key}`] = passedProps[key];
        })
        const allProps = {
            ...this.allProps,
            ...fullPassedProps,
        };
        const event = {
            type: fullPath,
            guid,
            time: Date.now(),
            majVer: 1,
            minVer: 0,
            patVer: 0,
            ...allProps,
        };

        console.log(`${this.fullPath}!`, event);
    }

    get fullPath (): string {
        const paths = [];
        let ref: EventScope<any> = this;
        while (ref) {
            paths.splice(0, 0, ref.type);
            ref = ref.parentScope;
        }
        return paths.join('.');
    }

    get allProps (): {} {
        const props = {};
        let ref: EventScope<any> = this;
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

let scopes: EventScope<any>[] = [];
let scopesByPath: {} = {};

export function defineScope<T> (type: string, component: IScopedComponent) {
    const scope = new EventScope<T>(type, currentScope(), component);
    scopesByPath[scope.fullPath] = scope;
    return scope;
}

export function currentScope () {
    return scopes[scopes.length - 1];
}

export function currentDispatcher<T> (): EventDispatcher<T> {
    const scope = currentScope();
    return (data: T) => scope.fire(data);
}

export function clearScope () {
    scopes = [];
    scopesByPath = {};
}

export function enterScope (fullPath: string): null {
    console.group("enter scope!", fullPath);
    const scope = scopesByPath[fullPath];
    scopes.push(scope);
    return null;
}

export function exitScope (fullPath: string): null {
    console.log("exit scope!", fullPath);
    console.groupEnd();
    scopes.pop();
    return null;
}

export type EventDispatcher<T> = (data: T) => void;

export * from './scope';