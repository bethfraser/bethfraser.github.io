var React = require('react');
var Header = require('./Header');
var Body = require('./Body');
var Projects = require('./Projects');
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

  render: function() {
    return (
      <div className="commentBox">
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
