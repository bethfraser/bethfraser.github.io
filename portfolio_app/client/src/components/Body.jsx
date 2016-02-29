var React = require('react');

var Body = React.createClass({
  render: function() {

    var data = this.props.data || [];

    var bodyInfo = data.map(function(body,index){

      return (
        <div key={index}>
          {body.body}
          </div>
      );
    });

    return (
      <div className="body-div">
        {bodyInfo}
      </div>
    );
  }
});
module.exports = Body;
