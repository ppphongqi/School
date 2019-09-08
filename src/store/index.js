import Vuex from 'vuex';
import Vue from 'vue';
import { getUserInfo} from "../utils/index";

Vue.use(Vuex);

const store = new Vuex.Store({

    state:{
        userinfo:{},
    },

    mutations:{
        'set_roles':(state,userinfo)=>{
            state.userinfo = userinfo;
            localStorage.setItem('userinfo' , JSON.stringify(userinfo))
        }
    },

    actions:{
        getUser({commit , state}){
            return new Promise((resolve ,reject)=>{
                getUserInfo(Vue.prototype.$axios).then(data=>{
                    if(!data){
                        reject('请重新登录')
                    }
                    try{
                        commit('set_roles',data.data)
                    }catch(err){
                        console.log(err)
                    }
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }

})

export default store;