import * as React from 'react';
import { AbstractComponent, Handler } from '../component';

export interface ButtonComponentProps {
  text?: string;
  onClick?: Handler;
}

export class ButtonComponent extends AbstractComponent<ButtonComponentProps> {
  render () {
    return <button onClick={this.emit(this.props.onClick)}>{this.model.text}</button>;
  }
}