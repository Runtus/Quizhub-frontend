<template>
  <div id="app">
    <topbar class="top-bar"></topbar>
    <router-view />
<!--    旁侧辅助-->

      <div id="sidebar" >
        <transition name="side">
          <sidebar v-show="is_open"></sidebar>
        </transition>
      </div>
    <div @click="change" class="button-change" :class="{'open' : is_open ,'close' : !is_open}"><img src="@/assets/右箭头.svg" alt="图标"> </div>

  </div>


</template>

<script>
  import Topbar from "./components/topbar";
  import Sidebar from "./components/sidebar";
  export default {
    components: {Sidebar, Topbar},
    data(){
      return {
        is_open : false
      }
    },
    methods: {
      change(){
        this.is_open = !this.is_open;
      }
    }
  }
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
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
  display: flex;
  flex-direction: row;
}

.button-change{
  width: 40px;
  height: 40px;
  position: fixed;
  left: 0;
  top: 90%;
  border-radius: 8px;
  border: 1px solid rgb(200,200,200);
  cursor: pointer;
  /*下面是对内部的小正方形的样式*/
  display: flex;
  align-items: center;
  justify-content: center;

}

.button-change:hover{
  /*animation: 2s ease-in-out;*/

}

/*打开sidebar时的样式*/
.open > img{
  transform: rotate(180deg);
}




.button-change > img{
  transition: transform 0.2s ease-in-out;
  width: 1.5em;
}

/*side-bar动画*/
.side-leave,.side-enter-to{
  margin-left: 0;
}
.side-leave-active,.side-enter-active{
  transition: margin-left 0.2s ease-in-out;
}
.side-leave-to,.side-enter{
  margin-left: -100px;
}


</style>
