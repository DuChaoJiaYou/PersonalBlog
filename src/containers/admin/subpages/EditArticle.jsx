import React, { useEffect, useRef, useState } from "react";

import axios from "axios";
import ArticleManage from '../../../components/articleManage/ArticleManage'

const data = {
    value: []
}

const getInitArticleList = () => {
    axios({
        method: 'GET',
        url: "/api/article/initArticleList"
    }).then((res) => {
        data.value = res.data
    })
}


const EditArticle = () => {

    const [articleData, setArticleData] = useState([])
    const dataInfo = useRef()

    //请求博客文章函数列表
    const getInitArticleList = () => {
        axios({
            method: 'GET',
            url: "/api/article/initArticleList"
        }).then((res) => {
            setArticleData(res.data)
            console.log('父组件函数执行了');
        })
    }

    //根据id删除博客文章
    const delArticleById = (_id) => {
        axios({
            method: 'delete',
            url: '/api/article/delArticle',
            data: { _id }
        }).then((res) => {
            console.log(res);
        })
    }

    //根据id更改博客文章
    const updateArticleById = (value) => {
        axios({
            method: "put",
            url: '/api/article/editArticle',
            data: value
        }).then((res) => {
            console.log(res);
        })
    }


    useEffect(() => {

        getInitArticleList()
    }, [])
    return (
        <div>
            <ArticleManage data={articleData}
                delArticleById={delArticleById}
                getInitArticleList={getInitArticleList}
                updateArticleById = {updateArticleById}
            ></ArticleManage>
        </div>
    )
}

export default EditArticle