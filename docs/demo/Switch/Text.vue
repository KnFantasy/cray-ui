<script setup>
import { ref } from 'vue'
import Switch from '@/components/Switch/Switch.vue'
const test1 = ref(true)
const test2 = ref(true)
const test3 = ref(true)
const test4 = ref(true)
const test5 = ref(true)
</script>

<template>
  <Switch v-model="test1" style="--cray-switch-on-color: #13ce66; --cray-switch-off-color: #ff4949" activeText="On" inactiveText="Off"/>
  <Switch v-model="test2" activeText="是" inactiveText="否"/>
  <Switch v-model="test3" style="--cray-switch-on-color: #13ce66; --cray-switch-off-color: #ff4949" activeText="Y" inactiveText="N"/>
  <Switch v-model="test4" style="width: 60px;" activeText="超出省略" inactiveText="超出省略"/>
  <Switch v-model="test5" style="--cray-switch-on-color: #13ce66; --cray-switch-off-color: #ff4949" activeText="完整展示多个内容" inactiveText="多个内容"/>
</template>