<script setup lang="ts">
import { computed, inject } from 'vue';
import { collapseContextKey, type CollapseItemProps } from './types'
import Icon from '../Icon/Icon.vue';

defineOptions({
  name: 'CrayCollapseItem'
})

// 参数与注入
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)

const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))



const handleClick = () => {
  if (props.disabled) { return }
  collapseContext?.handleItemClick(props.name)
}

// 动画
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) { 
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>

<template>
<div
  class="cray-collapse-item"
  :class="{
    'is-disabled': disabled
  }"
>

  <!-- Header区 -->
  <div 
    class="cray-collapse-item__header"
    :class="{
      'is-disabled': disabled,
      'is-active': isActive
    }"
    :id="`item-header-${name}`"
    @click="handleClick"
  >
    <slot name="title">{{ title }}</slot>
    <Icon icon="angle-right" class="header-angle" />
  </div>

  <!-- Content区 -->
   
  <Transition name="slide" v-on="transitionEvents">
    <div class="cray-collapse-item__wrapper" v-show="isActive">
      <div
      class="cray-collapse-item__content"
      :id="`item-content-${name}`"
      >
        <slot></slot>
      </div>
    </div>
  </Transition>

</div>
</template>
