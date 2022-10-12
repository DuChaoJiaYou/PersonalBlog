import React from "react";
import { Route, Routes, Outlet, Link, useNavigate } from "react-router-dom";

import { Layout, Breadcrumb, Menu } from 'antd'

const { Header, Content, Footer, Sider } = Layout



import Music from "../music/Music";
import Blog from "../blog/Blog";
import Message from "../message/Message";
import { LinkOutlined } from "@ant-design/icons";
const items1 = ['博客', '音乐', '个人简历', '留言区', '后台管理'].map((item, index) => {
    return {
        key: index,
        label: item,

    }
})

const items2 = ['博客', '音乐', '留言', '简历', '管理'].map((item, index) => {
    return {
        key: index,
        label: item,
        icon: '',
       
    }
})
const homeRoutes = [
    {
        key:0,
        path:'/blog/Article'
    },
    {
        key:1,
        path:'/music'
    },
    {
        key:2,
        path:'/message'
    },
    {
        key:3,
        path:'/resume'
    },
    {
        key:4,
        path:'/admin'
    }
]


export default function HomePage() {
    const navigate = useNavigate()
    return (
        <Layout>
            <Header >
                <Menu theme="dark" items={items1} mode="horizontal"></Menu>
            </Header>
            <Content>
                <Breadcrumb></Breadcrumb>
                <Layout>
                    <Sider width={70}>
                        <Menu items={items2} mode="inline"
                            style={{ height: '100%' }}
                            defaultSelectedKeys={['1']}
                            onClick={(item) => {
                                console.log(homeRoutes[item.key].path);
                                navigate(homeRoutes[item.key].path)
                            }}
                        >

                        </Menu>
                    </Sider>
                    <Content style={{
                        height: 500
                    }}>
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Content>

        </Layout>
    )
}