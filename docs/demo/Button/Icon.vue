<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <Button type="primary" icon="pen-to-square"></Button>
  <Button type="primary" icon="share-nodes"></Button>
  <Button type="primary" icon="far fa-trash-can"></Button>
  <Button type="primary" icon="magnifying-glass"> Search </Button>
  <Button type="primary">
    Upload
    <Icon class="cray-icon--right" icon="upload"></Icon>
  </Button>

</template>

<style>

</style>