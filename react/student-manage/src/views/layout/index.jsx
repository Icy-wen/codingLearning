import React, { useState } from 'react';
import './index.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link ,Outlet} from 'react-router-dom';

//页面布局
function MainLayout(){
    const { Header, Sider, Content } = Layout;
     const [collapsed, setCollapsed] = useState(false);
     const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
    return(
        <Layout className='layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to='/layout'>首页</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to='/layout/publish'>信息发布</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '内容管理',
            },
          ]}
        />
      </Sider>
      <Layout >
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className='layout-content'
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
    )
}

export default MainLayout