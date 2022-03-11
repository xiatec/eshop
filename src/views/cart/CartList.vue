<template>
  <div class="cartList__top">我的购物车</div>
  <div class="cartList">
    <div
      class="cartList__items"
      v-for="(item, index) in content.list"
      :key="index"
    >
      <div class="order__shop">{{ item.shopName }}</div>
      <div
        class="order__items"
        v-for="(innerItem, innerIndex) in item.productList"
        :key="innerIndex"
      >
        <img :src="innerItem.imgUrl" alt="" class="order__items__img" />
        <div class="order__items__detail">
          <div class="order__items__title">{{ innerItem.name }}</div>
          <div class="order__items__price">
            <div class="order__items__highlight">{{ innerItem.price }}</div>
            <div class="order__items__total">¥99.9</div>
          </div>
        </div>
      </div>
      <div class="order__check">
        共计3件/1.4kg
        <span class="iconfont toggle">&#xe62a;</span>
      </div>
    </div>
  </div>
  <Docker :currentIndex="1" />
</template>
<script>
import Docker from "../../views/home/Docker.vue";
import { get } from "../../utils/request";
import { reactive } from "vue";
export default {
  components: { Docker },
  setup() {
    const content = reactive({ list: [] });
    const getCartList = async () => {
      const result = await get("/api/cartList");
      content.list = result.data;
      return { content };
    };
    getCartList();
    return { getCartList, content };
  },
};
</script>
<style lang="scss" scoped>
.cartList__top {
  text-align: center;
  margin: 0.16rem 0 0.11rem 0;
  font-size: 16px;
  color: #333333;
}
.cartList {
  position: absolute;
  overflow-y: scroll;
  bottom: 0.5rem;
  top: 0.64rem;
  left: 0;
  right: 0;
  background: #f8f8f8;
  &__items {
    margin-top: .16rem;
    margin-left: .18rem;
    margin-right: .18rem;
    background-color: #fff;
    border-radius: .04rem;
  }
}
.order {
  &__shop {
    font-size: 0.16rem;
    color: #333333;
    padding-top: .18rem;
    padding-left: .18rem;
    padding-bottom: .18rem;
  }
  &__items {
    margin-top: 0.16rem;
    display: flex;
    margin-left: .18rem;
    &__img {
      height: 0.46rem;
      width: 0.46rem;
    }
    &__detail {
      margin-left: 0.16rem;
      flex: 1;
    }
    &__title {
      font-size: 0.14rem;
      color: #333333;
    }
    &__price {
      margin-top: 0.06rem;
      display: flex;
      position: relative;
    }
    &__highlight {
      font-size: 0.14rem;
      color: #e93b3b;
      line-height: 0.2rem;
    }
    &__total {
      font-size: 0.14rem;
      color: #000000;
      text-align: right;
      line-height: 0.2rem;
      position: absolute;
      right: 0.18rem;
    }
  }
  &__check {
    width: 3.07rem;
    // height: 0.28rem;
    line-height: 0.28rem;
    background-color: #f5f5f5;
    font-size: 0.14rem;
    color: #999999;
    text-align: center;
    margin-top: 0.16rem;
    margin-left: .16rem;
    // position: absolute;
    // nargfbottom: .16rem;
  }
}
</style>
