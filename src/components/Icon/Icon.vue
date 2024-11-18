<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineOptions({
  name: 'CrayIcon'
})

const props = defineProps<IconProps>()

const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<template>
  <i class="cray-icon"
  :class="{[`cray-icon--${type}`] : type }"
  :style="customStyles"
  >
    <FontAwesomeIcon v-bind="filteredProps"/>
  </i>
</template>
