<script setup>
import FeatureCarousel from './FeatureCarousel.vue'

defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="case-article">
    <div class="case-hero-copy" data-case-section="overview">
      <span class="eyebrow">{{ project.eyebrow }}</span>
      <h2>{{ project.title }}</h2>
      <p>{{ project.intro }}</p>
      <div class="tag-row">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>

    <section class="story-block" data-case-section="story">
      <h3>我在做什么</h3>
      <p>{{ project.story }}</p>
    </section>

    <section data-case-section="features">
      <h3 class="case-section-title">功能亮点</h3>
      <FeatureCarousel :cards="project.featureCards" />
    </section>

    <section data-case-section="thinking">
      <h3 class="case-section-title">设计思路</h3>
      <div class="thinking-grid">
        <article v-for="item in project.thinking" :key="item.title" class="thinking-card">
          <b>{{ item.title }}</b>
          <span>{{ item.body }}</span>
        </article>
      </div>
    </section>

    <section data-case-section="tech">
      <h3 class="case-section-title">涉及技术栈</h3>
      <div class="tech-cloud">
        <span v-for="tech in project.techStack" :key="tech">{{ tech }}</span>
      </div>
    </section>
  </article>
</template>
