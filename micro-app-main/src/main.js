import Vue from 'vue'
import VueRouter from 'vue-router' // 引入
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import routes from './routes'
import './style/common.css'
import startQiankun from "./micro"; // 引入qiankun启动方法

startQiankun()
Vue.config.productionTip = false

Vue.use(VueRouter) // 注册
Vue.use(element) // 注册

// 实例化
const router = new VueRouter({
  mode: "history",
  routes,
});

// 创建和挂载根实例 注入路由
new Vue({
  router,
  render: h => h(App),
}).$mount('#main-app')
