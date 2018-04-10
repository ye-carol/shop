<template>
  <div @click="resetComponent">
    <div class="app-header">
        <div class="app-header-inner">
          <router-link :to="{path: '/'}"><img src="../assets/logo.png"></router-link>

          <div class="header-nav" >
            <ul class="nav-list" v-if="username === ''">
              <li @click="showLoginDialog">登录</li>
              <li class="nav-pile">|</li>
              <li @click="showResDialog">注册</li>
              <li class="nav-pile">|</li>
              <li @click="showAboutDialog">关于</li>
            </ul>
            <ul class="nav-list" v-else>
              <li>{{username}}</li>
              <li class="nav-pile">|</li>
              <li @click="logout">退出</li>
              <li class="nav-pile">|</li>
              <li @click="showAboutDialog">关于</li>
            </ul>
          </div>
        </div>
    </div>
    <div class="app-content">
        <div class="container">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
    </div>
    <div class="app-footer">
        <p>© 2018 carol</p>
    </div>
    <v-dialog :is-show="isLoginShow" @on-close="hideDialog('isLoginShow')">
      <v-login-form @has-log="onSuccessLog"></v-login-form>
    </v-dialog>
    <v-dialog :is-show="isRegShow" @on-close="hideDialog('isRegShow')">
      <v-reg-form></v-reg-form>
    </v-dialog>
    <v-dialog :is-show="isAboutShow" @on-close="hideDialog('isAboutShow')">
      <p>关于我们</p>
    </v-dialog>
  </div>
</template>

<script>
  import VDialog from './base/dialog'
  import VLoginForm from './loginForm'
  import VRegForm from './regForm'
  import {eventBus} from '../eventBus'
  export default {
    name: 'Layout',
    components:{
      VDialog,
      VLoginForm,
      VRegForm
    },
    data () {
      return {
        isLoginShow: false,
        isRegShow:false,
        isAboutShow: false,
        username: ''
      }
    },
    methods:{
      showLoginDialog () {
        this.isLoginShow = true
      },
      showResDialog () {
        this.isRegShow = true
      },
      showAboutDialog () {
        this.isAboutShow = true
      },
      hideDialog (attr) {
        this[attr] = false
      },
      onSuccessLog (data) {
        this.username = data.username
        this.isLoginShow = false
      },
      logout () {
        this.username = ''
      },
      resetComponent () {
        eventBus.$emit('reset-component')
      }
    }
  }
</script>

<style>
  /**
   * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
   * http://cssreset.com
   */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, menu, nav, section {
     display: block;
  }

  body {
     line-height: 1;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }
  li {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue";
    font-size: 14px;
    color: #444;
  }
  .app-header {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;

  }
  .app-header-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .header-logo {
    float: left;
  }
  .app-header-inner img {
    width: 50px;
    margin-top: 20px;
  }
  .header-nav{
    float: right;
  }
  .header-nav ul {
    overflow: hidden;
  }
  .header-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .app-footer {
    margin-top: 30px;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    text-align: center;
  }
  .container {
    width: 1200px;
    margin:0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    background: #4fc08d;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }
</style>
