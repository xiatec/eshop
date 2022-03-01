<template>
  <div class="docker">
    <div
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
      v-for="(item, index) in list"
      :key="index"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.src"></div>
        <div class="docker__title">{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  setup() {
    const list = [
      {
        src: "&#xe602;",
        title: "首页",
        to: { name: "Home" },
      },
      {
        src: "&#xe7e5;",
        title: "购物车",
        to: { name: "CartList" },
      },
      {
        src: "&#xe610;",
        title: "订单",
        to: { name: "Order" },
      },
      {
        src: "&#xe660;",
        title: "我的",
        to: { name: "Personal" },
      },
    ];
    return {
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/common.scss";
@import "../../style/mixins.scss";

.docker {
  position: absolute;
  display: flex;
  left: 0;
  box-sizing: border-box;
  padding: 0 0.18rem;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid $background-color;
  color: $content-fontcolor;
  // background-color: gray;
  &__item {
    flex: 1;
    text-align: center;
    margin: 0.07rem 0 0.06rem 0;
    a {
      color: #333;
      text-decoration: none;
    }
    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }
  &__title {
    color: $content-fontcolor;
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
  .iconfont {
    font-size: 0.18rem;
    // color: $content-fontcolor;
  }
}
</style>
