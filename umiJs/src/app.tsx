let extraRoutes;

export function patchRoutes({ routes }) {
    routes.unshift({
      path: '/foo',
      component: require('@/pages/user1').default,
    });
    // extraRoutes.map( item => {
    //     routes.unshift({
    //         path: item.path,
    //         component: require(`@/pages${item.component}`).default,
    //     })
    // })

}

export function render(oldRender) {
    //模拟从服务端请求获得的路由
    extraRoutes = [
        {path: '/server', component: '/user2'}
    ]
    oldRender();
}