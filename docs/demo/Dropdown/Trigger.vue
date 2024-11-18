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
  <div class="trigger">
    <Dropdown 
      placement="bottom" 
      :menu-options="options"
    >
      Default hover
      <Icon icon="angle-down" />
    </Dropdown>
    <Dropdown 
      placement="bottom" 
      :menu-options="options"
      trigger="click"
    >
      Click me
      <Icon icon="angle-down" />
    </Dropdown>
  </div>
</template>

<style>
.trigger .cray-dropdown {
  margin-right: 50px;
}
</style>