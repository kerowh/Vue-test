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
    mounted() {
      this.eventBus.$on('update:selected',(item,vm)=>{
        let{width}=vm.$el.getBoundingClientRect()
        let left = vm.$el.offsetLeft
        this.$refs.line.style.width=`${width}px`
        this.$refs.line.style.left=`${left}px`
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
    border-bottom: 1px solid #eeeeee;
    position: relative;
    >.line{
      position: absolute;
      bottom: 0;
      border-bottom:1px solid $blue;
      transition: all 350ms;
    }
    >.actions-wrapper{
      /*这个可以让元素往右，记住就行*/
      flex-shrink: 0;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>