import React from 'react';
import classes from './ListItems.module.scss'; 
import ListItem from './ListItem/ListItem';


const listItems = () => (
  <ul className={classes.ListItems}>
    <ListItem link="#" icon="checkColor" active>
      <span className={classes.ListItems__text}>Read</span>
    </ListItem>
    <ListItem link="#" icon="listColor">
      <span className={classes.ListItems__text}>Wishlist</span>
    </ListItem>
    <ListItem link="#" icon="starColor">
      <span className={classes.ListItems__text}>Favourites</span>
    </ListItem>
  </ul>
)
  

export default listItems;