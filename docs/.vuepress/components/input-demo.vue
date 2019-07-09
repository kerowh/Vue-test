<template>
    <div>
        <g-input value="中文"></g-input>
        <g-input value="不可选中" disabled></g-input>
        <g-input value="只能读取" readonly>中文</g-input>
        <g-input value="这是个错误" error="这是个错误"></g-input>
    </div>
</template>
<script>
    import Input from "../../../src/input";
    export default {
        components:{
            'g-input':Input
        },
        data () {
            return {
                content: `
              <g-input value="中文"></g-input>
              <g-input value="不可选中" disabled></g-input>
              <g-input value="只能读取" readonly>中文</g-input>
              <g-input value="这是个错误" error="这是个错误"></g-input>`.replace(/\t+| +/g, '').trim()
            }
        }
    }

</script>
<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
</style>