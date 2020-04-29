import React, { Component } from 'react'
import { connect } from 'react-redux'
import RootRouter from "./components/common/RootRouter";//引入该组件，用来动态生成路由
/*
*
*/
import router from "./router/index";
class App extends Component {

  render() {
    return (
      <div>
        <RootRouter router={router}></RootRouter>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToprops(dispatch) {
  return {};

}

export default connect(mapStateToProps, mapDispatchToprops)(App);