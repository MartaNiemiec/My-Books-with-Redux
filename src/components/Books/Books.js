import React from 'react';
import classes from './Books.module.scss';
import SearchBox from './SearchBox/SearchBox';
import BookList from './BookList/Booklist';

const books = ({changed}) => {
return (
  <div className={classes.Books}>
    <SearchBox searchChange={changed}/>
    <BookList />
  </div>

)

}

export default books;