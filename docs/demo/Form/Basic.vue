<script setup>
import { reactive, ref } from 'vue'
import Form from '@/components/Form/Form.vue'
import FormItem from '@/components/Form/FormItem.vue'
import Input from '@/components/Input/Input.vue'
import Switch from '@/components/Switch/Switch.vue'
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
  username: '',
  email: '',
  password: '',
  confirm: '',
  check: false,
  select: '',
})

const reset = () => {
  console.log('1')
  formRef.value.resetFields()
}
</script>

<template>
<div>
  <Form :model="model" ref="formRef">
    <FormItem label="用户名" prop="username">
      <Input v-model="model.username"/>
    </FormItem>
    <FormItem label="Email" prop="email">
      <Input v-model="model.email"/>
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input v-model="model.password" showPassword />
    </FormItem>
    <FormItem label="确认密码" prop="confirm">
      <Input v-model="model.confirm" showPassword />
    </FormItem>
    <FormItem label="同意协议" prop="check">
      <Switch v-model="model.check" />
    </FormItem>
    <FormItem label="品牌" prop="select">
      <Select v-model="model.select" :options="options" />
    </FormItem>
    <div :style="{textAlign: 'center'}">
      <Button type="primary" @click.prevent>Submit</Button>
      <Button @click.prevent="reset">Reset</Button>
    </div>
  </Form>
  <div class="form-value">
    Form value:
    <pre>{{ model }}</pre>
  </div>

</div>
</template>

<style>
.form-value {
  margin-top: 10px;
  font-size: 25px;
  line-height: 1;
}
</style>