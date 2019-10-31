<template>
  <div class="login">
    <div class="main">
      <el-row
        type="flex"
        class="login-header"
        justify="left"
      >
        <el-col :span="5">
          <img src="../../assets/background/logo-banner.png">
        </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center"
        :gutter="20"
        style="margin-top: -30px"
      >
        <el-col
          :span="10"
          class="grid-content login-left"
        >
          <img src="../../assets/background/login-left.png">
        </el-col>
        <el-col
          :span="8"
          class="grid-content"
        >
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            label-position="left"
            label-width="0px"
            class="login-form"
          >
            <div class="login-logo">
              <img src="../../assets/background/logo.png">
            </div>
            <el-form-item prop="username">
              <el-input
                v-model="loginForm.username"
                type="text"
                auto-complete="off"
                placeholder="账号"
              >
                <svg-icon
                  slot="prefix"
                  icon-class="user"
                  class="el-input__icon input-icon"
                />
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                auto-complete="off"
                placeholder="密码"
                @keyup.enter.native="handleLogin"
              >
                <svg-icon
                  slot="prefix"
                  icon-class="password"
                  class="el-input__icon input-icon"
                />
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input
                v-model="loginForm.code"
                auto-complete="off"
                placeholder="验证码"
                style="width: 63%"
                @keyup.enter.native="handleLogin"
              >
                <svg-icon
                  slot="prefix"
                  icon-class="validCode"
                  class="el-input__icon input-icon"
                />
              </el-input>
              <!--验证码需求-->
              <div class="login-code">
                <img
                  :src="codeUrl"
                  @click="getCode"
                >
              </div>
            </el-form-item>
            <el-form-item
              :gutter="24"
              style="margin-bottom: 0; padding-bottom: 0;"
            >
              <el-col :span="8">
                <el-checkbox
                  v-model="loginForm.rememberMe"
                  style="margin:0 0 25px 0;"
                >
                  记住密码
                </el-checkbox>
              </el-col>
              <el-col
                :span="10"
                :offset="6"
              >
                <el-button type="text">
                  忘记密码？
                </el-button>
              </el-col>
            </el-form-item>
            <el-form-item style="width:100%;">
              <el-button
                :loading="loading"
                size="medium"
                type="primary"
                style="width:100%;"
                @click.native.prevent="handleLogin"
              >
                <span v-if="!loading">登 录</span>
                <span v-else>登 录 中...</span>
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <el-row type="flex">
        <el-col class="copy">
          <!--<span class="copyRight">@博智林机器人数据平台组 版权归属</span>-->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import login from './login';
  export default login;
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'login';
</style>
