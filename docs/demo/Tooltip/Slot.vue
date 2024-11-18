<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>

<template>
<div class="basic block">
  <Tooltip 
    content="hello tooltip"
  >
    <Button> hover me </Button>
    <template #content>
      <h5>new style</h5>
      multiple lines<br />
      second line<br />
    </template>
  </Tooltip>
</div>
</template>