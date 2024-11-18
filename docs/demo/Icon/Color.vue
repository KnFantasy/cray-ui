<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="rainbow">
    <Icon icon="shrimp" color="#FF0000" size="2x" />
    <Icon icon="shrimp" color="#FFA500" size="3x" />
    <Icon icon="shrimp" color="#FFFF00" size="4x" />
    <Icon icon="shrimp" color="#00FF00" size="5x" />
    <Icon icon="shrimp" color="#007FFF" size="6x" />
    <Icon icon="shrimp" color="#0000FF" size="7x" />
    <Icon icon="shrimp" color="#8B00FF" size="8x" />
  </div>
</template>

<style>
/* .rainbow {
  background-color: #c9c9cd;
} */
.rainbow i {
  margin-right: 10px;
}
</style>