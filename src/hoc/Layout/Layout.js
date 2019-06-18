import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestBooks, addBook, removeBook } from '../../store/actions/index';

import Auxiliary from '../Auxiliary/Auxiliary';  
import Toolbar from "../../components/Toolbar/Toolbar";
import Sidebar from '../../components/Sidebar/Sidebar';
import Books from '../../components/Books/Books';
import BookModal from '../../components/Books/BookList/Book/BookModal/BookModal';


// =========== INITIAL STATE ===========
const initialState = {
  openBookModal:true,
  bookModalData: [],
  // user: {
  //   name:'',
  //   email: '',
  //   password: '',
  //   joined: '',
  //   readBooks: [],
  //   wishlist: [],
  //   favourites: []
  // }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchBooks.searchField,
    booksData: state.requestBooks.booksData,
    isPending: state.requestBooks.isPending,
    error: state.requestBooks.error,
    user: {
      readBooks: state.userBooks.readBooks,
      wishlist: state.userBooks.wishlist,
      favourites: state.userBooks.favourites
    }
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchChangeHandler: (event) => dispatch(setSearchField(event.target.value)),
    searchBooks: (ownProps) => dispatch(requestBooks(ownProps)),
    addBookHandler: (bookId, bookList, booksData) => dispatch(addBook(bookId, bookList, booksData)),
    removeBookHandler: (bookId, bookList, booksData) => dispatch(removeBook(bookId, bookList, booksData))
  }
}


class Layout extends Component {

// =========== STATE ===========
  state = initialState;


// =========== Open Modal Handler ===========
  openModalHandler = (bookData, fullAuthors) => {
    this.setState({ openBookModal: true, 
                    bookModalData: [bookData, fullAuthors] });
  }

  
// =========== Close Modal Handler ===========
  closeModalHandler = () => {
    this.setState({ openBookModal: false, 
                    bookModalData: [] });
  }


// =========== Search Book ===========
  searchBook = (event) => {
    event.preventDefault();
    this.props.searchBooks(this.props.searchField);
  }

// // =========== Check if the book is in the user state.(readBooks/wishlist/favourites) ===========
  isInUserState = (bookId, bookList) => this.props.user[bookList].some(book => book.id === bookId);
  

// // =========== Toggle Book's icons and user's state ===========
  toggleBookHandler = (bookId, bookList) => { // bookLists-> readBooks/wishlist/favourites
    let isInState = this.isInUserState(bookId, bookList);
    isInState ? this.props.removeBookHandler(bookId, bookList, this.props.booksData)
              : this.props.addBookHandler(bookId, bookList, this.props.booksData)
     
     
  }


// =========== RENDER ===========
  render() {
    const main = {
      display:'flex'
    }
    
    let initialPage;
    const { bookModalData, openBookModal  } = this.state;
    const { searchChangeHandler, searchField, booksData, isPending, user } = this.props;


    (booksData.length !== 0) ? initialPage = true : initialPage = false;

    let modall = bookModalData.length === 0  
    ? null 
    : <BookModal show={openBookModal} 
              modalClosed={this.closeModalHandler}
              book={bookModalData[0]}
              fullAuthors={bookModalData[1]}>
              </BookModal>;

    return (
      <Auxiliary>
        {modall}
        <Toolbar />
        <main style={ main }>
          <Sidebar/>
          <Books 
            changed={searchChangeHandler}
            searchfield={searchField}
            searchBook={this.searchBook}
            booksData={booksData}
            isLoading={isPending}
            isInitial={initialPage}
            isInUserState={this.isInUserState}
            toggleBookHandler={this.toggleBookHandler}
            userReadBooks={user.readBooks}
            userWishlist={user.wishlist}
            userFavourites={user.favourites}
            openModalHandler={this.openModalHandler}/>
        </main>
      </Auxiliary>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

// fetch('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=paid-ebooks')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });