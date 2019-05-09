  //   fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:pride+prejudice&printType=books&key=AIzaSyAYhp982ilH20UxEiWB3vooIr-WxinMmhE')
  //   .then(resp => resp.json())
  //   .then(data => {
  //     this.setState({books: data.items})
  //       // console.log(this.state.books[0].id);
  //     })
  // }
  // const book = this.state.books[0];
    // console.log('book >>>', book);


import React from 'react';
import classes from './BookList.module.scss';
import Book from './Book/Book';

const BookList = (props) => {
return (
  <div className={classes.BookList}>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </div>

)

}

export default BookList;