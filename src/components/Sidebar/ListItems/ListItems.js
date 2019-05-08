import React from 'react';
import classes from './ListItems.module.scss'; 
import ListItem from './ListItem/ListItem';


const listItems = () => (
  <ul className={classes.ListItems}>
    <ListItem link="#" icon="checkColor" active>Read</ListItem>
    <ListItem link="#" icon="listColor">Wishlist</ListItem>
    <ListItem link="#" icon="starColor">Favourites</ListItem>
  </ul>
)
  

export default listItems;