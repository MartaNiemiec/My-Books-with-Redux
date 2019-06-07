import React from 'react';
import classes from './Ribbon.module.scss';

const ribbon = (props) => {
  const ribbonClass = classes.Ribbon + " " + classes[props.ribbonClass];

  return (
      <div className={ribbonClass}>{props.content}</div>
  )
};

export default ribbon;