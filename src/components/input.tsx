import * as React from 'react';
import { Component, EventHandler } from '../axial';

export interface InputComponent_Props {
  label?: string;
  text?: string;
}

export class InputComponent extends Component<InputComponent_Props> {
  render () {
    return <label>{this.$.label}<input type="text" defaultValue={this.$.text} /></label>;
  }
}