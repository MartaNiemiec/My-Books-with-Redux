import React from 'react';
import Modal from '../../../../UI/Modal/Modal';
import classes from './BookModal.module.scss';
import PurchaseButton from '../../../../UI/PurchaseButton/PurchaseButton';

const bookModal = (props) => {
  const { book, show, modalClosed, fullAuthors } = props;
  let bookImage;
  
  book.volumeInfo.imageLinks 
  ? bookImage = book.volumeInfo.imageLinks.smallThumbnail
  : bookImage = "";

  return (
    <Modal show={show} 
           modalClosed={modalClosed}>
      <div className={classes.BookModal}>
        <div className={classes.BookModal__left}>
          <img src={bookImage} 
               className={classes.BookModal__left__image} 
               alt="Book cover"/>
          <PurchaseButton book={book}/>
        </div>
        <div className={classes.BookModal__content}>
          <h2>{book.volumeInfo.title}</h2>
          <h4>{fullAuthors}</h4>
          <div className={classes.BookModal__content__info}>{book.volumeInfo.description}</div>
        </div>
      </div>
    </Modal>
  );
}

export default bookModal;