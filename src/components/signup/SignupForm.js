import React, { useContext } from "react";
import { SignupModalContext } from "../../context/SignupModalContext";
import { Modal, Form, Input } from "antd";

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
      title="Sign-up - let's cook together"
      visible={visible}
      onOk={onOk}
      okText="Sign-up"
      cancelText="Cancel"
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
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
    </Modal>
  );
};

export default SignupForm;
