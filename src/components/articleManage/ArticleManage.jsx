import React, { useEffect, useState } from "react";

import { Table, Tag, Space, Button, Modal } from 'antd'

import ModalForm from "./ModelForm";

import { ExclamationCircleOutlined } from '@ant-design/icons'


// 查：  获取全部数据
// 修改：根据博客_id 来update
// 删除：根据博客_id 来delete






const testData = [{
    key: '1',
    abstract: "安抚",
    category: "JavaScript",
    content: "阿斯蒂芬",
    title: "士大夫",
    __v: 0,
    _id: "63400843391bb214113c8436"
}]

const ArticleManage = (props) => {

    const [tableData, setTableData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [rowRecord, setRowRecord] = useState({})

    useEffect(() => {
        if (props.data.length != 0) {
            const data = props.data.map((item, index) => {
                return {
                    'key': index,
                    ...item
                }

            })
            // console.log('拿到了', data);
            console.log('拿到了', data);
            setTableData(data)
        } else {
            console.log('没有数据', props.data);
            setTableData([])
        }


    }, [props.data])

    //弹窗修改后，关闭弹窗，并刷新父组件函数
    const refreshData = () => {
        setIsModalOpen(false)
        props.getInitArticleList()
    }

    //二次确认删除警告弹窗
    const confirm = (record) => {
        Modal.confirm({
            title: '确认要删除吗？',
            icon: <ExclamationCircleOutlined />,
            content: '请三思哦...',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                console.log(record._id)
                props.delArticleById(record._id)
                props.getInitArticleList()
                console.log('你把我删除了');
            }
        });
    }

    const columns =
        [
            {
                title: '标题',
                key: 'title',
                dataIndex: 'title'
            },
            {
                title: '简要',
                key: 'abstract',
                dataIndex: 'abstract'

            },
            {
                title: '类别',
                key: 'category',
                dataIndex: 'category',
                render:(_,{category})=>(
                    <Tag color="blue" key={category}>
                        {category}
                    </Tag>
                )
            },
            {
                title: '操作',
                key: 'content',

                // dataIndex: 'content',
                render: (_, record) => (
                    <Space size="middle">
                        <a onClick={() => {

                            confirm(record)
                        }}>删除</a>
                        <a onClick={() => {
                            setIsModalOpen(true)
                            setRowRecord(record)
                            console.log(record)
                        }}>
                            更改
                        </a>
                    </Space>

                )
            }

        ]





    return (
        <div>
            <h3>
                查、修改，修改博客页面
                <Table columns={columns} dataSource={tableData} >

                </Table>
                <Modal open={isModalOpen}
                    onOk={() => setIsModalOpen(false)}
                    title="修改博客"
                    onCancel={() => setIsModalOpen(false)}
                    footer={null}
                >
                    <ModalForm rowRecord={rowRecord}
                        updateArticleById={props.updateArticleById}
                        refreshData={refreshData}
                    ></ModalForm>
                </Modal>
                <Modal></Modal>
            </h3>
        </div>
    )
}

export default ArticleManage