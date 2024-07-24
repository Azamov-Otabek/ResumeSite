import { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';


function index() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function handleSubmit(value:any){
        console.log(value);
        const response = await axios.post(`http://45.130.148.142:5625/api/Requirements?requirements=${value}`)
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
        <Button onClick={() => showModal()} style={{marginTop: 18}}>
            Requarments qo'shish
        </Button>
        <Modal title="Basic Modal" footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form initialValues={{
                requirements: ''
            }}
            onFinish={(value) => handleSubmit(value)}>
                <Form.Item rules={[{
                    required: true,
                    message: 'Talablar manzili bosh qilingan'
                }]} name='requirements'>
                    <Input placeholder="Talablar" />
                </Form.Item>
                <div style={{display: 'flex', justifyContent: 'end'}}>
                <Button type='primary' htmlType='submit'>
                    Tasdiqlash
                </Button>
                </div>
            </Form>
        </Modal>
      </>
    );
}

export default index