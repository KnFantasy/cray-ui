<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import { collapseContextKey, type CollapseEmits, type CollapseProps, type NameType } from './types';

defineOptions({
  name: 'CrayCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

// 已打开的item数组
const activeNames = ref<NameType[]>(props.modelValue ? props.modelValue : [])

// 监听modalValue在外部的变化
watch(() => props.modelValue, () => {
  if (props.modelValue)
    activeNames.value = props.modelValue
})

// 处理item的点击事件
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    activeNames.value = [ activeNames.value[0] === item ? '' : item ]
  }
  else {
    const index = activeNames.value.indexOf(item)
    if (index > -1)
      // 存在，删除数组对应的一项
      activeNames.value.splice(index, 1)
    else
      // 不存在，插入对应的name
      activeNames.value.push(item)
  }
  const _activeNames = [...activeNames.value]
  emits('update:modelValue', _activeNames)
  emits('change', _activeNames)
}
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>


<template>
  <div class="cray-collapse">
    <slot></slot>
  </div>
</template>
