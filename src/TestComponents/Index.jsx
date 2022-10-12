import React, { ReactDOM, useState,useEffect } from 'react'
import {Link, Outlet, Route, Routes,useNavigate} from 'react-router-dom'
import { MailFilled, AppstoreOutlined } from '@ant-design/icons'

import { Menu,Button,Input } from 'antd'


// 自定义component
import Message  from './Message'

import  './style.css'

import { connect } from 'react-redux'


const menus = [
    {
       
        label: '首页',
        key:'mail',
        icon: <MailFilled />,
    },
    { 
        icon:<AppstoreOutlined/>,
        label: '用户管理',
        path:'/usergide'
       
    },
    { 
        icon:'',
        key:'dispatch',
        label: '发文',
    },
    {
        label: '标签管理',
    },
    {
        label: '文章管理',
    }
]


const mapStateToProps = (state) => {
    return {
        count :state.count
    }
}


 function Index  (props) {
    // constructor() {
    //     super()
    //     this.state = {
    //         name: '测试',
    //         date: new Date().toLocaleTimeString()
    //     }
    // }
    
    // 定时器函数
    // getTimer = () => {
    //     this.setState({
    //         date: new Date().toLocaleTimeString()
    //     })

    // };
    // 
    // componentDidMount() {
    //     this.getTimer()
    //     this.time_id = setInterval(() => {
    //         this.getTimer()
    //     }, 1000)
    // };

    // componentWillUnmount() {
    //     clearInterval(this.time_id)
    // };
    
    // menuItemOnClick = (e) => {
    //     console.log(e);
    // }
     
    const [name,setName] = useState('初始值')
    
    const changeName = () =>{
        
        // console.log(e.target);
        // setName(e.target.value)
        
    }

    useEffect(()=>{
        changeName()
        console.log('来自store的count被改变了');
    },[props])
   
       const  navigate = useNavigate()
        return (
            <div className='wrap'>
                {/* <Menu items={menus} mode="horizontal" onClick={this.menuItemOnClick}  >
                </Menu> */}
               <h2>首页</h2>
               <h4>来自store中的count: {props.count}</h4>
               <h2>{name} </h2>
               <Input  value={name} onChange={e => setName(e.target.value)} ></Input>
               <Button type='primary' onClick={() =>  navigate('/blog',  {replace: false,state:{ name}}) }>去往博客页</Button> &nbsp;&nbsp;
               <Button type='success' onClick={() =>  navigate('/message')}>去往留言板</Button>

               {/* <Link to="/blog">博客页</Link>   
               <br/>
               <Link to="/message">留言板</Link> */}
                <Outlet></Outlet>
                {/* <h1>新建一个计时器 {this.state.date}  </h1> */}
                {/* <Routes>
                    <Route    path="/message" component={Message} ></Route>
                </Routes> */}
                
            </div>

        )
    }



  export default connect(mapStateToProps)(Index)