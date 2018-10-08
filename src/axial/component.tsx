import * as React from 'react';
import { AbstractModel } from './model';

function getComponentShortName (self) {
  return (self as any).__proto__.constructor.name.replace(/Component$/, '').toLowerCase();
}

export interface ComponentState {
  // todo...
};

export class AxialComponent<Props> extends React.Component<Props, ComponentState> {
  static Model: typeof AbstractModel;

  $: any;

  constructor (props) {
    super(props);

    const model = new AbstractModel(props);
    model.addListener((key, value) => {
      this.setState({
        [key]: value,
      });
      this.onNewState(key, value);
    });
    this.$ = model;
  }

  onNewState (key, value) {
    // subclass...
  }

  render() {
    const { props } = this;

    return <>{ props.children }</>;
  }

  bind (name: string) {
    const fn = this.props[name];
    if (!fn) {
      return null;
    }
    return (e) => fn({ ...e, $: this.$ });
  }
}

export type EventHandler = (e: any) => void;