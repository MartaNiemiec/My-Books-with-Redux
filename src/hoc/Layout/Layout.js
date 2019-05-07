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
    display: 'inline-block'
  }

  let books = {
    height: '100vh',
    width: 'calc(100% - 150px)',
    backgroundColor: '#fff',
    position: 'relative',
    display: 'inline-block'
  }

    return (
      <Auxiliary>
        <Toolbar />
        {/* <Sidebar /> */}
        <div style={ sidebar }></div>
        {/* <Books /> */}
        <div style={ books }></div>
      </Auxiliary>
  );
  }
  

  
}

export default Layout;