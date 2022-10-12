import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Index from './TestComponents/Index'
// import Message from './TestComponents/Message';
// import Blog from './TestComponents/Blog';
import HomePage from './containers/homepage/HomePage';
import { Routes, Route } from 'react-router-dom'

import Music from './containers/music/Music';
import Blog from './containers/blog/Blog';
import Message from './containers/message/Message';
import Admin from './containers/admin/Admin';
import Resume from './containers/resume/Resume';

// 管理平台相关组件
import PostArticle from './containers/admin/subpages/PostArticle';
import EditArticle from './containers/admin/subpages/EditArticle';
import EditMusic from './containers/admin/subpages/EditMusic';
import EditMessage from './containers/admin/subpages/EditMessage';
import EditUser from './containers/admin/subpages/EditUser';

//前端相关组件
import ArticleList from './components/front/article/ArticleList';
import ArticleIndex from './components/front/article/ArticleIndex';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route path='/blog/*' element={<Blog />}>
          {/* <Route path="Article" element={ArticleList}></Route>
          <Route path="Article/:_id" element={ArticleIndex}></Route> */}
        </Route>
        <Route path='/message' element={<Message />}></Route>
        <Route path='/music' element={<Music />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
      </Route>
      <Route path='/admin' element={<Admin></Admin>}>
        <Route path="postArticle" element={<PostArticle />} />
        <Route path="editArticle" element={<EditArticle />} />
        <Route path="editMusic" element={<EditMusic />} />
        <Route path="editMessage" element={<EditMessage />} />
        <Route path='editUser' element={<EditUser />}></Route>




      </Route>


    </Routes>

  );
}

export default App;

