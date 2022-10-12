import React, { useEffect, useState } from "react";

import './article.scss'

const data = [1, 2, 3]
export default function ArticleList(props) {

    const [blogList, setBlogList] = useState([])
    useEffect(() => {
        if (props.blogList.length > 0) {
            // setData(props.blogList)
            setBlogList(props.blogList)
            console.log('传入的值', blogList);



        }
    })
    return (
        <div className="container">
            <ul className="dev">
                {
                    blogList.map((item, index) => (
                        <li key={index}>
                            <div>
                                <b>标题</b>：{item.title}
                                <b>简介</b>：{item.abstract}
                            </div>
                        </li>
                    ))

                }


            </ul>
        </div>
    )
}