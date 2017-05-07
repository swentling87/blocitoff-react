import React from 'react';
var firebase = require("firebase");
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DialogExampleModal extends React.Component {
  state = {
    open: false,
    text: ""
  };
  
  componentWillMount = () => {
    this.firebaseRef = firebase.database().ref('blocitoff-react/items');
  };
  
  onChange = (e) => {
    this.setState({text: e.target.value});
  };
  
  checkEnter = (e) => {
    if (e.charCode == 13) {
      this.handleSubmit();
    }
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
  handleSubmit = () => {
    this.firebaseRef.push({
      text: this.state.text,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    });
    this.setState({text: "", open: false});
  };
  
  componentWillUnmount = () => {
    this.firebaseRef.off();
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <RaisedButton label="New Task" onClick={this.handleOpen} />
        <Dialog
          title="New Task Title"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <input className="input_field" onChange={ this.onChange } value={ this.state.text } onKeyPress={this.checkEnter} />
        </Dialog>
      </div>
    );
  }
}
