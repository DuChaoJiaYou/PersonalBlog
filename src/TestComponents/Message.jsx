import React from "react";

import { connect } from 'react-redux'
import {increase} from '../actions/index'

import {Button } from 'antd'



const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = {
   increase
}

//点击函数
const onHandle = () =>{
    console.log(this.props);

}

 class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const {count,increase} = this.props
        return (
            <div>
                <h2>留言板</h2>
                <h3> count: {count}</h3>
                <Button onClick={increase} type='primary'>增加count</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Message)