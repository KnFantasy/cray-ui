<script setup lang="ts">
import { inject, computed, reactive, provide, onMounted, onUnmounted } from 'vue'
import Schema from 'async-validator'
import { isNil } from 'lodash-es'
import { formContextKey, formItemContextKey } from './types'
import type { FormItemProps, FormValidateFailure, FormItemContext, validateStateProp, FormItemInstance } from './types'

defineOptions({
  name: 'CrayFormItem'
})

const props = defineProps<FormItemProps>()
const formContext = inject(formContextKey)

const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop]))
    return model[props.prop]
  else
    return null
})
const itemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && rules[props.prop])
    return rules[props.prop]
  else
    return []
})

const isRequired = computed(() => {
  return itemRules.value.some(rule => rule.required)
})

const validateState: validateStateProp = reactive({
  state: 'init',
  errorMsg: '',
  loading: false
})

const getTriggeredRules = (trigger?: string) => {
  const rules = itemRules.value
  if (rules) {
    return rules.filter(rule => {
      if (!rule.trigger || !trigger) return true
      return rule.trigger === trigger
    })
  }
  else
    return []
}
const validate = async (trigger?: string) => {
  const triggeredRules = getTriggeredRules(trigger)
  if (triggeredRules.length === 0) {
    return true
  }

  // 开始验证
  if (props.prop) {
    const validator = new Schema({
      [props.prop]: triggeredRules
    })
    validateState.loading = true
    return validator.validate({ [props.prop]: innerValue.value })
      .then(() => {
        validateState.state = 'success'
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e
        validateState.state = 'error'
        validateState.errorMsg = (errors && errors.length > 0) ? errors[0].message || '' : ''
        return Promise.reject(e)
      })
      .finally(() => {
        validateState.loading = false
      })
  }
}
const clearValidate = () => {
  validateState.state = 'init'
  validateState.errorMsg = ''
  validateState.loading = false
}


let initialValue: any = null
const resetField = () => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) { 
    model[props.prop] = initialValue
  }
  clearValidate()
}
const context: FormItemContext = {
  validate,
  prop: props.prop || '',
  clearValidate,
  resetField
}

onMounted(() => {

    formContext?.addField(context)
    initialValue = innerValue.value
  
})
onUnmounted(() => {
  if (props.prop)
    formContext?.removeField(context)
})

provide(formItemContextKey, context)
defineExpose<FormItemInstance>({
  validateState,
  validate,
  resetField,
  clearValidate
})
</script>

<template>
  <div 
    class="cray-form-item"
    :class="{
      'is-error': validateState.state === 'error',
      'is-success': validateState.state === 'success',
      'is-loading': validateState.loading,
      'is-required': isRequired
    }"
  >
    <label class="cray-form-item__label">
      <slot name="label" :label="label">
        {{label}}
      </slot>
    </label>
    <div class="cray-form-item__content">
      <slot :validate="validate"/>
      <div class="cray-form-item__error-msg" v-if="validateState.state === 'error'">
        {{validateState.errorMsg}}
      </div>
    </div>
  </div>
</template>