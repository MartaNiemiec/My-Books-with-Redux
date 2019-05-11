import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';  
import Toolbar from "../../components/Toolbar/Toolbar";
import Sidebar from '../../components/Sidebar/Sidebar';
import Books from '../../components/Books/Books';
import request from 'superagent';

class Layout extends Component {

  state = {
    searchfield: '',
    booksData: []
  }

  searchChangeHandler = (event) => {
    this.setState({searchfield: event.target.value}
      , () => console.log(this.state.searchfield)
      );
    ;
  }

  searchBook = (event) => {
    console.log('yeeeeeeeeeeee');
    event.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchfield })
      .then(data => {
        this.setState({booksData: data.body.items})
        // console.log(data.body.items)
        console.log(this.state.booksData);
      })
  }
  

  // const book = this.state.books[0];
  //   console.log('book >>>', book);
  // }

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
            booksData={this.state.booksData}/>
        </main>
        
      </Auxiliary>
  );
  }
  

  
}

export default Layout;