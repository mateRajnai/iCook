import React, { useContext } from "react";
import { SignupModalContext } from "../../context/SignupModalContext";
import { Modal, Form, Input, Tabs } from "antd";

const { TabPane } = Tabs;

const SignupForm = () => {
  const {
    visible,
    confirmLoading,
    handleOk,
    handleCancel,
    action,
    setAction,
  } = useContext(SignupModalContext);
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
          <Form form={form} layout="vertical" name="form_in_modal">
            <Form.Item
              name="userName"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "Please enter your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="firstName"
              label="First name"
              rules={[
                {
                  required: true,
                  message: "Please enter your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
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
              <Input />
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
            <Form.Item label="Address">
              <Input.Group compact>
                <Form.Item name={["address", "country"]} noStyle>
                  <Input placeholder="Country" />
                </Form.Item>
                <Form.Item name={["address", "zipCode"]} noStyle>
                  <Input style={{ width: "30%" }} placeholder="Zip code" />
                </Form.Item>
                <Form.Item name={["address", "city"]} noStyle>
                  <Input style={{ width: "70%" }} placeholder="City" />
                </Form.Item>
                <Form.Item name={["address", "address"]} noStyle>
                  <Input placeholder="Address" />
                </Form.Item>
              </Input.Group>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="SIGN-IN" key="2"></TabPane>
      </Tabs>
    </Modal>
  );
};

export default SignupForm;
