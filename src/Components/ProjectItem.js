import React, { Component } from 'react';

class ProjectItem extends Component {

  render() {
    return (
      <option className="ProjectItem">
        {this.props.project.name}
      </option>
    );
  }
}

// Figure Out PropTypes

export default ProjectItem;
