<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  cards: { type: Array, required: true },
})

const currentIndex = ref(0)

const currentCard = computed(() => props.cards[currentIndex.value] ?? props.cards[0])

const goTo = (index) => {
  const total = props.cards.length
  currentIndex.value = (index + total) % total
}

watch(
  () => props.cards,
  () => {
    currentIndex.value = 0
  },
)
</script>

<template>
  <div class="feature-carousel" aria-label="功能亮点轮播">
    <div class="carousel-stage">
      <article v-if="currentCard" class="feature-card">
        <div class="window-bar">
          <i></i>
          <i></i>
          <i></i>
          <span>{{ currentCard.title }}</span>
        </div>
        <div class="feature-card-body">
          <img :src="currentCard.image" :alt="currentCard.title" />
          <div class="feature-copy">
            <span class="feature-count">{{ currentIndex + 1 }} / {{ cards.length }}</span>
            <h4>{{ currentCard.title }}</h4>
            <p>{{ currentCard.caption }}</p>
          </div>
        </div>
      </article>
    </div>

    <div class="carousel-controls">
      <button type="button" aria-label="上一张功能卡片" @click="goTo(currentIndex - 1)">‹</button>
      <div class="carousel-dots" aria-hidden="true">
        <span
          v-for="(_, index) in cards"
          :key="index"
          :class="{ active: index === currentIndex }"
        ></span>
      </div>
      <button type="button" aria-label="下一张功能卡片" @click="goTo(currentIndex + 1)">›</button>
    </div>
  </div>
</template>
