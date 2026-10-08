/* ============================================================
   个人博客 - 数据文件
   你只需要修改这个文件，就能更新博客内容 ✨
   ============================================================ */

// ---------- 学习日志 ----------
// 每条记录：date 日期 / title 标题 / category 分类 / content 内容（支持 HTML）
const learningLogs = [
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
