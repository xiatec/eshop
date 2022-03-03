<template>
  <div class="success" v-show="showToast">
    <div class="iconfont tick">&#xec9e;</div>
    <div class="notice">支付成功，等待配送</div>
    <div class="iconfont esc" @click="handleCancel">&#xe61a;</div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: "Toast",
  props: ['showToast'],
  setup() {
    const router = useRouter();
    const handleCancel = () => {
      router.back();
    }
    return{handleCancel}
  }
};
</script>

<style lang="scss" scoped>
.success {
  // display: none;
  width: 3.01rem;
  height: 1.56rem;
  background: #ffffff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .tick {
    color: #000;
    font-size: 0.36rem;
    text-align: center;
    margin-top: 0.42rem;
  }
  .notice {
    font-size: 18px;
    color: #333333;
    text-align: center;
    margin-top: 0.24rem;
  }
  .esc {
    position: absolute;
    top: 0.12rem;
    right: 0.12rem;
  }
}
</style>
