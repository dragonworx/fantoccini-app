import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { App, FormComponent } from './components';

const container = document.createElement('div');
document.body.appendChild(container);

let c = 0;

ReactDOM.render((
  <App>
    <FormComponent title="the form" onClick={({ $ }) => {
      $.select('form').title = $.select('form.input').text;
    }} />
  </App>
), container);