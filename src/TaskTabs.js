import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TaskTable from './TaskTable.js';

//const styles = {
  //headline: {
    //fontSize: 24,
    //paddingTop: 16,
    //marginBottom: 12,
    //fontWeight: 400,
//  },
//};

const TaskTabs = () => (
  <Tabs>
    <Tab label="Pending Tasks" >
      <div>
//        <h2 style={styles.headline}>Pending Tasks</h2>
          <TaskTable/>
      </div>
    </Tab>
    <Tab label="Completed Tasks" >
      <div>
//        <h2 style={styles.headline}>Completed Tasks</h2>
          <TaskTable/>
      </div>
    </Tab>
    <Tab label="Expired Tasks">
      <div>
//        <h2 style={styles.headline}>Expired Tasks</h2>
          <TaskTable/>
      </div>
    </Tab>
  </Tabs>
);

export default TaskTabs;
