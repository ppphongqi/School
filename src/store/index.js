import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        userInfo:{}
    },
    mutations:{

    },
    actions:{
        getUser({commit,state}){
            // return new Promise((resolve,reject)=>{
            //     getUserInfo(Vue.prototype.$axios).then(data =>{
            //         if(!data){
            //             reject('验证失败')
            //         }
            //         try{
            //
            //         }catch(err){
            //
            //         }
            //     })
            // })
        }
    }
})


export default store
