import React, { useContext } from "react";
import { SignModalContext } from "../../context/SignModalContext";
import { Modal, Form, Input, Tabs } from "antd";
import { PasswordInput } from "antd-password-input-strength";

const { TabPane } = Tabs;

const CHECK_USER_ENDPOINT = "/check_username";
const CHECK_EMAIL_ENDPOINT = "/check_email";

const SignModal = () => {
  const {
    visible,
    confirmLoading,
    handleOk,
    handleCancel,
    action,
    setAction,
    checkUniqueField,
  } = useContext(SignModalContext);
  const [form] = Form.useForm();

  const onOk = () => {
    form
      .validateFields()
      .then((data) => {
        form.resetFields();
        handleOk(data);
      })
      .catch((info) => {
        console.log("Validation failed:", info);
      });
  };

  const onTabChange = (key) => {
    if (key === "1") {
      setAction("signup");
    } else {
      setAction("signin");
    }
  };

  return (
    <Modal
      visible={visible}
      onOk={onOk}
      okText="Submit"
      cancelText="Cancel"
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      forceRender={true}
    >
      <Tabs
        activeKey={action === "signup" ? "1" : "2"}
        onChange={onTabChange}
        forceRender={true}
      >
        <TabPane tab="SIGN-UP" key="1">
          <Form form={form} layout="vertical" name="signup_form">
            <Form.Item
              name="userName"
              label="Username"
              validateTrigger="onBlur"
              hasFeedback
              rules={[
                {
                  required: action === "signup" ? true : false,
                  message: "Please enter your username!",
                },
                () => ({
                  validator(rule, value) {
                    return new Promise((resolve, reject) => {
                      checkUniqueField(value, CHECK_USER_ENDPOINT)
                        .then((occupied) => {
                          if (occupied) {
                            return reject("Username is already occupied!");
                          }
                          return resolve();
                        })
                        .catch(() => resolve());
                    });
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="firstName"
              label="First name"
              rules={[
                {
                  required: action === "signup" ? true : false,
                  message: "Please enter your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              validateTrigger="onBlur"
              hasFeedback
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: action === "signup" ? true : false,
                  message: "Please input your E-mail!",
                },
                () => ({
                  validator(rule, value) {
                    return new Promise((resolve, reject) => {
                      checkUniqueField(value, CHECK_EMAIL_ENDPOINT)
                        .then((occupied) => {
                          if (occupied) {
                            return reject(
                              "Entered email address is already registered!"
                            );
                          }
                          return resolve();
                        })
                        .catch(() => resolve());
                    });
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: action === "signup" ? true : false,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <PasswordInput />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: action === "signup" ? true : false,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="SIGN-IN" key="2">
          <Form form={form} layout="vertical" name="sigin_form">
            <Form.Item
              name="username_login"
              label="Username"
              rules={[
                {
                  required: action === "signin" ? true : false,
                  message: "Please enter your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password_login"
              label="Password"
              rules={[
                {
                  required: action === "signin" ? true : false,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default SignModal;
