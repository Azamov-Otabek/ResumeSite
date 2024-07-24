import React, { useState } from "react";
import { Button, Form, Modal } from "antd";
import { ProFormText } from "@ant-design/pro-components";
import axios from "axios";


function index({data}:any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function handleSubmit(value: any) {
    const response = await axios.post('http://45.130.148.142:5625/api/SendToEmail/SendEmail', value)
    console.log(response);
    handleCancel()
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a onClick={showModal}>Xabar yuborish</a>
      <Modal
        title="Emailga xabar yuborish"
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={(value) => handleSubmit(value)}>
          <ProFormText
            initialValue={data?.email}
            name="To"
            placeholder="Email kiriting"
            rules={[
              {
                required: true,
                message: "Email manzilini kiriting",
              },
              {
                type: "email",
                message: "Emailni togri formatda kiriting",
              },
            ]}
          />
          <ProFormText
            name="Subject"
            placeholder="Xabar Mavzusini kiriting"
            rules={[
              {
                required: true,
                message: "Xabar mavzusini kiriting",
              },
            ]}
          />
           <ProFormText
            name="Body"
            placeholder="Xabar kiriting"
            rules={[
              {
                required: true,
                message: "Xabar kiriting",
              },
            ]}
          />
          <Button type="primary" htmlType="submit">Yuborish</Button>
        </Form>
      </Modal>
    </>
  );
};


export default index
