<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': currentTab === item.tab,
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleCategoryClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldprice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
        {{cartList?.[shopId]?.[item._id]?.count || 0}}
          <span class="product__number__plus" @click="() => {addItemToCart(shopId,item._id,item)}">
            +
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from "vue";
import { get } from "../../utils/request";
import { useRoute } from "vue-router";
import {useStore} from 'vuex'
// 代码抽离
const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];
//有关tab相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleCategoryClick = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, handleCategoryClick };
};

// 右侧栏目展示逻辑
const useShowContentEffect = (currentTab,shopId) => {
  const content = reactive({ list: [] });
  const getContentList = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data;
    }
  };
  watchEffect(() => {
    getContentList();
  });
  const { list } = toRefs(content);
  return { list };
};
// 使用购物车逻辑
const useCartEffect = () => {
  const store = useStore();
  const { cartList }= toRefs(store.state);
  const addItemToCart = (shopId,productId,productInfo) => {
    store.commit('addItemToCart',{
      shopId,productId,productInfo
    })
  }
  return {cartList,addItemToCart}
}
export default {
  name: "Content",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { currentTab, handleCategoryClick } = useTabEffect();
    const { list } = useShowContentEffect(currentTab,shopId);
    const {cartList,addItemToCart} = useCartEffect();
    return {
      list,
      categories,
      handleCategoryClick,
      currentTab,
      shopId,
      cartList,
      addItemToCart
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: 0.76rem;
  background: #f5f5f5;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 14px;
    color: #333;
    &--active {
      background: #fff;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      @include ellipsis;
    }
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: #333;
    }
    &__price {
      margin: 0;
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
        border: 0.01rem solid #000;
        color: #666;
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
</style>
