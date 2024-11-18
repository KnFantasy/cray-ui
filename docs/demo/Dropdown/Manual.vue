<script setup>
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'

const options = [
  { key: 1, label: 'action1' },
  { key: 2, label: 'action2', disabled: true },
  { key: 3, label: 'action3', divided: true },
  { key: 4, label: 'action4' }
]
const tooltipRef = ref()
const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
</script>
<template>
  <div class="manual-block">
    <Dropdown content="hello tooltip" ref="tooltipRef" manual :menu-options="options">
      <div class="box">
        容器
      </div>
    </Dropdown>
    <Button type="success" @click="open"> 显示 </Button>
    <Button type="danger" @click="close"> 隐藏 </Button>
  </div>
</template>

<style>
.manual-block .cray-button {
  margin-left: 15px;
}
</style>