var React = require('react');
var Header = require('./Header');
var Body = require('./Body');
var Projects = require('./Projects');
var Contact = require('./Contact');
var Nav = require('./Nav');
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
    setInterval(this.fetchComments, 1000);

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    // on scroll, let the interval function know the user has scrolled
    $(window).scroll(function(event){
      didScroll = true;
    });
    // run hasScrolled() and reset didScroll status
    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled(){
      var st = $(window).scrollTop();
      if (Math.abs(lastScrollTop - st) <= delta)
        return;
      // If current position > last position AND scrolled past navbar...
      if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
      } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        if(st + $(window).height() < $(document).height()) { 
          $('nav').removeClass('nav-up').addClass('nav-down');
        }
      }
      lastScrollTop = st;
    }
    
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
        <Nav />
        <Header data={this.state.data} />
        <Body data={this.state.data} />
        <Projects data={this.state.data} />
        <Contact data={this.state.data} />
      </div>
    );
  }
});

module.exports = Page;
