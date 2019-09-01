
const adminRouter = [
    {
        path :'/admin',
        name:'管理系统登录',
        component:resolve => require([],resolve),
        children:[
            {
                path:'/detail',
                name:'教材征订系统',
                component: resolve => require([],resolve),
                meta:{title:'教材征订系统', isTeacher:true , requireLogin:true }
            },
            {
                path:'/register',
                name:'教师注册',
                component:resolve => require([],resolve),
                meta:{title:'教师注册' , isTeacher: true}
            }
        ]
    },

];

export default adminRouter