var React = require('react');

var Header = React.createClass({
  render: function() {

    var data = this.props.data || [];

    var headerInfo = data.map(function(header,index){

      var headerStyle = {
      backgroundImage: "url('" + header.headerImage + "')"
      }

      return (
        <header style={headerStyle} key={index}>
        <h1 className="title">{header.title}</h1>
        </header>
      );
    });

    return (
      <div className="header-div">
        {headerInfo}
      </div>
    );
  }
});
module.exports = Header;
