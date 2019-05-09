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

  render() {

  const main = {
    display:'flex'
  }

    return (
      <Auxiliary>
        <Toolbar />
        <main style={ main }>
          <Sidebar />
          <Books />
        </main>
        
      </Auxiliary>
  );
  }
  

  
}

export default Layout;