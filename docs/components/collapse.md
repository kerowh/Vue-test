---
title: Collapse
---
# 手风琴组件
---
## 点击打开（再次点击关闭）

### 预览
---
<ClientOnly>
  <collapse-demo></collapse-demo>
</ClientOnly>

#### 代码
---
````
data:{
    selectedTab:['2'],
}
<g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="标题一" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题二" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题三" name="3">内容3</g-collapse-item>
</g-collapse>
````
---
## 单内容显示

### 预览
---
<ClientOnly>
  <collapse-demo2></collapse-demo2>
</ClientOnly>


#### 代码
---
````
data:{
   selectedTab:['2'],
}
<g-collapse :selected.sync="selectedTab" single>
  <g-collapse-item title="标题一" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标题二" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标题三" name="3">内容3</g-collapse-item>
</g-collapse>
````
---