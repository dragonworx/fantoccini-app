import * as React from 'react';
import { AbstractComponent } from './abstract';

export interface ButtonComponentProps {
  text?: string;
}

export class ButtonComponent extends AbstractComponent<ButtonComponentProps> {
  render () {
    return <button>{this.model.text}</button>;
  }
}