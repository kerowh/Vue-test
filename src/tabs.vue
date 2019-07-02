<template>
    <div class="tags">
        <slot name="actions"></slot>
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name:'GuLuTags',
        props:{
            selected:{
                type:String,
                required:true,
            },
            direction:{
                type: String,
                default:'horzontal',
                validator(value){
                    return ['horzontal','vertical'].indexOf(value)>=0
                }
            }
        },
        mounted() {
            /*目标是获取到item的位置，来写下方线的动画*/
            /*item是tabs的儿子，tabs的孙子
            * 所以我们要一层一层找起
            * 找到它之后，我们要找它的位置，所以先把它作为一个实例对象用
            * emit传过去*/

            this.$children.forEach((vm)=>{
                if (vm.$options.name ==='GuluTagsHead'){
                    vm.$children.forEach((item)=>{
                        if (item.$options.name==='GuluTagsItem' && item.name === this.selected){
                            this.eventBus.$emit('update:selected',this.selected,item)
                        }
                    })
                }

            })

        },
        data(){
            return{
                eventBus:new Vue()
            }
        },
        provide(){
            return{
                eventBus:this.eventBus
            }

        }
    }
</script>
<style lang="scss" scoped>
    .tags{}
</style>