<template>
    <div>
        <g-collapse :selected.sync="selectedTab" single>
            <g-collapse-item title="标题一" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题二" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题三" name="3">内容3</g-collapse-item>
        </g-collapse>
        <code><pre>{{content}}</pre></code>
    </div>
</template>
<script>
    import Collapse from "../../../src/collapse";
    import CollaspseItem from "../../../src/collapse-item";
    export default {
        components:{
            'g-collapse':Collapse,
            'g-collapse-item':CollaspseItem,
        },
        data () {
            return {
                selectedTab:['2'],
                content: `
                  data:{
                    selectedTab:['2'],
                }

          <g-collapse :selected.sync="selectedTab" single>
            <g-collapse-item title="标题一" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题二" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题三" name="3">内容3</g-collapse-item>
          </g-collapse>
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