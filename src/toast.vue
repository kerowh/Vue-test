<template>
    <div class="toast" ref="wrapper">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
    export default {
        name:'GuluToast',
        props:{
            autoClose:{
               type:Boolean,
               default:true
            },
            autoCloseDelay:{
                type: Number,
                default: 15
            },
            closeButton:{
                type:Object,
                default(){
                    return{
                        text:'关闭',
                        callback:undefined
                    }
                }
            },
            enableHtml:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            this.updateStyles()
            this.exeAutoClose()
        },
        methods:{
            updateStyles(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height =`${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            exeAutoClose(){
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            },
            close(){
                this.$el.remove()
                // 加上这一句是因为destory不会默认删掉自己
                this.$destroy
            },
            log(){
                console.log(1);
            },
            onClickClose(){
                this.close()
                if (this.closeButton && typeof this.closeButton.callback ==='function')
                this.closeButton.callback(this)
            }
        }
    }
</script>
<style lang="scss">
    $font-size:14px;
    $toast-min-height:40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast{
        position: fixed;
        top: 0;
        left: 50%;
        /*注意这样写不在中间*/
        transform: translateX(-50%);
        /*这才是中间*/
        font-size: $font-size;
        line-height: 1.8;
        /*永远不要写死高度，这样标签如果太长就显示的不全*/
        min-height: $toast-min-height;
        /*文字没居中*/
        display: flex;
        align-items: center;
        color: white;
        background: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        padding: 0 16px;
    }

    .close{
        padding-left: 16px;
        /*表示这个div不缩行，意思是人家2行，他还1行*/
        flex-shrink: 0;
    }

    .line{
        /*改成min-height之后height就没用了，改用js去获取*/
        /*height: 100%;*/
        border-left: 1px solid #666;
        margin-left: 16px;
    }
    .message{
        padding: 8px;
    }
</style>