import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { ButtonComponent } from './components/ui';

const container = document.createElement('div');
document.body.appendChild(container);

let c = 0;

ReactDOM.render((
 <ButtonComponent text="abc" onClick={({ model }) => model.text = c++} />
), container);