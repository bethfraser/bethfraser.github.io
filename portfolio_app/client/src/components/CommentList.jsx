var React = require('react');
var Comment = require('./Comment.jsx')

var CommentList = React.createClass({
  render: function() {

    var data = this.props.data || [];

    var commentNodes = data.map(function(comment,index){

      var headerStyle = {
        backgroundImage: "url('" + comment.headerImage + "')",
        backgroundSize: "cover",
        height: "100px"
      }

      var titleStyle = {
        textAlign: "center",
        lineHeight: "100px",
        color: "white",
        textShadow: "3px 3px 5px navy"
      }

      var bodyStyle = {
        padding: "20px",
        fontFamily: "Georgia"
      }

      return (
        <div key={index}>
        <div style={headerStyle}>
        <h1 style={titleStyle}>{comment.title}</h1>
        </div>
        <div style={bodyStyle}>
          {comment.body}
          </div>
        </div>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
module.exports = CommentList;
