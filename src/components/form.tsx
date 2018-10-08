import * as React from 'react';
import { AxialComponent, EventHandler, Scope, Export } from '../axial';
import { ButtonComponent } from './button';
import { InputComponent } from './input';

export interface FormComponentProps {
  title?: string;
  onClick?: EventHandler;
}

export class FormComponent extends AxialComponent<FormComponentProps> {
  render () {
    return (
      <Scope id="form">
        <form action="#">
          <h1>{ this.$.title }</h1>
          <Export id="name">
            <InputComponent label="name" text="name" />
          </Export>
          <Export id="password">
            <InputComponent label="password" text="password" />
          </Export>
          <ButtonComponent text={`Submit${Date.now()}`} onClick={ this.bind('onClick') } />
        </form>
      </Scope>
    );
  }
}