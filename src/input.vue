<template>
    <div class="wrapper" :class="{'error':error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
        >
        <!--change 事件被<input>, <select>, 和<textarea> 元素触发,-->
        <!--当用户提交对元素值的更改时。-->
        <!--与input 事件不同，change 事件不一定会对元素值的每次更改触发。-->
        <!-- 当标签的值被修改并且失焦后，但并未进行提交-->
        <!--例如：对<textarea> 或者<input type="text">的值进行编辑后。）
        才触发change事件。-->
        <!--当一个 <input>, <select>, 或 <textarea> 元素的 value 被修改时，
        会触发 input 事件-->
        <!--focus事件在元素获取焦点时触发.
        这个事件和 focusin 最大的区别仅仅在于后者会事件冒泡-->
        <!-- 当一个元素失去焦点的时候 blur 事件被触发。-->
        <!--它和 focusout 事件的主要区别是 focusout 支持冒泡。-->
        <template v-if="error">
            <icon  name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        components:{Icon},
        name:'Guluinput',
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            },
        }
    }
</script>
<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:14px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#F1453D;
    .wrapper{
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        >*:not(:last-child){
            margin-right: .5em;
        }
        >input{
            height: 32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
        }

        >input:hover{
            border-color: $border-color-hover;
        }

        >input:focus{
            box-shadow: inset 0 1px 3px $box-shadow-color;
            /*使用inset 阴影在边框内，不写默认在外边*/
            outline: none;
        }

        >input[disabled]{
            border-color:#bbb;
            color: #bbbbbb;
            cursor:not-allowed;
        }

        >input[readonly]{
            border-color:#bbb;
            color: #bbbbbb;
            cursor:not-allowed;
        }

    }
    .wrapper.error{
        >input{
            border-color: $red;
        }
    }

    .icon-error{
        fill: $red;
    }

    .errorMessage{
        color: $red;
    }
</style>