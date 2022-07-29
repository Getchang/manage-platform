/*
 * @Author: your name
 * @Date: 2021-07-08 11:06:27
 * @LastEditTime: 2021-09-07 10:06:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tags/webpack/src/login/index.js
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { switchLoginType } from '../../store/login/action';
import LoginBox from './components/loginBox';
import RegistrationForm from './components/register';
import Api from '@/utils/';
import './index.scss';

const mapStateToProps = state => ({
  isRegister: state.loginData.swithLoginType,
});
const mapDispatchToProps = {
  switchLoginType,
};
class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let { isRegister, switchLoginType } = this.props;
    console.log(this.props, switchLoginType);
    return (
      <Fragment>
        <div className="head"> {isRegister == 'login' ? '登录页面' : '注册'} </div>
        {isRegister == 'login' ? <LoginBox switchLoginType={switchLoginType} /> : <RegistrationForm switchLoginType={switchLoginType} />}
      </Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
