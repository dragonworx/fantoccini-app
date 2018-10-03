import * as React from 'react';
import { AbstractComponent } from './abstract';
import { ButtonModel } from '../../models'

export class ButtonComponent extends AbstractComponent {
  static Model = ButtonModel;

  render () {
    return (
      <button>{this.model.text}</button>
    );
  }
};