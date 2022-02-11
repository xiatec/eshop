<template>
  <div class="wrapper">
    <div class="login">
      <img
        src="http://www.dell-lee.com/imgs/vue3/user.png"
        alt=""
        class="login__img"
      />
      <div class="login__input">
        <input type="text" class="username" placeholder="请输入手机号" />
      </div>
      <div class="login__input">
        <input type="text" class="password" placeholder="请输入密码" />
      </div>
      <div class="login__input">
        <input type="text" class="password" placeholder="确认密码" />
      </div>
      <div class="login__button">
        <button class="login-btn" @click="handleRegister">注册</button>
      </div>
      <div class="login__other">
        <div class="login__other__content">
          <button @click="handleLoginClick">已有账号去登陆</button>
        </div>
      </div>
    </div>
  </div>
  <Toast v-if="toastData.showToast" :message="toastData.toastmessage"/>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast.vue";
// 注册逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({
    username: "",
    password: "",
    ensurement: "",
  });
  const handleRegister = async () => {
    try {
      const result = await post("/api/user/register", {
        username: data.username,
        password: data.password,
      });
      if (result?.data?.errno === 0) {
        showToast("注册成功");
      } else {
        showToast("注册失败");
      }
    } catch (error) {
      showToast("请求失败");
    }
  };
  return { handleRegister, data };
};
// 已有账号去登录逻辑
const useLoginClickEffect = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({name: 'Login'})
  }
  return {handleLoginClick}
} 
export default {
  name: "Register",
  components: { Toast },
  setup() {
    const { showToast, toastData } = useToastEffect();
    const { handleRegister, data } = useRegisterEffect(showToast);
    const {handleLoginClick} = useLoginClickEffect();
    return {
      showToast,
      toastData,
      handleRegister,
      handleLoginClick,
      data,
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
