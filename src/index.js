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
// import 'antd-mobile/dist/antd-mobile.css';
let isLoading = true
React.Component.prototype.$axios = axios;

axios.interceptors.request.use(config => {
  isLoading  = true
  return config;
})

axios.interceptors.response.use(({ data }) => {
  console.log(111111)
  isLoading  = false 
  return data;
})
React.Component.prototype.isLoading = isLoading




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
