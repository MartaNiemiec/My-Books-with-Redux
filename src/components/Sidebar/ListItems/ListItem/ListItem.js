import React from 'react';
import classes from './ListItem.module.scss';
import { OrangeFullStar } from '../../../UI/Icons/OrangeFullStar';
import { GreenList } from '../../../UI/Icons/GreenList';
import { YellowCheck } from '../../../UI/Icons/CheckIcon';
import styled from 'styled-components';

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
    <a 
      href={props.link}
      className={props.active ? classes.active : null}>
        {icon}
        {props.children}
    </a>
  </li>
)
}

export default listItem;