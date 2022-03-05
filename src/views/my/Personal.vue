<template>
  <div class="wrapper">
    <div class="inf__top">
      <img
        src="https://s4.ax1x.com/2022/03/04/bdF4IO.jpg"
        alt=""
        class="avatar"
      />
      <h3 class="inf__top__title">热心市民李先生</h3>
      <span class="iconfont vip">&#xe62e;</span>
      <div class="inf__top__id">1069643103</div>
      <div class="inf__top__redPackets">
        <div class="inf__redPackets__items">
          <div class="items__title">红包</div>
          <div class="items__detail">218</div>
        </div>
        <div class="inf__redPackets__items">
          <div class="items__title">优惠券</div>
          <div class="items__detail">12张</div>
        </div>
        <div class="inf__redPackets__items">
          <div class="items__title">鲜豆</div>
          <div class="items__detail">88</div>
        </div>
        <div class="inf__redPackets__items">
          <div class="items__title">白条</div>
          <div class="items__detail">1000</div>
        </div>
      </div>
    </div>
    <div class="inf__settings">
      <div class="inf__settings__item">
        <img
          src="https://s4.ax1x.com/2022/03/05/bdARUK.png"
          alt=""
          class="inf__settings__item__img money"
        />
        <span class="inf__settings__item__desc">我的钱包</span>
        <span class="iconfont">&#xe629;</span>
      </div>
      <div class="inf__settings__item">
        <img
          src="https://s4.ax1x.com/2022/03/05/bdeXes.png"
          alt=""
          class="inf__settings__item__img address"
        />
        <span class="inf__settings__item__desc" @click="handleAddress"
          >我的地址</span
        >
        <span class="iconfont">&#xe629;</span>
      </div>
      <div class="inf__settings__item">
        <img
          src="https://s4.ax1x.com/2022/03/05/bdmEwR.png"
          alt=""
          class="inf__settings__item__img help"
        />
        <span class="inf__settings__item__desc">客服与帮助</span>
        <span class="iconfont">&#xe629;</span>
      </div>
    </div>
  </div>
  <Docker :currentIndex="3" />
</template>
<script>
import Docker from "../../views/home/Docker.vue";
import { useRouter } from "vue-router";
export default {
  name: "My",
  components: { Docker },
  setup() {
    const router = useRouter();
    const handleAddress = () => {
      router.push({ name: "myAddress" });
    };
    return { handleAddress };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 2.5rem;
  background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
  border-bottom-left-radius: 90% 40%;
  border-bottom-right-radius: 90% 40%;
  .inf__top {
    position: absolute;
    background: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    // width: 3.39rem;
    height: 2.03rem;
    left: 0.18rem;
    right: 0.18rem;
    top: 1.08rem;
    .avatar {
      // display: block;
      z-index: 1;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -50%;
      margin-top: 0.46rem;
      background: transparent;
      border-radius: 50%;
      width: 0.92rem;
      height: 0.92rem;
      // border-radius: 50%;
      // overflow:hidden;
    }
    &__title {
      position: relative;
      font-size: 24px;
      color: #262628;
      letter-spacing: 0.19px;
      text-align: center;
      line-height: 36px;
      margin-top: 0.59rem;
    }
    .iconfont {
      position: absolute;
      float: right;
      right: 0.44rem;
      // margin-top: .71rem;
      top: 0.7rem;
      color: #0091ff;
    }
    &__id {
      text-align: center;
      font-size: 14px;
      color: #c1c0c9;
      margin-top: -0.2rem;
      margin-bottom: 0.12rem;
    }
    &__redPackets {
      border-top: 1px solid #f1f1f1;
      display: flex;
    }
    .inf__redPackets__items {
      flex: 1;
      text-align: center;
      margin-top: 0.12rem;
    }
    .items__title {
      margin-bottom: 0.03rem;
      font-size: 12px;
      color: #c1c0c9;
      text-align: center;
    }
    .items__detail {
      margin-bottom: 0.16rem;
      line-height: 0.28rem;
      font-size: 20px;
      color: #262628;
      text-align: center;
    }
  }
  .inf__settings {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 1.96rem;
    height: 1.46rem;
    background: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    &__item {
      margin-top: 0.16rem;
      margin-left: 0.2rem;
      margin-bottom: 0.26rem;
      height: 0.2rem;
      &__img {
        display: inline-block;
        width: 0.22rem;
        height: 0.22rem;
        border-radius: 8px;
        line-height: 0.2rem;
        margin-bottom: -0.05rem;
      }
      &__desc {
        font-size: 14px;
        color: #262626;
        margin-top: -0.2rem;
        box-sizing: border-box;
        padding-left: 0.12rem;
      }
      .iconfont {
        float: right;
        margin-right: 0.16rem;
        color: #c2c4ca;
      }
      .money {
        background: #ed4a47;
      }
      .address {
        background: #32c5ff;
      }
      .help {
        background: rgba(144, 19, 254, 0.92);
      }
    }
  }
}
</style>
