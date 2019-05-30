import React from 'react';
import Booklist from '../BookList/Booklist';

const read = (props) => (
  <Booklist booksData={props.userReadBooks} 
            isInUserState={props.isInUserState} 
            toggleBookHandler={props.toggleBookHandler} />
)

export default read;