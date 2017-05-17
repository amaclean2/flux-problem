import React, { Component } from 'react';
import './ProjSelect.css';

class ProjSelect extends Component {

  render() {

      // this.props.projects.map((project) => {
      //   return <option key={project.name} value={project.id}>{project.name}</option>
      // })


      // I can't figure out how to append this return value
    return (
      <div className="projectSelect">
        <label>Select a Project</label><br />
        <select className="projects">
          <option disabled defaultValue value="select a project">Select a Project</option>
          <option value="add new">Add a New Project</option>
        </select><br />
        <label>Select a Cell</label><br />
        <select className="projects">
          <option disabled defaultValue value="select a project">Select a Cell</option>
        </select>
      </div>
    );
  }
}

export default ProjSelect;
