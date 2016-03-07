var React = require('react');
var Header = require('./Header');
var Body = require('./Body');
var Contact = require('./Contact');
var Nav = require('./Nav');
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
        <Nav />
        <Header data={this.state.data} />
        <Body data={this.state.data} />
        <Contact data={this.state.data} />
      </div>
    );
  }
});

module.exports = Page;
