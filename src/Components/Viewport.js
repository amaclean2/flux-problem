import React, { Component } from 'react';
import './Viewport.css';

var viewport;

class Viewport extends Component {

  componentDidMount() {
    viewport = new window.FluxViewport(document.getElementById("viewport"));
    viewport.setupDefaultLighting()
    viewport.setClearColor(0xffffff)
    viewport.setGeometryEntity(this.props.modelInfo)
    console.log(this.props.modelInfo)
  }

  render() {
    return (
      <div id="viewport">
      </div>
    );
  }
}

export default Viewport;
