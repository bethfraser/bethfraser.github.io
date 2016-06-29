var React = require('react');

var Nav = React.createClass({

  render: function() {
    return (
      <nav className="nav-down">
      <ul>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>
      );
  }
});

module.exports = Nav;
