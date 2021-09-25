# 微前端Qiankun学习

## 介绍

> 微前端是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将单页面前端应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立开发、独立部署。同时，它们也可以在共享组件的同时进行并行开发——这些组件可以通过 NPM 或者 Git Tag、Git Submodule 来管理。

## 一些小总结

- 什么项目需要使用微前端
  - 一个项目中存在需要使用多种技术（vue react等），项目中有多个团队在维护或开发不同的模块，存在沟通成本，核心在独立。
  - 个人感觉更多的是为了把一个大型项目拆成多个独立的小项目，小项目本身就是可以独立运行的，不会受到其他项目的影响，如果子项目之间需要频繁的通信那就得不偿失了。
  - 参考：[你可能不需要微前端](https://zhuanlan.zhihu.com/p/391248835) [你可能不需要微前端](https://zhuanlan.zhihu.com/p/392152863)
- 微前端子应用的划分
  - 个人感觉 主应用 应该是一些公用的功能，及登录 鉴权 整体布局等 子应用就是具体的业务逻辑。
  - 按业务划分出对应的子应用，而不是通过功能模块划分子应用。这么做的原因有两个：
  -  在微前端架构中，子应用并不是一个模块，而是一个独立的应用，我们将子应用按业务划分可以拥有更好的可维护性和解耦性。
  - 子应用应该具备独立运行的能力，应用间频繁的通信会增加应用的复杂度和耦合度。
  - 综上所述，我们应该从业务的角度出发划分各个子应用，尽可能减少应用间的通信，从而简化整个应用，使得我们的微前端架构可以更加灵活可控。
- 微前端的公用模块
- 微前端的部署



## 参考教程

- [基于 qiankun 的微前端最佳实践（万字长文） - 从 0 到 1 篇](https://github.com/a1029563229/Blogs/tree/master/BestPractices/qiankun/Start.md)
- [基于 qiankun 的微前端最佳实践（图文并茂） - 应用部署篇](https://github.com/a1029563229/Blogs/tree/master/BestPractices/qiankun/Deploy.md)
- [基于 qiankun 的微前端最佳实践（图文并茂） - 应用间通信篇](https://github.com/a1029563229/Blogs/tree/master/BestPractices/qiankun/Communication.md)
- [万字长文+图文并茂+全面解析微前端框架 qiankun 源码 - qiankun 篇](https://github.com/a1029563229/Blogs/tree/master/Source-Code/qiankun/1.md)

- [Vue+微前端(QianKun)落地实施和最后部署上线总结](https://juejin.cn/post/6973156414210441247#heading-5)
