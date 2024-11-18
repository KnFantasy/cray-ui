<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
import Icon from '@/components/Icon/Icon.vue'

const input1 = ref('')
const input2 = ref('')
</script>

<template>
  <Input
    v-model="input1"
    style="width: 240px"
    placeholder="Pick a date"
  >
    <template #suffix>
      <Icon icon="calendar-days"></Icon>
    </template>
  </Input>
  <Input
    v-model="input2"
    style="width: 240px"
    placeholder="Type something"
  >
    <template #prefix>
      <Icon icon="magnifying-glass"></Icon>
    </template>
  </Input>
</template>