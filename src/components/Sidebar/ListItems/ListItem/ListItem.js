import React from 'react';
import classes from './ListItem.module.scss';
import { OrangeFullStar } from '../../../UI/Icons/StarIcon';
import { GreenList } from '../../../UI/Icons/ListIcon';
import { YellowCheck } from '../../../UI/Icons/CheckIcon';
import { SearchIcon } from '../../../UI/Icons/SearchIcon';

const listItem = (props) => {
  let icon;

  if (props.icon === "checkColor") {
    icon = <YellowCheck />;
  } else if (props.icon === "listColor") {
    icon = <GreenList />;
  } else if (props.icon === "starColor") {
    icon = <OrangeFullStar />;
  } else if (props.icon === "search") {
    icon = <SearchIcon />;
  }
  

return (
  <li className={classes.ListItem}>
    <span className={classes.ListItem__icon}>{icon}</span>
    {props.children}
  </li>
)
}

export default listItem;