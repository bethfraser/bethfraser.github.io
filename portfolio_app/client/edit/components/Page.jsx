var React = require('react');
var Header = require('./Header');
var Body = require('./Body');
var Contact = require('./Contact');
var EditForm = require('./EditForm');

var Page = React.createClass({
  getInitialState: function() {
    return {data: [ ]};
  },

  fetchComments: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url);
    request.onload = function(){
      if(request.status === 200){
        var receivedComments = JSON.parse(request.responseText);
        this.setState({data: receivedComments});
      }
    }.bind(this);
    request.send(null);
  },

  componentDidMount: function(){
    this.fetchComments();
    setInterval(this.fetchComments, 10000);
  },

  handleCommentSubmit: function(comment) {
    comment.id = Date.now();
    var newComments = [comment];
    this.setState({data: newComments});

    var request = new XMLHttpRequest();
    request.open("POST", this.props.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({data: data});
      }
    }.bind(this);
    request.send(JSON.stringify(comment));
  },
  render: function() {
    return (
      <div className="commentBox">
      <EditForm url={this.props.url} onSubmit={this.handleCommentSubmit} />
        <Header data={this.state.data} />
        <Body data={this.state.data} />
        <Contact data={this.state.data} />
      </div>
    );
  }
});

module.exports = Page;
