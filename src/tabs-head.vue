<template>
    <div class="tags-head">
        <slot></slot>
        <slot name="actions"></slot>
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
    .tags-head{}
</style>