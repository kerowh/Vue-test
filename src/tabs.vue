<template>
    <div class="tags">
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
        created() {
            // this.$emit('update:selected','xxx')
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