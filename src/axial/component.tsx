import * as React from 'react';
import { AbstractModel } from './model';

export interface AbstractComponentState {
  // todo...
};

export class AbstractComponent<Props> extends React.Component<Props, AbstractComponentState> {
  static Model: typeof AbstractModel;

  model: any;

  constructor (props) {
    super(props);

    const model = new AbstractModel(props);
    model.addListener((key, value) => {
      console.log(`on: "${key}": ${JSON.stringify(value)}`);
      this.setState({
        [key]: value,
      })
    });
    this.model = model;
  }

  render() {
    return <div className="container"></div>;
  }

  emit (fn) {
    if (!fn) {
      return null;
    }
    return (e) => fn({ ...e, model: this.model });
  }
}

export type EventHandler = (e: any) => void;