var React = require('react');
var CommentForm = React.createClass({
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
    if (!title || !body) {
      return;
    }
    // TODO: send request to the server
    this.props.onCommentSubmit({title: title, body: body, headerImage: headerImage});
  },
  render: function() {

    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          type="text"
          placeholder="Header Image"
          value={this.state.headerImage}
          onChange={this.handleImageChange}
        />
        <textarea
          placeholder="Body text"
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CommentForm;
