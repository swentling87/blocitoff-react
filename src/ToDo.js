import React from 'react';
var firebase = require("firebase");
import TaskTable from './TaskTable.js';

var ToDo = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      text: ''
    };
  },

  componentWillMount: function() {
    this.firebaseRef = firebase.database().ref('blocitoff-react/items');
    this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
      var items = [];
      dataSnapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item['.key'] = childSnapshot.key;
        items.push(item);
      });

      this.setState({
        items: items
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.firebaseRef.off();
  },


  render: function() {
    return (
      <div>
        <TaskTable items={ this.state.items } />
      </div>
    );
  }
});

export default ToDo;
