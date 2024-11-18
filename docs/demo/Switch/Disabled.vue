<script setup>
import { ref } from 'vue'
import Switch from '@/components/Switch/Switch.vue'
const test1 = ref(true)
const test2 = ref(true)
const test3 = ref(false)
</script>

<template>
  正常：<Switch v-model="test1" /><br/>
  禁用：<Switch v-model="test2" disabled/><br/>
  禁用：<Switch v-model="test3" disabled/>
</template>