import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { connect, Connect } from "react-redux";
import { reduce } from "../actions";


import { Button } from "antd";



const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = {
    reduce
}


function Blog(props) {
    const location = useLocation()
    const { state } = location
    useEffect(
        () => {
            // console.log(location)                       
 
        }
    )

    return (
        <div>
            <h2>博客页</h2>
            <div>
                {/* 姓名是： {state.name} */}
                <Button onClick={props.reduce} type='ghost'>降低count</Button>
            </div>
            <h3>count :{props.count }</h3>

        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)


