<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBack">&#xe609;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe883;</span>
        <input
          type="text"
          class="search__content__input"
          placeholder="请输入商品名称搜索"
        />
      </div>
    </div>
    <ShopInfo :item="data.item" :hideBorder="true" v-show="data.item.imgUrl" />
    <Content :shopName='data.item.name'/>
    <Cart />
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utils/request";
import ShopInfo from "../../components/ShopInfo.vue";
import Content from "../shop/Content.vue";
import Cart from '../shop/Cart.vue'
// 逻辑代码抽离
//获取商店详情逻辑
const useGetShopListEffect = () => {
  const route = useRoute();
  const data = reactive({ item: {} });
  const getShopList = async () => {
    const result = await get("/api/shop/`${route.params.id}`");
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
  return { data, getShopList, route };
};
//后退按钮逻辑
const useBackClickEffect = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return { router, handleBack };
};
export default {
  name: "Shop",
  components: { ShopInfo, Content,Cart},
  setup() {
    const { data, getShopList } = useGetShopListEffect();
    const { handleBack } = useBackClickEffect();
    getShopList();
    return { data, handleBack, getShopList };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 0.18rem;
}
.search {
  margin: 0.16rem 0 0.16rem 0;
  display: flex;
  height: 0.32rem;
  &__back {
    box-sizing: border-box;
    padding-right: 0.16rem;
    width: 0.28rem;
    line-height: 0.32rem;
    color: #b6b6b6;
    font-size: 0.26rem;
  }
  &__content {
    display: flex;
    width: 100%;
    background: #f5f5f5;
    border-radius: 16px;
    &__input {
      border: none;
      outline: none;
      background: none;
      font-size: 14px;
      color: #333333;
      line-height: 16px;
    }
    &__icon {
      line-height: 0.32rem;
      box-sizing: border-box;
      padding-left: 0.16rem;
      padding-right: 0.12rem;
      font-size: 0.18rem;
      color: #b7b7b7;
    }
  }
}
</style>
