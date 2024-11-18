<script setup>
import { ref } from 'vue'
import Select from '@/components/Select/Select.vue'
const test = ref('')
const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const remoteFilter = (query) => {
  return new Promise((resolve) => {
    if (query) {
      setTimeout(() => {
        const options = states.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase())
        }).map(label => {
          return { label, value: label }
        })
        resolve(options)
      }, 500)
    } else {
      resolve([])
    }
  })
}
</script>
<template>
  <div class="remote-block">
    <span class="title">本地模拟：搜索美国的50个州</span>
    <Select 
      v-model="test" 
      placeholder="Select"
      filterable
      remote
      :remote-method="remoteFilter"
    />
  </div>
</template>

<style>
.remote-block span.title {
  margin-right: 20px;
}
</style>