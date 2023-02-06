import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { switchLoginState } from '../../store/login/action';
import LoginBox from './components/loginBox';
import RegistrationForm from './components/register';
import Api from '@/utils/';
import './index.scss';
import { useState } from 'react';

const mapStateToProps = state => ({
  isLogin: state.loginData.loginState,
});
const mapDispatchToProps = {
  switchLoginState,
};

const Login = props => {
  let { isLogin, switchLoginState } = props;
  const [loginBoxType, setLoginBoxType] = useState('login');
  console.log(props, switchLoginState);
  return (
    <div className="LoginBox">
      <div className="head"> {loginBoxType == 'login' ? '登录' : '注册'} </div>
      {loginBoxType == 'login' ? <LoginBox switchLoginState={switchLoginState} setLoginBoxType={setLoginBoxType} /> : <RegistrationForm setLoginBoxType={setLoginBoxType} />}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
