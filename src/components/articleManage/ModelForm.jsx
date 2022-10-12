import React, { useEffect } from "react";
import { Button, Form, Input, Select } from 'antd'

const { Option } = Select
const { TextArea } = Input

// Select 选项卡
const selectGroup = ['JavaScript', 'css', 'html', 'node.js', 'React', '杂记', '转载']

export default function ModalForm(props) {
    const [form1] = Form.useForm()
    const { _id,title, category, abstract, content } = props.rowRecord
    useEffect(() => {
        form1.setFieldsValue({
            title, category, abstract, content
        })
    })
    const onFinish = (value) => {
        console.log('success11111', value.title);
        props.updateArticleById({_id,...value})
        props.refreshData()
    }
    return (
        <div>

            <Form form={form1} onFinish={onFinish}>
                <Form.Item label='标题' name="title">
                    <Input />
                </Form.Item>
                <Form.Item label='摘要' name="abstract">
                    <Input />
                </Form.Item>
                <Form.Item label='类别' name="category">
                    <Select>
                        {
                            selectGroup.map((item, index) => (<Option value={item} key={index}>{item}</Option>)
                            )
                        }
                    </Select>
                </Form.Item>
                <Form.Item label='内容' name="content">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item wrapperCol={{
                    offset: 18, span: 16
                }}>
                    <Button  htmlType="submit" type="primary">提交</Button>
                </Form.Item>

            </Form>
        </div>
    )
}