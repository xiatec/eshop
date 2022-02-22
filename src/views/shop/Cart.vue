<template>
  <div class="mask" v-if="showCart"></div>
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div
          class="product__header__select iconfont"
          v-html="allChecked ? '&#xe70f;' : '&#xe6f7;'"
          @click="() => setCartAll(shopId)"
        ></div>
        <div class="product__header__all">全选</div>
        <div
          class="product__header__clear"
          @click="() => clearCartItem(shopId)"
        >
          清空购物车
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <div
            class="product__item__check iconfont"
            v-html="item.check ? '&#xe70f;' : '&#xe6f7;'"
            @click="() => changeCartItemCheck(shopId, item._id)"
          />
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, -1);
                }
              "
              >-</span
            >
            {{ item.count || 0 }}
            <span
              class="product__number__plus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, 1);
                }
              "
              >+</span
            >
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
          @click="handleCartShow"
        />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{ price }}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "../shop/CommonCartEffect";

// 获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const store = useStore();
  const cartList = store.state.cartList;
  const showCart = ref(false);

  const handleCartShow = () => {
    showCart.value = !showCart.value;
    return showCart;
  };

  const total = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count;
      }
    }
    return count;
  });

  const price = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        if (product.check) {
          count += product.count * product.price;
        }
      }
    }
    return count.toFixed(2);
  });

  const productList = computed(() => {
    const productList = cartList[shopId] || [];
    return productList;
  });
  const allChecked = computed(() => {
    const productList = cartList[shopId];
    let result = true;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        if (product.count > 0 && !product.check) {
          result = false;
        }
      }
    }
    return result;
  });
  const changeCartItemCheck = (shopId, productId) => {
    store.commit("changeCartItemCheck", {
      shopId,
      productId,
    });
  };
  const clearCartItem = (shopId) => {
    store.commit("clearCartItem", { shopId});
  };
  const setCartAll = (shopId) => {
    store.commit("setCartAll", { shopId });
  };

  return {
    total,
    price,
    productList,
    changeCartItemCheck,
    clearCartItem,
    allChecked,
    setCartAll,
    showCart,
    handleCartShow,
  };
};

export default {
  name: "Cart",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { changeCartItemInfo } = useCommonCartEffect();
    const {
      total,
      price,
      productList,
      changeCartItemCheck,
      clearCartItem,
      allChecked,
      setCartAll,
      handleCartShow,
      showCart,
    } = useCartEffect(shopId);
    return {
      total,
      price,
      shopId,
      productList,
      changeCartItemInfo,
      changeCartItemCheck,
      clearCartItem,
      allChecked,
      setCartAll,
      handleCartShow,
      showCart,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,.5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: #fff;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #fff;
  &__header {
    height: 0.52rem;
    border: 1px solid #f1f1f1;
    display: flex;
    line-height: 0.52rem;
    &__select {
      color: #0091ff;
      margin-left: 0.16rem;
      font-size: 0.2rem;
    }
    &__all {
      margin-left: 0.084rem;
      font-size: 14px;
      color: #333333;
    }
    &__clear {
      flex: 1;
      text-align: right;
      margin-right: 0.18rem;
      font-size: 14px;
      color: #333333;
      text-align: right;
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #fff;
    &__check {
      color: #0091ff;
      line-height: 0.5rem;
      font-size: 0.2rem;
      margin-right: 0.2rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      @include ellipsis;
    }
    &__price {
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #e93b3b;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.16rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid #666;
        color: #333;
        margin-right: 0.05rem;
      }
      &__plus {
        background: #0091ff;
        color: #fff;
        margin-left: 0.05rem;
      }
    }
  }
}
.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid #fff;
  line-height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      left: 0.46rem;
      top: 0.04rem;
      padding: 0 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: #e93b3b;
      border-radius: 0.1rem;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: #333;
    font-size: 0.12rem;
    &__price {
      line-height: 0.49rem;
      color: #e93b3b;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: #4fb0f9;
    text-align: center;
    color: #fff;
    font-size: 0.14rem;
  }
}
</style>
