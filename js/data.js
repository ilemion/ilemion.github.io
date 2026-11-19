/* ============================================================
   个人博客 - 数据文件
   你只需要修改这个文件，就能更新博客内容 ✨
   ============================================================ */

// ---------- 学习日志 ----------
// 每条记录：date 日期 / title 标题 / category 分类 / content 内容（支持 HTML）
const learningLogs = [
  {
    date: "2026-11-18",
    title: "AIQMS · 检索升级与评测归档",
    category: "编程",
    content: `
      经验库检索与新版评分规则已接入正式评测。
      <ul>
        <li>软件报告与生物相容性报告的生成结果及评分均已归档。</li>
        <li>生物相容性报告暂评 <strong>70.50 分</strong>，较上一轮高 7.25 分，评分覆盖率为 90%。</li>
        <li>软件报告已生成，尚未通过结案校验；部分证据与模板仍待复核。</li>
      </ul>
    `
  },
  {
    date: "2026-11-17",
    title: "AIQMS · 版本更新与评测进展",
    category: "编程",
    content: `
      实验版本管理工具更新至 <strong>2.4.6</strong>，macOS 与 Windows 安装包已上传。
      <ul>
        <li>新增网页依据评分、基础项通过门槛及逐项评分细则，补齐历史实验评分明细。</li>
        <li>单文档生成复测完成并归档，部分证据与模板仍待核验。</li>
        <li>经验库页面完成审查，待修复问题已明确。</li>
      </ul>
    `
  },
  {
    date: "2026-11-12",
    title: "AIQMS · 全量文档复测",
    category: "编程",
    content: `
      复测覆盖 17 类文档，生成结果与独立评分已归档，并明确了仍需统一的文档口径。
    `
  },
  {
    date: "2026-11-05",
    title: "AIQMS · 逐章写作验证",
    category: "编程",
    content: `
      已补齐写作记录，确认部分文档可逐章写入。完整流程仍待验证。
    `
  },
  {
    date: "2026-11-04",
    title: "AIQMS · 阶段成果归档",
    category: "编程",
    content: `
      申报分步接口和经验库单入口改造已纳入同一版本基线，阶段性改动总账已归档。
    `
  },
  {
    date: "2026-11-03",
    title: "AIQMS · 语料盘点",
    category: "编程",
    content: `
      语料总览和中国、美国、欧盟分报告已完成，文件清单、重复项和 PDF 检查结果已归档。
    `
  },
  {
    date: "2026-10-30",
    title: "AIQMS · 项目导读成稿",
    category: "编程",
    content: `
      后端、MCP、服务、桌面端与工程五部分导读已完成，记录了主要模块及协作边界。
    `
  },
  {
    date: "2026-10-28",
    title: "AIQMS · 分步写作接口",
    category: "编程",
    content: `
      中国申报工具新增待办、取证、写作和校验接口，并补齐配置检查和契约测试。实际运行验收尚未完成。
    `
  },
  {
    date: "2026-10-26",
    title: "AIQMS · 经验库评测",
    category: "编程",
    content: `
      经验库完成 20 个问题的评测，逐项命中结果已汇总。文档写作耗时分析和长期记忆评测报告已归档。
    `
  },
  {
    date: "2026-10-23",
    title: "AIQMS · 提示词与工具治理",
    category: "编程",
    content: `
      提示词审计已完成，工具职责与调用边界已明确。经验库统一为单一入口，中国与欧盟申报配置已调整，当时尚未统一发布。
    `
  },
  {
    date: "2026-10-20",
    title: "AIQMS · 质量体系工具迁移",
    category: "编程",
    content: `
      QMS Builder 已从技能包迁为可调用的 MCP 服务，保留原有模板和协议。基础契约检查已通过，部分运行环节仍待验收。
    `
  },
  {
    date: "2026-10-08",
    title: "搭建个人博客页面",
    category: "编程",
    content: `
      用原生 HTML + CSS + JS 从零搭建了一个现代化的个人博客主页，重点：
      <ul>
        <li>flex / grid 响应式布局</li>
        <li>CSS 变量管理主题色</li>
        <li>使用 JS 动态渲染数据，方便后续扩展</li>
      </ul>
    `
  },
  {
    date: "2026-10-07",
    title: "复习 federated learning 基础",
    category: "读书笔记",
    content: `
      阅读了《Communication-Efficient Learning of Deep Networks from Decentralized Data》
      (McMahan et al., 2017) 的前两章，重新梳理了 FedAvg 算法流程与 non-IID 问题。
    `
  },
  {
    date: "2026-10-05",
    title: "LeetCode 每日一题：动态规划",
    category: "算法",
    content: `
      完成了「零钱兑换」问题的两种解法：
      <ul>
        <li>自顶向下记忆化搜索</li>
        <li>自底向上动态规划</li>
      </ul>
      对比了时间复杂度，理解了 DP 中"状态定义"的核心地位。
    `
  },
  {
    date: "2026-10-03",
    title: "VS Code 效率插件整理",
    category: "工具",
    content: `
      整理了平时高频使用的 VS Code 插件清单，包括 GitLens、Error Lens、
      REST Client 等，并为 Python/前端分别配了一套 settings。
    `
  },
  {
    date: "2026-09-30",
    title: "完成贪吃蛇小游戏",
    category: "编程",
    content: `
      用 HTML5 Canvas + JavaScript 实现了经典贪吃蛇，支持：
      <ul>
        <li>键盘方向控制</li>
        <li>难度等级（速度切换）</li>
        <li>最高分 localStorage 持久化</li>
      </ul>
    `
  },
  {
    date: "2026-09-28",
    title: "Git 工作流再梳理",
    category: "工具",
    content: `
      总结了适合小团队的 Git 工作流：main + develop + feature 分支模型，
      配合 PR Code Review，记录了常见冲突处理方式。
    `
  },
  {
    date: "2026-09-25",
    title: "GAN 入门笔记",
    category: "读书笔记",
    content: `
      观看了李沐老师的 GAN 讲解并跟着手写了一个简单的 DCGAN，
      对"生成器/判别器博弈"有了更直观的理解。
    `
  }
];

