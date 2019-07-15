<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
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
            name:{
                type: String,
                required:true
            },
        },

        data(){
            return{
                open:false,
            }
        },
        inject:['eventBus'],
        mounted(){
            /*儿子会监听eventbus，只要爸爸说要更新，那么他就会更新自己*/
            /*儿子自身没有说过自己要更新自己，都是爸爸说要更新，才会去更新自己*/
            this.eventBus && this.eventBus.$on('update:selected',(names)=>{
                if (names.indexOf(this.name)>=0){
                    this.open = true
                }else{
                    this.open = false
                }
            })
        },
        methods:{
            /*他只是触发了用户想要移除或者添加更新的一个意图*/
            /*即使用户触发toggle事件，他也没有去触发open事件，而是等他爸爸说要去更新才回去更新自身的装态*/
            toggle(){
                if (this.open){
                    this.eventBus && this.eventBus.$emit('update:removeSelected',this.name)
                } else{
                    this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
                }
            },
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
        cursor: pointer;
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