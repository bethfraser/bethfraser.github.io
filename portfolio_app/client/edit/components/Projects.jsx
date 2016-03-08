var React = require('react');
var marked = require('marked');

var Projects = React.createClass({

  loadInfo: function(data, event){
    if(event.srcElement.nextSibling.style.display === "none"){
     event.srcElement.nextSibling.style.display = "inline-block";
    }
    else {
      event.srcElement.nextSibling.style.display = "none";
    }

  },

  componentDidMount: function(){
    var first = this.refs.firstproject;
    first.addEventListener("click", function(e){this.loadInfo(this.props.data, e)}.bind(this));
  },

  render: function() {

    var data = this.props.data || [];

    var projectsInfo = data.map(function(data,index){

      var pStyle = {
        display: "none"
      }

      return (
        <ul key={index}>
          <li><img src={data.projects[0].image} />
          <p style={pStyle}>{data.projects[0].info}</p></li>
          <li><img src={data.projects[1].image} />
          <p style={pStyle}>{data.projects[1].info}</p></li>
          <li><img src={data.projects[2].image} />
          <p style={pStyle}>{data.projects[2].info}</p></li>
        </ul>
      )
    
    }.bind(this));

    return (
      <div className="projects-div" ref="firstproject">
      <a name="projects"></a>
      <h1>Projects</h1>
      
        {projectsInfo}
      <p ref="info"></p>
      </div>
    );
  }
});
module.exports = Projects;
