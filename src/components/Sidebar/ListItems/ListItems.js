import React from 'react';
import classes from './ListItems.module.scss'; 
import ListItem from './ListItem/ListItem';

import { NavLink } from 'react-router-dom';


const listItems = () => {

  const read = <ListItem icon="checkColor">
                  <span className={classes.ListItems__text}>
                    Read
                  </span>
                </ListItem>

  const wishlist = <ListItem icon="listColor">
                      <span className={classes.ListItems__text}>
                      Wishlist
                      </span>
                    </ListItem>

  const favourites = <ListItem icon="starColor">
                        <span className={classes.ListItems__text}>
                        Favourites
                        </span>
                      </ListItem>

  return (
    <ul className={classes.ListItems}>
      <NavLink to="/read" activeClassName={classes.active}>
        {read}
      </NavLink>
      <NavLink to="/wishlist" activeClassName={classes.active}>
        {wishlist}
      </NavLink>
      <NavLink to="/favourites" activeClassName={classes.active}>
        {favourites}
      </NavLink>
    </ul>
  )
}
  

export default listItems;