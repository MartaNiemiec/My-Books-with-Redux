
import React, { Component } from 'react';
import { Wrench } from 'styled-icons/fa-solid/Wrench';
import Swing from 'react-reveal/Swing';

class ErrorBoundry extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {  // if this.state.hasError = true
      return <Swing>
                <div style={{textAlign:"center", marginTop:"3rem"}}>
                  <Wrench width="3rem" height="3rem" style={{color:"brown", paddingBottom:"1rem"}}/>
                  <h1 style={{color: "#444"}}>Oooops!!! Something went wrong.</h1>
                </div>
              </Swing>
    }
    return this.props.children 
  }
}


export default ErrorBoundry;