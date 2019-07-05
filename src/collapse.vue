<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "GuluCollapse",
        props:{
            single:{
                type:Boolean,
                default:false
            },
            selected:{
                type:Array
            }
        },
        data(){
            return{
                eventBus:new Vue(),
            }
        },
        provide(){
            return{
                eventBus: this.eventBus
            }
        },
        mounted() {
            /*一开始的初始状态，告诉儿子们该选中的要选中*/
            this.eventBus.$emit('update:selected',this.selected)
            /*接受儿子反应出来的用户意图，这里反应儿子想要添加一个选中*/
            this.eventBus.$on('update:addSelected',(name)=>{

                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                /*这里是得到最新的被选中的情况*/
                if (this.single){
                    selectedCopy =[name]
                } else {
                    selectedCopy.push(name)
                }
                /*得到被选中的情况之后，通知儿子们该更新的更新*/
                this.eventBus.$emit('update:selected',selectedCopy)
                this.$emit('update:selected',selectedCopy)
            })

            this.eventBus.$on('update:removeSelected',(name)=>{
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index,1)
                this.eventBus.$emit('update:selected',selectedCopy)
                this.$emit('update:selected',selectedCopy)
            })
        }
    }
</script>

<style lang="scss" scoped>
    $grey:#ddd;
    $border-radius:4px;
    .collapse{
        border: 1px solid $grey;
        border-radius: $border-radius;
        overflow: hidden;
    }
</style>