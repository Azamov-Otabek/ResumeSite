import React, { useState } from 'react';
import {
  LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import './style.scss'
import { Outlet, useNavigate } from 'react-router-dom';
import { Root } from '../router/root';
import { RequarmentsModal } from '@ui';

const { Header, Content, Footer, Sider } = Layout;
const text = '<OA/>'

const generateMenuItems = (items:any, navigate:any) => {
  return items.map((item:any) => {
    if (item.children) {
      return {
        key: item.key,
        icon: item.icon,
        label: item.title,
        children: generateMenuItems(item.children, navigate),
      };
    }
    return {
      key: item.key,
      icon: item.icon,
      label: item.title,
      onClick: () => navigate(item.path),
    };
  });
};


const App: React.FC = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} breakpoint='lg' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical">
           {collapsed ? <h1 style={{color: 'white', textAlign: 'center', padding: '30px 0'}}>RESEMU</h1> :  <h1 style={{color: 'white', textAlign: 'center', padding: '30px 0'}}>RESEMU WORDED</h1>}
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={generateMenuItems(Root, navigate)} />
      </Sider>
      <Layout>
        <Header style={{ padding: '0 30px', background: colorBgContainer }}>
          <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 30}}> 
              <RequarmentsModal/> 
              <Button onClick={() => navigate('/')} style={{marginTop: 18}}>
                  <h4>Logout</h4>
                  <LogoutOutlined/>
              </Button>
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              marginTop: 30
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <h4>Resume Worded ©{new Date().getFullYear()} Created by {text} Coder</h4>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;