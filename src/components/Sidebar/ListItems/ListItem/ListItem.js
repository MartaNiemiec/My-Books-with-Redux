import React from 'react';
import classes from './ListItem.module.scss';
import { OrangeFullStar } from '../../../UI/Icons/StarIcon';
import { GreenList } from '../../../UI/Icons/ListIcon';
import { YellowCheck } from '../../../UI/Icons/CheckIcon';

const listItem = (props) => {
  let icon;

  if (props.icon === "checkColor") {
    icon = <YellowCheck />;
  } else if (props.icon === "listColor") {
    icon = <GreenList />;
  } else if (props.icon === "starColor") {
    icon = <OrangeFullStar />;
  }
  

return (
  <li className={classes.ListItem}>
    <span className={classes.ListItem__icon}>{icon}</span>
    {props.children}
  </li>
)
}

export default listItem;