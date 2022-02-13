<template>
  <div class="wrapper">
    <div class="login">
      <img
        src="http://www.dell-lee.com/imgs/vue3/user.png"
        alt=""
        class="login__img"
      />
      <div class="login__input">
        <input
          type="text"
          class="username"
          placeholder="请输入手机号"
          v-model="data.username"
        />
      </div>
      <div class="login__input">
        <input
          type="text"
          class="password"
          placeholder="请输入密码"
          v-model="data.password"
        />
      </div>
      <div class="login__button">
        <button class="login-btn" @click="handleLogin">登陆</button>
      </div>
      <div class="login__other">
        <div class="login__other__content">
          <button @click="handleRegisterClick">立即注册</button>|
          <button @click="handleForgot">忘记密码</button>
        </div>
      </div>
    </div>
  </div>
  <!-- 这里定义的：message是传给子组件的变量名，冒号里的才是真实的参数 -->
  <Toast
    v-if="toastData.showToast === true"
    :message="toastData.toastmessage"
  />
</template>

<script>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { post } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast.vue";
// 登陆逻辑函数
const useLoginEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({
      username: "",
      password: "",
    });
  const handleLogin = async () => {
    try {
      const result = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result?.data?.errno === 0) {
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      } else {
        showToast("登录失败");
      }
    } catch (error) {
      showToast("请求失败");
    }
  };
  return{handleLogin,data}
};
//注册逻辑函数
const useRegisterEffect = () => {
  const router = useRouter();
  const handleRegisterClick = () => {
    router.push({name: 'Register'})
  }
  return {handleRegisterClick};
}
//忘记密码逻辑函数
const useForgotPasswordEffect = () => {
  const router = useRouter();
  const handleForgot = () => {
    router.push({name: 'ForgotPassword'})
  }
  return {handleForgot}
}

export default {
  name: "Login",
  components: { Toast },
  setup() {
    // setup主要负责主流程
    const { toastData, showToast } = useToastEffect();
    const {handleLogin,data}  = useLoginEffect(showToast);
    const {handleRegisterClick} = useRegisterEffect();
    const {handleForgot} = useForgotPasswordEffect();
    return {
      handleLogin,
      handleRegisterClick,
      handleForgot,
      data,
      toastData,
      showToast,
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  margin: 0 0.4rem 0 0.4rem;
  .login {
    &__img {
      display: block;
      margin: 0 auto 0.4rem auto;
      width: 0.66rem;
      height: 0.66rem;
    }
    &__input {
      height: 0.48rem;
      margin-bottom: 0.16rem;
    }
    &__other {
      display: flex;
      text-align: center;
      button {
        border: none;
        background: none;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        letter-spacing: 0;
      }
      &__content {
        margin: 0 auto;
        margin-top: 0.16rem;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  input {
    height: 0.48rem;
    width: 100%;
    outline: none;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    box-sizing: border-box;
    padding-left: 0.16rem;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0;
    line-height: 24px;
  }
  .login-btn {
    border: none;
    color: #fff;
    height: 0.48rem;
    width: 100%;
    background: #0091ff;
    box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
    border-radius: 4px;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    line-height: 24px;
  }
}
</style>
