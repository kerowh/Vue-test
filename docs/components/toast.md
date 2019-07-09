---
title: Toast
---
# 页面弹出
---
## 自动关闭

### 预览
---
<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

#### 代码
---
````
<g-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'center'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
````
## 设置关闭回调功能

### 预览
---
<ClientOnly>
  <toast-demo2></toast-demo2>
</ClientOnly>

#### 代码
---
````
<div>
    <g-button @click="onClickButton">上方弹出</g-button>
</div>

methods: {
  onClickButton () {
    this.$toast('你知道我在等你吗？', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('他说知道了')
        }
      }
    })
  }
},
````
