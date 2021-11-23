import { defineConfig } from 'umi';

export default defineConfig({
  mfsu: {},
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
        { path: '/user/one', component: '@/pages/index'},
        { path: '/user/two', component: '@/pages/user'}
      ]
    }
  ],
  fastRefresh: {},
  //layout: {}
});
