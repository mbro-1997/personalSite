<script setup>
import { heroProfile } from '../data/site'

const assetBase = `${import.meta.env.BASE_URL}assets/`

const productItems = ['需求调研', '业务建模', 'PRD', '状态机', '交易链路']
const techItems = ['Codex', 'Vue3', 'Spring Boot', 'MySQL', '部署交付']
const productPixels = Array.from({ length: 14 }, (_, index) => index)
const codePixels = Array.from({ length: 16 }, (_, index) => index)

const homeModuleBase = `${assetBase}home-modules/`
const moduleOptionBase = `${assetBase}module-options/`

const productModules = [
  {
    className: 'role-card',
    src: `${homeModuleBase}product-role.svg`,
    alt: '角色建模示意图',
    label: 'ROLE MAP',
  },
  {
    src: `${moduleOptionBase}product/product-01-research-radar.svg`,
    alt: '需求雷达示意图',
    label: 'RESEARCH',
  },
  {
    className: 'flow-card',
    src: `${moduleOptionBase}product/product-05-state-machine.svg`,
    alt: '状态机示意图',
    label: 'STATE FLOW',
  },
  {
    className: 'flow-card',
    src: `${moduleOptionBase}product/product-03-prd-canvas.svg`,
    alt: 'PRD 画布示意图',
    label: 'PRD CANVAS',
  },
]
</script>

<template>
  <section class="draft-hero" aria-label="首页主视觉">
    <svg class="signal-lines" viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden="true">
      <path class="signal-line product-line signal-main" d="M520 258 H470 V208 H420 V178 H360 V158 H296" />
      <path class="signal-line product-line signal-branch" d="M420 208 H352 V248 H304" />
      <path class="signal-line product-line signal-branch" d="M470 258 H410 V330 H334 V350 H294" />
      <path class="signal-line product-line signal-branch" d="M470 258 V412 H354 V432 H304" />
      <path class="signal-line product-accent-line signal-branch" d="M438 190 V128 H382 V104" />
      <path class="signal-line product-accent-line signal-branch" d="M392 330 V388 H364" />
      <path class="signal-line code-line signal-main" d="M680 258 H740 V206 H792 V152 H880 V132 H936" />
      <path class="signal-line code-line signal-branch" d="M792 206 H858 V246 H936" />
      <path class="signal-line code-line signal-branch" d="M740 258 H814 V330 H870 V350 H930" />
      <path class="signal-line code-line signal-branch" d="M740 258 V420 H858 V440 H912" />
      <path class="signal-line code-soft-line signal-branch" d="M762 224 V174 H812" />
      <path class="signal-line code-soft-line signal-branch" d="M814 330 V388 H846" />
      <g class="signal-nodes product-nodes">
        <rect x="514" y="252" width="10" height="10" />
        <rect x="464" y="252" width="12" height="12" />
        <rect x="414" y="202" width="10" height="10" />
        <rect x="354" y="152" width="12" height="12" />
        <rect x="348" y="242" width="9" height="9" />
        <rect x="404" y="324" width="14" height="14" />
        <rect x="348" y="426" width="11" height="11" />
      </g>
      <g class="signal-nodes product-accent-nodes">
        <rect x="376" y="98" width="11" height="11" />
        <rect x="432" y="184" width="7" height="7" />
        <rect x="358" y="382" width="9" height="9" />
        <rect x="322" y="302" width="6" height="6" />
      </g>
      <g class="signal-nodes code-nodes">
        <rect x="676" y="252" width="10" height="10" />
        <rect x="734" y="252" width="12" height="12" />
        <rect x="786" y="200" width="10" height="10" />
        <rect x="874" y="126" width="12" height="12" />
        <rect x="852" y="240" width="10" height="10" />
        <rect x="808" y="324" width="14" height="14" />
        <rect x="852" y="434" width="11" height="11" />
      </g>
      <g class="signal-nodes code-soft-nodes">
        <rect x="806" y="168" width="9" height="9" />
        <rect x="756" y="218" width="7" height="7" />
        <rect x="840" y="382" width="9" height="9" />
        <rect x="898" y="296" width="6" height="6" />
      </g>
    </svg>

    <div class="draft-domain product-domain">
      <svg class="domain-frame" viewBox="0 0 520 460" preserveAspectRatio="none" aria-hidden="true">
        <path d="M22 12 H430 Q444 12 444 26 V32 H482 Q500 32 500 50 V424 Q500 444 480 444 H26 Q8 444 8 426 V34 H22 V12Z" />
        <path class="inner-frame" d="M38 40 H410 Q424 40 424 54 V68 H458 Q472 68 472 82 V398 Q472 416 454 416 H42 Q24 416 24 398 V58 H38 V40Z" />
      </svg>
      <span v-for="pixel in productPixels" :key="pixel" class="float-pixel product-pixel"></span>
      <div class="domain-title">
        <span class="domain-icon product-icon"></span>
        <h2>产品能力</h2>
      </div>
      <div class="domain-body product-body">
        <ul class="domain-list">
          <li v-for="item in productItems" :key="item">
            <span></span>
            <b>{{ item }}</b>
          </li>
        </ul>
        <div class="product-docs">
          <article v-for="module in productModules" :key="module.label" class="doc-card" :class="module.className">
            <span class="module-label">{{ module.label }}</span>
            <img class="module-art" :src="module.src" :alt="module.alt" />
          </article>
        </div>
      </div>
    </div>

    <div class="draft-identity">
      <img class="persona" :src="`${assetBase}persona-pixel-complete-transparent.png`" alt="" />
      <h1>{{ heroProfile.name }}</h1>
      <p class="role">{{ heroProfile.title }}</p>
      <p class="value">{{ heroProfile.value }}</p>
      <div class="cta-row">
        <RouterLink class="button" to="/cases">项目案例</RouterLink>
        <RouterLink class="button" to="/about#contact">联系我</RouterLink>
      </div>
    </div>

    <div class="draft-domain coding-domain">
      <svg class="domain-frame" viewBox="0 0 520 460" preserveAspectRatio="none" aria-hidden="true">
        <path d="M24 12 H496 V34 H508 V420 Q508 444 484 444 H74 V432 H22 Q8 432 8 418 V54 Q8 34 28 34 H24 V12Z" />
        <path class="inner-frame" d="M50 40 H470 V64 H482 V392 Q482 416 458 416 H94 V404 H44 Q24 404 24 384 V80 Q24 62 42 62 H50 V40Z" />
      </svg>
      <span v-for="pixel in codePixels" :key="pixel" class="float-pixel code-pixel"></span>
      <div class="domain-title">
        <span class="domain-icon code-icon">&lt;/&gt;</span>
        <h2>AI Coding / 技术能力</h2>
      </div>
      <div class="domain-body coding-body">
        <div class="code-stack">
          <article class="code-card main-code">
            <img class="module-art code-art" :src="`${moduleOptionBase}coding/coding-01-agent-orchestration.svg`" alt="main.py Agent 编排代码示意图" />
          </article>
          <article class="code-card">
            <img class="module-art code-art" :src="`${moduleOptionBase}coding/coding-09-observability.svg`" alt="日志监控示意图" />
          </article>
          <article class="code-card">
            <img class="module-art code-art" :src="`${moduleOptionBase}coding/coding-06-database-query.svg`" alt="数据库查询示意图" />
          </article>
          <article class="code-card">
            <img class="module-art code-art" :src="`${moduleOptionBase}coding/coding-04-container-deploy.svg`" alt="容器部署示意图" />
          </article>
        </div>
        <ul class="tech-list">
          <li v-for="item in techItems" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
