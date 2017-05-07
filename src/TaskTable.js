import React from 'react';
var firebase = require("firebase");
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import dateFormat from 'dateformat';

export default class TaskTable extends React.Component {
  
  handleRowSelection = (selectedRows) => {
    var chosenLine = selectedRows[0];
    if (selectedRows.length > 0 ) {
      console.log(chosenLine);
      var x = document.getElementsByClassName("myTable")[1].rows.item(selectedRows).getAttribute("id");
      this.handleRowClick(x);
    }
  };
  
  handleRowClick = (key) => {
    var firebaseRef = firebase.database().ref('blocitoff-react/items');;
    firebaseRef.child(key).remove();
  };

  render = () => {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <TableRow key={ index } id={item[".key"]}>
          <TableRowColumn>{item.text}</TableRowColumn>
          <TableRowColumn>{dateFormat(item.createdAt)}</TableRowColumn>
        </TableRow>
      );
    };
    return (
      <Table className="myTable" onRowSelection={this.handleRowSelection} >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Task</TableHeaderColumn>
            <TableHeaderColumn>Date Created</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { this.props.items.map(createItem) }
        </TableBody>
      </Table>
    );
  }  
}