import React from 'react';
import Booklist from '../BookList/Booklist';

const favourites = (props) => (
  <Booklist booksData={props.userFavourites} 
            isInUserState={props.isInUserState} 
            toggleBookHandler={props.toggleBookHandler} />
)

export default favourites;