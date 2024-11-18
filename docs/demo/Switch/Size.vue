<script setup>
import { ref } from 'vue'
import Switch from '@/components/Switch/Switch.vue'
const test1 = ref(true)
const test2 = ref(true)
const test3 = ref(true)
</script>

<template>
  <Switch v-model="test1" size="large"/>
  <Switch v-model="test2"/>
  <Switch v-model="test3" size="small"/>
</template>

