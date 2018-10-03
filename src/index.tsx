import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { FormComponent } from './components';

const container = document.createElement('div');
document.body.appendChild(container);

let c = 0;

ReactDOM.render((
 <FormComponent title="the form" onClick={({ $ }) => console.log("!!!")} />
), container);