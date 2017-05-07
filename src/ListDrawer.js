import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ListModal from './ListModal.js';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class ListDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Lists"
          onClick={this.handleToggle}
        />
        <Drawer width={300} openSecondary={true} open={this.state.open} >
        <AppBar
          title="Lists"
          iconElementLeft={<IconButton onClick={this.handleToggle}><NavigationClose /></IconButton>}
          iconElementRight={<ListModal />}
        />
          <ul>
            <li>Hello</li>
          </ul>
        </Drawer>
      </div>
    );
  }
}
