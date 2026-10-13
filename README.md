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

