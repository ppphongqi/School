<template>
    <div class="studentInfo">
        <div class="headerCard">
            <el-card class="header box-card">


                <div class="name">
                   <div class="Stu-num"> <span>学号:{{ studentNumber }}</span></div>
                   <div class="stu-name"> <span>姓名:{{ studentName }}</span></div>
                </div>
                <div class="grade">
                    <div class="stu-gra"><span>年级:{{ grade }}</span></div>
                    <div class="stu-maj"><span>专业:{{ major }}</span></div>
                    <div class="stu-cla"><span>班级:{{ stuClass }}</span></div>
                </div>


            </el-card>
        </div>

        <div class="contentCard">

        </div>

        <div class="footerCard">
            <el-card class="foot-card">
                <div class="total">
                    <div class="num">本学期购书合计:</div>
                    <el-button type="primary">确认提交</el-button>
                </div>
                <div class="buttons">
                    <div class="balance">预存余额:</div>
                    <el-button  type="info">历史购书查询</el-button>
                </div>
            </el-card>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                studentNumber:'16110032',
                studentName:'浦同宇',
                grade:'2016',
                major:'计算机科学',
                stuClass:'1班',

            }
        }
    }
</script>

<style>
    .el-card__body{
        padding:14px;
        width:95%;
    }
</style>

<style lang="scss" scoped>
.studentInfo{
    display:flex;
    justify-content: center;
    overflow: hidden;
    .headerCard{
        top:5.2rem;
        width:100%;

        position: fixed;
        border: .05rem solid #D3D3D3;
        border-radius: .6em;
        box-shadow: 0 .05em .25em 	#D3D3D3;

        .box-card{
            font-size:.9rem;
            font-weight:600;
            display:flex;
            flex-direction:column;

            .name{
                display:flex;
                flex-direction: row ;
                flex-wrap: nowrap;
                margin-bottom: .4rem;
                .Stu-num{
                    width:50%;
                }
                .Stu-name{
                    width:50%;
                }
            }
            .grade{
                display:flex;
                flex-direction: row ;
                flex-wrap: nowrap;
                    .stu-gra{
                        width:30%;
                    }
                    .stu-maj{
                        width:50%;
                    }
                    .stu-cla{
                        width:20%;
                    }
            }
        }
    }
    .contentCard{
        height:1000px;
        width:80%;
        margin-top: 4.6rem;
        margin-bottom:6.6rem;
        border: .1rem solid 	#D3D3D3;
        border-radius: .2em;
        background: blue;
        box-shadow: 0 .05em .25em 	#D3D3D3;
    }
    .footerCard{
        position: fixed;
        bottom:0;
        height:6.5rem;
        width:100%;
        background:black;
        border: .05rem solid #D3D3D3;
        border-radius: .6em;
        box-shadow: 0 .05em .25em 	#D3D3D3;

        .foot-card{
            display:flex;
            flex-direction: row ;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            .total{
                display:flex;
                width:100%;
                padding:.1rem 0 0 0 ;
                .num{
                    width:80%;
                }
            }
            .buttons{
                margin-top:.1rem;
                display:flex;
                .balance{
                    width:70%;
                }
            }

        }
    }


}
</style>
