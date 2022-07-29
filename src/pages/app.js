/*
 * @Author: your name
 * @Date: 2021-06-24 17:31:59
 * @LastEditTime: 2022-07-01 10:12:52
 * @LastEditors: changshuai changs@bsoft.com.cn
 * @Description: In User Settings Edit
 * @FilePath: /tags/webpack/src/app.js
 */
import React from 'react';
import { connect } from 'react-redux';
import './app.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChangeRoute = () => {
    console.log(this.props);
    this.props.history.push('/login');
  };
  render() {
    let arr = [1, 2, 3, 4];
    arr.reduce((res, val) => {
      console.log(res, val);
      return res.then(v => {
        console.log(val);
        return new Promise(resolve => {
          setTimeout(resolve, 1000);
        });
      });
    }, Promise.resolve());
    return (
      <React.Fragment>
        <img src={logo} alt="" />
        <div> 这是一个React页面 </div>
        <button onClick={this.handleChangeRoute}> 点击切换路由 </button>
      </React.Fragment>
    );
  }
}
export default App;
