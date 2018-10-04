import * as React from 'react';
import { AbstractModel } from './model';
import { enterAxis, exitAxis } from './index';

export interface ComponentState {
  // todo...
};

export class Component<Props> extends React.Component<Props, ComponentState> {
  static Model: typeof AbstractModel;

  $: any;

  constructor (props) {
    super(props);

    const model = new AbstractModel(props);
    model.addListener((key, value) => {
      this.setState({
        [key]: value,
      })
    });
    this.$ = model;
  }

  render() {
    return <div className="container"></div>;
  }

  emit (fn) {
    if (!fn) {
      return null;
    }
    return (e) => fn({ ...e, $: this.$ });
  }
}


export interface AxisProps {
  id: string;
  component: Component<any>;
};

export interface AxisState {
};

export class Axis extends React.Component<AxisProps, AxisState> {
  componentWillMount () {
    enterAxis(this.props.id, this.props.component);
  }

  componentWillUnmount () {
    exitAxis(this.props.id, this.props.component);
  }

  render () {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export type EventHandler = (e: any) => void;
