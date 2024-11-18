---
title: Collapse 折叠面板
description: Collapse 组件的文档
---

# Collapse 折叠面板
通过折叠面板收纳内容区域

## 基础用法
可同时展开多个面板，面板之间不影响
使用 `title` 属性设置标题。
<preview path="../demo/Collapse/Basic.vue"></preview>

## 手风琴效果
每次只能展开一个面板  
通过 `accordion` 属性来设置是否以手风琴模式显示。
<preview path="../demo/Collapse/Accordion.vue"></preview>

## 自定义面板标题
除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。
<preview path="../demo/Collapse/Slot.vue"></preview>

## 查看活动面板
使用 `name` 属性与 `v-model` 可以查看活动面板。
<preview path="../demo/Collapse/VModel.vue"></preview>


## Collapse API
### Collapse 属性
| 属性名                 | 说明           | 类型      | 默认值 |
|-----------------------|----------------| ----------|-------|
| model-value / v-model | 当前活动面板    | `array`   | []    |
| accordion             | 是否手风琴模式  | `boolean` | false |

### Collapse 事件
| 事件名  | 说明             | 类型        |
|--------|------------------| ------------|
| change | 切换当前活动面板   | `Function` |

### Collapse 插槽
| 插槽名   | 说明          |
|---------|---------------|
| default | 自定义默认内容 |


## Collapse Item API
### Collapse 属性
| 属性名     | 说明       | 类型                 | 默认值 |
|-----------|------------| ---------------------|-------|
| name      | 唯一标志符  | `string` / `number`  | ———   |
| title     | 面板标题    | `string`             | ———   |
| disabled  | 是否禁用    | `boolean`            | false |


### Collapse 插槽
| 插槽名          | 说明                 | 类型  |
| ------------- | ----------------------| -----|
| default       | Collapse Item 的内容  | ———  |
| title         | Collapse Item 的标题  | ———  |
