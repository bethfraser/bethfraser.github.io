var React = require('react');

var Header = React.createClass({
  render: function() {

    var data = this.props.data || [];

    var headerInfo = data.map(function(header,index){

      var headerStyle = {
        backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" + header.headerImage + ")"
      }

      return (
        <header style={headerStyle} key={index}>
        <div className="title">
        <h1 className="animated fadeInUp">{header.title}</h1>
        </div>
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
