<template>
    <div class="col" :class="colClass"
    :style="colStyle">
        <div style="border:1px solid green;height: 100px;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    let validator = (value)=>{
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key =>{
            if(!['span','offset'].includes(key)){
                valid = false
            }
        })
        return valid
    }
    export default {
        name:'GuluCol',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type: [Number,String]
            },
            phone:{
                type:Object,
                //因为validator函数名称是一样的，所以可以省略，直接写，
                validator,
            },
            ipad:{
                type:Object,
                validator,
            },
            narrowPc:{
                type:Object,
                validator,
            },
            pc:{
                type:Object,
                validator(value){
                    let keys = Object.keys(value)
                    let valid = true
                    keys.forEach(key =>{
                        if(!['span','offset'].includes(key)){
                            valid = false
                        }
                    })
                    return valid
                }
            },
            widePc:{
                type:Object,
                validator(value){
                    let keys = Object.keys(value)
                    let valid = true
                    keys.forEach(key =>{
                        if(!['span','offset'].includes(key)){
                            valid = false
                        }
                    })
                    return valid
                }
            },

        },


        data(){
            return{
                gutter:0
            }
        },
        computed:{
            colStyle(){
                let {gutter} = this
                return {paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}
            },
            colClass(){
                let {span,offset,phone,ipad,narrowPc,pc,widePc} = this
                //&&如果有就是什么什么
                return [span && `col-${span}`,
                        offset && `offset-${offset}`,
                        ...(phone ?`col-phone-${phone.span}`:[]),
                        ...(ipad ?`col-ipad-${ipad.span}`:[]),
                        ...(narrowPc ?`col-narrow-pc-${narrowPc.span}`:[]),
                        ...(pc ?`col-pc-${pc.span}`:[]),
                        ...(widePc ?`col-wide-pc-${widePc.span}`:[]),
                        ]
            }
        }
    }
</script>
<style scoped lang="scss">
    .col{
        height: 100px;
        /*background: grey;*/
        width: 50%;
        /*border: 1px solid red;*/

    }

    $class: col-;
    //前缀
    @for $n from 1 through 24 {

        .col.#{$class}#{$n} {
            width: ($n/24)*100%;
        }
    }

    $class: offset-;
    //前缀
    @for $n from 1 through 24 {

        .col.#{$class}#{$n} {
            margin-left: ($n/24)*100%;
        }
    }

    @media (max-width: 576px) {
        $class: col-phone-;
        //前缀
        @for $n from 1 through 24 {

            .col.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }

        $class: offset-phone-;
        //前缀
        @for $n from 1 through 24 {

            .col.#{$class}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }

    }

    @media (min-width: 577px) and (max-width: 768px){
        $class: col-ipad-;
        //前缀
        @for $n from 1 through 24 {

            .col.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }

        $class: offset-ipad-;
        //前缀
        @for $n from 1 through 24 {

            .col.#{$class}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }

        @media (min-width: 769px) and (max-width: 992px){
            $class: col-narrow-pc-;
            //前缀
            @for $n from 1 through 24 {

                .col.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class: offset-narrow-pc-;
            //前缀
            @for $n from 1 through 24 {

                .col.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }

        @media (min-width: 993px) and (max-width: 1200px){
            $class: col-pc-;
            //前缀
            @for $n from 1 through 24 {

                .col.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class: offset-pc-;
            //前缀
            @for $n from 1 through 24 {

                .col.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }

        @media (min-width: 1201px) {
            $class: col-wide-pc-;
            //前缀
            @for $n from 1 through 24 {

                .col.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }

            $class: offset-wide-pc-;
            //前缀
            @for $n from 1 through 24 {

                .col.#{$class}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }

    }




</style>