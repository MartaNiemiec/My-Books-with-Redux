import React from 'react';
import classes from './Books.module.scss';
import SearchBox from './SearchBox/SearchBox';
import BookList from './BookList/Booklist';

const books = (props) => {
return (
  <div className={classes.Books}>
    <SearchBox />
    <BookList />
  </div>

)

}

export default books;