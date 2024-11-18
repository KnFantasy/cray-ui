<script setup lang="ts">
import { ref, watch, computed, useAttrs, inject} from 'vue'
import type { Ref } from 'vue'
import type { InputProps, InputEmits } from './types'
import Icon from '../Icon/Icon.vue'
import { formItemContextKey, type FormValidateFailure} from '../Form/types'

defineOptions({
  name: 'CrayInput',
  inheritAttrs: false
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  autocomplete: 'off'
})

const attrs = useAttrs()

const emits = defineEmits<InputEmits>()

const innerValue = ref(props.modelValue ? props.modelValue : '')
watch(() => props.modelValue, () => {
  if (props.modelValue != undefined)
    innerValue.value = props.modelValue
})

const isFocus = ref(false)
const passwordVisible = ref(false)
const inputRef = ref() as Ref<HTMLInputElement>

const showClear = computed(() => 
  props.clearable &&
  innerValue.value &&
  isFocus.value
)

const showPasswordArea = computed(() => 
  props.showPassword &&
  !props.disabled &&
  innerValue.value
)

const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}

const keepFocus = async () => {
  inputRef.value.focus()
}

const handleInput = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
  runValidation('input')
}

const handleChange = () => {
  emits('change', innerValue.value)
  runValidation('change')
}

const handleFocus = (event: FocusEvent) => {
  isFocus.value = true
  emits('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocus.value = false
  emits('blur', event)
  runValidation('blur')
}

const clear = () => {
  innerValue.value = ''
  emits('update:modelValue', '')
  emits('clear')
  emits('input', '')
  emits('change', '')
}

const formItemContext = inject(formItemContextKey, null)
const runValidation = (trigger?: string) => {
  formItemContext?.validate(trigger).catch((e: FormValidateFailure) => console.error(e.errors))
}

defineExpose({
  ref: inputRef,
  showClear
})
</script>

<template>
<div
  class="cray-input"
  :class="{
    [`cray-input--${type}`]: type,
    [`cray-input--${size}`]: size,
    'is-disabled': disabled,
    'is-prepend': $slots.prepend,
    'is-append': $slots.append,
    'is-prefix': $slots.prefix,
    'is-suffix': $slots.suffix,
    'is-focus': isFocus
  }"
>
  <!-- input -->
  <template v-if="type === 'text'">
    <!-- prepend slot -->
    <div v-if="$slots.prepend" class="cray-input__prepend">
      <slot name="prepend" />
    </div>
    <div class="cray-input__wrapper">
      <!-- prefix slot -->
      <span v-if="$slots.prefix" class="cray-input__prefix">
          <slot name="prefix" />
      </span>
      <input
        class="cray-input__inner"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        ref="inputRef"
        v-bind="attrs"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <!-- suffix slot -->
      <span v-if="$slots.suffix || showClear || showPasswordArea" class="cray-input__suffix" @click="keepFocus">
          <Icon 
            icon="circle-xmark"
            v-if="showClear"
            class="cray-input__clear"
            @click.stop="clear"
            @mousedown.prevent=""
          />
          <Icon 
            :icon="passwordVisible ? 'eye' : 'eye-slash'"
            v-if="showPasswordArea"
            class="cray-input__password"
            @click="togglePasswordVisible"
          />
          <slot name="suffix" />
      </span>
    </div>
    <!-- append slot -->
    <div v-if="$slots.append" class="cray-input__append">
      <slot name="append" />
    </div>
  </template>
  
  <!-- textarea -->
  <template v-else>
    <textarea
      class="cray-textarea__wrapper"
      v-bind="attrs"
      ref="inputRef"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :form="form"
      v-model="innerValue"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </template>
</div>
</template>