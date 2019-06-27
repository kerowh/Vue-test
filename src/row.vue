<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:{
            gutter:{
                type:[Number,String]
            },
            align:{
                type:String,
                validator(value){
                    return ['left','right','center'].includes(value)
                }
            }
        },
        mounted() {
            //this指的是谁？
            //vm实例，row
            this.$children.forEach((vm)=>{
                //这里的vm是指row的child，col
                vm.gutter = this.gutter
                //这里的this还是vm实例，row
                //这样做是为了把row上的gutter
                //传入col中
            })
        },
        computed:{
            rowStyle(){
                let {gutter} = this
                return {marginLeft:-gutter/2+'px',
                    marginRight:-gutter/2+'px'}
            },
            rowClass(){

                let {align} = this
                return [align && `align-${align}`]
            }
        }
    }
</script>
<style scoped lang="scss">
    .row{
        display: flex;
        .row.align-left{
            justify-content: flex-start;
        }
        .row.align-right{
            justify-content: flex-end;
        }.row.align-center{
             justify-content: center;
         }
    }


</style>