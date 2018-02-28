<template>
    <section class="regist-content">
        <h2 class="title">账户注册</h2>
      <alienInput @on-change="changeValue" v-model="phone"  labelValue="手机号"></alienInput>
      <alienInput @on-change="changeValue" v-model="loginPassword"  labelValue="密码"></alienInput>
      <alienInput @on-change="changeValue" v-model="loginPasswordRepet"  labelValue="重复密码"></alienInput>
      <alienInput @on-change="changeValue" v-model="name"  labelValue="昵称"></alienInput>
      <div class="code-content" >
        <alienInput  @on-change="changeValue" v-model="securityCode"  labelValue="验证码"></alienInput>
        <button class="wc-button">发送验证码</button>
      </div>
      <p  class="regist-font" :class="{'showRegistFont':showRegistFont}">注&nbsp;册</p>
      <p  class="help-font">点我注册</p>
    </section>
</template>

<script>
  import alienInput from '../../common/vue/alienInput.vue'
    export default{
        name:'registModule',
        data(){
            return {
              phone:null,
              loginPassword: null,
              loginPasswordRepet:null,
              name:null,
              securityCode:null,
              showRegistFont:false
            }
        },
        components: {
          alienInput,
        },
        created(){
        },
        mounted(){
        },
        methods: {
          changeValue(){

          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalCss";
  .regist-content{
    .title{
      @include font-dpr(20px);
      padding: .7rem 0rem .5rem .2rem;
    }
    .wc-input{
      margin-top:.2rem;
      margin-bottom:.4rem;
    }
    .alien-input span{
      bottom:.4rem;
    }
    .alien-input label{
      top:.2rem;
    }
    .alien-input.float label{
      transform:translate3d(0,-.6rem,0) scale(.9);
    }
    .alien-input,.code-content{
      pointer-events: none;
      opacity:0;
      transform: scale(1.2);
      transition:opacity .3s,transform .3s;
    }
    .code-content{
       .alien-input{
         display: inline-block;
         width:60%;
       }
      .wc-button{
        display: inline-block;
        width:30%;
      }
    }
    .help-font{
      position: absolute;
      bottom:.7rem;
      width:100%;
      opacity:1;
      color: $systemColor;
      @include font-dpr(18px);
      text-align: center;
      transition: transform .2s ease-out,opacity .2s ease-out;
      transform: scale(1);
      transform-origin: center 30%;
      pointer-events: auto;
    }
  }
  .regist-content.active{
    .help-font{
      pointer-events: none;
      opacity:0;
      transform: scale(1.2);
    }
  }
</style>
