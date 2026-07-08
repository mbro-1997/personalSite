<script setup>
defineProps({
  tone: { type: String, default: 'green' },
})
</script>

<template>
  <span class="pixel-icon" :class="tone" aria-hidden="true">
    <i v-for="index in 8" :key="index"></i>
  </span>
</template>
