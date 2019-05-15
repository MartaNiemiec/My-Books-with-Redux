import React from 'react';
import classes from './ActionPanel.module.scss';
import { GreyStar } from '../Icons/StarIcon';
import { GreyList } from '../Icons/ListIcon';
import { GreyCheck, YellowCheck } from '../Icons/CheckIcon';

const ActionPanel = (props) => {
  const { wasRead, toggleReadBook } = props;
  let checkIcon;

  !wasRead ? checkIcon = <GreyCheck /> : checkIcon = <YellowCheck />


return (
  <div className={classes.ActionPanel}>
    <div><GreyList /></div>
    <div onClick={toggleReadBook}>{checkIcon}</div>
    <div><GreyStar /></div>
  </div> 
)
}

export default ActionPanel;