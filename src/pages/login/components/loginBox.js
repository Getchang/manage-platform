import React, { Component, Fragment } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default class LoginBox extends Component{
  constructor() {
    super();
  }
  onFinish = (values) => {
    console.log("Success:", values);
    const formData = new FormData();
    formData.append("user_name", values.username);
    formData.append("password", values.password);
    // fetch("http://localhost:3000/users/register", {
    //   method: "POST",
    //   body: formData,
    // }).then(function (response) {
    //   return response.json();
    // });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <Form
          name="basic"
          className="loginForm"
        //   wrapperCol={{
        //     offset: 6,
        //     span: 10,
        //   }}
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a onClick={() => {this.props.switchLoginType('register')}}>register now!</a>
          </Form.Item>
        </Form>
    )
  }
}