<template>
  <div id="app">
    <topbar class="top-bar"></topbar>
    <router-view />
<!--    旁侧辅助-->
    <div id="sidebar">
       <sidebar></sidebar>
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



/* sidebar样式*/
#sidebar{
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

</style>
<script>
  import Topbar from "./components/topbar";
  import Sidebar from "./components/sidebar";
  export default {
    components: {Sidebar, Topbar}
  }
</script>