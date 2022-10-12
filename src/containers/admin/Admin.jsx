import React, { useState } from "react";

import { Layout, Menu, Button } from 'antd'
const { Header, Sider, Content } = Layout
import {
    UploadOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined, UserOutlined, EditOutlined,
    HomeOutlined,
    ToolOutlined,
    PlaySquareOutlined,
    FileAddOutlined
} from '@ant-design/icons'

import { useNavigate, Outlet, Routes, Route } from "react-router-dom";

import PostArticle from "./subpages/PostArticle";



const items1 = [
    {
        key: '/',
        label: '首页',
        icon: <HomeOutlined />
    },
    {
        key: '/admin/editUser',
        label: '用户管理',
        icon: <UserOutlined />,
    },
    {
        key: '/admin/postArticle',
        label: '文章发表',
        icon: <FileAddOutlined />

    },
    {
        key: '/admin/editArticle',
        label: '文章管理',
        icon: <EditOutlined />
    },
    {
        key: '/admin/editMessage',
        label: '留言管理',
        icon: <ToolOutlined />
    },
    {
        key: '/admin/editMusic',
        label: '音乐管理',
        icon: <PlaySquareOutlined />
    }
]

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()
    return (

        <Layout>

            <Sider collapsible collapsed={collapsed} trigger={null} >
                <div style={{
                    margin: 20,


                }}>
                    {
                        collapsed === true ? '' : <h3 style={{
                            color: "#fff"
                        }}>博客管理后台</h3>
                    }

                </div>
                <Menu items={items1} theme="dark" onClick={o => navigate(o.key)} defaultSelectedKeys={['/index']}>

                </Menu>
            </Sider>
            <Layout>
                <Header>
                    {
                        collapsed === true ? <MenuUnfoldOutlined style={{
                            color: '#fff',
                            fontSize: 24
                        }} onClick={() => {
                            setCollapsed(!collapsed);
                        }} /> : <MenuFoldOutlined style={{
                            color: '#fff',
                            fontSize: 24
                        }} onClick={() => {
                            setCollapsed(!collapsed);
                        }} />
                    }


                </Header>
                <Content style={{
                    height: 600
                }}>


                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Admin