<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownProps, DropdownInstance, DropdownEmits, MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import RenderVnode from '../Common/RenderVnode.vue'
import type { TooltipInstance } from '../Tooltip/types'

defineOptions({
  name: 'CrayDropdown'
})

const props = withDefaults(defineProps<DropdownProps>(), {
  hideAfterClick: true
})
const emits = defineEmits<DropdownEmits>()

const tooltipRef = ref<TooltipInstance | null>(null)

const visibleChange = (e: boolean) => {
  emits('visibleChange', e)
}
const itemClick = (e: MenuOption) => {
  if (e.disabled) {
    return
  }
  emits('select', e)
  if (props.hideAfterClick) {
    tooltipRef.value?.hide()
  }
}

defineExpose<DropdownInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
})
</script>

<template>
  <div
    class="cray-dropdown"
  >
  <Tooltip
    :trigger="trigger"
    :placement="placement"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    :manual="manual"
    @visibleChange="visibleChange"
    ref="tooltipRef"
  >
    <!-- 触发区 -->
    <slot></slot>

    <!-- 展示区 -->
    <template #content>
      <ul class="cray-dropdown__menu">
        <template v-for="item in menuOptions" :key="item.key">
          <!-- 分隔线 -->
          <li     
            v-if="item.divided"
            role="separator"
            class="divided-placeholder"
          >
          </li>

          <!-- 内容 -->
          <li
            class="cray-dropdown__item"
            @click="itemClick(item)"
            :class="{'is-disabled': item.disabled, 'is-divided': item.divided }"
            :id="`dropdown-item-${item.key}`"
          >
            <RenderVnode :vNode="item.label"/>
          </li>
        </template>
      </ul>
    </template>
  </Tooltip>
  </div>
</template>