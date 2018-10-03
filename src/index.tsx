import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { ButtonComponent } from './components/ui';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render((
 <ButtonComponent text="abc"></ButtonComponent> 
), container);