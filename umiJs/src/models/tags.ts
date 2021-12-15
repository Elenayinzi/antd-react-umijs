import { request } from 'umi';

//请求数据
const getTags = () => {
    return request('/api/tags')
}

export default {
    //调用model的时候，通过命名空间调用，不要和其他的model同名
    namespace: 'tags',
    // 状态，跟react中的state类似，和redux中保存的state一样
    state: {
        tagsList: []
    },   
    //调用服务端接口，获取数据  
    effects: {
        *fetchTags({payload, callback}, {put, call}) {
            //获取tags数据   
            const response = yield call(getTags)
            //调用reducers
            yield put({
                type: 'setTagsList', //类似于redux中的action的type
                payload: response
            })
        }
    },  
    //更新 state    
    reducers: {
        setTagsList(state, action) {
            return {...state, tagsList: action.payload}
        }
    }
}