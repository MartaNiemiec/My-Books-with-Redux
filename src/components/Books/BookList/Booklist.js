    import React from 'react';
    import classes from './BookList.module.scss';
    import Book from './Book/Book';
    import RedError from '../../UI/Icons/ErrorIcon.js';

    
    const bookList = (props) => {
      const { booksData, isInUserState, toggleBookHandler } = props;
      let searchedBooks;

      // check if a books data is found
      if (booksData) {
        searchedBooks = booksData.map((book, index) => {
          const bookId = book.id;
          let isInReadBooks = isInUserState(bookId, "readBooks");
          let isInWishlist = isInUserState(bookId, "wishlist");
          let isInFavourites = isInUserState(bookId, "favourites");

          return (
            <Book 
              key = {index}
              book = {book.volumeInfo}
              id = {bookId}
              isInReadBooks = {isInReadBooks}
              isInWishlist = {isInWishlist}
              isInFavourites = {isInFavourites}
              toggleBookHandler={toggleBookHandler}/>
          )
          })
      } else {
        searchedBooks =
        <div className={classes.BookList__nomatches}>
          <RedError />
          <h2 className={classes.BookList__nomatches__info}>Sorry, no books matched your search. Please try again.</h2>
        </div> 
      }
        
      return (
        <div className={classes.BookList}>
        {searchedBooks}
        </div>
      )
    }
    
    export default bookList;