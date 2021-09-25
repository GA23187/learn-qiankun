<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        router
      >
        <template v-for="item in menus">
          <!-- <el-submenu v-if="item.children" :key="item" :index="item.path">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{ item.name }}</span>
                </template>
              </el-submenu> -->
          <el-menu-item :key="item.path" :index="item.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu></el-aside
    >
    <el-container>
      <el-main>
        <!-- 通过路由name属性是否存在决定渲染父子应用 -->
        <router-view v-show="$route.name"></router-view>
        <section v-show="!$route.name" id="frame"></section>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import routes from "./routes/index.js";
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      menus: [
        {
          key: "Home",
          title: "主页",
          path: "/",
        },
        {
          key: "VueMicroApp",
          title: "Vue 主页",
          path: "/vue",
        },
        {
          key: "VueMicroAppList",
          title: "Vue 列表页",
          path: "/vue/list",
        },
      ],
    };
  },
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    },
  },
  mounted() {
    console.log(this.$route, routes);
  },
};
</script>

<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
}
.el-container {
  height: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
