import React, { useEffect, useState } from "react";

import  './article.sass'

const data = [1, 2, 3]
export default function ArticleList(props) {

    const [blogList,setBlogList] = useState([])
    useEffect(()=>{
        if(props.blogList.length > 0){
            // setData(props.blogList)
            setBlogList(props.blogList)
            console.log('传入的值',blogList);
          


        }
    })
    return (
        <div className="container">
            <ul className="dev">
                {
                   blogList.map((item,index)=>(
                    <li  key={index}>{item.title}</li>
                   ))

              }


            </ul>
        </div>
    )
}