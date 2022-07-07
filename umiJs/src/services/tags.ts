import { request } from 'umi';

//请求数据
export const getTags = () => {
    return request('/api/tags')
}