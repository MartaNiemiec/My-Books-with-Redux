import React from 'react';
import classes from './ActionPanel.module.scss';
import { GreyStar } from '../Icons/StarIcon';
import { GreyList } from '../Icons/ListIcon';
import { GreyCheck } from '../Icons/CheckIcon';

const ActionPanel = () => (
  <div className={classes.ActionPanel}>
    <div><GreyList /></div>
    <div><GreyCheck /></div>
    <div><GreyStar /></div>
  </div> 
)

export default ActionPanel;