<template>
    <div class="tags-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions" class="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'GuluTagsHead',
        inject:['eventBus'],
        created() {

        }
    }
</script>
<style lang="scss" scoped>
    $tab-height:40px;
    .tags-head{
        display: flex;
        height:$tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        >.actions-wrapper{
            /*这个可以让元素往右，记住就行*/
            margin-left: auto;
        }
    }
</style>