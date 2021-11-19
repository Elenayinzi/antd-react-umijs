import { defineConfig } from 'umi';

export default defineConfig({
  mfsu: {},
  webpack5: {},
  hash: true,
  base: '/admin/',
  // history: { 
  //   type: 'hash'
  // },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  layout: {}
});
