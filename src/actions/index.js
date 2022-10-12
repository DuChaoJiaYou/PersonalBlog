
//增长action
export const increase  = ()  => {
    return {
        type:'INCREASE'
    }
}

//降低action
/**
 * 
 * 同步action:返回的是一个对象
 * 异步action:返回的是一个函数 ， 需要使用中间件来支持
 */
export const reduce  = () => {
    return {
        type:'REDUCE'
    }
} 

// 提交文章

export const postArticle = (v) =>{
     return dispatch => {
        console.log('拿到了数据',v);
     }
}