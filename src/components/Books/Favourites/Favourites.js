import React from 'react';
import Booklist from '../BookList/Booklist';

const favourites = (props) => {
  let favourites;
  const style = {fontStyle: "italic", fontWeight: "400", textAlign: "center", marginTop: "3rem", color:"#cc3300"};
  const noBooks = <h2 style={style}>
                    Sorry, no books in the favourites found.
                  </h2>;
  const bookList =  <Booklist booksData={props.userFavourites} 
                      isInUserState={props.isInUserState} 
                      toggleBookHandler={props.toggleBookHandler} />;

  props.userFavourites.length === 0
  ? favourites = noBooks
  : favourites = bookList

  return favourites
}

export default favourites;