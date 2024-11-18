# 项目介绍

## Cray UI
Cray UI 是一个基于 Vue 3，TypeScript，模仿Element Plus的一个UI组件库  
技术栈：Vue 3 + Typescript + Vite + Vitest + Vitepress + Postcss  

**项目内容：**
1. 分析 Element-Plus 源码，完成组件库开发的全流程
2. 复现 Message，Select，Form 等组件中部分复杂逻辑
3. 编写测试用例，使用Vitest，Vue-test-utils2完成单元测试
4. 完成组件库打包、发布以及文档生成。

## 安装

```bash
npm i cray-ui --save
```

## 快速开始
### 全局导入
在 main.js 文件中导入组件库和样式
```js
import { createApp } from 'vue'
import App from './App.vue'

// 引入所有组件
import CrayUI from 'cray-ui'
// 引入样式
import 'cray-ui/dist/es/style.css'

// 全局使用
createApp(App).use(CrayUI).mount('#app')
```

在任意 Vue 组件中直接使用
```Vue
<template>
  <cray-button>This is a CrayButton</cray-button>
</template>
```

### 按需导入
在 main.js 文件中导入样式
```js
import 'cray-ui/dist/es/style.css'
```

在Vue组件中导入所需CrayUI组件
```Vue
<script>
import { Button } from 'cray-ui'
export default {
  components: { Button },
}
</script>

<template>
  <Button>This is a CrayButton</Button>
</template>
```
