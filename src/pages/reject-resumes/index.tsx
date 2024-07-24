import { Table, MessageModal } from "@ui";
import { Space } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function reject() {
  const [data, setData] = useState([]);

  async function getRejects() {
    const response = await axios.get('http://45.130.148.142:5625/api/ResumeCheck/RejectedResumes/1/100');
    setData(response?.data);
  }

  async function deleteItem(id:any){
    const response = await axios.delete(`http://45.130.148.142:5625/api/ResumeCheck/${id}`);
    if(response?.data?.statusCode == 200){
      toast.success('Muvaffaqiyatli ochirildi')
    }else{
      toast.error('Ochirishda xatolik yuz berdi')
    }
    getRejects();
  }

  useEffect(() => {
    getRejects();
  }, []);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Ismi',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Resume Link',
      key: 'resumePath',
      dataIndex: 'resumePath',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any, i:any) => (
        <Space key={i} size="middle">
          <a onClick={() => deleteItem(record?.id)}>Delete</a>
          <MessageModal data={record}/>
        </Space>
      ),
    },
  ];

  return (
    <>
    <ToastContainer/>
      <Table columns={columns} data={data} />
    </>
  );
}

export default reject;
