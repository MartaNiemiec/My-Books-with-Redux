import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';  
import Toolbar from "../../components/Toolbar/Toolbar";
import Sidebar from '../../components/Sidebar/Sidebar';
import Books from '../../components/Books/Books';
import request from 'superagent';

const initialState = {
  searchfield: '',
  booksData: [],
  isLoading: true,
  // route: 'signin',
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

class Layout extends Component {

  // =========== STATE ===========
  state = initialState;


  // =========== Search Change Handler ===========
  searchChangeHandler = (event) => {
    this.setState({searchfield: event.target.value});
    ;
  }


  // =========== Search Book ===========
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



  // =========== Check if the book is in the user state.(readBooks/wishlist/favourites) ===========
  isInUserState = (bookId, stateKey) => this.state.user[stateKey].some(book => book.id === bookId);

  

  // =========== Toggle Book's icons and user's state ===========
  toggleBookHandler = (bookId, bookInfo, stateKey) => {
  // 1. check if the book is in the user's state
    let isInState = this.isInUserState(bookId, stateKey)
  // 2. if it isn't - add the book
    if (isInState === false) {
      this.setState(state => {
            const book = {id: bookId, title: bookInfo.title, authors: bookInfo.authors }
            const userStateKey = [book].concat(state.user[stateKey]);
            const user = {...this.state.user}
            user[stateKey] = userStateKey;
            return {
              user
            }
          })
  // 3. if it is then remove the book
    } else {
      this.setState(state => {
        const userStateKey = state.user[stateKey].filter(book => book.id !== bookId)
        const user = {...this.state.user};
        user[stateKey] = userStateKey;
        return {
          user
        }
      })
    }
  }


  // =========== RENDER ===========
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
            isInUserState={this.isInUserState}
            toggleBookHandler={this.toggleBookHandler}/>
        </main>
      </Auxiliary>
    );
  }
  

  
}

export default Layout;