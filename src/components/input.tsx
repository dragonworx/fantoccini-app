import * as React from 'react';
import { AxialComponent } from '../axial';

export interface InputComponent_Props {
  label?: string;
  text?: string;
}

export class InputComponent extends AxialComponent<InputComponent_Props> {
  _input: HTMLElement;

  onInputChange = (e: any) => {
    this.$.text = e.target.value;
    console.log("a");
  };

  onKeyUp = (e: any) => {
    if (e.keyCode === 27) {
      // esc
      this.$.text = '';
    }
  };

  onNewState (key, value) {
    console.log('xxx', key, value);
    (this._input as HTMLInputElement).value = value;
  }

  render () {
    return (
      <label>
        { this.$.label }
        <input ref={ el => this._input = el } type="text" defaultValue={ this.$.text }
          onChange={ this.onInputChange } 
          onKeyUp={ this.onKeyUp } 
        />
      </label>
    );
  }
}