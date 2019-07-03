<template>
    <div class="tags-pane" @click="onClick" :class="classes" v-if="active">
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
        data(){
            return {
                active:false
            }
        },
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active = name === this.name;
            })
        },
        computed:{
            classes(){
                return{
                    active:this.active
                }
            }
        },
        methods:{
            onClick(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tags-pane{
        padding: 1em;
    }
    .tags-pane.active{
    }
</style>