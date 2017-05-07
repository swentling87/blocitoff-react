import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TaskTable from './TaskTable.js';

const TaskTabs = () => (
  <Tabs>
    <Tab label="Pending Tasks" >
      <div>
          <TaskTable/>
      </div>
    </Tab>
    <Tab label="Completed Tasks" >
      <div>
          <TaskTable/>
      </div>
    </Tab>
    <Tab label="Expired Tasks">
      <div>
          <TaskTable/>
      </div>
    </Tab>
  </Tabs>
);

export default TaskTabs;
