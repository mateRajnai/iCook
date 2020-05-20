import React, { useContext } from "react";
import { SignupModalContext } from "../../context/SignupModalContext";
import { Modal, Form, Input, Tabs } from "antd";

const { TabPane } = Tabs;

const SignupForm = () => {
  const { visible, confirmLoading, handleOk, handleCancel } = useContext(
    SignupModalContext
  );
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

  return (
    <Modal
      visible={visible}
      onOk={onOk}
      okText="Submit"
      cancelText="Cancel"
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="SIGN-UP" key="1">
          <Form form={form} layout="vertical" name="form_in_modal">
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  message: "Please input the title of collection!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input type="textarea" />
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="SIGN-IN" key="2"></TabPane>
      </Tabs>
    </Modal>
  );
};

export default SignupForm;
