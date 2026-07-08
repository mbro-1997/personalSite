<script setup>
import { computed, nextTick, ref } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
import ProjectTree from '../components/ProjectTree.vue'
import CaseArticle from '../components/CaseArticle.vue'
import { projects } from '../data/site'

const activeProjectId = ref(projects[0].id)
const activeProject = computed(
  () => projects.find((project) => project.id === activeProjectId.value) ?? projects[0],
)

const scrollToSection = async (sectionId) => {
  await nextTick()
  document
    .querySelector(`[data-case-section="${sectionId}"]`)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section class="view-stack">
    <SectionTitle
      eyebrow="CASES"
      title="项目案例"
      description="先用项目树组织成果，再进入具体案例文章。这里的内容后续可以替换成真实项目截图和复盘。"
    />

    <div class="cases-layout">
      <ProjectTree
        :items="projects"
        :active-id="activeProjectId"
        @select="activeProjectId = $event"
        @section="scrollToSection"
      />
      <CaseArticle :project="activeProject" />
    </div>
  </section>
</template>
