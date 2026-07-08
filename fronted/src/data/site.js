const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

export const navItems = [
  { label: '首页', to: '/' },
  { label: '项目案例', to: '/cases' },
  { label: '关于我', to: '/about' },
]

export const heroProfile = {
  name: 'mbro',
  title: '全站式软件工程师',
  value: '把复杂业务，一块一块搭成可交付的软件系统',
}

export const projects = [
  {
    id: 'muhou',
    name: 'MUHOU 道具租赁交易系统',
    summary: '交易链路、库存模型、订单履约、证据仲裁。',
    eyebrow: 'FEATURED CASE',
    title: 'MUHOU 道具租赁交易系统',
    intro:
      '面向舞台道具租赁场景，从微信沟通、人工报价和线下履约中抽象出角色、清单、库存、订单、押金、证据和仲裁机制。',
    tags: ['产品负责人', '需求调研', 'PRD', 'MVP 验证', '数据库设计', '生产部署'],
    story:
      '我把一个依赖微信沟通、人工报价和线下履约的道具租赁业务，拆成可以被系统承载的交易链路。这个项目不是单纯做页面，而是把用户角色、道具资产、租期、押金、订单、证据和结算关系重新梳理，最后落成可演示、可部署、可继续迭代的业务系统。',
    featureCards: [
      {
        title: '案例文章结构',
        image: asset('case-muhou-overview.png'),
        caption: '把背景、问题、方案、结果和复盘放在一个连续叙事里，让读者先理解项目价值。',
      },
      {
        title: '首页成果入口',
        image: asset('case-homepage-overview.png'),
        caption: '首页只承担快速判断：我是谁、我能做什么、哪里可以看到项目成果。',
      },
      {
        title: '产品建模能力',
        image: asset('product-panel-v2.png'),
        caption: '用角色、PRD、流程图、订单状态去表达业务结构，而不是停留在功能列表。',
      },
      {
        title: '工程落地能力',
        image: asset('ai-coding-panel-v2.png'),
        caption: '从代码、接口、数据库到部署状态，把产品方案推进到可以交付的系统形态。',
      },
    ],
    thinking: [
      {
        title: '先定业务对象',
        body: '把方案、道具、SKU、SN、订单、押金、证据拆成清晰对象，避免把复杂业务写成一堆页面。',
      },
      {
        title: '再定交易状态',
        body: '围绕下单、占用、履约、归还、异常、结算设计状态流，让每一步都有系统依据。',
      },
      {
        title: '最后定交付边界',
        body: '把 MVP、管理后台、演示流程、部署验证和后续迭代边界拆开，降低一次性交付风险。',
      },
    ],
    techStack: ['Vue3', 'Spring Boot', 'MySQL', 'REST API', 'RBAC 权限', '订单状态机', 'Docker Compose'],
  },
  {
    id: 'citybrain',
    name: '城市治理数据驾驶舱',
    summary: '多源数据汇聚、指标看板、事件跟踪、移动端协同。',
    eyebrow: 'SIMULATED CASE',
    title: '城市治理数据驾驶舱',
    intro:
      '模拟一个面向城市治理部门的数据驾驶舱项目，把分散事件、处置流程和指标数据汇聚成可观察、可追踪的管理视图。',
    tags: ['数据看板', '事件流转', '指标体系', '权限分层', '移动协同'],
    story:
      '这个项目用于模拟复杂组织里的数据协同场景：不同部门掌握不同数据，管理者需要快速看到异常、趋势和处置状态。我会把它拆成指标中心、事件池、处置链路和复盘报表四个层级，让页面既能展示态势，也能支撑具体操作。',
    featureCards: [
      {
        title: '态势总览',
        image: asset('case-homepage-overview.png'),
        caption: '用首屏看板承接核心指标，突出异常事件、趋势变化和待处理任务。',
      },
      {
        title: '事件处置流',
        image: asset('product-panel-v2.png'),
        caption: '把上报、派发、处理、反馈、归档做成状态流，避免信息散落在聊天和表格里。',
      },
      {
        title: '技术支撑面',
        image: asset('ai-coding-panel-v2.png'),
        caption: '模拟接口聚合、权限校验、数据查询和部署交付这一组工程能力。',
      },
    ],
    thinking: [
      { title: '指标先分层', body: '把领导关注、部门处置、个人任务拆成不同粒度，避免一个页面塞所有指标。' },
      { title: '事件有闭环', body: '每一条事件都要有来源、责任人、状态、证据和结果，方便追踪和复盘。' },
      { title: '看板可下钻', body: '总览不是终点，点击指标后能进入明细、列表或处置页。' },
    ],
    techStack: ['Vue3', 'ECharts', 'Spring Boot', 'MySQL', 'Redis', 'WebSocket', 'RBAC 权限'],
  },
  {
    id: 'ai-knowledge',
    name: '企业知识库智能助手',
    summary: '文档检索、问答助手、知识切片、权限隔离。',
    eyebrow: 'SIMULATED CASE',
    title: '企业知识库智能助手',
    intro:
      '模拟一个企业内部知识库助手，把制度文档、项目材料和FAQ整理成可检索、可引用、可追溯的智能问答系统。',
    tags: ['AI 应用', 'RAG', '知识库', 'Prompt', '权限隔离'],
    story:
      '这个项目关注 AI 能力如何接入真实业务，而不是只做聊天入口。核心是让知识来源可管理、回答依据可追踪、不同角色看到不同内容，并在常见业务问题里形成可复用的工作流。',
    featureCards: [
      {
        title: '知识上传与切片',
        image: asset('product-panel-v2.png'),
        caption: '把文档管理、切片策略、标签和更新机制放到产品流程里，而不是只做上传按钮。',
      },
      {
        title: '问答与引用',
        image: asset('ai-coding-panel-v2.png'),
        caption: '回答不仅给结论，还需要展示引用来源、命中片段和置信度提示。',
      },
      {
        title: '成果展示页',
        image: asset('case-muhou-overview.png'),
        caption: '用案例文章方式说明系统边界、设计过程和落地价值。',
      },
    ],
    thinking: [
      { title: '先管知识源', body: 'AI 问答的质量首先取决于知识入口、版本和权限管理。' },
      { title: '回答要可追溯', body: '用户需要知道答案来自哪里，才能在业务里放心使用。' },
      { title: '场景要收敛', body: '先做高频问题和固定工作流，再逐步扩展开放问答。' },
    ],
    techStack: ['Vue3', 'Node.js', 'Vector DB', 'RAG', 'Prompt Template', 'Tool Calling', '权限控制'],
  },
  {
    id: 'workflow-ops',
    name: '低代码流程编排平台',
    summary: '表单配置、审批流、节点规则、运营后台。',
    eyebrow: 'SIMULATED CASE',
    title: '低代码流程编排平台',
    intro:
      '模拟一个面向内部运营的流程编排平台，用配置化表单和节点规则承接不同业务流程，减少重复开发。',
    tags: ['低代码', '流程引擎', '表单配置', '规则节点', '运营后台'],
    story:
      '这个项目模拟的是“业务变化很快，但研发资源有限”的场景。目标不是追求万能低代码，而是围绕表单、审批、通知、状态和权限这些稳定模块，抽象出一套可复用的配置体系。',
    featureCards: [
      {
        title: '流程设计器',
        image: asset('case-homepage-overview.png'),
        caption: '用节点卡片表达流程步骤、条件分支和流转规则。',
      },
      {
        title: '表单配置',
        image: asset('product-panel-v2.png'),
        caption: '把字段、校验、默认值和权限控制设计成可复用配置。',
      },
      {
        title: '部署与监控',
        image: asset('ai-coding-panel-v2.png'),
        caption: '关注流程上线后的版本、日志、异常和回滚能力。',
      },
    ],
    thinking: [
      { title: '少做万能抽象', body: '低代码最容易失控，应该先限定业务边界和组件范围。' },
      { title: '配置也要治理', body: '每个流程版本、字段变更和节点规则都需要可追踪。' },
      { title: '运营体验优先', body: '让业务人员能看懂、能配置、能检查，是平台价值的核心。' },
    ],
    techStack: ['Vue3', 'TypeScript', 'Workflow Engine', 'JSON Schema', 'Spring Boot', 'MySQL', 'Docker'],
  },
]

export const aboutBlocks = [
  {
    title: '个人叙事',
    body: '这里预留一段关于个人经历、长期方向和做事方式的叙事。后续可以写成更像个人品牌故事，而不是简历简介。',
  },
  {
    title: '能力结构',
    body: '产品分析、业务建模、前后端实现理解、AI Coding 工作流、部署交付与持续复盘。',
  },
  {
    title: '联系入口',
    body: '邮箱、GitHub、项目链接和后续可补充的公开内容入口。',
  },
]

export const techStack = projects[0].techStack
