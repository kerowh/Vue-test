<template>
    <div class="tags-item" @click="xxx" :class="classes">
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
            xxx(){
                /*当你点击了，更新this.name*/
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tags-item{
        flex-shrink: 0;
        padding: 0 2em;
    }
    .tags-item.active{
        background: red;
    }

</style>