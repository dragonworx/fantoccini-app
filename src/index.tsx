import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { FormComponent } from './components';
import { $ } from './axial';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render((
    <FormComponent title="the form" onClick={() => {
      $('form').title = $('form.input').text;
    }} />
), container);