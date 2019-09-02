<template>
    <div class="index">

        <div class="register">

            <div class="title">学生注册</div>

            <div class="form-box">
                <el-form :model="userInfo"
                         status-icon
                         :rules="rules"
                         ref="userInfo"
                         class="user-info">

                    <el-form-item
                            label="学号"
                            prop="username"
                            class="username form-items"
                            hide-required-asterisk="true"
                            >
                        <el-input v-model.number="userInfo.username" class="username form-input"></el-input>
                    </el-form-item>

                    <el-form-item label="  密码" prop="pass" class="pass form-items">
                        <el-input type="password"
                                  v-model="userInfo.pass"
                                  class="password form-input"
                                  autocomplete="off">
                        </el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="checkPass" class="check form-items">
                        <el-input type="password"
                                  autocomplete="off"
                                  class="checkPass form-input"
                                  v-model="userInfo.checkPass">
                        </el-input>
                    </el-form-item>



                </el-form>
            </div>




<!--            <div class="name item-box">-->

<!--            </div>-->

<!--            <div class="grade item-box">-->

<!--            </div>-->

<!--            <div class="major item-box">-->

<!--            </div>-->

<!--            <div class="class item-box">-->

<!--            </div>-->

<!--            <div class="pass item-box">-->

<!--            </div>-->

<!--            <div class="checkPass item-box">-->

<!--            </div>-->

<!--            <div class="register-btn-box">-->


<!--            </div>-->

        </div>

    </div>
</template>

<script>
    export default {
            data(){
                let checkUserName = (rule , value , callback)=>{
                   if(!value){
                       return callback(new Error('学号不能为空'));
                   }
                   setTimeout(()=>{
                       if(!Number.isInteger(value)){
                           callback(new Error('请输入正确学号'));
                       }else{
                           if([...(value.toString())].length !== 8 ){
                               callback(new Error('请输入正确学号位数'))
                           }else{
                               callback()
                           }
                       }
                   },1000);
                };
                let validatePass = (rule , value , callback) =>{
                    if(value === ''){
                        callback(new Error('请输入密码'));
                    }else{
                        if(this.userInfo.checkPass !== ''){
                            this.$refs.userInfo.validateField('checkPass');
                        }
                        callback()
                    }
                } ;

                let validatePass2 = (rule , value , callback)=>{
                    if(value === ''){
                        callback(new Error('请再次输入密码'));
                    }else if(value !== this.userInfo.pass){
                        callback(new Error('两次输入的密码不一致'))
                    }else{
                        callback();
                    }
                }

                return {
                    userInfo:{
                        username:'',
                        name:'',
                        grade:'',
                        major:'',
                        class:'',
                        pass:'',
                        checkPass:'',
                    },
                    rules:{
                            username : [
                                {
                                    validator: checkUserName ,trigger:'blur',required: true
                                }
                            ],
                            pass : [
                                {
                                    validator : validatePass , trigger :'blur',required: true
                                }
                            ],
                            checkPass : [
                                {
                                    validator : validatePass2 , trigger:'blur',required: true
                                }
                            ]

                    }
                }
            },

    }
</script>

<style lang="scss" scoped>
    .index{
        margin:1rem .3rem .3rem .3rem;
        padding:0 .5rem .5rem 0;
        border: .1rem solid 	#D3D3D3;
        background: #F5F5F5;
        border-radius: .2em;
        box-shadow: 0 .05em .25em 	#D3D3D3;
        height:35rem;
        color:black;

        position:relative;
        display:flex;
        justify-content: center;
        overflow: auto;
        .register{
            width:90%;
            display:flex;
            position:absolute;
            align-items:center;
            flex-direction: column;
            .title{
                margin-top:.8rem;
                font-family: "Microsoft JhengHei";
                font-size:2rem;
                font-weight: 600;
                letter-spacing: 0.1em;
                margin-bottom: 10px;
            }
            .form-box{
                margin-top: 1rem;
                display: flex;
                flex-wrap: nowrap;
                font-weight: 700;
                .user-info{
                    width:100%;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: center;

                    .form-items{
                        display: flex;
                        flex-wrap: nowrap;
                        padding:0 1rem 0 0 ;
                        justify-content: flex-end;
                        margin-top: 1rem;
                        position: relative;

                            .form-input{

                            }


                    }
                }
            }

        }

    }

</style>