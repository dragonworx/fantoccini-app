
import * as React from 'react';
import { defineScope, EventScope, clearScope, enterScope, exitScope } from './index';

export interface IScopedComponent {
  scope: EventScope<any>;
  props: {};
}

export class EventWrapper extends React.Component<{}, {}> {
  render () {
    clearScope();
    console.clear();
    console.log("Event Stack Cleared!");
    return (
      <div className="eventWrapper">
        <h1>Event Wrapper</h1>
        {this.props.children}
      </div>
    );
  }
}

export interface ScopeTriggerProps {
  scope: EventScope<any>;
  type: 'enter' | 'exit'
}

export class ScopeTrigger extends React.Component<ScopeTriggerProps, {}> {
  render() {
    const { scope, type } = this.props;
    console.log(`render ${type}`, scope.fullPath);
    if (type === 'enter') {
      enterScope(scope.fullPath);
    } else {
      exitScope(scope.fullPath);
    }
    return <span className={`scopeTrigger ${type}`}>&lt;{type === 'exit' ? '/' : ''}<b>{scope.type}</b> <i>{scope.fullPath}</i>&gt;</span>;
  }
}

export abstract class EventScopeComponent<T> extends React.Component<T, {}> implements IScopedComponent {
  scope: EventScope<any>;

  get type(): string {
    return (this as any).constructor.name;
  }

  render() {
    this.scope = defineScope<T>(this.type, this as IScopedComponent);
    return (
      <div className="scopeComponent">
        <ScopeTrigger type="enter" scope={this.scope} />
        {this.props.children}
        <ScopeTrigger type="exit" scope={this.scope} />
      </div>
    );
  }
}