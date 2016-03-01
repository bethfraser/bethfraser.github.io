var React = require('react');
var EditForm = React.createClass({
  getInitialState: function() {
    return {title: '', body: '', headerImage: '' };
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
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var body = this.state.body.trim();
    var headerImage = this.state.headerImage.trim();
    this.props.onSubmit({title: title, body: body, headerImage: headerImage});
  },
  componentDidMount: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url);
    request.onload = function(){
      if(request.status === 200){
        var receivedComments = JSON.parse(request.responseText);
        this.setState({title: receivedComments[0].title, body: receivedComments[0].body, headerImage: receivedComments[0].headerImage});
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
      <button onClick={this.loadEditForm}>Edit Page</button>
      </div>
      <div className="comment-div" ref="formDiv" style={formStyle}>
      <h3>Edit The Page</h3>
      <form className="commentForm" onSubmit={this.handleSubmit}>
      <label>Page Title</label>
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
      <label>Page Body</label>
      <textarea
      placeholder="Body text"
      value={this.state.body}
      onChange={this.handleBodyChange}
      />
      <input type="submit" value="Save" />
      </form></div>
      </div>
      )
  }
});

module.exports = EditForm;