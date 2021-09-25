<template>
  <div id="app">
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <template v-for="item in $router.options.routes">
        <el-submenu v-if="item.children" :key="item.path" :index="item.path">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-submenu>
        <el-menu-item v-else :key="item.path" :index="item.path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      activeIndex: "1",
    };
  },
  mounted(){
    console.log(this.$router)
  }
};
</script>

<style>
</style>
