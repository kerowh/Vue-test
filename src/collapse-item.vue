<template>
    <div class="collapseItem">
        <div class="title" @click="open=!open">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapseItem",
        props:{
            title:{
                type:String
            },
        },

        data(){
            return{
                open:false
            }
        },

        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    $grey:#ddd;
    $border-radius:4px;
    .collapseItem{
        >.title{
            border: 1px solid $grey;
            margin: -1px -1px 0px -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0px 8px;
        }
        >.content{
            padding:  8px;
        }
    }
    .collapseItem:first-child{
        >.title{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }


    /*如果title是最后一个元素
    title:last-child,那么就表示没有内容，这时就加上圆弧，有内容的时候外边框是有弧的不用加*/
    .collapseItem:last-child{
        >.title:last-child{
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
    }
</style>