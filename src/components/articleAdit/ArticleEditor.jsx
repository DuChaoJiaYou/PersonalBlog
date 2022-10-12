import React from "react";
import { Button, Form, Input, Select } from 'antd'
const { TextArea } = Input
const { Option } = Select

import { useNavigate } from "react-router-dom";

// Select 选项卡
const selectGroup = ['JavaScript', 'css', 'html', 'node.js', 'React', '杂记', '转载']

const onSelectChange = (value) => {
    console.log(value);
}



const ArticleEditor = (props) => {



    const navigate = useNavigate()
    const submitArticle = (value) => {
        //---提交函数
        props.submitArticle(value)
        navigate('/admin/editArticle/')
        console.log('变路由');


    }
    return (
        <div>
            <h2>文章发表页</h2>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 8 }} onFinish={(value) => submitArticle(value)}>
                <Form.Item label='标题' name='title' rules={[{ required: true, message: '请输入标题' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label='类别' name='category' rules={[{ required: true, message: '请选择类别' }]}>
                    <Select allowClear onChange={onSelectChange} placeholder='请选择一个博客文章类别'>
                        {/* <Option value='2'>2</Option>
                        <Option value='1'>1</Option>

                        <Option value='3'>3</Option> */}

                        {
                            selectGroup.map((item, index) =>

                                <Option value={item} key={index}>{item}</Option>

                            )
                        }
                    </Select>
                </Form.Item>
                <Form.Item label='摘要' name='abstract' rules={[{ required: true, message: '请输入摘要' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label='内容' name='content' rules={[{ required: true, message: '请输入内容' }]}>
                    <TextArea rows={12} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 8 }}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ArticleEditor