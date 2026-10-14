# aboutme

个人介绍静态网站，支持中文、日文和英文三种语言切换。

## 项目结构

- index.html: 页面入口，负责渲染内容与语言切换
- project.html: 个人项目详情页（通过 ?id= 指定项目）
- scripts/site.js: 两个页面共用的深色模式切换与导航下拉菜单
- i18n/zh.json: 中文文案
- i18n/ja.json: 日文文案
- i18n/en.json: 英文文案
- stylesheets/page-style.css: 页面样式（浅色/深色主题变量、移动端适配）
- static/img/description/my_pic.PNG: 头像图片

## i18n 说明

文案已经从页面中抽离到 i18n 目录：

- i18n/zh.json
- i18n/ja.json
- i18n/en.json

如果需要新增字段，请在三个语言文件中保持同样的 key 结构。

个人项目（`experience.personalProjects.items`）的详情页话题有两种写法：

- `detail.topics`：普通列表，按顺序显示
- `detail.topicGroups`：分组列表，每组包含 `title` 和 `items`，在详情页显示为可折叠的分组。条目写成 `"01_标题"` 的形式，编号会显示为标签；如果项目设置了 `scriptUrl`（例如 `.../Numpy_{n}.py`），`{n}` 会被替换为编号，条目会链接到对应的脚本

修改 CSS 或 JS 后，请同步更新 `index.html` 和 `project.html` 中引用链接的 `?v=` 版本号，避免浏览器继续使用缓存的旧文件。

## 本地预览

由于页面会通过 fetch 读取本地 JSON，建议用本地静态服务器运行：

```bash
cd aboutme-main
python3 -m http.server 8000
```

然后访问：http://localhost:8000

停止本地服务器：

```bash
Ctrl + C
```

## 部署

可直接部署到 GitHub Pages。

