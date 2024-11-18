<script setup>
import { ref } from 'vue'
import Switch from '@/components/Switch/Switch.vue'
const test1 = ref(true)
const test2 = ref(true)
</script>

<template>
  <Switch v-model="test1" />
  <Switch
  v-model="test2"
  style="--cray-switch-on-color: #13ce66; --cray-switch-off-color: #ff4949"
  />
</template>

<style>
.cray-switch {
  margin-right: 10px;
}
</style>