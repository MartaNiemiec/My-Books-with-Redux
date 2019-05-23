import React from 'react';
import classes from './SearchBox.module.scss';


const searchBox = ({  searchChange, searchBooks }) => (
    <form onSubmit={searchBooks} className={classes.SearchBox} action="">
      <input 
        className={classes.SearchBox__input}
        type="search"
        placeholder="search books"
        onChange={searchChange}/>
      <button 
        type="submit"
        className={classes.SearchBox__button}>Search</button>
    </form>
)

export default searchBox;