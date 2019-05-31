import React from 'react';
import classes from './ListItems.module.scss'; 
import ListItem from './ListItem/ListItem';

import { NavLink } from 'react-router-dom';
import SearchIcon from '../../UI/Icons/SearchIcon'


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

  const search = <ListItem icon="search">
                    <span className={classes.ListItems__text}>
                    Search
                    </span>
                  </ListItem>

  return (
    <ul className={classes.ListItems}>
      <NavLink 
        to={process.env.PUBLIC_URL + "/"}
        exact 
        activeClassName={classes.active}>
        {search}
      </NavLink>
      <NavLink 
        to={process.env.PUBLIC_URL + "/read"} 
        activeClassName={classes.active}>
        {read}
      </NavLink>
      <NavLink 
        to={process.env.PUBLIC_URL + "/wishlist"} 
        activeClassName={classes.active}>
        {wishlist}
      </NavLink>
      <NavLink 
        to={process.env.PUBLIC_URL + "/favourites"} 
        activeClassName={classes.active}>
        {favourites}
      </NavLink>
    </ul>
  )
}
  

export default listItems;