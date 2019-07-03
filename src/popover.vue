<template>
    <div class="popover" @click="onClick">
<!--        因为slot不能加class，没法写css-->
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content" ></slot>
        </div>
        <span ref="triggerWrapper">
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
                    //
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

                // this.visible = !this.visible
                // if (this.visible === true){
                //     setTimeout(()=>{
                //         document.body.appendChild(this.$refs.contentWrapper)
                //         let{left,top}=this.$refs.triggerWrapper.getBoundingClientRect()
                //         this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
                //         this.$refs.contentWrapper.style.top=top+window.scrollY+'px'
                //         let EventHandle = ()=>{
                //             this.visible = false
                //             document.removeEventListener('click',EventHandle)
                //         }
                //         document.addEventListener('click',EventHandle)
                //     },0)
                // }
            }
        },
        mounted() {

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
    }

    .content-wrapper{
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        transform: translateY(-100%);
    }
</style>