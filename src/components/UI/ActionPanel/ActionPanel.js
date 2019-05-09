import React from 'react';
import classes from './ActionPanel.module.scss';
import { GreyStar } from '../Icons/StarIcon';
import { GreyList } from '../Icons/ListIcon';
import { GreyCheck } from '../Icons/CheckIcon';

const ActionPanel = () => (
  <div className={classes.ActionPanel}>
    <GreyList />
    <GreyCheck />
    <GreyStar />
  </div> 
)

export default ActionPanel;