var React = require('react');

var Contact = React.createClass({
  makeButton: function(type, imageURL){

    if(this.props.data[0][type] !== ""){
      if(type === "email"){
        var address = "mailto:" + this.props.data[0][type];
      }
      else {
        var address = this.props.data[0][type];
      }

      return(
        <a href={address} ><img src={imageURL} width="40px" /></a>
        )
    }

  },
  render: function() {

    var data = this.props.data || [];

    var contactInfo = data.map(function(dataItem,index){

      return (
        <div key={index}>
        <p>
        <a name="contact"></a>
        {dataItem.contactInfo}
        </p>
        <p>
        {this.makeButton("facebookURL", "https://image.freepik.com/free-icon/facebook-logo_318-49940.png")}
        {this.makeButton("twitterURL", "https://image.freepik.com/free-icon/twitter-bird-in-a-rounded-square_318-41054.png")}
        {this.makeButton("email", "http://soligorsk.pma.by/wp-content/uploads/2011/07/email-dog-icon.png")}
        </p>
        </div>
        );
    }.bind(this));

    return (
      <div className="contact-div">
      {contactInfo}
      </div>
      );
  }
});

module.exports = Contact;
