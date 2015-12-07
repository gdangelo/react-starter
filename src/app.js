var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function () {
    return React.createElement('h1', null, 'Hello, World!');
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
