<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Icon from '@/components/Icon/Icon.vue'
import { createMessage } from '@/components/Message/method'
const options = [
  { key: 1, label: 'action1' },
  { key: 2, label: 'action2', disabled: true },
  { key: 3, label: 'action3', divided: true },
  { key: 4, label: 'action4' }
]
const handleSelect = (e) => {
  createMessage({type: 'info', message: `点击事件${e.key}`})
}
</script>

<template>
  <Dropdown 
    placement="bottom" 
    :menu-options="options"
    @select="handleSelect"
  >
    Dropdown List
    <Icon icon="angle-down" />
  </Dropdown>
</template>

<style>
.vp-doc .vitepress-demo-preview-preview ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>