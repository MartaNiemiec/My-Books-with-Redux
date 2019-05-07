import React from 'react';
import classes from './ListItem.module.scss';

const listItem = (props) => (
  <li className={classes.ListItem}>
    <a 
      href={props.link}
      className={props.active ? classes.active : null}>{props.children}</a>
  </li>
)

export default listItem;