---
title: Layout
---
# 布局
---
## 行级布局

### 预览
---
<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>

#### 代码
---
````
<g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">header</g-header>
    <g-content style="height: 100px; background:deepskyblue;">content</g-content>
    <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
</g-layout>
````
## 可关闭的弹窗

### 预览
---
<ClientOnly>
  <layout-demo2></layout-demo2>
</ClientOnly>

#### 代码
---
````
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-layout>
        <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
            sider
        </g-sider>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
````
## 左右布局

### 预览
---
<ClientOnly>
  <layout-demo3></layout-demo3>
</ClientOnly>

#### 代码
---
````
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-sider style=" background:#ddd; width:200px; color: black;">
        sider
    </g-sider>
    <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">
            header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
            footer
        </g-footer>
    </g-layout>
</g-layout>
````