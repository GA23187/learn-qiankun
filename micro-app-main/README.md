# learn-qiankun

## el-menu的菜单动态生成
## eslint配置
- .eslintignore文件
- package.json文件
  ```
    "eslintConfig": {
     "root": true,////此项是用来告诉eslint找当前配置文件不能往父级查找
     "env": {
       "node": true//此项指定环境的全局变量，下面的配置指定为node环境
     },
     "extends": [// 此项是用来配置vue.js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
       "plugin:vue/essential",
       "@vue/standard"
     ],
     "rules": {//规则配置写在这里
       "indent": [1, 4]
     },
     "parserOptions": {
       "parser": "babel-eslint"//此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
     }
   }
  ```
- vue.config文件
  ```
      devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        lintOnSave: false
    }
    ```
 - 参考
  https://www.jianshu.com/p/bfc7e7329cff

## 一个坑
 - 在以vue为主项目搭建时，注意移除App.vue文件模板里自动生成的div id=app，不然在子应用vue默认以app节点挂载时会导致把主应用dom给直接都替换了。
  ```
  Uncaught Error: application 'VueMicroApp' died in …ith #frame not existed after VueMicroApp mounted!
  Uncaught Error: application 'VueMicroApp' died in status NOT_MOUNTED: [qiankun]: Target container with #frame not existed after VueMicroApp mounted!
  ```
