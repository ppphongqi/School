
const adminRouter = [
    {
        path :'/admin',
        name:'管理系统登录',
        component:resolve => require([],resolve),
        meta:{
            title:'管理系统登录'
        }
    },
    {
        path:'/admin/details',
        name:'教材征订系统',
        component:resolve => require([],resolve),
        meta:{
            title:'教材征订系统',
            //store
            //index
        }
    }
];

export default adminRouter