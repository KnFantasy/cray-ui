<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
const test1 = ref('')
const test2 = ref('')
const test3 = ref('')
</script>
<template>
  <div class="size-holder">
    <Input v-model="test1" placeholder="Large" size="large">
    </Input>
    <Input v-model="test2" placeholder="Default">
    </Input>
    <Input v-model="test3" placeholder="Small" size="small">
    </Input>
  </div>
</template>
<style scoped>
.size-holder {
  display: flex;
  align-items: center;
}
</style>