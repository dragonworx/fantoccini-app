import * as React from 'react';
import { AbstractComponent, EventHandler } from '../axial';

export interface ButtonComponentProps {
  text?: string;
  onClick?: EventHandler;
}

export class ButtonComponent extends AbstractComponent<ButtonComponentProps> {
  render () {
    return <button onClick={this.emit(this.props.onClick)}>{this.model.text}</button>;
  }
}