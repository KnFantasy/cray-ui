<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
import Icon from '@/components/Icon/Icon.vue'
const test1 = ref('')
const test2 = ref('')
</script>
<template>
  <div class="combo-block">
    <span>使用 prepend 和 append 插槽</span>
    <Input v-model="test1" placeholder="Please input">
      <template #prepend>Https://</template>
      <template #append>.com</template>
    </Input>
  </div>
  <div class="combo-block">
    <span>使用 prefix 和 suffix 插槽</span>
    <Input v-model="test2" placeholder="Please input">
      <template #prefix>
        <Icon icon="user" />
      </template>
      <template #suffix>
        <Icon icon="file-word" />
      </template>
    </Input>
  </div>

</template>

<style>
.combo-block {
  display: flex;
  justify-content: space-between;
}

.combo-block span {
  flex: 1;
}

.combo-block .cray-input{
  flex: 2;
}
</style>