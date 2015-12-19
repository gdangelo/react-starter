import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

var element = React.createElement(App, {});
render(element, document.querySelector('.container'));
