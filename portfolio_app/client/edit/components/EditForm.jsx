var React = require('react');
var EditForm = React.createClass({
  getInitialState: function() {
    return {title: '', body: '', headerImage: '', contactInfo: '', facebookURL: '', twitterURL: '', email: '', projectImageOne: '', projectImageTwo: '', projectImageThree: '', projectInfoOne: '', projectInfoTwo: '', projectInfoThree: '' };
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
  handleInputChange: function(selector, value) {
    var state = new Object();
    state[selector] = value;
    this.setState(state);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state)
    var title = this.state.title.trim();
    var body = this.state.body.trim();
    var headerImage = this.state.headerImage.trim();
    var projectImageOne = this.state.projectImageOne.trim();
    var projectImageTwo = this.state.projectImageTwo.trim();
    var projectImageThree = this.state.projectImageThree.trim();
    var projectInfoOne = this.state.projectInfoOne.trim();
    var projectInfoTwo = this.state.projectInfoTwo.trim();
    var projectInfoThree = this.state.projectInfoThree.trim();
    var contactInfo = this.state.contactInfo.trim();
    var facebookURL = this.state.facebookURL.trim();
    var twitterURL = this.state.twitterURL.trim();
    var email = this.state.email.trim();
    this.props.onSubmit({title: title, body: body, headerImage: headerImage, projectImageOne: projectImageOne, projectImageTwo: projectImageTwo, projectImageThree: projectImageThree, projectInfoOne: projectInfoOne, projectInfoTwo: projectInfoTwo, projectInfoThree: projectInfoThree, contactInfo: contactInfo, facebookURL: facebookURL, twitterURL: twitterURL, email: email});
  },
  componentDidMount: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url);
    request.onload = function(){
      if(request.status === 200){
        var receivedData = JSON.parse(request.responseText);
        this.setState({title: receivedData[0].title,  body: receivedData[0].body, headerImage: receivedData[0].headerImage, contactInfo: receivedData[0].contactInfo, facebookURL: receivedData[0].facebookURL, twitterURL: receivedData[0].twitterURL, email: receivedData[0].email, 
          projectImageOne: receivedData[0].projects[0].image,
          projectImageTwo: receivedData[0].projects[1].image,
          projectImageThree: receivedData[0].projects[2].image,
          projectInfoOne: receivedData[0].projects[0].info,
          projectInfoTwo: receivedData[0].projects[1].info,
          projectInfoThree: receivedData[0].projects[2].info
        });
      }
    }.bind(this);
    request.send(null);
  },
  
  loadEditForm: function(){
    var formDiv = this.refs.formDiv;
    if(formDiv.style.display == "none"){
      formDiv.style.display = "block";
      formDiv.style.zIndex = "100";
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
      <label>Intro Body (You can use <a href="http://chibicode.github.io/markdown-toolbar-cheatsheet/" target="new">Markdown</a> or HTML in this section)</label>
      <textarea
      placeholder="Intro text"
      value={this.state.body}
      onChange={this.handleBodyChange}
      />
      <label>Project 1 Image</label>
      <input
      type="text"
      placeholder="Project 1 Image"
      value={this.state.projectImageOne}
      onChange={function(event){this.handleInputChange("projectImageOne", event.target.value)}.bind(this)}
      />
      <label>Project 1 Description</label>
      <textarea
      placeholder="Project 1 Description"
      value={this.state.projectInfoOne}
      onChange={function(event){this.handleInputChange("projectInfoOne", event.target.value)}.bind(this)}
      />
      <label>Project 2 Image</label>
      <input
      type="text"
      placeholder="Project 2 Image"
      value={this.state.projectImageTwo}
      onChange={function(event){this.handleInputChange("projectImageTwo", event.target.value)}.bind(this)}
      />
      <label>Project 2 Description</label>
      <textarea
      placeholder="Project 2 Description"
      value={this.state.projectInfoTwo}
      onChange={function(event){this.handleInputChange("projectInfoTwo", event.target.value)}.bind(this)}
      />
      <label>Project 3 Image</label>
      <input
      type="text"
      placeholder="Project 3 Image"
      value={this.state.projectImageThree}
      onChange={function(event){this.handleInputChange("projectImageThree", event.target.value)}.bind(this)}
      />
      <label>Project 3 Description</label>
      <textarea
      placeholder="Project 3 Description"
      value={this.state.projectInfoThree}
      onChange={function(event){this.handleInputChange("projectInfoThree", event.target.value)}.bind(this)}
      />
      <label>Contact Section Body</label>
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
