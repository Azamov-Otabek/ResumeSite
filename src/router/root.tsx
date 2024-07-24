import {TeamOutlined } from "@ant-design/icons";
  
export const Root = [
    {
      title: 'Resume',
      key: 'sub1',
      icon: <TeamOutlined />,
      children: [
        {
          title: 'Qabul qilinganlar',
          key: '4',
          path: '/dashboard/accept',
        },
        {
          title: 'Rad etilganlar',
          key: '5',
          path: '/dashboard/reject',
        },
      ],
    },
  ];