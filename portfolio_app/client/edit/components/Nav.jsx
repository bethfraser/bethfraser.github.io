var React = require('react');

var Nav = React.createClass({

  render: function() {




    return (
      <div className="nav">
      Navigation
      <ul>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      </div>
      );
  }
});

module.exports = Nav;
