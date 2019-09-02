<template>
    <div class="index">
        <div class="login">

            <div class="title">学生登录</div>

            <div class="username item-box">
                <el-input class="item-input"
                          placeHolder="请输入用户名"
                          v-model="userInfo.username"
                          @keyup.enter.native="goLogin"
                >
                </el-input>
                <span class="el-icon-user input-icon"></span>
            </div>

            <div class="password item-box">
                <el-input class="item-input"
                          placeholder="请输入密码"
                          v-model="userInfo.password"
                          type="password"
                          @keyup.enter.native="goLogin"
                          show-password
                          >
                </el-input>
                <span class="el-icon-lock input-icon"></span>
            </div>

<!--            <div class="verify">-->
<!--                验证码-->
<!--            </div>-->

            <div class="tip" @click="goRegister">没有账号？<span>注册</span></div>

            <div class="login-btn-box">

                <el-button
                        @click="goLogin"
                        class="login-btn" type="primary">
                    登录
                </el-button>

            </div>


        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                userInfo:{
                    username:'',
                    password:'',
                }
            }
        },
        methods:{
            goLogin(){
                this.$router.push('/user')
            },
            goRegister(){
                this.$router.push('/register')
            }
        }
    }
</script>

<style lang="scss">
.login{
    .item-input{
        input{
            box-sizing:border-box;
            text-indent:1.5rem;
        }
    }
}
</style>

<style lang="scss" scoped>
    .index{
        margin: 1rem .3rem .3rem .3rem;
        padding:0 .5rem .5rem 0;
        border: .1rem solid 	#D3D3D3;
        border-radius: .2em;
        background: #F5F5F5;
        box-shadow: 0 .05em .25em 	#D3D3D3;
        /*width:100%;*/
        height:20rem;
        color:black;
        position:relative;
        overflow: auto;
        display: flex;
        justify-content:center;

        .login{
            position:absolute;
            display: flex;
            align-items: center;
            flex-direction: column;
            .title{
                margin-top: .8rem;
                font-family: "Microsoft JhengHei";
                font-size:2rem;
                font-weight: 600;
                letter-spacing: 0.1em;
                margin-bottom: 10px;
            }
            .item-box{
                margin-top: 1.5rem;
                width: 100%;
                position: relative;
                .input-icon{
                    position: absolute;
                    left: 0;
                    top: 50%;
                    color: #000;
                    transform: translateY(-50%);
                    left: 10px;
                }
            }

            .tip{
                padding: .8rem 0;
                color: black;
                span{
                    color: #409EFF;
                    cursor: pointer;
                    &:hover{
                        color: #409EFF;
                    }
                }
            }
            .login-btn-box{
                width: 100%;
                .login-btn{
                    width: 100%;
                    font-size: 1.5rem;
                    font-weight: 500;
                    letter-spacing: 0.2em;
                }
            }

        }
    }
</style>