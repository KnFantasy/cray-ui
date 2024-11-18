---
title: Dropdown 下拉菜单
description: Dropdown 组件的文档
---

Toggleable menu for displaying lists of links and actions.

## 基础用法
悬停在下拉菜单上以展开更多操作。
通过组件默认 `slot` 来设置下拉触发的元素。  
通过组件 `menu-options` 属性来设置下拉菜单。  
<preview path="../demo/Dropdown/Basic.vue" title="典型表单" description="Form 典型表单"></preview>

## 位置
支持 9 种位置。
<preview path="../demo/Dropdown/Placement.vue" title="典型表单" description="Form 典型表单"></preview>

## 触发方式
可以配置点击激活或者悬停激活。
<preview path="../demo/Dropdown/Trigger.vue" title="典型表单" description="Form 典型表单"></preview>

## 菜单隐藏方式
可以通过 hide-after-click 属性来配置。  
下拉菜单默认在点击菜单项后会被隐藏，将 `hide-on-click` 属性设置为 false 可以关闭此功能。
<preview path="../demo/Dropdown/Hide.vue" title="典型表单" description="Form 典型表单"></preview>


## 事件
点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。
<preview path="../demo/Dropdown/Events.vue" title="典型表单" description="Form 典型表单"></preview>


## 下拉方法
通过组件实例上的 `show` 和 `hide` 方法控制组件
将 `manual` 属性设置为 true。
<preview path="../demo/Dropdown/Manual.vue"></preview>

## Dropdown API

### Dropdown 属性

| 属性名                | 说明                                              | 类型                                                                                | 默认值        |
| -------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------- |
| placement            | 菜单弹出位置                                       | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end'`   | bottom        |
| trigger              | 如何触发 Dropdown                                 | `'hover' \| 'click' \| 'focus' \| 'contextmenu'`                                    | hover         |
| popper-options       | [popper.js](https://popper.js.org/docs/v2/) 参数  | `object` 请参考 [popper.js](https://popper.js.org/docs/v2/) 文档                     | {}            |
| transition           | 动画名称                                          | `string`                                                                            | ———           |
| manual               | 是否开启手动模式                                   | `boolean`                                                                           | false         |
| open-delay           | 打开文本提示的延迟                                 | `number`                                                                            | 0             |
| close-delay          | 关闭文本提示的延迟                                 | `number`                                                                            | 0             |
| hide-after-click     | 是否在点击菜单项后隐藏菜单                          | `boolean`                                                                           | true          |

### Dropdown 插槽

| 插槽名    | 说明                |
| -------- | ------------------- |
| default  | 下拉菜单的标题内容    |

### Dropdown 事件

| 事件名          | 说明                                                                     | 类型                       |
| -------------- | ------------------------------------------------------------------------ | -------------------------- |
| select         | 当下拉项被点击时触发，参数是从下拉菜单项的对象                               | `(...args: any[]) => void` |
| visible-change | 当下拉菜单出现/消失时触发器, 当它出现时, 参数将是 `true`, 否则将是 `false`    | `(val: boolean) => void`   |

### Dropdown Exposes

| 方法名       | 说明                    | 类型                    |
| ----------- | ----------------------- | ----------------------- |
| show      | 提供 show 方法    | `(event?: Event \| undefined) => void` |
| hide      | 提供 hide 方法    | `(event?: Event \| undefined) => void` |
