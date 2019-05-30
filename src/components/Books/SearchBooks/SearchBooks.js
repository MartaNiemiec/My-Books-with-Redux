import React from 'react';
import classes from './SearchBooks.module.scss';
import SearchBox from '../SearchBox/SearchBox';
import BookList from '../BookList/Booklist';
import Spinner from '../../UI/Icons/Spinner';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'


const searchBooks = (props) => {

  const {changed, searchBooks, booksData, isLoading, toggleBookHandler, isInUserState} = props;
  
return (
  <Auxiliary>
    <SearchBox 
      searchChange={changed} 
      searchBooks={searchBooks}/>
    { isLoading 
      ? <div className={classes.Spinner}>
          <Spinner className={classes.Spinner__icon}/> 
        </div>
      : <div
          className={classes.BookList}>
          <BookList 
          booksData={booksData} 
          isInUserState={isInUserState} 
          toggleBookHandler={toggleBookHandler}/> 
        </div>
    }
  </Auxiliary>

)

}

export default searchBooks;