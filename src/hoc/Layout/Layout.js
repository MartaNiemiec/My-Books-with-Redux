import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';  
import Toolbar from "../../components/Toolbar/Toolbar";
import Sidebar from '../../components/Sidebar/Sidebar';

class Layout extends Component {

  state = {
    searchfield: '',
    books: []
  }

  render() {

  let books = {
    height: '100vh',
    width: 'calc(100% - 150px)',
    backgroundColor: '#EEF0F2',
    position: 'relative',
    display: 'inline-block'
  }

  const main = {
    display:'flex'
  }

    return (
      <Auxiliary>
        <Toolbar />
        <main style={ main }>
          <Sidebar />
          {/* <Books /> */}
          <div style={ books }></div>
        </main>
        
      </Auxiliary>
  );
  }
  

  
}

export default Layout;