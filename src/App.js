import React, { Component } from 'react';
var firebase = require("firebase");
var config = {
  apiKey: "AIzaSyBiIIxDUw2k7C8smAjOwLAveBC1mkSgx1c",
  authDomain: "blocitoff-react.firebaseapp.com",
  databaseURL: "https://blocitoff-react.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "701422765041"
};
firebase.initializeApp(config);
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ToDo from './ToDo.js';
import TaskModal from './TaskModal.js';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="Blocitoff main">
          <div className="App-header">
          <span className="pull-right"><img src={logo} className="App-logo pull-right" alt="logo" /></span>
          <span className="button pull-right"><TaskModal onClick={this.handleOpen} /></span>
            <h2>Welcome to Blocitoff</h2>
          </div>
          <br/>
          <div className="col-md-6 col-md-offset-1">
            <ToDo />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
