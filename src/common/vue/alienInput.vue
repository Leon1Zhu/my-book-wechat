<template>
    <div class="alien-input input-item" :class="{'float' : floatClass}">
       <label>{{labelValue}}</label>
      <input :value="currentValue"
             @focus="floatClass = true"
             @change="handleChange"
             @blur="blurInput"
             @input="handleInput"
             class="wc-input" :type="type" >
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
          },
          value:{
            type:[String,Number],
            default:''
          }
        },
        data(){
            return {
                floatClass:false,
                currentValue:this.value,
            }
        },
        components: {},
        created(){
        },
        mounted(){

        },
        methods: {
          handleInput (event) {
            let value = event.target.value;
            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('on-change', event);

          },
          blurInput(e){
              this.$isnull(e.target.value) && (this.floatClass = false);
          },
          handleChange (event) {
            this.$emit('on-input-change', event);
          },
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalCss";
  .alien-input{
    width:100%;
    position: relative;
    label{
      pointer-events: none;
      position: absolute;
      top:.4rem;
      left:0;
      z-index:2;
      transform:translate3d(0,0,0) scale(1);
      transition: transform .45s cubic-bezier(.23,1,.32,1);
    }
    .wc-input{
      margin-top:.4rem;
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
    transform:translate3d(0,-.7rem,0) scale(.9);
  }
</style>
