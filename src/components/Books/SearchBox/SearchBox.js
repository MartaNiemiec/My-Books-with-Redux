import React from 'react';
import classes from './SearchBox.module.scss';


const SearchBox = ({  searchChange }) => (
  <div className={classes.SearchBox}>
    <input 
      className={classes.SearchBox__input}
      type="search"
      placeholder="search books"
      onChange={searchChange}/>
  </div>
)

export default SearchBox;