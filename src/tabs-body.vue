<template>
    <div class="tags-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuluTagsBody',
        inject:['eventBus'],
        created() {

        }
    }
</script>
<style lang="scss" scoped>
    .tags-body{}
</style>