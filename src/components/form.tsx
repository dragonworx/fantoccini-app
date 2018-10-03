import * as React from 'react';
import { Component, EventHandler, axis } from '../axial';
import { ButtonComponent } from './button';
import { InputComponent } from './input';

export interface FormComponentProps {
  title?: string;
  onClick?: EventHandler;
}

export class FormComponent extends Component<FormComponentProps> {
  render () {
    return (
      <div data-axis={axis('form', this)}>
        <h1>{ this.$.title }</h1>
        <InputComponent label="info" text="input value" />
        <ButtonComponent text="Submit" onClick={this.emit(this.props.onClick)} />
      </div>
    );
  }
}