<template>
    <div class="tags-item" @click="xxx">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuluTagsItem',
        inject:['eventBus'],
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type:String | Number,
                required:true
            }
        },
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                console.log(name);
            })
        },
        methods:{
            xxx(){
                /*当你点击了，更新this.name*/
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tags-item{}
</style>