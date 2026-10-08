/* ============================================================
   个人博客 - 主脚本
   注意：数据请编辑 js/data.js
   ============================================================ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ---------- 渲染学习日志 ----------
function renderLogs(filter = "all") {
  const box = $("#logList");
  const list = filter === "all"
    ? learningLogs
    : learningLogs.filter(l => l.category === filter);

  if (list.length === 0) {
    box.innerHTML = `<p style="color:var(--text-dim);padding:12px 0;">暂无该分类的记录。</p>`;
    return;
  }

  box.innerHTML = list.map(item => `
    <div class="log-item">
      <div class="log-date">${item.date} · ${item.category}</div>
      <div class="log-title">${item.title}</div>
      <div class="log-content">${item.content}</div>
    </div>
  `).join("");
}

// ---------- 渲染项目 ----------
function renderProjects() {
  const box = $("#projectList");
  box.innerHTML = projects.map(p => `
    <div class="project-item">
      <div>
        <a class="pi-name" href="${p.url}" target="_blank" rel="noopener">${p.name}</a>
        <div class="pi-desc">${p.desc}</div>
      </div>
      <div class="pi-meta">${p.lang} · ${p.stars} stars</div>
    </div>
  `).join("");
}

// ---------- 渲染游戏 ----------
function renderGames() {
  const box = $("#gameList");
  if (games.length === 0) {
    box.innerHTML = `<p style="color:var(--text-dim);padding:12px 0;">暂无游戏，之后做了会放上来。</p>`;
    return;
  }
  box.innerHTML = games.map(g => `
    <div class="game-item">
      <div class="game-name">${g.name}</div>
      <div class="game-desc">${g.desc}</div>
      <div class="game-links">
        ${g.url ? `<a href="${g.url}" target="_blank" rel="noopener">试玩</a>` : ""}
        ${g.url && g.source ? `<span>/</span>` : ""}
        ${g.source ? `<a href="${g.source}" target="_blank" rel="noopener">源码</a>` : ""}
      </div>
    </div>
  `).join("");
}

// ---------- 移动端菜单 ----------
function setupMobileMenu() {
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  $$("#navLinks a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

// ---------- 分类过滤 ----------
function setupFilter() {
  $$(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderLogs(btn.dataset.filter);
    });
  });
}

// ---------- 页脚年份 ----------
function setupYear() {
  $("#year").textContent = new Date().getFullYear();
}

// ---------- 启动 ----------
document.addEventListener("DOMContentLoaded", () => {
  renderLogs();
  renderProjects();
  renderGames();
  setupMobileMenu();
  setupFilter();
  setupYear();
});
