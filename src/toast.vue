<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuluToast'
    }
</script>
<style lang="scss">
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast{
        position: fixed;
        top: 0;
        left: 50%;
        /*注意这样写不在中间*/
        transform: translateX(-50%);
        /*这才是中间*/
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        /*文字没居中*/
        display: flex;
        align-items: center;
        color: white;
        background: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        padding: 0 16px;
    }
</style>