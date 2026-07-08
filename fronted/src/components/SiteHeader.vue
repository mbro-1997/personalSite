<script setup>
import { navItems } from '../data/site'
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="mbro 首页">
      <span class="brand-mark" aria-hidden="true">
        <i class="hair"></i>
        <i class="face"></i>
        <i class="eye left"></i>
        <i class="eye right"></i>
        <i class="body"></i>
      </span>
      <span>
        <strong>mbro</strong>
        <small>全站式软件工程师</small>
      </span>
    </RouterLink>

    <nav class="site-nav" aria-label="主导航">
      <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
