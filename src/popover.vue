<template>
    <div class="popover" ref="popover">
        <!--        因为slot不能加class，没法写css-->
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
             :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger:{
                type:String,
                default: 'click',
                validator(value){
                    return ['click','hover'].indexOf(value)>=0
                }
            }
        },
        data() {
            return {visible: false}
        },
        mounted(){
          if (this.trigger ==='click'){
              this.$refs.popover.addEventListener('click',this.onClick)
          }else {
              this.$refs.popover.addEventListener('mouseenter',this.open)
              this.$refs.popover.addEventListener('mouseleave',this.close)
          }
        },
        destroyed(){
            if (this.trigger ==='click'){
                this.$refs.popover.removeEventListener('click',this.onClick)
            }else {
                this.$refs.popover.removeEventListener('mouseenter',this.open)
                this.$refs.popover.removeEventListener('mouseleave',this.close)
            }
        },
        computed:{
            // openEvent(){
            //     if (this.trigger==='click'){
            //         return 'click'
            //     } else {
            //         return 'mouseenter'
            //     }
            // },
            // closeEvent(){
            //     if (this.trigger === 'click'){
            //         return 'click'
            //     }else {
            //         return 'mouseleave'
            //     }
            // }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                const {left, top, height} = triggerWrapper.getBoundingClientRect()
                const {height: height2} = contentWrapper.getBoundingClientRect()
                let positions={
                    top:{
                        top:top + window.scrollY,
                        left:left + window.scrollX
                    },
                    bottom:{
                        top:top + window.scrollY,
                        left:left + window.scrollX
                    },
                    left:{
                        top:top + window.scrollY + (height - height2) / 2,
                        left:left + window.scrollX
                    },
                    right:{
                        top:top + window.scrollY + (height - height2) / 2,
                        left:left + window.scrollX
                    },
                }
                contentWrapper.style.top = positions[this.position].top  + 'px'
                contentWrapper.style.left = positions[this.position].left + 'px'
            },
            onClickDocunment(event){
                /*如果它存在并且内容一致才什么都不做*/
                if (this.$refs.contentWrapper &&
                    this.$refs.contentWrapper.contains(event.target))
                {return}
                this.close()
            },
            listenToDocument(){
                document.addEventListener('click', this.onClickDocunment)
            },
            open() {
                this.visible = true
                setTimeout(() => {
                    this.positionContent()
                    this.listenToDocument()
                }, 0)
            },
            close(){
              this.visible = false
              document.removeEventListener('click', this.onClickDocunment)
            },

            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    // console.log('点的是按钮');
                    if (this.visible === true) {
                        this.close()
                    }else {
                        this.open()
                    }
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        /*如果不加这个默认是行级元素，再写一个button就会占两行，我们只要一行*/
        display: inline-block;
        /*行内对齐方式*/
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
        background: white;
        /*使组件出现的relatetive组件的上方，用就行了*/
        /*给个padding*/
        padding: .5em 1em;
        /*上移10个像素*/
        /*写了最大宽度了，就需要换行，中文不需要*/
        word-break: break-all;
        max-width: 20em;
    }

    .content-wrapper.position-top {
        transform: translateY(-100%);
        margin: -10px 0px;
    }

    /*画一个三角形*/
    .content-wrapper.position-top::before {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-top-color: black;
        border-bottom: none;
        width: 0px;
        height: 0px;
        position: absolute;
        top: 100%;
        left: 8px;
    }

    .content-wrapper.position-top::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-bottom: none;
        border-top-color: white;
        width: 0px;
        height: 0px;
        position: absolute;
        /*向上抬1像素*/
        top: calc(100% - 1px);
        left: 8px;
    }

    .content-wrapper.position-bottom {
        transform: translateY(100%);
        margin: 10px 0px;
    }

    .content-wrapper.position-bottom::before {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-top: none;
        border-bottom-color: black;
        width: 0px;
        height: 0px;
        position: absolute;
        bottom: 100%;
        left: 8px;
    }

    .content-wrapper.position-bottom::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-top: none;
        border-bottom-color: white;
        width: 0px;
        height: 0px;
        position: absolute;
        /*向上抬1像素*/
        bottom: calc(100% - 1px);
        left: 8px;
    }


    .content-wrapper.position-left {
        transform: translateX(-100%);
        margin-left: -10px;
    }

    .content-wrapper.position-left::before {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-right: none;
        border-left-color: black;
        width: 0px;
        height: 0px;
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
    }

    .content-wrapper.position-left::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-right: none;
        border-left-color: white;
        width: 0px;
        height: 0px;
        position: absolute;
        /*向上抬1像素*/
        left: calc(100% - 1.5px);
        top: 50%;
        transform: translateY(-50%);
    }


    .content-wrapper.position-right {
        transform: translateX(100%);
        margin-left: 10px;
    }

    .content-wrapper.position-right::before {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-left: none;
        border-right-color: black;
        width: 0px;
        height: 0px;
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
    }

    .content-wrapper.position-right::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-left: none;
        border-right-color: white;
        width: 0px;
        height: 0px;
        position: absolute;
        /*向上抬1.5像素*/
        right: calc(100% - 1px);
        top: 50%;
        transform: translateY(-50%);
    }


</style>