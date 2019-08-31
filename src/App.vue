<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style lang="scss">
  html , body , #app{
    margin : 0;
    padding : 0;
    height : 100%;
    width : 100%;
    background: #f8f8f8;
  }
</style>
