import React from 'react';
import classes from './SearchBooks.module.scss';
import SearchBox from '../SearchBox/SearchBox';
import BookList from '../BookList/Booklist';
import Spinner from '../../UI/Icons/Spinner';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'


const searchBooks = (props) => {

  const {changed, searchBooks, booksData, isLoading, toggleBookHandler, isInUserState, isInitial} = props;
  
  let booksSection;

  const spinner = <div className={classes.Spinner}>
                    <Spinner className={classes.Spinner__icon}/>
                  </div>

  const searchedBooks = <div
                          className={classes.BookList}>
                          <BookList 
                          booksData={booksData} 
                          isInUserState={isInUserState} 
                          toggleBookHandler={toggleBookHandler}
                          isInitial={isInitial}/> 
                        </div>
  
  !isLoading 
  ? booksSection = searchedBooks
  : booksSection = spinner

  // if (isInitial) {
  //     booksSection = <h1>Search</h1>
  // }

return (
  <Auxiliary>
    <SearchBox 
      searchChange={changed} 
      searchBooks={searchBooks}/>
    {booksSection}
  </Auxiliary>

)

}

export default searchBooks;