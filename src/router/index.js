import Vue from 'vue';
import Router from 'vue-router';
// import adminRouter from "./module/admin";
// import userRouter from "./module/user";



Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:resolve => require(['../views/out.vue'],resolve),
            children:[
                {
                    path:'/',
                    name:'学生登录',
                    component: resolve => require(['../views/index.vue'],resolve),
                    meta:{
                        title:'学生登录' , isStudent: true
                    }
                },
                {
                    path:'/register',
                    name:'注册',
                    component:resolve=>require(['../views/register.vue'],resolve),
                    meta:{
                        title:'注册' , isStudent:true
                    }
                },
                {
                    path:'/user',
                    name:'学生教材征订系统',
                    component: resolve => require(['../views/userCenter'],resolve),
                    meta:{
                        title:'学生中心',
                        isStudent:true,
                        requireLogin:true
                    }
                }
            ]
        },

    ]
        // .concat(adminRouter)
});

// router.beforeEach((to,from,next)=>{
//     document.body.scrollTop = 0 ;
//     document.documentElement.scrollTop=0;
//     if(to.matched.some(record => record.meta.isStudent)){
//         if(to.matched.some(record => record.meta.requireLogin)){
//             next()
//         }
//     }else if(to.matched.some(record => record.meta.isTeacher)){
//
//     }
// })



export default router;