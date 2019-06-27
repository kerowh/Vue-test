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
            //这里是为了给row加上align属性
            //加上这个属性之后，决定了其中的列是再左侧还是在右侧
            //具体的做法其实是加css样式
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
         /*默认可以换行*/
        flex-wrap: wrap;
    }
    /*其实就是加上flex的样式*/
    .row.align-left{
        justify-content: flex-start;
    }
    .row.align-right{
        justify-content: flex-end;
    }.row.align-center{
        justify-content: center;
     }


</style>