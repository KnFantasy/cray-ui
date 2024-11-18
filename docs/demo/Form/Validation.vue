<script setup>
import { reactive, ref } from 'vue'
import Form from '@/components/Form/Form.vue'
import FormItem from '@/components/Form/FormItem.vue'
import Input from '@/components/Input/Input.vue'
import Select from '@/components/Select/Select.vue'
import Button from '@/components/Button/Button.vue'
const formRef = ref()
const options = [
  { label: '文和友', value: '1' },
  { label: '天宝兄弟', value: '2' },
  { label: '聚味瞿记', value: '3' },
  { label: '虾小龙', value: '4' }
]

const model = reactive({
  name: '',
  email: '',
  select: '',
  comment: ''
})
const rules = {
  name: [
    { type: 'string', required: true, trigger: 'blur', message: '请填写姓名' },
    { min: 2, max: 5, trigger: 'blur', message: '姓名的长度需要在2至5位之间' }
  ],
  email: [
    { required: true, trigger: 'blur', message: '请填写邮箱' },
    { type: 'email', trigger: 'blur', message: '邮箱格式错误' }
  ],
  select: [
    { type: 'string', required: true, trigger: 'input', message: '请选择' },
  ],
  comment: [
    { type: 'string', trigger: 'blur', message: '请选择' },
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
      <FormItem label="姓名" prop="name">
        <Input v-model="model.name" />
      </FormItem>
      <FormItem label="Email" prop="email">
        <Input v-model="model.email" />
      </FormItem>
      <FormItem label="选择订购产品" prop="select">
        <Select v-model="model.select" :options="options" />
      </FormItem>
      <FormItem label="留言" prop="comment">
        <Input v-model="model.comment" type="textarea" style="height: 100px; resize: none;" />
      </FormItem>
      <div :style="{textAlign: 'center'}">
        <Button type="primary" @click.prevent="submit">Submit</Button>
        <Button @click.prevent="reset">Reset</Button>
      </div>
    </Form>
  </div>
</template>