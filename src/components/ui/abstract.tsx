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
    return (e) => fn({ ...e, model: this.model });
  }
}

export type Handler = (e: any) => void;