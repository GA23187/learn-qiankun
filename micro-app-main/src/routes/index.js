import Home from '@/pages/home/index.vue'
import vue from '@/pages/vue/index.vue'
import test from '@/pages/vue/test.vue'
import child from '@/pages/vue/child.vue'

const routes = [
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: "/",
    name: "home",
    main: '1',
    meta:{
      index: 1
    },
    component: Home,
  },
  {
    path: "/vue",
    name: "", // 无name /vue会加载子应用
    meta:{
      index: 2
    },
    component: vue,
    children: [
      {
        path: "/vue/test",
        name: "test",
        meta:{
          index: 2-1
        },
        component: test,
        children: [
          {
            path: "/vue/test/child",
            name: "child",
            meta:{
              index: 2-1-1
            },
            component: child,
          }
        ]
      }
    ]
  }
]

export default routes