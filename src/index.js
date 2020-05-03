import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios"; // 引入axios
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'; // 引入store
import "lib-flexible"  //引入px转换rem 插件

React.Component.prototype.$axios = axios;
axios.interceptors.request.use(config => {
  return config;
})

axios.interceptors.response.use(({ data }) => {
  return data;
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router><App /></Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
