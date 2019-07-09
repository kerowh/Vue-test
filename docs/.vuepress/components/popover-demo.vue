<template>
    <div>
        <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
    </div>
</template>
<script>
    import Button from "../../../src/button";
    import Popover from "../../../src/popover"
    export default {
        components:{
            'g-button':Button,
            'g-popover':Popover
        },
        data () {
            return {
                content: `
        <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
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