<template>
    <div class="header">
        <div class="logo"></div>
        <div class="name">
            <div class="school"></div>
            <div class="system"></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.header{
    margin : 0 0 .3rem 0;
    padding: .2rem 0 .2rem .2rem;
    width:99%;
    position:fixed;
    left:0 ;
    top:0;
    z-index:200;
    color:black;
    background:#CD3333;
    display: flex;
    flex-wrap:nowrap;
    border-radius: .4em;
    border: .05rem solid #CD3333;
    box-shadow: 0 .05em .25em gray;
    /*justify-content:center;*/
    .logo{
        width:15%;
        height:5rem;
        background:url('../assets/images/logo.png') no-repeat  center;
    }
    .name{
        width:85%;
        display:flex;
        align-items: center;
        flex-direction:column;
        padding:.2rem;
        .school{
            width:100%;
            height:60%;
            background: url('../assets/images/云师大.png') no-repeat ;
        }
        .system{
            width:100%;
            height:40%;
            background:url('../assets/images/system.png') no-repeat center;
        }
    }
}
</style>