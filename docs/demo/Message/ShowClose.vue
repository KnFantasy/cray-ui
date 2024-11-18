<script setup>
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'
const open = (message, showClose, duration) => {
  createMessage({ message, showClose, duration })
}
</script>

<template>
  <Button @click="open('3秒后关闭')"> 3秒后关闭 </Button>
  <Button @click="open('不会自动关闭', true, 0)"> 不会自动关闭 </Button>
</template>