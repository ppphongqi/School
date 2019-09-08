export const getUserInfo = ($axios) =>{
    return new Promise((resolve,reject)=>{
        let token = localStorage.getItem('token')
        if(token){
            $axios({
                url:'',
                method:'',
                header:{token : token},
                params:'',
            }).then(data=>{
                if(data && data.data.code == 200){
                    resolve(data.data)
                }else{
                    resolve(null)
                }
            })
        }else{
            reject(null)
        }
    })
}