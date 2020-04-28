import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToprops(dispatch){

}

export default connect(mapStateToProps,mapDispatchToprops)(App);