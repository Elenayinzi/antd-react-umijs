import mockjs from 'mockjs';
export default {
    'GET /api/user':{
        id: 1,
        name: 'Tom'
    },
    'POST /api/person':{
        id: 2,
        name: 'Bob'
    },
    'GET /api/tags':mockjs.mock({
        'list|100': [{ name:'@city', 'value|1-100':50,'type|0-2':1 }],
    })
}