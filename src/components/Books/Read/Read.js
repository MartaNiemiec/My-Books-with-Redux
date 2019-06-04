import React from 'react';
import Booklist from '../BookList/Booklist';

const read = (props) => {
  let readBooks;
  const style = {fontStyle: "italic", fontWeight: "400", textAlign: "center", marginTop: "3rem", color:"#cc3300"};
  const noBooks = <h2 style={style}>
                    Sorry, no read books found.
                  </h2>;
  const bookList =  <Booklist booksData={props.userReadBooks} 
                      isInUserState={props.isInUserState} 
                      toggleBookHandler={props.toggleBookHandler} />;

  props.userReadBooks.length === 0
  ? readBooks = noBooks
  : readBooks = bookList

  return readBooks
}

export default read;