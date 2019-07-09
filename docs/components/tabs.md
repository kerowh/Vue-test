---
title: Tabs
---
# 标签
---
## 简单用法

### 预览
---
<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

#### 代码
---
````
data:{
    selected: '1'
}

<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">1</g-tabs-item>
    <g-tabs-item name="2">2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">content 1</g-tabs-pane>
    <g-tabs-pane name="2">content 2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
````
