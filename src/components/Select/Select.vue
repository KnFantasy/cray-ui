<script setup lang="ts">
import { ref, reactive, computed, watch, toRaw } from 'vue'
import type { Ref } from 'vue'
import { isFunction, debounce } from 'lodash-es'
import type { SelectProps, SelectEmits, SelectOption, SelectStates } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import Input from '../Input/Input.vue'
import Icon from '../Icon/Icon.vue'
import RenderVnode from '../Common/RenderVnode.vue'
import type { InputInstance } from '../Input/types'
import type { ModifierPhases } from '@popperjs/core/lib/enums.d.ts'

defineOptions({
  name: 'CraySelect'
})

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
})
const emits = defineEmits<SelectEmits>()

const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>

// 确定Option
const timeout = computed(() => props.remote ? 500 : 0)
const findOption = (value: string) => {
  const option = props.options.find(option => option.value === value)
  return option ? option : null
}
const initialOption = findOption(props.modelValue)
const filteredOptions = ref(props.options)
watch(() => props.modelValue, (newValue) => {
  const _newValue = findOption(newValue)
  states.inputValue = _newValue ? _newValue.label : ''
  states.selectedOption = _newValue
})
const generateFilterOptions = async (searchValue: string) => {
  if (!props.filterable) return
  if (props.filterMethod && isFunction(props.filterMethod))
    filteredOptions.value = props.filterMethod(searchValue)
  else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    states.loading = true
    try {
      filteredOptions.value = await props.remoteMethod(searchValue)
    }
    catch (e) {
      console.error(e)
      filteredOptions.value = []
    }
    finally {
      states.loading = false
    }
  }
  else
    filteredOptions.value = props.options.filter(option => option.label.includes(searchValue))
  // states.highlightIndex = -1

}

const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption,
  mouseHover: false,
  loading: false,
  highlightIndex: -1
})

const isDropdownShow = ref(false)

const showClearIcon = computed(() => {
  return props.clearable
    && states.mouseHover
    && states.selectedOption
    && states.inputValue !== ''
})

const popperModifiers = [{
  name: 'offset',
  options: {
    offset: [0, 8],
  },
}, {
  name: "sameWidth",
  enabled: true,
  phase: "beforeWrite" as ModifierPhases,
  requires: ["computeStyles"],
  fn: ({ state }: { state: any }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }: { state: any }) => {
    state.elements.popper.style.width = `${state.elements.reference.offsetWidth
      }px`;
  }
}
]

const controlDropdown = (show: boolean) => {
  if (show) {
    // 恢复高亮选项
    states.highlightIndex = states.selectedOption ? props.options.indexOf(toRaw(states.selectedOption)) : -1
    // filter 模式
    // 之前选择过对应的值
    if (props.filterable && states.selectedOption) {
      states.inputValue = ''
    }
    // 进行一次默认选项的生成
    if (props.filterable) {
      generateFilterOptions(states.inputValue)
    }
    tooltipRef.value.show()
  }
  else {
    tooltipRef.value.hide()
    // blur 时候将之前的值回灌到 input 中
    if (props.filterable)
      states.inputValue = states.selectedOption ? states.selectedOption.label : ''
    // states.highlightIndex = -1
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}
const _placeholder = computed(() => {
  return (props.filterable && states.selectedOption && isDropdownShow.value)
    ? states.selectedOption.label : props.placeholder
})
const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}
const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  states.inputValue = e.label
  states.selectedOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlDropdown(false)
  inputRef.value.ref.focus()
}

const handleInput = debounce(() => {
  generateFilterOptions(states.inputValue)
}, timeout.value)

const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (!isDropdownShow.value) {
        controlDropdown(true)
      }
      else {
        if (states.highlightIndex > -1 && filteredOptions.value[states.highlightIndex]) {
          itemSelect(filteredOptions.value[states.highlightIndex])
        } else {
          controlDropdown(false)
        }
      }
      break
    case 'Escape':
      if (isDropdownShow.value) {
        controlDropdown(false)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      if (filteredOptions.value.length > 0) {
        if (states.highlightIndex === -1)
          states.highlightIndex = 0
        let i = 0
        do {
          i++
          states.highlightIndex--
          if (states.highlightIndex === -1)
            states.highlightIndex = filteredOptions.value.length - 1
        } while (filteredOptions.value[states.highlightIndex].disabled && i < filteredOptions.value.length);
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      if (filteredOptions.value.length > 0) {
        if (states.highlightIndex === -1)
          states.highlightIndex = -1
        let i = 0
        do {
          i++
          states.highlightIndex++
          if (states.highlightIndex === filteredOptions.value.length)
            states.highlightIndex = 0
        } while (filteredOptions.value[states.highlightIndex].disabled && i < filteredOptions.value.length);
      }
    default:
      break;
  }
}

const handleClear = () => {
  states.inputValue = ''
  states.selectedOption = null
  states.highlightIndex = -1
}

const itemMouseOver = (item: SelectOption, index: number) => {
  if (item.disabled) return
  states.highlightIndex = index
}

</script>

<template>
  <div class="cray-select" :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
    <Tooltip placement="bottom-start" ref="tooltipRef" manual :modifiers="popperModifiers"
      @click-outside="controlDropdown(false)">
      <div class="cray-select__input-wrapper" @mouseenter="states.mouseHover = true"
        @mouseleave="states.mouseHover = false">
        <Input v-model="states.inputValue" :disabled="disabled" :placeholder="_placeholder" ref="inputRef"
          :readonly="!filterable || !isDropdownShow" @input="handleInput" @keydown="handleKeydown" @clear="handleClear"
          :clearable="!!showClearIcon">
        <template #suffix v-if="!inputRef?.showClear">
          <Icon icon="angle-down" class="header-angle" :class="{ 'is-active': isDropdownShow }" />
        </template>
        </Input>
      </div>
      <template #content>
        <div class="cray-select__loading" v-if="states.loading">
          <Icon icon="spinner" spin></Icon>
        </div>
        <div class="cray-select__no-data" v-else-if="filterable && filteredOptions.length === 0">
          no matching data
        </div>
        <ul class="cray-select__menu" v-else>
          <template v-for="(item, index) in filteredOptions" :key="index">
            <li class="cray-select__menu-item" :class="{
              'is-disabled': item.disabled,
              'is-selected': states.selectedOption?.value === item.value,
              'is-highlighted': states.highlightIndex === index
            }" :id="`select-item-${item.value}`" @click.stop="itemSelect(item)"
              @mouseover="itemMouseOver(item, index)">
              <RenderVnode :vNode="renderLabel ? renderLabel(item) : item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>