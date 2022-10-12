import React, { useEffect } from "react";
import ArticleEditor from "../../../components/articleAdit/ArticleEditor";

import { connect } from 'react-redux'
 
import {postArticle} from'../../../actions/index'

import  axios from 'axios'

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        postArticle: (v)=>dispatch(postArticle(v))
    }
}

const  submitArticle = (v) =>{
    //发起post请求
    console.log('----提交博客文章',v);
    axios({
        method:'post',
        url:'/api/article/postArticle',
        data:v
        
    }).then(res=>{
        console.log(res);
    })
}

const PostArticle = (props) => {
    const  postArticle1  = props.postArticle
    const test1 = () => console.log('test----');
    // useEffect(()=>{
    //     console.log(props.postArticle);
    //  })
    return (
        <div>

            <ArticleEditor submitArticle={submitArticle} />

        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(PostArticle)