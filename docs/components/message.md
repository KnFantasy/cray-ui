---
title: Message 消息提示
description: Dropdown 组件的文档
---

# Message 消息提示
常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法
从顶部出现，3 秒后自动消失。  
注册了一个createMessage方法用于调用。Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。
<preview path="../demo/Message/Basic.vue"></preview>

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。  
设置 type 字段可以定义不同的状态，默认为info。
<preview path="../demo/Message/Type.vue"></preview>

## 可关闭的消息提示
可以添加关闭按钮。  
默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 `true`。  
Message 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。
<preview path="../demo/Message/ShowClose.vue"></preview>

## 清空消息
message 提供了一个 `closeAll` 方法，可以手动关闭所有实例。
<preview path="../demo/Message/CloseAll.vue"></preview>


## Message API

### Message 属性

| 属性名       | 说明                                       | 类型                                            | Default |
| ----------- | ------------------------------------------ | ----------------------------------------------- | ------- |
| message     | 消息文字                                    | `string` / `VNode` / `() => VNode`              | ''      |
| type        | 消息类型                                    | `'success' \| 'warning' \| 'info' \| 'error'`   | `info`  |
| duration    | 显示时间，单位为毫秒。 设为 0 则不会自动关闭   | `number`                                        | 3000    |
| showClose   | 是否显示关闭按钮                             | `boolean`                                       | false   |

### Message 方法

`Message` and `this.$message` returns the current Message instance. To manually close the instance, you can call `close` on it.

| 方法名  | 说明                  | 类型         |
| ------ | --------------------- | ------------ |
| close  | 关闭当前所有的 Message | `() => void` |