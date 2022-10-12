import React, { useEffect, useRef, useState } from "react"

import { Routes, Route, Outlet } from "react-router-dom"

import ArticleList from "../../components/front/article/ArticleList"
import ArticleIndex from "../../components/front/article/ArticleIndex"

import { useNavigate, Navigate } from "react-router-dom"

import axios from "axios"

function Blog() {

    const [blogList, setBlogList] = useState([])

    //获取博客列表
    const getBlogList =  async () => {
       const data =   await axios({
            method: 'GET',
            url: '/api/article/initArticleList'
        }).then((res) => {
          
            // setBlogList(res.data)
            return res.data
        })
        // console.log(data);
        await setBlogList(data)
    }

    //获取博客详情

 

    const navigate = useNavigate()


    useEffect(() => {
        getBlogList()
    

    },[])

  

    return (
        <div>

            <h1>博客总页，我是标题党哈哈哈哈</h1>
            <Routes>
                <Route path="Article" element={<ArticleList  blogList={blogList} />} ></Route>
                <Route path="Article/:_id" element={<ArticleIndex />}></Route>
            </Routes>
        </div>
    )
}

export default Blog