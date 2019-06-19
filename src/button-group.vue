<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        // mounted(){}是只有在我们要加的标签存在时才会调用的函数
        //这里我们使用mounted函数来检测这个vue实例是否是button标签
        //$el是vue特有的标签，只能用来查找vue实例的根标签。
        mounted() {
            for (let node of this.$el.children){
                let name = node.nodeName.toLowerCase()
                if (name!=='button'){
                    console.warn(`g-button-group的子元素应该全都是g-button，而你写的是${name}`)
                }
            }
        }
    }
</script>
<style lang="scss">
    .g-button-group{
        display: inline-flex;
        vertical-align: middle;
        >.g-button{
            border-radius: 0;
        }
    }

    .g-button-group>.g-button:not(:first-child){
        margin-left: -1px;
    }

    .g-button-group>.g-button:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }
    .g-button-group>.g-button:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }

    .g-button-group>.g-button:hover{
        position: relative;
        z-index: 1;
    }
</style>