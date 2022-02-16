<template>
  <div class="cart">
    <div class="cart__left">
      <div class="cart__img">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="" />
        <p class="notice">1</p>
      </div>
      <div class="cart__counts">
        <span class="cart__desc">总计： </span>
        <span class="cart__price">¥128</span>
      </div>
    </div>
    <div class="cart__right">
      <div class="submit">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.5rem;
  &__left {
    display: flex;
    width: 2.77rem;
    .cart__img img {
      position: relative;
      height: 0.26rem;
      width: 0.28rem;
      margin-top: 0.12rem;
      margin-left: 0.24rem;
    }
    .notice {
        position: absolute;
      height: 0.2rem;
      width: 0.2rem;
      background: #e93b3b;
      height: 0.14rem;
      width: 0.14rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.2rem;
      font-size: .08rem;
      color: #ffffff;
      line-height: .14rem;
      bottom: .26rem;
      left: .47rem;
    }
    .cart__counts {
      line-height: 0.5rem;
      margin-left: 0.32rem;
      .cart__desc {
        font-size: 12px;
        color: #333333;
      }
      .cart__price {
        font-size: 18px;
        color: #e93b3b;
      }
    }
  }
  &__right {
    flex: 1;
    .submit {
      background: #4fb0f9;
      text-align: center;
      line-height: 0.5rem;
      font-size: 14px;
      color: #ffffff;
    }
  }
}
</style>
