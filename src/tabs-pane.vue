<template>
    <div class="tags-pane" @click="xxx">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuluTagsPane',
        inject:['eventBus'],
        props:{
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
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tags-pane{}
</style>