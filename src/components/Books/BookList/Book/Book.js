import React from 'react';
import classes from './Book.module.scss';
import ActionPanel from '../../../UI/ActionPanel/ActionPanel'

const book = (props) => (
  <div className={classes.Book}>
    <ActionPanel />
    {/* <img src={props.cover} alt="book's cover"/> */}
    <div className={classes.Book__img}></div>
    <div className={classes.Book__info}>
      <h4>Title: Title</h4>
      <p>Author: Book Author</p>
      <p>Rating: Book Rating</p>
    </div>
    
  </div>

  // {/* <div>
  //   <img src={props.cover} alt="book's cover"/>
  //   <h3>Title: {props.title}</h3>
  //   <h4>Author: {props.author}</h4>
  //   <h4>Rating: {props.rating}</h4>
  // </div> */}
)

export default book;