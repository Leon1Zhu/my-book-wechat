<template>
    <div class="alien-input input-item" :class="{'float' : floatClass}">
       <label>{{labelValue}}</label>
      <input @focus="floatClass = true" @blur="blurInput" class="wc-input" :type="type" >
      <span></span>
    </div>
</template>

<script>

    export default{
        name:'alienInput',
        props:{
          labelValue:{
            type:String,
          },
          type:{
            type:String,
            default:'text'
          }
        },
        data(){
            return {
                floatClass:false,
            }
        },
        components: {},
        created(){
        },
        mounted(){

        },
        methods: {
          blurInput(e){
              this.$isnull(e.target.value) && (this.floatClass = false);
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalCss";
  .alien-input{
    width:100%;
    position: relative;
    label{
      position: absolute;
      top:0;
      left:0;
      z-index:2;
      transform:translate3d(0,0,0) scale(1);
      transition: transform .45s cubic-bezier(.23,1,.32,1);
    }
    .wc-input{
      border:none;
      border-bottom:1px solid #dddee1;
      border-radius:0px;
    }
    .wc-input:focus{
      box-shadow: none;
      border:none;
      border-bottom:1px solid #dddee1;
    }
    span{
      display: block;
      height:2px;
      width:100%;
      background: $systemColor;
      position: absolute;
      bottom: .5rem;
      transform: scaleX(0);
      transition: transform .45s cubic-bezier(.23,1,.32,1);
      transform-origin: center center;
    }
    .wc-input:focus + span{
      transform: scaleX(1);
    }
  }
  .alien-input.float label{
    transform:translate3d(0,-.8rem,0) scale(.9);
  }
</style>
