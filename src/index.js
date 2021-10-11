/*
 * @Author: your name
 * @Date: 2021-06-24 16:40:19
 * @LastEditTime: 2021-09-02 13:49:27
 * @LastEditors: Please set LastEditors
 * @FilePath: /tags/webpack/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index'
import { Provider } from 'react-redux';
import store from './store'
import 'antd/dist/antd.css';
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app')
)
if (module.hot) {
  module.hot.accept();
}