<script setup>
import { reactive, ref } from 'vue'
import Form from '@/components/Form/Form.vue'
import FormItem from '@/components/Form/FormItem.vue'
import Input from '@/components/Input/Input.vue'
import Switch from '@/components/Switch/Switch.vue'
import Button from '@/components/Button/Button.vue'
const formRef = ref()

const model = reactive({
  password: '',
  confirm: '',
  check: false,
})
const rules = {
  password: [
    { required: true, trigger: 'blur', message: '请填写密码' },
    { type: 'string', trigger: 'blur', min: 6, max: 15, message: '密码的长度需要在6到15位之间' }
  ],
  confirm: [
    { required: true, trigger: 'blur', message: '请确认密码' },
    { type: 'string', validator: (rule, value) => value === model.password, trigger: 'blur', message: '两次密码输入不匹配' }
  ],
  check: [
    { type: 'enum', required: true, enum: [true], message: '请同意协议' }
  ]
}
const submit = async () => {
  try {
    await formRef.value.validate()
  }
  catch (e) {
    console.error(e)
  }
}
const reset = () => {
  formRef.value.resetFields()
}
</script>

<template>
<div>
  <Form :model="model" :rules="rules" ref="formRef">
    <FormItem label="密码" prop="password">
      <Input v-model="model.password" showPassword />
    </FormItem>
    <FormItem label="确认密码" prop="confirm">
      <Input v-model="model.confirm" showPassword />
    </FormItem>
    <FormItem label="同意协议" prop="check">
      <Switch v-model="model.check" />
    </FormItem>
    <div :style="{textAlign: 'center'}">
      <Button type="primary" @click.prevent="submit">Submit</Button>
      <Button @click.prevent="reset">Reset</Button>
    </div>
  </Form>
</div>
</template>