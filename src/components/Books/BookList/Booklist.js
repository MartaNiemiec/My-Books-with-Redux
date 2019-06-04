    import React from 'react';
    import classes from './BookList.module.scss';
    import Book from './Book/Book';
    import RedError from '../../UI/Icons/ErrorIcon.js';
    import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
    import { SearchIconBig } from '../../UI/Icons/SearchIcon';
    import Flip from 'react-reveal/Flip';
    import Fade from 'react-reveal/Fade';
    import Slide from 'react-reveal/Slide';

    
    const bookList = (props) => {
      const { booksData, isInUserState, toggleBookHandler, isInitial } = props;
      let searchedBooks, booksSection;

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
            book = {book}
            bookId = {bookId}
            isInReadBooks = {isInReadBooks}
            isInWishlist = {isInWishlist}
            isInFavourites = {isInFavourites}
            toggleBookHandler={toggleBookHandler}/>
            
        )
      })
        booksSection = <div className={classes.BookList}>
                         <Slide bottom>{searchedBooks}</Slide>
                       </div>


      } else {
        booksSection =  <div className={classes.BookList__nomatches}>
                          <RedError />
                          <h3 className={classes.BookList__nomatches__info}>Sorry, no books matched your search. Please try again.</h3>
                        </div> 
      }

      if (isInitial) {
        booksSection = <div className={classes.BookList__nomatches}>
                         <Fade><SearchIconBig /></Fade>
                         <Flip left cascade><h3 className={classes.BookList__nomatches__info}>Search books</h3></Flip>
                        </div>
      }
        
      return (
        <Auxiliary >
          {booksSection}
        </Auxiliary>
      )
    }
    
    export default bookList;