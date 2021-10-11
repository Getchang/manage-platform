import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    // sm: {
    //   span: 8,
    // },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    // sm: {
    //   span: 16,
    // },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    // sm: {
    //   span: 16,
    //   offset: 8,
    // },
  },
};

const RegistrationForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("user_name", values.nickname);
    formData.append("password", values.password);
    formData.append("phone", values.phone);
    fetch("http://localhost:3000/users/register", {
      method: "POST",
      body: formData,
    }).then(function (response) {
      return response.json();
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // props.switchLoginType("login")
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onEmailChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ["@163.com", "@qq.com", "@gmail.com"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const emailOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      className="registerForm"
      name="register"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <AutoComplete
          options={emailOptions}
          onChange={onEmailChange}
          placeholder="website"
        >
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout} >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegistrationForm