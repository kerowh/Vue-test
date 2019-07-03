<template>
    <div class="popover" @click.stop="xxx">
<!--        因为slot不能加class，没法写css-->
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content" ></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        data(){
            return{visible:false}
        },
        methods:{
            xxx(){
                this.visible = !this.visible
                console.log('切换visible');
                console.log(this.visible);
                if (this.visible === true){
                    setTimeout(()=>{
                        console.log('新增document click 监听器');
                        let EventHandle = ()=>{
                            console.log('点击body就关闭popover')
                            this.visible = false
                            console.log('删除监听器');
                            document.removeEventListener('click',EventHandle)
                        }
                        document.addEventListener('click',EventHandle)
                    },0)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .popover{
        /*如果不加这个默认是行级元素，再写一个button就会占两行，我们只要一行*/
        display: inline-block;
        /*行内对齐方式*/
        vertical-align: top;
        position: relative;

        .content-wrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0,0,0,0.5);
        }
    }
</style>