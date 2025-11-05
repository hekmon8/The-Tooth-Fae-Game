# Contributing Guidelines

> Help us grow the Awesome Indie Games Collection by contributing documentation, translations, and improvements

[English](#english) | [简体中文](#简体中文)

---

## English

Thank you for considering contributing to the Awesome Indie Games Collection! This guide will help you understand our documentation standards and submission process.

### How to Add a New Game

Adding documentation for a new indie game is one of the most valuable contributions you can make. Follow these steps:

#### 1. Create Game Directory Structure

```bash
games/
└── your-game-name/
    ├── README.md                    # English overview
    ├── README.zh-CN.md              # Chinese overview
    ├── GAMEPLAY_GUIDE.md            # English gameplay guide
    ├── GAMEPLAY_GUIDE.zh-CN.md      # Chinese gameplay guide
    ├── STRATEGY_TIPS.md             # English strategy tips
    ├── STRATEGY_TIPS.zh-CN.md       # Chinese strategy tips
    ├── TECHNICAL_SPECS.md           # English technical specs
    ├── TECHNICAL_SPECS.zh-CN.md     # Chinese technical specs
    ├── COMMUNITY_RESOURCES.md       # English community resources
    └── COMMUNITY_RESOURCES.zh-CN.md # Chinese community resources
```

#### 2. Add Game Metadata

Each game's `README.md` must include:

- **Game Title**: Clear, official name
- **Developer Information**: Studio/creator name and links
- **Release Date**: Original release or major update date
- **Genre Tags**: 3-5 descriptive genre labels
- **Platform Availability**: Browser, Windows, macOS, Linux, etc.
- **Rating**: Community rating (if available)
- **Quick Links**: Official page, itch.io, Steam, etc.
- **Game Description**: 150-200 word overview highlighting unique features
- **Play Now Link**: Direct link to [PlayTheToothFae.com](https://playthetoothfae.com) game page

#### 3. Create Comprehensive Documentation

**Gameplay Guide** (800-1200 words):
- Game mechanics explained in detail
- Control schemes for all platforms
- Objectives and win conditions
- Difficulty progression
- Accessibility features

**Strategy Tips** (600-900 words):
- Advanced techniques and tricks
- Common mistakes to avoid
- Speedrunning strategies (if applicable)
- Achievement/completion guides
- Community-discovered secrets

**Technical Specifications** (400-600 words):
- System requirements
- Development tools used
- Game engine information
- Performance optimization tips
- Known technical issues and workarounds

**Community Resources** (300-500 words):
- Official developer links
- Video walkthroughs and Let's Plays
- Community forums and Discord servers
- Fan-made content and mods
- Reviews and media coverage

#### 4. Add Translations

All documentation must be available in both English and Simplified Chinese (简体中文):

- Use professional translation tools or native speakers
- Maintain consistent terminology across translations
- Preserve formatting, links, and structure
- Test all translated links to ensure they work

#### 5. Submit Pull Request

Once your documentation is complete:

1. Fork this repository
2. Create a feature branch: `git checkout -b add-game-name`
3. Add your game documentation
4. Commit with clear messages: `git commit -m "docs: add documentation for Game Name"`
5. Push to your fork: `git push origin add-game-name`
6. Open a Pull Request with:
   - Clear title: "Add documentation for [Game Name]"
   - Description of the game and why it belongs in the collection
   - Checklist confirming all documentation is complete

### Documentation Format Standards

#### Markdown Style Guide

- **Headings**: Use `#` for title, `##` for major sections, `###` for subsections
- **Lists**: Use `-` for unordered lists, `1.` for ordered lists
- **Emphasis**: Use `**bold**` for important terms, `*italic*` for emphasis
- **Code**: Use `` `inline code` `` for game commands, ```code blocks``` for multi-line examples
- **Links**: Use descriptive anchor text, avoid "click here"
- **Images**: Use WebP format, include alt text, optimize for web (<500KB per image)

#### Image Optimization

All images must follow these guidelines:

- **Format**: WebP (primary), PNG (fallback for transparency)
- **Dimensions**: Max 1920x1080 for screenshots, 800x600 for thumbnails
- **File Size**: Under 500KB per image, under 200KB for thumbnails
- **Naming**: Use kebab-case (e.g., `gameplay-screenshot-1.webp`)
- **Alt Text**: Descriptive, keyword-rich alternative text for accessibility

#### Link Formatting Rules

- **Internal Links**: Use relative paths (e.g., `./games/tooth-fae/README.md`)
- **External Links**: Use full URLs with `https://`
- **Game Website Links**: Link to [PlayTheToothFae.com](https://playthetoothfae.com) game pages (3-5 per page)
- **Anchor Links**: Use lowercase with hyphens (e.g., `#how-to-play`)
- **Link Text**: Mix natural anchor text variations:
  - Game name: "The Tooth Fae"
  - Action phrases: "play online", "download game", "learn more"
  - Generic: "official website", "game page"

#### SEO Best Practices

- **Title Optimization**: Include game name and primary keyword
- **Meta Descriptions**: 150-160 characters summarizing page content
- **Keyword Density**: 1-2% for primary keywords, avoid stuffing
- **Header Structure**: Logical H1 → H2 → H3 hierarchy
- **Content Length**: 800+ words for main pages, 300+ for supporting pages
- **Internal Linking**: 3-5 relevant internal links per page

### Internal Linking Strategy

Strategic internal linking improves navigation and SEO. Follow these guidelines:

#### Website Link Integration

Each game documentation page should include **3-5 links** to [PlayTheToothFae.com](https://playthetoothfae.com):

- **Game Page**: Direct link to the game's play page
- **Category Pages**: Link to relevant genre/category pages
- **Related Games**: Link to similar games in the collection
- **Homepage**: Occasional links to the main site

#### Link Placement Best Practices

- **Introduction Section**: Include 1 game page link in first paragraph
- **Gameplay Sections**: Add 1-2 contextual links to related content
- **Strategy Sections**: Link to advanced guides or community resources
- **Conclusion**: Include 1 "play now" or "learn more" call-to-action

#### Anchor Text Variations

Mix anchor text types to appear natural:

- **Exact Match**: "The Tooth Fae" (20%)
- **Partial Match**: "play The Tooth Fae online" (30%)
- **Branded**: "PlayTheToothFae.com" (20%)
- **Generic**: "play online", "game page", "official website" (30%)

#### Section Anchor Links

Use anchor links for table of contents and navigation:

```markdown
## Table of Contents

- [How to Play](#how-to-play)
- [Game Controls](#game-controls)
- [Strategy Tips](#strategy-tips)
- [Technical Information](#technical-information)
```

### PR Submission Process

#### Before Submitting

1. **Self-Review**: Check all links, formatting, and spelling
2. **Test Locally**: Preview Markdown rendering (GitHub, VSCode, etc.)
3. **Run Link Checker**: Verify all external links work
4. **Check Translations**: Ensure Chinese version is complete and accurate
5. **Optimize Images**: Confirm all images meet size/format requirements

#### Pull Request Template

Use this template when opening a PR:

```markdown
## Description

Add comprehensive documentation for [Game Name], a [genre] game by [Developer].

## Checklist

- [ ] Created complete game directory structure
- [ ] Added English documentation (5 core files)
- [ ] Added Chinese translations (5 core files)
- [ ] Optimized all images (WebP format, <500KB)
- [ ] Verified all external links work
- [ ] Included 3-5 PlayTheToothFae.com links per page
- [ ] Used proper Markdown formatting
- [ ] Followed SEO best practices
- [ ] Tested locally and reviewed for errors

## Why This Game Belongs

[Explain why this game should be in the collection - unique features, community interest, quality, etc.]

## Additional Notes

[Any special considerations, missing information, or areas needing feedback]
```

#### After Submission

- **Respond to Feedback**: Address reviewer comments promptly
- **Make Requested Changes**: Update your branch with fixes
- **Stay Engaged**: Monitor discussion and answer questions
- **Celebrate**: Your contribution helps indie developers reach more players!

### Code of Conduct

- **Be Respectful**: Treat all contributors with kindness and professionalism
- **Stay Family-Friendly**: Keep all content appropriate for ages 13+
- **Give Credit**: Attribute sources, images, and information properly
- **Follow Guidelines**: Adhere to documentation standards and formatting rules
- **Collaborate**: Work together to improve documentation quality

### Questions or Help?

- **GitHub Issues**: Open an issue for questions or discussions
- **Pull Request Comments**: Ask questions directly in your PR
- **Community Support**: Check existing issues for similar questions

---

## 简体中文

感谢您考虑为独立游戏精选合集做出贡献!本指南将帮助您了解我们的文档标准和提交流程。

### 如何添加新游戏

为新的独立游戏添加文档是您可以做出的最有价值的贡献之一。请遵循以下步骤:

#### 1. 创建游戏目录结构

```bash
games/
└── your-game-name/
    ├── README.md                    # 英文概述
    ├── README.zh-CN.md              # 中文概述
    ├── GAMEPLAY_GUIDE.md            # 英文游戏指南
    ├── GAMEPLAY_GUIDE.zh-CN.md      # 中文游戏指南
    ├── STRATEGY_TIPS.md             # 英文策略技巧
    ├── STRATEGY_TIPS.zh-CN.md       # 中文策略技巧
    ├── TECHNICAL_SPECS.md           # 英文技术规格
    ├── TECHNICAL_SPECS.zh-CN.md     # 中文技术规格
    ├── COMMUNITY_RESOURCES.md       # 英文社区资源
    └── COMMUNITY_RESOURCES.zh-CN.md # 中文社区资源
```

#### 2. 添加游戏元数据

每个游戏的 `README.md` 必须包括:

- **游戏标题**: 清晰的官方名称
- **开发者信息**: 工作室/创作者名称和链接
- **发布日期**: 原始发布日期或重大更新日期
- **类型标签**: 3-5 个描述性类型标签
- **平台可用性**: 浏览器、Windows、macOS、Linux 等
- **评分**: 社区评分(如果可用)
- **快速链接**: 官方页面、itch.io、Steam 等
- **游戏描述**: 150-200 字概述,突出独特功能
- **立即游玩链接**: 直接链接到 [PlayTheToothFae.com](https://playthetoothfae.com) 游戏页面

#### 3. 创建全面的文档

**游戏指南** (800-1200 字):
- 详细解释游戏机制
- 所有平台的控制方案
- 目标和胜利条件
- 难度进展
- 可访问性功能

**策略技巧** (600-900 字):
- 高级技术和技巧
- 要避免的常见错误
- 速通策略(如适用)
- 成就/完成指南
- 社区发现的秘密

**技术规格** (400-600 字):
- 系统要求
- 使用的开发工具
- 游戏引擎信息
- 性能优化技巧
- 已知技术问题和解决方法

**社区资源** (300-500 字):
- 官方开发者链接
- 视频攻略和实况游戏
- 社区论坛和 Discord 服务器
- 粉丝制作的内容和模组
- 评论和媒体报道

#### 4. 添加翻译

所有文档必须同时提供英文和简体中文版本:

- 使用专业翻译工具或母语人士
- 在翻译中保持一致的术语
- 保留格式、链接和结构
- 测试所有翻译的链接以确保它们有效

#### 5. 提交拉取请求

完成文档后:

1. Fork 此仓库
2. 创建功能分支: `git checkout -b add-game-name`
3. 添加您的游戏文档
4. 使用清晰的消息提交: `git commit -m "docs: add documentation for Game Name"`
5. 推送到您的 fork: `git push origin add-game-name`
6. 打开拉取请求,包含:
   - 清晰的标题: "Add documentation for [Game Name]"
   - 游戏描述及其为何属于该合集
   - 确认所有文档完整的检查清单

### 文档格式标准

#### Markdown 样式指南

- **标题**: 使用 `#` 作为标题,`##` 作为主要部分,`###` 作为子部分
- **列表**: 使用 `-` 作为无序列表,`1.` 作为有序列表
- **强调**: 使用 `**粗体**` 表示重要术语,`*斜体*` 表示强调
- **代码**: 使用 `` `行内代码` `` 表示游戏命令,```代码块``` 表示多行示例
- **链接**: 使用描述性锚文本,避免"点击这里"
- **图片**: 使用 WebP 格式,包含 alt 文本,优化网页(每张图片 <500KB)

#### 图片优化

所有图片必须遵循以下准则:

- **格式**: WebP(主要),PNG(透明度回退)
- **尺寸**: 截图最大 1920x1080,缩略图 800x600
- **文件大小**: 每张图片小于 500KB,缩略图小于 200KB
- **命名**: 使用 kebab-case(例如,`gameplay-screenshot-1.webp`)
- **Alt 文本**: 描述性的、富含关键词的替代文本以提高可访问性

#### 链接格式规则

- **内部链接**: 使用相对路径(例如,`./games/tooth-fae/README.zh-CN.md`)
- **外部链接**: 使用带有 `https://` 的完整 URL
- **游戏网站链接**: 链接到 [PlayTheToothFae.com](https://playthetoothfae.com) 游戏页面(每页 3-5 个)
- **锚链接**: 使用小写和连字符(例如,`#how-to-play`)
- **链接文本**: 混合使用自然锚文本变体:
  - 游戏名称: "牙仙"
  - 动作短语: "在线游玩"、"下载游戏"、"了解更多"
  - 通用: "官方网站"、"游戏页面"

#### SEO 最佳实践

- **标题优化**: 包含游戏名称和主要关键词
- **元描述**: 150-160 个字符总结页面内容
- **关键词密度**: 主要关键词 1-2%,避免堆砌
- **标题结构**: 逻辑 H1 → H2 → H3 层次结构
- **内容长度**: 主要页面 800+ 字,支持页面 300+ 字
- **内部链接**: 每页 3-5 个相关内部链接

### 内部链接策略

战略性内部链接可改善导航和 SEO。请遵循以下准则:

#### 网站链接集成

每个游戏文档页面应包含 **3-5 个链接**到 [PlayTheToothFae.com](https://playthetoothfae.com):

- **游戏页面**: 直接链接到游戏的游玩页面
- **类别页面**: 链接到相关类型/类别页面
- **相关游戏**: 链接到合集中的相似游戏
- **主页**: 偶尔链接到主站点

#### 链接放置最佳实践

- **介绍部分**: 在第一段中包含 1 个游戏页面链接
- **游戏玩法部分**: 添加 1-2 个相关内容的上下文链接
- **策略部分**: 链接到高级指南或社区资源
- **结论**: 包含 1 个"立即游玩"或"了解更多"的行动号召

#### 锚文本变体

混合使用锚文本类型以显得自然:

- **精确匹配**: "牙仙" (20%)
- **部分匹配**: "在线游玩牙仙" (30%)
- **品牌**: "PlayTheToothFae.com" (20%)
- **通用**: "在线游玩"、"游戏页面"、"官方网站" (30%)

#### 章节锚链接

使用锚链接作为目录和导航:

```markdown
## 目录

- [如何游玩](#如何游玩)
- [游戏控制](#游戏控制)
- [策略技巧](#策略技巧)
- [技术信息](#技术信息)
```

### PR 提交流程

#### 提交前

1. **自我审查**: 检查所有链接、格式和拼写
2. **本地测试**: 预览 Markdown 渲染(GitHub、VSCode 等)
3. **运行链接检查器**: 验证所有外部链接有效
4. **检查翻译**: 确保中文版本完整准确
5. **优化图片**: 确认所有图片符合大小/格式要求

#### 拉取请求模板

打开 PR 时使用此模板:

```markdown
## 描述

为 [游戏名称] 添加全面文档,[开发者] 开发的 [类型] 游戏。

## 检查清单

- [ ] 创建完整的游戏目录结构
- [ ] 添加英文文档(5 个核心文件)
- [ ] 添加中文翻译(5 个核心文件)
- [ ] 优化所有图片(WebP 格式,<500KB)
- [ ] 验证所有外部链接有效
- [ ] 每页包含 3-5 个 PlayTheToothFae.com 链接
- [ ] 使用正确的 Markdown 格式
- [ ] 遵循 SEO 最佳实践
- [ ] 本地测试并审查错误

## 为什么这个游戏属于合集

[解释为什么这个游戏应该在合集中 - 独特功能、社区兴趣、质量等]

## 附加说明

[任何特殊考虑、缺失信息或需要反馈的领域]
```

#### 提交后

- **响应反馈**: 及时处理审查者的评论
- **进行请求的更改**: 使用修复更新您的分支
- **保持参与**: 监控讨论并回答问题
- **庆祝**: 您的贡献帮助独立开发者接触更多玩家!

### 行为准则

- **尊重他人**: 以善意和专业精神对待所有贡献者
- **保持家庭友好**: 保持所有内容适合 13 岁以上人群
- **给予信用**: 正确归属来源、图片和信息
- **遵循准则**: 遵守文档标准和格式规则
- **协作**: 共同努力提高文档质量

### 问题或帮助?

- **GitHub Issues**: 为问题或讨论打开一个 issue
- **拉取请求评论**: 直接在您的 PR 中提问
- **社区支持**: 检查现有 issues 以获取类似问题

---

*Last Updated: November 2025 • 最后更新: 2025 年 11 月*
