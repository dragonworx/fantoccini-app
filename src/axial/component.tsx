import * as React from 'react';
import { AbstractModel } from './model';

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

export type EventHandler = (e: any) => void;