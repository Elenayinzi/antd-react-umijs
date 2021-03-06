# antd-react-umijs项目实战
## 技术栈+开发环境
   1.技术栈：Reactv17.0+git+antd pro v4(umiJs v3.2+antd v4)+restful API

   2.开发环境：node v10以上+npm v6以上+yarn v1以上+git+google浏览器+postman
## API文档说明
    1.地址：https://www.showdoc.com.cn/1207745568269674?page_id=6094279351627422

    2.请求地址：https://api.shop.eduwork.cn/
## UmiJs知识学习p5-p15
    1.插件化的企业级前端应用框架

    2.初始化项目：yarn create @umijs/umi-app; yarn install; yarn start; yarn build;

    3.本地服务验证：sudo yarn global add serve; serve --version; serve ./dist

    4.目录结构

    5.常用配置
        a. hash: true; 用于增量发布和避免浏览器缓存
        b. base: '/admin/'; 设置路由前缀，通常用于部署到非根目录
        c. publicPath: '/foo/'; 配置 webpack 的 publicPath
        d. outputPath: 'build'; 打包输出目录
        e. title: 'UmiJs'; 网页标题
        f. history: { type: 'hash'}; 会自动给地址加上#
        g. targets: {ie: 11}; 浏览器兼容性配置
        h. proxy: {}; 解决跨域问题
        i. theme: {}; 修改antd默认变量的颜色
        j. routes: []; 路由配置
        k.mfsu:{};开启mfsu可以大幅减少启动项目和热更新所需的时间
  
    6.路由配置
       a.单页面应用：页面地址的跳转都是在浏览器端完成的，不会重新请求服务端获取html，仅刷新局部资源，公共资源js,css仅需加载一次,单页面应用从头到尾它的html地址都是不变的，在单页面应用中，通常是由一个外部框架和一个一个组件组成的，界面之间的切换其实就是组件的移除和新组建的添加。
       b.多页面跳转刷新所有资源，每个公共资源(js、css等)需选择性重新加载,是从一个完整的页面跳转到另一个完整的页面
       c.路由配置的一些属性：path;component;routes;redirect;wrappers;title;
       e.页面跳转；hash路由；link组件；路由组件参数可通过props获取；
       f.传递参数给子路由
       g.配置式路由；约定式路由；
    
    7.页面跳转：声明式跳转Link,Navlink(专门用于导航的跳转);命令式跳转history;

    8.html模板：修改默认模板；新建 src/pages/document.ejs

    9.Mock数据: 前端模拟数据ts文件;引入Mock.js，提升mock数据能力;yarn add mockjs;npm i --save-dev @types/mockjs;MOCK=none umi dev配置环境变量临时关闭mock功能;"start:nomock": "MOCK=none umi dev";exclude属性可以配置指定关闭页面；

    10.Dva整合：dvaJS,基于redux的数据流方案，轻量级应用框架,更好的应用redux，安装：yarn add @umijs/preset-react中包含了@umijs/plugin-dva

    11.运行时配置: 跑在浏览器端，约定写在 src/app.tsx 为运行时配置，在运行时才起作用

    12.Umi UI: 安装命令：yarn add @umijs/preset-ui -D

    13.
## AntdPro框架学习p16-p21
## todoList实战p22-p27
## 项目实战p28-p60
## 项目发布p61-p63