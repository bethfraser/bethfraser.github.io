var React = require('react');
var Header = require('./Header');
var Body = require('./Body');
var CommentForm = require('./CommentForm');
var data = require('json!../../../../pages_api/homepage.json')

var Page = React.createClass({
  getInitialState: function() {
    return {data: [ ]};
  },

  fetchComments: function(){
    this.setState({data: data})
  },

  componentDidMount: function(){
    this.fetchComments();
    setInterval(this.fetchComments, 10000);
  },

  render: function() {
    return (
      <div className="commentBox">
        <Header data={this.state.data} />
        <Body data={this.state.data} />
      </div>
    );
  }
});

module.exports = Page;
