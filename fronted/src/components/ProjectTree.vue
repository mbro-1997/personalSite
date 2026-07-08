<script setup>
import { computed, ref, watch } from 'vue'

const sectionItems = [
  { id: 'overview', name: '项目概览', summary: '标题、背景、项目标签。' },
  { id: 'story', name: '我在做什么', summary: '项目目标、业务拆解和个人职责。' },
  { id: 'features', name: '功能亮点', summary: '页面卡片、功能说明和关键截图。' },
  { id: 'thinking', name: '设计思路', summary: '对象、流程、状态和交付边界。' },
  { id: 'tech', name: '涉及技术栈', summary: '前端、后端、数据和部署能力。' },
]

const props = defineProps({
  items: { type: Array, required: true },
  activeId: { type: String, required: true },
})

const emit = defineEmits(['select', 'section'])

const level = ref('projects')

const activeProject = computed(
  () => props.items.find((item) => item.id === props.activeId) ?? props.items[0],
)

const selectProject = (id) => {
  emit('select', id)
  level.value = 'sections'
}

const backToProjects = () => {
  level.value = 'projects'
}

watch(
  () => props.items,
  () => {
    level.value = 'projects'
  },
)
</script>

<template>
  <aside class="project-tree-card">
    <div class="tree-header">
      <button
        v-if="level === 'sections'"
        type="button"
        class="tree-back"
        aria-label="返回项目列表"
        @click="backToProjects"
      >
        ‹
      </button>
      <div>
        <h2>{{ level === 'projects' ? '项目树' : activeProject.name }}</h2>
        <p>{{ level === 'projects' ? '选择一个项目进入结构导览' : '项目内容导览' }}</p>
      </div>
    </div>

    <Transition name="tree-fade" mode="out-in">
      <ul v-if="level === 'projects'" class="project-tree" key="projects">
        <li v-for="item in items" :key="item.id" class="tree-node" :class="{ active: item.id === activeId }">
          <button type="button" class="tree-button" @click="selectProject(item.id)">
            <span class="tree-dot"></span>
            <span>
              <b>{{ item.name }}</b>
              <small>{{ item.summary }}</small>
            </span>
          </button>
        </li>
      </ul>

      <ul v-else class="project-tree section-tree" key="sections">
        <li v-for="item in sectionItems" :key="item.id" class="tree-node section-node">
          <button type="button" class="tree-button" @click="$emit('section', item.id)">
            <span class="tree-dot"></span>
            <span>
              <b>{{ item.name }}</b>
              <small>{{ item.summary }}</small>
            </span>
          </button>
        </li>
      </ul>
    </Transition>
  </aside>
</template>
