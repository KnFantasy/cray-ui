<script setup>
import { h } from 'vue'
import { createMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'
const open = () => {
  createMessage({ message: 'This is a message' })
}
const open2 = () => {
  createMessage({
    message: h('p', { style: 'line-height: 1; font-size: 30px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>

<template>
  <div class="basic block">
    <Button  @click="open"> Show message </Button>
    <Button  @click="open2"> VNode </Button>
  </div>
</template>