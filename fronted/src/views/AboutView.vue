<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import { aboutBlocks, techStack } from '../data/site'

const assetBase = `${import.meta.env.BASE_URL}assets/`

const timeline = [
  {
    time: '现在',
    title: '个人品牌站搭建',
    body: '先搭建个人成果展示站结构，后续逐步填充真实项目、截图、复盘和文章。',
  },
  {
    time: '持续实践',
    title: 'AI Coding 与业务系统落地',
    body: '围绕需求拆解、产品建模、页面实现、接口协作和部署验证形成个人工作流。',
  },
  {
    time: '长期方向',
    title: '全站式软件工程师',
    body: '从产品理解到工程交付，把复杂业务沉淀为可运行、可迭代的软件系统。',
  },
]
</script>

<template>
  <section class="view-stack">
    <SectionTitle
      eyebrow="ABOUT"
      title="关于我"
      description="这里先定义个人叙事、能力结构、经历时间线和联系方式的容器，后续再补完整内容。"
    />

    <div class="about-layout">
      <section class="about-card">
        <img class="about-persona" :src="`${assetBase}persona-pixel-complete-transparent.png`" alt="" />
        <h2>mbro</h2>
        <p>全站式软件工程师</p>
        <div id="contact" class="contact-box">
          <b>联系我</b>
          <span>邮箱、GitHub、项目链接等公开入口待补充。</span>
        </div>
      </section>

      <section class="about-blocks">
        <article v-for="block in aboutBlocks" :key="block.title" class="about-block">
          <h2>{{ block.title }}</h2>
          <p>{{ block.body }}</p>
        </article>
      </section>
    </div>

    <section class="about-two-col">
      <div class="timeline">
        <h2>经历时间线</h2>
        <article v-for="item in timeline" :key="item.title" class="timeline-item">
          <span>{{ item.time }}</span>
          <div>
            <b>{{ item.title }}</b>
            <p>{{ item.body }}</p>
          </div>
        </article>
      </div>

      <div class="skill-panel">
        <h2>能力矩阵</h2>
        <div class="tech-cloud">
          <span v-for="tech in techStack" :key="tech">{{ tech }}</span>
        </div>
      </div>
    </section>
  </section>
</template>
