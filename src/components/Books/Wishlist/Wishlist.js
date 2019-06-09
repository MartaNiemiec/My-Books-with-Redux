import React from 'react';
import Booklist from '../BookList/Booklist';
import Flip from 'react-reveal/Flip';

const wishlist = (props) => {
  let wishlist;
  const style = {fontStyle: "italic", fontWeight: "400", textAlign: "center", marginTop: "3rem", color:"#cc3300"};
  const noBooks = <Flip left cascade><h2 style={style}>
                    Sorry, no books in the wishlist found.
                  </h2></Flip>;
  const bookList =  <Booklist booksData={props.userWishlist} 
                      isInUserState={props.isInUserState} 
                      toggleBookHandler={props.toggleBookHandler}
                      openModalHandler={props.openModalHandler} />;

  props.userWishlist.length === 0
  ? wishlist = noBooks
  : wishlist = bookList

  return wishlist
}

export default wishlist;