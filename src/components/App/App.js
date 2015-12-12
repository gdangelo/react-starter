var React = require('react');
var Hello = require('../Hello/Hello');

var s = require('./App.scss');

module.exports = React.createClass({
  render: function () {
    return <Hello name="Greg" />;
  }
});
