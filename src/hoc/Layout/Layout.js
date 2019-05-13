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
    isLoading: true
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
            isLoading={this.state.isLoading}/>
        </main>
        
      </Auxiliary>
  );
  }
  

  
}

export default Layout;