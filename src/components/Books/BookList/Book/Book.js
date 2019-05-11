import React from 'react';
import classes from './Book.module.scss';
import ActionPanel from '../../../UI/ActionPanel/ActionPanel'

const book = ({book}) => {
  let bookCover = book.imageLinks;

  if (bookCover === undefined) {
    bookCover = {backgroundColor: '#333'}
  } else if (typeof bookCover === 'string' ) {
    bookCover = {backgroundImage: `url(${bookCover})`};
    // {backgroundImage: `url(${bookCover})`}
  } else if (bookCover.thumbnail) {
    bookCover = {backgroundImage: `url(${bookCover.thumbnail})`};
  } else if (bookCover.smallThumbnail) {
      bookCover = {backgroundImage: `url(${bookCover.smallThumbnail})`};
  } 

  // Displaying book title
  let bookTitle = book.title;
  // check if the title isn't too long 
  bookTitle.length > 32 
    ? bookTitle = book.title.slice(0,32) + "..." 
    : bookTitle = book.title;

// Displaying authors
  let authors;
  // check if the authors are known or if the authors length isn't too long 
  if (!book.authors) {
    authors = null;
  } else if (book.authors.length === 1) {
    authors = book.authors
  } else if (book.authors.length > 1) {
    book.authors.join(', ').length > 37 
      ? authors = book.authors.join(', ').slice(0,37) + "..."
      : authors = book.authors.join(', ');
  }
  
 return (
  <div className={classes.Book}>
    <ActionPanel />
    <div 
      className={classes.Book__img} 
      style={bookCover}></div>
    <div className={classes.Book__info}>
      <h4 className={classes.Book__title}>{bookTitle}</h4>
      <p className={classes.Book__authors}>{authors}</p>
    </div>
    
  </div>
)}

export default book;