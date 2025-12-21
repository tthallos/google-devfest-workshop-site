# 2025 Google DevFest 技术博客

> 王大波的技术随笔 - 关于 AI、浏览器与开发者工具的思考

## 项目简介

这是一个基于 [Astro](https://astro.build) 构建的静态博客网站，记录了在 2025 Google DevFest 上的三场演讲内容：

- **Google Antigravity：当 AI 学会了写代码** - 介绍 Google Antigravity IDE、Gemini 3、AI Studio 和 Gemma 开源模型
- **Prompt API 与 Nano：浏览器里的 AI 革命** - 探讨浏览器内置 AI 模型和设备端推理技术
- **Chrome DevTools MCP：让 AI 看见你的浏览器** - 解析 MCP 协议原理和 DevTools 集成方案

## 技术栈

- **框架**: Astro 5.x
- **样式**: 自定义 CSS (Blueprint 深色主题)
- **部署**: GitHub Pages + GitHub Actions
- **字体**: Inter + JetBrains Mono

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321/google-devfest-workshop-site

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录

### 预览生产版本

```bash
npm run preview
```

## 部署到 GitHub Pages

### 自动部署

推送代码到 `master` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

### 首次部署配置

1. 创建 GitHub 仓库 `google-devfest-workshop-site`
2. 推送代码到 `master` 分支
3. 进入仓库 **Settings** → **Pages**
4. **Source** 选择 **GitHub Actions**
5. 等待 Actions 完成部署

部署完成后访问：https://tthallos.github.io/google-devfest-workshop-site

### 手动触发部署

在 GitHub 仓库的 **Actions** 标签页，选择 "Deploy to GitHub Pages" workflow，点击 "Run workflow" 按钮。

## 项目结构

```
google-devfest-workshop-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── public/
│   └── favicon.svg             # 网站图标
├── src/
│   ├── components/
│   │   └── PostCard.astro      # 文章卡片组件
│   ├── layouts/
│   │   ├── BaseLayout.astro    # 基础布局
│   │   └── BlogPostLayout.astro # 博客文章布局
│   ├── pages/
│   │   ├── index.astro         # 首页
│   │   └── blog/               # 博客文章页面
│   │       ├── google-antigravity-ai-products.md
│   │       ├── prompt-nano-banana.md
│   │       └── chrome-devtools-mcp.md
│   └── styles/
│       └── global.css          # 全局样式（Blueprint 主题）
├── astro.config.mjs            # Astro 配置
├── package.json
└── README.md
```

## 设计特色

### Blueprint 深色主题

- **深海蓝背景**: `#0A1929` 营造专业技术氛围
- **网格线背景**: 40px × 40px 半透明青蓝色网格，呈现经典蓝图风格
- **青色高亮**: `#00CCFF` 作为品牌色贯穿始终
- **高对比度**: 深色背景配合浅色文字，优秀的可读性

### 响应式设计

- 移动端优化布局
- 自适应文章卡片网格
- 合理的字体大小和间距

## 作者

**王大波** - 一个热爱代码与写作的前端工程师

## License

MIT
