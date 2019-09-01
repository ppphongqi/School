<template>
    <div class="out">
        <v-header></v-header>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import vHeader from '../components/header';
    export default {
        components:{
            'v-header':vHeader,
        }
    }
</script>


<style lang="scss" scoped>
    .container{
        width: 100%;

        padding-top: 5.5rem;
    }
</style>