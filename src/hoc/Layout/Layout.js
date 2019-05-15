import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';  
import Toolbar from "../../components/Toolbar/Toolbar";
import Sidebar from '../../components/Sidebar/Sidebar';
import Books from '../../components/Books/Books';
import request from 'superagent';

class Layout extends Component {

  state = {
    searchfield: '',
    booksData: [],
    isLoading: true,
    user: {
      name:'',
      email: '',
      password: '',
      joined: '',
      readBooks: [],
      wishlist: [],
      favourites: []
    }
  }

  searchChangeHandler = (event) => {
    this.setState({searchfield: event.target.value});
    ;
  }

  searchBook = (event) => {
    event.preventDefault();
    this.setState({isLoading: true})
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchfield,
        maxResults: 40 })
      .then(data => {        
        this.setState({
          booksData: data.body.items,
          isLoading: false })
        console.log(this.state.booksData);
      })
  }

  wasRead = (bookId) => this.state.user.readBooks.some(book => book.id === bookId);
  
  toggleReadBookHandler = (bookId, bookInfo) => {
  // 1. check if the book was added
    let wasRead = this.wasRead(bookId)
  // 2. if it wasn't - add the book
    if (wasRead === false) {
      this.setState(state => {
            const book = {id: bookId, title: bookInfo.title, authors: bookInfo.authors }
            const readBooks = [book].concat(state.user.readBooks);
            const user = {...this.state.user}
            user.readBooks = readBooks;
            return {
              user
            }
          })
  // 3. if it was then remove the book
    } else {
      this.setState(state => {
        const readBooks = state.user.readBooks.filter(book => book.id !== bookId)
        const user = {...this.state.user};
        user.readBooks = readBooks;
        return {
          user
        }
      })
    }
  }

  render() {
  const main = {
    display:'flex'
  }

    return (
      <Auxiliary>
        <Toolbar />
        <main style={ main }>
          <Sidebar />
          <Books 
            changed={this.searchChangeHandler}
            searchfield={this.state.searchfield}
            searchBook={this.searchBook}
            booksData={this.state.booksData}
            isLoading={this.state.isLoading}
            wasRead={this.wasRead}
            toggleReadBook={this.toggleReadBookHandler}/>
        </main>
        
      </Auxiliary>
  );
  }
  

  
}

export default Layout;