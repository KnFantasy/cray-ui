<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import { createPopper, type Instance } from '@popperjs/core';
import useClickOutside from '@/composables/useClickOutside';
import { debounce, isNil, omitBy, pick } from 'lodash-es';

defineOptions({
  name: 'CrayTooltip'
})

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  openDelay: 0,
  closeDelay: 0,
  modifiers: () => [{
    name: 'offset',
    options: {
      offset: [0, 10],
    }
  }]
})
const emits = defineEmits<TooltipEmits>()

const isOpen = ref(false)

const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()

let popperInstance: null | Instance = null

let events: Record<string, () => void> = reactive({})
let outerEvents: Record<string, () => void> = reactive({})

const _open = () => {
  isOpen.value = true
  emits('visibleChange', true)
};
const _close = () => {
  isOpen.value = false
  emits('visibleChange', false)
}
const openDebounce = debounce(_open, props.openDelay)
const closeDebounce = debounce(_close, props.closeDelay)
const open = () => {
  closeDebounce.cancel()
  openDebounce()
}
const close = () => {
  openDebounce.cancel()
  closeDebounce()
}


const togglePopper = () => {
  if (isOpen.value) close()
  else open()
}

const attachEvents = () => {
  if (props.trigger === 'hover') {
    outerEvents['mouseenter'] = open
    outerEvents['mouseleave'] = close
  }
  else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
if (!props.manual) {
  attachEvents()
}

useClickOutside(popperContainerNode, () => {
  if (props.manual) {
    if (isOpen.value)
      emits('clickOutside', true)
  }
  else if (props.trigger === 'click' && isOpen.value) {
    close()
  }
})

// 监听
watch(isOpen, (newValue) => {
  if (newValue)
    popperInstance?.update();
})
watch(() => props.trigger, (newTrigger, oldTrigger) => {
  if (newTrigger !== oldTrigger) {
    // clear the events
    events = {}
    outerEvents = {}
    attachEvents()
  }
})
watch(() => props.manual, (isManual) => {
  if (isManual) {
    events = {}
    outerEvents = {}    
  }
  else {
    attachEvents()
  }
})

onMounted(() => {
  if(triggerNode.value && popperNode.value)
    popperInstance = createPopper(triggerNode.value, popperNode.value, omitBy(pick(props, ['placement', 'modifiers', 'strategy', 'onFirstUpdate']), isNil))
})

onUnmounted(() => {
  popperInstance?.destroy()
})

defineExpose<TooltipInstance>({
  show: open,
  hide: close
})
</script>

<template>
  <div class="cray-tooltip"
  v-on="outerEvents"
  ref="popperContainerNode"
  >
    <!-- 触发区 -->
    <div class="cray-tooltip__trigger"
    v-on="events"
    ref="triggerNode"
    >
      <slot></slot>
    </div>

    <!-- 展示区 -->
    <transition :name="transition">
      <div class="cray-tooltip__popper"
      ref="popperNode"
      v-show="isOpen"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </transition>
  </div>
</template>