<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Icon from '@/components/Icon/Icon.vue'
const options = [
  { key: 1, label: 'action1' },
  { key: 2, label: 'action2', disabled: true },
  { key: 3, label: 'action3', divided: true },
  { key: 4, label: 'action4' }
]
</script>

<template>
  <Dropdown 
    placement="bottom" 
    :menu-options="options"
    :hideAfterClick="false"
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