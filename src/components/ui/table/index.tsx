import {Table} from 'antd';

function index({columns, data}:any) {
  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  )
}

export default index