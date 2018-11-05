import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Example } from './example';

let container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render((
  <Example />
), container);