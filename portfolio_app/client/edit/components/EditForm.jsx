var React = require('react');
var EditForm = React.createClass({
  getInitialState: function() {
    return {title: '', body: '', headerImage: '', contactInfo: '', facebookURL: '', twitterURL: '', email: '' };
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleBodyChange: function(e) {
    this.setState({body: e.target.value});
  },
  handleImageChange: function(e) {
    this.setState({headerImage: e.target.value});
  },
  handleContactInfoChange: function(e) {
    this.setState({contactInfo: e.target.value});
  },
  handleFacebookURLChange: function(e) {
    this.setState({facebookURL: e.target.value});
  },
  handleTwitterURLChange: function(e) {
    this.setState({twitterURL: e.target.value});
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var body = this.state.body.trim();
    var headerImage = this.state.headerImage.trim();
    var contactInfo = this.state.contactInfo.trim();
    var facebookURL = this.state.facebookURL.trim();
    var twitterURL = this.state.twitterURL.trim();
    var email = this.state.email.trim();
    this.props.onSubmit({title: title, body: body, headerImage: headerImage, contactInfo: contactInfo, facebookURL: facebookURL, twitterURL: twitterURL, email: email});
  },
  componentDidMount: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url);
    request.onload = function(){
      if(request.status === 200){
        var receivedData = JSON.parse(request.responseText);
        this.setState({title: receivedData[0].title,  body: receivedData[0].body, headerImage: receivedData[0].headerImage, contactInfo: receivedData[0].contactInfo, facebookURL: receivedData[0].facebookURL, twitterURL: receivedData[0].twitterURL, email: receivedData[0].email});
      }
    }.bind(this);
    request.send(null);
  },
  
  loadEditForm: function(){
    var formDiv = this.refs.formDiv;
    if(formDiv.style.display == "none"){
      formDiv.style.display = "block";
    }
    else {
      formDiv.style.display = "none";
    }
  },
  render: function() {

    var formStyle = {
      display: "none"
    }

    return(
      <div>
      <div className="edit-nav">
      <a href="/">Preview</a>
      <button onClick={this.loadEditForm}>Edit Page</button>
      </div>
      <div className="form-div" ref="formDiv" style={formStyle}>
      <h3>Edit Your Page</h3>
      <form className="commentForm" onSubmit={this.handleSubmit}>
      <label>Header Text</label>
      <input
      type="text"
      placeholder="Title"
      value={this.state.title}
      onChange={this.handleTitleChange}
      />
      <label>Header Image</label>
      <input
      type="text"
      placeholder="Header Image"
      value={this.state.headerImage}
      onChange={this.handleImageChange}
      />
      <label>Page Body (You can use <a href="http://chibicode.github.io/markdown-toolbar-cheatsheet/" target="new">Markdown</a> or HTML in this section)</label>
      <textarea
      placeholder="Body text"
      value={this.state.body}
      onChange={this.handleBodyChange}
      />
      <label>Contact Section Body (You can use <a href="http://chibicode.github.io/markdown-toolbar-cheatsheet/" target="new">Markdown</a> or HTML in this section)</label>
      <textarea
      placeholder="Contact section text"
      value={this.state.contactInfo}
      onChange={this.handleContactInfoChange}
      />
      <label>Facebook Link</label>
      <input
      type="text"
      placeholder="http://www.facebook.com/"
      value={this.state.facebookURL}
      onChange={this.handleFacebookURLChange}
      />
      <label>Twitter Link</label>
      <input
      type="text"
      placeholder="http://www.twitter.com/"
      value={this.state.twitterURL}
      onChange={this.handleTwitterURLChange}
      />
      <label>Email Address</label>
      <input
      type="text"
      placeholder="you@email.com"
      value={this.state.email}
      onChange={this.handleEmailChange}
      />
      <input type="submit" value="Save" />
      </form></div>
      </div>
      )
  }
});

module.exports = EditForm;
