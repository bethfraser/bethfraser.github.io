var React = require('react');
var marked = require('marked');

var Projects = React.createClass({

  getInitialState: function(){
    return {currentImage: '', currentInfo: ''}
  },

  handleImageClick: function(num, event){
    this.refs.info.style.display = "block";
    this.setState({currentImage: this.props.data[0].projects[num].image, currentInfo: this.props.data[0].projects[num].info})
  },

  render: function() {

    var data = this.props.data || [];

    var projectsInfo = data.map(function(data,index){

      return (
        <ul key={index}>
          <li><img src={data.projects[0].image} onClick={function(event){this.handleImageClick(0, event)}.bind(this)}/></li>
          <li><img src={data.projects[1].image} onClick={function(event){this.handleImageClick(1, event)}.bind(this)}/></li>
          <li><img src={data.projects[2].image} onClick={function(event){this.handleImageClick(2, event)}.bind(this)}/></li>
        </ul>
      )
    
    }.bind(this));

    var projectHTML = marked(this.state.currentInfo.toString(), {sanitize: false});


    return (
      <div className="projects-div" ref="firstproject">
      <a name="projects"></a>
      <h2>Projects</h2>
      <div ref="info" style={{display: "none"}}>
      <img src={this.state.currentImage} width="40%" />
      <p style={{display: "inline-block", float: "right", width: "55%"}} dangerouslySetInnerHTML={{__html: projectHTML}}></p>
      </div>
        {projectsInfo}
      </div>
    );
  }
});
module.exports = Projects;
