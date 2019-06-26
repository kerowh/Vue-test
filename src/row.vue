<template>
    <div class="row" :style="{marginLeft:-gutter/2+'px',
    marginRight:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:{
            gutter:{
                type:[Number,String]
            }
        },
        mounted() {
            console.log('row mounted')
            //this指的是谁？
            //vm实例，row
            console.log(this.$children);
            this.$children.forEach((vm)=>{
                console.log(1);
                //这里的vm是指row的child，col
                vm.gutter = this.gutter
                //这里的this还是vm实例，row
                //这样做是为了把row上的gutter
                //传入col中
            })
        }
    }
</script>
<style scoped lang="scss">
    .row{
        display: flex;
    }
</style>