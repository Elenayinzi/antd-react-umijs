import { defineConfig } from 'umi';

import routes from './routes';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

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
  title: defaultSettings.title,
  theme: {
      '@primary-color': defaultSettings.primaryColor
  },
  routes,
  fastRefresh: {},
  targets: {
    ie: 11
  },
  proxy: proxy['dev'],
  dva: {
    immer: true,
    hmr: false
  },
  //mock: false
  //layout: {}
});
