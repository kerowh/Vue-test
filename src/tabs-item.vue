<template>
  <div class="tags-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'GuluTagsItem',
    inject:['eventBus'],
    props:{
      disabled:{
        type:Boolean,
        default:false
      },
      name:{
        type:String | Number,
        required:true
      }
    },
    data(){
      return {
        active:false
      }
    },
    created() {
      if (this.eventBus){
        this.eventBus.$on('update:selected',(name)=>{
          this.active = name === this.name;
        })
      }
    },
    computed:{
      classes(){
        return{
          active:this.active,
          disabled: this.disabled
        }
      }
    },
    methods:{
      onClick(){
        /*当你点击了，更新this.name和vm实例*/
        if (this.disabled){
          return
        }
        this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
        /*这句话就是为了给外界穿一个emit事件，用来写测试用例的*/
        this.$emit('click')
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blue:blue;
  $disabled-text-color:grey;
  .tags-item{
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    /*更改鼠标的样式*/
    height: 100%;
    display: flex;
    align-items: center;
  }
  .tags-item.active{
    color:$blue ;
    font-weight: bold;
  }
  .tags-item.disabled{
    color:$disabled-text-color;
    font-weight: bold;
    cursor: not-allowed;
  }
</style>