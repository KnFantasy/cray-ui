<script setup>
import { ref } from 'vue'
import Switch from '@/components/Switch/Switch.vue'
const test1 = ref(true)
const test2 = ref('Turned On')
const test3 = ref(100)
</script>

<template>
  <div class="value-block">
    <h4>Value: {{ test1 }}</h4>
    <Switch v-model="test1"/>
  </div>
  <div class="value-block">
    <h4>Value: {{ test2 }}</h4>
    <Switch v-model="test2" activeValue="Turned On" inactiveValue="Turned Off"/>
  </div>
  <div class="value-block">
    <h4>Value: {{ test3 }}</h4>
    <Switch v-model="test3" :activeValue="100" :inactiveValue="0"/>
  </div>
</template>

<style>
.value-block {
  margin-bottom: 30px;
}
</style>