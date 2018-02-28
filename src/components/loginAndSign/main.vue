<template>
    <section class="login-regist-content">
      <div class="main-content " :class="{'loginAction': loginAction}">
        <loginModule :class="{'active': isLogin}" @click.native="isLogin=true">
        </loginModule>
        <registModule :class="{'active': !isLogin}" @click.native="isLogin=false"></registModule>
      </div>
    </section>
</template>

<script>
import loginModule from './login.vue'
import registModule from './sign.vue'
    export default{
        data(){
            return {
              isLogin:true,
              loginAction:false
            }
        },
        components: {
          loginModule,
          registModule,
        },
        created(){
        },
        mounted(){
          this.$Message.warning({
            content: '这是一条普通的提示',
            duration: 1
          });
        },
        methods: {
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/css/keyframes';
  @import '../../common/css/globalCss';
  .login-regist-content{
    width:100%;
    height:100%;
    position: relative;
    background: black;

    .wc-input{
      margin-bottom:.5rem;
    }
    .main-content{
      top:20%;
      display: inline-block;
      width:100%;
      position: absolute;
      .login-content,.regist-content{
        z-index:1;
        position: absolute;
        width:90%;
        margin-left:5%;
        background: #fff;
        border-radius:10px;
        border:1px solid #ccc;
        box-shadow: 0 0 7px;
        transform: scaleX(.95) scaleY(.9);;
        transition: transform .3s ease;
      }
      .login-content{
        top:0;
      }
      .regist-content{
        top:1.5rem;
      }
      .active{
        z-index:2;
        transform: scale(1);
      }
    }

    .loginAction{
      width:200px;
      height:200px;
      border-radius:50%;
      background: #fff;
      left:50%;
      top:50%;
      margin:-100px 0 0 -100px;
      animation:radius-swing 3s ease infinite;
      .login-content,.regist-content{
        display: none;
      }
    }
    .input-item{
      width:90%;
      margin-left:5%;
    }
    .login-font,.regist-font{
      transform:scale(0);
      color: $systemColor;
      @include font-dpr(18px);
      text-align: center;
      margin-bottom: .5rem;
      transition: transform .2s ease-out;
      transform-origin: center 30%;
    }

    .login-font.showLoginFont,.regist-font.showRegistFont{
      transform: scale(1);
    }

  }
</style>
