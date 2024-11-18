<script lang="ts" setup>
import Button from '@/components/Button/Button.vue'
</script>

<template>
  <div class="sizeBlock">
    <Button size="large">Large</Button>
    <Button>Default</Button>
    <Button size="small">Small</Button>
    <Button size="large" icon="magnifying-glass">Search</Button>
    <Button icon="magnifying-glass">Search</Button>
    <Button size="small" icon="magnifying-glass">Search</Button>
  </div>
  <div class="sizeBlock">
    <Button size="large" round>Large</Button>
    <Button round>Default</Button>
    <Button size="small" round>Small</Button>
    <Button size="large" icon="magnifying-glass" round>Search</Button>
    <Button icon="magnifying-glass" round>Search</Button>
    <Button size="small" icon="magnifying-glass" round>Search</Button>
  </div>
  <div class="sizeBlock">
    <Button icon="magnifying-glass" size="large" circle />
    <Button icon="magnifying-glass" circle />
    <Button icon="magnifying-glass" size="small" circle />
  </div>
</template>

<style scpoed>
.sizeBlock {
  margin-bottom: 15px;
}
</style>