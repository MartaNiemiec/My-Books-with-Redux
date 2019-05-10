import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';  
import Toolbar from "../../components/Toolbar/Toolbar";
import Sidebar from '../../components/Sidebar/Sidebar';
import Books from '../../components/Books/Books';

class Layout extends Component {

  state = {
    searchfield: '',
    books: []
  }

  searchChangeHandler = (event) => {
    this.setState({searchfield: event.target.value}, () => console.log(this.state.searchfield));
    ;
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
          <Books changed={this.searchChangeHandler}/>
        </main>
        
      </Auxiliary>
  );
  }
  

  
}

export default Layout;