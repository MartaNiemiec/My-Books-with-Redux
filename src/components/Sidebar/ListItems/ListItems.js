import React from 'react';
import classes from './ListItems.module.scss'; 
import ListItem from './ListItem/ListItem';

const listItems = () => (
  <ul className={classes.ListItems}>
    <ListItem active link="#">Read</ListItem>
    <ListItem link="#">Wishlist</ListItem>
    <ListItem link="#">Favourites</ListItem>
  </ul>
)

export default listItems;