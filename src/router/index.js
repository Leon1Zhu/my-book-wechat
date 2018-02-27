import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loginAndRegist = resolve => require(['@/components/loginAndSign/main.vue'],resolve)

const notFound = resolve => require(['@/components/404'], resolve);

export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    /*{path: '/', component: mainPage},*/
    {path: '/', name: 'login', component: loginAndRegist},
    {path: '*', name: '404', component: notFound}
  ]
})
