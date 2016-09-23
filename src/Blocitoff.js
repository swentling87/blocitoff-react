import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TaskTabs from './TaskTabs.js';
import TaskModal from './TaskModal.js';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Blocitoff extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="Blocitoff main">
          <div className="App-header">
          <span className="pull-right">
            <img src={logo} className="App-logo pull-right" alt="logo" />
            <TaskModal/>
          </span>
            <h2>Welcome to Blocitoff</h2>
          </div>
          <br/>
          <div className="col-md-6 col-md-offset-1">
            <TaskTabs/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Blocitoff;
