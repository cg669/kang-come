const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/overseas',
        meta: {
            title: '海外购'
        },
        component: (resolve) => require(['./views/overseas.vue'], resolve)
    },
    {
        path: '/timebuy',
        meta: {
            title: '限时购'
        },
        component: (resolve) => require(['./views/timebuy.vue'], resolve)
    }
]
export default routers;