import * as React from 'react';
import { AbstractModel } from '../../models';

export interface AbstractComponentState {
  // todo...
};

export class AbstractComponent extends React.Component<any, AbstractComponentState> {
  static Model: typeof AbstractModel;

  model: any;

  constructor (props) {
    super(props);

    const Model = (this as any).__proto__.constructor.Model;
    const model: AbstractModel = Model.create(props);
    model.addListener((key, value) => {
      console.log('!', key, value);
    });
    this.model = model;
  }

  render() {
    return <div className="container"></div>;
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }
}