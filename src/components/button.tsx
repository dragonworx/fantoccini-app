import * as React from 'react';
import { AxialComponent, EventHandler } from '../axial';

export interface ButtonComponentProps {
  text?: string;
  onClick?: EventHandler;
}

export class ButtonComponent extends AxialComponent<ButtonComponentProps> {
  render () {
    return (
      <button onClick={ this.bind('onClick') }>
        { this.$.text }
      </button>
    );
  }
}