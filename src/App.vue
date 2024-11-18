<script setup lang="ts">
import { h, ref } from 'vue';
import Button from './components/Button/Button.vue';
import Collapse from './components/Collapse/Collapse.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Icon from './components/Icon/Icon.vue';
import Dropdown from './components/Dropdown/Dropdown.vue';
import type { MenuOption } from './components/Dropdown/types';
import type { DropdownInstance } from './components/Dropdown/types';
import { createMessage } from './components/Message/method';
import Switch from './components/Switch/Switch.vue';
import Input from './components/Input/Input.vue'

const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const dropdownRef = ref<DropdownInstance>()

createMessage({type: 'info', message: '11', duration: 0, showClose: true})
createMessage({type: 'success', message: '2222', duration: 2000, showClose: true})
createMessage({type: 'warning', message: '333333', duration: 0, showClose: true})
createMessage({type: 'danger', message: '4444444', duration: 0, showClose: true})

</script>

<template>
  <Input></Input>
  <Dropdown
  trigger="click"
  placement="bottom"
  :menu-options="options"
  @visibleChange="e => console.log(e)"
  @select="e => console.log(e)"
  ref="dropdownRef"
  >
    <div>点我</div>
  </Dropdown>
  <Switch>123</Switch>
  <Icon icon="arrow-up" size="2xl" type="danger" color="#0e7a0d" spin />
  <Button @click="dropdownRef?.show()">Test Button</Button>
  <Button @click="dropdownRef?.show()" plain>Plain Button</Button>
  <Button @click="createMessage({type: 'info', message: '11', duration: 0, showClose: true})" round>RB</Button>
  <Button circle>CB</Button>
  <Button disabled>Disabled Button</Button><br/><br/>
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="info">Info</Button>
  <Button type="warning">Warning</Button>
  <Button type="danger">Danger</Button><br/><br/>
  <Button type="primary" plain>Primary</Button>
  <Button type="success" plain>Success</Button>
  <Button type="info" plain>Info</Button>
  <Button type="warning" plain>Warning</Button>
  <Button type="danger" plain>Danger</Button><br/><br/>
  <Button size="large">Large</Button>
  <Button size="small">Small</Button><br/><br/>
  <Button size="large" loading>Loading</Button>
  <Button size="large" icon="arrow-up">Icon</Button><br/><br/>

  <Collapse accordion>
    <CollapseItem name="a" title="a的props的title">
      <template #title>
        <h1>a的插槽的title</h1>
      </template>
      <h1>headline title</h1>
      <div>this is the content aaaaa</div>
    </CollapseItem>
    <CollapseItem name="b" title="b的props的title">
      <div>this is the content bbbbb</div>
    </CollapseItem>
    <CollapseItem name="c" title="cccc's title" disabled>
      <div>this is the content ccccc</div>
    </CollapseItem>
  </Collapse>
</template>

<style scoped>
</style>
