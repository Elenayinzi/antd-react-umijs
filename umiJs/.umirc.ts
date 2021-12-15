import { defineConfig } from 'umi';

export default defineConfig({
  //mfsu: {},
  webpack5: {},
  hash: true,
  //base: '/admin/',
  // history: { 
  //   type: 'hash'
  // },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/list', redirect: '/user/two' },
    {
      path: '/user', 
      component: '@/layouts/index',
      wrappers: [
        '@/wrappers/auth'
      ],
      routes: [
        { path: '/user/one/:id?', component: '@/pages/index',title:'页面一'},
        { path: '/user/two', component: '@/pages/user'},
        { path: '/user/three', component: '@/pages/user1'},
        { path: '/user/four', component: '@/pages/user2'},
        { component: '@/pages/404'}
      ]
    },
    {
      path: '/dva',
      component: '@/pages/dva'
    },
    { component: '@/pages/404'}
  ],
  fastRefresh: {},
  //mock: false
  //layout: {}
});
