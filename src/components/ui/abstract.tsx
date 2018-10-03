import * as React from 'react';
import {
  AbstractModel,
  ButtonModel,
} from '../../models';

const Models = {
  ButtonModel,
};

export interface AbstractComponentState {
  // todo...
};

export class AbstractComponent<Props> extends React.Component<Props, AbstractComponentState> {
  static Model: typeof AbstractModel;

  model: any;

  constructor (props) {
    super(props);

    const modelName = (this as any).__proto__.constructor.name.replace(/Component$/, 'Model');
    const Model = Models[modelName];
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