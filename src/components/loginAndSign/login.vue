<template>
    <section class="login-content">
      <h2 class="title">账户登陆</h2>
      <div class="login-info">
        <div class="username-item">
          <alienInput @on-change="changeValue" v-model="loginName" :value="loginName" labelValue="用户名/手机号"></alienInput>
          <alienInput @on-change="changeValue" v-model="loginPassword" :value="loginPassword" labelValue="密码"></alienInput>

          <a class="forget-passowrd">忘记密码？</a>
          <p class="login-font  " :class="{'showLoginFont' : showLoginFont}">登&nbsp;陆</p>
        </div>
      </div>

    </section>
</template>

<script>
import alienInput from '../../common/vue/alienInput.vue'
    export default{
        name:'loginModule',
        data(){
            return {
              loginName:null,
              loginPassword:null,
              showLoginFont:false
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
            notNull(){
              if(!this.$isnull(this.loginName) && !this.$isnull(this.loginPassword)){
                return  true;
              }
              return false;
            },
            changeValue(){
                if(!this.$isnull(this.loginName) && !this.$isnull(this.loginPassword)){
                    this.showLoginFont = true;
                }else{
                    this.showLoginFont = false;
                }
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/css/globalCss";
  .login-content{
    .title{
      @include font-dpr(20px);
      padding: .5rem 0rem 1rem .2rem;
    }
    .forget-passowrd{
      display: block;
      text-align: right;
      margin-right:5%;
      color: $systemColor;
      @include font-dpr(12px)
    }
    .login-font{
      transform:scale(0);
      color: $systemColor;
      @include font-dpr(18px);
      text-align: center;
      margin-bottom: .5rem;
      transition: transform .2s ease-out;
      transform-origin: center 30%;
    }

    .login-font.showLoginFont{
      transform: scale(1);
    }
  }
</style>
