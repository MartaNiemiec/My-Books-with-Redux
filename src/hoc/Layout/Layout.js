import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';  
import Toolbar from "../../components/Toolbar/Toolbar";

class Layout extends Component {

  state = {
    searchfield: '',
    books: []
  }

  render() {
  let sidebar = {
    width: '150px', 
    height: '100vh',
    backgroundColor: '#242A31',
    position: 'relative',
    display: 'inline-block',
    borderTop: '1px solid #444',
    borderRight: '1px solid #444',
    boxShadow: 'inset -7px 0 9px -7px #111'
  }

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
          {/* <Sidebar /> */}
          <div style={ sidebar }></div>
          {/* <Books /> */}
          <div style={ books }></div>
        </main>
        
      </Auxiliary>
  );
  }
  

  
}

export default Layout;