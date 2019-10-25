<template>
  <div class="login">
    <el-row
      type="flex"
      class="login-header"
      justify="center"
    >
      <el-col :span="10">
        <div class="grid-content">
          <img
            src="../../assets/img/login-logo.png"
            height="50"
            alt=""
          >
        </div>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        :span="10"
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
            <!--
                    <el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码" style="width: 63%" @keyup.enter.native="handleLogin">
                        <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
                    </el-input>
                    验证码需求
                    <div class="login-code">
                        <img :src="codeUrl" @click="getCode">
                    </div>
                -->
          </el-form-item>
          <el-checkbox
            v-model="loginForm.rememberMe"
            style="margin:0 0 25px 0;"
          >
            记住我
          </el-checkbox>
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
</template>

<script>
  import login from './login';
  export default login;
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'login';
</style>
