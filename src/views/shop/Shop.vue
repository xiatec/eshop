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
    <ShopInfo :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import ShopInfo from "../../components/ShopInfo.vue";
import {useRouter} from 'vue-router';
export default {
  name: "Shop",
  components: { ShopInfo },
  setup() {
    const router = useRouter();
    const item = {
      _id: "1",
      name: "沃尔玛",
      imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: "VIP尊享满89元减4元运费券",
    };
    const handleBack = () => {
        router.back();
    }
    return {
      item,
      handleBack
    };
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
