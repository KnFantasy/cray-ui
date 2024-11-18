---
title: Tooltip 文字提示
description: Tooltip 组件的文档
---

# Tooltip 文字提示
常用于展示鼠标 hover 时的提示信息。

## 基础用法
使用 `content` 属性来决定 hover 时的提示信息。
<preview path="../demo/Tooltip/Basic.vue"></preview>

## 不同位置
提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement` 属性值为：`[orientation]-[alignment]` ；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，`null`。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
<preview path="../demo/Tooltip/Placement.vue"></preview>

## 触发方式
使用 `trigger` 属性，`hover | click`，来控制触发方式，默认为 `hover`
<preview path="../demo/Tooltip/Trigger.vue"></preview>

## 更多内容的文字提示
展示多行文本或者是设置文本内容的格式  
用具名 slot `content`，替代 `tooltip` 中的 `content` 属性。
<preview path="../demo/Tooltip/Slot.vue"></preview>

## 手动模式
通过组件实例上的 `show` 和 `hide` 方法控制组件
将 `manual` 属性设置为 true。
<preview path="../demo/Tooltip/Manual.vue"></preview>

## Tooltip API

### Tooltip 属性

| 名称                      | Description                                       | Type                                                                                                                                                                 | Default       |
| ------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| content                   | 显示的内容，也可被 `slot#content` 覆盖              | `string`                                                                                                                                                             | ''            |
| placement                 | Tooltip 组件出现的位置                             | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom        |
| transition                | 动画名称                                          | `string`                                                                                                                                                             | ———           |
| popper-options            | [popper.js](https://popper.js.org/docs/v2/) 参数  | `object` refer to [popper.js](https://popper.js.org/docs/v2/) doc                                                                                                    | {}            |
| trigger                   | 如何触发 Tooltip                                  | `'hover' \| 'click'`                                                                                                                                                 | hover         |
| manual                    | 是否开启手动模式                                   | `boolean`                                                                                                                                                            | false         |
| open-delay                | 打开文本提示的延迟                                 | `number`                                                                                                                                                             | 0             |
| close-delay               | 关闭文本提示的延迟                                 | `number`                                                                                                                                                             | 0             |


### Tooltip 插槽

| 插槽名   | 说明                        |
| ------- | --------------------------- |
| default | Tooltip 触发 & 引用的元素    |
| content | 自定义内容                   |

### Tooltip Exposes

| 方法名     | 说明             | 类型                                   |
| --------- | ---------------- | -------------------------------------- |
| show      | 提供 show 方法    | `(event?: Event \| undefined) => void` |
| hide      | 提供 hide 方法    | `(event?: Event \| undefined) => void` |