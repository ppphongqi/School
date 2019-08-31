import Vue from 'vue';
import Router from 'vue-router';
import adminRouter from "./module/admin";
import userRouter from "./module/user";



Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'登录',
            component:resolve => require(['../views/out.vue'],resolve),
            meta:{
                title:'登录'
            }
        },
        {
            path:'/register',
            name:'注册',
            component: resolve => require([],resolve),
            meta:{
                title:'注册'
            }
        },
        userRouter

    ].concat(adminRouter)
})



export default router;