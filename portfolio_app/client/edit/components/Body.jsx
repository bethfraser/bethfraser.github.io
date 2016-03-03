var React = require('react');
var marked = require('marked')

var Body = React.createClass({
  render: function() {

    var data = this.props.data || [];

    var bodyInfo = data.map(function(body,index){

      var bodyHTML = marked(body.body.toString(), {sanitize: false});

      return (
        <div dangerouslySetInnerHTML={{__html: bodyHTML}} key={index}>
          
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
