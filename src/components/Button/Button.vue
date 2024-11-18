<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './types';
import Icon from '../Icon/Icon.vue';

defineOptions({
  name: 'CrayButton'
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})

// 暴露组件实例
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>

<template>
  <button ref="_ref" class="cray-button" :class="{
      [`cray-button--${type}`]: type,
      [`cray-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }" :disabled="disabled || loading" :autofocus="autofocus" :type="nativeType">
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>