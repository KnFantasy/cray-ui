<script setup>
import { ref, h } from 'vue'
import Select from '@/components/Select/Select.vue'
const test = ref('')
const options = [
  { label: '文和友', value: '1' },
  { label: '天宝兄弟', value: '2' },
  { label: '聚味瞿记', value: '3' },
  { label: '虾小龙', value: '4' }
]
const styles = ['orange', 'deeppink', 'purple', 'red']

const customRender = (option) => {
  return h('div', { className: 'rendered' }, [
    h('h4', { style: `color: ${styles[option.value - 1]};`}, option.label),
    h('span', option.value)
  ])
}
</script>

<template>
  <Select v-model="test" placeholder="Select" :options="options" :renderLabel="customRender"/>
</template>

<style>
.cray-select__menu-item, .rendered  {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>