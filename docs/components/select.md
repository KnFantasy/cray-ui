---
title: Select 选择器
description: Select 组件的文档
---

# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法
适用广泛的基础单选 `v-model` 的值为当前被选中的 `option` 的 `value` 属性值。
<preview path="../demo/Select/Basic.vue" title="基础选择器" description="Select 基础选择器"></preview>

## 有禁用选项
在 `option` 中，设定 `disabled` 值为 `true`，即可禁用该选项
<preview path="../demo/Select/Disabled.vue" title="基础选择器" description="Select 基础选择器"></preview>


## 可清空单选
您可以使用清除图标来清除选择。
设置 `clearable` 属性，则可将选择器清空。
<preview path="../demo/Select/Clear.vue" title="可清空单选" description="Select 可清空单选"></preview>

## 自定义模板
你可以自定义如何来渲染每一个选项。  
使用 `renderLabel` 属性，它接受一个回调函数，返回 vNode 类型。
<preview path="../demo/Select/CustomRender.vue" title="自定义模板" description="Select 自定义模板"></preview>

## 筛选选项
可以利用筛选功能快速查找选项。
添加 `filterable` 属性即可启用搜索功能。 默认情况下，Select 会找出所有 `label` 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。 `filter-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。
<preview path="../demo/Select/Filter.vue" title="筛选选项" description="Select 筛选选项"></preview>

## 远程搜索
输入关键字以从远程服务器中查找数据。
服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将 `filterable` 和 `remote` 设置为 `true`，同时传入一个 `remote-method`。 remote-method 为一个返回 `Promise` 的Function，类型为 `(value: string) => Promise<SelectOption[]>` 。
<preview path="../demo/Select/Remote.vue" title="筛选选项" description="Select 筛选选项"></preview>


## Select API

### Select 属性

| 属性名                   | 说明                      | 类型                                                  | 默认值 |
| ----------------------- | ------------------------- | ----------------------------------------------------- | ------- |
| model-value / v-model   | 选中项绑定值               | `string` / `number` / `boolean` / `object` / `array`  | ———      |
| options                 | 下拉框选项                 | `boolean`                                             | false    |
| clearable               | 是否可以清空选项            | `boolean`                                            | false    |
| placeholder             | 占位符                     | `string`                                             | ———      |
| filterable              | Select 组件是否可筛选       | `boolean`                                            | false    |
| filter-method           | 自定义筛选方法              | `() => void`                                         | ———      |
| remote                  | 选项是否从服务器远程加载     | `boolean`                                            | false    |
| remote-method           | 自定义远程搜索方法          | `() => void`                                         | ———      |

### Select 事件
| 事件名           | 说明                                    | 类型                                |
| --------------- | --------------------------------------- | ----------------------------------- |
| change          | 选中值发生变化时触发                      | `(value: string \| number) => void` |
| visible-change  | 下拉框出现/隐藏时触发                     | `(value: string \| number) => void` |
| clear           | 可清空的单选模式下用户点击清空按钮时触发    | `() => void`                        |
