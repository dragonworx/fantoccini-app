import * as React from 'react';
import { Component, EventHandler } from '../axial';

export interface ButtonComponentProps {
  text?: string;
  onClick?: EventHandler;
}

export class ButtonComponent extends Component<ButtonComponentProps> {
  render () {
    return <button onClick={this.emit(this.props.onClick)}>{this.$.text}</button>;
  }
}