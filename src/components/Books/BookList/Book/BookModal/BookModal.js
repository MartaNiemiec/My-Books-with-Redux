import React from 'react';
import Modal from '../../../../UI/Modal/Modal';
import classes from './BookModal.module.scss';

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
          <img src={bookImage} className={classes.BookModal__image} alt=""/>
          <div className={classes.BookModal__content}>
            <h2>{book.volumeInfo.title}</h2>
            <h4>{fullAuthors}</h4>
            <div>{book.volumeInfo.description}</div>
          </div>
        </div>
        
      </Modal>

    
  
);
}


export default bookModal;