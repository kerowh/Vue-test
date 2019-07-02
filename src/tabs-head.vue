<template>
    <div class="tags-head">
        <slot></slot>
        <div class="line" ref="line"></div>
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
            this.eventBus.$on('update:selected',(item,vm)=>{
                let{width,height}=vm.$el.getBoundingClientRect()
                console.log(width);
                console.log(height);
            })
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height:40px;
    $blue:blue;
    .tags-head{
        display: flex;
        height:$tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        position: relative;
        >.line{
            position: absolute;
            bottom: 0;
            border-bottom:1px solid $blue;
            width: 100px;
        }
        >.actions-wrapper{
            /*这个可以让元素往右，记住就行*/
            margin-left: auto;
        }
    }
</style>