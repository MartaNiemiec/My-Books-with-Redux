import React from 'react';
import classes from './Sidebar.module.scss';
import ListItems from './ListItems/ListItems';

const sidebar = () => (
  <div className={classes.Sidebar} >
    <ListItems />
  </div>
  
)

export default sidebar;