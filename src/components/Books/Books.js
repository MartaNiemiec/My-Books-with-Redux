import React from 'react';
import classes from './Books.module.scss';
import SearchBox from './SearchBox/SearchBox';
import BookList from './BookList/Booklist';
import Spinner from '../UI/Icons/Spinner';


const books = (props) => {

  const {changed, searchBook, booksData, isLoading, toggleBookHandler, isInUserState} = props;
  
return (
  <div className={classes.Books}>
    <SearchBox searchChange={changed} searchBooks={searchBook}/>
    { isLoading 
      ? <div className={classes.Spinner}>
          <Spinner className={classes.Spinner__icon}/> 
        </div>
      : <BookList booksData={booksData} isInUserState={isInUserState} toggleBookHandler={toggleBookHandler}/> 
    }
  </div>

)

}

export default books;