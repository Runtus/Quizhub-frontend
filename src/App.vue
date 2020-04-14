<template>
  <div id="app">
    <topbar class="top-bar"></topbar>
    <router-view />
<!--    旁侧辅助-->
    <div class="sidebar">

    </div>
  </div>


</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.top-bar{
  margin-bottom: 30px;
}

</style>
<script>
  import Topbar from "./components/topbar";
  export default {
    components: {Topbar}
  }
</script>