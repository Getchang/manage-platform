import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

/**
 * @description: 登录提交表单
 * @param {*} values
 * @return {*}
 */
const onFinish = values => {
  console.log('Success:', values);
  const formData = new FormData();
  formData.append('user_name', values.username);
  formData.append('password', values.password);
  // fetch("http://localhost:3000/users/register", {
  //   method: "POST",
  //   body: formData,
  // }).then(function (response) {
  //   return response.json();
  // });
};

/**
 * @description: 登录验证未通过
 * @param {*} errorInfo
 * @return {*}
 */
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const LoginBox = props => {
  return (
    <Form
      name="basic"
      className="loginForm commonFrom"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className="login-remember">记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        Or{' '}
        <a
          onClick={() => {
            props.setLoginBoxType('register');
          }}>
          register now!
        </a>
      </Form.Item>
    </Form>
  );
};
export default LoginBox;
