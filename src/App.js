import React, { Component } from 'react';
import './App.css';
import FluxHelpers from 'flux-sdk-helpers';
import FluxSdk from 'flux-sdk-browser';
import Viewport from './Components/Viewport'
import ProjSelect from './Components/ProjSelect';
import $ from 'jquery';

const config = {
  url: 'http://localhost:3000',
  fluxUrl: 'https://flux.io',
  flux_client_id: 'd5a46c0b-d2e9-4545-8e8a-11e155ec3272',
}

function closeViewer() {
  document.getElementById('view-panel').style.display = "none";
}

var sdk = new FluxSdk(config.flux_client_id, { redirectUri: config.url, fluxUrl: config.fluxUrl});

class App extends Component {
  constructor() {
    super();
    this.state = {
      helpers: new FluxHelpers(sdk),
      title: "Flux",
      // projects: new FluxHelpers(sdk).getUser().listProjects(),
      modelInfo: [{
                    "dimensions": [
                      2,
                      2,
                      2
                    ],
                    "origin": [
                      0,
                      0,
                      0
                    ],
                    "primitive": "block",
                    "units": {
                      "dimensions": "meters",
                      "origin": "meters"
                    }
                }]
    }
  }

  getData() {
    $.ajax({
      url: './houseInfo.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({modelInfo: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount() {
    this.getData()
    // this.state.projects.then((data) => {
    //   this.setState({projects: data.entities}, function() {
    //     console.log(this.state)
    //   })
    // })
    // this.getData()
  }

  componentDidMount() {
  }

  handleLogin() {
    this.state.helpers.redirectToFluxLogin();
  }

  handleLogout() {
  }

  handleCloseViewer(e) {
    closeViewer();
  }

  render() {
    // this.state.helpers.storeFluxUser()
    //   .then(() => this.state.helpers.isLoggedIn())
    //   .then((isLoggedIn) => {
    //     if(isLoggedIn) {
    //       hideLogin()
    //     } else {
    //       showLogin()
    //     }
    //   })
    return (
      <div className="App">
        <div id="container">
          <div id="header">
            <div id="title">
              <h1>{this.state.title}</h1>
              <h2>Seed Project</h2>
            </div>
            <div id="actions">
              <div id="logout">
                <button onClick={this.handleLogout}>Log Out</button>
              </div>
            </div>
          </div>
          <div id="content">
            <div id="info-panel">
              <div id="info-header">Options</div>
              <ProjSelect projects={this.state.projects} />
            </div>
            <div id="view-panel">
              <div id="content-header"><div id="content-title">box - Andrew Maclean, 05/16/2017</div>
                <div id="close" onClick={this.handleCloseViewer}>×</div>
              </div>
              <div id="output">
                <Viewport modelInfo={this.state.modelInfo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
