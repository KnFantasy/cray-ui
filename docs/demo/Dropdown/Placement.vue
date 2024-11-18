<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
const options = [
  { key: 1, label: 'action1' },
  { key: 2, label: 'action2', disabled: true },
  { key: 3, label: 'action3', divided: true },
  { key: 4, label: 'action4' }
]
</script>

<template>
  <div class="dropdown-base-box">
    <div class="row center">
      <Dropdown
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
        :menu-options="options"
      >
        <Button>top-start</Button>
      </Dropdown>
      <Dropdown
        class="box-item"
        content="Top Center prompts info"
        placement="top"
        :menu-options="options"
      >
        <Button>top</Button>
      </Dropdown>
      <Dropdown
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
        :menu-options="options"
      >
        <Button>top-end</Button>
      </Dropdown>
    </div>
    <div class="row">
      <Dropdown
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
        :menu-options="options"
      >
        <Button>left-start</Button>
      </Dropdown>
      <Dropdown
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
        :menu-options="options"
      >
        <Button>right-start</Button>
      </Dropdown>
    </div>
    <div class="row">
      <Dropdown
        class="box-item"
        content="Left Center prompts info"
        placement="left"
        :menu-options="options"
      >
        <Button class="mt-3 mb-3">left</Button>
      </Dropdown>
      <Dropdown
        class="box-item"
        content="Right Center prompts info"
        placement="right"
        :menu-options="options"
      >
        <Button>right</Button>
      </Dropdown>
    </div>
    <div class="row">
      <Dropdown
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
        :menu-options="options"
      >
        <Button>left-end</Button>
      </Dropdown>
      <Dropdown
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
        :menu-options="options"
      >
        <Button>right-end</Button>
      </Dropdown>
    </div>
    <div class="row center">
      <Dropdown
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
        :menu-options="options"
      >
        <Button>bottom-start</Button>
      </Dropdown>
      <Dropdown
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
        :menu-options="options"
      >
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
        :menu-options="options"
      >
        <Button>bottom-end</Button>
      </Dropdown>
    </div>
  </div>
</template>


<style>
.dropdown-base-box {
  width: 600px;
}
.dropdown-base-box .row {
  display: flex;
  justify-content: space-between;
}
.dropdown-base-box .center {
  justify-content: center;
}
.dropdown-base-box .box-item {
  margin: 10px 10px;
}
</style>