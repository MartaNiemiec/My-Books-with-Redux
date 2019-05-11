    import React from 'react';
    import classes from './BookList.module.scss';
    import Book from './Book/Book';
    
    const bookList = ({searchBook, booksData}) => {

      
    return (
      <div className={classes.BookList}>
        {
          booksData.map((book, index) => {
          return (
            <Book 
              key = {index}
              book = {book.volumeInfo}/>
          )
          })
        }
      </div>
    
    )
    
    }
    
    export default bookList;