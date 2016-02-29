var React = require('react');
var ReactDOM = require('react-dom');
var Page = require('./components/Page.jsx');

window.onload = function(){
  ReactDOM.render(
    <Page url="http://localhost:5000/api/homepage" />,
    document.getElementById('app')
  );
}
