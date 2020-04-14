import Vue from 'vue'
import VueRouter from 'vue-router'


// @已经在vuecli内部的webpack定义好了，不需要我们再次定义
const homepage = () => import("@/views/home-page");
const rep = () => import("@/views/home-page-views/rep");
const home_page_more_inf = () => import("@/views/home-page-views/home-page-more-inf");

Vue.use(VueRouter);

  const routes = [
    {
      path : "/home-page",
      name : "homePage",
      component : homepage,
      children : [
        {
          path : "rep",
          component : rep
        },
        {
          path : "main",
          component : home_page_more_inf
        }
      ]
    },
    {
      path: "*",
      redirect : "/home-page/main"
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
