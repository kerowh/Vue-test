<template>
    <div class="popover" @click="onClick">
<!--        因为slot不能加class，没法写css-->
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content" ></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        data(){
            return{visible:false}
        },
        methods:{
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                let{left,top}=this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
                this.$refs.contentWrapper.style.top=top+window.scrollY+'px'
            },
            listenToDocument(){
                let onClickDocunment = (event)=>{
                    /*如果它存在并且内容一致才什么都不做*/
                    if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(event.target)){
                        return
                    }else {
                        this.visible = false
                        document.removeEventListener('click',onClickDocunment)
                    }
                }
                document.addEventListener('click',onClickDocunment)
            },
            onShow(){
                setTimeout(()=>{
                    this.positionContent()
                    this.listenToDocument()
                },0)
            },
            onClick(event){
                if (this.$refs.triggerWrapper.contains(event.target)){
                    // console.log('点的是按钮');
                    this.visible = !this.visible
                     if (this.visible === true){
                         this.onShow()
                     }
                }else {
                   return
                }
            }
        },
        mounted() {

        }
    }
</script>
<style lang="scss" scoped>
    $border-color:#333;
    $border-radius:4px;
    .popover{
        /*如果不加这个默认是行级元素，再写一个button就会占两行，我们只要一行*/
        display: inline-block;
        /*行内对齐方式*/
        vertical-align: top;
        position: relative;
    }

    .content-wrapper{
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        /*box-shadow: 0 0 3px rgba(0,0,0,0.5);*/
        filter: drop-shadow(0 1px 3px rgba(0,0,0,0.5));
        background: white;
        /*使组件出现的relatetive组件的上方，用就行了*/
        transform: translateY(-100%);
        /*给个padding*/
        padding: .5em 1em;
        /*上移10个像素*/
        margin: -10px 0px;
        /*写了最大宽度了，就需要换行，中文不需要*/
        word-break: break-all;
        max-width: 20em;

    }

    /*画一个三角形*/
    .content-wrapper::before{
        content: '';
        display: block;
        border: 10px solid transparent;
        border-top-color: black;
        width: 0px;
        height: 0px;
        position: absolute;
        top: 100%;
        left: 8px;
    }

    .content-wrapper::after{
        content: '';
        display: block;
        border: 10px solid transparent;
        border-top-color: white;
        width: 0px;
        height: 0px;
        position: absolute;
        /*向上抬1.5像素*/
        top: calc(100% - 1.5px);
        left: 8px;
    }
</style>