export default {
    dev: {
        '/api': {
            'tartget': 'http://jsonplaceholder.typicode.com/',
            'changeOrigin': true,
            'pathRewrite': { '^/api' : ''}
        }
    },
    test: {

    }
}