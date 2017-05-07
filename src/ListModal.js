import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './App.css';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DialogExampleModal extends React.Component {

  state = {
    open: false,
    list: ""
  };

  handleUpdate = (event) => {
    this.setState({list: event.target.value });
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  doSubmit = () => {
    this.setState({open: false, list: ""});
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
        onClick={this.doSubmit}
      />,
    ];

    return (
      <div>
        <FloatingActionButton mini={true} onClick={this.handleOpen}><ContentAdd /></FloatingActionButton>
        <Dialog
          title="New Task List Title"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <input className="input_field" type="text"
          onChange={this.handleUpdate}
          value={this.state.list}
        />
        </Dialog>
      </div>
    );
  }
}
