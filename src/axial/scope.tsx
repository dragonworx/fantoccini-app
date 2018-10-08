import * as React from 'react';

const scopes: {}[] = [];

export interface ScopeProps {
  id: string;
};

export interface ScopeState {
  level?: number;
  scope?: any;
};

export interface IScope {
  parent?: IScope;
}

export class Scope extends React.Component<ScopeProps, ScopeState> {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    const { props: { id } } = this;
    const newScope: IScope = {};
    const level = scopes.length;
    const pad = '->'.repeat(level);
    console.log(`${pad}${id}`);
    const currentScope: IScope | undefined = scopes[scopes.length - 1];
    scopes.push(newScope);
    if (currentScope) {
      currentScope[id] = newScope;
      newScope.parent = currentScope;
    }
  }

  componentWillUnmount () {
 
  }

  render() {
    return (
      <>{ this.props.children }</>
    );
  }
}

export interface ExportProps {
  id: string;
};

export interface ExportState {
  // todo...
};

export interface IScope {
  parent?: IScope;
}

export class Export extends React.Component<ExportProps, ExportState> {
  constructor (props) {
    super(props);

  }

  componentWillMount () {

  }

  componentWillUnmount () {
 
  }

  render() {
    return (
      <>{ this.props.children }</>
    );
  }
}