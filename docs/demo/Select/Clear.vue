<script setup>
import { ref } from 'vue'
import Select from '@/components/Select/Select.vue'
const test = ref('1')
const options = [
  { label: '文和友', value: '1' },
  { label: '天宝兄弟', value: '2' },
  { label: '聚味瞿记', value: '3' },
  { label: '虾小龙', value: '4' }
]
</script>

<template>
  <Select v-model="test" placeholder="Select" :options="options" clearable />
</template>