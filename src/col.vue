<template>
    <div class="col" :class="colClass"
    :style="colStyle">
        <div style="border:1px solid green;height: 100px;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'GuluCol',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type: [Number,String]
            },

        },
        data(){
            return{
                gutter:0
            }
        },
        computed:{
            colStyle(){
                let {gutter} = this
                return {paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}
            },
            colClass(){
                let {span,offset} = this
                return [span && `col-${span}`,offset && `offset-${offset}`]
            }
        }
    }
</script>
<style scoped lang="scss">
    .col{
        height: 100px;
        /*background: grey;*/
        width: 50%;
        /*border: 1px solid red;*/
    }

    $class: col-;
    //前缀
    @for $n from 1 through 24 {

        .col.#{$class}#{$n} {
            width: ($n/24)*100%;
        }
    }

    $class: offset-;
    //前缀
    @for $n from 1 through 24 {

        .col.#{$class}#{$n} {
            margin-left: ($n/24)*100%;
        }
    }

</style>