<template>
    <div>
        <g-button @click="onClickButton">上方弹出</g-button>
        <code><pre>{{content}}</pre></code>
    </div>
</template>
<script>
    import Toast from "../../../src/toast";
    import Button from "../../../src/button";
    import Vue from 'vue'
    import plugin from "../../../src/plugin";
    Vue.use(plugin)

    export default {
        components:{
            'g-toast':Toast,
            'g-button':Button
        },

        methods: {
            onClickButton () {
                this.$toast('你知道我在等你吗？', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            }
        },


        data () {
            return {
                content: `
<div>
    <g-button @click="onClickButton">上方弹出</g-button>
</div>

methods: {
  onClickButton () {
    this.$toast('你知道我在等你吗？', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('他说知道了')
        }
      }
    })
  }
},
`
            }
        }
    }

</script>
<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
</style>