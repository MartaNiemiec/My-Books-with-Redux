import React from 'react';
import Booklist from '../BookList/Booklist';

const wishlist = (props) => (
  <Booklist booksData={props.userWishlist} 
            isInUserState={props.isInUserState} 
            toggleBookHandler={props.toggleBookHandler} />
)

export default wishlist;