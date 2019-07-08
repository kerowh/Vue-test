<template>
    <div>
        <g-popover trigger="hover">
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left" trigger="hover">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right" trigger="hover">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <code><pre>{{content}}</pre></code>
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
        <g-popover trigger="hover">
          <g-button>上方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
          <g-button>下方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="left" trigger="hover">
          <g-button>左边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="right" trigger="hover">
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