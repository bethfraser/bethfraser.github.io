var React = require('react');

var Header = React.createClass({
  render: function() {

    var data = this.props.data || [];

    var headerInfo = data.map(function(header,index){

      var headerStyle = {
        backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(to top, rgba(25, 160, 195, 0.5), rgba(25, 160, 195, 0.5)), url(" + header.headerImage + ")"
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
