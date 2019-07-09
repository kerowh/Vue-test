<template>
    <div>
        <g-row class="demoRow">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>

        </g-row>
    </div>
</template>
<script>
    import Row from "../../../src/row";
    import Col from "../../../src/col";
    export default {
        components:{
            'g-col':Col,
            'g-row':Row
        },
         data () {
             return {
                 content: `
        <g-row class="demoRow">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
        </g-row>
 `.replace(/\t+| +/g, '').trim()}
         }
    }
</script>
<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }



</style>