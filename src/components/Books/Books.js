import React from 'react';
import classes from './Books.module.scss';
import SearchBox from './SearchBox/SearchBox';
import BookList from './BookList/Booklist';

const books = ({changed, searchBook, booksData}) => {
return (
  <div className={classes.Books}>
    <SearchBox searchChange={changed} searchBooks={searchBook}/>
    <BookList booksData={booksData}/>
  </div>

)

}

export default books;