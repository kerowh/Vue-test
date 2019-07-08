<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast" >
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        name:'GuluToast',
        props:{
            autoClose:{
               type:[Boolean,Number],
               default:2,
               validator(value) {
                   return value === false || typeof value === 'number';
               }
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
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','center','bottom'].indexOf(value)>=0
                }
            }
        },
        mounted() {
            this.updateStyles()
            this.exeAutoClose()
        },
        computed:{
            toastClasses(){
                return{[`position-${this.position}`]:true}
            }
        },
        methods:{
            updateStyles(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height =`${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            exeAutoClose(){
                if (this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoClose*1000)
                }
            },
            close(){
                this.$el.remove()
                // 加上这一句是因为destory不会默认删掉自己
                //这其实也是个回调函数，触发一个叫做close的事件（在plugin中，并且绑定了一个叫做onclickclose的事件）
                this.$emit('close')
                this.$destroy
            },
            log(){
                console.log(1);
            },
            onClickClose(){
                this.close()
                if (this.closeButton && typeof this.closeButton.callback ==='function'){
                    this.closeButton.callback(this)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size:14px;
    $toast-min-height:40px;
    $toast-bg:rgba(0,0,0,0.75);
    $animation-duration:1s;
    @keyframes slide-up {
        0%{opacity: 0; transform: translateY(100%)}
        100%{opacity: 1; transform: translateY(0)}
    }
    @keyframes slide-down {
        0%{opacity: 0; transform: translateY(-100%)}
        100%{opacity: 1; transform: translateY(0)}
    }

    @keyframes fade-in{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }

    /*用一个wapper单独来控制居中的样式*/
    .wrapper{
        position: fixed;
        /*因为加样式了，这行先不要了*/
        /*top: 0;*/
        left: 50%;
        /*注意这样写不在中间*/
        /*注意transform只生效一次，所以写在样式里，这个css的目的是为了居中*/
        /*这才是中间*/
        transform: translateX(-50%);
    }
    .wrapper.position-top{
        top:0;
        .toast{
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            animation: slide-down $animation-duration;
        }
        z-index: 30;
    }
    .wrapper.position-bottom{
        bottom:0;
        .toast{
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            animation: slide-up $animation-duration;
        }
    }

    .wrapper.position-center {
        top: 50%;
        .toast{
            animation: fade-in $animation-duration;
        }

        transform: translate(-50%,-50%);
    }
    /*在toast中单独动画，不参与样式的居中等操作*/
    .toast{

        font-size: $font-size;
        line-height: 1.8;
        /*永远不要写死高度，这样标签如果太长就显示的不全*/
        min-height: $toast-min-height;
        /*文字没居中*/
        border-radius: 4px;
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