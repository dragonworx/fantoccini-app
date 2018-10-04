import * as React from 'react';
import { Component, Axis } from '../axial';

export interface InputComponent_Props {
  label?: string;
  text?: string;
}

export class InputComponent extends Component<InputComponent_Props> {
  onChange = (e: any) => {
    this.$.text = e.target.value; 
  };

  render () {
    return (
      <Axis id="input" component={this}>
        <label>
          {this.$.label}
          <input type="text" defaultValue={this.$.text} onChange={this.onChange} />
        </label>
      </Axis>
    );
  }
}