<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main class="page-shell">
    <RouterView />
  </main>
  <SiteFooter />
</template>
