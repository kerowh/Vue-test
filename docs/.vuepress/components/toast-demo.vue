<template>
    <div>
        <g-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'center'})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
    </div>
</template>
<script>
    import Toast from "../../../src/toast";
    import Button from "../../../src/button";
    import Vue from 'vue'
    import plugin from "../../../src/plugin";
    Vue.use(plugin)

    export default {
        components:{
            'g-toast':Toast,
            'g-button':Button
        },
        data () {
            return {
                content: `
        <g-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'center'})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
                `.replace(/\t+| +/g, '').trim()
            }
        }
    }

</script>
<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
</style>