// ---------- GitHub 项目 ----------
// langColor 参考： https://github.com/ozh/github-colors
const projects = [
  {
    name: "datamining-searching_engine",
    desc: "数据挖掘团队项目，负责搜索引擎的构建以及 NLP 文本分析部分。",
    lang: "Python", langColor: "#3572A5",
    stars: 1, forks: 0,
    url: "https://github.com/ilemion/datamining-searching_engine", demo: null
  },
  {
    name: "trajectory-fl",
    desc: "软件工程专业实训团队项目（BIT-SmallTerm2026），联邦学习原型框架。",
    lang: "Python", langColor: "#3572A5",
    stars: 1, forks: 0,
    url: "https://github.com/ilemion/trajectory-fl", demo: null
  },
  {
    name: "iteration-plan",
    desc: "记录大作业三的迭代计划（仓库名为 “-”）。",
    lang: "HTML", langColor: "#e34c26",
    stars: 1, forks: 0,
    url: "https://github.com/ilemion/-", demo: null
  }
];

// ---------- 个人游戏 ----------
// 添加方式示例：
// {
//   name: "游戏名称",
//   desc: "一句话介绍",
//   url: "试玩链接（可为空）", source: "源码链接（可为空）"
// }
const games = [
  {
    name: "Call of Majesty · 王权的呼唤",
    desc: "基于亚瑟王传说的探索解谜 RPG。你扮演失忆的尤瑟王之子亚瑟，在梅林指引下探索三个风格各异的箱庭世界，通过解谜、战斗与 NPC 任务收集王权碎片、找回力量与记忆，最终拔出石中剑，成为命定之王。",
    url: "", source: ""
  }
];
