<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
    </div>
</template>
<script>
    import Button from "../../../src/button";
    export default {
        components:{
            'g-button':Button
        },
        data () {
            return {
            }
        }
    }

</script>
<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
</style>