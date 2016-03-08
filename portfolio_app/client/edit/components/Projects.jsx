var React = require('react');
var marked = require('marked');

var Projects = React.createClass({


  render: function() {

    var data = this.props.data || [];

    var projectsInfo = data.map(function(data,index){

      return (
        <ul key={index}>
          <li><img src={data.projectImage[0]} /></li>
          <li><img src={data.projectImage[1]} /></li>
          <li><img src={data.projectImage[2]} /></li>
        </ul>
      )
    
    });

    return (
      <div className="projects-div">
      <a name="projects"></a>
      <h1>Projects</h1>
      
        {projectsInfo}
      
      </div>
    );
  }
});
module.exports = Projects;
