import Home from "@/pages/home/index.vue";
import List from "@/pages/list/index.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home", 
  //   meta: {
  //     title: "vue首页",
  //   },
  //   component: Home,
  // },
  {
    path: "/", // 父应用访问路由由app.js中定义的微应用activeRule + 子应用的path
    name: "vue",
    meta: {
      title: "vue",
    },
    component: Home
  },
  {
    path: "/list",
    name: "list",
    meta: {
      title: 'vue列表'
    },
    component: List,
  },
];

export default routes;
